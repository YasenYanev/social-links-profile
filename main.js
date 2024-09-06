(() => {
  const e = {
    940: (e, t, n) => {
      n.d(t, { A: () => i });
      const r = n(354);
      const o = n.n(r);
      const a = n(314);
      const c = n.n(a)()(o());
      c.push([
        e.id,
        "// extracted by mini-css-extract-plugin\nexport {};",
        "",
        {
          version: 3,
          sources: ["webpack://./src/assets/styles/main.css"],
          names: [],
          mappings: "AAAA;QACQ,CAAA",
          sourcesContent: [
            "// extracted by mini-css-extract-plugin\nexport {};",
          ],
          sourceRoot: "",
        },
      ]);
      const i = c;
    },
    314: (e) => {
      e.exports = function (e) {
        const t = [];
        return (
          (t.toString = function () {
            return this.map((t) => {
              let n = "";
              const r = void 0 !== t[5];
              return (
                t[4] && (n += "@supports (".concat(t[4], ") {")),
                t[2] && (n += "@media ".concat(t[2], " {")),
                r &&
                  (n += "@layer".concat(
                    t[5].length > 0 ? " ".concat(t[5]) : "",
                    " {",
                  )),
                (n += e(t)),
                r && (n += "}"),
                t[2] && (n += "}"),
                t[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (t.i = function (e, n, r, o, a) {
            typeof e === "string" && (e = [[null, e, void 0]]);
            const c = {};
            if (r)
              for (let i = 0; i < this.length; i++) {
                const s = this[i][0];
                s != null && (c[s] = !0);
              }
            for (let u = 0; u < e.length; u++) {
              const p = [].concat(e[u]);
              (r && c[p[0]]) ||
                (void 0 !== a &&
                  (void 0 === p[5] ||
                    (p[1] = "@layer"
                      .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                      .concat(p[1], "}")),
                  (p[5] = a)),
                n &&
                  (p[2]
                    ? ((p[1] = "@media ".concat(p[2], " {").concat(p[1], "}")),
                      (p[2] = n))
                    : (p[2] = n)),
                o &&
                  (p[4]
                    ? ((p[1] = "@supports ("
                        .concat(p[4], ") {")
                        .concat(p[1], "}")),
                      (p[4] = o))
                    : (p[4] = "".concat(o))),
                t.push(p));
            }
          }),
          t
        );
      };
    },
    354: (e) => {
      e.exports = function (e) {
        const t = e[1];
        const n = e[3];
        if (!n) return t;
        if (typeof btoa === "function") {
          const r = btoa(unescape(encodeURIComponent(JSON.stringify(n))));
          const o =
            "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
              r,
            );
          const a = "/*# ".concat(o, " */");
          return [t].concat([a]).join("\n");
        }
        return [t].join("\n");
      };
    },
    72: (e) => {
      const t = [];
      function n(e) {
        for (var n = -1, r = 0; r < t.length; r++)
          if (t[r].identifier === e) {
            n = r;
            break;
          }
        return n;
      }
      function r(e, r) {
        for (var a = {}, c = [], i = 0; i < e.length; i++) {
          const s = e[i];
          const u = r.base ? s[0] + r.base : s[0];
          const p = a[u] || 0;
          const f = "".concat(u, " ").concat(p);
          a[u] = p + 1;
          const l = n(f);
          const d = {
            css: s[1],
            media: s[2],
            sourceMap: s[3],
            supports: s[4],
            layer: s[5],
          };
          if (l !== -1) t[l].references++, t[l].updater(d);
          else {
            const v = o(d, r);
            (r.byIndex = i),
              t.splice(i, 0, { identifier: f, updater: v, references: 1 });
          }
          c.push(f);
        }
        return c;
      }
      function o(e, t) {
        const n = t.domAPI(t);
        return (
          n.update(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap &&
                t.supports === e.supports &&
                t.layer === e.layer
              )
                return;
              n.update((e = t));
            } else n.remove();
          }
        );
      }
      e.exports = function (e, o) {
        let a = r((e = e || []), (o = o || {}));
        return function (e) {
          e = e || [];
          for (let c = 0; c < a.length; c++) {
            const i = n(a[c]);
            t[i].references--;
          }
          for (var s = r(e, o), u = 0; u < a.length; u++) {
            const p = n(a[u]);
            t[p].references === 0 && (t[p].updater(), t.splice(p, 1));
          }
          a = s;
        };
      };
    },
    659: (e) => {
      const t = {};
      e.exports = function (e, n) {
        const r = (function (e) {
          if (void 0 === t[e]) {
            let n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        })(e);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        r.appendChild(n);
      };
    },
    540: (e) => {
      e.exports = function (e) {
        const t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
      };
    },
    56: (e, t, n) => {
      e.exports = function (e) {
        const t = n.nc;
        t && e.setAttribute("nonce", t);
      };
    },
    825: (e) => {
      e.exports = function (e) {
        if (typeof document === "undefined")
          return { update() {}, remove() {} };
        const t = e.insertStyleElement(e);
        return {
          update(n) {
            !(function (e, t, n) {
              let r = "";
              n.supports && (r += "@supports (".concat(n.supports, ") {")),
                n.media && (r += "@media ".concat(n.media, " {"));
              const o = void 0 !== n.layer;
              o &&
                (r += "@layer".concat(
                  n.layer.length > 0 ? " ".concat(n.layer) : "",
                  " {",
                )),
                (r += n.css),
                o && (r += "}"),
                n.media && (r += "}"),
                n.supports && (r += "}");
              const a = n.sourceMap;
              a &&
                typeof btoa !== "undefined" &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */",
                  )),
                t.styleTagTransform(r, e, t.options);
            })(t, e, n);
          },
          remove() {
            !(function (e) {
              if (e.parentNode === null) return !1;
              e.parentNode.removeChild(e);
            })(t);
          },
        };
      };
    },
    113: (e) => {
      e.exports = function (e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e));
        }
      };
    },
  };
  const t = {};
  function n(r) {
    const o = t[r];
    if (void 0 !== o) return o.exports;
    const a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    const t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (const r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0);
  const r = n(72);
  const o = n.n(r);
  const a = n(825);
  const c = n.n(a);
  const i = n(659);
  const s = n.n(i);
  const u = n(56);
  const p = n.n(u);
  const f = n(540);
  const l = n.n(f);
  const d = n(113);
  const v = n.n(d);
  const m = n(940);
  const h = {};
  (h.styleTagTransform = v()),
    (h.setAttributes = p()),
    (h.insert = s().bind(null, "head")),
    (h.domAPI = c()),
    (h.insertStyleElement = l()),
    o()(m.A, h),
    m.A && m.A.locals && m.A.locals;
})();
// # sourceMappingURL=main.js.map
