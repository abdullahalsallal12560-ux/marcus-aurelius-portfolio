import { createContext } from "react";

/**
 * Split out from the provider so that file exports a component and nothing
 * else, which is what React Fast Refresh needs to swap it without a reload.
 */
export const LocaleContext = createContext(null);
