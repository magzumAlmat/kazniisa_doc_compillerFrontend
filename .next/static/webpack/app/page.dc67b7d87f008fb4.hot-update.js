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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ \"(app-pages-browser)/./node_modules/reactstrap/esm/Button.js\");\n/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/subtitle */ \"(app-pages-browser)/./src/components/subtitle/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.js\");\n/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_style.min.css\");\n/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_editor.pkgd.min.css\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-froala-wysiwyg */ \"(app-pages-browser)/./node_modules/react-froala-wysiwyg/index.js\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"(app-pages-browser)/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* harmony import */ var _testdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../testdata */ \"(app-pages-browser)/./src/components/testdata.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Title(param) {\n    let { childCounter } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    let counterSlice = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth.titleCounter);\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH1, setShowH1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH2, setShowH2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [titleCreate, setTitleCreate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [titleName, setTitleName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [arr, setArr] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 37\n        }, this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 47\n        }, this)\n    ]);\n    const [t_number, setT_number] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    let chCounter = Number(childCounter);\n    let [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const handleClickCreate = ()=>{\n        setCounter(counterSlice);\n        setTitleCreate(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        return ()=>{\n            console.log(\"Компонент удален\");\n        };\n    }, []);\n    const handleComponentClick = ()=>{\n        setShowComponent(false);\n    };\n    const handleTitleinputChange = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        console.log(\"handleclick start\", e.target.value);\n        setTitleName(e.target.value);\n    };\n    const handleClick = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        const formData = new FormData();\n        formData.append(\"name\", titleName);\n        formData.append(\"t_number\", counter);\n        await dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.addTitleAction)(formData));\n        console.log(\"counter slice====\", counterSlice);\n        await dispatch(_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.setCounterReducer);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCounter(counterSlice);\n    }, [\n        counterSlice\n    ]);\n    const handleClickButtonPlus = (e)=>{\n        console.log(\"plus button start\");\n        setShowH1(true);\n    };\n    const handleClickButtonCreateTitle = (e)=>{\n        console.log(\"conter========\", counter);\n        console.log(\"Child counter=====\", chCounter);\n        chCounter = +1;\n        console.log(\"conter after increment========\", counter);\n        console.log(\"TitleCounter from slice = \", counter);\n        console.log(\"plus button start\");\n        setShowH2(true);\n    };\n    const AccordionExample = ()=>{\n        _s1();\n        const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    };\n    _s1(AccordionExample, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n    const toggleAccordion = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const log = ()=>{\n        if (editorRef.current) {\n            console.log(editorRef.current.getContent());\n        }\n    };\n    const onChange = (e)=>{\n        const content = e.target.getContent();\n        console.log(content);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: titleCreate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    style: {\n                        width: \"100%\"\n                    },\n                    color: \"dark\",\n                    onClick: toggleAccordion,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-start\",\n                                children: [\n                                    showH2 && Number(counter) + 1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: handleTitleinputChange,\n                                        type: \"text\",\n                                        placeholder: \"введине наименование\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 45\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClick,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 127,\n                                columnNumber: 15\n                            }, this),\n                            titleName,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonCreateTitle,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewTitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonPlus,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewSubtitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-light\",\n                                        children: \"IN PROGRESS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 135,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, this),\n                showH1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subtitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 161,\n                    columnNumber: 24\n                }, this),\n                showH2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    childCounter: counter\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 162,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 124,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClickCreate,\n                className: \"btn btn-info me-5\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                lineNumber: 166,\n                columnNumber: 13\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Title, \"98vxrxJRi6ivOO2BeXHvm29Vp1E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Title;\nvar _c;\n$RefreshReg$(_c, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RpdGxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNc0I7QUFDd0I7QUFDVztBQUNYO0FBQ1M7QUFDTDtBQUNNO0FBQ0c7QUFDVDtBQUNWO0FBQ29CO0FBQ0c7QUFDWTtBQUM1RCxTQUFTdUIsTUFBTSxLQUFjO1FBQWQsRUFBQ0MsWUFBWSxFQUFDLEdBQWQ7OztJQUM1QixNQUFNQyxXQUFTZix3REFBV0E7SUFDMUIsSUFBSWdCLGVBQWNqQix3REFBV0EsQ0FBQyxDQUFDa0IsUUFBVUEsTUFBTUMsSUFBSSxDQUFDQyxZQUFZO0lBQzlELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNvQixRQUFRQyxVQUFVLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNzQixRQUFRQyxVQUFVLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUN3QixRQUFRQyxVQUFVLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUMwQixhQUFhQyxlQUFlLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUM0QixlQUFlQyxpQkFBaUIsR0FBRzdCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQzhCLFdBQVVDLGFBQWMsR0FBRy9CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2dDLEtBQUtDLE9BQU8sR0FBR2pDLCtDQUFRQSxDQUFDO3NCQUFDLDhEQUFDVzs7Ozs7c0JBQVMsOERBQUNBOzs7OztLQUFRO0lBQ25ELE1BQU0sQ0FBQ3VCLFVBQVNDLFlBQVksR0FBQ25DLCtDQUFRQSxDQUFDO0lBQ3RDLElBQUlvQyxZQUFZQyxPQUFPekI7SUFDdkIsSUFBSSxDQUFDMEIsU0FBUUMsV0FBVyxHQUFDdkMsK0NBQVFBLENBQUM7SUFFbEMsTUFBTXdDLG9CQUFvQjtRQUV0QkQsV0FBV3pCO1FB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QVMxQjtnQkFBbUIyQixXQUFVOzBCQUFvQjs7Ozs7Ozs7QUFPNUU7R0F6SnNCeEQ7O1FBQ1BiLG9EQUFXQTtRQUNSRCxvREFBV0E7OztLQUZQYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90aXRsZS9pbmRleC5qcz84NjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQnV0dG9uRHJvcGRvd24sXG4gICAgRHJvcGRvd25Ub2dnbGUsXG4gICAgRHJvcGRvd25NZW51LFxuICAgIERyb3Bkb3duSXRlbSxcbiAgICBCdXR0b24sIENvbGxhcHNlLCBDYXJkLCBDYXJkQm9keVxuICB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG4gIGltcG9ydCBTdWJ0aXRsZSBmcm9tICdAL2NvbXBvbmVudHMvc3VidGl0bGUnXG4gIGltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuICBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4gIGltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gXCJAL3N0b3JlL3NsaWNlcy9hdXRoU2xpY2VcIjtcbiAgaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2Nzcy9mcm9hbGFfc3R5bGUubWluLmNzcyc7XG4gIGltcG9ydCAnZnJvYWxhLWVkaXRvci9jc3MvZnJvYWxhX2VkaXRvci5wa2dkLm1pbi5jc3MnO1xuICBpbXBvcnQgRnJvYWxhRWRpdG9yQ29tcG9uZW50IGZyb20gJ3JlYWN0LWZyb2FsYS13eXNpd3lnJztcbiAgaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQHRpbnltY2UvdGlueW1jZS1yZWFjdCc7XG4gIGltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4gIGltcG9ydCB7IGFkZFRpdGxlQWN0aW9uIH0gZnJvbSBcIkAvc3RvcmUvc2xpY2VzL2F1dGhTbGljZVwiO1xuICBpbXBvcnQgeyBzZXRDb3VudGVyUmVkdWNlciB9IGZyb20gXCJAL3N0b3JlL3NsaWNlcy9hdXRoU2xpY2VcIjtcbiAgaW1wb3J0IHsgdGVtcGxhdGVSZXBsYWNlVmFsdWVzLCBmaWVsZHMsIG5ld1RlbXBsYXRlIH0gZnJvbSBcIi4uL3Rlc3RkYXRhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaXRsZSh7Y2hpbGRDb3VudGVyfSkge1xuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXG4gIGxldCBjb3VudGVyU2xpY2U9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC50aXRsZUNvdW50ZXIpO1xuICAgIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd0gxLCBzZXRTaG93SDFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93SDIsIHNldFNob3dIMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3RpdGxlQ3JlYXRlLCBzZXRUaXRsZUNyZWF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dDb21wb25lbnQsIHNldFNob3dDb21wb25lbnRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RpdGxlTmFtZSxzZXRUaXRsZU5hbWUgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYXJyLCBzZXRBcnJdID0gdXNlU3RhdGUoWzxUaXRsZS8+LCA8VGl0bGUvPl0pO1xuICAgIGNvbnN0IFt0X251bWJlcixzZXRUX251bWJlcl09dXNlU3RhdGUoJycpXG4gICAgbGV0IGNoQ291bnRlciA9IE51bWJlcihjaGlsZENvdW50ZXIpO1xuICAgIGxldCBbY291bnRlcixzZXRDb3VudGVyXT11c2VTdGF0ZSgxKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tDcmVhdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgc2V0Q291bnRlcihjb3VudGVyU2xpY2UpXG4gICAgICAgIHNldFRpdGxlQ3JlYXRlKHRydWUpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfQmtC+0LzQv9C+0L3QtdC90YIg0YPQtNCw0LvQtdC9Jyk7XG4gICAgICAgIH07XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUNvbXBvbmVudENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93Q29tcG9uZW50KGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhbmRsZVRpdGxlaW5wdXRDaGFuZ2UgPSBhc3luYyhlKSA9PiB7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZWNsaWNrIHN0YXJ0JyxlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHNldFRpdGxlTmFtZShlLnRhcmdldC52YWx1ZSlcblxuICAgICAgXG4gICAgICBcbiAgICB9O1xuXG4gXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyhlKSA9PiB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aXRsZU5hbWUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RfbnVtYmVyJywgY291bnRlcik7XG5cbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goYWRkVGl0bGVBY3Rpb24oZm9ybURhdGEpKVxuICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb3VudGVyIHNsaWNlPT09PScsY291bnRlclNsaWNlKVxuICAgICAgICBhd2FpdCBkaXNwYXRjaCgoc2V0Q291bnRlclJlZHVjZXIpKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHNldENvdW50ZXIoY291bnRlclNsaWNlKVxuICAgIH0sW2NvdW50ZXJTbGljZV0pXG5cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrQnV0dG9uUGx1cyA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbHVzIGJ1dHRvbiBzdGFydCcpXG4gICAgICAgIHNldFNob3dIMSh0cnVlKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tCdXR0b25DcmVhdGVUaXRsZSA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY29udGVyPT09PT09PT0nLGNvdW50ZXIpXG4gICAgICBjb25zb2xlLmxvZygnQ2hpbGQgY291bnRlcj09PT09JywgY2hDb3VudGVyKVxuICAgICAgY2hDb3VudGVyID0rIDFcbiAgICAgIGNvbnNvbGUubG9nKCdjb250ZXIgYWZ0ZXIgaW5jcmVtZW50PT09PT09PT0nLGNvdW50ZXIpXG4gICAgICBjb25zb2xlLmxvZygnVGl0bGVDb3VudGVyIGZyb20gc2xpY2UgPSAnLCBjb3VudGVyKVxuICAgICAgY29uc29sZS5sb2coJ3BsdXMgYnV0dG9uIHN0YXJ0Jyk7XG4gICAgICBzZXRTaG93SDIodHJ1ZSk7XG4gICAgXG4gIH1cblxuICAgIGNvbnN0IEFjY29yZGlvbkV4YW1wbGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgICAgIGNvbnN0IHRvZ2dsZUFjY29yZGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgICAgfTtcblxuXG4gICAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yUmVmLmN1cnJlbnQuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgfVxuXG4gIFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25DaGFuZ2U9KGUpID0+e1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQuZ2V0Q29udGVudCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge3RpdGxlQ3JlYXRlID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY29sb3I9XCJkYXJrXCIgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7c2hvd0gyICYmIE51bWJlcihjb3VudGVyKSsxfSA8aW5wdXQgIG9uQ2hhbmdlPXtoYW5kbGVUaXRsZWlucHV0Q2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0LLQstC10LTQuNC90LUg0L3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgLz5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja31jbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1lLTVcIj5zYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7dGl0bGVOYW1lfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQnV0dG9uQ3JlYXRlVGl0bGV9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWUtNVwiPkNyZWF0ZU5ld1RpdGxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQnV0dG9uUGx1c30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodCBtZS01XCI+Q3JlYXRlTmV3U3VidGl0bGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPklOIFBST0dSRVNTPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgXG4gICAgICAgICAgICB7LyogPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgMy4xLjEgPGlucHV0ICBvbkNoYW5nZT17aGFuZGxlaW1wdXRDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQstCy0LXQtNC40L3QtSDQvdCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfWNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtZS01XCI+c2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvblBsdXN9IGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtZS01XCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPklOIFBST0dSRVNTPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB7c2hvd0gxICYmIDxTdWJ0aXRsZSAvPn1cbiAgICAgICAgICAgIHtzaG93SDIgJiYgPFRpdGxlIGNoaWxkQ291bnRlcj17Y291bnRlcn0vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk6KFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tDcmVhdGV9IGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtZS01XCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgKTtcbiAgfSJdLCJuYW1lcyI6WyJCdXR0b25Ecm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiQnV0dG9uIiwiQ29sbGFwc2UiLCJDYXJkIiwiQ2FyZEJvZHkiLCJTdWJ0aXRsZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGhvcml6ZSIsIkZyb2FsYUVkaXRvckNvbXBvbmVudCIsIkVkaXRvciIsIlJlYWN0IiwidXNlUmVmIiwiYWRkVGl0bGVBY3Rpb24iLCJzZXRDb3VudGVyUmVkdWNlciIsInRlbXBsYXRlUmVwbGFjZVZhbHVlcyIsImZpZWxkcyIsIm5ld1RlbXBsYXRlIiwiVGl0bGUiLCJjaGlsZENvdW50ZXIiLCJkaXNwYXRjaCIsImNvdW50ZXJTbGljZSIsInN0YXRlIiwiYXV0aCIsInRpdGxlQ291bnRlciIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsImlzT3BlbiIsInNldElzT3BlbiIsInNob3dIMSIsInNldFNob3dIMSIsInNob3dIMiIsInNldFNob3dIMiIsInRpdGxlQ3JlYXRlIiwic2V0VGl0bGVDcmVhdGUiLCJzaG93Q29tcG9uZW50Iiwic2V0U2hvd0NvbXBvbmVudCIsInRpdGxlTmFtZSIsInNldFRpdGxlTmFtZSIsImFyciIsInNldEFyciIsInRfbnVtYmVyIiwic2V0VF9udW1iZXIiLCJjaENvdW50ZXIiLCJOdW1iZXIiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImhhbmRsZUNsaWNrQ3JlYXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNvbXBvbmVudENsaWNrIiwiaGFuZGxlVGl0bGVpbnB1dENoYW5nZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhhbmRsZUNsaWNrQnV0dG9uUGx1cyIsImhhbmRsZUNsaWNrQnV0dG9uQ3JlYXRlVGl0bGUiLCJBY2NvcmRpb25FeGFtcGxlIiwidG9nZ2xlQWNjb3JkaW9uIiwiZWRpdG9yUmVmIiwiY3VycmVudCIsImdldENvbnRlbnQiLCJvbkNoYW5nZSIsImNvbnRlbnQiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiY29sb3IiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/title/index.js\n"));

/***/ })

});