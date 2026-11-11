import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createLead, createInquiry } from "./db";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  leads: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().optional(),
        phone: z.string().min(1, "Phone is required"),
        serviceType: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createLead({
            name: input.name,
            email: input.email,
            phone: input.phone,
            serviceType: input.serviceType,
            message: input.message,
            status: "new",
          });

          await notifyOwner({
            title: "New Lead Captured",
            content: `New lead from ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email || "Not provided"}\nService: ${input.serviceType || "Not specified"}`,
          });

          return { success: true };
        } catch (error) {
          console.error("Failed to create lead:", error);
          throw error;
        }
      }),
  }),

  inquiries: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().optional(),
        phone: z.string().min(1, "Phone is required"),
        serviceType: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createInquiry({
            name: input.name,
            email: input.email,
            phone: input.phone,
            serviceType: input.serviceType,
            message: input.message,
            status: "new",
          });

          await notifyOwner({
            title: "New Inquiry Received",
            content: `New inquiry from ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email || "Not provided"}\nService: ${input.serviceType || "Not specified"}\nMessage: ${input.message || "No message"}`,
          });

          return { success: true };
        } catch (error) {
          console.error("Failed to create inquiry:", error);
          throw error;
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
