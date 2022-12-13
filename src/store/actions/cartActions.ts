import { ICart } from "../../modules/modules";

export const getCurrentCard = (
  slug: string,
  carts: { [slug: string]: ICart | undefined }
): ICart | null => carts[slug] ?? null;
