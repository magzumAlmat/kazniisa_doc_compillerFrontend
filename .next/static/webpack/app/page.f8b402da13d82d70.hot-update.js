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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ \"(app-pages-browser)/./node_modules/reactstrap/esm/Button.js\");\n/* harmony import */ var _components_subtitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/subtitle */ \"(app-pages-browser)/./src/components/subtitle/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.js\");\n/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_style.min.css\");\n/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_editor.pkgd.min.css\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-froala-wysiwyg */ \"(app-pages-browser)/./node_modules/react-froala-wysiwyg/index.js\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"(app-pages-browser)/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* harmony import */ var _testdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../testdata */ \"(app-pages-browser)/./src/components/testdata.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Title() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    let counterSlice = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth.titleCounter);\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH1, setShowH1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showH2, setShowH2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [titleCreate, setTitleCreate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [titleName, setTitleName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [arr, setArr] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 37\n        }, this),\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 30,\n            columnNumber: 47\n        }, this)\n    ]);\n    const [t_number, setT_number] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    let [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const handleClickCreate = ()=>{\n        setCounter(Number(counterSlice = +1));\n        setTitleCreate(true);\n        console.log(\"Counter Slice = \", counterSlice);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        return ()=>{\n            console.log(\"Компонент удален\");\n        };\n    }, []);\n    const handleComponentClick = ()=>{\n        setShowComponent(false);\n    };\n    const handleTitleinputChange = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        console.log(\"handleclick start\", e.target.value);\n        setTitleName(e.target.value);\n    };\n    const handleClick = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        const formData = new FormData();\n        formData.append(\"name\", titleName);\n        formData.append(\"t_number\", counter);\n        await dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.addTitleAction)(formData));\n        setCounter(counterSlice = +1);\n        console.log(\"counter slice====\", counterSlice);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCounter(counterSlice);\n    }, [\n        counterSlice\n    ]);\n    const handleClickButtonPlus = (e)=>{\n        console.log(\"plus button start\");\n        setShowH1(true);\n    };\n    const handleClickButtonCreateTitle = (e)=>{\n        console.log(\"TitleCounter from slice = \", counterSlice);\n        console.log(\"plus button start\");\n        setCounter((prevCounter)=>prevCounter + 1);\n        setShowH2(true);\n    };\n    const AccordionExample = ()=>{\n        _s1();\n        const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    };\n    _s1(AccordionExample, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n    const toggleAccordion = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const log = ()=>{\n        if (editorRef.current) {\n            console.log(editorRef.current.getContent());\n        }\n    };\n    const onChange = (e)=>{\n        const content = e.target.getContent();\n        console.log(content);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: titleCreate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    style: {\n                        width: \"100%\"\n                    },\n                    color: \"dark\",\n                    onClick: toggleAccordion,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-start\",\n                                children: [\n                                    counter,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: handleTitleinputChange,\n                                        type: \"text\",\n                                        placeholder: \"введине наименование\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClick,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, this),\n                            titleName,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonCreateTitle,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewTitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClickButtonPlus,\n                                        className: \"btn btn-light me-5\",\n                                        children: \"CreateNewSubtitle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-light\",\n                                        children: \"IN PROGRESS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                                lineNumber: 127,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                showH1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subtitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 153,\n                    columnNumber: 24\n                }, this),\n                showH2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {}, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                    lineNumber: 154,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n            lineNumber: 117,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClickCreate,\n                className: \"btn btn-info me-5\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/title/index.js\",\n                lineNumber: 158,\n                columnNumber: 13\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Title, \"sX9qxDIlbzTk5JjyFCx+HHJev5w=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Title;\nvar _c;\n$RefreshReg$(_c, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RpdGxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNc0I7QUFDd0I7QUFDVztBQUNYO0FBQ1M7QUFDTDtBQUNNO0FBQ0c7QUFDVDtBQUNWO0FBQ29CO0FBRWU7QUFDNUQsU0FBU3NCOzs7SUFDdEIsTUFBTUMsV0FBU2Isd0RBQVdBO0lBQzFCLElBQUljLGVBQWNmLHdEQUFXQSxDQUFDLENBQUNnQixRQUFVQSxNQUFNQyxJQUFJLENBQUNDLFlBQVk7SUFDOUQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2tCLFFBQVFDLFVBQVUsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ29CLFFBQVFDLFVBQVUsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3NCLFFBQVFDLFVBQVUsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3dCLGFBQWFDLGVBQWUsR0FBR3pCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQzBCLGVBQWVDLGlCQUFpQixHQUFHM0IsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDNEIsV0FBVUMsYUFBYyxHQUFHN0IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDOEIsS0FBS0MsT0FBTyxHQUFHL0IsK0NBQVFBLENBQUM7c0JBQUMsOERBQUNVOzs7OztzQkFBUyw4REFBQ0E7Ozs7O0tBQVE7SUFDbkQsTUFBTSxDQUFDc0IsVUFBU0MsWUFBWSxHQUFDakMsK0NBQVFBLENBQUM7SUFDdEMsSUFBSSxDQUFDa0MsU0FBUUMsV0FBVyxHQUFDbkMsK0NBQVFBLENBQUM7SUFFbEMsTUFBTW9DLG9CQUFvQjtRQUN0QkQsV0FBV0UsT0FBT3pCLGVBQWEsQ0FBQztRQUNoQ2EsZUFBZTtRQUNmYSxRQUFRQyxHQUFHLENBQUMsb0JBQW1CM0I7SUFFbkM7SUFFQWIsZ0RBQVNBLENBQUM7UUFDTixPQUFPO1lBQ0x1QyxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1DLHVCQUF1QjtRQUMzQmIsaUJBQWlCO0lBQ25CO0lBRUEsTUFBTWMseUJBQXlCLE9BQU1DO1FBQ25DdkIsVUFBVTtRQUNWdUIsRUFBRUMsZUFBZTtRQUNqQkwsUUFBUUMsR0FBRyxDQUFDLHFCQUFvQkcsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBQzlDaEIsYUFBYWEsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO0lBSS9CO0lBR0EsTUFBTUMsY0FBYyxPQUFNSjtRQUN4QnZCLFVBQVU7UUFDVnVCLEVBQUVDLGVBQWU7UUFDZixNQUFNSSxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUXJCO1FBQ3hCbUIsU0FBU0UsTUFBTSxDQUFDLFlBQVlmO1FBRTVCLE1BQU12QixTQUFTTCx1RUFBY0EsQ0FBQ3lDO1FBQzlCWixXQUFXdkIsZUFBYSxDQUFDO1FBQ3pCMEIsUUFBUUMsR0FBRyxDQUFDLHFCQUFvQjNCO0lBRXBDO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ05vQyxXQUFXdkI7SUFDZixHQUFFO1FBQUNBO0tBQWE7SUFHaEIsTUFBTXNDLHdCQUF3QixDQUFDUjtRQUMzQkosUUFBUUMsR0FBRyxDQUFDO1FBQ1psQixVQUFVO0lBQ2Q7SUFDQSxNQUFNOEIsK0JBQStCLENBQUNUO1FBQ3BDSixRQUFRQyxHQUFHLENBQUMsOEJBQThCM0I7UUFDMUMwQixRQUFRQyxHQUFHLENBQUM7UUFDWkosV0FBVyxDQUFDaUIsY0FBZ0JBLGNBQWM7UUFDMUM3QixVQUFVO0lBQ2Q7SUFFRSxNQUFNOEIsbUJBQW1COztRQUN2QixNQUFNLENBQUNuQyxRQUFRQyxVQUFVLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QztRQUZNcUQ7SUFHSixNQUFNQyxrQkFBa0I7UUFDdEJuQyxVQUFVLENBQUNEO0lBQ2I7SUFHQSxNQUFNcUMsWUFBWWxELDZDQUFNQSxDQUFDO0lBRXpCLE1BQU1rQyxNQUFNO1FBQ1YsSUFBSWdCLFVBQVVDLE9BQU8sRUFBRTtZQUNyQmxCLFFBQVFDLEdBQUcsQ0FBQ2dCLFVBQVVDLE9BQU8sQ0FBQ0MsVUFBVTtRQUMxQztJQUdGO0lBRUEsTUFBTUMsV0FBUyxDQUFDaEI7UUFDZCxNQUFNaUIsVUFBVWpCLEVBQUVFLE1BQU0sQ0FBQ2EsVUFBVTtRQUNuQ25CLFFBQVFDLEdBQUcsQ0FBQ29CO0lBQ2Q7SUFFQSxxQkFDRTtrQkFDQ25DLDRCQUNELDhEQUFDb0M7OzhCQUNELDhEQUFDcEUsbURBQU1BO29CQUFDcUUsT0FBTzt3QkFBRUMsT0FBTztvQkFBTztvQkFBR0MsT0FBTTtvQkFBT0MsU0FBU1Y7OEJBQ3RELDRFQUFDTTt3QkFBSUssV0FBVTs7MENBQ1gsOERBQUNMO2dDQUFJSyxXQUFVOztvQ0FDZC9CO29DQUFRO2tEQUFDLDhEQUFDZ0M7d0NBQU9SLFVBQVVqQjt3Q0FBd0IwQixNQUFLO3dDQUFPQyxhQUFZOzs7Ozs7a0RBRXhFLDhEQUFDQzt3Q0FBT0wsU0FBU2xCO3dDQUFZbUIsV0FBVTtrREFBcUI7Ozs7Ozs7Ozs7Ozs0QkFFL0RyQzswQ0FFRCw4REFBQ2dDO2dDQUFJSyxXQUFVOztrREFDWCw4REFBQ0k7d0NBQU9MLFNBQVNiO3dDQUE4QmMsV0FBVTtrREFBcUI7Ozs7OztrREFDOUUsOERBQUNJO3dDQUFPTCxTQUFTZDt3Q0FBdUJlLFdBQVU7a0RBQXFCOzs7Ozs7a0RBQ3ZFLDhEQUFDSTt3Q0FBT0osV0FBVTtrREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXVCdkM3Qyx3QkFBVSw4REFBQ3hCLDREQUFRQTs7Ozs7Z0JBQ25CMEIsd0JBQVUsOERBQUNaOzs7Ozs7Ozs7O2lDQUdaO3NCQUNBLDRFQUFDMkQ7Z0JBQU9MLFNBQVM1QjtnQkFBbUI2QixXQUFVOzBCQUFvQjs7Ozs7Ozs7QUFPNUU7R0FqSnNCdkQ7O1FBQ1BaLG9EQUFXQTtRQUNSRCxvREFBV0E7OztLQUZQYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90aXRsZS9pbmRleC5qcz84NjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQnV0dG9uRHJvcGRvd24sXG4gICAgRHJvcGRvd25Ub2dnbGUsXG4gICAgRHJvcGRvd25NZW51LFxuICAgIERyb3Bkb3duSXRlbSxcbiAgICBCdXR0b24sIENvbGxhcHNlLCBDYXJkLCBDYXJkQm9keVxuICB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG4gIGltcG9ydCBTdWJ0aXRsZSBmcm9tICdAL2NvbXBvbmVudHMvc3VidGl0bGUnXG4gIGltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuICBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4gIGltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gXCJAL3N0b3JlL3NsaWNlcy9hdXRoU2xpY2VcIjtcbiAgaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2Nzcy9mcm9hbGFfc3R5bGUubWluLmNzcyc7XG4gIGltcG9ydCAnZnJvYWxhLWVkaXRvci9jc3MvZnJvYWxhX2VkaXRvci5wa2dkLm1pbi5jc3MnO1xuICBpbXBvcnQgRnJvYWxhRWRpdG9yQ29tcG9uZW50IGZyb20gJ3JlYWN0LWZyb2FsYS13eXNpd3lnJztcbiAgaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQHRpbnltY2UvdGlueW1jZS1yZWFjdCc7XG4gIGltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4gIGltcG9ydCB7IGFkZFRpdGxlQWN0aW9uIH0gZnJvbSBcIkAvc3RvcmUvc2xpY2VzL2F1dGhTbGljZVwiO1xuXG4gIGltcG9ydCB7IHRlbXBsYXRlUmVwbGFjZVZhbHVlcywgZmllbGRzLCBuZXdUZW1wbGF0ZSB9IGZyb20gXCIuLi90ZXN0ZGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGUoKSB7XG4gIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKClcbiAgbGV0IGNvdW50ZXJTbGljZT0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnRpdGxlQ291bnRlcik7XG4gICAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93SDEsIHNldFNob3dIMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dIMiwgc2V0U2hvd0gyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdGl0bGVDcmVhdGUsIHNldFRpdGxlQ3JlYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd0NvbXBvbmVudCwgc2V0U2hvd0NvbXBvbmVudF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbdGl0bGVOYW1lLHNldFRpdGxlTmFtZSBdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthcnIsIHNldEFycl0gPSB1c2VTdGF0ZShbPFRpdGxlLz4sIDxUaXRsZS8+XSk7XG4gICAgY29uc3QgW3RfbnVtYmVyLHNldFRfbnVtYmVyXT11c2VTdGF0ZSgnJylcbiAgICBsZXQgW2NvdW50ZXIsc2V0Q291bnRlcl09dXNlU3RhdGUoMClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrQ3JlYXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRDb3VudGVyKE51bWJlcihjb3VudGVyU2xpY2U9KzEpKVxuICAgICAgICBzZXRUaXRsZUNyZWF0ZSh0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvdW50ZXIgU2xpY2UgPSAnLGNvdW50ZXJTbGljZSlcbiAgICAgICAgXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ9Ca0L7QvNC/0L7QvdC10L3RgiDRg9C00LDQu9C10L0nKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgY29uc3QgaGFuZGxlQ29tcG9uZW50Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dDb21wb25lbnQoZmFsc2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFuZGxlVGl0bGVpbnB1dENoYW5nZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlY2xpY2sgc3RhcnQnLGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0VGl0bGVOYW1lKGUudGFyZ2V0LnZhbHVlKVxuXG4gICAgICBcbiAgICAgIFxuICAgIH07XG5cbiBcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jKGUpID0+IHtcbiAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRpdGxlTmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndF9udW1iZXInLCBjb3VudGVyKTtcblxuICAgICAgICBhd2FpdCBkaXNwYXRjaChhZGRUaXRsZUFjdGlvbihmb3JtRGF0YSkpXG4gICAgICAgIHNldENvdW50ZXIoY291bnRlclNsaWNlPSsxKVxuICAgICAgICBjb25zb2xlLmxvZygnY291bnRlciBzbGljZT09PT0nLGNvdW50ZXJTbGljZSlcbiAgICAgIFxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgc2V0Q291bnRlcihjb3VudGVyU2xpY2UpXG4gICAgfSxbY291bnRlclNsaWNlXSlcblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tCdXR0b25QbHVzID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsdXMgYnV0dG9uIHN0YXJ0JylcbiAgICAgICAgc2V0U2hvd0gxKHRydWUpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGlja0J1dHRvbkNyZWF0ZVRpdGxlID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaXRsZUNvdW50ZXIgZnJvbSBzbGljZSA9ICcsIGNvdW50ZXJTbGljZSlcbiAgICAgIGNvbnNvbGUubG9nKCdwbHVzIGJ1dHRvbiBzdGFydCcpO1xuICAgICAgc2V0Q291bnRlcigocHJldkNvdW50ZXIpID0+IHByZXZDb3VudGVyICsgMSk7XG4gICAgICBzZXRTaG93SDIodHJ1ZSk7XG4gIH1cblxuICAgIGNvbnN0IEFjY29yZGlvbkV4YW1wbGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgICAgIGNvbnN0IHRvZ2dsZUFjY29yZGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgICAgfTtcblxuXG4gICAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yUmVmLmN1cnJlbnQuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgfVxuXG4gIFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25DaGFuZ2U9KGUpID0+e1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQuZ2V0Q29udGVudCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge3RpdGxlQ3JlYXRlID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY29sb3I9XCJkYXJrXCIgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgICB7Y291bnRlcn0gPGlucHV0ICBvbkNoYW5nZT17aGFuZGxlVGl0bGVpbnB1dENoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCy0LLQtdC00LjQvdC1INC90LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodCBtZS01XCI+c2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3RpdGxlTmFtZX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvbkNyZWF0ZVRpdGxlfSBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1lLTVcIj5DcmVhdGVOZXdUaXRsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0J1dHRvblBsdXN9IGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWUtNVwiPkNyZWF0ZU5ld1N1YnRpdGxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5JTiBQUk9HUkVTUzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgIFxuICAgICAgICAgICAgey8qIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259PiAqL31cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDMuMS4xIDxpbnB1dCAgb25DaGFuZ2U9e2hhbmRsZWltcHV0Q2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0LLQstC10LTQuNC90LUg0L3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja31jbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbWUtNVwiPnNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVyfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tCdXR0b25QbHVzfSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbWUtNVwiPis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5JTiBQUk9HUkVTUzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7LyogPC9CdXR0b24+ICovfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAge3Nob3dIMSAmJiA8U3VidGl0bGU+PC9TdWJ0aXRsZT59XG4gICAgICAgICAgICB7c2hvd0gyICYmIDxUaXRsZT48L1RpdGxlPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk6KFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tDcmVhdGV9IGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtZS01XCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgKTtcbiAgfSJdLCJuYW1lcyI6WyJCdXR0b25Ecm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiQnV0dG9uIiwiQ29sbGFwc2UiLCJDYXJkIiwiQ2FyZEJvZHkiLCJTdWJ0aXRsZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGhvcml6ZSIsIkZyb2FsYUVkaXRvckNvbXBvbmVudCIsIkVkaXRvciIsIlJlYWN0IiwidXNlUmVmIiwiYWRkVGl0bGVBY3Rpb24iLCJ0ZW1wbGF0ZVJlcGxhY2VWYWx1ZXMiLCJmaWVsZHMiLCJuZXdUZW1wbGF0ZSIsIlRpdGxlIiwiZGlzcGF0Y2giLCJjb3VudGVyU2xpY2UiLCJzdGF0ZSIsImF1dGgiLCJ0aXRsZUNvdW50ZXIiLCJkcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzaG93SDEiLCJzZXRTaG93SDEiLCJzaG93SDIiLCJzZXRTaG93SDIiLCJ0aXRsZUNyZWF0ZSIsInNldFRpdGxlQ3JlYXRlIiwic2hvd0NvbXBvbmVudCIsInNldFNob3dDb21wb25lbnQiLCJ0aXRsZU5hbWUiLCJzZXRUaXRsZU5hbWUiLCJhcnIiLCJzZXRBcnIiLCJ0X251bWJlciIsInNldFRfbnVtYmVyIiwiY291bnRlciIsInNldENvdW50ZXIiLCJoYW5kbGVDbGlja0NyZWF0ZSIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDb21wb25lbnRDbGljayIsImhhbmRsZVRpdGxlaW5wdXRDaGFuZ2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoYW5kbGVDbGlja0J1dHRvblBsdXMiLCJoYW5kbGVDbGlja0J1dHRvbkNyZWF0ZVRpdGxlIiwicHJldkNvdW50ZXIiLCJBY2NvcmRpb25FeGFtcGxlIiwidG9nZ2xlQWNjb3JkaW9uIiwiZWRpdG9yUmVmIiwiY3VycmVudCIsImdldENvbnRlbnQiLCJvbkNoYW5nZSIsImNvbnRlbnQiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiY29sb3IiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/title/index.js\n"));

/***/ })

});