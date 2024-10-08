-- CreateTable
CREATE TABLE `apikey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `api_key` VARCHAR(50) NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `apikey_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `apikey` ADD CONSTRAINT `apikey_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
