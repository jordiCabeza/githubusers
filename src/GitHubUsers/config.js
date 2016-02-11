System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "js/build.js": [
      "js/app.js",
      "github:github/fetch@0.11.0.js",
      "js/router.js",
      "npm:babel-polyfill@6.5.0.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:Knockout-Contrib/Knockout-Validation@2.0.3.js",
      "js/components/nav-bar/nav-bar.js",
      "js/components/user-search/user-search.js",
      "github:knockout/knockout@3.4.0.js",
      "npm:jquery@2.2.0.js",
      "npm:crossroads@0.12.2.js",
      "npm:hasher@1.2.0.js",
      "npm:babel-runtime@5.8.35/core-js/promise.js",
      "js/services/github/github-service.js",
      "github:Knockout-Contrib/Knockout-Validation@2.0.3/dist/knockout.validation.js",
      "npm:babel-polyfill@6.5.0/lib/index.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:jquery@2.2.0/dist/jquery.js",
      "js/components/about/about.html!github:systemjs/plugin-text@0.0.4.js",
      "js/components/nav-bar/nav-bar.html!github:systemjs/plugin-text@0.0.4.js",
      "js/components/user-search/user-search.html!github:systemjs/plugin-text@0.0.4.js",
      "github:github/fetch@0.11.0/fetch.js",
      "github:knockout/knockout@3.4.0/dist/knockout.debug.js",
      "npm:babel-regenerator-runtime@6.5.0.js",
      "npm:core-js@1.2.6/shim.js",
      "npm:crossroads@0.12.2/dist/crossroads.js",
      "npm:hasher@1.2.0/dist/js/hasher.js",
      "npm:core-js@1.2.6/library/fn/promise.js",
      "github:components/jquery@2.2.0.js",
      "npm:core-js@1.2.6/modules/es6.object.assign.js",
      "npm:core-js@1.2.6/modules/es5.js",
      "npm:core-js@1.2.6/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string.js",
      "npm:signals@1.0.0.js",
      "npm:core-js@1.2.6/modules/es6.object.is.js",
      "npm:core-js@1.2.6/modules/es6.object.to-string.js",
      "npm:core-js@1.2.6/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.6/modules/es6.object.freeze.js",
      "npm:core-js@1.2.6/modules/es6.object.seal.js",
      "npm:core-js@1.2.6/modules/es6.object.prevent-extensions.js",
      "npm:core-js@1.2.6/modules/es6.object.is-sealed.js",
      "npm:core-js@1.2.6/modules/es6.object.is-frozen.js",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.6/modules/es6.object.is-extensible.js",
      "npm:core-js@1.2.6/modules/es6.object.get-prototype-of.js",
      "npm:core-js@1.2.6/modules/es6.object.keys.js",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-names.js",
      "npm:core-js@1.2.6/modules/es6.number.constructor.js",
      "npm:core-js@1.2.6/modules/es6.number.epsilon.js",
      "npm:core-js@1.2.6/modules/es6.function.has-instance.js",
      "npm:core-js@1.2.6/modules/es6.function.name.js",
      "npm:core-js@1.2.6/modules/es6.number.is-safe-integer.js",
      "npm:core-js@1.2.6/modules/es6.number.is-integer.js",
      "npm:core-js@1.2.6/modules/es6.symbol.js",
      "npm:core-js@1.2.6/modules/es6.number.is-finite.js",
      "npm:core-js@1.2.6/modules/es6.number.is-nan.js",
      "npm:core-js@1.2.6/modules/es6.number.min-safe-integer.js",
      "npm:core-js@1.2.6/modules/es6.number.max-safe-integer.js",
      "npm:core-js@1.2.6/modules/es6.number.parse-float.js",
      "npm:core-js@1.2.6/modules/es6.number.parse-int.js",
      "npm:core-js@1.2.6/modules/es6.math.acosh.js",
      "npm:core-js@1.2.6/modules/es6.math.asinh.js",
      "npm:core-js@1.2.6/modules/es6.math.atanh.js",
      "npm:core-js@1.2.6/modules/es6.math.cbrt.js",
      "npm:core-js@1.2.6/modules/es6.math.clz32.js",
      "npm:core-js@1.2.6/modules/es6.math.cosh.js",
      "npm:core-js@1.2.6/modules/es6.math.expm1.js",
      "npm:core-js@1.2.6/modules/es6.math.fround.js",
      "npm:core-js@1.2.6/modules/es6.math.imul.js",
      "npm:core-js@1.2.6/modules/es6.math.log10.js",
      "npm:core-js@1.2.6/modules/es6.math.log1p.js",
      "npm:core-js@1.2.6/modules/es6.math.log2.js",
      "npm:core-js@1.2.6/modules/es6.math.sign.js",
      "npm:core-js@1.2.6/modules/es6.math.sinh.js",
      "npm:core-js@1.2.6/modules/es6.math.hypot.js",
      "npm:core-js@1.2.6/modules/es6.math.trunc.js",
      "npm:core-js@1.2.6/modules/es6.string.raw.js",
      "npm:core-js@1.2.6/modules/es6.string.from-code-point.js",
      "npm:core-js@1.2.6/modules/es6.string.trim.js",
      "npm:core-js@1.2.6/modules/es6.string.iterator.js",
      "npm:core-js@1.2.6/modules/es6.string.code-point-at.js",
      "npm:core-js@1.2.6/modules/es6.string.includes.js",
      "npm:core-js@1.2.6/modules/es6.string.ends-with.js",
      "npm:core-js@1.2.6/modules/es6.string.repeat.js",
      "npm:core-js@1.2.6/modules/es6.string.starts-with.js",
      "npm:core-js@1.2.6/modules/es6.array.from.js",
      "npm:core-js@1.2.6/modules/es6.array.of.js",
      "npm:core-js@1.2.6/modules/es6.array.iterator.js",
      "npm:core-js@1.2.6/modules/es6.array.species.js",
      "npm:core-js@1.2.6/modules/es6.array.find.js",
      "npm:core-js@1.2.6/modules/es6.array.fill.js",
      "npm:core-js@1.2.6/modules/es6.array.copy-within.js",
      "npm:core-js@1.2.6/modules/es6.math.tanh.js",
      "npm:core-js@1.2.6/modules/es6.regexp.match.js",
      "npm:core-js@1.2.6/modules/es6.array.find-index.js",
      "npm:core-js@1.2.6/modules/es6.regexp.replace.js",
      "npm:core-js@1.2.6/modules/es6.regexp.flags.js",
      "npm:core-js@1.2.6/modules/es6.regexp.constructor.js",
      "npm:core-js@1.2.6/modules/es6.regexp.split.js",
      "npm:core-js@1.2.6/modules/es6.regexp.search.js",
      "npm:core-js@1.2.6/modules/es6.map.js",
      "npm:core-js@1.2.6/modules/es6.set.js",
      "npm:core-js@1.2.6/modules/es6.weak-map.js",
      "npm:core-js@1.2.6/modules/es6.reflect.apply.js",
      "npm:core-js@1.2.6/modules/es6.weak-set.js",
      "npm:core-js@1.2.6/modules/es6.reflect.delete-property.js",
      "npm:core-js@1.2.6/modules/es6.reflect.define-property.js",
      "npm:core-js@1.2.6/modules/es6.reflect.enumerate.js",
      "npm:core-js@1.2.6/modules/es6.reflect.construct.js",
      "npm:core-js@1.2.6/modules/es6.reflect.get-own-property-descriptor.js",
      "npm:core-js@1.2.6/modules/es6.reflect.get-prototype-of.js",
      "npm:core-js@1.2.6/modules/es6.reflect.get.js",
      "npm:core-js@1.2.6/modules/es6.reflect.has.js",
      "npm:core-js@1.2.6/modules/es6.reflect.is-extensible.js",
      "npm:core-js@1.2.6/modules/es6.reflect.own-keys.js",
      "npm:core-js@1.2.6/modules/es6.reflect.prevent-extensions.js",
      "npm:core-js@1.2.6/modules/es6.reflect.set.js",
      "npm:core-js@1.2.6/modules/es7.string.at.js",
      "npm:core-js@1.2.6/modules/es6.reflect.set-prototype-of.js",
      "npm:core-js@1.2.6/modules/es7.array.includes.js",
      "npm:core-js@1.2.6/modules/es7.string.pad-left.js",
      "npm:core-js@1.2.6/modules/es7.string.pad-right.js",
      "npm:core-js@1.2.6/modules/es7.string.trim-left.js",
      "npm:core-js@1.2.6/modules/es7.regexp.escape.js",
      "npm:core-js@1.2.6/modules/es7.string.trim-right.js",
      "npm:core-js@1.2.6/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@1.2.6/modules/es7.object.values.js",
      "npm:core-js@1.2.6/modules/es7.object.entries.js",
      "npm:core-js@1.2.6/modules/es7.map.to-json.js",
      "npm:core-js@1.2.6/modules/es7.set.to-json.js",
      "npm:core-js@1.2.6/modules/web.timers.js",
      "npm:core-js@1.2.6/modules/js.array.statics.js",
      "npm:core-js@1.2.6/modules/web.immediate.js",
      "npm:core-js@1.2.6/modules/web.dom.iterable.js",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator.js",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable.js",
      "npm:babel-regenerator-runtime@6.5.0/runtime.js",
      "npm:core-js@1.2.6/modules/es6.promise.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/es6.promise.js",
      "github:components/jquery@2.2.0/jquery.js",
      "npm:core-js@1.2.6/modules/$.js",
      "npm:core-js@1.2.6/modules/$.property-desc.js",
      "npm:core-js@1.2.6/modules/$.cof.js",
      "npm:core-js@1.2.6/modules/$.has.js",
      "npm:core-js@1.2.6/modules/$.invoke.js",
      "npm:core-js@1.2.6/modules/$.fails.js",
      "npm:core-js@1.2.6/modules/$.a-function.js",
      "npm:core-js@1.2.6/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.to-integer.js",
      "npm:core-js@1.2.6/modules/$.uid.js",
      "npm:core-js@1.2.6/modules/$.same-value.js",
      "npm:core-js@1.2.6/modules/$.global.js",
      "npm:core-js@1.2.6/modules/$.math-log1p.js",
      "npm:core-js@1.2.6/modules/$.library.js",
      "npm:core-js@1.2.6/modules/$.math-sign.js",
      "npm:core-js@1.2.6/modules/$.math-expm1.js",
      "npm:core-js@1.2.6/modules/$.iterators.js",
      "npm:core-js@1.2.6/modules/$.iter-step.js",
      "npm:core-js@1.2.6/modules/$.descriptors.js",
      "npm:core-js@1.2.6/modules/$.object-assign.js",
      "npm:core-js@1.2.6/modules/$.html.js",
      "npm:core-js@1.2.6/modules/$.export.js",
      "npm:core-js@1.2.6/modules/$.dom-create.js",
      "npm:core-js@1.2.6/modules/$.an-object.js",
      "npm:core-js@1.2.6/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/modules/$.to-length.js",
      "npm:core-js@1.2.6/modules/$.to-object.js",
      "npm:core-js@1.2.6/modules/$.iobject.js",
      "npm:core-js@1.2.6/modules/$.to-index.js",
      "npm:core-js@1.2.6/modules/$.array-includes.js",
      "npm:core-js@1.2.6/modules/$.array-methods.js",
      "npm:core-js@1.2.6/modules/$.is-array.js",
      "npm:core-js@1.2.6/modules/$.wks.js",
      "npm:core-js@1.2.6/modules/$.classof.js",
      "npm:core-js@1.2.6/modules/$.redefine.js",
      "npm:core-js@1.2.6/modules/$.set-proto.js",
      "npm:core-js@1.2.6/modules/$.get-names.js",
      "npm:core-js@1.2.6/modules/$.object-sap.js",
      "npm:core-js@1.2.6/modules/$.to-primitive.js",
      "npm:core-js@1.2.6/modules/$.shared.js",
      "npm:core-js@1.2.6/modules/$.string-trim.js",
      "npm:core-js@1.2.6/modules/$.is-integer.js",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/modules/$.keyof.js",
      "npm:core-js@1.2.6/modules/$.enum-keys.js",
      "npm:core-js@1.2.6/modules/$.string-at.js",
      "npm:core-js@1.2.6/modules/$.string-context.js",
      "npm:core-js@1.2.6/modules/$.iter-define.js",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp.js",
      "npm:core-js@1.2.6/modules/$.string-repeat.js",
      "npm:core-js@1.2.6/modules/$.ctx.js",
      "npm:core-js@1.2.6/modules/$.is-array-iter.js",
      "npm:core-js@1.2.6/modules/$.iter-call.js",
      "npm:core-js@1.2.6/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.6/modules/$.iter-detect.js",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables.js",
      "npm:core-js@1.2.6/modules/$.set-species.js",
      "npm:core-js@1.2.6/modules/$.array-fill.js",
      "npm:core-js@1.2.6/modules/$.array-copy-within.js",
      "npm:core-js@1.2.6/modules/$.fix-re-wks.js",
      "npm:core-js@1.2.6/modules/$.flags.js",
      "npm:core-js@1.2.6/modules/$.is-regexp.js",
      "npm:core-js@1.2.6/modules/$.collection.js",
      "npm:core-js@1.2.6/modules/$.replacer.js",
      "npm:core-js@1.2.6/library/modules/$.iterators.js",
      "npm:core-js@1.2.6/modules/$.strict-new.js",
      "npm:core-js@1.2.6/library/modules/$.library.js",
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:signals@1.0.0/dist/signals.js",
      "npm:core-js@1.2.6/library/modules/$.strict-new.js",
      "npm:core-js@1.2.6/library/modules/$.a-function.js",
      "npm:core-js@1.2.6/library/modules/$.same-value.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:core-js@1.2.6/modules/$.own-keys.js",
      "npm:core-js@1.2.6/modules/$.collection-strong.js",
      "npm:core-js@1.2.6/modules/$.collection-weak.js",
      "npm:core-js@1.2.6/modules/$.iter-create.js",
      "npm:core-js@1.2.6/modules/$.string-pad.js",
      "npm:core-js@1.2.6/modules/$.object-to-array.js",
      "npm:core-js@1.2.6/modules/$.partial.js",
      "npm:core-js@1.2.6/modules/$.collection-to-json.js",
      "npm:core-js@1.2.6/modules/$.hide.js",
      "npm:core-js@1.2.6/library/modules/$.string-at.js",
      "npm:core-js@1.2.6/library/modules/$.iter-define.js",
      "npm:core-js@1.2.6/modules/$.for-of.js",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator.js",
      "npm:core-js@1.2.6/modules/$.species-constructor.js",
      "npm:core-js@1.2.6/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js",
      "npm:core-js@1.2.6/library/modules/$.classof.js",
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js",
      "npm:core-js@1.2.6/library/modules/$.for-of.js",
      "npm:core-js@1.2.6/library/modules/$.wks.js",
      "npm:core-js@1.2.6/library/modules/$.species-constructor.js",
      "npm:core-js@1.2.6/library/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/library/modules/$.descriptors.js",
      "npm:core-js@1.2.6/library/modules/$.set-species.js",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/modules/$.task.js",
      "npm:core-js@1.2.6/modules/$.microtask.js",
      "npm:core-js@1.2.6/library/modules/$.microtask.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "npm:core-js@1.2.6/library/modules/$.iter-detect.js",
      "npm:core-js@1.2.6/modules/$.defined.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js",
      "npm:core-js@1.2.6/modules/$.path.js",
      "npm:core-js@1.2.6/modules/$.array-species-create.js",
      "npm:core-js@1.2.6/library/modules/$.redefine.js",
      "npm:core-js@1.2.6/library/modules/$.hide.js",
      "npm:core-js@1.2.6/library/modules/$.to-integer.js",
      "npm:core-js@1.2.6/library/modules/$.has.js",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js",
      "npm:core-js@1.2.6/library/modules/$.iter-step.js",
      "npm:core-js@1.2.6/library/modules/$.cof.js",
      "npm:core-js@1.2.6/library/modules/$.uid.js",
      "npm:core-js@1.2.6/library/modules/$.iter-create.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/library/modules/$.iter-call.js",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter.js",
      "npm:core-js@1.2.6/library/modules/$.to-length.js",
      "npm:core-js@1.2.6/library/modules/$.shared.js",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js",
      "npm:core-js@1.2.6/library/modules/$.task.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:core-js@1.2.6/library/modules/$.property-desc.js",
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.html.js",
      "npm:core-js@1.2.6/library/modules/$.invoke.js",
      "npm:process@0.11.2.js",
      "npm:core-js@1.2.6/library/modules/$.dom-create.js",
      "npm:process@0.11.2/browser.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-polyfill": "npm:babel-polyfill@6.5.0",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "crossroads": "npm:crossroads@0.12.2",
    "fetch": "github:github/fetch@0.11.0",
    "hasher": "npm:hasher@1.2.0",
    "jquery": "npm:jquery@2.2.0",
    "knockout": "github:knockout/knockout@3.4.0",
    "knockout-validation": "github:Knockout-Contrib/Knockout-Validation@2.0.3",
    "text": "github:systemjs/plugin-text@0.0.4",
    "github:Knockout-Contrib/Knockout-Validation@2.0.3": {
      "knockout": "github:knockout/knockout@3.4.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-polyfill@6.5.0": {
      "babel-regenerator-runtime": "npm:babel-regenerator-runtime@6.5.0",
      "babel-runtime": "npm:babel-runtime@5.8.35",
      "core-js": "npm:core-js@1.2.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-regenerator-runtime@6.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:crossroads@0.12.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "signals": "npm:signals@1.0.0"
    },
    "npm:hasher@1.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signals": "npm:signals@1.0.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
