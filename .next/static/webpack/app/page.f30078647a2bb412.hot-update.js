"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/title/index.js":
/*!***************************************!*\
  !*** ./src/components/title/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ \"(app-pages-browser)/./node_modules/reactstrap/esm/Button.js\");\n/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/subtitle */ \"(app-pages-browser)/./src/components/subtitle/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.js\");\n/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_style.min.css\");\n/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_editor.pkgd.min.css\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-froala-wysiwyg */ \"(app-pages-browser)/./node_modules/react-froala-wysiwyg/index.js\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"(app-pages-browser)/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* harmony import */ var _testdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../testdata */ \"(app-pages-browser)/./src/components/testdata.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Title() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    let counterSlice = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth.titleCounter);\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH1, setShowH1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH2, setShowH2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [titleCreate, setTitleCreate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [titleName, setTitleName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [arr, setArr] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 37\n        }, this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 47\n        }, this)\n    ]);\n    const [t_number, setT_number] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    let [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const handleClickCreate = ()=>{\n        setCounter(counterSlice);\n        setTitleCreate(true);\n        console.log(\"Counter Slice = \", counterSlice);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        return ()=>{\n            console.log(\"Компонент удален\");\n        };\n    }, []);\n    const handleComponentClick = ()=>{\n        setShowComponent(false);\n    };\n    const handleTitleinputChange = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        console.log(\"handleclick start\", e.target.value);\n        setTitleName(e.target.value);\n    };\n    const handleClick = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        const formData = new FormData();\n        formData.append(\"name\", titleName);\n        formData.append(\"t_number\", counter);\n        await dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.addTitleAction)(formData));\n        console.log(\"counter slice====\", counterSlice);\n        await dispatch(_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.setCounterReducer);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCounter(counterSlice);\n    }, [\n        counterSlice\n    ]);\n    const handleClickButtonPlus = (e)=>{\n        console.log(\"plus button start\");\n        setShowH1(true);\n    };\n    const handleClickButtonCreateTitle = (e)=>{\n        console.log(\"conter========\", counter);\n        setCounter(Number(counter) + 1);\n        console.log(\"conter after increment========\", counter);\n        console.log(\"TitleCounter from slice = \", counter);\n        console.log(\"plus button start\");\n        setShowH2(true);\n    };\n    const AccordionExample = ()=>{\n        _s1();\n        const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    };\n    _s1(AccordionExample, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n    const toggleAccordion = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const log = ()=>{\n        if (editorRef.current) {\n            console.log(editorRef.current.getContent());\n        }\n    };\n    const onChange = (e)=>{\n        const content = e.target.getContent();\n        console.log(content);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: titleCreate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    style: {\n                        width: \"100%\"\n                    },\n                    color: \"dark\",\n                    onClick: toggleAccordion,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-start\",\n                                children: [\n                                    counter,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: handleTitleinputChange,\n                                        type: \"text\",\n                                        placeholder: \"введине наименование\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClick,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, this),\n                            titleName,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonCreateTitle,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewTitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonPlus,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewSubtitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-light\",\n                                        children: \"IN PROGRESS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this),\n                showH1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subtitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 155,\n                    columnNumber: 24\n                }, this),\n                showH2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    counter: counter\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 156,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 119,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClickCreate,\n                className: \"btn btn-info me-5\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                lineNumber: 160,\n                columnNumber: 13\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Title, \"98vxrxJRi6ivOO2BeXHvm29Vp1E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Title;\nvar _c;\n$RefreshReg$(_c, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RpdGxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNc0I7QUFDd0I7QUFDVztBQUNYO0FBQ1M7QUFDTDtBQUNNO0FBQ0c7QUFDVDtBQUNWO0FBQ29CO0FBQ0c7QUFDWTtBQUM1RCxTQUFTdUI7OztJQUN0QixNQUFNQyxXQUFTZCx3REFBV0E7SUFDMUIsSUFBSWUsZUFBY2hCLHdEQUFXQSxDQUFDLENBQUNpQixRQUFVQSxNQUFNQyxJQUFJLENBQUNDLFlBQVk7SUFDOUQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ21CLFFBQVFDLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3FCLFFBQVFDLFVBQVUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3VCLFFBQVFDLFVBQVUsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3lCLGFBQWFDLGVBQWUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQzJCLGVBQWVDLGlCQUFpQixHQUFHNUIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDNkIsV0FBVUMsYUFBYyxHQUFHOUIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDK0IsS0FBS0MsT0FBTyxHQUFHaEMsK0NBQVFBLENBQUM7c0JBQUMsOERBQUNXOzs7OztzQkFBUyw4REFBQ0E7Ozs7O0tBQVE7SUFDbkQsTUFBTSxDQUFDc0IsVUFBU0MsWUFBWSxHQUFDbEMsK0NBQVFBLENBQUM7SUFDdEMsSUFBSSxDQUFDbUMsU0FBUUMsV0FBVyxHQUFDcEMsK0NBQVFBLENBQUM7SUFFbEMsTUFBTXFDLG9CQUFvQjtRQUN0QkQsV0FBV3ZCO1FBQ1hhLGVBQWU7UUFDZlksUUFBUUMsR0FBRyxDQUFDLG9CQUFtQjFCO0lBRW5DO0lBRUFkLGdEQUFTQSxDQUFD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QUFXQTs7O0tBRlBjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RpdGxlL2luZGV4LmpzPzg2NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCdXR0b25Ecm9wZG93bixcbiAgICBEcm9wZG93blRvZ2dsZSxcbiAgICBEcm9wZG93bk1lbnUsXG4gICAgRHJvcGRvd25JdGVtLFxuICAgIEJ1dHRvbiwgQ29sbGFwc2UsIENhcmQsIENhcmRCb2R5XG4gIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbiAgaW1wb3J0IFN1YnRpdGxlIGZyb20gJ0AvY29tcG9uZW50cy9zdWJ0aXRsZSdcbiAgaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4gIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbiAgaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSBcIkAvc3RvcmUvc2xpY2VzL2F1dGhTbGljZVwiO1xuICBpbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvY3NzL2Zyb2FsYV9zdHlsZS5taW4uY3NzJztcbiAgaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2Nzcy9mcm9hbGFfZWRpdG9yLnBrZ2QubWluLmNzcyc7XG4gIGltcG9ydCBGcm9hbGFFZGl0b3JDb21wb25lbnQgZnJvbSAncmVhY3QtZnJvYWxhLXd5c2l3eWcnO1xuICBpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAdGlueW1jZS90aW55bWNlLXJlYWN0JztcbiAgaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbiAgaW1wb3J0IHsgYWRkVGl0bGVBY3Rpb24gfSBmcm9tIFwiQC9zdG9yZS9zbGljZXMvYXV0aFNsaWNlXCI7XG4gIGltcG9ydCB7IHNldENvdW50ZXJSZWR1Y2VyIH0gZnJvbSBcIkAvc3RvcmUvc2xpY2VzL2F1dGhTbGljZVwiO1xuICBpbXBvcnQgeyB0ZW1wbGF0ZVJlcGxhY2VWYWx1ZXMsIGZpZWxkcywgbmV3VGVtcGxhdGUgfSBmcm9tIFwiLi4vdGVzdGRhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlKCkge1xuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXG4gIGxldCBjb3VudGVyU2xpY2U9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC50aXRsZUNvdW50ZXIpO1xuICAgIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd0gxLCBzZXRTaG93SDFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93SDIsIHNldFNob3dIMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3RpdGxlQ3JlYXRlLCBzZXRUaXRsZUNyZWF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dDb21wb25lbnQsIHNldFNob3dDb21wb25lbnRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RpdGxlTmFtZSxzZXRUaXRsZU5hbWUgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYXJyLCBzZXRBcnJdID0gdXNlU3RhdGUoWzxUaXRsZS8+LCA8VGl0bGUvPl0pO1xuICAgIGNvbnN0IFt0X251bWJlcixzZXRUX251bWJlcl09dXNlU3RhdGUoJycpXG4gICAgbGV0IFtjb3VudGVyLHNldENvdW50ZXJdPXVzZVN0YXRlKDEpXG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0NyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnRlcihjb3VudGVyU2xpY2UpXG4gICAgICAgIHNldFRpdGxlQ3JlYXRlKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ291bnRlciBTbGljZSA9ICcsY291bnRlclNsaWNlKVxuICAgICAgICBcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn0JrQvtC80L/QvtC90LXQvdGCINGD0LTQsNC70LXQvScpO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuXG4gICAgICBjb25zdCBoYW5kbGVDb21wb25lbnRDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0NvbXBvbmVudChmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYW5kbGVUaXRsZWlucHV0Q2hhbmdlID0gYXN5bmMoZSkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVjbGljayBzdGFydCcsZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBzZXRUaXRsZU5hbWUoZS50YXJnZXQudmFsdWUpXG5cbiAgICAgIFxuICAgICAgXG4gICAgfTtcblxuIFxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMoZSkgPT4ge1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGl0bGVOYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0X251bWJlcicsIGNvdW50ZXIpO1xuXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGFkZFRpdGxlQWN0aW9uKGZvcm1EYXRhKSlcbiAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnY291bnRlciBzbGljZT09PT0nLGNvdW50ZXJTbGljZSlcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goKHNldENvdW50ZXJSZWR1Y2VyKSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBzZXRDb3VudGVyKGNvdW50ZXJTbGljZSlcbiAgICB9LFtjb3VudGVyU2xpY2VdKVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0J1dHRvblBsdXMgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncGx1cyBidXR0b24gc3RhcnQnKVxuICAgICAgICBzZXRTaG93SDEodHJ1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrQnV0dG9uQ3JlYXRlVGl0bGUgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NvbnRlcj09PT09PT09Jyxjb3VudGVyKVxuICAgICAgc2V0Q291bnRlcihOdW1iZXIoY291bnRlcikrMSlcbiAgICAgIGNvbnNvbGUubG9nKCdjb250ZXIgYWZ0ZXIgaW5jcmVtZW50PT09PT09PT0nLGNvdW50ZXIpXG4gICAgICBjb25zb2xlLmxvZygnVGl0bGVDb3VudGVyIGZyb20gc2xpY2UgPSAnLCBjb3VudGVyKVxuICAgICAgY29uc29sZS5sb2coJ3BsdXMgYnV0dG9uIHN0YXJ0Jyk7XG4gICAgICBzZXRTaG93SDIodHJ1ZSk7XG4gIH1cblxuICAgIGNvbnN0IEFjY29yZGlvbkV4YW1wbGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgICAgIGNvbnN0IHRvZ2dsZUFjY29yZGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgICAgfTtcblxuXG4gICAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yUmVmLmN1cnJlbnQuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgfVxuXG4gIFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25DaGFuZ2U9KGUpID0+e1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQuZ2V0Q29udGVudCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge3RpdGxlQ3JlYXRlID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY29sb3I9XCJkYXJrXCIgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgICB7Y291bnRlcn0gPGlucHV0ICBvbkNoYW5nZT17aGFuZGxlVGl0bGVpbnB1dENoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCy0LLQtdC00LjQvdC1INC90LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodCBtZS01XCI+c2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3RpdGxlTmFtZX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvbkNyZWF0ZVRpdGxlfSBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1lLTVcIj5DcmVhdGVOZXdUaXRsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvblBsdXN9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWUtNVwiPkNyZWF0ZU5ld1N1YnRpdGxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5JTiBQUk9HUkVTUzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgIFxuICAgICAgICAgICAgey8qIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259PiAqL31cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDMuMS4xIDxpbnB1dCAgb25DaGFuZ2U9e2hhbmRsZWltcHV0Q2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0LLQstC10LTQuNC90LUg0L3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja31jbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbWUtNVwiPnNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVyfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tCdXR0b25QbHVzfSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbWUtNVwiPis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5JTiBQUk9HUkVTUzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7LyogPC9CdXR0b24+ICovfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAge3Nob3dIMSAmJiA8U3VidGl0bGUgLz59XG4gICAgICAgICAgICB7c2hvd0gyICYmIDxUaXRsZSBjb3VudGVyPXtjb3VudGVyfS8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTooXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0NyZWF0ZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIG1lLTVcIj4rPC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICAgIFxuICAgICAgICBcbiAgICApO1xuICB9Il0sIm5hbWVzIjpbIkJ1dHRvbkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJCdXR0b24iLCJDb2xsYXBzZSIsIkNhcmQiLCJDYXJkQm9keSIsIlN1YnRpdGxlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXV0aG9yaXplIiwiRnJvYWxhRWRpdG9yQ29tcG9uZW50IiwiRWRpdG9yIiwiUmVhY3QiLCJ1c2VSZWYiLCJhZGRUaXRsZUFjdGlvbiIsInNldENvdW50ZXJSZWR1Y2VyIiwidGVtcGxhdGVSZXBsYWNlVmFsdWVzIiwiZmllbGRzIiwibmV3VGVtcGxhdGUiLCJUaXRsZSIsImRpc3BhdGNoIiwiY291bnRlclNsaWNlIiwic3RhdGUiLCJhdXRoIiwidGl0bGVDb3VudGVyIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2hvd0gxIiwic2V0U2hvd0gxIiwic2hvd0gyIiwic2V0U2hvd0gyIiwidGl0bGVDcmVhdGUiLCJzZXRUaXRsZUNyZWF0ZSIsInNob3dDb21wb25lbnQiLCJzZXRTaG93Q29tcG9uZW50IiwidGl0bGVOYW1lIiwic2V0VGl0bGVOYW1lIiwiYXJyIiwic2V0QXJyIiwidF9udW1iZXIiLCJzZXRUX251bWJlciIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiaGFuZGxlQ2xpY2tDcmVhdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ29tcG9uZW50Q2xpY2siLCJoYW5kbGVUaXRsZWlucHV0Q2hhbmdlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGFuZGxlQ2xpY2tCdXR0b25QbHVzIiwiaGFuZGxlQ2xpY2tCdXR0b25DcmVhdGVUaXRsZSIsIk51bWJlciIsIkFjY29yZGlvbkV4YW1wbGUiLCJ0b2dnbGVBY2NvcmRpb24iLCJlZGl0b3JSZWYiLCJjdXJyZW50IiwiZ2V0Q29udGVudCIsIm9uQ2hhbmdlIiwiY29udGVudCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJjb2xvciIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/title/index.js\n"));

/***/ })

});