import { appRouter, AppRouter } from "../../../backend/router";
import { inferProcedureOutput } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "../../../backend/context";

// export API handler
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext,    
  });
// export type inferQueryResponse<
//   TRouteKey extends keyof AppRouter["_def"]["queries"]
// > = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;