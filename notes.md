# Course Notes

* Component functions have to be fast & pure (e.g. App)
* The React paradigm seems to not allow children alter state within parent components (https://frontendmasters.com/courses/complete-react-v7/components/ 10:45)
    * Data flows one way down, from top to bottom (parent -> children -> grandchildren etc)
    * Redux, context, seems to alleviate this
* `useEffect()` is basically `ngOnInit` when no dependencies are passed in (i.e. `[]`)
    * But it also acts as `ngOnChanges` when a dependency is passed on, running the hook whenever its state changes (e.g. `[animal]`)
* Custom hooks encapsulate state behaviour into its own function. See: `useBreedList.js`
    * All should start with 'useX'
* As a guideline, start looking to break down components when they approach the 100-200 LOC mark
* Code in braces can only be an *expression*. That is, *not* a statement/assignment.
* props.X vs { x, x, x } is a stylistic choice. The latter looks more elegant imo.
* "Don't solve problems before you have them" (on performance and a general rule of thumb)
* Ternarys are common in React code for rendering despite being ugly and difficult to read

## Open Questions
1. How do services tie in? Custom Hooks?
2. How do we manage child/grandchild to parent communication/mutation?