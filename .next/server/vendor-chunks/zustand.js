"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zustand";
exports.ids = ["vendor-chunks/zustand"];
exports.modules = {

/***/ "(ssr)/./node_modules/zustand/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/zustand/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction createStore(createState) {\n  let state;\n  const listeners = /* @__PURE__ */ new Set();\n  const setState = (partial, replace) => {\n    const nextState = typeof partial === \"function\" ? partial(state) : partial;\n    if (nextState !== state) {\n      const previousState = state;\n      state = replace ? nextState : Object.assign({}, state, nextState);\n      listeners.forEach((listener) => listener(state, previousState));\n    }\n  };\n  const getState = () => state;\n  const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {\n    console.warn(\"[DEPRECATED] Please use `subscribeWithSelector` middleware\");\n    let currentSlice = selector(state);\n    function listenerToAdd() {\n      const nextSlice = selector(state);\n      if (!equalityFn(currentSlice, nextSlice)) {\n        const previousSlice = currentSlice;\n        listener(currentSlice = nextSlice, previousSlice);\n      }\n    }\n    listeners.add(listenerToAdd);\n    return () => listeners.delete(listenerToAdd);\n  };\n  const subscribe = (listener, selector, equalityFn) => {\n    if (selector || equalityFn) {\n      return subscribeWithSelector(listener, selector, equalityFn);\n    }\n    listeners.add(listener);\n    return () => listeners.delete(listener);\n  };\n  const destroy = () => listeners.clear();\n  const api = { setState, getState, subscribe, destroy };\n  state = createState(setState, getState, api);\n  return api;\n}\n\nconst isSSR = typeof window === \"undefined\" || !window.navigator || /ServerSideRendering|^Deno\\//.test(window.navigator.userAgent);\nconst useIsomorphicLayoutEffect = isSSR ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;\nfunction create(createState) {\n  const api = typeof createState === \"function\" ? createStore(createState) : createState;\n  const useStore = (selector = api.getState, equalityFn = Object.is) => {\n    const [, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((c) => c + 1, 0);\n    const state = api.getState();\n    const stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);\n    const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selector);\n    const equalityFnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(equalityFn);\n    const erroredRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    const currentSliceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    if (currentSliceRef.current === void 0) {\n      currentSliceRef.current = selector(state);\n    }\n    let newStateSlice;\n    let hasNewStateSlice = false;\n    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {\n      newStateSlice = selector(state);\n      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);\n    }\n    useIsomorphicLayoutEffect(() => {\n      if (hasNewStateSlice) {\n        currentSliceRef.current = newStateSlice;\n      }\n      stateRef.current = state;\n      selectorRef.current = selector;\n      equalityFnRef.current = equalityFn;\n      erroredRef.current = false;\n    });\n    const stateBeforeSubscriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);\n    useIsomorphicLayoutEffect(() => {\n      const listener = () => {\n        try {\n          const nextState = api.getState();\n          const nextStateSlice = selectorRef.current(nextState);\n          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {\n            stateRef.current = nextState;\n            currentSliceRef.current = nextStateSlice;\n            forceUpdate();\n          }\n        } catch (error) {\n          erroredRef.current = true;\n          forceUpdate();\n        }\n      };\n      const unsubscribe = api.subscribe(listener);\n      if (api.getState() !== stateBeforeSubscriptionRef.current) {\n        listener();\n      }\n      return unsubscribe;\n    }, []);\n    const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(sliceToReturn);\n    return sliceToReturn;\n  };\n  Object.assign(useStore, api);\n  useStore[Symbol.iterator] = function() {\n    console.warn(\"[useStore, api] = create() is deprecated and will be removed in v4\");\n    const items = [useStore, api];\n    return {\n      next() {\n        const done = items.length <= 0;\n        return { value: items.shift(), done };\n      }\n    };\n  };\n  return useStore;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNGOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsNENBQVMsR0FBRyxrREFBZTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVU7QUFDdEM7QUFDQSxxQkFBcUIsNkNBQU07QUFDM0Isd0JBQXdCLDZDQUFNO0FBQzlCLDBCQUEwQiw2Q0FBTTtBQUNoQyx1QkFBdUIsNkNBQU07QUFDN0IsNEJBQTRCLDZDQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUNBQXVDLDZDQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksb0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2NzX3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXguanM/NmFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZURlYnVnVmFsdWUsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShjcmVhdGVTdGF0ZSkge1xuICBsZXQgc3RhdGU7XG4gIGNvbnN0IGxpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IHNldFN0YXRlID0gKHBhcnRpYWwsIHJlcGxhY2UpID0+IHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB0eXBlb2YgcGFydGlhbCA9PT0gXCJmdW5jdGlvblwiID8gcGFydGlhbChzdGF0ZSkgOiBwYXJ0aWFsO1xuICAgIGlmIChuZXh0U3RhdGUgIT09IHN0YXRlKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1N0YXRlID0gc3RhdGU7XG4gICAgICBzdGF0ZSA9IHJlcGxhY2UgPyBuZXh0U3RhdGUgOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoc3RhdGUsIHByZXZpb3VzU3RhdGUpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4gc3RhdGU7XG4gIGNvbnN0IHN1YnNjcmliZVdpdGhTZWxlY3RvciA9IChsaXN0ZW5lciwgc2VsZWN0b3IgPSBnZXRTdGF0ZSwgZXF1YWxpdHlGbiA9IE9iamVjdC5pcykgPT4ge1xuICAgIGNvbnNvbGUud2FybihcIltERVBSRUNBVEVEXSBQbGVhc2UgdXNlIGBzdWJzY3JpYmVXaXRoU2VsZWN0b3JgIG1pZGRsZXdhcmVcIik7XG4gICAgbGV0IGN1cnJlbnRTbGljZSA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICBmdW5jdGlvbiBsaXN0ZW5lclRvQWRkKCkge1xuICAgICAgY29uc3QgbmV4dFNsaWNlID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgaWYgKCFlcXVhbGl0eUZuKGN1cnJlbnRTbGljZSwgbmV4dFNsaWNlKSkge1xuICAgICAgICBjb25zdCBwcmV2aW91c1NsaWNlID0gY3VycmVudFNsaWNlO1xuICAgICAgICBsaXN0ZW5lcihjdXJyZW50U2xpY2UgPSBuZXh0U2xpY2UsIHByZXZpb3VzU2xpY2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyVG9BZGQpO1xuICAgIHJldHVybiAoKSA9PiBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyVG9BZGQpO1xuICB9O1xuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIsIHNlbGVjdG9yLCBlcXVhbGl0eUZuKSA9PiB7XG4gICAgaWYgKHNlbGVjdG9yIHx8IGVxdWFsaXR5Rm4pIHtcbiAgICAgIHJldHVybiBzdWJzY3JpYmVXaXRoU2VsZWN0b3IobGlzdGVuZXIsIHNlbGVjdG9yLCBlcXVhbGl0eUZuKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICB9O1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4gbGlzdGVuZXJzLmNsZWFyKCk7XG4gIGNvbnN0IGFwaSA9IHsgc2V0U3RhdGUsIGdldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfTtcbiAgc3RhdGUgPSBjcmVhdGVTdGF0ZShzZXRTdGF0ZSwgZ2V0U3RhdGUsIGFwaSk7XG4gIHJldHVybiBhcGk7XG59XG5cbmNvbnN0IGlzU1NSID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAvU2VydmVyU2lkZVJlbmRlcmluZ3xeRGVub1xcLy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5jb25zdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gaXNTU1IgPyB1c2VFZmZlY3QgOiB1c2VMYXlvdXRFZmZlY3Q7XG5mdW5jdGlvbiBjcmVhdGUoY3JlYXRlU3RhdGUpIHtcbiAgY29uc3QgYXBpID0gdHlwZW9mIGNyZWF0ZVN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyBjcmVhdGVTdG9yZShjcmVhdGVTdGF0ZSkgOiBjcmVhdGVTdGF0ZTtcbiAgY29uc3QgdXNlU3RvcmUgPSAoc2VsZWN0b3IgPSBhcGkuZ2V0U3RhdGUsIGVxdWFsaXR5Rm4gPSBPYmplY3QuaXMpID0+IHtcbiAgICBjb25zdCBbLCBmb3JjZVVwZGF0ZV0gPSB1c2VSZWR1Y2VyKChjKSA9PiBjICsgMSwgMCk7XG4gICAgY29uc3Qgc3RhdGUgPSBhcGkuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCBzdGF0ZVJlZiA9IHVzZVJlZihzdGF0ZSk7XG4gICAgY29uc3Qgc2VsZWN0b3JSZWYgPSB1c2VSZWYoc2VsZWN0b3IpO1xuICAgIGNvbnN0IGVxdWFsaXR5Rm5SZWYgPSB1c2VSZWYoZXF1YWxpdHlGbik7XG4gICAgY29uc3QgZXJyb3JlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgY3VycmVudFNsaWNlUmVmID0gdXNlUmVmKCk7XG4gICAgaWYgKGN1cnJlbnRTbGljZVJlZi5jdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGN1cnJlbnRTbGljZVJlZi5jdXJyZW50ID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGVTbGljZTtcbiAgICBsZXQgaGFzTmV3U3RhdGVTbGljZSA9IGZhbHNlO1xuICAgIGlmIChzdGF0ZVJlZi5jdXJyZW50ICE9PSBzdGF0ZSB8fCBzZWxlY3RvclJlZi5jdXJyZW50ICE9PSBzZWxlY3RvciB8fCBlcXVhbGl0eUZuUmVmLmN1cnJlbnQgIT09IGVxdWFsaXR5Rm4gfHwgZXJyb3JlZFJlZi5jdXJyZW50KSB7XG4gICAgICBuZXdTdGF0ZVNsaWNlID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgaGFzTmV3U3RhdGVTbGljZSA9ICFlcXVhbGl0eUZuKGN1cnJlbnRTbGljZVJlZi5jdXJyZW50LCBuZXdTdGF0ZVNsaWNlKTtcbiAgICB9XG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoaGFzTmV3U3RhdGVTbGljZSkge1xuICAgICAgICBjdXJyZW50U2xpY2VSZWYuY3VycmVudCA9IG5ld1N0YXRlU2xpY2U7XG4gICAgICB9XG4gICAgICBzdGF0ZVJlZi5jdXJyZW50ID0gc3RhdGU7XG4gICAgICBzZWxlY3RvclJlZi5jdXJyZW50ID0gc2VsZWN0b3I7XG4gICAgICBlcXVhbGl0eUZuUmVmLmN1cnJlbnQgPSBlcXVhbGl0eUZuO1xuICAgICAgZXJyb3JlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdGVCZWZvcmVTdWJzY3JpcHRpb25SZWYgPSB1c2VSZWYoc3RhdGUpO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbmV4dFN0YXRlID0gYXBpLmdldFN0YXRlKCk7XG4gICAgICAgICAgY29uc3QgbmV4dFN0YXRlU2xpY2UgPSBzZWxlY3RvclJlZi5jdXJyZW50KG5leHRTdGF0ZSk7XG4gICAgICAgICAgaWYgKCFlcXVhbGl0eUZuUmVmLmN1cnJlbnQoY3VycmVudFNsaWNlUmVmLmN1cnJlbnQsIG5leHRTdGF0ZVNsaWNlKSkge1xuICAgICAgICAgICAgc3RhdGVSZWYuY3VycmVudCA9IG5leHRTdGF0ZTtcbiAgICAgICAgICAgIGN1cnJlbnRTbGljZVJlZi5jdXJyZW50ID0gbmV4dFN0YXRlU2xpY2U7XG4gICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBlcnJvcmVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB1bnN1YnNjcmliZSA9IGFwaS5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgICAgaWYgKGFwaS5nZXRTdGF0ZSgpICE9PSBzdGF0ZUJlZm9yZVN1YnNjcmlwdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHNsaWNlVG9SZXR1cm4gPSBoYXNOZXdTdGF0ZVNsaWNlID8gbmV3U3RhdGVTbGljZSA6IGN1cnJlbnRTbGljZVJlZi5jdXJyZW50O1xuICAgIHVzZURlYnVnVmFsdWUoc2xpY2VUb1JldHVybik7XG4gICAgcmV0dXJuIHNsaWNlVG9SZXR1cm47XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU3RvcmUsIGFwaSk7XG4gIHVzZVN0b3JlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbdXNlU3RvcmUsIGFwaV0gPSBjcmVhdGUoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjRcIik7XG4gICAgY29uc3QgaXRlbXMgPSBbdXNlU3RvcmUsIGFwaV07XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBpdGVtcy5sZW5ndGggPD0gMDtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGl0ZW1zLnNoaWZ0KCksIGRvbmUgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICByZXR1cm4gdXNlU3RvcmU7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZSBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/index.js\n");

/***/ })

};
;