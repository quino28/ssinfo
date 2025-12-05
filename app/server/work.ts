'use server';

import { prisma } from "@/lib/prisma";

export async function getWorks() {
  const works = await prisma.work.findMany();
  return works;
}
