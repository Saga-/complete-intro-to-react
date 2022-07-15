# Course Notes

* Component functions have to be fast & pure (e.g. App)
* The React paradigm seems to not allow children alter state within parent components (https://frontendmasters.com/courses/complete-react-v7/components/ 10:45)
    * Data flows one way down, from top to bottom (parent -> children -> grandchildren etc)
    * Redux, context, seems to alleviate this
* `useEffect()` is basically `ngOnInit` when no dependencies are passed in (i.e. `[]`)
    * But it also acts as `ngOnChanges` when a dependency is passed on, running the hook whenever its state changes (e.g. `[animal]`)
* Custom hooks encapsulate state behaviour into its own function. See: `useBreedList.js`
    * All should start with 'useX'