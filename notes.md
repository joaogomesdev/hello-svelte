# Notes

## Usefull docs

- [Loading data](https://kit.svelte.dev/docs/load)

## Using parent Layout Data

We can use data from the parent that return data on the Layout usign `parent()` returned by the `event` on the `load` function.

```ts
export const load: PageServerLoad = async ({ parent }) => {
  const parentData = await parent();
  return parentData;
};
```

But we need to have attention to a watterfall network problem if we need to use an depending value, for `e.g`:

```ts
export const load: PageServerLoad = async ({ parent }) => {
  // 1. Get the data from the parent first - Because parent 'load' function runs first ⏳
  const parentData = await parent();

  // 2. Because you need the parent data - This 'load' function is now blocked 🛑
  const data = await getDataFromOtherSide(parentData);
  return parentData;

  // This is bad because 'load' should run in paralell
};
```

Here is an example how we can solve this:

```ts
export const load: PageServerLoad = async ({ parent }) => {
  // 1. This 'load' function fires off 🏃‍♂️
  const data = await getData();

  // 2. The parent 'load' function fires off 🏃‍♂️
  const parentData = await parent();
  return parentData;

  // Now the functions are running in paralell
};
```
