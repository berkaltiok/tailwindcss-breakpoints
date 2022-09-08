# tailwindcss-breakpoints

Advanced breakpoint system for TailwindCSS

| Variant | Rule                               | Description                                              |
| :------ | :--------------------------------- | :------------------------------------------------------- |
| <sm     | @media (max-width: 640px) { ... }  | Enable utility when the screen width is less than 640px  |
| <md     | @media (max-width: 768px) { ... }  | Enable utility when the screen width is less than 768px  |
| <lg     | @media (max-width: 1024px) { ... } | Enable utility when the screen width is less than 1024px |
| <xl     | @media (max-width: 1280px) { ... } | Enable utility when the screen width is less than 1280px |
| <2xl    | @media (max-width: 1536px) { ... } | Enable utility when the screen width is less than 1536px |

## Example

```
text-lg p-8 <sm:text-md <sm:p-4
```
