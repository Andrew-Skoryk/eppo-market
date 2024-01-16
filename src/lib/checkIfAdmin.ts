"server-only";
"use server";

export function checkIfAdmin(id: string) {
  const adminIds = process.env.ADMIN_USER_IDS?.split(",");

  return adminIds?.includes(id);
}
