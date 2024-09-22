export const handlePending = (state: any) => {
  state.loading = true;
};

export const handleRejected = (state: any) => {
  state.loading = false;
};

export const handleFulfilled = (
  state: any,
  action: any,
  sortFunction: Function,
) => {
  state.items = action.payload.sort(sortFunction);
  state.loading = false;
};
