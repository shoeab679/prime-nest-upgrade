ALTER TABLE `inquiries` MODIFY COLUMN `email` varchar(320);--> statement-breakpoint
ALTER TABLE `inquiries` MODIFY COLUMN `serviceType` varchar(100);--> statement-breakpoint
ALTER TABLE `inquiries` MODIFY COLUMN `message` text;--> statement-breakpoint
ALTER TABLE `leads` MODIFY COLUMN `email` varchar(320);