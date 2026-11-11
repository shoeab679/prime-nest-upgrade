import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database helpers
vi.mock("./db", () => ({
  createLead: vi.fn().mockResolvedValue({ id: 1, name: "Test Lead" }),
  createInquiry: vi.fn().mockResolvedValue({ id: 1, name: "Test Inquiry" }),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

// Mock the notification helper
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("leads.create", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("creates a lead with required fields and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.create({
      name: "Priya Sharma",
      phone: "+91 9876543210",
    });

    expect(result).toEqual({ success: true });
  });

  it("creates a lead with all optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.create({
      name: "Rajesh Kumar",
      phone: "+91 9876543210",
      email: "rajesh@example.com",
      serviceType: "modular-kitchen",
      message: "City: Hyderabad, Property: 3 BHK, Budget: ₹10L–20L",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects a lead without a name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.create({
        name: "",
        phone: "+91 9876543210",
      })
    ).rejects.toThrow();
  });

  it("rejects a lead without a phone number", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.create({
        name: "Test User",
        phone: "",
      })
    ).rejects.toThrow();
  });
});

describe("inquiries.create", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("creates an inquiry with required fields and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.inquiries.create({
      name: "Anjali Reddy",
      phone: "+91 9876543210",
    });

    expect(result).toEqual({ success: true });
  });

  it("creates an inquiry with all optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.inquiries.create({
      name: "Suresh Babu",
      phone: "+91 9876543210",
      email: "suresh@example.com",
      serviceType: "full-home",
      message: "Looking for complete 3BHK interior design in Jubilee Hills",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects an inquiry without a name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.inquiries.create({
        name: "",
        phone: "+91 9876543210",
      })
    ).rejects.toThrow();
  });

  it("rejects an inquiry without a phone number", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.inquiries.create({
        name: "Test User",
        phone: "",
      })
    ).rejects.toThrow();
  });
});
