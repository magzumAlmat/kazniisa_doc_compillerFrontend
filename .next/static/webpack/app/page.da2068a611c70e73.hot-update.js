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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ \"(app-pages-browser)/./node_modules/reactstrap/esm/Button.js\");\n/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/subtitle */ \"(app-pages-browser)/./src/components/subtitle/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.js\");\n/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_style.min.css\");\n/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_editor.pkgd.min.css\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-froala-wysiwyg */ \"(app-pages-browser)/./node_modules/react-froala-wysiwyg/index.js\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"(app-pages-browser)/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* harmony import */ var _testdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../testdata */ \"(app-pages-browser)/./src/components/testdata.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Title() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    let counterSlice = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth.titleCounter);\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH1, setShowH1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH2, setShowH2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [titleCreate, setTitleCreate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [titleName, setTitleName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [arr, setArr] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 37\n        }, this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 47\n        }, this)\n    ]);\n    const [t_number, setT_number] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    let [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const handleClickCreate = ()=>{\n        setTitleCreate(true);\n        console.log(\"Counter Slice = \", counterSlice);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        return ()=>{\n            console.log(\"Компонент удален\");\n        };\n    }, []);\n    const handleComponentClick = ()=>{\n        setShowComponent(false);\n    };\n    const handleTitleinputChange = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        console.log(\"handleclick start\", e.target.value);\n        setTitleName(e.target.value);\n    };\n    const handleClick = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        const formData = new FormData();\n        formData.append(\"name\", titleName);\n        formData.append(\"t_number\", counter);\n        await dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.addTitleAction)(formData));\n        setCounter(counterSlice = +1);\n        console.log(\"counter slice====\", counterSlice);\n        await dispatch(_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.setCounterReducer);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCounter(counterSlice);\n    }, [\n        counterSlice\n    ]);\n    const handleClickButtonPlus = (e)=>{\n        console.log(\"plus button start\");\n        setShowH1(true);\n    };\n    const handleClickButtonCreateTitle = (e)=>{\n        console.log(\"TitleCounter from slice = \", counterSlice);\n        console.log(\"plus button start\");\n        setCounter((prevCounter)=>prevCounter + 1);\n        setShowH2(true);\n    };\n    const AccordionExample = ()=>{\n        _s1();\n        const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    };\n    _s1(AccordionExample, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n    const toggleAccordion = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const log = ()=>{\n        if (editorRef.current) {\n            console.log(editorRef.current.getContent());\n        }\n    };\n    const onChange = (e)=>{\n        const content = e.target.getContent();\n        console.log(content);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: titleCreate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    style: {\n                        width: \"100%\"\n                    },\n                    color: \"dark\",\n                    onClick: toggleAccordion,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-start\",\n                                children: [\n                                    counter,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: handleTitleinputChange,\n                                        type: \"text\",\n                                        placeholder: \"введине наименование\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClick,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, this),\n                            titleName,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonCreateTitle,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewTitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonPlus,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewSubtitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-light\",\n                                        children: \"IN PROGRESS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 126,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this),\n                showH1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subtitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 152,\n                    columnNumber: 24\n                }, this),\n                showH2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 153,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 116,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClickCreate,\n                className: \"btn btn-info me-5\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                lineNumber: 157,\n                columnNumber: 13\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Title, \"98vxrxJRi6ivOO2BeXHvm29Vp1E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Title;\nvar _c;\n$RefreshReg$(_c, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RpdGxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNc0I7QUFDd0I7QUFDVztBQUNYO0FBQ1M7QUFDTDtBQUNNO0FBQ0c7QUFDVDtBQUNWO0FBQ29CO0FBQ0c7QUFDWTtBQUM1RCxTQUFTdUI7OztJQUN0QixNQUFNQyxXQUFTZCx3REFBV0E7SUFDMUIsSUFBSWUsZUFBY2hCLHdEQUFXQSxDQUFDLENBQUNpQixRQUFVQSxNQUFNQyxJQUFJLENBQUNDLFlBQVk7SUFDOUQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ21CLFFBQVFDLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3FCLFFBQVFDLFVBQVUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3VCLFFBQVFDLFVBQVUsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3lCLGFBQWFDLGVBQWUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQzJCLGVBQWVDLGlCQUFpQixHQUFHNUIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDNkIsV0FBVUMsYUFBYyxHQUFHOUIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDK0IsS0FBS0MsT0FBTyxHQUFHaEMsK0NBQVFBLENBQUM7c0JBQUMsOERBQUNXOzs7OztzQkFBUyw4REFBQ0E7Ozs7O0tBQVE7SUFDbkQsTUFBTSxDQUFDc0IsVUFBU0MsWUFBWSxHQUFDbEMsK0NBQVFBLENBQUM7SUFDdEMsSUFBSSxDQUFDbUMsU0FBUUMsV0FBVyxHQUFDcEMsK0NBQVFBLENBQUM7SUFFbEMsTUFBTXFDLG9CQUFvQjtRQUN0QlgsZUFBZTtRQUNmWSxRQUFRQyxHQUFHLENBQUMsb0JBQW1CMUI7SUFFbkM7SUFFQWQsZ0RBQVNBLENBQUM7UUFDTixPQUFPO1lB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dGl0bGUvaW5kZXguanM/ODY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJ1dHRvbkRyb3Bkb3duLFxuICAgIERyb3Bkb3duVG9nZ2xlLFxuICAgIERyb3Bkb3duTWVudSxcbiAgICBEcm9wZG93bkl0ZW0sXG4gICAgQnV0dG9uLCBDb2xsYXBzZSwgQ2FyZCwgQ2FyZEJvZHlcbiAgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuICBpbXBvcnQgU3VidGl0bGUgZnJvbSAnQC9jb21wb25lbnRzL3N1YnRpdGxlJ1xuICBpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbiAgaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuICBpbXBvcnQgeyBhdXRob3JpemUgfSBmcm9tIFwiQC9zdG9yZS9zbGljZXMvYXV0aFNsaWNlXCI7XG4gIGltcG9ydCAnZnJvYWxhLWVkaXRvci9jc3MvZnJvYWxhX3N0eWxlLm1pbi5jc3MnO1xuICBpbXBvcnQgJ2Zyb2FsYS1lZGl0b3IvY3NzL2Zyb2FsYV9lZGl0b3IucGtnZC5taW4uY3NzJztcbiAgaW1wb3J0IEZyb2FsYUVkaXRvckNvbXBvbmVudCBmcm9tICdyZWFjdC1mcm9hbGEtd3lzaXd5Zyc7XG4gIGltcG9ydCB7IEVkaXRvciB9IGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnO1xuICBpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuICBpbXBvcnQgeyBhZGRUaXRsZUFjdGlvbiB9IGZyb20gXCJAL3N0b3JlL3NsaWNlcy9hdXRoU2xpY2VcIjtcbiAgaW1wb3J0IHsgc2V0Q291bnRlclJlZHVjZXIgfSBmcm9tIFwiQC9zdG9yZS9zbGljZXMvYXV0aFNsaWNlXCI7XG4gIGltcG9ydCB7IHRlbXBsYXRlUmVwbGFjZVZhbHVlcywgZmllbGRzLCBuZXdUZW1wbGF0ZSB9IGZyb20gXCIuLi90ZXN0ZGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGUoKSB7XG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcbiAgbGV0IGNvdW50ZXJTbGljZT0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnRpdGxlQ291bnRlcik7XG4gICAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93SDEsIHNldFNob3dIMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dIMiwgc2V0U2hvd0gyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdGl0bGVDcmVhdGUsIHNldFRpdGxlQ3JlYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd0NvbXBvbmVudCwgc2V0U2hvd0NvbXBvbmVudF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbdGl0bGVOYW1lLHNldFRpdGxlTmFtZSBdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthcnIsIHNldEFycl0gPSB1c2VTdGF0ZShbPFRpdGxlLz4sIDxUaXRsZS8+XSk7XG4gICAgY29uc3QgW3RfbnVtYmVyLHNldFRfbnVtYmVyXT11c2VTdGF0ZSgnJylcbiAgICBsZXQgW2NvdW50ZXIsc2V0Q291bnRlcl09dXNlU3RhdGUoMSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrQ3JlYXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRUaXRsZUNyZWF0ZSh0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvdW50ZXIgU2xpY2UgPSAnLGNvdW50ZXJTbGljZSlcbiAgICAgICAgXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ9Ca0L7QvNC/0L7QvdC10L3RgiDRg9C00LDQu9C10L0nKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgY29uc3QgaGFuZGxlQ29tcG9uZW50Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dDb21wb25lbnQoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFuZGxlVGl0bGVpbnB1dENoYW5nZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlY2xpY2sgc3RhcnQnLGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0VGl0bGVOYW1lKGUudGFyZ2V0LnZhbHVlKVxuXG4gICAgICBcbiAgICAgIFxuICAgIH07XG5cbiBcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jKGUpID0+IHtcbiAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRpdGxlTmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndF9udW1iZXInLCBjb3VudGVyKTtcblxuICAgICAgICBhd2FpdCBkaXNwYXRjaChhZGRUaXRsZUFjdGlvbihmb3JtRGF0YSkpXG4gICAgICAgIHNldENvdW50ZXIoY291bnRlclNsaWNlPSsxKVxuICAgICAgICBjb25zb2xlLmxvZygnY291bnRlciBzbGljZT09PT0nLGNvdW50ZXJTbGljZSlcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goKHNldENvdW50ZXJSZWR1Y2VyKSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBzZXRDb3VudGVyKGNvdW50ZXJTbGljZSlcbiAgICB9LFtjb3VudGVyU2xpY2VdKVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0J1dHRvblBsdXMgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncGx1cyBidXR0b24gc3RhcnQnKVxuICAgICAgICBzZXRTaG93SDEodHJ1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrQnV0dG9uQ3JlYXRlVGl0bGUgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RpdGxlQ291bnRlciBmcm9tIHNsaWNlID0gJywgY291bnRlclNsaWNlKVxuICAgICAgY29uc29sZS5sb2coJ3BsdXMgYnV0dG9uIHN0YXJ0Jyk7XG4gICAgICBzZXRDb3VudGVyKHByZXZDb3VudGVyID0+IHByZXZDb3VudGVyICsgMSk7XG4gICAgICBzZXRTaG93SDIodHJ1ZSk7XG4gIH1cblxuICAgIGNvbnN0IEFjY29yZGlvbkV4YW1wbGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgICAgIGNvbnN0IHRvZ2dsZUFjY29yZGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgICAgfTtcblxuXG4gICAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yUmVmLmN1cnJlbnQuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgfVxuXG4gIFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25DaGFuZ2U9KGUpID0+e1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQuZ2V0Q29udGVudCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge3RpdGxlQ3JlYXRlID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY29sb3I9XCJkYXJrXCIgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgICB7Y291bnRlcn0gPGlucHV0ICBvbkNoYW5nZT17aGFuZGxlVGl0bGVpbnB1dENoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCy0LLQtdC00LjQvdC1INC90LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodCBtZS01XCI+c2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3RpdGxlTmFtZX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvbkNyZWF0ZVRpdGxlfSBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1lLTVcIj5DcmVhdGVOZXdUaXRsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvblBsdXN9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWUtNVwiPkNyZWF0ZU5ld1N1YnRpdGxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5JTiBQUk9HUkVTUzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgIFxuICAgICAgICAgICAgey8qIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259PiAqL31cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDMuMS4xIDxpbnB1dCAgb25DaGFuZ2U9e2hhbmRsZWltcHV0Q2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0LLQstC10LTQuNC90LUg0L3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja31jbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbWUtNVwiPnNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVyfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tCdXR0b25QbHVzfSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbWUtNVwiPis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5JTiBQUk9HUkVTUzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7LyogPC9CdXR0b24+ICovfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAge3Nob3dIMSAmJiA8U3VidGl0bGUgLz59XG4gICAgICAgICAgICB7c2hvd0gyICYmIDxUaXRsZS8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTooXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0NyZWF0ZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIG1lLTVcIj4rPC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICAgIFxuICAgICAgICBcbiAgICApO1xuICB9Il0sIm5hbWVzIjpbIkJ1dHRvbkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJCdXR0b24iLCJDb2xsYXBzZSIsIkNhcmQiLCJDYXJkQm9keSIsIlN1YnRpdGxlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXV0aG9yaXplIiwiRnJvYWxhRWRpdG9yQ29tcG9uZW50IiwiRWRpdG9yIiwiUmVhY3QiLCJ1c2VSZWYiLCJhZGRUaXRsZUFjdGlvbiIsInNldENvdW50ZXJSZWR1Y2VyIiwidGVtcGxhdGVSZXBsYWNlVmFsdWVzIiwiZmllbGRzIiwibmV3VGVtcGxhdGUiLCJUaXRsZSIsImRpc3BhdGNoIiwiY291bnRlclNsaWNlIiwic3RhdGUiLCJhdXRoIiwidGl0bGVDb3VudGVyIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2hvd0gxIiwic2V0U2hvd0gxIiwic2hvd0gyIiwic2V0U2hvd0gyIiwidGl0bGVDcmVhdGUiLCJzZXRUaXRsZUNyZWF0ZSIsInNob3dDb21wb25lbnQiLCJzZXRTaG93Q29tcG9uZW50IiwidGl0bGVOYW1lIiwic2V0VGl0bGVOYW1lIiwiYXJyIiwic2V0QXJyIiwidF9udW1iZXIiLCJzZXRUX251bWJlciIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiaGFuZGxlQ2xpY2tDcmVhdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ29tcG9uZW50Q2xpY2siLCJoYW5kbGVUaXRsZWlucHV0Q2hhbmdlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGFuZGxlQ2xpY2tCdXR0b25QbHVzIiwiaGFuZGxlQ2xpY2tCdXR0b25DcmVhdGVUaXRsZSIsInByZXZDb3VudGVyIiwiQWNjb3JkaW9uRXhhbXBsZSIsInRvZ2dsZUFjY29yZGlvbiIsImVkaXRvclJlZiIsImN1cnJlbnQiLCJnZXRDb250ZW50Iiwib25DaGFuZ2UiLCJjb250ZW50IiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImNvbG9yIiwib25DbGljayIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/title/index.js\n"));

/***/ })

});