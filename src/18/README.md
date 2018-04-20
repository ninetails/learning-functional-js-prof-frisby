# Vídeo 18 - Applicative Functors for multiple arguments
> https://egghead.io/lessons/angular-1-x-applicative-functors-for-multiple-arguments

> F(x).map(f) == F(f).ap(F(x))

## For example

```
const liftA2 = (f, fx, fy) =>
  F(f).ap(fx).ap(fy)
```

is equivalent to:

```
const liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy)
```

without mention any Functors

## And so on

```
const liftA3 = (f, fx, fy, fz) =>
  fx.map(f).ap(fy).ap(fz)
```
