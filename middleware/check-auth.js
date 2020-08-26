export default function(context) {
  context.store.dispatch("initAuth", context.req); // process.client - check app is running on client/server
}
