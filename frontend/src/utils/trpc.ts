import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../backend/src/trpc";

export const trpc = createTRPCReact<AppRouter>({
  overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn();
        await opts.queryClient.invalidateQueries();
      },
    },
  },
});
