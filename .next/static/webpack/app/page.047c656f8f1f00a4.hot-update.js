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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ \"(app-pages-browser)/./node_modules/reactstrap/esm/Button.js\");\n/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/subtitle */ \"(app-pages-browser)/./src/components/subtitle/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.js\");\n/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_style.min.css\");\n/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_editor.pkgd.min.css\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-froala-wysiwyg */ \"(app-pages-browser)/./node_modules/react-froala-wysiwyg/index.js\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"(app-pages-browser)/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* harmony import */ var _testdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../testdata */ \"(app-pages-browser)/./src/components/testdata.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Title(childCounter) {\n    _s();\n    var _s1 = $RefreshSig$();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    let counterSlice = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth.titleCounter);\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH1, setShowH1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH2, setShowH2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [titleCreate, setTitleCreate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [titleName, setTitleName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [arr, setArr] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 37\n        }, this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 47\n        }, this)\n    ]);\n    const [t_number, setT_number] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    let [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const handleClickCreate = ()=>{\n        setCounter(counterSlice);\n        setTitleCreate(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        return ()=>{\n            console.log(\"Компонент удален\");\n        };\n    }, []);\n    const handleComponentClick = ()=>{\n        setShowComponent(false);\n    };\n    const handleTitleinputChange = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        console.log(\"handleclick start\", e.target.value);\n        setTitleName(e.target.value);\n    };\n    const handleClick = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        const formData = new FormData();\n        formData.append(\"name\", titleName);\n        formData.append(\"t_number\", counter);\n        await dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.addTitleAction)(formData));\n        console.log(\"counter slice====\", counterSlice);\n        await dispatch(_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.setCounterReducer);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCounter(counterSlice);\n    }, [\n        counterSlice\n    ]);\n    const handleClickButtonPlus = (e)=>{\n        console.log(\"plus button start\");\n        setShowH1(true);\n    };\n    const handleClickButtonCreateTitle = (e)=>{\n        console.log(\"conter========\", counter);\n        console.log(\"conter after increment========\", counter);\n        console.log(\"TitleCounter from slice = \", counter);\n        console.log(\"plus button start\");\n        setShowH2(true);\n    };\n    const AccordionExample = ()=>{\n        _s1();\n        const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    };\n    _s1(AccordionExample, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n    const toggleAccordion = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const log = ()=>{\n        if (editorRef.current) {\n            console.log(editorRef.current.getContent());\n        }\n    };\n    const onChange = (e)=>{\n        const content = e.target.getContent();\n        console.log(content);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: titleCreate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    style: {\n                        width: \"100%\"\n                    },\n                    color: \"dark\",\n                    onClick: toggleAccordion,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-start\",\n                                children: [\n                                    showH2 && counter + 1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: handleTitleinputChange,\n                                        type: \"text\",\n                                        placeholder: \"введине наименование\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClick,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, this),\n                            titleName,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonCreateTitle,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewTitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 134,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonPlus,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewSubtitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-light\",\n                                        children: \"IN PROGRESS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this),\n                showH1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subtitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 159,\n                    columnNumber: 24\n                }, this),\n                showH2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    childCounter: counter\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 160,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 122,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClickCreate,\n                className: \"btn btn-info me-5\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                lineNumber: 164,\n                columnNumber: 13\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Title, \"98vxrxJRi6ivOO2BeXHvm29Vp1E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Title;\nvar _c;\n$RefreshReg$(_c, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RpdGxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNc0I7QUFDd0I7QUFDVztBQUNYO0FBQ1M7QUFDTDtBQUNNO0FBQ0c7QUFDVDtBQUNWO0FBQ29CO0FBQ0c7QUFDWTtBQUM1RCxTQUFTdUIsTUFBTUMsWUFBWTs7O0lBQ3hDLE1BQU1DLFdBQVNmLHdEQUFXQTtJQUMxQixJQUFJZ0IsZUFBY2pCLHdEQUFXQSxDQUFDLENBQUNrQixRQUFVQSxNQUFNQyxJQUFJLENBQUNDLFlBQVk7SUFDOUQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ29CLFFBQVFDLFVBQVUsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3NCLFFBQVFDLFVBQVUsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3dCLFFBQVFDLFVBQVUsR0FBR3pCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQzBCLGFBQWFDLGVBQWUsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQzRCLGVBQWVDLGlCQUFpQixHQUFHN0IsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDOEIsV0FBVUMsYUFBYyxHQUFHL0IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZ0MsS0FBS0MsT0FBTyxHQUFHakMsK0NBQVFBLENBQUM7c0JBQUMsOERBQUNXOzs7OztzQkFBUyw4REFBQ0E7Ozs7O0tBQVE7SUFDbkQsTUFBTSxDQUFDdUIsVUFBU0MsWUFBWSxHQUFDbkMsK0NBQVFBLENBQUM7SUFDdEMsSUFBSSxDQUFDb0MsU0FBUUMsV0FBVyxHQUFDckMsK0NBQVFBLENBQUM7SUFFbEMsTUFBTXNDLG9CQUFvQjtRQUV0QkQsV0FBV3ZCO1FBQ1hhLGVBQWU7SUFJbkI7SUFFQTVCLGdEQUFTQSxDQUFDO1FBQ04sT0FBTztZQUNMd0Ms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X05fRS8uL3NyYy9jb21wb25lbnRzL3RpdGxlL2luZGV4LmpzPzg2NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCdXR0b25Ecm9wZG93bixcbiAgICBEcm9wZG93blRvZ2dsZSxcbiAgICBEcm9wZG93bk1lbnUsXG4gICAgRHJvcGRvd25JdGVtLFxuICAgIEJ1dHRvbiwgQ29sbGFwc2UsIENhcmQsIENhcmRCb2R5XG4gIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbiAgaW1wb3J0IFN1YnRpdGxlIGZyb20gJ0AvY29tcG9uZW50cy9zdWJ0aXRsZSdcbiAgaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4gIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbiAgaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSBcIkAvc3RvcmUvc2xpY2VzL2F1dGhTbGljZVwiO1xuICBpbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvY3NzL2Zyb2FsYV9zdHlsZS5taW4uY3NzJztcbiAgaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2Nzcy9mcm9hbGFfZWRpdG9yLnBrZ2QubWluLmNzcyc7XG4gIGltcG9ydCBGcm9hbGFFZGl0b3JDb21wb25lbnQgZnJvbSAncmVhY3QtZnJvYWxhLXd5c2l3eWcnO1xuICBpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAdGlueW1jZS90aW55bWNlLXJlYWN0JztcbiAgaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbiAgaW1wb3J0IHsgYWRkVGl0bGVBY3Rpb24gfSBmcm9tIFwiQC9zdG9yZS9zbGljZXMvYXV0aFNsaWNlXCI7XG4gIGltcG9ydCB7IHNldENvdW50ZXJSZWR1Y2VyIH0gZnJvbSBcIkAvc3RvcmUvc2xpY2VzL2F1dGhTbGljZVwiO1xuICBpbXBvcnQgeyB0ZW1wbGF0ZVJlcGxhY2VWYWx1ZXMsIGZpZWxkcywgbmV3VGVtcGxhdGUgfSBmcm9tIFwiLi4vdGVzdGRhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlKGNoaWxkQ291bnRlcikge1xuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXG4gIGxldCBjb3VudGVyU2xpY2U9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC50aXRsZUNvdW50ZXIpO1xuICAgIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd0gxLCBzZXRTaG93SDFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93SDIsIHNldFNob3dIMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3RpdGxlQ3JlYXRlLCBzZXRUaXRsZUNyZWF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dDb21wb25lbnQsIHNldFNob3dDb21wb25lbnRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RpdGxlTmFtZSxzZXRUaXRsZU5hbWUgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYXJyLCBzZXRBcnJdID0gdXNlU3RhdGUoWzxUaXRsZS8+LCA8VGl0bGUvPl0pO1xuICAgIGNvbnN0IFt0X251bWJlcixzZXRUX251bWJlcl09dXNlU3RhdGUoJycpXG4gICAgbGV0IFtjb3VudGVyLHNldENvdW50ZXJdPXVzZVN0YXRlKDEpXG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0NyZWF0ZSA9ICgpID0+IHtcblxuICAgICAgICBzZXRDb3VudGVyKGNvdW50ZXJTbGljZSlcbiAgICAgICAgc2V0VGl0bGVDcmVhdGUodHJ1ZSk7XG4gICAgICAgXG4gICAgICBcbiAgICAgICAgXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ9Ca0L7QvNC/0L7QvdC10L3RgiDRg9C00LDQu9C10L0nKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgY29uc3QgaGFuZGxlQ29tcG9uZW50Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dDb21wb25lbnQoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFuZGxlVGl0bGVpbnB1dENoYW5nZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlY2xpY2sgc3RhcnQnLGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0VGl0bGVOYW1lKGUudGFyZ2V0LnZhbHVlKVxuXG4gICAgICBcbiAgICAgIFxuICAgIH07XG5cbiBcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jKGUpID0+IHtcbiAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRpdGxlTmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndF9udW1iZXInLCBjb3VudGVyKTtcblxuICAgICAgICBhd2FpdCBkaXNwYXRjaChhZGRUaXRsZUFjdGlvbihmb3JtRGF0YSkpXG4gICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ2NvdW50ZXIgc2xpY2U9PT09Jyxjb3VudGVyU2xpY2UpXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKChzZXRDb3VudGVyUmVkdWNlcikpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgc2V0Q291bnRlcihjb3VudGVyU2xpY2UpXG4gICAgfSxbY291bnRlclNsaWNlXSlcblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tCdXR0b25QbHVzID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsdXMgYnV0dG9uIHN0YXJ0JylcbiAgICAgICAgc2V0U2hvd0gxKHRydWUpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGlja0J1dHRvbkNyZWF0ZVRpdGxlID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb250ZXI9PT09PT09PScsY291bnRlcilcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coJ2NvbnRlciBhZnRlciBpbmNyZW1lbnQ9PT09PT09PScsY291bnRlcilcbiAgICAgIGNvbnNvbGUubG9nKCdUaXRsZUNvdW50ZXIgZnJvbSBzbGljZSA9ICcsIGNvdW50ZXIpXG4gICAgICBjb25zb2xlLmxvZygncGx1cyBidXR0b24gc3RhcnQnKTtcbiAgICAgIHNldFNob3dIMih0cnVlKTtcbiAgICBcbiAgfVxuXG4gICAgY29uc3QgQWNjb3JkaW9uRXhhbXBsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgfVxuICAgICAgY29uc3QgdG9nZ2xlQWNjb3JkaW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgICB9O1xuXG5cbiAgICAgIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgICAgY29uc3QgbG9nID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3JSZWYuY3VycmVudC5nZXRDb250ZW50KCkpO1xuICAgICAgICB9XG5cbiAgXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBvbkNoYW5nZT0oZSkgPT57XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlLnRhcmdldC5nZXRDb250ZW50KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7dGl0bGVDcmVhdGUgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBjb2xvcj1cImRhcmtcIiBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LXN0YXJ0XCI+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtzaG93SDIgJiYgY291bnRlcisxfSA8aW5wdXQgIG9uQ2hhbmdlPXtoYW5kbGVUaXRsZWlucHV0Q2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0LLQstC10LTQuNC90LUg0L3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgLz5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja31jbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1lLTVcIj5zYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7dGl0bGVOYW1lfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQnV0dG9uQ3JlYXRlVGl0bGV9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWUtNVwiPkNyZWF0ZU5ld1RpdGxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQnV0dG9uUGx1c30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodCBtZS01XCI+Q3JlYXRlTmV3U3VidGl0bGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPklOIFBST0dSRVNTPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgXG4gICAgICAgICAgICB7LyogPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgMy4xLjEgPGlucHV0ICBvbkNoYW5nZT17aGFuZGxlaW1wdXRDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQstCy0LXQtNC40L3QtSDQvdCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfWNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtZS01XCI+c2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvblBsdXN9IGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtZS01XCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPklOIFBST0dSRVNTPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB7c2hvd0gxICYmIDxTdWJ0aXRsZSAvPn1cbiAgICAgICAgICAgIHtzaG93SDIgJiYgPFRpdGxlIGNoaWxkQ291bnRlcj17Y291bnRlcn0vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk6KFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tDcmVhdGV9IGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtZS01XCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgKTtcbiAgfSJdLCJuYW1lcyI6WyJCdXR0b25Ecm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiQnV0dG9uIiwiQ29sbGFwc2UiLCJDYXJkIiwiQ2FyZEJvZHkiLCJTdWJ0aXRsZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGhvcml6ZSIsIkZyb2FsYUVkaXRvckNvbXBvbmVudCIsIkVkaXRvciIsIlJlYWN0IiwidXNlUmVmIiwiYWRkVGl0bGVBY3Rpb24iLCJzZXRDb3VudGVyUmVkdWNlciIsInRlbXBsYXRlUmVwbGFjZVZhbHVlcyIsImZpZWxkcyIsIm5ld1RlbXBsYXRlIiwiVGl0bGUiLCJjaGlsZENvdW50ZXIiLCJkaXNwYXRjaCIsImNvdW50ZXJTbGljZSIsInN0YXRlIiwiYXV0aCIsInRpdGxlQ291bnRlciIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsImlzT3BlbiIsInNldElzT3BlbiIsInNob3dIMSIsInNldFNob3dIMSIsInNob3dIMiIsInNldFNob3dIMiIsInRpdGxlQ3JlYXRlIiwic2V0VGl0bGVDcmVhdGUiLCJzaG93Q29tcG9uZW50Iiwic2V0U2hvd0NvbXBvbmVudCIsInRpdGxlTmFtZSIsInNldFRpdGxlTmFtZSIsImFyciIsInNldEFyciIsInRfbnVtYmVyIiwic2V0VF9udW1iZXIiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImhhbmRsZUNsaWNrQ3JlYXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNvbXBvbmVudENsaWNrIiwiaGFuZGxlVGl0bGVpbnB1dENoYW5nZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhhbmRsZUNsaWNrQnV0dG9uUGx1cyIsImhhbmRsZUNsaWNrQnV0dG9uQ3JlYXRlVGl0bGUiLCJBY2NvcmRpb25FeGFtcGxlIiwidG9nZ2xlQWNjb3JkaW9uIiwiZWRpdG9yUmVmIiwiY3VycmVudCIsImdldENvbnRlbnQiLCJvbkNoYW5nZSIsImNvbnRlbnQiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiY29sb3IiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/title/index.js\n"));

/***/ })

});