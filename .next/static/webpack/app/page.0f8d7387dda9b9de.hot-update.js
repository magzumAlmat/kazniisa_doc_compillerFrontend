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

/***/ "(app-pages-browser)/./src/components/subtitle/index.js":
/*!******************************************!*\
  !*** ./src/components/subtitle/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Subtitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ \"(app-pages-browser)/./node_modules/reactstrap/esm/Button.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ \"(app-pages-browser)/./node_modules/reactstrap/esm/Collapse.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.js\");\n/* harmony import */ var froala_editor_css_froala_style_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! froala-editor/css/froala_style.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_style.min.css\");\n/* harmony import */ var froala_editor_css_froala_editor_pkgd_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor/css/froala_editor.pkgd.min.css */ \"(app-pages-browser)/./node_modules/froala-editor/css/froala_editor.pkgd.min.css\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-froala-wysiwyg */ \"(app-pages-browser)/./node_modules/react-froala-wysiwyg/index.js\");\n/* harmony import */ var react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinymce/tinymce-react */ \"(app-pages-browser)/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\");\n/* harmony import */ var _testdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../testdata */ \"(app-pages-browser)/./src/components/testdata.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Subtitle(param) {\n    let { childCounter, passedData } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showH1, setShowH1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [titleCreate, setTitleCreate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [titleName, setTitleName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [textInEditor, setTextInEditor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // const [arr, setArr] = useState([<Title/>, <Title/>]);\n    const [t_number, setT_number] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [SubtitleP_Number, setSubtitleP_Number] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    let [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Number(childCounter));\n    const handleClickCreate = ()=>{\n        setCounter(counter + 1);\n        setTitleCreate(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        return ()=>{\n            console.log(\"Компонент удален\");\n        };\n    }, []);\n    const handleComponentClick = ()=>{\n        setShowComponent(false);\n    };\n    const handleTitleinputChange = async (e)=>{\n        setIsOpen(false);\n        e.stopPropagation();\n        console.log(\"handleclick start\", e.target.value);\n        setTitleName(e.target.value);\n    };\n    const handleClickButtonPlus = (e)=>{\n        console.log(\"plus button start\");\n        setShowH1(true);\n    };\n    const AccordionExample = ()=>{\n        _s1();\n        const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    };\n    _s1(AccordionExample, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n    const toggleAccordion = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const log = async ()=>{\n        console.log(\"log started\");\n        if (editorRef.getContent) {}\n        // setTextInEditor(editorRef.current.getContent())\n        alert(\"Сабтайтл сохранился\");\n    };\n    const handleClick = async ()=>{\n        console.log(\"passedData==========\", passedData);\n        const formData = new FormData();\n        formData.append(\"name\", titleName);\n        formData.append(\"p_number\", String(SubtitleP_Number));\n        formData.append(\"text\", textInEditor);\n        formData.append(\"TitleId\", String(passedData));\n        await dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.addSubTitleAction)(formData)).then((response)=>{\n            // Handle success, if needed\n            console.log(\"Subtitle added successfully:\", response);\n        }).catch((error)=>{\n            // Handle error, if needed\n            console.error(\"Subtitle creation failed:\", error);\n        });\n        alert(\"subtitle added\");\n    };\n    const onChange = async (e)=>{\n        const content = e.target.getContent();\n        console.log(content);\n        setTextInEditor(content);\n        // console.log(editorRef.current.getContent());\n        console.log(\"textEditorVAR=\", textInEditor);\n    };\n    const setSubTitlePNumber = (e)=>{\n        setIsOpen(false);\n        setSubtitleP_Number(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: titleCreate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"ms-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"100%\",\n                        \"backgroundColor\": \"gray\"\n                    },\n                    color: \"dark\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: setSubTitlePNumber,\n                                        type: \"text\",\n                                        placeholder: \"введине #\",\n                                        style: {\n                                            width: \"100px\"\n                                        },\n                                        className: \"me-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: handleTitleinputChange,\n                                        type: \"text\",\n                                        placeholder: \"введине наименование\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                                lineNumber: 130,\n                                columnNumber: 15\n                            }, this),\n                            titleName,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                onClick: toggleAccordion,\n                                children: \"open editor\"\n                            }, void 0, false, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                                lineNumber: 145,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-content-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-secondary\",\n                                    children: \"IN PROGRESS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                                lineNumber: 146,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    isOpen: isOpen,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_7__.Editor, {\n                            initialValue: _testdata__WEBPACK_IMPORTED_MODULE_8__.newTemplate,\n                            apiKey: \"rn7c2nhyq6sboqijw5xcm9xtw3dr4koarjjjlyvklnr35u2r\",\n                            init: {\n                                selector: \"#tiny\",\n                                plugins: \"link image code table noneditable template hr importcss\",\n                                menubar: \" format table tools\",\n                                noneditable_noneditable_class: \"mceNonEditable myClass\",\n                                toolbar: \"image undo redo | hr | bold italic | alignleft aligncenter alignright | template | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol\",\n                                noneditable_regexp: /{{([^}]*)}}/g,\n                                height: 500,\n                                template_replace_values: _testdata__WEBPACK_IMPORTED_MODULE_8__.templateReplaceValues,\n                                template_preview_replace_values: _testdata__WEBPACK_IMPORTED_MODULE_8__.templateReplaceValues,\n                                templates: _testdata__WEBPACK_IMPORTED_MODULE_8__.fields,\n                                contextmenu: \"table\",\n                                branding: false\n                            },\n                            onChange: onChange\n                        }, void 0, false, {\n                            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                            lineNumber: 170,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClick,\n                            children: \"SAVE with dispatch\"\n                        }, void 0, false, {\n                            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                            lineNumber: 194,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                    lineNumber: 168,\n                    columnNumber: 13\n                }, this),\n                showH1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Subtitle, {\n                    childCounter: counter\n                }, void 0, false, {\n                    fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                    lineNumber: 198,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n            lineNumber: 127,\n            columnNumber: 11\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClickCreate,\n                className: \"btn btn-info me-5\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/Users/billionare/Documents/DEVELOPMENT/REACT/kazniisa_editorFrontend/src/components/subtitle/index.js\",\n                lineNumber: 202,\n                columnNumber: 13\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Subtitle, \"sGV/uRvUmJP/UxLSTENpbE32qf4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = Subtitle;\nvar _c;\n$RefreshReg$(_c, \"Subtitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N1YnRpdGxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNc0I7QUFDbUM7QUFDWDtBQUNTO0FBQ0w7QUFDTTtBQUNHO0FBQ1Q7QUFDVjtBQUNzQztBQUVIO0FBQzVELFNBQVNzQixTQUFTLEtBQXlCO1FBQXpCLEVBQUNDLFlBQVksRUFBQ0MsVUFBVSxFQUFDLEdBQXpCOzs7SUFDL0IsTUFBTUMsV0FBU2hCLHdEQUFXQTtJQUN4QixNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2lCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ21CLFFBQVFDLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3FCLGFBQWFDLGVBQWUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3VCLGVBQWVDLGlCQUFpQixHQUFHeEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDeUIsV0FBVUMsYUFBYyxHQUFHMUIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDMkIsY0FBYUMsZ0JBQWdCLEdBQUM1QiwrQ0FBUUEsQ0FBQztJQUM5Qyx3REFBd0Q7SUFDeEQsTUFBTSxDQUFDNkIsVUFBU0MsWUFBWSxHQUFDOUIsK0NBQVFBLENBQUM7SUFDdEMsTUFBSyxDQUFDK0Isa0JBQWlCQyxvQkFBb0IsR0FBQ2hDLCtDQUFRQSxDQUFDO0lBQ3JELElBQUksQ0FBQ2lDLFNBQVFDLFdBQVcsR0FBQ2xDLCtDQUFRQSxDQUFDbUMsT0FBT3ZCO0lBRXpDLE1BQU13QixvQkFBb0I7UUFDdEJGLFdBQVdELFVBQVE7UUFDbkJYLGVBQWU7SUFDbkI7SUFFQXZCLGdEQUFTQSxDQUFDO1FBQ04sT0FBTztZQUNMc0MsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFF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cEJDLFFBQVE7Z0NBQ1JDLHlCQUF5QjNFLDREQUFxQkE7Z0NBQzlDNEUsaUNBQWlDNUUsNERBQXFCQTtnQ0FDdEQ2RSxXQUFXNUUsNkNBQU1BO2dDQUNqQjZFLGFBQWE7Z0NBQ2JDLFVBQVU7NEJBSVY7NEJBQ0EzQixVQUFVQTs7Ozs7O3NDQUdkLDhEQUFDWTs0QkFBT0QsU0FBU3BCO3NDQUFjOzs7Ozs7Ozs7Ozs7Z0JBSWxDaEMsd0JBQVUsOERBQUNSO29CQUFTQyxjQUFjcUI7Ozs7Ozs7Ozs7O2lDQUduQztzQkFDQSw0RUFBQ3VDO2dCQUFPRCxTQUFTbkM7Z0JBQW1CNEIsV0FBVTswQkFBb0I7Ozs7Ozs7O0FBTzVFO0dBOUxzQnJEOztRQUNQYixvREFBV0E7OztLQURKYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zdWJ0aXRsZS9pbmRleC5qcz85MmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQnV0dG9uRHJvcGRvd24sXG4gICAgRHJvcGRvd25Ub2dnbGUsXG4gICAgRHJvcGRvd25NZW51LFxuICAgIERyb3Bkb3duSXRlbSxcbiAgICBCdXR0b24sIENvbGxhcHNlLCBDYXJkLCBDYXJkQm9keVxuICB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG4gIGltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuICBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4gIGltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gXCJAL3N0b3JlL3NsaWNlcy9hdXRoU2xpY2VcIjtcbiAgaW1wb3J0ICdmcm9hbGEtZWRpdG9yL2Nzcy9mcm9hbGFfc3R5bGUubWluLmNzcyc7XG4gIGltcG9ydCAnZnJvYWxhLWVkaXRvci9jc3MvZnJvYWxhX2VkaXRvci5wa2dkLm1pbi5jc3MnO1xuICBpbXBvcnQgRnJvYWxhRWRpdG9yQ29tcG9uZW50IGZyb20gJ3JlYWN0LWZyb2FsYS13eXNpd3lnJztcbiAgaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQHRpbnltY2UvdGlueW1jZS1yZWFjdCc7XG4gIGltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4gIGltcG9ydCB7IGFkZFRpdGxlQWN0aW9uLGFkZFN1YlRpdGxlQWN0aW9uIH0gZnJvbSBcIkAvc3RvcmUvc2xpY2VzL2F1dGhTbGljZVwiO1xuXG4gIGltcG9ydCB7IHRlbXBsYXRlUmVwbGFjZVZhbHVlcywgZmllbGRzLCBuZXdUZW1wbGF0ZSB9IGZyb20gXCIuLi90ZXN0ZGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VidGl0bGUoe2NoaWxkQ291bnRlcixwYXNzZWREYXRhfSkge1xuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXG4gICAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93SDEsIHNldFNob3dIMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3RpdGxlQ3JlYXRlLCBzZXRUaXRsZUNyZWF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dDb21wb25lbnQsIHNldFNob3dDb21wb25lbnRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RpdGxlTmFtZSxzZXRUaXRsZU5hbWUgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdGV4dEluRWRpdG9yLHNldFRleHRJbkVkaXRvcl09dXNlU3RhdGUoJycpXG4gICAgLy8gY29uc3QgW2Fyciwgc2V0QXJyXSA9IHVzZVN0YXRlKFs8VGl0bGUvPiwgPFRpdGxlLz5dKTtcbiAgICBjb25zdCBbdF9udW1iZXIsc2V0VF9udW1iZXJdPXVzZVN0YXRlKCcnKVxuICAgIGNvbnN0W1N1YnRpdGxlUF9OdW1iZXIsc2V0U3VidGl0bGVQX051bWJlcl09dXNlU3RhdGUoJycpXG4gICAgbGV0IFtjb3VudGVyLHNldENvdW50ZXJdPXVzZVN0YXRlKE51bWJlcihjaGlsZENvdW50ZXIpKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tDcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgIHNldENvdW50ZXIoY291bnRlcisxKVxuICAgICAgICBzZXRUaXRsZUNyZWF0ZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn0JrQvtC80L/QvtC90LXQvdGCINGD0LTQsNC70LXQvScpO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuXG4gICAgICBjb25zdCBoYW5kbGVDb21wb25lbnRDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0NvbXBvbmVudChmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYW5kbGVUaXRsZWlucHV0Q2hhbmdlID0gYXN5bmMoZSkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVjbGljayBzdGFydCcsZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBzZXRUaXRsZU5hbWUoZS50YXJnZXQudmFsdWUpXG5cbiAgICAgIFxuICAgICAgXG4gICAgfTtcbiAgIFxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0J1dHRvblBsdXMgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncGx1cyBidXR0b24gc3RhcnQnKVxuICAgICAgICBzZXRTaG93SDEodHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgQWNjb3JkaW9uRXhhbXBsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgfVxuICAgICAgY29uc3QgdG9nZ2xlQWNjb3JkaW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgICB9O1xuXG5cbiAgICAgIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgICAgY29uc3QgbG9nID0gIGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nIHN0YXJ0ZWQnKVxuICAgICAgIFxuICAgICAgICAgaWYgKGVkaXRvclJlZi5nZXRDb250ZW50KSB7XG5cbiAgICAgICAgICBcbiAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNldFRleHRJbkVkaXRvcihlZGl0b3JSZWYuY3VycmVudC5nZXRDb250ZW50KCkpXG4gICAgICAgIFxuICAgICAgICAgYWxlcnQoJ9Ch0LDQsdGC0LDQudGC0Lsg0YHQvtGF0YDQsNC90LjQu9GB0Y8nKVxuICBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXNzZWREYXRhPT09PT09PT09PScscGFzc2VkRGF0YSlcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGl0bGVOYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwX251bWJlcicsIFN0cmluZyhTdWJ0aXRsZVBfTnVtYmVyKSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGV4dCcsIHRleHRJbkVkaXRvcik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnVGl0bGVJZCcsIFN0cmluZyhwYXNzZWREYXRhKSk7XG4gICAgXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGFkZFN1YlRpdGxlQWN0aW9uKGZvcm1EYXRhKSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzLCBpZiBuZWVkZWRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWJ0aXRsZSBhZGRlZCBzdWNjZXNzZnVsbHk6JywgcmVzcG9uc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yLCBpZiBuZWVkZWRcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N1YnRpdGxlIGNyZWF0aW9uIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYWxlcnQoJ3N1YnRpdGxlIGFkZGVkJylcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG9uQ2hhbmdlPSBhc3luYyhlKSA9PntcbiAgICAgICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LmdldENvbnRlbnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudCk7XG4gICAgICAgIHNldFRleHRJbkVkaXRvcihjb250ZW50KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlZGl0b3JSZWYuY3VycmVudC5nZXRDb250ZW50KCkpO1xuICAgICAgICBjb25zb2xlLmxvZygndGV4dEVkaXRvclZBUj0nLHRleHRJbkVkaXRvcilcblxuICAgICAgICAgXG4gICAgICB9XG4gICAgICBjb25zdCBzZXRTdWJUaXRsZVBOdW1iZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgICBzZXRTdWJ0aXRsZVBfTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHt0aXRsZUNyZWF0ZSA/IChcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLTVcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsJ2JhY2tncm91bmRDb2xvcic6XCJncmF5XCIgfX0gY29sb3I9XCJkYXJrXCIgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTdWJUaXRsZVBOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCy0LLQtdC00LjQvdC1ICNcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWUtMlwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8aW5wdXQgIG9uQ2hhbmdlPXtoYW5kbGVUaXRsZWlucHV0Q2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0LLQstC10LTQuNC90LUg0L3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgLz5cblxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtZS01XCI+c2F2ZTwvYnV0dG9uPiAqL31cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3RpdGxlTmFtZX1cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259Pm9wZW4gZWRpdG9yPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tCdXR0b25QbHVzfSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbWUtNVwiPis8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+SU4gUFJPR1JFU1M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufT4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAzLjEuMSA8aW5wdXQgIG9uQ2hhbmdlPXtoYW5kbGVpbXB1dENoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCy0LLQtdC00LjQvdC1INC90LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Y2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIG1lLTVcIj5zYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQnV0dG9uUGx1c30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIG1lLTVcIj4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+SU4gUFJPR1JFU1M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgey8qIDwvQnV0dG9uPiAqL31cbiAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgICAgey8qIDxGcm9hbGFFZGl0b3JDb21wb25lbnQgdGFnPVwidGV4dGFyZWFcIiAvPiAqL31cbiAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17bmV3VGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgIGFwaUtleT0ncm43YzJuaHlxNnNib3Fpanc1eGNtOXh0dzNkcjRrb2FyampqbHl2a2xucjM1dTJyJ1xuICAgICAgICAgICAgICAgICAgICBpbml0PXt7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcIiN0aW55XCIsXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFwibGluayBpbWFnZSBjb2RlIHRhYmxlIG5vbmVkaXRhYmxlIHRlbXBsYXRlIGhyIGltcG9ydGNzc1wiLFxuICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBcIiBmb3JtYXQgdGFibGUgdG9vbHNcIixcbiAgICAgICAgICAgICAgICAgICAgbm9uZWRpdGFibGVfbm9uZWRpdGFibGVfY2xhc3M6IFwibWNlTm9uRWRpdGFibGUgbXlDbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZSB1bmRvIHJlZG8gfCBociB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCB0ZW1wbGF0ZSB8IHRhYmxlIHRhYmxlZGVsZXRlIHwgdGFibGVwcm9wcyB0YWJsZXJvd3Byb3BzIHRhYmxlY2VsbHByb3BzIHwgdGFibGVpbnNlcnRyb3diZWZvcmUgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xcIixcbiAgICAgICAgICAgICAgICAgICAgbm9uZWRpdGFibGVfcmVnZXhwOiAve3soW159XSopfX0vZyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlX3JlcGxhY2VfdmFsdWVzOiB0ZW1wbGF0ZVJlcGxhY2VWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlX3ByZXZpZXdfcmVwbGFjZV92YWx1ZXM6IHRlbXBsYXRlUmVwbGFjZVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVzOiBmaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRtZW51OiBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAvL3NraW5fdXJsOiBcIi9za2luc1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyBza2luOiBcIlRFU1RTS0lOXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vY29udGVudF9jc3M6IFwiVEVTVFNLSU5cIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8vb3V0cHV0Rm9ybWF0PSd0ZXh0J1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gPlNBVkUgd2l0aCBkaXNwYXRjaDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB7c2hvd0gxICYmIDxTdWJ0aXRsZSBjaGlsZENvdW50ZXI9e2NvdW50ZXJ9Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApOihcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ3JlYXRlfSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbWUtNVwiPis8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICk7XG4gIH0iXSwibmFtZXMiOlsiQnV0dG9uRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsIkJ1dHRvbiIsIkNvbGxhcHNlIiwiQ2FyZCIsIkNhcmRCb2R5IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXV0aG9yaXplIiwiRnJvYWxhRWRpdG9yQ29tcG9uZW50IiwiRWRpdG9yIiwiUmVhY3QiLCJ1c2VSZWYiLCJhZGRUaXRsZUFjdGlvbiIsImFkZFN1YlRpdGxlQWN0aW9uIiwidGVtcGxhdGVSZXBsYWNlVmFsdWVzIiwiZmllbGRzIiwibmV3VGVtcGxhdGUiLCJTdWJ0aXRsZSIsImNoaWxkQ291bnRlciIsInBhc3NlZERhdGEiLCJkaXNwYXRjaCIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsImlzT3BlbiIsInNldElzT3BlbiIsInNob3dIMSIsInNldFNob3dIMSIsInRpdGxlQ3JlYXRlIiwic2V0VGl0bGVDcmVhdGUiLCJzaG93Q29tcG9uZW50Iiwic2V0U2hvd0NvbXBvbmVudCIsInRpdGxlTmFtZSIsInNldFRpdGxlTmFtZSIsInRleHRJbkVkaXRvciIsInNldFRleHRJbkVkaXRvciIsInRfbnVtYmVyIiwic2V0VF9udW1iZXIiLCJTdWJ0aXRsZVBfTnVtYmVyIiwic2V0U3VidGl0bGVQX051bWJlciIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiTnVtYmVyIiwiaGFuZGxlQ2xpY2tDcmVhdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ29tcG9uZW50Q2xpY2siLCJoYW5kbGVUaXRsZWlucHV0Q2hhbmdlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2tCdXR0b25QbHVzIiwiQWNjb3JkaW9uRXhhbXBsZSIsInRvZ2dsZUFjY29yZGlvbiIsImVkaXRvclJlZiIsImdldENvbnRlbnQiLCJhbGVydCIsImhhbmRsZUNsaWNrIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIlN0cmluZyIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJvbkNoYW5nZSIsImNvbnRlbnQiLCJzZXRTdWJUaXRsZVBOdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiY29sb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJidXR0b24iLCJpbml0aWFsVmFsdWUiLCJhcGlLZXkiLCJpbml0Iiwic2VsZWN0b3IiLCJwbHVnaW5zIiwibWVudWJhciIsIm5vbmVkaXRhYmxlX25vbmVkaXRhYmxlX2NsYXNzIiwidG9vbGJhciIsIm5vbmVkaXRhYmxlX3JlZ2V4cCIsImhlaWdodCIsInRlbXBsYXRlX3JlcGxhY2VfdmFsdWVzIiwidGVtcGxhdGVfcHJldmlld19yZXBsYWNlX3ZhbHVlcyIsInRlbXBsYXRlcyIsImNvbnRleHRtZW51IiwiYnJhbmRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/subtitle/index.js\n"));

/***/ })

});