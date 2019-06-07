export default function (ctx) {
  return ctx.store.dispatch('auth/check');
}