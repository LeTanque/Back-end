import { prisma } from '../../generated/prisma-client';

export const Project = {
	async profile(parent) {
		return await prisma.project({ id: parent.id }).profile();
	},
	async donations(parent) {
		return await prisma.project({ id: parent.id }).donations();
	},
	async likes(parent) {
		return await prisma.project({ id: parent.id }).likes();
	},
	async comments(parent) {
		return await prisma.project({ id: parent.id }).comments();
	},
	async images(parent) {
		return await prisma.project({ id: parent.id }).images();
	},
};
