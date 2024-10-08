-- CreateTable
CREATE TABLE `chat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(200) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `sender_id` INTEGER NOT NULL,
    `to_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chat` ADD CONSTRAINT `chat_sender_id_fkey` FOREIGN KEY (`sender_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat` ADD CONSTRAINT `chat_to_id_fkey` FOREIGN KEY (`to_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
