export const handleError = (
  myMessage: string,
  err: any,
  rejectWithValue: any
) => {
  console.log(myMessage);
  console.log(err);

  return rejectWithValue({
    payload: "Failed",
    error: true,
  });
};
