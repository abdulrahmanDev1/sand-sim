var t,
  e,
  r,
  i,
  n,
  o,
  s,
  a,
  h,
  u,
  l,
  c,
  p,
  f,
  d,
  _,
  y,
  v,
  m,
  g,
  b,
  x,
  T,
  E,
  S,
  A,
  R,
  O,
  M,
  P = globalThis;
function I(t) {
  return t && t.__esModule ? t.default : t;
}
function w(t, e, r, i) {
  Object.defineProperty(t, e, {
    get: r,
    set: i,
    enumerable: !0,
    configurable: !0,
  });
}
var D = {},
  C = {},
  F = P.parcelRequireff37;
null == F &&
  (((F = function (t) {
    if (t in D) return D[t].exports;
    if (t in C) {
      var e = C[t];
      delete C[t];
      var r = { id: t, exports: {} };
      return (D[t] = r), e.call(r.exports, r, r.exports), r.exports;
    }
    var i = Error("Cannot find module '" + t + "'");
    throw ((i.code = 'MODULE_NOT_FOUND'), i);
  }).register = function (t, e) {
    C[t] = e;
  }),
  (P.parcelRequireff37 = F));
var N = F.register;
N('biuEp', function (t, e) {
  var r = F('dBHwk');
  function i() {
    (this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.host = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.query = null),
      (this.pathname = null),
      (this.path = null),
      (this.href = null);
  }
  var n = /^([a-z0-9.+-]+:)/i,
    o = /:[0-9]*$/,
    s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    a = ["'"].concat(
      ['{', '}', '|', '\\', '^', '`'].concat([
        '<',
        '>',
        '"',
        '`',
        ' ',
        '\r',
        '\n',
        '	',
      ])
    ),
    h = ['%', '/', '?', ';', '#'].concat(a),
    u = ['/', '?', '#'],
    l = /^[+a-z0-9A-Z_-]{0,63}$/,
    c = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    p = { javascript: !0, 'javascript:': !0 },
    f = { javascript: !0, 'javascript:': !0 },
    d = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      'http:': !0,
      'https:': !0,
      'ftp:': !0,
      'gopher:': !0,
      'file:': !0,
    },
    _ = F('2rasJ');
  function y(t, e, r) {
    if (t && 'object' == typeof t && t instanceof i) return t;
    var n = new i();
    return n.parse(t, e, r), n;
  }
  (i.prototype.parse = function (t, e, i) {
    if ('string' != typeof t)
      throw TypeError("Parameter 'url' must be a string, not " + typeof t);
    var o = t.indexOf('?'),
      y = -1 !== o && o < t.indexOf('#') ? '?' : '#',
      v = t.split(y);
    v[0] = v[0].replace(/\\/g, '/');
    var m = (t = v.join(y));
    if (((m = m.trim()), !i && 1 === t.split('#').length)) {
      var g = s.exec(m);
      if (g)
        return (
          (this.path = m),
          (this.href = m),
          (this.pathname = g[1]),
          g[2]
            ? ((this.search = g[2]),
              e
                ? (this.query = _.parse(this.search.substr(1)))
                : (this.query = this.search.substr(1)))
            : e && ((this.search = ''), (this.query = {})),
          this
        );
    }
    var b = n.exec(m);
    if (b) {
      var x = (b = b[0]).toLowerCase();
      (this.protocol = x), (m = m.substr(b.length));
    }
    if (i || b || m.match(/^\/\/[^@/]+@[^@/]+/)) {
      var T = '//' === m.substr(0, 2);
      T && !(b && f[b]) && ((m = m.substr(2)), (this.slashes = !0));
    }
    if (!f[b] && (T || (b && !d[b]))) {
      for (var E, S, A = -1, R = 0; R < u.length; R++) {
        var O = m.indexOf(u[R]);
        -1 !== O && (-1 === A || O < A) && (A = O);
      }
      -1 !== (S = -1 === A ? m.lastIndexOf('@') : m.lastIndexOf('@', A)) &&
        ((E = m.slice(0, S)),
        (m = m.slice(S + 1)),
        (this.auth = decodeURIComponent(E))),
        (A = -1);
      for (var R = 0; R < h.length; R++) {
        var O = m.indexOf(h[R]);
        -1 !== O && (-1 === A || O < A) && (A = O);
      }
      -1 === A && (A = m.length),
        (this.host = m.slice(0, A)),
        (m = m.slice(A)),
        this.parseHost(),
        (this.hostname = this.hostname || '');
      var M =
        '[' === this.hostname[0] &&
        ']' === this.hostname[this.hostname.length - 1];
      if (!M)
        for (
          var P = this.hostname.split(/\./), R = 0, I = P.length;
          R < I;
          R++
        ) {
          var w = P[R];
          if (w && !w.match(l)) {
            for (var D = '', C = 0, F = w.length; C < F; C++)
              w.charCodeAt(C) > 127 ? (D += 'x') : (D += w[C]);
            if (!D.match(l)) {
              var N = P.slice(0, R),
                L = P.slice(R + 1),
                B = w.match(c);
              B && (N.push(B[1]), L.unshift(B[2])),
                L.length && (m = '/' + L.join('.') + m),
                (this.hostname = N.join('.'));
              break;
            }
          }
        }
      this.hostname.length > 255
        ? (this.hostname = '')
        : (this.hostname = this.hostname.toLowerCase()),
        M || (this.hostname = r.toASCII(this.hostname));
      var G = this.port ? ':' + this.port : '',
        U = this.hostname || '';
      (this.host = U + G),
        (this.href += this.host),
        M &&
          ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
          '/' !== m[0] && (m = '/' + m));
    }
    if (!p[x])
      for (var R = 0, I = a.length; R < I; R++) {
        var k = a[R];
        if (-1 !== m.indexOf(k)) {
          var X = encodeURIComponent(k);
          X === k && (X = escape(k)), (m = m.split(k).join(X));
        }
      }
    var j = m.indexOf('#');
    -1 !== j && ((this.hash = m.substr(j)), (m = m.slice(0, j)));
    var H = m.indexOf('?');
    if (
      (-1 !== H
        ? ((this.search = m.substr(H)),
          (this.query = m.substr(H + 1)),
          e && (this.query = _.parse(this.query)),
          (m = m.slice(0, H)))
        : e && ((this.search = ''), (this.query = {})),
      m && (this.pathname = m),
      d[x] && this.hostname && !this.pathname && (this.pathname = '/'),
      this.pathname || this.search)
    ) {
      var G = this.pathname || '',
        Y = this.search || '';
      this.path = G + Y;
    }
    return (this.href = this.format()), this;
  }),
    (i.prototype.format = function () {
      var t = this.auth || '';
      t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ':') + '@');
      var e = this.protocol || '',
        r = this.pathname || '',
        i = this.hash || '',
        n = !1,
        o = '';
      this.host
        ? (n = t + this.host)
        : this.hostname &&
          ((n =
            t +
            (-1 === this.hostname.indexOf(':')
              ? this.hostname
              : '[' + this.hostname + ']')),
          this.port && (n += ':' + this.port)),
        this.query &&
          'object' == typeof this.query &&
          Object.keys(this.query).length &&
          (o = _.stringify(this.query, {
            arrayFormat: 'repeat',
            addQueryPrefix: !1,
          }));
      var s = this.search || (o && '?' + o) || '';
      return (
        e && ':' !== e.substr(-1) && (e += ':'),
        this.slashes || ((!e || d[e]) && !1 !== n)
          ? ((n = '//' + (n || '')), r && '/' !== r.charAt(0) && (r = '/' + r))
          : n || (n = ''),
        i && '#' !== i.charAt(0) && (i = '#' + i),
        s && '?' !== s.charAt(0) && (s = '?' + s),
        e +
          n +
          (r = r.replace(/[?#]/g, function (t) {
            return encodeURIComponent(t);
          })) +
          (s = s.replace('#', '%23')) +
          i
      );
    }),
    (i.prototype.resolve = function (t) {
      return this.resolveObject(y(t, !1, !0)).format();
    }),
    (i.prototype.resolveObject = function (t) {
      if ('string' == typeof t) {
        var e = new i();
        e.parse(t, !1, !0), (t = e);
      }
      for (var r = new i(), n = Object.keys(this), o = 0; o < n.length; o++) {
        var s = n[o];
        r[s] = this[s];
      }
      if (((r.hash = t.hash), '' === t.href)) return (r.href = r.format()), r;
      if (t.slashes && !t.protocol) {
        for (var a = Object.keys(t), h = 0; h < a.length; h++) {
          var u = a[h];
          'protocol' !== u && (r[u] = t[u]);
        }
        return (
          d[r.protocol] &&
            r.hostname &&
            !r.pathname &&
            ((r.pathname = '/'), (r.path = r.pathname)),
          (r.href = r.format()),
          r
        );
      }
      if (t.protocol && t.protocol !== r.protocol) {
        if (!d[t.protocol]) {
          for (var l = Object.keys(t), c = 0; c < l.length; c++) {
            var p = l[c];
            r[p] = t[p];
          }
          return (r.href = r.format()), r;
        }
        if (((r.protocol = t.protocol), t.host || f[t.protocol]))
          r.pathname = t.pathname;
        else {
          for (
            var _ = (t.pathname || '').split('/');
            _.length && !(t.host = _.shift());

          );
          t.host || (t.host = ''),
            t.hostname || (t.hostname = ''),
            '' !== _[0] && _.unshift(''),
            _.length < 2 && _.unshift(''),
            (r.pathname = _.join('/'));
        }
        if (
          ((r.search = t.search),
          (r.query = t.query),
          (r.host = t.host || ''),
          (r.auth = t.auth),
          (r.hostname = t.hostname || t.host),
          (r.port = t.port),
          r.pathname || r.search)
        ) {
          var y = r.pathname || '',
            v = r.search || '';
          r.path = y + v;
        }
        return (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
      }
      var m = r.pathname && '/' === r.pathname.charAt(0),
        g = t.host || (t.pathname && '/' === t.pathname.charAt(0)),
        b = g || m || (r.host && t.pathname),
        x = b,
        T = (r.pathname && r.pathname.split('/')) || [],
        _ = (t.pathname && t.pathname.split('/')) || [],
        E = r.protocol && !d[r.protocol];
      if (
        (E &&
          ((r.hostname = ''),
          (r.port = null),
          r.host && ('' === T[0] ? (T[0] = r.host) : T.unshift(r.host)),
          (r.host = ''),
          t.protocol &&
            ((t.hostname = null),
            (t.port = null),
            t.host && ('' === _[0] ? (_[0] = t.host) : _.unshift(t.host)),
            (t.host = null)),
          (b = b && ('' === _[0] || '' === T[0]))),
        g)
      )
        (r.host = t.host || '' === t.host ? t.host : r.host),
          (r.hostname =
            t.hostname || '' === t.hostname ? t.hostname : r.hostname),
          (r.search = t.search),
          (r.query = t.query),
          (T = _);
      else if (_.length)
        T || (T = []),
          T.pop(),
          (T = T.concat(_)),
          (r.search = t.search),
          (r.query = t.query);
      else if (null != t.search) {
        if (E) {
          (r.host = T.shift()), (r.hostname = r.host);
          var S = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@');
          S &&
            ((r.auth = S.shift()),
            (r.hostname = S.shift()),
            (r.host = r.hostname));
        }
        return (
          (r.search = t.search),
          (r.query = t.query),
          (null !== r.pathname || null !== r.search) &&
            (r.path =
              (r.pathname ? r.pathname : '') + (r.search ? r.search : '')),
          (r.href = r.format()),
          r
        );
      }
      if (!T.length)
        return (
          (r.pathname = null),
          r.search ? (r.path = '/' + r.search) : (r.path = null),
          (r.href = r.format()),
          r
        );
      for (
        var A = T.slice(-1)[0],
          R =
            ((r.host || t.host || T.length > 1) && ('.' === A || '..' === A)) ||
            '' === A,
          O = 0,
          M = T.length;
        M >= 0;
        M--
      )
        '.' === (A = T[M])
          ? T.splice(M, 1)
          : '..' === A
          ? (T.splice(M, 1), O++)
          : O && (T.splice(M, 1), O--);
      if (!b && !x) for (; O--; O) T.unshift('..');
      b && '' !== T[0] && (!T[0] || '/' !== T[0].charAt(0)) && T.unshift(''),
        R && '/' !== T.join('/').substr(-1) && T.push('');
      var P = '' === T[0] || (T[0] && '/' === T[0].charAt(0));
      if (E) {
        (r.hostname = P ? '' : T.length ? T.shift() : ''),
          (r.host = r.hostname);
        var S = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@');
        S &&
          ((r.auth = S.shift()),
          (r.hostname = S.shift()),
          (r.host = r.hostname));
      }
      return (
        (b = b || (r.host && T.length)) && !P && T.unshift(''),
        T.length > 0
          ? (r.pathname = T.join('/'))
          : ((r.pathname = null), (r.path = null)),
        (null !== r.pathname || null !== r.search) &&
          (r.path =
            (r.pathname ? r.pathname : '') + (r.search ? r.search : '')),
        (r.auth = t.auth || r.auth),
        (r.slashes = r.slashes || t.slashes),
        (r.href = r.format()),
        r
      );
    }),
    (i.prototype.parseHost = function () {
      var t = this.host,
        e = o.exec(t);
      e &&
        (':' !== (e = e[0]) && (this.port = e.substr(1)),
        (t = t.substr(0, t.length - e.length))),
        t && (this.hostname = t);
    }),
    (e.parse = y),
    (e.resolve = function (t, e) {
      return y(t, !1, !0).resolve(e);
    }),
    (e.resolveObject = function (t, e) {
      return t ? y(t, !1, !0).resolveObject(e) : e;
    }),
    (e.format = function (t) {
      return ('string' == typeof t && (t = y(t)), t instanceof i)
        ? t.format()
        : i.prototype.format.call(t);
    }),
    (e.Url = i);
}),
  N('dBHwk', function (t, e) {
    !(function (r) {
      var i = e && !e.nodeType && e,
        n = t && !t.nodeType && t,
        o = 'object' == typeof P && P;
      (o.global === o || o.window === o || o.self === o) && (r = o);
      var s,
        a,
        h = /^xn--/,
        u = /[^\x20-\x7E]/,
        l = /[\x2E\u3002\uFF0E\uFF61]/g,
        c = {
          overflow: 'Overflow: input needs wider integers to process',
          'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
          'invalid-input': 'Invalid input',
        },
        p = Math.floor,
        f = String.fromCharCode;
      function d(t) {
        throw RangeError(c[t]);
      }
      function _(t, e) {
        for (var r = t.length, i = []; r--; ) i[r] = e(t[r]);
        return i;
      }
      function y(t, e) {
        var r = t.split('@'),
          i = '';
        return (
          r.length > 1 && ((i = r[0] + '@'), (t = r[1])),
          i + _((t = t.replace(l, '.')).split('.'), e).join('.')
        );
      }
      function v(t) {
        for (var e, r, i = [], n = 0, o = t.length; n < o; )
          (e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o
            ? (64512 & (r = t.charCodeAt(n++))) == 56320
              ? i.push(((1023 & e) << 10) + (1023 & r) + 65536)
              : (i.push(e), n--)
            : i.push(e);
        return i;
      }
      function m(t) {
        return _(t, function (t) {
          var e = '';
          return (
            t > 65535 &&
              ((t -= 65536),
              (e += f(((t >>> 10) & 1023) | 55296)),
              (t = 56320 | (1023 & t))),
            (e += f(t))
          );
        }).join('');
      }
      function g(t, e) {
        return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
      }
      function b(t, e, r) {
        var i = 0;
        for (t = r ? p(t / 700) : t >> 1, t += p(t / e); t > 455; i += 36)
          t = p(t / 35);
        return p(i + (36 * t) / (t + 38));
      }
      function x(t) {
        var e,
          r,
          i,
          n,
          o,
          s,
          a,
          h,
          u,
          l,
          c,
          f = [],
          _ = t.length,
          y = 0,
          v = 128,
          g = 72;
        for ((i = t.lastIndexOf('-')) < 0 && (i = 0), n = 0; n < i; ++n)
          t.charCodeAt(n) >= 128 && d('not-basic'), f.push(t.charCodeAt(n));
        for (o = i > 0 ? i + 1 : 0; o < _; ) {
          for (
            s = y, a = 1, h = 36;
            o >= _ && d('invalid-input'),
              ((u =
                (e = t.charCodeAt(o++)) - 48 < 10
                  ? e - 22
                  : e - 65 < 26
                  ? e - 65
                  : e - 97 < 26
                  ? e - 97
                  : 36) >= 36 ||
                u > p((2147483647 - y) / a)) &&
                d('overflow'),
              (y += u * a),
              !(u < (l = h <= g ? 1 : h >= g + 26 ? 26 : h - g));
            h += 36
          )
            a > p(2147483647 / (c = 36 - l)) && d('overflow'), (a *= c);
          (g = b(y - s, (r = f.length + 1), 0 == s)),
            p(y / r) > 2147483647 - v && d('overflow'),
            (v += p(y / r)),
            (y %= r),
            f.splice(y++, 0, v);
        }
        return m(f);
      }
      function T(t) {
        var e,
          r,
          i,
          n,
          o,
          s,
          a,
          h,
          u,
          l,
          c,
          _,
          y,
          m,
          x,
          T = [];
        for (s = 0, _ = (t = v(t)).length, e = 128, r = 0, o = 72; s < _; ++s)
          (c = t[s]) < 128 && T.push(f(c));
        for (i = n = T.length, n && T.push('-'); i < _; ) {
          for (a = 2147483647, s = 0; s < _; ++s)
            (c = t[s]) >= e && c < a && (a = c);
          for (
            a - e > p((2147483647 - r) / (y = i + 1)) && d('overflow'),
              r += (a - e) * y,
              e = a,
              s = 0;
            s < _;
            ++s
          )
            if (((c = t[s]) < e && ++r > 2147483647 && d('overflow'), c == e)) {
              for (
                h = r, u = 36;
                !(h < (l = u <= o ? 1 : u >= o + 26 ? 26 : u - o));
                u += 36
              )
                (x = h - l),
                  (m = 36 - l),
                  T.push(f(g(l + (x % m), 0))),
                  (h = p(x / m));
              T.push(f(g(h, 0))), (o = b(r, y, i == n)), (r = 0), ++i;
            }
          ++r, ++e;
        }
        return T.join('');
      }
      if (
        ((s = {
          version: '1.4.1',
          ucs2: { decode: v, encode: m },
          decode: x,
          encode: T,
          toASCII: function (t) {
            return y(t, function (t) {
              return u.test(t) ? 'xn--' + T(t) : t;
            });
          },
          toUnicode: function (t) {
            return y(t, function (t) {
              return h.test(t) ? x(t.slice(4).toLowerCase()) : t;
            });
          },
        }),
        'function' == typeof define &&
          'object' == typeof define.amd &&
          define.amd)
      )
        define('punycode', function () {
          return s;
        });
      else if (i && n) {
        if (t.exports == i) n.exports = s;
        else for (a in s) s.hasOwnProperty(a) && (i[a] = s[a]);
      } else r.punycode = s;
    })(this);
  }),
  N('2rasJ', function (t, e) {
    var r = F('jJyEy'),
      i = F('cfYIz'),
      n = F('i1Gbt');
    t.exports = { formats: n, parse: i, stringify: r };
  }),
  N('jJyEy', function (t, e) {
    var r = F('LlIML'),
      i = F('iBfJ5'),
      n = F('i1Gbt'),
      o = Object.prototype.hasOwnProperty,
      s = {
        brackets: function (t) {
          return t + '[]';
        },
        comma: 'comma',
        indices: function (t, e) {
          return t + '[' + e + ']';
        },
        repeat: function (t) {
          return t;
        },
      },
      a = Array.isArray,
      h = Array.prototype.push,
      u = function (t, e) {
        h.apply(t, a(e) ? e : [e]);
      },
      l = Date.prototype.toISOString,
      c = n.default,
      p = {
        addQueryPrefix: !1,
        allowDots: !1,
        allowEmptyArrays: !1,
        arrayFormat: 'indices',
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encodeDotInKeys: !1,
        encoder: i.encode,
        encodeValuesOnly: !1,
        format: c,
        formatter: n.formatters[c],
        indices: !1,
        serializeDate: function (t) {
          return l.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      f = {},
      d = function t(e, n, o, s, h, l, c, d, _, y, v, m, g, b, x, T, E, S) {
        for (
          var A, R, O = e, M = S, P = 0, I = !1;
          void 0 !== (M = M.get(f)) && !I;

        ) {
          var w = M.get(e);
          if (((P += 1), void 0 !== w)) {
            if (w === P) throw RangeError('Cyclic object value');
            I = !0;
          }
          void 0 === M.get(f) && (P = 0);
        }
        if (
          ('function' == typeof y
            ? (O = y(n, O))
            : O instanceof Date
            ? (O = g(O))
            : 'comma' === o &&
              a(O) &&
              (O = i.maybeMap(O, function (t) {
                return t instanceof Date ? g(t) : t;
              })),
          null === O)
        ) {
          if (l) return _ && !T ? _(n, p.encoder, E, 'key', b) : n;
          O = '';
        }
        if (
          'string' == typeof (A = O) ||
          'number' == typeof A ||
          'boolean' == typeof A ||
          'symbol' == typeof A ||
          'bigint' == typeof A ||
          i.isBuffer(O)
        )
          return _
            ? [
                x(T ? n : _(n, p.encoder, E, 'key', b)) +
                  '=' +
                  x(_(O, p.encoder, E, 'value', b)),
              ]
            : [x(n) + '=' + x(String(O))];
        var D = [];
        if (void 0 === O) return D;
        if ('comma' === o && a(O))
          T && _ && (O = i.maybeMap(O, _)),
            (R = [{ value: O.length > 0 ? O.join(',') || null : void 0 }]);
        else if (a(y)) R = y;
        else {
          var C = Object.keys(O);
          R = v ? C.sort(v) : C;
        }
        var F = d ? n.replace(/\./g, '%2E') : n,
          N = s && a(O) && 1 === O.length ? F + '[]' : F;
        if (h && a(O) && 0 === O.length) return N + '[]';
        for (var L = 0; L < R.length; ++L) {
          var B = R[L],
            G = 'object' == typeof B && void 0 !== B.value ? B.value : O[B];
          if (!c || null !== G) {
            var U = m && d ? B.replace(/\./g, '%2E') : B,
              k = a(O)
                ? 'function' == typeof o
                  ? o(N, U)
                  : N
                : N + (m ? '.' + U : '[' + U + ']');
            S.set(e, P);
            var X = r();
            X.set(f, S),
              u(
                D,
                t(
                  G,
                  k,
                  o,
                  s,
                  h,
                  l,
                  c,
                  d,
                  'comma' === o && T && a(O) ? null : _,
                  y,
                  v,
                  m,
                  g,
                  b,
                  x,
                  T,
                  E,
                  X
                )
              );
          }
        }
        return D;
      },
      _ = function (t) {
        if (!t) return p;
        if (
          void 0 !== t.allowEmptyArrays &&
          'boolean' != typeof t.allowEmptyArrays
        )
          throw TypeError(
            '`allowEmptyArrays` option can only be `true` or `false`, when provided'
          );
        if (
          void 0 !== t.encodeDotInKeys &&
          'boolean' != typeof t.encodeDotInKeys
        )
          throw TypeError(
            '`encodeDotInKeys` option can only be `true` or `false`, when provided'
          );
        if (
          null !== t.encoder &&
          void 0 !== t.encoder &&
          'function' != typeof t.encoder
        )
          throw TypeError('Encoder has to be a function.');
        var e,
          r = t.charset || p.charset;
        if (
          void 0 !== t.charset &&
          'utf-8' !== t.charset &&
          'iso-8859-1' !== t.charset
        )
          throw TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined'
          );
        var i = n.default;
        if (void 0 !== t.format) {
          if (!o.call(n.formatters, t.format))
            throw TypeError('Unknown format option provided.');
          i = t.format;
        }
        var h = n.formatters[i],
          u = p.filter;
        if (
          (('function' == typeof t.filter || a(t.filter)) && (u = t.filter),
          (e =
            t.arrayFormat in s
              ? t.arrayFormat
              : 'indices' in t
              ? t.indices
                ? 'indices'
                : 'repeat'
              : p.arrayFormat),
          'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip)
        )
          throw TypeError('`commaRoundTrip` must be a boolean, or absent');
        var l =
          void 0 === t.allowDots
            ? !0 === t.encodeDotInKeys || p.allowDots
            : !!t.allowDots;
        return {
          addQueryPrefix:
            'boolean' == typeof t.addQueryPrefix
              ? t.addQueryPrefix
              : p.addQueryPrefix,
          allowDots: l,
          allowEmptyArrays:
            'boolean' == typeof t.allowEmptyArrays
              ? !!t.allowEmptyArrays
              : p.allowEmptyArrays,
          arrayFormat: e,
          charset: r,
          charsetSentinel:
            'boolean' == typeof t.charsetSentinel
              ? t.charsetSentinel
              : p.charsetSentinel,
          commaRoundTrip: t.commaRoundTrip,
          delimiter: void 0 === t.delimiter ? p.delimiter : t.delimiter,
          encode: 'boolean' == typeof t.encode ? t.encode : p.encode,
          encodeDotInKeys:
            'boolean' == typeof t.encodeDotInKeys
              ? t.encodeDotInKeys
              : p.encodeDotInKeys,
          encoder: 'function' == typeof t.encoder ? t.encoder : p.encoder,
          encodeValuesOnly:
            'boolean' == typeof t.encodeValuesOnly
              ? t.encodeValuesOnly
              : p.encodeValuesOnly,
          filter: u,
          format: i,
          formatter: h,
          serializeDate:
            'function' == typeof t.serializeDate
              ? t.serializeDate
              : p.serializeDate,
          skipNulls:
            'boolean' == typeof t.skipNulls ? t.skipNulls : p.skipNulls,
          sort: 'function' == typeof t.sort ? t.sort : null,
          strictNullHandling:
            'boolean' == typeof t.strictNullHandling
              ? t.strictNullHandling
              : p.strictNullHandling,
        };
      };
    t.exports = function (t, e) {
      var i,
        n = t,
        o = _(e);
      'function' == typeof o.filter
        ? (n = (0, o.filter)('', n))
        : a(o.filter) && (i = o.filter);
      var h = [];
      if ('object' != typeof n || null === n) return '';
      var l = s[o.arrayFormat],
        c = 'comma' === l && o.commaRoundTrip;
      i || (i = Object.keys(n)), o.sort && i.sort(o.sort);
      for (var p = r(), f = 0; f < i.length; ++f) {
        var y = i[f];
        (o.skipNulls && null === n[y]) ||
          u(
            h,
            d(
              n[y],
              y,
              l,
              c,
              o.allowEmptyArrays,
              o.strictNullHandling,
              o.skipNulls,
              o.encodeDotInKeys,
              o.encode ? o.encoder : null,
              o.filter,
              o.sort,
              o.allowDots,
              o.serializeDate,
              o.format,
              o.formatter,
              o.encodeValuesOnly,
              o.charset,
              p
            )
          );
      }
      var v = h.join(o.delimiter),
        m = !0 === o.addQueryPrefix ? '?' : '';
      return (
        o.charsetSentinel &&
          ('iso-8859-1' === o.charset
            ? (m += 'utf8=%26%2310003%3B&')
            : (m += 'utf8=%E2%9C%93&')),
        v.length > 0 ? m + v : ''
      );
    };
  }),
  N('LlIML', function (t, e) {
    var r = F('1zENl'),
      i = F('hXu6F'),
      n = F('e7DLx'),
      o = F('eEkyn'),
      s = r('%WeakMap%', !0),
      a = r('%Map%', !0),
      h = i('WeakMap.prototype.get', !0),
      u = i('WeakMap.prototype.set', !0),
      l = i('WeakMap.prototype.has', !0),
      c = i('Map.prototype.get', !0),
      p = i('Map.prototype.set', !0),
      f = i('Map.prototype.has', !0),
      d = function (t, e) {
        for (var r, i = t; null !== (r = i.next); i = r)
          if (r.key === e)
            return (i.next = r.next), (r.next = t.next), (t.next = r), r;
      },
      _ = function (t, e) {
        var r = d(t, e);
        return r && r.value;
      },
      y = function (t, e, r) {
        var i = d(t, e);
        i ? (i.value = r) : (t.next = { key: e, next: t.next, value: r });
      };
    t.exports = function () {
      var t,
        e,
        r,
        i = {
          assert: function (t) {
            if (!i.has(t)) throw new o('Side channel does not contain ' + n(t));
          },
          get: function (i) {
            if (s && i && ('object' == typeof i || 'function' == typeof i)) {
              if (t) return h(t, i);
            } else if (a) {
              if (e) return c(e, i);
            } else if (r) return _(r, i);
          },
          has: function (i) {
            if (s && i && ('object' == typeof i || 'function' == typeof i)) {
              if (t) return l(t, i);
            } else if (a) {
              if (e) return f(e, i);
            } else if (r) return !!d(r, i);
            return !1;
          },
          set: function (i, n) {
            s && i && ('object' == typeof i || 'function' == typeof i)
              ? (t || (t = new s()), u(t, i, n))
              : a
              ? (e || (e = new a()), p(e, i, n))
              : (r || (r = { key: {}, next: null }), y(r, i, n));
          },
        };
      return i;
    };
  }),
  N('1zENl', function (t, e) {
    var r = F('5A49f'),
      i = F('hDtVy'),
      n = F('9RC8m'),
      o = F('2BaZq'),
      s = F('5Ox6r'),
      a = F('eEkyn'),
      h = F('hFSMY'),
      u = Function,
      l = function (t) {
        try {
          return u('"use strict"; return (' + t + ').constructor;')();
        } catch (t) {}
      },
      c = Object.getOwnPropertyDescriptor;
    if (c)
      try {
        c({}, '');
      } catch (t) {
        c = null;
      }
    var p = function () {
        throw new a();
      },
      f = c
        ? (function () {
            try {
              return arguments.callee, p;
            } catch (t) {
              try {
                return c(arguments, 'callee').get;
              } catch (t) {
                return p;
              }
            }
          })()
        : p,
      d = F('24qIq')(),
      _ = F('dSRh6')(),
      y =
        Object.getPrototypeOf ||
        (_
          ? function (t) {
              return t.__proto__;
            }
          : null),
      v = {},
      m = 'undefined' != typeof Uint8Array && y ? y(Uint8Array) : void 0,
      g = {
        __proto__: null,
        '%AggregateError%':
          'undefined' == typeof AggregateError ? void 0 : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%':
          'undefined' == typeof ArrayBuffer ? void 0 : ArrayBuffer,
        '%ArrayIteratorPrototype%': d && y ? y([][Symbol.iterator]()) : void 0,
        '%AsyncFromSyncIteratorPrototype%': void 0,
        '%AsyncFunction%': v,
        '%AsyncGenerator%': v,
        '%AsyncGeneratorFunction%': v,
        '%AsyncIteratorPrototype%': v,
        '%Atomics%': 'undefined' == typeof Atomics ? void 0 : Atomics,
        '%BigInt%': 'undefined' == typeof BigInt ? void 0 : BigInt,
        '%BigInt64Array%':
          'undefined' == typeof BigInt64Array ? void 0 : BigInt64Array,
        '%BigUint64Array%':
          'undefined' == typeof BigUint64Array ? void 0 : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': 'undefined' == typeof DataView ? void 0 : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': r,
        '%eval%': eval,
        '%EvalError%': i,
        '%Float32Array%':
          'undefined' == typeof Float32Array ? void 0 : Float32Array,
        '%Float64Array%':
          'undefined' == typeof Float64Array ? void 0 : Float64Array,
        '%FinalizationRegistry%':
          'undefined' == typeof FinalizationRegistry
            ? void 0
            : FinalizationRegistry,
        '%Function%': u,
        '%GeneratorFunction%': v,
        '%Int8Array%': 'undefined' == typeof Int8Array ? void 0 : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? void 0 : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? void 0 : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': d && y ? y(y([][Symbol.iterator]())) : void 0,
        '%JSON%': 'object' == typeof JSON ? JSON : void 0,
        '%Map%': 'undefined' == typeof Map ? void 0 : Map,
        '%MapIteratorPrototype%':
          'undefined' != typeof Map && d && y
            ? y(new Map()[Symbol.iterator]())
            : void 0,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? void 0 : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? void 0 : Proxy,
        '%RangeError%': n,
        '%ReferenceError%': o,
        '%Reflect%': 'undefined' == typeof Reflect ? void 0 : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? void 0 : Set,
        '%SetIteratorPrototype%':
          'undefined' != typeof Set && d && y
            ? y(new Set()[Symbol.iterator]())
            : void 0,
        '%SharedArrayBuffer%':
          'undefined' == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': d && y ? y(''[Symbol.iterator]()) : void 0,
        '%Symbol%': d ? Symbol : void 0,
        '%SyntaxError%': s,
        '%ThrowTypeError%': f,
        '%TypedArray%': m,
        '%TypeError%': a,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? void 0 : Uint8Array,
        '%Uint8ClampedArray%':
          'undefined' == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
        '%Uint16Array%':
          'undefined' == typeof Uint16Array ? void 0 : Uint16Array,
        '%Uint32Array%':
          'undefined' == typeof Uint32Array ? void 0 : Uint32Array,
        '%URIError%': h,
        '%WeakMap%': 'undefined' == typeof WeakMap ? void 0 : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? void 0 : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? void 0 : WeakSet,
      };
    if (y)
      try {
        null.error;
      } catch (t) {
        var b = y(y(t));
        g['%Error.prototype%'] = b;
      }
    var x = function t(e) {
        var r;
        if ('%AsyncFunction%' === e) r = l('async function () {}');
        else if ('%GeneratorFunction%' === e) r = l('function* () {}');
        else if ('%AsyncGeneratorFunction%' === e)
          r = l('async function* () {}');
        else if ('%AsyncGenerator%' === e) {
          var i = t('%AsyncGeneratorFunction%');
          i && (r = i.prototype);
        } else if ('%AsyncIteratorPrototype%' === e) {
          var n = t('%AsyncGenerator%');
          n && y && (r = y(n.prototype));
        }
        return (g[e] = r), r;
      },
      T = {
        __proto__: null,
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': [
          'AsyncGeneratorFunction',
          'prototype',
          'prototype',
        ],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype'],
      },
      E = F('gvair'),
      S = F('4c4Ky'),
      A = E.call(Function.call, Array.prototype.concat),
      R = E.call(Function.apply, Array.prototype.splice),
      O = E.call(Function.call, String.prototype.replace),
      M = E.call(Function.call, String.prototype.slice),
      P = E.call(Function.call, RegExp.prototype.exec),
      I =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      w = /\\(\\)?/g,
      D = function (t) {
        var e = M(t, 0, 1),
          r = M(t, -1);
        if ('%' === e && '%' !== r)
          throw new s('invalid intrinsic syntax, expected closing `%`');
        if ('%' === r && '%' !== e)
          throw new s('invalid intrinsic syntax, expected opening `%`');
        var i = [];
        return (
          O(t, I, function (t, e, r, n) {
            i[i.length] = r ? O(n, w, '$1') : e || t;
          }),
          i
        );
      },
      C = function (t, e) {
        var r,
          i = t;
        if ((S(T, i) && (i = '%' + (r = T[i])[0] + '%'), S(g, i))) {
          var n = g[i];
          if ((n === v && (n = x(i)), void 0 === n && !e))
            throw new a(
              'intrinsic ' +
                t +
                ' exists, but is not available. Please file an issue!'
            );
          return { alias: r, name: i, value: n };
        }
        throw new s('intrinsic ' + t + ' does not exist!');
      };
    t.exports = function (t, e) {
      if ('string' != typeof t || 0 === t.length)
        throw new a('intrinsic name must be a non-empty string');
      if (arguments.length > 1 && 'boolean' != typeof e)
        throw new a('"allowMissing" argument must be a boolean');
      if (null === P(/^%?[^%]*%?$/, t))
        throw new s(
          '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
        );
      var r = D(t),
        i = r.length > 0 ? r[0] : '',
        n = C('%' + i + '%', e),
        o = n.name,
        h = n.value,
        u = !1,
        l = n.alias;
      l && ((i = l[0]), R(r, A([0, 1], l)));
      for (var p = 1, f = !0; p < r.length; p += 1) {
        var d = r[p],
          _ = M(d, 0, 1),
          y = M(d, -1);
        if (
          ('"' === _ ||
            "'" === _ ||
            '`' === _ ||
            '"' === y ||
            "'" === y ||
            '`' === y) &&
          _ !== y
        )
          throw new s('property names with quotes must have matching quotes');
        if (
          (('constructor' !== d && f) || (u = !0),
          (i += '.' + d),
          S(g, (o = '%' + i + '%')))
        )
          h = g[o];
        else if (null != h) {
          if (!(d in h)) {
            if (!e)
              throw new a(
                'base intrinsic for ' +
                  t +
                  ' exists, but the property is not available.'
              );
            return;
          }
          if (c && p + 1 >= r.length) {
            var v = c(h, d);
            h =
              (f = !!v) && 'get' in v && !('originalValue' in v.get)
                ? v.get
                : h[d];
          } else (f = S(h, d)), (h = h[d]);
          f && !u && (g[o] = h);
        }
      }
      return h;
    };
  }),
  N('5A49f', function (t, e) {
    t.exports = Error;
  }),
  N('hDtVy', function (t, e) {
    t.exports = EvalError;
  }),
  N('9RC8m', function (t, e) {
    t.exports = RangeError;
  }),
  N('2BaZq', function (t, e) {
    t.exports = ReferenceError;
  }),
  N('5Ox6r', function (t, e) {
    t.exports = SyntaxError;
  }),
  N('eEkyn', function (t, e) {
    t.exports = TypeError;
  }),
  N('hFSMY', function (t, e) {
    t.exports = URIError;
  }),
  N('24qIq', function (t, e) {
    var r = 'undefined' != typeof Symbol && Symbol,
      i = F('7YWkK');
    t.exports = function () {
      return (
        'function' == typeof r &&
        'function' == typeof Symbol &&
        'symbol' == typeof r('foo') &&
        'symbol' == typeof Symbol('bar') &&
        i()
      );
    };
  }),
  N('7YWkK', function (t, e) {
    t.exports = function () {
      if (
        'function' != typeof Symbol ||
        'function' != typeof Object.getOwnPropertySymbols
      )
        return !1;
      if ('symbol' == typeof Symbol.iterator) return !0;
      var t = {},
        e = Symbol('test'),
        r = Object(e);
      if (
        'string' == typeof e ||
        '[object Symbol]' !== Object.prototype.toString.call(e) ||
        '[object Symbol]' !== Object.prototype.toString.call(r)
      )
        return !1;
      for (e in ((t[e] = 42), t)) return !1;
      if (
        ('function' == typeof Object.keys && 0 !== Object.keys(t).length) ||
        ('function' == typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(t).length)
      )
        return !1;
      var i = Object.getOwnPropertySymbols(t);
      if (
        1 !== i.length ||
        i[0] !== e ||
        !Object.prototype.propertyIsEnumerable.call(t, e)
      )
        return !1;
      if ('function' == typeof Object.getOwnPropertyDescriptor) {
        var n = Object.getOwnPropertyDescriptor(t, e);
        if (42 !== n.value || !0 !== n.enumerable) return !1;
      }
      return !0;
    };
  }),
  N('dSRh6', function (t, e) {
    var r = { __proto__: null, foo: {} },
      i = Object;
    t.exports = function () {
      return { __proto__: r }.foo === r.foo && !(r instanceof i);
    };
  }),
  N('gvair', function (t, e) {
    var r = F('kAGnA');
    t.exports = Function.prototype.bind || r;
  }),
  N('kAGnA', function (t, e) {
    var r = Object.prototype.toString,
      i = Math.max,
      n = function (t, e) {
        for (var r = [], i = 0; i < t.length; i += 1) r[i] = t[i];
        for (var n = 0; n < e.length; n += 1) r[n + t.length] = e[n];
        return r;
      },
      o = function (t, e) {
        for (var r = [], i = e || 0, n = 0; i < t.length; i += 1, n += 1)
          r[n] = t[i];
        return r;
      },
      s = function (t, e) {
        for (var r = '', i = 0; i < t.length; i += 1)
          (r += t[i]), i + 1 < t.length && (r += e);
        return r;
      };
    t.exports = function (t) {
      var e,
        a = this;
      if ('function' != typeof a || '[object Function]' !== r.apply(a))
        throw TypeError('Function.prototype.bind called on incompatible ' + a);
      for (
        var h = o(arguments, 1), u = i(0, a.length - h.length), l = [], c = 0;
        c < u;
        c++
      )
        l[c] = '$' + c;
      if (
        ((e = Function(
          'binder',
          'return function (' +
            s(l, ',') +
            '){ return binder.apply(this,arguments); }'
        )(function () {
          if (this instanceof e) {
            var r = a.apply(this, n(h, arguments));
            return Object(r) === r ? r : this;
          }
          return a.apply(t, n(h, arguments));
        })),
        a.prototype)
      ) {
        var p = function () {};
        (p.prototype = a.prototype),
          (e.prototype = new p()),
          (p.prototype = null);
      }
      return e;
    };
  }),
  N('4c4Ky', function (t, e) {
    var r = Function.prototype.call,
      i = Object.prototype.hasOwnProperty,
      n = F('gvair');
    t.exports = n.call(r, i);
  }),
  N('hXu6F', function (t, e) {
    var r = F('1zENl'),
      i = F('cOB0F'),
      n = i(r('String.prototype.indexOf'));
    t.exports = function (t, e) {
      var o = r(t, !!e);
      return 'function' == typeof o && n(t, '.prototype.') > -1 ? i(o) : o;
    };
  }),
  N('cOB0F', function (t, e) {
    var r = F('gvair'),
      i = F('1zENl'),
      n = F('BPe9e'),
      o = F('eEkyn'),
      s = i('%Function.prototype.apply%'),
      a = i('%Function.prototype.call%'),
      h = i('%Reflect.apply%', !0) || r.call(a, s),
      u = F('jAy3M'),
      l = i('%Math.max%');
    t.exports = function (t) {
      if ('function' != typeof t) throw new o('a function is required');
      var e = h(r, a, arguments);
      return n(e, 1 + l(0, t.length - (arguments.length - 1)), !0);
    };
    var c = function () {
      return h(r, s, arguments);
    };
    u ? u(t.exports, 'apply', { value: c }) : (t.exports.apply = c);
  }),
  N('BPe9e', function (t, e) {
    var r = F('1zENl'),
      i = F('5FEEt'),
      n = F('i16wS')(),
      o = F('dYOee'),
      s = F('eEkyn'),
      a = r('%Math.floor%');
    t.exports = function (t, e) {
      if ('function' != typeof t) throw new s('`fn` is not a function');
      if ('number' != typeof e || e < 0 || e > 4294967295 || a(e) !== e)
        throw new s('`length` must be a positive 32-bit integer');
      var r = arguments.length > 2 && !!arguments[2],
        h = !0,
        u = !0;
      if ('length' in t && o) {
        var l = o(t, 'length');
        l && !l.configurable && (h = !1), l && !l.writable && (u = !1);
      }
      return (
        (h || u || !r) && (n ? i(t, 'length', e, !0, !0) : i(t, 'length', e)), t
      );
    };
  }),
  N('5FEEt', function (t, e) {
    var r = F('jAy3M'),
      i = F('5Ox6r'),
      n = F('eEkyn'),
      o = F('dYOee');
    t.exports = function (t, e, s) {
      if (!t || ('object' != typeof t && 'function' != typeof t))
        throw new n('`obj` must be an object or a function`');
      if ('string' != typeof e && 'symbol' != typeof e)
        throw new n('`property` must be a string or a symbol`');
      if (
        arguments.length > 3 &&
        'boolean' != typeof arguments[3] &&
        null !== arguments[3]
      )
        throw new n('`nonEnumerable`, if provided, must be a boolean or null');
      if (
        arguments.length > 4 &&
        'boolean' != typeof arguments[4] &&
        null !== arguments[4]
      )
        throw new n('`nonWritable`, if provided, must be a boolean or null');
      if (
        arguments.length > 5 &&
        'boolean' != typeof arguments[5] &&
        null !== arguments[5]
      )
        throw new n(
          '`nonConfigurable`, if provided, must be a boolean or null'
        );
      if (arguments.length > 6 && 'boolean' != typeof arguments[6])
        throw new n('`loose`, if provided, must be a boolean');
      var a = arguments.length > 3 ? arguments[3] : null,
        h = arguments.length > 4 ? arguments[4] : null,
        u = arguments.length > 5 ? arguments[5] : null,
        l = arguments.length > 6 && arguments[6],
        c = !!o && o(t, e);
      if (r)
        r(t, e, {
          configurable: null === u && c ? c.configurable : !u,
          enumerable: null === a && c ? c.enumerable : !a,
          value: s,
          writable: null === h && c ? c.writable : !h,
        });
      else if (!l && (a || h || u))
        throw new i(
          'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
        );
      else t[e] = s;
    };
  }),
  N('jAy3M', function (t, e) {
    var r = F('1zENl')('%Object.defineProperty%', !0) || !1;
    if (r)
      try {
        r({}, 'a', { value: 1 });
      } catch (t) {
        r = !1;
      }
    t.exports = r;
  }),
  N('dYOee', function (t, e) {
    var r = F('1zENl')('%Object.getOwnPropertyDescriptor%', !0);
    if (r)
      try {
        r([], 'length');
      } catch (t) {
        r = null;
      }
    t.exports = r;
  }),
  N('i16wS', function (t, e) {
    var r = F('jAy3M'),
      i = function () {
        return !!r;
      };
    (i.hasArrayLengthDefineBug = function () {
      if (!r) return null;
      try {
        return 1 !== r([], 'length', { value: 1 }).length;
      } catch (t) {
        return !0;
      }
    }),
      (t.exports = i);
  }),
  N('e7DLx', function (t, e) {
    var r = 'function' == typeof Map && Map.prototype,
      i =
        Object.getOwnPropertyDescriptor && r
          ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
          : null,
      n = r && i && 'function' == typeof i.get ? i.get : null,
      o = r && Map.prototype.forEach,
      s = 'function' == typeof Set && Set.prototype,
      a =
        Object.getOwnPropertyDescriptor && s
          ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
          : null,
      h = s && a && 'function' == typeof a.get ? a.get : null,
      u = s && Set.prototype.forEach,
      l =
        'function' == typeof WeakMap && WeakMap.prototype
          ? WeakMap.prototype.has
          : null,
      c =
        'function' == typeof WeakSet && WeakSet.prototype
          ? WeakSet.prototype.has
          : null,
      p =
        'function' == typeof WeakRef && WeakRef.prototype
          ? WeakRef.prototype.deref
          : null,
      f = Boolean.prototype.valueOf,
      d = Object.prototype.toString,
      _ = Function.prototype.toString,
      y = String.prototype.match,
      v = String.prototype.slice,
      m = String.prototype.replace,
      g = String.prototype.toUpperCase,
      b = String.prototype.toLowerCase,
      x = RegExp.prototype.test,
      T = Array.prototype.concat,
      E = Array.prototype.join,
      S = Array.prototype.slice,
      A = Math.floor,
      R = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
      O = Object.getOwnPropertySymbols,
      M =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? Symbol.prototype.toString
          : null,
      I = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
      w =
        'function' == typeof Symbol &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === I ? 'object' : 'symbol')
          ? Symbol.toStringTag
          : null,
      D = Object.prototype.propertyIsEnumerable,
      C =
        ('function' == typeof Reflect
          ? Reflect.getPrototypeOf
          : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (t) {
              return t.__proto__;
            }
          : null);
    function N(t, e) {
      if (
        t === 1 / 0 ||
        t === -1 / 0 ||
        t != t ||
        (t && t > -1e3 && t < 1e3) ||
        x.call(/e/, e)
      )
        return e;
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if ('number' == typeof t) {
        var i = t < 0 ? -A(-t) : A(t);
        if (i !== t) {
          var n = String(i),
            o = v.call(e, n.length + 1);
          return (
            m.call(n, r, '$&_') +
            '.' +
            m.call(m.call(o, /([0-9]{3})/g, '$&_'), /_$/, '')
          );
        }
      }
      return m.call(e, r, '$&_');
    }
    var L = F('kjyEk'),
      B = L.custom,
      G = j(B) ? B : null;
    function U(t, e, r) {
      var i = 'double' === (r.quoteStyle || e) ? '"' : "'";
      return i + t + i;
    }
    function k(t) {
      return (
        '[object Array]' === V(t) && (!w || !('object' == typeof t && w in t))
      );
    }
    function X(t) {
      return (
        '[object RegExp]' === V(t) && (!w || !('object' == typeof t && w in t))
      );
    }
    function j(t) {
      if (I) return t && 'object' == typeof t && t instanceof Symbol;
      if ('symbol' == typeof t) return !0;
      if (!t || 'object' != typeof t || !M) return !1;
      try {
        return M.call(t), !0;
      } catch (t) {}
      return !1;
    }
    t.exports = function t(e, r, i, s) {
      var a = r || {};
      if (
        Y(a, 'quoteStyle') &&
        'single' !== a.quoteStyle &&
        'double' !== a.quoteStyle
      )
        throw TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        Y(a, 'maxStringLength') &&
        ('number' == typeof a.maxStringLength
          ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0
          : null !== a.maxStringLength)
      )
        throw TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
        );
      var d = !Y(a, 'customInspect') || a.customInspect;
      if ('boolean' != typeof d && 'symbol' !== d)
        throw TypeError(
          'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
        );
      if (
        Y(a, 'indent') &&
        null !== a.indent &&
        '	' !== a.indent &&
        !(parseInt(a.indent, 10) === a.indent && a.indent > 0)
      )
        throw TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`'
        );
      if (Y(a, 'numericSeparator') && 'boolean' != typeof a.numericSeparator)
        throw TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`'
        );
      var g = a.numericSeparator;
      if (void 0 === e) return 'undefined';
      if (null === e) return 'null';
      if ('boolean' == typeof e) return e ? 'true' : 'false';
      if ('string' == typeof e)
        return (function t(e, r) {
          if (e.length > r.maxStringLength) {
            var i = e.length - r.maxStringLength;
            return (
              t(v.call(e, 0, r.maxStringLength), r) +
              '... ' +
              i +
              ' more character' +
              (i > 1 ? 's' : '')
            );
          }
          return U(
            m.call(m.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, W),
            'single',
            r
          );
        })(e, a);
      if ('number' == typeof e) {
        if (0 === e) return 1 / 0 / e > 0 ? '0' : '-0';
        var x = String(e);
        return g ? N(e, x) : x;
      }
      if ('bigint' == typeof e) {
        var A = String(e) + 'n';
        return g ? N(e, A) : A;
      }
      var O = void 0 === a.depth ? 5 : a.depth;
      if ((void 0 === i && (i = 0), i >= O && O > 0 && 'object' == typeof e))
        return k(e) ? '[Array]' : '[Object]';
      var F = (function (t, e) {
        var r;
        if ('	' === t.indent) r = '	';
        else {
          if ('number' != typeof t.indent || !(t.indent > 0)) return null;
          r = E.call(Array(t.indent + 1), ' ');
        }
        return { base: r, prev: E.call(Array(e + 1), r) };
      })(a, i);
      if (void 0 === s) s = [];
      else if (z(s, e) >= 0) return '[Circular]';
      function B(e, r, n) {
        if ((r && (s = S.call(s)).push(r), n)) {
          var o = { depth: a.depth };
          return (
            Y(a, 'quoteStyle') && (o.quoteStyle = a.quoteStyle),
            t(e, o, i + 1, s)
          );
        }
        return t(e, a, i + 1, s);
      }
      if ('function' == typeof e && !X(e)) {
        var H = (function (t) {
            if (t.name) return t.name;
            var e = y.call(_.call(t), /^function\s*([\w$]+)/);
            return e ? e[1] : null;
          })(e),
          $ = J(e, B);
        return (
          '[Function' +
          (H ? ': ' + H : ' (anonymous)') +
          ']' +
          ($.length > 0 ? ' { ' + E.call($, ', ') + ' }' : '')
        );
      }
      if (j(e)) {
        var tt = I
          ? m.call(String(e), /^(Symbol\(.*\))_[^)]*$/, '$1')
          : M.call(e);
        return 'object' != typeof e || I ? tt : q(tt);
      }
      if (
        e &&
        'object' == typeof e &&
        (('undefined' != typeof HTMLElement && e instanceof HTMLElement) ||
          ('string' == typeof e.nodeName &&
            'function' == typeof e.getAttribute))
      ) {
        for (
          var te,
            tr = '<' + b.call(String(e.nodeName)),
            ti = e.attributes || [],
            tn = 0;
          tn < ti.length;
          tn++
        )
          tr +=
            ' ' +
            ti[tn].name +
            '=' +
            U(
              ((te = ti[tn].value), m.call(String(te), /"/g, '&quot;')),
              'double',
              a
            );
        return (
          (tr += '>'),
          e.childNodes && e.childNodes.length && (tr += '...'),
          (tr += '</' + b.call(String(e.nodeName)) + '>')
        );
      }
      if (k(e)) {
        if (0 === e.length) return '[]';
        var to = J(e, B);
        return F &&
          !(function (t) {
            for (var e = 0; e < t.length; e++)
              if (z(t[e], '\n') >= 0) return !1;
            return !0;
          })(to)
          ? '[' + Q(to, F) + ']'
          : '[ ' + E.call(to, ', ') + ' ]';
      }
      if (
        '[object Error]' === V(e) &&
        (!w || !('object' == typeof e && w in e))
      ) {
        var ts = J(e, B);
        return 'cause' in Error.prototype ||
          !('cause' in e) ||
          D.call(e, 'cause')
          ? 0 === ts.length
            ? '[' + String(e) + ']'
            : '{ [' + String(e) + '] ' + E.call(ts, ', ') + ' }'
          : '{ [' +
              String(e) +
              '] ' +
              E.call(T.call('[cause]: ' + B(e.cause), ts), ', ') +
              ' }';
      }
      if ('object' == typeof e && d) {
        if (G && 'function' == typeof e[G] && L) return L(e, { depth: O - i });
        if ('symbol' !== d && 'function' == typeof e.inspect)
          return e.inspect();
      }
      if (
        (function (t) {
          if (!n || !t || 'object' != typeof t) return !1;
          try {
            n.call(t);
            try {
              h.call(t);
            } catch (t) {
              return !0;
            }
            return t instanceof Map;
          } catch (t) {}
          return !1;
        })(e)
      ) {
        var ta = [];
        return (
          o &&
            o.call(e, function (t, r) {
              ta.push(B(r, e, !0) + ' => ' + B(t, e));
            }),
          Z('Map', n.call(e), ta, F)
        );
      }
      if (
        (function (t) {
          if (!h || !t || 'object' != typeof t) return !1;
          try {
            h.call(t);
            try {
              n.call(t);
            } catch (t) {
              return !0;
            }
            return t instanceof Set;
          } catch (t) {}
          return !1;
        })(e)
      ) {
        var th = [];
        return (
          u &&
            u.call(e, function (t) {
              th.push(B(t, e));
            }),
          Z('Set', h.call(e), th, F)
        );
      }
      if (
        (function (t) {
          if (!l || !t || 'object' != typeof t) return !1;
          try {
            l.call(t, l);
            try {
              c.call(t, c);
            } catch (t) {
              return !0;
            }
            return t instanceof WeakMap;
          } catch (t) {}
          return !1;
        })(e)
      )
        return K('WeakMap');
      if (
        (function (t) {
          if (!c || !t || 'object' != typeof t) return !1;
          try {
            c.call(t, c);
            try {
              l.call(t, l);
            } catch (t) {
              return !0;
            }
            return t instanceof WeakSet;
          } catch (t) {}
          return !1;
        })(e)
      )
        return K('WeakSet');
      if (
        (function (t) {
          if (!p || !t || 'object' != typeof t) return !1;
          try {
            return p.call(t), !0;
          } catch (t) {}
          return !1;
        })(e)
      )
        return K('WeakRef');
      if (
        '[object Number]' === V(e) &&
        (!w || !('object' == typeof e && w in e))
      )
        return q(B(Number(e)));
      if (
        (function (t) {
          if (!t || 'object' != typeof t || !R) return !1;
          try {
            return R.call(t), !0;
          } catch (t) {}
          return !1;
        })(e)
      )
        return q(B(R.call(e)));
      if (
        '[object Boolean]' === V(e) &&
        (!w || !('object' == typeof e && w in e))
      )
        return q(f.call(e));
      if (
        '[object String]' === V(e) &&
        (!w || !('object' == typeof e && w in e))
      )
        return q(B(String(e)));
      if ('undefined' != typeof window && e === window)
        return '{ [object Window] }';
      if (e === P) return '{ [object globalThis] }';
      if (
        !(
          '[object Date]' === V(e) &&
          (!w || !('object' == typeof e && w in e))
        ) &&
        !X(e)
      ) {
        var tu = J(e, B),
          tl = C
            ? C(e) === Object.prototype
            : e instanceof Object || e.constructor === Object,
          tc = e instanceof Object ? '' : 'null prototype',
          tp =
            !tl && w && Object(e) === e && w in e
              ? v.call(V(e), 8, -1)
              : tc
              ? 'Object'
              : '',
          tf =
            (tl || 'function' != typeof e.constructor
              ? ''
              : e.constructor.name
              ? e.constructor.name + ' '
              : '') +
            (tp || tc
              ? '[' + E.call(T.call([], tp || [], tc || []), ': ') + '] '
              : '');
        return 0 === tu.length
          ? tf + '{}'
          : F
          ? tf + '{' + Q(tu, F) + '}'
          : tf + '{ ' + E.call(tu, ', ') + ' }';
      }
      return String(e);
    };
    var H =
      Object.prototype.hasOwnProperty ||
      function (t) {
        return t in this;
      };
    function Y(t, e) {
      return H.call(t, e);
    }
    function V(t) {
      return d.call(t);
    }
    function z(t, e) {
      if (t.indexOf) return t.indexOf(e);
      for (var r = 0, i = t.length; r < i; r++) if (t[r] === e) return r;
      return -1;
    }
    function W(t) {
      var e = t.charCodeAt(0),
        r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[e];
      return r
        ? '\\' + r
        : '\\x' + (e < 16 ? '0' : '') + g.call(e.toString(16));
    }
    function q(t) {
      return 'Object(' + t + ')';
    }
    function K(t) {
      return t + ' { ? }';
    }
    function Z(t, e, r, i) {
      return t + ' (' + e + ') {' + (i ? Q(r, i) : E.call(r, ', ')) + '}';
    }
    function Q(t, e) {
      if (0 === t.length) return '';
      var r = '\n' + e.prev + e.base;
      return r + E.call(t, ',' + r) + '\n' + e.prev;
    }
    function J(t, e) {
      var r,
        i = k(t),
        n = [];
      if (i) {
        n.length = t.length;
        for (var o = 0; o < t.length; o++) n[o] = Y(t, o) ? e(t[o], t) : '';
      }
      var s = 'function' == typeof O ? O(t) : [];
      if (I) {
        r = {};
        for (var a = 0; a < s.length; a++) r['$' + s[a]] = s[a];
      }
      for (var h in t)
        if (Y(t, h) && (!i || String(Number(h)) !== h || !(h < t.length))) {
          if (I && r['$' + h] instanceof Symbol) continue;
          x.call(/[^\w$]/, h)
            ? n.push(e(h, t) + ': ' + e(t[h], t))
            : n.push(h + ': ' + e(t[h], t));
        }
      if ('function' == typeof O)
        for (var u = 0; u < s.length; u++)
          D.call(t, s[u]) && n.push('[' + e(s[u]) + ']: ' + e(t[s[u]], t));
      return n;
    }
  }),
  N('kjyEk', function (t, e) {}),
  N('iBfJ5', function (t, e) {
    var r = F('i1Gbt'),
      i = Object.prototype.hasOwnProperty,
      n = Array.isArray,
      o = (function () {
        for (var t = [], e = 0; e < 256; ++e)
          t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
        return t;
      })(),
      s = function (t) {
        for (; t.length > 1; ) {
          var e = t.pop(),
            r = e.obj[e.prop];
          if (n(r)) {
            for (var i = [], o = 0; o < r.length; ++o)
              void 0 !== r[o] && i.push(r[o]);
            e.obj[e.prop] = i;
          }
        }
      },
      a = function (t, e) {
        for (
          var r = e && e.plainObjects ? Object.create(null) : {}, i = 0;
          i < t.length;
          ++i
        )
          void 0 !== t[i] && (r[i] = t[i]);
        return r;
      };
    t.exports = {
      arrayToObject: a,
      assign: function (t, e) {
        return Object.keys(e).reduce(function (t, r) {
          return (t[r] = e[r]), t;
        }, t);
      },
      combine: function (t, e) {
        return [].concat(t, e);
      },
      compact: function (t) {
        for (
          var e = [{ obj: { o: t }, prop: 'o' }], r = [], i = 0;
          i < e.length;
          ++i
        )
          for (
            var n = e[i], o = n.obj[n.prop], a = Object.keys(o), h = 0;
            h < a.length;
            ++h
          ) {
            var u = a[h],
              l = o[u];
            'object' == typeof l &&
              null !== l &&
              -1 === r.indexOf(l) &&
              (e.push({ obj: o, prop: u }), r.push(l));
          }
        return s(e), t;
      },
      decode: function (t, e, r) {
        var i = t.replace(/\+/g, ' ');
        if ('iso-8859-1' === r) return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(i);
        } catch (t) {
          return i;
        }
      },
      encode: function (t, e, i, n, s) {
        if (0 === t.length) return t;
        var a = t;
        if (
          ('symbol' == typeof t
            ? (a = Symbol.prototype.toString.call(t))
            : 'string' != typeof t && (a = String(t)),
          'iso-8859-1' === i)
        )
          return escape(a).replace(/%u[0-9a-f]{4}/gi, function (t) {
            return '%26%23' + parseInt(t.slice(2), 16) + '%3B';
          });
        for (var h = '', u = 0; u < a.length; u += 1024) {
          for (
            var l = a.length >= 1024 ? a.slice(u, u + 1024) : a, c = [], p = 0;
            p < l.length;
            ++p
          ) {
            var f = l.charCodeAt(p);
            if (
              45 === f ||
              46 === f ||
              95 === f ||
              126 === f ||
              (f >= 48 && f <= 57) ||
              (f >= 65 && f <= 90) ||
              (f >= 97 && f <= 122) ||
              (s === r.RFC1738 && (40 === f || 41 === f))
            ) {
              c[c.length] = l.charAt(p);
              continue;
            }
            if (f < 128) {
              c[c.length] = o[f];
              continue;
            }
            if (f < 2048) {
              c[c.length] = o[192 | (f >> 6)] + o[128 | (63 & f)];
              continue;
            }
            if (f < 55296 || f >= 57344) {
              c[c.length] =
                o[224 | (f >> 12)] +
                o[128 | ((f >> 6) & 63)] +
                o[128 | (63 & f)];
              continue;
            }
            (p += 1),
              (f = 65536 + (((1023 & f) << 10) | (1023 & l.charCodeAt(p)))),
              (c[c.length] =
                o[240 | (f >> 18)] +
                o[128 | ((f >> 12) & 63)] +
                o[128 | ((f >> 6) & 63)] +
                o[128 | (63 & f)]);
          }
          h += c.join('');
        }
        return h;
      },
      isBuffer: function (t) {
        return (
          !!t &&
          'object' == typeof t &&
          !!(
            t.constructor &&
            t.constructor.isBuffer &&
            t.constructor.isBuffer(t)
          )
        );
      },
      isRegExp: function (t) {
        return '[object RegExp]' === Object.prototype.toString.call(t);
      },
      maybeMap: function (t, e) {
        if (n(t)) {
          for (var r = [], i = 0; i < t.length; i += 1) r.push(e(t[i]));
          return r;
        }
        return e(t);
      },
      merge: function t(e, r, o) {
        if (!r) return e;
        if ('object' != typeof r) {
          if (n(e)) e.push(r);
          else {
            if (!e || 'object' != typeof e) return [e, r];
            ((o && (o.plainObjects || o.allowPrototypes)) ||
              !i.call(Object.prototype, r)) &&
              (e[r] = !0);
          }
          return e;
        }
        if (!e || 'object' != typeof e) return [e].concat(r);
        var s = e;
        return (n(e) && !n(r) && (s = a(e, o)), n(e) && n(r))
          ? (r.forEach(function (r, n) {
              if (i.call(e, n)) {
                var s = e[n];
                s && 'object' == typeof s && r && 'object' == typeof r
                  ? (e[n] = t(s, r, o))
                  : e.push(r);
              } else e[n] = r;
            }),
            e)
          : Object.keys(r).reduce(function (e, n) {
              var s = r[n];
              return i.call(e, n) ? (e[n] = t(e[n], s, o)) : (e[n] = s), e;
            }, s);
      },
    };
  }),
  N('i1Gbt', function (t, e) {
    var r = String.prototype.replace,
      i = /%20/g,
      n = 'RFC3986';
    t.exports = {
      default: n,
      formatters: {
        RFC1738: function (t) {
          return r.call(t, i, '+');
        },
        RFC3986: function (t) {
          return String(t);
        },
      },
      RFC1738: 'RFC1738',
      RFC3986: n,
    };
  }),
  N('cfYIz', function (t, e) {
    var r = F('iBfJ5'),
      i = Object.prototype.hasOwnProperty,
      n = Array.isArray,
      o = {
        allowDots: !1,
        allowEmptyArrays: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decodeDotInKeys: !1,
        decoder: r.decode,
        delimiter: '&',
        depth: 5,
        duplicates: 'combine',
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      s = function (t, e) {
        return t && 'string' == typeof t && e.comma && t.indexOf(',') > -1
          ? t.split(',')
          : t;
      },
      a = function (t, e) {
        var a = { __proto__: null },
          h = e.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
          u = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
          l = h.split(e.delimiter, u),
          c = -1,
          p = e.charset;
        if (e.charsetSentinel)
          for (f = 0; f < l.length; ++f)
            0 === l[f].indexOf('utf8=') &&
              ('utf8=%E2%9C%93' === l[f]
                ? (p = 'utf-8')
                : 'utf8=%26%2310003%3B' === l[f] && (p = 'iso-8859-1'),
              (c = f),
              (f = l.length));
        for (f = 0; f < l.length; ++f)
          if (f !== c) {
            var f,
              d,
              _,
              y = l[f],
              v = y.indexOf(']='),
              m = -1 === v ? y.indexOf('=') : v + 1;
            -1 === m
              ? ((d = e.decoder(y, o.decoder, p, 'key')),
                (_ = e.strictNullHandling ? null : ''))
              : ((d = e.decoder(y.slice(0, m), o.decoder, p, 'key')),
                (_ = r.maybeMap(s(y.slice(m + 1), e), function (t) {
                  return e.decoder(t, o.decoder, p, 'value');
                }))),
              _ &&
                e.interpretNumericEntities &&
                'iso-8859-1' === p &&
                (_ = _.replace(/&#(\d+);/g, function (t, e) {
                  return String.fromCharCode(parseInt(e, 10));
                })),
              y.indexOf('[]=') > -1 && (_ = n(_) ? [_] : _);
            var g = i.call(a, d);
            g && 'combine' === e.duplicates
              ? (a[d] = r.combine(a[d], _))
              : (g && 'last' !== e.duplicates) || (a[d] = _);
          }
        return a;
      },
      h = function (t, e, r, i) {
        for (var n = i ? e : s(e, r), o = t.length - 1; o >= 0; --o) {
          var a,
            h = t[o];
          if ('[]' === h && r.parseArrays)
            a = r.allowEmptyArrays && '' === n ? [] : [].concat(n);
          else {
            a = r.plainObjects ? Object.create(null) : {};
            var u =
                '[' === h.charAt(0) && ']' === h.charAt(h.length - 1)
                  ? h.slice(1, -1)
                  : h,
              l = r.decodeDotInKeys ? u.replace(/%2E/g, '.') : u,
              c = parseInt(l, 10);
            r.parseArrays || '' !== l
              ? !isNaN(c) &&
                h !== l &&
                String(c) === l &&
                c >= 0 &&
                r.parseArrays &&
                c <= r.arrayLimit
                ? ((a = [])[c] = n)
                : '__proto__' !== l && (a[l] = n)
              : (a = { 0: n });
          }
          n = a;
        }
        return n;
      },
      u = function (t, e, r, n) {
        if (t) {
          var o = r.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
            s = /(\[[^[\]]*])/g,
            a = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
            u = a ? o.slice(0, a.index) : o,
            l = [];
          if (u) {
            if (
              !r.plainObjects &&
              i.call(Object.prototype, u) &&
              !r.allowPrototypes
            )
              return;
            l.push(u);
          }
          for (
            var c = 0;
            r.depth > 0 && null !== (a = s.exec(o)) && c < r.depth;

          ) {
            if (
              ((c += 1),
              !r.plainObjects &&
                i.call(Object.prototype, a[1].slice(1, -1)) &&
                !r.allowPrototypes)
            )
              return;
            l.push(a[1]);
          }
          return a && l.push('[' + o.slice(a.index) + ']'), h(l, e, r, n);
        }
      },
      l = function (t) {
        if (!t) return o;
        if (
          void 0 !== t.allowEmptyArrays &&
          'boolean' != typeof t.allowEmptyArrays
        )
          throw TypeError(
            '`allowEmptyArrays` option can only be `true` or `false`, when provided'
          );
        if (
          void 0 !== t.decodeDotInKeys &&
          'boolean' != typeof t.decodeDotInKeys
        )
          throw TypeError(
            '`decodeDotInKeys` option can only be `true` or `false`, when provided'
          );
        if (
          null !== t.decoder &&
          void 0 !== t.decoder &&
          'function' != typeof t.decoder
        )
          throw TypeError('Decoder has to be a function.');
        if (
          void 0 !== t.charset &&
          'utf-8' !== t.charset &&
          'iso-8859-1' !== t.charset
        )
          throw TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined'
          );
        var e = void 0 === t.charset ? o.charset : t.charset,
          i = void 0 === t.duplicates ? o.duplicates : t.duplicates;
        if ('combine' !== i && 'first' !== i && 'last' !== i)
          throw TypeError(
            'The duplicates option must be either combine, first, or last'
          );
        return {
          allowDots:
            void 0 === t.allowDots
              ? !0 === t.decodeDotInKeys || o.allowDots
              : !!t.allowDots,
          allowEmptyArrays:
            'boolean' == typeof t.allowEmptyArrays
              ? !!t.allowEmptyArrays
              : o.allowEmptyArrays,
          allowPrototypes:
            'boolean' == typeof t.allowPrototypes
              ? t.allowPrototypes
              : o.allowPrototypes,
          allowSparse:
            'boolean' == typeof t.allowSparse ? t.allowSparse : o.allowSparse,
          arrayLimit:
            'number' == typeof t.arrayLimit ? t.arrayLimit : o.arrayLimit,
          charset: e,
          charsetSentinel:
            'boolean' == typeof t.charsetSentinel
              ? t.charsetSentinel
              : o.charsetSentinel,
          comma: 'boolean' == typeof t.comma ? t.comma : o.comma,
          decodeDotInKeys:
            'boolean' == typeof t.decodeDotInKeys
              ? t.decodeDotInKeys
              : o.decodeDotInKeys,
          decoder: 'function' == typeof t.decoder ? t.decoder : o.decoder,
          delimiter:
            'string' == typeof t.delimiter || r.isRegExp(t.delimiter)
              ? t.delimiter
              : o.delimiter,
          depth:
            'number' == typeof t.depth || !1 === t.depth ? +t.depth : o.depth,
          duplicates: i,
          ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
          interpretNumericEntities:
            'boolean' == typeof t.interpretNumericEntities
              ? t.interpretNumericEntities
              : o.interpretNumericEntities,
          parameterLimit:
            'number' == typeof t.parameterLimit
              ? t.parameterLimit
              : o.parameterLimit,
          parseArrays: !1 !== t.parseArrays,
          plainObjects:
            'boolean' == typeof t.plainObjects
              ? t.plainObjects
              : o.plainObjects,
          strictNullHandling:
            'boolean' == typeof t.strictNullHandling
              ? t.strictNullHandling
              : o.strictNullHandling,
        };
      };
    t.exports = function (t, e) {
      var i = l(e);
      if ('' === t || null == t)
        return i.plainObjects ? Object.create(null) : {};
      for (
        var n = 'string' == typeof t ? a(t, i) : t,
          o = i.plainObjects ? Object.create(null) : {},
          s = Object.keys(n),
          h = 0;
        h < s.length;
        ++h
      ) {
        var c = s[h],
          p = u(c, n[c], i, 'string' == typeof t);
        o = r.merge(o, p, i);
      }
      return !0 === i.allowSparse ? o : r.compact(o);
    };
  }),
  N('jH9fL', function (t, e) {
    w(t.exports, 'BufferResource', () => m),
      w(t.exports, 'BaseTexture', () => b),
      w(t.exports, 'Texture', () => k),
      w(t.exports, 'RenderTexture', () => X),
      w(t.exports, 'Buffer', () => V),
      w(t.exports, 'Geometry', () => Z),
      w(t.exports, 'QuadUv', () => J),
      w(t.exports, 'UniformGroup', () => tt),
      w(t.exports, 'ObjectRenderer', () => to),
      w(t.exports, 'Program', () => tw),
      w(t.exports, 'Shader', () => tD),
      w(t.exports, 'State', () => tC),
      w(t.exports, 'Filter', () => tF),
      w(t.exports, 'TextureMatrix', () => tL),
      w(t.exports, 'autoDetectRenderer', () => ee),
      w(t.exports, 'defaultVertex', () => er),
      w(t.exports, 'defaultFilterVertex', () => ei),
      w(t.exports, 'BatchDrawCall', () => en),
      w(t.exports, 'BatchTextureArray', () => eo),
      w(t.exports, 'ViewableBuffer', () => es),
      w(t.exports, 'BatchGeometry', () => eu),
      w(t.exports, 'BatchRenderer', () => ep);
    /*!
     * @pixi/core - v6.5.10
     * Compiled Thu, 06 Jul 2023 15:25:11 UTC
     *
     * @pixi/core is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */ var r,
      i,
      n = F('8q0ed'),
      o = F('6n98C'),
      s = F('e70pz'),
      a = F('3vRz3'),
      n = F('8q0ed'),
      h = F('7CNFb'),
      u = F('iLeV2'),
      l = F('2JyLN'),
      c = F('960oV');
    (n.settings.PREFER_ENV = n.isMobile.any ? o.ENV.WEBGL : o.ENV.WEBGL2),
      (n.settings.STRICT_TEXTURE_CACHE = !1);
    var p = [];
    function f(t, e) {
      if (!t) return null;
      var r = '';
      if ('string' == typeof t) {
        var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
        i && (r = i[1].toLowerCase());
      }
      for (var n = p.length - 1; n >= 0; --n) {
        var o = p[n];
        if (o.test && o.test(t, r)) return new o(t, e);
      }
      throw Error('Unrecognized source type to auto-detect Resource');
    }
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var d =
      function (t, e) {
        return (d =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    function _(t, e) {
      function r() {
        this.constructor = t;
      }
      d(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var y = function () {
        return (y =
          Object.assign ||
          function (t) {
            for (var e, r = arguments, i = 1, n = arguments.length; i < n; i++)
              for (var o in (e = r[i]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      },
      v = (function () {
        function t(t, e) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            (this._width = t),
            (this._height = e),
            (this.destroyed = !1),
            (this.internal = !1),
            (this.onResize = new u.Runner('setRealSize')),
            (this.onUpdate = new u.Runner('update')),
            (this.onError = new u.Runner('onError'));
        }
        return (
          (t.prototype.bind = function (t) {
            this.onResize.add(t),
              this.onUpdate.add(t),
              this.onError.add(t),
              (this._width || this._height) &&
                this.onResize.emit(this._width, this._height);
          }),
          (t.prototype.unbind = function (t) {
            this.onResize.remove(t),
              this.onUpdate.remove(t),
              this.onError.remove(t);
          }),
          (t.prototype.resize = function (t, e) {
            (t !== this._width || e !== this._height) &&
              ((this._width = t), (this._height = e), this.onResize.emit(t, e));
          }),
          Object.defineProperty(t.prototype, 'valid', {
            get: function () {
              return !!this._width && !!this._height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.update = function () {
            this.destroyed || this.onUpdate.emit();
          }),
          (t.prototype.load = function () {
            return Promise.resolve(this);
          }),
          Object.defineProperty(t.prototype, 'width', {
            get: function () {
              return this._width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'height', {
            get: function () {
              return this._height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.style = function (t, e, r) {
            return !1;
          }),
          (t.prototype.dispose = function () {}),
          (t.prototype.destroy = function () {
            this.destroyed ||
              ((this.destroyed = !0),
              this.dispose(),
              this.onError.removeAll(),
              (this.onError = null),
              this.onResize.removeAll(),
              (this.onResize = null),
              this.onUpdate.removeAll(),
              (this.onUpdate = null));
          }),
          (t.test = function (t, e) {
            return !1;
          }),
          t
        );
      })(),
      m = (function (t) {
        function e(e, r) {
          var i = this,
            n = r || {},
            o = n.width,
            s = n.height;
          if (!o || !s) throw Error('BufferResource width or height invalid');
          return ((i = t.call(this, o, s) || this).data = e), i;
        }
        return (
          _(e, t),
          (e.prototype.upload = function (t, e, r) {
            var i = t.gl;
            i.pixelStorei(
              i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              e.alphaMode === o.ALPHA_MODES.UNPACK
            );
            var n = e.realWidth,
              s = e.realHeight;
            return (
              r.width === n && r.height === s
                ? i.texSubImage2D(
                    e.target,
                    0,
                    0,
                    0,
                    n,
                    s,
                    e.format,
                    r.type,
                    this.data
                  )
                : ((r.width = n),
                  (r.height = s),
                  i.texImage2D(
                    e.target,
                    0,
                    r.internalFormat,
                    n,
                    s,
                    0,
                    e.format,
                    r.type,
                    this.data
                  )),
              !0
            );
          }),
          (e.prototype.dispose = function () {
            this.data = null;
          }),
          (e.test = function (t) {
            return (
              t instanceof Float32Array ||
              t instanceof Uint8Array ||
              t instanceof Uint32Array
            );
          }),
          e
        );
      })(v),
      g = {
        scaleMode: o.SCALE_MODES.NEAREST,
        format: o.FORMATS.RGBA,
        alphaMode: o.ALPHA_MODES.NPM,
      },
      b = (function (t) {
        function e(e, r) {
          void 0 === e && (e = null), void 0 === r && (r = null);
          var i = t.call(this) || this,
            a = (r = r || {}).alphaMode,
            h = r.mipmap,
            u = r.anisotropicLevel,
            l = r.scaleMode,
            c = r.width,
            p = r.height,
            d = r.wrapMode,
            _ = r.format,
            y = r.type,
            m = r.target,
            g = r.resolution,
            b = r.resourceOptions;
          return (
            !e || e instanceof v || ((e = f(e, b)).internal = !0),
            (i.resolution = g || n.settings.RESOLUTION),
            (i.width = Math.round((c || 0) * i.resolution) / i.resolution),
            (i.height = Math.round((p || 0) * i.resolution) / i.resolution),
            (i._mipmap = void 0 !== h ? h : n.settings.MIPMAP_TEXTURES),
            (i.anisotropicLevel =
              void 0 !== u ? u : n.settings.ANISOTROPIC_LEVEL),
            (i._wrapMode = d || n.settings.WRAP_MODE),
            (i._scaleMode = void 0 !== l ? l : n.settings.SCALE_MODE),
            (i.format = _ || o.FORMATS.RGBA),
            (i.type = y || o.TYPES.UNSIGNED_BYTE),
            (i.target = m || o.TARGETS.TEXTURE_2D),
            (i.alphaMode = void 0 !== a ? a : o.ALPHA_MODES.UNPACK),
            (i.uid = (0, s.uid)()),
            (i.touched = 0),
            (i.isPowerOfTwo = !1),
            i._refreshPOT(),
            (i._glTextures = {}),
            (i.dirtyId = 0),
            (i.dirtyStyleId = 0),
            (i.cacheId = null),
            (i.valid = c > 0 && p > 0),
            (i.textureCacheIds = []),
            (i.destroyed = !1),
            (i.resource = null),
            (i._batchEnabled = 0),
            (i._batchLocation = 0),
            (i.parentTextureArray = null),
            i.setResource(e),
            i
          );
        }
        return (
          _(e, t),
          Object.defineProperty(e.prototype, 'realWidth', {
            get: function () {
              return Math.round(this.width * this.resolution);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'realHeight', {
            get: function () {
              return Math.round(this.height * this.resolution);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'mipmap', {
            get: function () {
              return this._mipmap;
            },
            set: function (t) {
              this._mipmap !== t && ((this._mipmap = t), this.dirtyStyleId++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'scaleMode', {
            get: function () {
              return this._scaleMode;
            },
            set: function (t) {
              this._scaleMode !== t &&
                ((this._scaleMode = t), this.dirtyStyleId++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'wrapMode', {
            get: function () {
              return this._wrapMode;
            },
            set: function (t) {
              this._wrapMode !== t &&
                ((this._wrapMode = t), this.dirtyStyleId++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.setStyle = function (t, e) {
            var r;
            return (
              void 0 !== t &&
                t !== this.scaleMode &&
                ((this.scaleMode = t), (r = !0)),
              void 0 !== e &&
                e !== this.mipmap &&
                ((this.mipmap = e), (r = !0)),
              r && this.dirtyStyleId++,
              this
            );
          }),
          (e.prototype.setSize = function (t, e, r) {
            return (
              (r = r || this.resolution), this.setRealSize(t * r, e * r, r)
            );
          }),
          (e.prototype.setRealSize = function (t, e, r) {
            return (
              (this.resolution = r || this.resolution),
              (this.width = Math.round(t) / this.resolution),
              (this.height = Math.round(e) / this.resolution),
              this._refreshPOT(),
              this.update(),
              this
            );
          }),
          (e.prototype._refreshPOT = function () {
            this.isPowerOfTwo =
              (0, s.isPow2)(this.realWidth) && (0, s.isPow2)(this.realHeight);
          }),
          (e.prototype.setResolution = function (t) {
            var e = this.resolution;
            return (
              e === t ||
                ((this.resolution = t),
                this.valid &&
                  ((this.width = Math.round(this.width * e) / t),
                  (this.height = Math.round(this.height * e) / t),
                  this.emit('update', this)),
                this._refreshPOT()),
              this
            );
          }),
          (e.prototype.setResource = function (t) {
            if (this.resource === t) return this;
            if (this.resource) throw Error('Resource can be set only once');
            return t.bind(this), (this.resource = t), this;
          }),
          (e.prototype.update = function () {
            this.valid
              ? (this.dirtyId++, this.dirtyStyleId++, this.emit('update', this))
              : this.width > 0 &&
                this.height > 0 &&
                ((this.valid = !0),
                this.emit('loaded', this),
                this.emit('update', this));
          }),
          (e.prototype.onError = function (t) {
            this.emit('error', this, t);
          }),
          (e.prototype.destroy = function () {
            this.resource &&
              (this.resource.unbind(this),
              this.resource.internal && this.resource.destroy(),
              (this.resource = null)),
              this.cacheId &&
                (delete s.BaseTextureCache[this.cacheId],
                delete s.TextureCache[this.cacheId],
                (this.cacheId = null)),
              this.dispose(),
              e.removeFromCache(this),
              (this.textureCacheIds = null),
              (this.destroyed = !0);
          }),
          (e.prototype.dispose = function () {
            this.emit('dispose', this);
          }),
          (e.prototype.castToBaseTexture = function () {
            return this;
          }),
          (e.from = function (t, r, i) {
            void 0 === i && (i = n.settings.STRICT_TEXTURE_CACHE);
            var o = 'string' == typeof t,
              a = null;
            if (o) a = t;
            else {
              if (!t._pixiId) {
                var h = (r && r.pixiIdPrefix) || 'pixiid';
                t._pixiId = h + '_' + (0, s.uid)();
              }
              a = t._pixiId;
            }
            var u = s.BaseTextureCache[a];
            if (o && i && !u)
              throw Error(
                'The cacheId "' + a + '" does not exist in BaseTextureCache.'
              );
            return (
              u || (((u = new e(t, r)).cacheId = a), e.addToCache(u, a)), u
            );
          }),
          (e.fromBuffer = function (t, r, i, n) {
            var s = new m((t = t || new Float32Array(r * i * 4)), {
                width: r,
                height: i,
              }),
              a =
                t instanceof Float32Array
                  ? o.TYPES.FLOAT
                  : o.TYPES.UNSIGNED_BYTE;
            return new e(
              s,
              Object.assign({}, g, n || { width: r, height: i, type: a })
            );
          }),
          (e.addToCache = function (t, e) {
            e &&
              (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e),
              s.BaseTextureCache[e] &&
                console.warn(
                  'BaseTexture added to the cache with an id [' +
                    e +
                    '] that already had an entry'
                ),
              (s.BaseTextureCache[e] = t));
          }),
          (e.removeFromCache = function (t) {
            if ('string' == typeof t) {
              var e = s.BaseTextureCache[t];
              if (e) {
                var r = e.textureCacheIds.indexOf(t);
                return (
                  r > -1 && e.textureCacheIds.splice(r, 1),
                  delete s.BaseTextureCache[t],
                  e
                );
              }
            } else if (t && t.textureCacheIds) {
              for (var i = 0; i < t.textureCacheIds.length; ++i)
                delete s.BaseTextureCache[t.textureCacheIds[i]];
              return (t.textureCacheIds.length = 0), t;
            }
            return null;
          }),
          (e._globalBatch = 0),
          e
        );
      })(I(a)),
      x = (function (t) {
        function e(e, r) {
          var i = this,
            n = r || {},
            o = n.width,
            s = n.height;
          ((i = t.call(this, o, s) || this).items = []), (i.itemDirtyIds = []);
          for (var a = 0; a < e; a++) {
            var h = new b();
            i.items.push(h), i.itemDirtyIds.push(-2);
          }
          return (i.length = e), (i._load = null), (i.baseTexture = null), i;
        }
        return (
          _(e, t),
          (e.prototype.initFromArray = function (t, e) {
            for (var r = 0; r < this.length; r++)
              t[r] &&
                (t[r].castToBaseTexture
                  ? this.addBaseTextureAt(t[r].castToBaseTexture(), r)
                  : t[r] instanceof v
                  ? this.addResourceAt(t[r], r)
                  : this.addResourceAt(f(t[r], e), r));
          }),
          (e.prototype.dispose = function () {
            for (var t = 0, e = this.length; t < e; t++)
              this.items[t].destroy();
            (this.items = null),
              (this.itemDirtyIds = null),
              (this._load = null);
          }),
          (e.prototype.addResourceAt = function (t, e) {
            if (!this.items[e]) throw Error('Index ' + e + ' is out of bounds');
            return (
              t.valid && !this.valid && this.resize(t.width, t.height),
              this.items[e].setResource(t),
              this
            );
          }),
          (e.prototype.bind = function (e) {
            if (null !== this.baseTexture)
              throw Error('Only one base texture per TextureArray is allowed');
            t.prototype.bind.call(this, e);
            for (var r = 0; r < this.length; r++)
              (this.items[r].parentTextureArray = e),
                this.items[r].on('update', e.update, e);
          }),
          (e.prototype.unbind = function (e) {
            t.prototype.unbind.call(this, e);
            for (var r = 0; r < this.length; r++)
              (this.items[r].parentTextureArray = null),
                this.items[r].off('update', e.update, e);
          }),
          (e.prototype.load = function () {
            var t = this;
            if (this._load) return this._load;
            var e = this.items
              .map(function (t) {
                return t.resource;
              })
              .filter(function (t) {
                return t;
              })
              .map(function (t) {
                return t.load();
              });
            return (
              (this._load = Promise.all(e).then(function () {
                var e = t.items[0],
                  r = e.realWidth,
                  i = e.realHeight;
                return t.resize(r, i), Promise.resolve(t);
              })),
              this._load
            );
          }),
          e
        );
      })(v),
      T = (function (t) {
        function e(e, r) {
          var i,
            n,
            o = this,
            s = r || {},
            a = s.width,
            h = s.height;
          return (
            Array.isArray(e) ? ((i = e), (n = e.length)) : (n = e),
            (o = t.call(this, n, { width: a, height: h }) || this),
            i && o.initFromArray(i, r),
            o
          );
        }
        return (
          _(e, t),
          (e.prototype.addBaseTextureAt = function (t, e) {
            if (t.resource) this.addResourceAt(t.resource, e);
            else throw Error('ArrayResource does not support RenderTexture');
            return this;
          }),
          (e.prototype.bind = function (e) {
            t.prototype.bind.call(this, e),
              (e.target = o.TARGETS.TEXTURE_2D_ARRAY);
          }),
          (e.prototype.upload = function (t, e, r) {
            var i = this.length,
              n = this.itemDirtyIds,
              o = this.items,
              s = t.gl;
            r.dirtyId < 0 &&
              s.texImage3D(
                s.TEXTURE_2D_ARRAY,
                0,
                r.internalFormat,
                this._width,
                this._height,
                i,
                0,
                e.format,
                r.type,
                null
              );
            for (var a = 0; a < i; a++) {
              var h = o[a];
              n[a] < h.dirtyId &&
                ((n[a] = h.dirtyId),
                h.valid &&
                  s.texSubImage3D(
                    s.TEXTURE_2D_ARRAY,
                    0,
                    0,
                    0,
                    a,
                    h.resource.width,
                    h.resource.height,
                    1,
                    e.format,
                    r.type,
                    h.resource.source
                  ));
            }
            return !0;
          }),
          e
        );
      })(x),
      E = (function (t) {
        function e(e) {
          var r = this,
            i = e.naturalWidth || e.videoWidth || e.width,
            n = e.naturalHeight || e.videoHeight || e.height;
          return (
            ((r = t.call(this, i, n) || this).source = e),
            (r.noSubImage = !1),
            r
          );
        }
        return (
          _(e, t),
          (e.crossOrigin = function (t, e, r) {
            void 0 === r && 0 !== e.indexOf('data:')
              ? (t.crossOrigin = (0, s.determineCrossOrigin)(e))
              : !1 !== r &&
                (t.crossOrigin = 'string' == typeof r ? r : 'anonymous');
          }),
          (e.prototype.upload = function (t, e, r, i) {
            var n = t.gl,
              s = e.realWidth,
              a = e.realHeight;
            if ((i = i || this.source) instanceof HTMLImageElement) {
              if (!i.complete || 0 === i.naturalWidth) return !1;
            } else if (i instanceof HTMLVideoElement && i.readyState <= 1)
              return !1;
            return (
              n.pixelStorei(
                n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                e.alphaMode === o.ALPHA_MODES.UNPACK
              ),
              this.noSubImage ||
              e.target !== n.TEXTURE_2D ||
              r.width !== s ||
              r.height !== a
                ? ((r.width = s),
                  (r.height = a),
                  n.texImage2D(
                    e.target,
                    0,
                    r.internalFormat,
                    e.format,
                    r.type,
                    i
                  ))
                : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, r.type, i),
              !0
            );
          }),
          (e.prototype.update = function () {
            if (!this.destroyed) {
              var e = this.source,
                r = e.naturalWidth || e.videoWidth || e.width,
                i = e.naturalHeight || e.videoHeight || e.height;
              this.resize(r, i), t.prototype.update.call(this);
            }
          }),
          (e.prototype.dispose = function () {
            this.source = null;
          }),
          e
        );
      })(v),
      S = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          _(e, t),
          (e.test = function (t) {
            var e = globalThis.OffscreenCanvas;
            return (
              (!!e && t instanceof e) ||
              (globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement)
            );
          }),
          e
        );
      })(E),
      A = (function (t) {
        function e(r, i) {
          var n = this,
            s = i || {},
            a = s.width,
            h = s.height,
            u = s.autoLoad,
            l = s.linkBaseTexture;
          if (r && r.length !== e.SIDES)
            throw Error('Invalid length. Got ' + r.length + ', expected 6');
          n = t.call(this, 6, { width: a, height: h }) || this;
          for (var c = 0; c < e.SIDES; c++)
            n.items[c].target = o.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + c;
          return (
            (n.linkBaseTexture = !1 !== l),
            r && n.initFromArray(r, i),
            !1 !== u && n.load(),
            n
          );
        }
        return (
          _(e, t),
          (e.prototype.bind = function (e) {
            t.prototype.bind.call(this, e),
              (e.target = o.TARGETS.TEXTURE_CUBE_MAP);
          }),
          (e.prototype.addBaseTextureAt = function (t, e, r) {
            if (!this.items[e]) throw Error('Index ' + e + ' is out of bounds');
            if (
              !this.linkBaseTexture ||
              t.parentTextureArray ||
              Object.keys(t._glTextures).length > 0
            ) {
              if (t.resource) this.addResourceAt(t.resource, e);
              else
                throw Error(
                  'CubeResource does not support copying of renderTexture.'
                );
            } else
              (t.target = o.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + e),
                (t.parentTextureArray = this.baseTexture),
                (this.items[e] = t);
            return (
              t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
              (this.items[e] = t),
              this
            );
          }),
          (e.prototype.upload = function (t, r, i) {
            for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
              var s = this.items[o];
              (n[o] < s.dirtyId || i.dirtyId < r.dirtyId) &&
                (s.valid && s.resource
                  ? (s.resource.upload(t, s, i), (n[o] = s.dirtyId))
                  : n[o] < -1 &&
                    (t.gl.texImage2D(
                      s.target,
                      0,
                      i.internalFormat,
                      r.realWidth,
                      r.realHeight,
                      0,
                      r.format,
                      i.type,
                      null
                    ),
                    (n[o] = -1)));
            }
            return !0;
          }),
          (e.test = function (t) {
            return Array.isArray(t) && t.length === e.SIDES;
          }),
          (e.SIDES = 6),
          e
        );
      })(x),
      R = (function (t) {
        function e(e, r) {
          var i = this;
          if (((r = r || {}), !(e instanceof HTMLImageElement))) {
            var o = new Image();
            E.crossOrigin(o, e, r.crossorigin), (o.src = e), (e = o);
          }
          return (
            (i = t.call(this, e) || this),
            !e.complete &&
              i._width &&
              i._height &&
              ((i._width = 0), (i._height = 0)),
            (i.url = e.src),
            (i._process = null),
            (i.preserveBitmap = !1),
            (i.createBitmap =
              (void 0 !== r.createBitmap
                ? r.createBitmap
                : n.settings.CREATE_IMAGE_BITMAP) &&
              !!globalThis.createImageBitmap),
            (i.alphaMode = 'number' == typeof r.alphaMode ? r.alphaMode : null),
            (i.bitmap = null),
            (i._load = null),
            !1 !== r.autoLoad && i.load(),
            i
          );
        }
        return (
          _(e, t),
          (e.prototype.load = function (t) {
            var e = this;
            return (
              this._load ||
                (void 0 !== t && (this.createBitmap = t),
                (this._load = new Promise(function (t, r) {
                  var i = e.source;
                  e.url = i.src;
                  var n = function () {
                    e.destroyed ||
                      ((i.onload = null),
                      (i.onerror = null),
                      e.resize(i.width, i.height),
                      (e._load = null),
                      e.createBitmap ? t(e.process()) : t(e));
                  };
                  i.complete && i.src
                    ? n()
                    : ((i.onload = n),
                      (i.onerror = function (t) {
                        r(t), e.onError.emit(t);
                      }));
                }))),
              this._load
            );
          }),
          (e.prototype.process = function () {
            var t = this,
              e = this.source;
            if (null !== this._process) return this._process;
            if (null !== this.bitmap || !globalThis.createImageBitmap)
              return Promise.resolve(this);
            var r = globalThis.createImageBitmap,
              i = !e.crossOrigin || 'anonymous' === e.crossOrigin;
            return (
              (this._process = fetch(e.src, { mode: i ? 'cors' : 'no-cors' })
                .then(function (t) {
                  return t.blob();
                })
                .then(function (i) {
                  return r(i, 0, 0, e.width, e.height, {
                    premultiplyAlpha:
                      null === t.alphaMode ||
                      t.alphaMode === o.ALPHA_MODES.UNPACK
                        ? 'premultiply'
                        : 'none',
                  });
                })
                .then(function (e) {
                  return t.destroyed
                    ? Promise.reject()
                    : ((t.bitmap = e),
                      t.update(),
                      (t._process = null),
                      Promise.resolve(t));
                })),
              this._process
            );
          }),
          (e.prototype.upload = function (e, r, i) {
            if (
              ('number' == typeof this.alphaMode &&
                (r.alphaMode = this.alphaMode),
              !this.createBitmap)
            )
              return t.prototype.upload.call(this, e, r, i);
            if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
            if (
              (t.prototype.upload.call(this, e, r, i, this.bitmap),
              !this.preserveBitmap)
            ) {
              var n = !0,
                o = r._glTextures;
              for (var s in o) {
                var a = o[s];
                if (a !== i && a.dirtyId !== r.dirtyId) {
                  n = !1;
                  break;
                }
              }
              n &&
                (this.bitmap.close && this.bitmap.close(),
                (this.bitmap = null));
            }
            return !0;
          }),
          (e.prototype.dispose = function () {
            (this.source.onload = null),
              (this.source.onerror = null),
              t.prototype.dispose.call(this),
              this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
              (this._process = null),
              (this._load = null);
          }),
          (e.test = function (t) {
            return 'string' == typeof t || t instanceof HTMLImageElement;
          }),
          e
        );
      })(E),
      O = (function (t) {
        function e(e, r) {
          var i = this;
          return (
            (r = r || {}),
            ((i =
              t.call(this, (0, n.settings).ADAPTER.createCanvas()) ||
              this)._width = 0),
            (i._height = 0),
            (i.svg = e),
            (i.scale = r.scale || 1),
            (i._overrideWidth = r.width),
            (i._overrideHeight = r.height),
            (i._resolve = null),
            (i._crossorigin = r.crossorigin),
            (i._load = null),
            !1 !== r.autoLoad && i.load(),
            i
          );
        }
        return (
          _(e, t),
          (e.prototype.load = function () {
            var t = this;
            return (
              this._load ||
                (this._load = new Promise(function (r) {
                  if (
                    ((t._resolve = function () {
                      t.resize(t.source.width, t.source.height), r(t);
                    }),
                    e.SVG_XML.test(t.svg.trim()))
                  ) {
                    if (!btoa)
                      throw Error(
                        "Your browser doesn't support base64 conversions."
                      );
                    t.svg =
                      'data:image/svg+xml;base64,' +
                      btoa(unescape(encodeURIComponent(t.svg)));
                  }
                  t._loadSvg();
                })),
              this._load
            );
          }),
          (e.prototype._loadSvg = function () {
            var t = this,
              e = new Image();
            E.crossOrigin(e, this.svg, this._crossorigin),
              (e.src = this.svg),
              (e.onerror = function (r) {
                t._resolve && ((e.onerror = null), t.onError.emit(r));
              }),
              (e.onload = function () {
                if (t._resolve) {
                  var r = e.width,
                    i = e.height;
                  if (!r || !i)
                    throw Error(
                      'The SVG image must have width and height defined (in pixels), canvas API needs them.'
                    );
                  var n = r * t.scale,
                    o = i * t.scale;
                  (t._overrideWidth || t._overrideHeight) &&
                    ((n = t._overrideWidth || (t._overrideHeight / i) * r),
                    (o = t._overrideHeight || (t._overrideWidth / r) * i)),
                    (n = Math.round(n)),
                    (o = Math.round(o));
                  var a = t.source;
                  (a.width = n),
                    (a.height = o),
                    (a._pixiId = 'canvas_' + (0, s.uid)()),
                    a.getContext('2d').drawImage(e, 0, 0, r, i, 0, 0, n, o),
                    t._resolve(),
                    (t._resolve = null);
                }
              });
          }),
          (e.getSize = function (t) {
            var r = e.SVG_SIZE.exec(t),
              i = {};
            return (
              r &&
                ((i[r[1]] = Math.round(parseFloat(r[3]))),
                (i[r[5]] = Math.round(parseFloat(r[7])))),
              i
            );
          }),
          (e.prototype.dispose = function () {
            t.prototype.dispose.call(this),
              (this._resolve = null),
              (this._crossorigin = null);
          }),
          (e.test = function (t, r) {
            return (
              'svg' === r ||
              ('string' == typeof t && t.startsWith('data:image/svg+xml')) ||
              ('string' == typeof t && e.SVG_XML.test(t))
            );
          }),
          (e.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m),
          (e.SVG_SIZE =
            /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i),
          e
        );
      })(E),
      M = (function (t) {
        function e(r, i) {
          var n = this;
          if (((i = i || {}), !(r instanceof HTMLVideoElement))) {
            var o = document.createElement('video');
            o.setAttribute('preload', 'auto'),
              o.setAttribute('webkit-playsinline', ''),
              o.setAttribute('playsinline', ''),
              'string' == typeof r && (r = [r]);
            var s = r[0].src || r[0];
            E.crossOrigin(o, s, i.crossorigin);
            for (var a = 0; a < r.length; ++a) {
              var h = document.createElement('source'),
                u = r[a],
                l = u.src,
                c = u.mime,
                p = (l = l || r[a]).split('?').shift().toLowerCase(),
                f = p.slice(p.lastIndexOf('.') + 1);
              (c = c || e.MIME_TYPES[f] || 'video/' + f),
                (h.src = l),
                (h.type = c),
                o.appendChild(h);
            }
            r = o;
          }
          return (
            ((n = t.call(this, r) || this).noSubImage = !0),
            (n._autoUpdate = !0),
            (n._isConnectedToTicker = !1),
            (n._updateFPS = i.updateFPS || 0),
            (n._msToNextUpdate = 0),
            (n.autoPlay = !1 !== i.autoPlay),
            (n._load = null),
            (n._resolve = null),
            (n._onCanPlay = n._onCanPlay.bind(n)),
            (n._onError = n._onError.bind(n)),
            !1 !== i.autoLoad && n.load(),
            n
          );
        }
        return (
          _(e, t),
          (e.prototype.update = function (e) {
            if (!this.destroyed) {
              var r = l.Ticker.shared.elapsedMS * this.source.playbackRate;
              (this._msToNextUpdate = Math.floor(this._msToNextUpdate - r)),
                (!this._updateFPS || this._msToNextUpdate <= 0) &&
                  (t.prototype.update.call(this),
                  (this._msToNextUpdate = this._updateFPS
                    ? Math.floor(1e3 / this._updateFPS)
                    : 0));
            }
          }),
          (e.prototype.load = function () {
            var t = this;
            if (this._load) return this._load;
            var e = this.source;
            return (
              (e.readyState === e.HAVE_ENOUGH_DATA ||
                e.readyState === e.HAVE_FUTURE_DATA) &&
                e.width &&
                e.height &&
                (e.complete = !0),
              e.addEventListener('play', this._onPlayStart.bind(this)),
              e.addEventListener('pause', this._onPlayStop.bind(this)),
              this._isSourceReady()
                ? this._onCanPlay()
                : (e.addEventListener('canplay', this._onCanPlay),
                  e.addEventListener('canplaythrough', this._onCanPlay),
                  e.addEventListener('error', this._onError, !0)),
              (this._load = new Promise(function (r) {
                t.valid ? r(t) : ((t._resolve = r), e.load());
              })),
              this._load
            );
          }),
          (e.prototype._onError = function (t) {
            this.source.removeEventListener('error', this._onError, !0),
              this.onError.emit(t);
          }),
          (e.prototype._isSourcePlaying = function () {
            var t = this.source;
            return !t.paused && !t.ended && this._isSourceReady();
          }),
          (e.prototype._isSourceReady = function () {
            return this.source.readyState > 2;
          }),
          (e.prototype._onPlayStart = function () {
            this.valid || this._onCanPlay(),
              this.autoUpdate &&
                !this._isConnectedToTicker &&
                ((0, l.Ticker).shared.add(this.update, this),
                (this._isConnectedToTicker = !0));
          }),
          (e.prototype._onPlayStop = function () {
            this._isConnectedToTicker &&
              ((0, l.Ticker).shared.remove(this.update, this),
              (this._isConnectedToTicker = !1));
          }),
          (e.prototype._onCanPlay = function () {
            var t = this.source;
            t.removeEventListener('canplay', this._onCanPlay),
              t.removeEventListener('canplaythrough', this._onCanPlay);
            var e = this.valid;
            this.resize(t.videoWidth, t.videoHeight),
              !e &&
                this._resolve &&
                (this._resolve(this), (this._resolve = null)),
              this._isSourcePlaying()
                ? this._onPlayStart()
                : this.autoPlay && t.play();
          }),
          (e.prototype.dispose = function () {
            this._isConnectedToTicker &&
              ((0, l.Ticker).shared.remove(this.update, this),
              (this._isConnectedToTicker = !1));
            var e = this.source;
            e &&
              (e.removeEventListener('error', this._onError, !0),
              e.pause(),
              (e.src = ''),
              e.load()),
              t.prototype.dispose.call(this);
          }),
          Object.defineProperty(e.prototype, 'autoUpdate', {
            get: function () {
              return this._autoUpdate;
            },
            set: function (t) {
              t !== this._autoUpdate &&
                ((this._autoUpdate = t),
                !this._autoUpdate && this._isConnectedToTicker
                  ? ((0, l.Ticker).shared.remove(this.update, this),
                    (this._isConnectedToTicker = !1))
                  : this._autoUpdate &&
                    !this._isConnectedToTicker &&
                    this._isSourcePlaying() &&
                    ((0, l.Ticker).shared.add(this.update, this),
                    (this._isConnectedToTicker = !0)));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'updateFPS', {
            get: function () {
              return this._updateFPS;
            },
            set: function (t) {
              t !== this._updateFPS && (this._updateFPS = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.test = function (t, r) {
            return (
              (globalThis.HTMLVideoElement && t instanceof HTMLVideoElement) ||
              e.TYPES.indexOf(r) > -1
            );
          }),
          (e.TYPES = [
            'mp4',
            'm4v',
            'webm',
            'ogg',
            'ogv',
            'h264',
            'avi',
            'mov',
          ]),
          (e.MIME_TYPES = {
            ogv: 'video/ogg',
            mov: 'video/quicktime',
            m4v: 'video/mp4',
          }),
          e
        );
      })(E),
      P = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          _(e, t),
          (e.test = function (t) {
            return (
              !!globalThis.createImageBitmap &&
              'undefined' != typeof ImageBitmap &&
              t instanceof ImageBitmap
            );
          }),
          e
        );
      })(E);
    p.push(R, P, S, M, O, m, A, T);
    var D = {
        __proto__: null,
        Resource: v,
        BaseImageResource: E,
        INSTALLED: p,
        autoDetectResource: f,
        AbstractMultiResource: x,
        ArrayResource: T,
        BufferResource: m,
        CanvasResource: S,
        CubeResource: A,
        ImageResource: R,
        SVGResource: O,
        VideoResource: M,
        ImageBitmapResource: P,
      },
      C = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          _(e, t),
          (e.prototype.upload = function (t, e, r) {
            var i = t.gl;
            i.pixelStorei(
              i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              e.alphaMode === o.ALPHA_MODES.UNPACK
            );
            var n = e.realWidth,
              s = e.realHeight;
            return (
              r.width === n && r.height === s
                ? i.texSubImage2D(
                    e.target,
                    0,
                    0,
                    0,
                    n,
                    s,
                    e.format,
                    r.type,
                    this.data
                  )
                : ((r.width = n),
                  (r.height = s),
                  i.texImage2D(
                    e.target,
                    0,
                    r.internalFormat,
                    n,
                    s,
                    0,
                    e.format,
                    r.type,
                    this.data
                  )),
              !0
            );
          }),
          e
        );
      })(m),
      N = (function () {
        function t(t, e) {
          (this.width = Math.round(t || 100)),
            (this.height = Math.round(e || 100)),
            (this.stencil = !1),
            (this.depth = !1),
            (this.dirtyId = 0),
            (this.dirtyFormat = 0),
            (this.dirtySize = 0),
            (this.depthTexture = null),
            (this.colorTextures = []),
            (this.glFramebuffers = {}),
            (this.disposeRunner = new u.Runner('disposeFramebuffer')),
            (this.multisample = o.MSAA_QUALITY.NONE);
        }
        return (
          Object.defineProperty(t.prototype, 'colorTexture', {
            get: function () {
              return this.colorTextures[0];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.addColorTexture = function (t, e) {
            return (
              void 0 === t && (t = 0),
              (this.colorTextures[t] =
                e ||
                new b(null, {
                  scaleMode: o.SCALE_MODES.NEAREST,
                  resolution: 1,
                  mipmap: o.MIPMAP_MODES.OFF,
                  width: this.width,
                  height: this.height,
                })),
              this.dirtyId++,
              this.dirtyFormat++,
              this
            );
          }),
          (t.prototype.addDepthTexture = function (t) {
            return (
              (this.depthTexture =
                t ||
                new b(new C(null, { width: this.width, height: this.height }), {
                  scaleMode: o.SCALE_MODES.NEAREST,
                  resolution: 1,
                  width: this.width,
                  height: this.height,
                  mipmap: o.MIPMAP_MODES.OFF,
                  format: o.FORMATS.DEPTH_COMPONENT,
                  type: o.TYPES.UNSIGNED_SHORT,
                })),
              this.dirtyId++,
              this.dirtyFormat++,
              this
            );
          }),
          (t.prototype.enableDepth = function () {
            return (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this;
          }),
          (t.prototype.enableStencil = function () {
            return (
              (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this
            );
          }),
          (t.prototype.resize = function (t, e) {
            if (
              ((t = Math.round(t)),
              (e = Math.round(e)),
              t !== this.width || e !== this.height)
            ) {
              (this.width = t),
                (this.height = e),
                this.dirtyId++,
                this.dirtySize++;
              for (var r = 0; r < this.colorTextures.length; r++) {
                var i = this.colorTextures[r],
                  n = i.resolution;
                i.setSize(t / n, e / n);
              }
              if (this.depthTexture) {
                var n = this.depthTexture.resolution;
                this.depthTexture.setSize(t / n, e / n);
              }
            }
          }),
          (t.prototype.dispose = function () {
            this.disposeRunner.emit(this, !1);
          }),
          (t.prototype.destroyDepthTexture = function () {
            this.depthTexture &&
              (this.depthTexture.destroy(),
              (this.depthTexture = null),
              ++this.dirtyId,
              ++this.dirtyFormat);
          }),
          t
        );
      })(),
      L = (function (t) {
        function e(e) {
          void 0 === e && (e = {});
          var r = this;
          if ('number' == typeof e) {
            var i = arguments[0],
              n = arguments[1],
              s = arguments[2],
              a = arguments[3];
            e = { width: i, height: n, scaleMode: s, resolution: a };
          }
          return (
            (e.width = e.width || 100),
            (e.height = e.height || 100),
            (e.multisample =
              void 0 !== e.multisample ? e.multisample : o.MSAA_QUALITY.NONE),
            ((r = t.call(this, null, e) || this).mipmap = o.MIPMAP_MODES.OFF),
            (r.valid = !0),
            (r.clearColor = [0, 0, 0, 0]),
            (r.framebuffer = new N(r.realWidth, r.realHeight).addColorTexture(
              0,
              r
            )),
            (r.framebuffer.multisample = e.multisample),
            (r.maskStack = []),
            (r.filterStack = [{}]),
            r
          );
        }
        return (
          _(e, t),
          (e.prototype.resize = function (t, e) {
            this.framebuffer.resize(t * this.resolution, e * this.resolution),
              this.setRealSize(this.framebuffer.width, this.framebuffer.height);
          }),
          (e.prototype.dispose = function () {
            this.framebuffer.dispose(), t.prototype.dispose.call(this);
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.framebuffer.destroyDepthTexture(),
              (this.framebuffer = null);
          }),
          e
        );
      })(b),
      B = (function () {
        function t() {
          (this.x0 = 0),
            (this.y0 = 0),
            (this.x1 = 1),
            (this.y1 = 0),
            (this.x2 = 1),
            (this.y2 = 1),
            (this.x3 = 0),
            (this.y3 = 1),
            (this.uvsFloat32 = new Float32Array(8));
        }
        return (
          (t.prototype.set = function (t, e, r) {
            var i = e.width,
              n = e.height;
            if (r) {
              var o = t.width / 2 / i,
                s = t.height / 2 / n,
                a = t.x / i + o,
                h = t.y / n + s;
              (r = (0, c.groupD8).add(r, c.groupD8.NW)),
                (this.x0 = a + o * (0, c.groupD8).uX(r)),
                (this.y0 = h + s * (0, c.groupD8).uY(r)),
                (r = (0, c.groupD8).add(r, 2)),
                (this.x1 = a + o * (0, c.groupD8).uX(r)),
                (this.y1 = h + s * (0, c.groupD8).uY(r)),
                (r = (0, c.groupD8).add(r, 2)),
                (this.x2 = a + o * (0, c.groupD8).uX(r)),
                (this.y2 = h + s * (0, c.groupD8).uY(r)),
                (r = (0, c.groupD8).add(r, 2)),
                (this.x3 = a + o * (0, c.groupD8).uX(r)),
                (this.y3 = h + s * (0, c.groupD8).uY(r));
            } else
              (this.x0 = t.x / i),
                (this.y0 = t.y / n),
                (this.x1 = (t.x + t.width) / i),
                (this.y1 = t.y / n),
                (this.x2 = (t.x + t.width) / i),
                (this.y2 = (t.y + t.height) / n),
                (this.x3 = t.x / i),
                (this.y3 = (t.y + t.height) / n);
            (this.uvsFloat32[0] = this.x0),
              (this.uvsFloat32[1] = this.y0),
              (this.uvsFloat32[2] = this.x1),
              (this.uvsFloat32[3] = this.y1),
              (this.uvsFloat32[4] = this.x2),
              (this.uvsFloat32[5] = this.y2),
              (this.uvsFloat32[6] = this.x3),
              (this.uvsFloat32[7] = this.y3);
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/core:TextureUvs x0=' +
              this.x0 +
              ' y0=' +
              this.y0 +
              ' ' +
              ('x1=' + this.x1 + ' y1=' + this.y1) +
              ' x2=' +
              this.x2 +
              ' ' +
              ('y2=' + this.y2 + ' x3=') +
              this.x3 +
              ' y3=' +
              this.y3 +
              ']'
            );
          }),
          t
        );
      })(),
      G = new B();
    function U(t) {
      (t.destroy = function () {}),
        (t.on = function () {}),
        (t.once = function () {}),
        (t.emit = function () {});
    }
    var k = (function (t) {
        function e(r, i, n, o, s, a) {
          var h = t.call(this) || this;
          if (
            ((h.noFrame = !1),
            i || ((h.noFrame = !0), (i = new c.Rectangle(0, 0, 1, 1))),
            r instanceof e && (r = r.baseTexture),
            (h.baseTexture = r),
            (h._frame = i),
            (h.trim = o),
            (h.valid = !1),
            (h._uvs = G),
            (h.uvMatrix = null),
            (h.orig = n || i),
            (h._rotate = Number(s || 0)),
            !0 === s)
          )
            h._rotate = 2;
          else if (h._rotate % 2 != 0)
            throw Error(
              'attempt to use diamond-shaped UVs. If you are sure, set rotation manually'
            );
          return (
            (h.defaultAnchor = a ? new c.Point(a.x, a.y) : new c.Point(0, 0)),
            (h._updateID = 0),
            (h.textureCacheIds = []),
            r.valid
              ? h.noFrame
                ? r.valid && h.onBaseTextureUpdated(r)
                : (h.frame = i)
              : r.once('loaded', h.onBaseTextureUpdated, h),
            h.noFrame && r.on('update', h.onBaseTextureUpdated, h),
            h
          );
        }
        return (
          _(e, t),
          (e.prototype.update = function () {
            this.baseTexture.resource && this.baseTexture.resource.update();
          }),
          (e.prototype.onBaseTextureUpdated = function (t) {
            if (this.noFrame) {
              if (!this.baseTexture.valid) return;
              (this._frame.width = t.width),
                (this._frame.height = t.height),
                (this.valid = !0),
                this.updateUvs();
            } else this.frame = this._frame;
            this.emit('update', this);
          }),
          (e.prototype.destroy = function (t) {
            if (this.baseTexture) {
              if (t) {
                var r = this.baseTexture.resource;
                r && r.url && s.TextureCache[r.url] && e.removeFromCache(r.url),
                  this.baseTexture.destroy();
              }
              this.baseTexture.off('loaded', this.onBaseTextureUpdated, this),
                this.baseTexture.off('update', this.onBaseTextureUpdated, this),
                (this.baseTexture = null);
            }
            (this._frame = null),
              (this._uvs = null),
              (this.trim = null),
              (this.orig = null),
              (this.valid = !1),
              e.removeFromCache(this),
              (this.textureCacheIds = null);
          }),
          (e.prototype.clone = function () {
            var t = this._frame.clone(),
              r = this._frame === this.orig ? t : this.orig.clone(),
              i = new e(
                this.baseTexture,
                !this.noFrame && t,
                r,
                this.trim && this.trim.clone(),
                this.rotate,
                this.defaultAnchor
              );
            return this.noFrame && (i._frame = t), i;
          }),
          (e.prototype.updateUvs = function () {
            this._uvs === G && (this._uvs = new B()),
              this._uvs.set(this._frame, this.baseTexture, this.rotate),
              this._updateID++;
          }),
          (e.from = function (t, r, i) {
            void 0 === r && (r = {}),
              void 0 === i && (i = n.settings.STRICT_TEXTURE_CACHE);
            var o = 'string' == typeof t,
              a = null;
            if (o) a = t;
            else if (t instanceof b) {
              if (!t.cacheId) {
                var h = (r && r.pixiIdPrefix) || 'pixiid';
                (t.cacheId = h + '-' + (0, s.uid)()),
                  b.addToCache(t, t.cacheId);
              }
              a = t.cacheId;
            } else {
              if (!t._pixiId) {
                var h = (r && r.pixiIdPrefix) || 'pixiid';
                t._pixiId = h + '_' + (0, s.uid)();
              }
              a = t._pixiId;
            }
            var u = s.TextureCache[a];
            if (o && i && !u)
              throw Error(
                'The cacheId "' + a + '" does not exist in TextureCache.'
              );
            return (
              u || t instanceof b
                ? !u && t instanceof b && ((u = new e(t)), e.addToCache(u, a))
                : (r.resolution ||
                    (r.resolution = (0, s.getResolutionOfUrl)(t)),
                  ((u = new e(new b(t, r))).baseTexture.cacheId = a),
                  b.addToCache(u.baseTexture, a),
                  e.addToCache(u, a)),
              u
            );
          }),
          (e.fromURL = function (t, r) {
            var i = Object.assign(
                { autoLoad: !1 },
                null == r ? void 0 : r.resourceOptions
              ),
              n = e.from(t, Object.assign({ resourceOptions: i }, r), !1),
              o = n.baseTexture.resource;
            return n.baseTexture.valid
              ? Promise.resolve(n)
              : o.load().then(function () {
                  return Promise.resolve(n);
                });
          }),
          (e.fromBuffer = function (t, r, i, n) {
            return new e(b.fromBuffer(t, r, i, n));
          }),
          (e.fromLoader = function (t, r, i, o) {
            var a = new b(
                t,
                Object.assign(
                  {
                    scaleMode: n.settings.SCALE_MODE,
                    resolution: (0, s.getResolutionOfUrl)(r),
                  },
                  o
                )
              ),
              h = a.resource;
            h instanceof R && (h.url = r);
            var u = new e(a);
            return (i || (i = r),
            b.addToCache(u.baseTexture, i),
            e.addToCache(u, i),
            i !== r && (b.addToCache(u.baseTexture, r), e.addToCache(u, r)),
            u.baseTexture.valid)
              ? Promise.resolve(u)
              : new Promise(function (t) {
                  u.baseTexture.once('loaded', function () {
                    return t(u);
                  });
                });
          }),
          (e.addToCache = function (t, e) {
            e &&
              (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e),
              s.TextureCache[e] &&
                console.warn(
                  'Texture added to the cache with an id [' +
                    e +
                    '] that already had an entry'
                ),
              (s.TextureCache[e] = t));
          }),
          (e.removeFromCache = function (t) {
            if ('string' == typeof t) {
              var e = s.TextureCache[t];
              if (e) {
                var r = e.textureCacheIds.indexOf(t);
                return (
                  r > -1 && e.textureCacheIds.splice(r, 1),
                  delete s.TextureCache[t],
                  e
                );
              }
            } else if (t && t.textureCacheIds) {
              for (var i = 0; i < t.textureCacheIds.length; ++i)
                s.TextureCache[t.textureCacheIds[i]] === t &&
                  delete s.TextureCache[t.textureCacheIds[i]];
              return (t.textureCacheIds.length = 0), t;
            }
            return null;
          }),
          Object.defineProperty(e.prototype, 'resolution', {
            get: function () {
              return this.baseTexture.resolution;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'frame', {
            get: function () {
              return this._frame;
            },
            set: function (t) {
              (this._frame = t), (this.noFrame = !1);
              var e = t.x,
                r = t.y,
                i = t.width,
                n = t.height,
                o = e + i > this.baseTexture.width,
                s = r + n > this.baseTexture.height;
              if (o || s)
                throw Error(
                  'Texture Error: frame does not fit inside the base Texture dimensions: ' +
                    ('X: ' +
                      e +
                      ' + ' +
                      i +
                      ' = ' +
                      (e + i) +
                      ' > ' +
                      this.baseTexture.width +
                      ' ') +
                    (o && s ? 'and' : 'or') +
                    ' ' +
                    ('Y: ' + r + ' + ' + n + ' = ' + (r + n)) +
                    ' > ' +
                    this.baseTexture.height
                );
              (this.valid = i && n && this.baseTexture.valid),
                this.trim || this.rotate || (this.orig = t),
                this.valid && this.updateUvs();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'rotate', {
            get: function () {
              return this._rotate;
            },
            set: function (t) {
              (this._rotate = t), this.valid && this.updateUvs();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'width', {
            get: function () {
              return this.orig.width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'height', {
            get: function () {
              return this.orig.height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.castToBaseTexture = function () {
            return this.baseTexture;
          }),
          Object.defineProperty(e, 'EMPTY', {
            get: function () {
              return (
                e._EMPTY ||
                  ((e._EMPTY = new e(new b())),
                  U(e._EMPTY),
                  U(e._EMPTY.baseTexture)),
                e._EMPTY
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e, 'WHITE', {
            get: function () {
              if (!e._WHITE) {
                var t = (0, n.settings).ADAPTER.createCanvas(16, 16),
                  r = t.getContext('2d');
                (t.width = 16),
                  (t.height = 16),
                  (r.fillStyle = 'white'),
                  r.fillRect(0, 0, 16, 16),
                  (e._WHITE = new e(b.from(t))),
                  U(e._WHITE),
                  U(e._WHITE.baseTexture);
              }
              return e._WHITE;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(I(a)),
      X = (function (t) {
        function e(e, r) {
          var i = t.call(this, e, r) || this;
          return (
            (i.valid = !0),
            (i.filterFrame = null),
            (i.filterPoolKey = null),
            i.updateUvs(),
            i
          );
        }
        return (
          _(e, t),
          Object.defineProperty(e.prototype, 'framebuffer', {
            get: function () {
              return this.baseTexture.framebuffer;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'multisample', {
            get: function () {
              return this.framebuffer.multisample;
            },
            set: function (t) {
              this.framebuffer.multisample = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.resize = function (t, e, r) {
            void 0 === r && (r = !0);
            var i = this.baseTexture.resolution,
              n = Math.round(t * i) / i,
              o = Math.round(e * i) / i;
            (this.valid = n > 0 && o > 0),
              (this._frame.width = this.orig.width = n),
              (this._frame.height = this.orig.height = o),
              r && this.baseTexture.resize(n, o),
              this.updateUvs();
          }),
          (e.prototype.setResolution = function (t) {
            var e = this.baseTexture;
            e.resolution !== t &&
              (e.setResolution(t), this.resize(e.width, e.height, !1));
          }),
          (e.create = function (t) {
            for (var r = arguments, i = [], n = 1; n < arguments.length; n++)
              i[n - 1] = r[n];
            return (
              'number' == typeof t &&
                ((0, s.deprecation)(
                  '6.0.0',
                  'Arguments (width, height, scaleMode, resolution) have been deprecated.'
                ),
                (t = {
                  width: t,
                  height: i[0],
                  scaleMode: i[1],
                  resolution: i[2],
                })),
              new e(new L(t))
            );
          }),
          e
        );
      })(k),
      j = (function () {
        function t(t) {
          (this.texturePool = {}),
            (this.textureOptions = t || {}),
            (this.enableFullScreen = !1),
            (this._pixelsWidth = 0),
            (this._pixelsHeight = 0);
        }
        return (
          (t.prototype.createTexture = function (t, e, r) {
            return (
              void 0 === r && (r = o.MSAA_QUALITY.NONE),
              new X(
                new L(
                  Object.assign(
                    { width: t, height: e, resolution: 1, multisample: r },
                    this.textureOptions
                  )
                )
              )
            );
          }),
          (t.prototype.getOptimalTexture = function (t, e, r, i) {
            void 0 === r && (r = 1),
              void 0 === i && (i = o.MSAA_QUALITY.NONE),
              (t = Math.ceil(t * r - 1e-6)),
              (e = Math.ceil(e * r - 1e-6)),
              this.enableFullScreen &&
              t === this._pixelsWidth &&
              e === this._pixelsHeight
                ? (n = i > 1 ? -i : -1)
                : ((n =
                    (((65535 & (t = (0, s.nextPow2)(t))) << 16) |
                      (65535 & (e = (0, s.nextPow2)(e)))) >>>
                    0),
                  i > 1 && (n += 4294967296 * i)),
              this.texturePool[n] || (this.texturePool[n] = []);
            var n,
              a = this.texturePool[n].pop();
            return (
              a || (a = this.createTexture(t, e, i)),
              (a.filterPoolKey = n),
              a.setResolution(r),
              a
            );
          }),
          (t.prototype.getFilterTexture = function (t, e, r) {
            var i = this.getOptimalTexture(
              t.width,
              t.height,
              e || t.resolution,
              r || o.MSAA_QUALITY.NONE
            );
            return (i.filterFrame = t.filterFrame), i;
          }),
          (t.prototype.returnTexture = function (t) {
            var e = t.filterPoolKey;
            (t.filterFrame = null), this.texturePool[e].push(t);
          }),
          (t.prototype.returnFilterTexture = function (t) {
            this.returnTexture(t);
          }),
          (t.prototype.clear = function (t) {
            if ((t = !1 !== t))
              for (var e in this.texturePool) {
                var r = this.texturePool[e];
                if (r) for (var i = 0; i < r.length; i++) r[i].destroy(!0);
              }
            this.texturePool = {};
          }),
          (t.prototype.setScreenSize = function (t) {
            if (
              t.width !== this._pixelsWidth ||
              t.height !== this._pixelsHeight
            ) {
              for (var e in ((this.enableFullScreen =
                t.width > 0 && t.height > 0),
              this.texturePool))
                if (0 > Number(e)) {
                  var r = this.texturePool[e];
                  if (r) for (var i = 0; i < r.length; i++) r[i].destroy(!0);
                  this.texturePool[e] = [];
                }
              (this._pixelsWidth = t.width), (this._pixelsHeight = t.height);
            }
          }),
          (t.SCREEN_KEY = -1),
          t
        );
      })(),
      H = (function () {
        function t(t, e, r, i, n, s, a) {
          void 0 === e && (e = 0),
            void 0 === r && (r = !1),
            void 0 === i && (i = o.TYPES.FLOAT),
            (this.buffer = t),
            (this.size = e),
            (this.normalized = r),
            (this.type = i),
            (this.stride = n),
            (this.start = s),
            (this.instance = a);
        }
        return (
          (t.prototype.destroy = function () {
            this.buffer = null;
          }),
          (t.from = function (e, r, i, n, o) {
            return new t(e, r, i, n, o);
          }),
          t
        );
      })(),
      Y = 0,
      V = (function () {
        function t(t, e, r) {
          void 0 === e && (e = !0),
            void 0 === r && (r = !1),
            (this.data = t || new Float32Array(1)),
            (this._glBuffers = {}),
            (this._updateID = 0),
            (this.index = r),
            (this.static = e),
            (this.id = Y++),
            (this.disposeRunner = new u.Runner('disposeBuffer'));
        }
        return (
          (t.prototype.update = function (t) {
            t instanceof Array && (t = new Float32Array(t)),
              (this.data = t || this.data),
              this._updateID++;
          }),
          (t.prototype.dispose = function () {
            this.disposeRunner.emit(this, !1);
          }),
          (t.prototype.destroy = function () {
            this.dispose(), (this.data = null);
          }),
          Object.defineProperty(t.prototype, 'index', {
            get: function () {
              return this.type === o.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
            },
            set: function (t) {
              this.type = t
                ? o.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER
                : o.BUFFER_TYPE.ARRAY_BUFFER;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.from = function (e) {
            return e instanceof Array && (e = new Float32Array(e)), new t(e);
          }),
          t
        );
      })(),
      z = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
      },
      W = { 5126: 4, 5123: 2, 5121: 1 },
      q = 0,
      K = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array,
      },
      Z = (function () {
        function t(t, e) {
          void 0 === t && (t = []),
            void 0 === e && (e = {}),
            (this.buffers = t),
            (this.indexBuffer = null),
            (this.attributes = e),
            (this.glVertexArrayObjects = {}),
            (this.id = q++),
            (this.instanced = !1),
            (this.instanceCount = 1),
            (this.disposeRunner = new u.Runner('disposeGeometry')),
            (this.refCount = 0);
        }
        return (
          (t.prototype.addAttribute = function (t, e, r, i, n, o, s, a) {
            if (
              (void 0 === r && (r = 0),
              void 0 === i && (i = !1),
              void 0 === a && (a = !1),
              !e)
            )
              throw Error('You must pass a buffer when creating an attribute');
            e instanceof V ||
              (e instanceof Array && (e = new Float32Array(e)), (e = new V(e)));
            var h = t.split('|');
            if (h.length > 1) {
              for (var u = 0; u < h.length; u++)
                this.addAttribute(h[u], e, r, i, n);
              return this;
            }
            var l = this.buffers.indexOf(e);
            return (
              -1 === l && (this.buffers.push(e), (l = this.buffers.length - 1)),
              (this.attributes[t] = new H(l, r, i, n, o, s, a)),
              (this.instanced = this.instanced || a),
              this
            );
          }),
          (t.prototype.getAttribute = function (t) {
            return this.attributes[t];
          }),
          (t.prototype.getBuffer = function (t) {
            return this.buffers[this.getAttribute(t).buffer];
          }),
          (t.prototype.addIndex = function (t) {
            return (
              t instanceof V ||
                (t instanceof Array && (t = new Uint16Array(t)),
                (t = new V(t))),
              (t.type = o.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER),
              (this.indexBuffer = t),
              -1 === this.buffers.indexOf(t) && this.buffers.push(t),
              this
            );
          }),
          (t.prototype.getIndex = function () {
            return this.indexBuffer;
          }),
          (t.prototype.interleave = function () {
            if (
              1 === this.buffers.length ||
              (2 === this.buffers.length && this.indexBuffer)
            )
              return this;
            var t,
              e = [],
              r = [],
              i = new V();
            for (t in this.attributes) {
              var n = this.attributes[t],
                o = this.buffers[n.buffer];
              e.push(o.data), r.push((n.size * W[n.type]) / 4), (n.buffer = 0);
            }
            for (
              t = 0,
                i.data = (function (t, e) {
                  for (var r = 0, i = 0, n = {}, o = 0; o < t.length; o++)
                    (i += e[o]), (r += t[o].length);
                  for (
                    var a = new ArrayBuffer(4 * r), h = null, u = 0, o = 0;
                    o < t.length;
                    o++
                  ) {
                    var l = e[o],
                      c = t[o],
                      p = (0, s.getBufferType)(c);
                    n[p] || (n[p] = new z[p](a)), (h = n[p]);
                    for (var f = 0; f < c.length; f++)
                      h[((f / l) | 0) * i + u + (f % l)] = c[f];
                    u += l;
                  }
                  return new Float32Array(a);
                })(e, r);
              t < this.buffers.length;
              t++
            )
              this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
            return (
              (this.buffers = [i]),
              this.indexBuffer && this.buffers.push(this.indexBuffer),
              this
            );
          }),
          (t.prototype.getSize = function () {
            for (var t in this.attributes) {
              var e = this.attributes[t];
              return (
                this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
              );
            }
            return 0;
          }),
          (t.prototype.dispose = function () {
            this.disposeRunner.emit(this, !1);
          }),
          (t.prototype.destroy = function () {
            this.dispose(),
              (this.buffers = null),
              (this.indexBuffer = null),
              (this.attributes = null);
          }),
          (t.prototype.clone = function () {
            for (var e = new t(), r = 0; r < this.buffers.length; r++)
              e.buffers[r] = new V(this.buffers[r].data.slice(0));
            for (var r in this.attributes) {
              var i = this.attributes[r];
              e.attributes[r] = new H(
                i.buffer,
                i.size,
                i.normalized,
                i.type,
                i.stride,
                i.start,
                i.instance
              );
            }
            return (
              this.indexBuffer &&
                ((e.indexBuffer =
                  e.buffers[this.buffers.indexOf(this.indexBuffer)]),
                (e.indexBuffer.type = o.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER)),
              e
            );
          }),
          (t.merge = function (e) {
            for (
              var r, i = new t(), n = [], a = [], h = [], u = 0;
              u < e.length;
              u++
            ) {
              r = e[u];
              for (var l = 0; l < r.buffers.length; l++)
                (a[l] = a[l] || 0),
                  (a[l] += r.buffers[l].data.length),
                  (h[l] = 0);
            }
            for (var u = 0; u < r.buffers.length; u++)
              (n[u] = new K[(0, s.getBufferType)(r.buffers[u].data)](a[u])),
                (i.buffers[u] = new V(n[u]));
            for (var u = 0; u < e.length; u++) {
              r = e[u];
              for (var l = 0; l < r.buffers.length; l++)
                n[l].set(r.buffers[l].data, h[l]),
                  (h[l] += r.buffers[l].data.length);
            }
            if (((i.attributes = r.attributes), r.indexBuffer)) {
              (i.indexBuffer = i.buffers[r.buffers.indexOf(r.indexBuffer)]),
                (i.indexBuffer.type = o.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER);
              for (
                var c = 0, p = 0, f = 0, d = 0, u = 0;
                u < r.buffers.length;
                u++
              )
                if (r.buffers[u] !== r.indexBuffer) {
                  d = u;
                  break;
                }
              for (var u in r.attributes) {
                var _ = r.attributes[u];
                (0 | _.buffer) === d && (p += (_.size * W[_.type]) / 4);
              }
              for (var u = 0; u < e.length; u++) {
                for (var y = e[u].indexBuffer.data, l = 0; l < y.length; l++)
                  i.indexBuffer.data[l + f] += c;
                (c += e[u].buffers[d].data.length / p), (f += y.length);
              }
            }
            return i;
          }),
          t
        );
      })(),
      Q = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            e
              .addAttribute(
                'aVertexPosition',
                new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
              )
              .addIndex([0, 1, 3, 2]),
            e
          );
        }
        return _(e, t), e;
      })(Z),
      J = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
            (e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
            (e.vertexBuffer = new V(e.vertices)),
            (e.uvBuffer = new V(e.uvs)),
            e
              .addAttribute('aVertexPosition', e.vertexBuffer)
              .addAttribute('aTextureCoord', e.uvBuffer)
              .addIndex([0, 1, 2, 0, 2, 3]),
            e
          );
        }
        return (
          _(e, t),
          (e.prototype.map = function (t, e) {
            var r = 0,
              i = 0;
            return (
              (this.uvs[0] = r),
              (this.uvs[1] = i),
              (this.uvs[2] = r + e.width / t.width),
              (this.uvs[3] = i),
              (this.uvs[4] = r + e.width / t.width),
              (this.uvs[5] = i + e.height / t.height),
              (this.uvs[6] = r),
              (this.uvs[7] = i + e.height / t.height),
              (r = e.x),
              (i = e.y),
              (this.vertices[0] = r),
              (this.vertices[1] = i),
              (this.vertices[2] = r + e.width),
              (this.vertices[3] = i),
              (this.vertices[4] = r + e.width),
              (this.vertices[5] = i + e.height),
              (this.vertices[6] = r),
              (this.vertices[7] = i + e.height),
              this.invalidate(),
              this
            );
          }),
          (e.prototype.invalidate = function () {
            return (
              this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
            );
          }),
          e
        );
      })(Z),
      $ = 0,
      tt = (function () {
        function t(t, e, r) {
          (this.group = !0),
            (this.syncUniforms = {}),
            (this.dirtyId = 0),
            (this.id = $++),
            (this.static = !!e),
            (this.ubo = !!r),
            t instanceof V
              ? ((this.buffer = t),
                (this.buffer.type = o.BUFFER_TYPE.UNIFORM_BUFFER),
                (this.autoManage = !1),
                (this.ubo = !0))
              : ((this.uniforms = t),
                this.ubo &&
                  ((this.buffer = new V(new Float32Array(1))),
                  (this.buffer.type = o.BUFFER_TYPE.UNIFORM_BUFFER),
                  (this.autoManage = !0)));
        }
        return (
          (t.prototype.update = function () {
            this.dirtyId++,
              !this.autoManage && this.buffer && this.buffer.update();
          }),
          (t.prototype.add = function (e, r, i) {
            if (this.ubo)
              throw Error(
                '[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them'
              );
            this.uniforms[e] = new t(r, i);
          }),
          (t.from = function (e, r, i) {
            return new t(e, r, i);
          }),
          (t.uboFrom = function (e, r) {
            return new t(e, null == r || r, !0);
          }),
          t
        );
      })(),
      te = (function () {
        function t() {
          (this.renderTexture = null),
            (this.target = null),
            (this.legacy = !1),
            (this.resolution = 1),
            (this.multisample = o.MSAA_QUALITY.NONE),
            (this.sourceFrame = new c.Rectangle()),
            (this.destinationFrame = new c.Rectangle()),
            (this.bindingSourceFrame = new c.Rectangle()),
            (this.bindingDestinationFrame = new c.Rectangle()),
            (this.filters = []),
            (this.transform = null);
        }
        return (
          (t.prototype.clear = function () {
            (this.target = null),
              (this.filters = null),
              (this.renderTexture = null);
          }),
          t
        );
      })(),
      tr = [new c.Point(), new c.Point(), new c.Point(), new c.Point()],
      ti = new c.Matrix(),
      tn = (function () {
        function t(t) {
          (this.renderer = t),
            (this.defaultFilterStack = [{}]),
            (this.texturePool = new j()),
            this.texturePool.setScreenSize(t.view),
            (this.statePool = []),
            (this.quad = new Q()),
            (this.quadUv = new J()),
            (this.tempRect = new c.Rectangle()),
            (this.activeState = {}),
            (this.globalUniforms = new tt(
              {
                outputFrame: new c.Rectangle(),
                inputSize: new Float32Array(4),
                inputPixel: new Float32Array(4),
                inputClamp: new Float32Array(4),
                resolution: 1,
                filterArea: new Float32Array(4),
                filterClamp: new Float32Array(4),
              },
              !0
            )),
            (this.forceClear = !1),
            (this.useMaxPadding = !1);
        }
        return (
          (t.prototype.push = function (t, e) {
            for (
              var r,
                i,
                n = this.renderer,
                o = this.defaultFilterStack,
                s = this.statePool.pop() || new te(),
                a = this.renderer.renderTexture,
                h = e[0].resolution,
                u = e[0].multisample,
                l = e[0].padding,
                c = e[0].autoFit,
                p = null === (r = e[0].legacy) || void 0 === r || r,
                f = 1;
              f < e.length;
              f++
            ) {
              var d = e[f];
              (h = Math.min(h, d.resolution)),
                (u = Math.min(u, d.multisample)),
                (l = this.useMaxPadding
                  ? Math.max(l, d.padding)
                  : l + d.padding),
                (c = c && d.autoFit),
                (p = p || null === (i = d.legacy) || void 0 === i || i);
            }
            1 === o.length &&
              (this.defaultFilterStack[0].renderTexture = a.current),
              o.push(s),
              (s.resolution = h),
              (s.multisample = u),
              (s.legacy = p),
              (s.target = t),
              s.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
              s.sourceFrame.pad(l);
            var _ = this.tempRect.copyFrom(a.sourceFrame);
            n.projection.transform &&
              this.transformAABB(
                ti.copyFrom(n.projection.transform).invert(),
                _
              ),
              c
                ? (s.sourceFrame.fit(_),
                  (s.sourceFrame.width <= 0 || s.sourceFrame.height <= 0) &&
                    ((s.sourceFrame.width = 0), (s.sourceFrame.height = 0)))
                : s.sourceFrame.intersects(_) ||
                  ((s.sourceFrame.width = 0), (s.sourceFrame.height = 0)),
              this.roundFrame(
                s.sourceFrame,
                a.current ? a.current.resolution : n.resolution,
                a.sourceFrame,
                a.destinationFrame,
                n.projection.transform
              ),
              (s.renderTexture = this.getOptimalFilterTexture(
                s.sourceFrame.width,
                s.sourceFrame.height,
                h,
                u
              )),
              (s.filters = e),
              (s.destinationFrame.width = s.renderTexture.width),
              (s.destinationFrame.height = s.renderTexture.height);
            var y = this.tempRect;
            (y.x = 0),
              (y.y = 0),
              (y.width = s.sourceFrame.width),
              (y.height = s.sourceFrame.height),
              (s.renderTexture.filterFrame = s.sourceFrame),
              s.bindingSourceFrame.copyFrom(a.sourceFrame),
              s.bindingDestinationFrame.copyFrom(a.destinationFrame),
              (s.transform = n.projection.transform),
              (n.projection.transform = null),
              a.bind(s.renderTexture, s.sourceFrame, y),
              n.framebuffer.clear(0, 0, 0, 0);
          }),
          (t.prototype.pop = function () {
            var t = this.defaultFilterStack,
              e = t.pop(),
              r = e.filters;
            this.activeState = e;
            var i = this.globalUniforms.uniforms;
            (i.outputFrame = e.sourceFrame), (i.resolution = e.resolution);
            var n = i.inputSize,
              s = i.inputPixel,
              a = i.inputClamp;
            if (
              ((n[0] = e.destinationFrame.width),
              (n[1] = e.destinationFrame.height),
              (n[2] = 1 / n[0]),
              (n[3] = 1 / n[1]),
              (s[0] = Math.round(n[0] * e.resolution)),
              (s[1] = Math.round(n[1] * e.resolution)),
              (s[2] = 1 / s[0]),
              (s[3] = 1 / s[1]),
              (a[0] = 0.5 * s[2]),
              (a[1] = 0.5 * s[3]),
              (a[2] = e.sourceFrame.width * n[2] - 0.5 * s[2]),
              (a[3] = e.sourceFrame.height * n[3] - 0.5 * s[3]),
              e.legacy)
            ) {
              var h = i.filterArea;
              (h[0] = e.destinationFrame.width),
                (h[1] = e.destinationFrame.height),
                (h[2] = e.sourceFrame.x),
                (h[3] = e.sourceFrame.y),
                (i.filterClamp = i.inputClamp);
            }
            this.globalUniforms.update();
            var u = t[t.length - 1];
            if ((this.renderer.framebuffer.blit(), 1 === r.length))
              r[0].apply(
                this,
                e.renderTexture,
                u.renderTexture,
                o.CLEAR_MODES.BLEND,
                e
              ),
                this.returnFilterTexture(e.renderTexture);
            else {
              var l = e.renderTexture,
                c = this.getOptimalFilterTexture(
                  l.width,
                  l.height,
                  e.resolution
                );
              c.filterFrame = l.filterFrame;
              var p = 0;
              for (p = 0; p < r.length - 1; ++p) {
                1 === p &&
                  e.multisample > 1 &&
                  ((c = this.getOptimalFilterTexture(
                    l.width,
                    l.height,
                    e.resolution
                  )).filterFrame = l.filterFrame),
                  r[p].apply(this, l, c, o.CLEAR_MODES.CLEAR, e);
                var f = l;
                (l = c), (c = f);
              }
              r[p].apply(this, l, u.renderTexture, o.CLEAR_MODES.BLEND, e),
                p > 1 &&
                  e.multisample > 1 &&
                  this.returnFilterTexture(e.renderTexture),
                this.returnFilterTexture(l),
                this.returnFilterTexture(c);
            }
            e.clear(), this.statePool.push(e);
          }),
          (t.prototype.bindAndClear = function (t, e) {
            void 0 === e && (e = o.CLEAR_MODES.CLEAR);
            var r = this.renderer,
              i = r.renderTexture,
              n = r.state;
            if (
              (t ===
              this.defaultFilterStack[this.defaultFilterStack.length - 1]
                .renderTexture
                ? (this.renderer.projection.transform =
                    this.activeState.transform)
                : (this.renderer.projection.transform = null),
              t && t.filterFrame)
            ) {
              var s = this.tempRect;
              (s.x = 0),
                (s.y = 0),
                (s.width = t.filterFrame.width),
                (s.height = t.filterFrame.height),
                i.bind(t, t.filterFrame, s);
            } else
              t !==
              this.defaultFilterStack[this.defaultFilterStack.length - 1]
                .renderTexture
                ? i.bind(t)
                : this.renderer.renderTexture.bind(
                    t,
                    this.activeState.bindingSourceFrame,
                    this.activeState.bindingDestinationFrame
                  );
            var a = 1 & n.stateId || this.forceClear;
            (e === o.CLEAR_MODES.CLEAR || (e === o.CLEAR_MODES.BLIT && a)) &&
              this.renderer.framebuffer.clear(0, 0, 0, 0);
          }),
          (t.prototype.applyFilter = function (t, e, r, i) {
            var n = this.renderer;
            n.state.set(t.state),
              this.bindAndClear(r, i),
              (t.uniforms.uSampler = e),
              (t.uniforms.filterGlobals = this.globalUniforms),
              n.shader.bind(t),
              (t.legacy = !!t.program.attributeData.aTextureCoord),
              t.legacy
                ? (this.quadUv.map(e._frame, e.filterFrame),
                  n.geometry.bind(this.quadUv),
                  n.geometry.draw(o.DRAW_MODES.TRIANGLES))
                : (n.geometry.bind(this.quad),
                  n.geometry.draw(o.DRAW_MODES.TRIANGLE_STRIP));
          }),
          (t.prototype.calculateSpriteMatrix = function (t, e) {
            var r = this.activeState,
              i = r.sourceFrame,
              n = r.destinationFrame,
              o = e._texture.orig,
              s = t.set(n.width, 0, 0, n.height, i.x, i.y),
              a = e.worldTransform.copyTo(c.Matrix.TEMP_MATRIX);
            return (
              a.invert(),
              s.prepend(a),
              s.scale(1 / o.width, 1 / o.height),
              s.translate(e.anchor.x, e.anchor.y),
              s
            );
          }),
          (t.prototype.destroy = function () {
            (this.renderer = null), this.texturePool.clear(!1);
          }),
          (t.prototype.getOptimalFilterTexture = function (t, e, r, i) {
            return (
              void 0 === r && (r = 1),
              void 0 === i && (i = o.MSAA_QUALITY.NONE),
              this.texturePool.getOptimalTexture(t, e, r, i)
            );
          }),
          (t.prototype.getFilterTexture = function (t, e, r) {
            if ('number' == typeof t) {
              var i = t;
              (t = e), (e = i);
            }
            t = t || this.activeState.renderTexture;
            var n = this.texturePool.getOptimalTexture(
              t.width,
              t.height,
              e || t.resolution,
              r || o.MSAA_QUALITY.NONE
            );
            return (n.filterFrame = t.filterFrame), n;
          }),
          (t.prototype.returnFilterTexture = function (t) {
            this.texturePool.returnTexture(t);
          }),
          (t.prototype.emptyPool = function () {
            this.texturePool.clear(!0);
          }),
          (t.prototype.resize = function () {
            this.texturePool.setScreenSize(this.renderer.view);
          }),
          (t.prototype.transformAABB = function (t, e) {
            var r = tr[0],
              i = tr[1],
              n = tr[2],
              o = tr[3];
            r.set(e.left, e.top),
              i.set(e.left, e.bottom),
              n.set(e.right, e.top),
              o.set(e.right, e.bottom),
              t.apply(r, r),
              t.apply(i, i),
              t.apply(n, n),
              t.apply(o, o);
            var s = Math.min(r.x, i.x, n.x, o.x),
              a = Math.min(r.y, i.y, n.y, o.y),
              h = Math.max(r.x, i.x, n.x, o.x),
              u = Math.max(r.y, i.y, n.y, o.y);
            (e.x = s), (e.y = a), (e.width = h - s), (e.height = u - a);
          }),
          (t.prototype.roundFrame = function (t, e, r, i, n) {
            if (
              !(t.width <= 0) &&
              !(t.height <= 0) &&
              !(r.width <= 0) &&
              !(r.height <= 0)
            ) {
              if (n) {
                var o = n.a,
                  s = n.b,
                  a = n.c,
                  h = n.d;
                if (
                  (Math.abs(s) > 1e-4 || Math.abs(a) > 1e-4) &&
                  (Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4)
                )
                  return;
              }
              (n = n ? ti.copyFrom(n) : ti.identity())
                .translate(-r.x, -r.y)
                .scale(i.width / r.width, i.height / r.height)
                .translate(i.x, i.y),
                this.transformAABB(n, t),
                t.ceil(e),
                this.transformAABB(n.invert(), t);
            }
          }),
          t
        );
      })(),
      to = (function () {
        function t(t) {
          this.renderer = t;
        }
        return (
          (t.prototype.flush = function () {}),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          (t.prototype.start = function () {}),
          (t.prototype.stop = function () {
            this.flush();
          }),
          (t.prototype.render = function (t) {}),
          t
        );
      })(),
      ts = (function () {
        function t(t) {
          (this.renderer = t),
            (this.emptyRenderer = new to(t)),
            (this.currentRenderer = this.emptyRenderer);
        }
        return (
          (t.prototype.setObjectRenderer = function (t) {
            this.currentRenderer !== t &&
              (this.currentRenderer.stop(),
              (this.currentRenderer = t),
              this.currentRenderer.start());
          }),
          (t.prototype.flush = function () {
            this.setObjectRenderer(this.emptyRenderer);
          }),
          (t.prototype.reset = function () {
            this.setObjectRenderer(this.emptyRenderer);
          }),
          (t.prototype.copyBoundTextures = function (t, e) {
            for (
              var r = this.renderer.texture.boundTextures, i = e - 1;
              i >= 0;
              --i
            )
              (t[i] = r[i] || null), t[i] && (t[i]._batchLocation = i);
          }),
          (t.prototype.boundArray = function (t, e, r, i) {
            for (
              var n = t.elements, o = t.ids, s = t.count, a = 0, h = 0;
              h < s;
              h++
            ) {
              var u = n[h],
                l = u._batchLocation;
              if (l >= 0 && l < i && e[l] === u) {
                o[h] = l;
                continue;
              }
              for (; a < i; ) {
                var c = e[a];
                if (c && c._batchEnabled === r && c._batchLocation === a) {
                  a++;
                  continue;
                }
                (o[h] = a), (u._batchLocation = a), (e[a] = u);
                break;
              }
            }
          }),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })(),
      ta = 0,
      th = (function () {
        function t(t) {
          (this.renderer = t),
            (this.webGLVersion = 1),
            (this.extensions = {}),
            (this.supports = { uint32Indices: !1 }),
            (this.handleContextLost = this.handleContextLost.bind(this)),
            (this.handleContextRestored =
              this.handleContextRestored.bind(this)),
            t.view.addEventListener(
              'webglcontextlost',
              this.handleContextLost,
              !1
            ),
            t.view.addEventListener(
              'webglcontextrestored',
              this.handleContextRestored,
              !1
            );
        }
        return (
          Object.defineProperty(t.prototype, 'isLost', {
            get: function () {
              return !this.gl || this.gl.isContextLost();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.contextChange = function (t) {
            (this.gl = t),
              (this.renderer.gl = t),
              (this.renderer.CONTEXT_UID = ta++);
          }),
          (t.prototype.initFromContext = function (t) {
            (this.gl = t),
              this.validateContext(t),
              (this.renderer.gl = t),
              (this.renderer.CONTEXT_UID = ta++),
              this.renderer.runners.contextChange.emit(t);
          }),
          (t.prototype.initFromOptions = function (t) {
            var e = this.createContext(this.renderer.view, t);
            this.initFromContext(e);
          }),
          (t.prototype.createContext = function (t, e) {
            var r;
            if (
              (n.settings.PREFER_ENV >= o.ENV.WEBGL2 &&
                (r = t.getContext('webgl2', e)),
              r)
            )
              this.webGLVersion = 2;
            else if (
              ((this.webGLVersion = 1),
              !(r =
                t.getContext('webgl', e) ||
                t.getContext('experimental-webgl', e)))
            )
              throw Error(
                'This browser does not support WebGL. Try using the canvas renderer'
              );
            return (this.gl = r), this.getExtensions(), this.gl;
          }),
          (t.prototype.getExtensions = function () {
            var t = this.gl,
              e = {
                loseContext: t.getExtension('WEBGL_lose_context'),
                anisotropicFiltering: t.getExtension(
                  'EXT_texture_filter_anisotropic'
                ),
                floatTextureLinear: t.getExtension('OES_texture_float_linear'),
                s3tc: t.getExtension('WEBGL_compressed_texture_s3tc'),
                s3tc_sRGB: t.getExtension('WEBGL_compressed_texture_s3tc_srgb'),
                etc: t.getExtension('WEBGL_compressed_texture_etc'),
                etc1: t.getExtension('WEBGL_compressed_texture_etc1'),
                pvrtc:
                  t.getExtension('WEBGL_compressed_texture_pvrtc') ||
                  t.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
                atc: t.getExtension('WEBGL_compressed_texture_atc'),
                astc: t.getExtension('WEBGL_compressed_texture_astc'),
              };
            1 === this.webGLVersion
              ? Object.assign(this.extensions, e, {
                  drawBuffers: t.getExtension('WEBGL_draw_buffers'),
                  depthTexture: t.getExtension('WEBGL_depth_texture'),
                  vertexArrayObject:
                    t.getExtension('OES_vertex_array_object') ||
                    t.getExtension('MOZ_OES_vertex_array_object') ||
                    t.getExtension('WEBKIT_OES_vertex_array_object'),
                  uint32ElementIndex: t.getExtension('OES_element_index_uint'),
                  floatTexture: t.getExtension('OES_texture_float'),
                  floatTextureLinear: t.getExtension(
                    'OES_texture_float_linear'
                  ),
                  textureHalfFloat: t.getExtension('OES_texture_half_float'),
                  textureHalfFloatLinear: t.getExtension(
                    'OES_texture_half_float_linear'
                  ),
                })
              : 2 === this.webGLVersion &&
                Object.assign(this.extensions, e, {
                  colorBufferFloat: t.getExtension('EXT_color_buffer_float'),
                });
          }),
          (t.prototype.handleContextLost = function (t) {
            var e = this;
            t.preventDefault(),
              setTimeout(function () {
                e.gl.isContextLost() &&
                  e.extensions.loseContext &&
                  e.extensions.loseContext.restoreContext();
              }, 0);
          }),
          (t.prototype.handleContextRestored = function () {
            this.renderer.runners.contextChange.emit(this.gl);
          }),
          (t.prototype.destroy = function () {
            var t = this.renderer.view;
            (this.renderer = null),
              t.removeEventListener('webglcontextlost', this.handleContextLost),
              t.removeEventListener(
                'webglcontextrestored',
                this.handleContextRestored
              ),
              this.gl.useProgram(null),
              this.extensions.loseContext &&
                this.extensions.loseContext.loseContext();
          }),
          (t.prototype.postrender = function () {
            this.renderer.renderingToScreen && this.gl.flush();
          }),
          (t.prototype.validateContext = function (t) {
            var e = t.getContextAttributes(),
              r =
                'WebGL2RenderingContext' in globalThis &&
                t instanceof globalThis.WebGL2RenderingContext;
            r && (this.webGLVersion = 2),
              e &&
                !e.stencil &&
                console.warn(
                  'Provided WebGL context does not have a stencil buffer, masks may not render correctly'
                );
            var i = r || !!t.getExtension('OES_element_index_uint');
            (this.supports.uint32Indices = i),
              i ||
                console.warn(
                  'Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly'
                );
          }),
          t
        );
      })(),
      tu = function (t) {
        (this.framebuffer = t),
          (this.stencil = null),
          (this.dirtyId = -1),
          (this.dirtyFormat = -1),
          (this.dirtySize = -1),
          (this.multisample = o.MSAA_QUALITY.NONE),
          (this.msaaBuffer = null),
          (this.blitFramebuffer = null),
          (this.mipLevel = 0);
      },
      tl = new c.Rectangle(),
      tc = (function () {
        function t(t) {
          (this.renderer = t),
            (this.managedFramebuffers = []),
            (this.unknownFramebuffer = new N(10, 10)),
            (this.msaaSamples = null);
        }
        return (
          (t.prototype.contextChange = function () {
            this.disposeAll(!0);
            var t = (this.gl = this.renderer.gl);
            if (
              ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
              (this.current = this.unknownFramebuffer),
              (this.viewport = new c.Rectangle()),
              (this.hasMRT = !0),
              (this.writeDepthTexture = !0),
              1 === this.renderer.context.webGLVersion)
            ) {
              var e = this.renderer.context.extensions.drawBuffers,
                r = this.renderer.context.extensions.depthTexture;
              n.settings.PREFER_ENV === o.ENV.WEBGL_LEGACY &&
                ((e = null), (r = null)),
                e
                  ? (t.drawBuffers = function (t) {
                      return e.drawBuffersWEBGL(t);
                    })
                  : ((this.hasMRT = !1), (t.drawBuffers = function () {})),
                r || (this.writeDepthTexture = !1);
            } else
              this.msaaSamples = t.getInternalformatParameter(
                t.RENDERBUFFER,
                t.RGBA8,
                t.SAMPLES
              );
          }),
          (t.prototype.bind = function (t, e, r) {
            void 0 === r && (r = 0);
            var i = this.gl;
            if (t) {
              var n =
                t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
              this.current !== t &&
                ((this.current = t),
                i.bindFramebuffer(i.FRAMEBUFFER, n.framebuffer)),
                n.mipLevel !== r &&
                  (t.dirtyId++, t.dirtyFormat++, (n.mipLevel = r)),
                n.dirtyId !== t.dirtyId &&
                  ((n.dirtyId = t.dirtyId),
                  n.dirtyFormat !== t.dirtyFormat
                    ? ((n.dirtyFormat = t.dirtyFormat),
                      (n.dirtySize = t.dirtySize),
                      this.updateFramebuffer(t, r))
                    : n.dirtySize !== t.dirtySize &&
                      ((n.dirtySize = t.dirtySize), this.resizeFramebuffer(t)));
              for (var o = 0; o < t.colorTextures.length; o++) {
                var s = t.colorTextures[o];
                this.renderer.texture.unbind(s.parentTextureArray || s);
              }
              if (
                (t.depthTexture && this.renderer.texture.unbind(t.depthTexture),
                e)
              ) {
                var a = e.width >> r,
                  h = e.height >> r,
                  u = a / e.width;
                this.setViewport(e.x * u, e.y * u, a, h);
              } else {
                var a = t.width >> r,
                  h = t.height >> r;
                this.setViewport(0, 0, a, h);
              }
            } else
              this.current &&
                ((this.current = null), i.bindFramebuffer(i.FRAMEBUFFER, null)),
                e
                  ? this.setViewport(e.x, e.y, e.width, e.height)
                  : this.setViewport(
                      0,
                      0,
                      this.renderer.width,
                      this.renderer.height
                    );
          }),
          (t.prototype.setViewport = function (t, e, r, i) {
            var n = this.viewport;
            (t = Math.round(t)),
              (e = Math.round(e)),
              (r = Math.round(r)),
              (i = Math.round(i)),
              (n.width !== r || n.height !== i || n.x !== t || n.y !== e) &&
                ((n.x = t),
                (n.y = e),
                (n.width = r),
                (n.height = i),
                this.gl.viewport(t, e, r, i));
          }),
          Object.defineProperty(t.prototype, 'size', {
            get: function () {
              return this.current
                ? {
                    x: 0,
                    y: 0,
                    width: this.current.width,
                    height: this.current.height,
                  }
                : {
                    x: 0,
                    y: 0,
                    width: this.renderer.width,
                    height: this.renderer.height,
                  };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.clear = function (t, e, r, i, n) {
            void 0 === n && (n = o.BUFFER_BITS.COLOR | o.BUFFER_BITS.DEPTH);
            var s = this.gl;
            s.clearColor(t, e, r, i), s.clear(n);
          }),
          (t.prototype.initFramebuffer = function (t) {
            var e = new tu(this.gl.createFramebuffer());
            return (
              (e.multisample = this.detectSamples(t.multisample)),
              (t.glFramebuffers[this.CONTEXT_UID] = e),
              this.managedFramebuffers.push(t),
              t.disposeRunner.add(this),
              e
            );
          }),
          (t.prototype.resizeFramebuffer = function (t) {
            var e = this.gl,
              r = t.glFramebuffers[this.CONTEXT_UID];
            r.msaaBuffer &&
              (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer),
              e.renderbufferStorageMultisample(
                e.RENDERBUFFER,
                r.multisample,
                e.RGBA8,
                t.width,
                t.height
              )),
              r.stencil &&
                (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil),
                r.msaaBuffer
                  ? e.renderbufferStorageMultisample(
                      e.RENDERBUFFER,
                      r.multisample,
                      e.DEPTH24_STENCIL8,
                      t.width,
                      t.height
                    )
                  : e.renderbufferStorage(
                      e.RENDERBUFFER,
                      e.DEPTH_STENCIL,
                      t.width,
                      t.height
                    ));
            var i = t.colorTextures,
              n = i.length;
            e.drawBuffers || (n = Math.min(n, 1));
            for (var o = 0; o < n; o++) {
              var s = i[o],
                a = s.parentTextureArray || s;
              this.renderer.texture.bind(a, 0);
            }
            t.depthTexture &&
              this.writeDepthTexture &&
              this.renderer.texture.bind(t.depthTexture, 0);
          }),
          (t.prototype.updateFramebuffer = function (t, e) {
            var r = this.gl,
              i = t.glFramebuffers[this.CONTEXT_UID],
              n = t.colorTextures,
              o = n.length;
            r.drawBuffers || (o = Math.min(o, 1)),
              i.multisample > 1 && this.canMultisampleFramebuffer(t)
                ? ((i.msaaBuffer = i.msaaBuffer || r.createRenderbuffer()),
                  r.bindRenderbuffer(r.RENDERBUFFER, i.msaaBuffer),
                  r.renderbufferStorageMultisample(
                    r.RENDERBUFFER,
                    i.multisample,
                    r.RGBA8,
                    t.width,
                    t.height
                  ),
                  r.framebufferRenderbuffer(
                    r.FRAMEBUFFER,
                    r.COLOR_ATTACHMENT0,
                    r.RENDERBUFFER,
                    i.msaaBuffer
                  ))
                : i.msaaBuffer &&
                  (r.deleteRenderbuffer(i.msaaBuffer),
                  (i.msaaBuffer = null),
                  i.blitFramebuffer &&
                    (i.blitFramebuffer.dispose(), (i.blitFramebuffer = null)));
            for (var s = [], a = 0; a < o; a++) {
              var h = n[a],
                u = h.parentTextureArray || h;
              this.renderer.texture.bind(u, 0),
                (0 === a && i.msaaBuffer) ||
                  (r.framebufferTexture2D(
                    r.FRAMEBUFFER,
                    r.COLOR_ATTACHMENT0 + a,
                    h.target,
                    u._glTextures[this.CONTEXT_UID].texture,
                    e
                  ),
                  s.push(r.COLOR_ATTACHMENT0 + a));
            }
            if (
              (s.length > 1 && r.drawBuffers(s),
              t.depthTexture && this.writeDepthTexture)
            ) {
              var l = t.depthTexture;
              this.renderer.texture.bind(l, 0),
                r.framebufferTexture2D(
                  r.FRAMEBUFFER,
                  r.DEPTH_ATTACHMENT,
                  r.TEXTURE_2D,
                  l._glTextures[this.CONTEXT_UID].texture,
                  e
                );
            }
            (t.stencil || t.depth) &&
            !(t.depthTexture && this.writeDepthTexture)
              ? ((i.stencil = i.stencil || r.createRenderbuffer()),
                r.bindRenderbuffer(r.RENDERBUFFER, i.stencil),
                i.msaaBuffer
                  ? r.renderbufferStorageMultisample(
                      r.RENDERBUFFER,
                      i.multisample,
                      r.DEPTH24_STENCIL8,
                      t.width,
                      t.height
                    )
                  : r.renderbufferStorage(
                      r.RENDERBUFFER,
                      r.DEPTH_STENCIL,
                      t.width,
                      t.height
                    ),
                r.framebufferRenderbuffer(
                  r.FRAMEBUFFER,
                  r.DEPTH_STENCIL_ATTACHMENT,
                  r.RENDERBUFFER,
                  i.stencil
                ))
              : i.stencil &&
                (r.deleteRenderbuffer(i.stencil), (i.stencil = null));
          }),
          (t.prototype.canMultisampleFramebuffer = function (t) {
            return (
              1 !== this.renderer.context.webGLVersion &&
              t.colorTextures.length <= 1 &&
              !t.depthTexture
            );
          }),
          (t.prototype.detectSamples = function (t) {
            var e = this.msaaSamples,
              r = o.MSAA_QUALITY.NONE;
            if (t <= 1 || null === e) return r;
            for (var i = 0; i < e.length; i++)
              if (e[i] <= t) {
                r = e[i];
                break;
              }
            return 1 === r && (r = o.MSAA_QUALITY.NONE), r;
          }),
          (t.prototype.blit = function (t, e, r) {
            var i = this.current,
              n = this.renderer,
              o = this.gl,
              s = this.CONTEXT_UID;
            if (2 === n.context.webGLVersion && i) {
              var a = i.glFramebuffers[s];
              if (a) {
                if (!t) {
                  if (!a.msaaBuffer) return;
                  var h = i.colorTextures[0];
                  if (!h) return;
                  a.blitFramebuffer ||
                    ((a.blitFramebuffer = new N(i.width, i.height)),
                    a.blitFramebuffer.addColorTexture(0, h)),
                    (t = a.blitFramebuffer).colorTextures[0] !== h &&
                      ((t.colorTextures[0] = h), t.dirtyId++, t.dirtyFormat++),
                    (t.width !== i.width || t.height !== i.height) &&
                      ((t.width = i.width),
                      (t.height = i.height),
                      t.dirtyId++,
                      t.dirtySize++);
                }
                e || (((e = tl).width = i.width), (e.height = i.height)),
                  r || (r = e);
                var u = e.width === r.width && e.height === r.height;
                this.bind(t),
                  o.bindFramebuffer(o.READ_FRAMEBUFFER, a.framebuffer),
                  o.blitFramebuffer(
                    e.left,
                    e.top,
                    e.right,
                    e.bottom,
                    r.left,
                    r.top,
                    r.right,
                    r.bottom,
                    o.COLOR_BUFFER_BIT,
                    u ? o.NEAREST : o.LINEAR
                  );
              }
            }
          }),
          (t.prototype.disposeFramebuffer = function (t, e) {
            var r = t.glFramebuffers[this.CONTEXT_UID],
              i = this.gl;
            if (r) {
              delete t.glFramebuffers[this.CONTEXT_UID];
              var n = this.managedFramebuffers.indexOf(t);
              n >= 0 && this.managedFramebuffers.splice(n, 1),
                t.disposeRunner.remove(this),
                !e &&
                  (i.deleteFramebuffer(r.framebuffer),
                  r.msaaBuffer && i.deleteRenderbuffer(r.msaaBuffer),
                  r.stencil && i.deleteRenderbuffer(r.stencil)),
                r.blitFramebuffer && r.blitFramebuffer.dispose();
            }
          }),
          (t.prototype.disposeAll = function (t) {
            var e = this.managedFramebuffers;
            this.managedFramebuffers = [];
            for (var r = 0; r < e.length; r++) this.disposeFramebuffer(e[r], t);
          }),
          (t.prototype.forceStencil = function () {
            var t = this.current;
            if (t) {
              var e = t.glFramebuffers[this.CONTEXT_UID];
              if (e && !e.stencil) {
                t.stencil = !0;
                var r = t.width,
                  i = t.height,
                  n = this.gl,
                  o = n.createRenderbuffer();
                n.bindRenderbuffer(n.RENDERBUFFER, o),
                  e.msaaBuffer
                    ? n.renderbufferStorageMultisample(
                        n.RENDERBUFFER,
                        e.multisample,
                        n.DEPTH24_STENCIL8,
                        r,
                        i
                      )
                    : n.renderbufferStorage(
                        n.RENDERBUFFER,
                        n.DEPTH_STENCIL,
                        r,
                        i
                      ),
                  (e.stencil = o),
                  n.framebufferRenderbuffer(
                    n.FRAMEBUFFER,
                    n.DEPTH_STENCIL_ATTACHMENT,
                    n.RENDERBUFFER,
                    o
                  );
              }
            }
          }),
          (t.prototype.reset = function () {
            (this.current = this.unknownFramebuffer),
              (this.viewport = new c.Rectangle());
          }),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })(),
      tp = { 5126: 4, 5123: 2, 5121: 1 },
      tf = (function () {
        function t(t) {
          (this.renderer = t),
            (this._activeGeometry = null),
            (this._activeVao = null),
            (this.hasVao = !0),
            (this.hasInstance = !0),
            (this.canUseUInt32ElementIndex = !1),
            (this.managedGeometries = {});
        }
        return (
          (t.prototype.contextChange = function () {
            this.disposeAll(!0);
            var t = (this.gl = this.renderer.gl),
              e = this.renderer.context;
            if (
              ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
              2 !== e.webGLVersion)
            ) {
              var r = this.renderer.context.extensions.vertexArrayObject;
              n.settings.PREFER_ENV === o.ENV.WEBGL_LEGACY && (r = null),
                r
                  ? ((t.createVertexArray = function () {
                      return r.createVertexArrayOES();
                    }),
                    (t.bindVertexArray = function (t) {
                      return r.bindVertexArrayOES(t);
                    }),
                    (t.deleteVertexArray = function (t) {
                      return r.deleteVertexArrayOES(t);
                    }))
                  : ((this.hasVao = !1),
                    (t.createVertexArray = function () {
                      return null;
                    }),
                    (t.bindVertexArray = function () {
                      return null;
                    }),
                    (t.deleteVertexArray = function () {
                      return null;
                    }));
            }
            if (2 !== e.webGLVersion) {
              var i = t.getExtension('ANGLE_instanced_arrays');
              i
                ? ((t.vertexAttribDivisor = function (t, e) {
                    return i.vertexAttribDivisorANGLE(t, e);
                  }),
                  (t.drawElementsInstanced = function (t, e, r, n, o) {
                    return i.drawElementsInstancedANGLE(t, e, r, n, o);
                  }),
                  (t.drawArraysInstanced = function (t, e, r, n) {
                    return i.drawArraysInstancedANGLE(t, e, r, n);
                  }))
                : (this.hasInstance = !1);
            }
            this.canUseUInt32ElementIndex =
              2 === e.webGLVersion || !!e.extensions.uint32ElementIndex;
          }),
          (t.prototype.bind = function (t, e) {
            e = e || this.renderer.shader.shader;
            var r = this.gl,
              i = t.glVertexArrayObjects[this.CONTEXT_UID],
              n = !1;
            i ||
              ((this.managedGeometries[t.id] = t),
              t.disposeRunner.add(this),
              (t.glVertexArrayObjects[this.CONTEXT_UID] = i = {}),
              (n = !0));
            var o = i[e.program.id] || this.initGeometryVao(t, e, n);
            (this._activeGeometry = t),
              this._activeVao !== o &&
                ((this._activeVao = o),
                this.hasVao
                  ? r.bindVertexArray(o)
                  : this.activateVao(t, e.program)),
              this.updateBuffers();
          }),
          (t.prototype.reset = function () {
            this.unbind();
          }),
          (t.prototype.updateBuffers = function () {
            for (
              var t = this._activeGeometry, e = this.renderer.buffer, r = 0;
              r < t.buffers.length;
              r++
            ) {
              var i = t.buffers[r];
              e.update(i);
            }
          }),
          (t.prototype.checkCompatibility = function (t, e) {
            var r = t.attributes,
              i = e.attributeData;
            for (var n in i)
              if (!r[n])
                throw Error(
                  'shader and geometry incompatible, geometry missing the "' +
                    n +
                    '" attribute'
                );
          }),
          (t.prototype.getSignature = function (t, e) {
            var r = t.attributes,
              i = e.attributeData,
              n = ['g', t.id];
            for (var o in r) i[o] && n.push(o, i[o].location);
            return n.join('-');
          }),
          (t.prototype.initGeometryVao = function (t, e, r) {
            void 0 === r && (r = !0);
            var i = this.gl,
              n = this.CONTEXT_UID,
              o = this.renderer.buffer,
              s = e.program;
            s.glPrograms[n] || this.renderer.shader.generateProgram(e),
              this.checkCompatibility(t, s);
            var a = this.getSignature(t, s),
              h = t.glVertexArrayObjects[this.CONTEXT_UID],
              u = h[a];
            if (u) return (h[s.id] = u), u;
            var l = t.buffers,
              c = t.attributes,
              p = {},
              f = {};
            for (var d in l) (p[d] = 0), (f[d] = 0);
            for (var d in c)
              !c[d].size && s.attributeData[d]
                ? (c[d].size = s.attributeData[d].size)
                : c[d].size ||
                  console.warn(
                    "PIXI Geometry attribute '" +
                      d +
                      "' size cannot be determined (likely the bound shader does not have the attribute)"
                  ),
                (p[c[d].buffer] += c[d].size * tp[c[d].type]);
            for (var d in c) {
              var _ = c[d],
                y = _.size;
              void 0 === _.stride &&
                (p[_.buffer] === y * tp[_.type]
                  ? (_.stride = 0)
                  : (_.stride = p[_.buffer])),
                void 0 === _.start &&
                  ((_.start = f[_.buffer]), (f[_.buffer] += y * tp[_.type]));
            }
            (u = i.createVertexArray()), i.bindVertexArray(u);
            for (var v = 0; v < l.length; v++) {
              var m = l[v];
              o.bind(m), r && m._glBuffers[n].refCount++;
            }
            return (
              this.activateVao(t, s),
              (this._activeVao = u),
              (h[s.id] = u),
              (h[a] = u),
              u
            );
          }),
          (t.prototype.disposeGeometry = function (t, e) {
            if (this.managedGeometries[t.id]) {
              delete this.managedGeometries[t.id];
              var r,
                i = t.glVertexArrayObjects[this.CONTEXT_UID],
                n = this.gl,
                o = t.buffers,
                s =
                  null === (r = this.renderer) || void 0 === r
                    ? void 0
                    : r.buffer;
              if ((t.disposeRunner.remove(this), i)) {
                if (s)
                  for (var a = 0; a < o.length; a++) {
                    var h = o[a]._glBuffers[this.CONTEXT_UID];
                    h &&
                      (h.refCount--,
                      0 !== h.refCount || e || s.dispose(o[a], e));
                  }
                if (!e) {
                  for (var u in i)
                    if ('g' === u[0]) {
                      var l = i[u];
                      this._activeVao === l && this.unbind(),
                        n.deleteVertexArray(l);
                    }
                }
                delete t.glVertexArrayObjects[this.CONTEXT_UID];
              }
            }
          }),
          (t.prototype.disposeAll = function (t) {
            for (
              var e = Object.keys(this.managedGeometries), r = 0;
              r < e.length;
              r++
            )
              this.disposeGeometry(this.managedGeometries[e[r]], t);
          }),
          (t.prototype.activateVao = function (t, e) {
            var r = this.gl,
              i = this.CONTEXT_UID,
              n = this.renderer.buffer,
              o = t.buffers,
              s = t.attributes;
            t.indexBuffer && n.bind(t.indexBuffer);
            var a = null;
            for (var h in s) {
              var u = s[h],
                l = o[u.buffer],
                c = l._glBuffers[i];
              if (e.attributeData[h]) {
                a !== c && (n.bind(l), (a = c));
                var p = e.attributeData[h].location;
                if (
                  (r.enableVertexAttribArray(p),
                  r.vertexAttribPointer(
                    p,
                    u.size,
                    u.type || r.FLOAT,
                    u.normalized,
                    u.stride,
                    u.start
                  ),
                  u.instance)
                ) {
                  if (this.hasInstance) r.vertexAttribDivisor(p, 1);
                  else
                    throw Error(
                      'geometry error, GPU Instancing is not supported on this device'
                    );
                }
              }
            }
          }),
          (t.prototype.draw = function (t, e, r, i) {
            var n = this.gl,
              o = this._activeGeometry;
            if (o.indexBuffer) {
              var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
                a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
              2 === s || (4 === s && this.canUseUInt32ElementIndex)
                ? o.instanced
                  ? n.drawElementsInstanced(
                      t,
                      e || o.indexBuffer.data.length,
                      a,
                      (r || 0) * s,
                      i || 1
                    )
                  : n.drawElements(
                      t,
                      e || o.indexBuffer.data.length,
                      a,
                      (r || 0) * s
                    )
                : console.warn('unsupported index buffer type: uint32');
            } else
              o.instanced
                ? n.drawArraysInstanced(t, r, e || o.getSize(), i || 1)
                : n.drawArrays(t, r, e || o.getSize());
            return this;
          }),
          (t.prototype.unbind = function () {
            this.gl.bindVertexArray(null),
              (this._activeVao = null),
              (this._activeGeometry = null);
          }),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })(),
      td = (function () {
        function t(t) {
          void 0 === t && (t = null),
            (this.type = o.MASK_TYPES.NONE),
            (this.autoDetect = !0),
            (this.maskObject = t || null),
            (this.pooled = !1),
            (this.isMaskData = !0),
            (this.resolution = null),
            (this.multisample = n.settings.FILTER_MULTISAMPLE),
            (this.enabled = !0),
            (this.colorMask = 15),
            (this._filters = null),
            (this._stencilCounter = 0),
            (this._scissorCounter = 0),
            (this._scissorRect = null),
            (this._scissorRectLocal = null),
            (this._colorMask = 15),
            (this._target = null);
        }
        return (
          Object.defineProperty(t.prototype, 'filter', {
            get: function () {
              return this._filters ? this._filters[0] : null;
            },
            set: function (t) {
              t
                ? this._filters
                  ? (this._filters[0] = t)
                  : (this._filters = [t])
                : (this._filters = null);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.reset = function () {
            this.pooled &&
              ((this.maskObject = null),
              (this.type = o.MASK_TYPES.NONE),
              (this.autoDetect = !0)),
              (this._target = null),
              (this._scissorRectLocal = null);
          }),
          (t.prototype.copyCountersOrReset = function (t) {
            t
              ? ((this._stencilCounter = t._stencilCounter),
                (this._scissorCounter = t._scissorCounter),
                (this._scissorRect = t._scissorRect))
              : ((this._stencilCounter = 0),
                (this._scissorCounter = 0),
                (this._scissorRect = null));
          }),
          t
        );
      })();
    function t_(t, e, r) {
      var i = t.createShader(e);
      return t.shaderSource(i, r), t.compileShader(i), i;
    }
    function ty(t, e) {
      var r = t
          .getShaderSource(e)
          .split('\n')
          .map(function (t, e) {
            return e + ': ' + t;
          }),
        i = t.getShaderInfoLog(e),
        n = i.split('\n'),
        o = {},
        s = n
          .map(function (t) {
            return parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/, '$1'));
          })
          .filter(function (t) {
            return !!t && !o[t] && ((o[t] = !0), !0);
          }),
        a = [''];
      s.forEach(function (t) {
        (r[t - 1] = '%c' + r[t - 1] + '%c'),
          a.push(
            'background: #FF0000; color:#FFFFFF; font-size: 10px',
            'font-size: 10px'
          );
      });
      var h = r.join('\n');
      (a[0] = h),
        console.error(i),
        console.groupCollapsed('click to view full shader code'),
        console.warn.apply(console, a),
        console.groupEnd();
    }
    function tv(t) {
      for (var e = Array(t), r = 0; r < e.length; r++) e[r] = !1;
      return e;
    }
    function tm(t, e) {
      switch (t) {
        case 'float':
        case 'int':
        case 'uint':
        case 'sampler2D':
        case 'sampler2DArray':
          return 0;
        case 'vec2':
          return new Float32Array(2 * e);
        case 'vec3':
          return new Float32Array(3 * e);
        case 'vec4':
          return new Float32Array(4 * e);
        case 'ivec2':
          return new Int32Array(2 * e);
        case 'ivec3':
          return new Int32Array(3 * e);
        case 'ivec4':
          return new Int32Array(4 * e);
        case 'uvec2':
          return new Uint32Array(2 * e);
        case 'uvec3':
          return new Uint32Array(3 * e);
        case 'uvec4':
          return new Uint32Array(4 * e);
        case 'bool':
          return !1;
        case 'bvec2':
          return tv(2 * e);
        case 'bvec3':
          return tv(3 * e);
        case 'bvec4':
          return tv(4 * e);
        case 'mat2':
          return new Float32Array([1, 0, 0, 1]);
        case 'mat3':
          return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        case 'mat4':
          return new Float32Array([
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
          ]);
      }
      return null;
    }
    var tg = {},
      tb = tg;
    function tx(t, e, r) {
      if ('precision' !== t.substring(0, 9)) {
        var i = e;
        return (
          e === o.PRECISION.HIGH &&
            r !== o.PRECISION.HIGH &&
            (i = o.PRECISION.MEDIUM),
          'precision ' + i + ' float;\n' + t
        );
      }
      return r !== o.PRECISION.HIGH && 'precision highp' === t.substring(0, 15)
        ? t.replace('precision highp', 'precision mediump')
        : t;
    }
    var tT = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        uint: 1,
        uvec2: 2,
        uvec3: 3,
        uvec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1,
      },
      tE = null,
      tS = {
        FLOAT: 'float',
        FLOAT_VEC2: 'vec2',
        FLOAT_VEC3: 'vec3',
        FLOAT_VEC4: 'vec4',
        INT: 'int',
        INT_VEC2: 'ivec2',
        INT_VEC3: 'ivec3',
        INT_VEC4: 'ivec4',
        UNSIGNED_INT: 'uint',
        UNSIGNED_INT_VEC2: 'uvec2',
        UNSIGNED_INT_VEC3: 'uvec3',
        UNSIGNED_INT_VEC4: 'uvec4',
        BOOL: 'bool',
        BOOL_VEC2: 'bvec2',
        BOOL_VEC3: 'bvec3',
        BOOL_VEC4: 'bvec4',
        FLOAT_MAT2: 'mat2',
        FLOAT_MAT3: 'mat3',
        FLOAT_MAT4: 'mat4',
        SAMPLER_2D: 'sampler2D',
        INT_SAMPLER_2D: 'sampler2D',
        UNSIGNED_INT_SAMPLER_2D: 'sampler2D',
        SAMPLER_CUBE: 'samplerCube',
        INT_SAMPLER_CUBE: 'samplerCube',
        UNSIGNED_INT_SAMPLER_CUBE: 'samplerCube',
        SAMPLER_2D_ARRAY: 'sampler2DArray',
        INT_SAMPLER_2D_ARRAY: 'sampler2DArray',
        UNSIGNED_INT_SAMPLER_2D_ARRAY: 'sampler2DArray',
      };
    function tA(t, e) {
      if (!tE) {
        var r = Object.keys(tS);
        tE = {};
        for (var i = 0; i < r.length; ++i) {
          var n = r[i];
          tE[t[n]] = tS[n];
        }
      }
      return tE[e];
    }
    var tR = [
        {
          test: function (t) {
            return 'float' === t.type && 1 === t.size && !t.isArray;
          },
          code: function (t) {
            return (
              '\n            if(uv["' +
              t +
              '"] !== ud["' +
              t +
              '"].value)\n            {\n                ud["' +
              t +
              '"].value = uv["' +
              t +
              '"]\n                gl.uniform1f(ud["' +
              t +
              '"].location, uv["' +
              t +
              '"])\n            }\n            '
            );
          },
        },
        {
          test: function (t, e) {
            return (
              ('sampler2D' === t.type ||
                'samplerCube' === t.type ||
                'sampler2DArray' === t.type) &&
              1 === t.size &&
              !t.isArray &&
              (null == e || void 0 !== e.castToBaseTexture)
            );
          },
          code: function (t) {
            return (
              't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' +
              t +
              '"], t);\n\n            if(ud["' +
              t +
              '"].value !== t)\n            {\n                ud["' +
              t +
              '"].value = t;\n                gl.uniform1i(ud["' +
              t +
              '"].location, t);\n; // eslint-disable-line max-len\n            }'
            );
          },
        },
        {
          test: function (t, e) {
            return (
              'mat3' === t.type && 1 === t.size && !t.isArray && void 0 !== e.a
            );
          },
          code: function (t) {
            return (
              '\n            gl.uniformMatrix3fv(ud["' +
              t +
              '"].location, false, uv["' +
              t +
              '"].toArray(true));\n            '
            );
          },
          codeUbo: function (t) {
            return (
              '\n                var ' +
              t +
              '_matrix = uv.' +
              t +
              '.toArray(true);\n\n                data[offset] = ' +
              t +
              '_matrix[0];\n                data[offset+1] = ' +
              t +
              '_matrix[1];\n                data[offset+2] = ' +
              t +
              '_matrix[2];\n        \n                data[offset + 4] = ' +
              t +
              '_matrix[3];\n                data[offset + 5] = ' +
              t +
              '_matrix[4];\n                data[offset + 6] = ' +
              t +
              '_matrix[5];\n        \n                data[offset + 8] = ' +
              t +
              '_matrix[6];\n                data[offset + 9] = ' +
              t +
              '_matrix[7];\n                data[offset + 10] = ' +
              t +
              '_matrix[8];\n            '
            );
          },
        },
        {
          test: function (t, e) {
            return (
              'vec2' === t.type && 1 === t.size && !t.isArray && void 0 !== e.x
            );
          },
          code: function (t) {
            return (
              '\n                cv = ud["' +
              t +
              '"].value;\n                v = uv["' +
              t +
              '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' +
              t +
              '"].location, v.x, v.y);\n                }'
            );
          },
          codeUbo: function (t) {
            return (
              '\n                v = uv.' +
              t +
              ';\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            '
            );
          },
        },
        {
          test: function (t) {
            return 'vec2' === t.type && 1 === t.size && !t.isArray;
          },
          code: function (t) {
            return (
              '\n                cv = ud["' +
              t +
              '"].value;\n                v = uv["' +
              t +
              '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' +
              t +
              '"].location, v[0], v[1]);\n                }\n            '
            );
          },
        },
        {
          test: function (t, e) {
            return (
              'vec4' === t.type &&
              1 === t.size &&
              !t.isArray &&
              void 0 !== e.width
            );
          },
          code: function (t) {
            return (
              '\n                cv = ud["' +
              t +
              '"].value;\n                v = uv["' +
              t +
              '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' +
              t +
              '"].location, v.x, v.y, v.width, v.height)\n                }'
            );
          },
          codeUbo: function (t) {
            return (
              '\n                    v = uv.' +
              t +
              ';\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                '
            );
          },
        },
        {
          test: function (t) {
            return 'vec4' === t.type && 1 === t.size && !t.isArray;
          },
          code: function (t) {
            return (
              '\n                cv = ud["' +
              t +
              '"].value;\n                v = uv["' +
              t +
              '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' +
              t +
              '"].location, v[0], v[1], v[2], v[3])\n                }'
            );
          },
        },
      ],
      tO = {
        float:
          '\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }',
        vec2: '\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }',
        vec3: '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }',
        vec4: '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }',
        int: '\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }',
        ivec2:
          '\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }',
        ivec3:
          '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }',
        ivec4:
          '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }',
        uint: '\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }',
        uvec2:
          '\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }',
        uvec3:
          '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }',
        uvec4:
          '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }',
        bool: '\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }',
        bvec2:
          '\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }',
        bvec3:
          '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }',
        bvec4:
          '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }',
        mat2: 'gl.uniformMatrix2fv(location, false, v)',
        mat3: 'gl.uniformMatrix3fv(location, false, v)',
        mat4: 'gl.uniformMatrix4fv(location, false, v)',
        sampler2D:
          '\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }',
        samplerCube:
          '\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }',
        sampler2DArray:
          '\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }',
      },
      tM = {
        float: 'gl.uniform1fv(location, v)',
        vec2: 'gl.uniform2fv(location, v)',
        vec3: 'gl.uniform3fv(location, v)',
        vec4: 'gl.uniform4fv(location, v)',
        mat4: 'gl.uniformMatrix4fv(location, false, v)',
        mat3: 'gl.uniformMatrix3fv(location, false, v)',
        mat2: 'gl.uniformMatrix2fv(location, false, v)',
        int: 'gl.uniform1iv(location, v)',
        ivec2: 'gl.uniform2iv(location, v)',
        ivec3: 'gl.uniform3iv(location, v)',
        ivec4: 'gl.uniform4iv(location, v)',
        uint: 'gl.uniform1uiv(location, v)',
        uvec2: 'gl.uniform2uiv(location, v)',
        uvec3: 'gl.uniform3uiv(location, v)',
        uvec4: 'gl.uniform4uiv(location, v)',
        bool: 'gl.uniform1iv(location, v)',
        bvec2: 'gl.uniform2iv(location, v)',
        bvec3: 'gl.uniform3iv(location, v)',
        bvec4: 'gl.uniform4iv(location, v)',
        sampler2D: 'gl.uniform1iv(location, v)',
        samplerCube: 'gl.uniform1iv(location, v)',
        sampler2DArray: 'gl.uniform1iv(location, v)',
      },
      tP = 0,
      tI = {},
      tw = (function () {
        function t(e, i, s) {
          void 0 === s && (s = 'pixi-shader'),
            (this.id = tP++),
            (this.vertexSrc = e || t.defaultVertexSrc),
            (this.fragmentSrc = i || t.defaultFragmentSrc),
            (this.vertexSrc = this.vertexSrc.trim()),
            (this.fragmentSrc = this.fragmentSrc.trim()),
            '#version' !== this.vertexSrc.substring(0, 8) &&
              (tI[(s = s.replace(/\s+/g, '-'))]
                ? (tI[s]++, (s += '-' + tI[s]))
                : (tI[s] = 1),
              (this.vertexSrc =
                '#define SHADER_NAME ' + s + '\n' + this.vertexSrc),
              (this.fragmentSrc =
                '#define SHADER_NAME ' + s + '\n' + this.fragmentSrc),
              (this.vertexSrc = tx(
                this.vertexSrc,
                n.settings.PRECISION_VERTEX,
                o.PRECISION.HIGH
              )),
              (this.fragmentSrc = tx(
                this.fragmentSrc,
                n.settings.PRECISION_FRAGMENT,
                (function () {
                  if (!r) {
                    r = o.PRECISION.MEDIUM;
                    var t = (function () {
                      if (tb === tg || (tb && tb.isContextLost())) {
                        var t = (0, n.settings).ADAPTER.createCanvas(),
                          e = void 0;
                        n.settings.PREFER_ENV >= o.ENV.WEBGL2 &&
                          (e = t.getContext('webgl2', {})),
                          e ||
                            ((e =
                              t.getContext('webgl', {}) ||
                              t.getContext('experimental-webgl', {}))
                              ? e.getExtension('WEBGL_draw_buffers')
                              : (e = null)),
                          (tb = e);
                      }
                      return tb;
                    })();
                    t &&
                      t.getShaderPrecisionFormat &&
                      (r = t.getShaderPrecisionFormat(
                        t.FRAGMENT_SHADER,
                        t.HIGH_FLOAT
                      ).precision
                        ? o.PRECISION.HIGH
                        : o.PRECISION.MEDIUM);
                  }
                  return r;
                })()
              ))),
            (this.glPrograms = {}),
            (this.syncUniforms = null);
        }
        return (
          Object.defineProperty(t, 'defaultVertexSrc', {
            get: function () {
              return 'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n';
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'defaultFragmentSrc', {
            get: function () {
              return 'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}';
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.from = function (e, r, i) {
            var n = e + r,
              o = s.ProgramCache[n];
            return o || (s.ProgramCache[n] = o = new t(e, r, i)), o;
          }),
          t
        );
      })(),
      tD = (function () {
        function t(t, e) {
          (this.uniformBindCount = 0),
            (this.program = t),
            e
              ? e instanceof tt
                ? (this.uniformGroup = e)
                : (this.uniformGroup = new tt(e))
              : (this.uniformGroup = new tt({})),
            (this.disposeRunner = new u.Runner('disposeShader'));
        }
        return (
          (t.prototype.checkUniformExists = function (t, e) {
            if (e.uniforms[t]) return !0;
            for (var r in e.uniforms) {
              var i = e.uniforms[r];
              if (i.group && this.checkUniformExists(t, i)) return !0;
            }
            return !1;
          }),
          (t.prototype.destroy = function () {
            (this.uniformGroup = null),
              this.disposeRunner.emit(this),
              this.disposeRunner.destroy();
          }),
          Object.defineProperty(t.prototype, 'uniforms', {
            get: function () {
              return this.uniformGroup.uniforms;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.from = function (e, r, i) {
            return new t(tw.from(e, r), i);
          }),
          t
        );
      })(),
      tC = (function () {
        function t() {
          (this.data = 0),
            (this.blendMode = o.BLEND_MODES.NORMAL),
            (this.polygonOffset = 0),
            (this.blend = !0),
            (this.depthMask = !0);
        }
        return (
          Object.defineProperty(t.prototype, 'blend', {
            get: function () {
              return !!(1 & this.data);
            },
            set: function (t) {
              !!(1 & this.data) !== t && (this.data ^= 1);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'offsets', {
            get: function () {
              return !!(2 & this.data);
            },
            set: function (t) {
              !!(2 & this.data) !== t && (this.data ^= 2);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'culling', {
            get: function () {
              return !!(4 & this.data);
            },
            set: function (t) {
              !!(4 & this.data) !== t && (this.data ^= 4);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'depthTest', {
            get: function () {
              return !!(8 & this.data);
            },
            set: function (t) {
              !!(8 & this.data) !== t && (this.data ^= 8);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'depthMask', {
            get: function () {
              return !!(32 & this.data);
            },
            set: function (t) {
              !!(32 & this.data) !== t && (this.data ^= 32);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'clockwiseFrontFace', {
            get: function () {
              return !!(16 & this.data);
            },
            set: function (t) {
              !!(16 & this.data) !== t && (this.data ^= 16);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'blendMode', {
            get: function () {
              return this._blendMode;
            },
            set: function (t) {
              (this.blend = t !== o.BLEND_MODES.NONE), (this._blendMode = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'polygonOffset', {
            get: function () {
              return this._polygonOffset;
            },
            set: function (t) {
              (this.offsets = !!t), (this._polygonOffset = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/core:State blendMode=' +
              this.blendMode +
              ' clockwiseFrontFace=' +
              this.clockwiseFrontFace +
              ' culling=' +
              this.culling +
              ' depthMask=' +
              this.depthMask +
              ' polygonOffset=' +
              this.polygonOffset +
              ']'
            );
          }),
          (t.for2d = function () {
            var e = new t();
            return (e.depthTest = !1), (e.blend = !0), e;
          }),
          t
        );
      })(),
      tF = (function (t) {
        function e(r, i, o) {
          var s = this,
            a = tw.from(r || e.defaultVertexSrc, i || e.defaultFragmentSrc);
          return (
            ((s = t.call(this, a, o) || this).padding = 0),
            (s.resolution = n.settings.FILTER_RESOLUTION),
            (s.multisample = n.settings.FILTER_MULTISAMPLE),
            (s.enabled = !0),
            (s.autoFit = !0),
            (s.state = new tC()),
            s
          );
        }
        return (
          _(e, t),
          (e.prototype.apply = function (t, e, r, i, n) {
            t.applyFilter(this, e, r, i);
          }),
          Object.defineProperty(e.prototype, 'blendMode', {
            get: function () {
              return this.state.blendMode;
            },
            set: function (t) {
              this.state.blendMode = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'resolution', {
            get: function () {
              return this._resolution;
            },
            set: function (t) {
              this._resolution = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e, 'defaultVertexSrc', {
            get: function () {
              return 'attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n';
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e, 'defaultFragmentSrc', {
            get: function () {
              return 'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n';
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(tD),
      tN = new c.Matrix(),
      tL = (function () {
        function t(t, e) {
          (this._texture = t),
            (this.mapCoord = new c.Matrix()),
            (this.uClampFrame = new Float32Array(4)),
            (this.uClampOffset = new Float32Array(2)),
            (this._textureID = -1),
            (this._updateID = 0),
            (this.clampOffset = 0),
            (this.clampMargin = void 0 === e ? 0.5 : e),
            (this.isSimple = !1);
        }
        return (
          Object.defineProperty(t.prototype, 'texture', {
            get: function () {
              return this._texture;
            },
            set: function (t) {
              (this._texture = t), (this._textureID = -1);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.multiplyUvs = function (t, e) {
            void 0 === e && (e = t);
            for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
              var n = t[i],
                o = t[i + 1];
              (e[i] = n * r.a + o * r.c + r.tx),
                (e[i + 1] = n * r.b + o * r.d + r.ty);
            }
            return e;
          }),
          (t.prototype.update = function (t) {
            var e = this._texture;
            if (!e || !e.valid || (!t && this._textureID === e._updateID))
              return !1;
            (this._textureID = e._updateID), this._updateID++;
            var r = e._uvs;
            this.mapCoord.set(
              r.x1 - r.x0,
              r.y1 - r.y0,
              r.x3 - r.x0,
              r.y3 - r.y0,
              r.x0,
              r.y0
            );
            var i = e.orig,
              n = e.trim;
            n &&
              (tN.set(
                i.width / n.width,
                0,
                0,
                i.height / n.height,
                -n.x / n.width,
                -n.y / n.height
              ),
              this.mapCoord.append(tN));
            var o = e.baseTexture,
              s = this.uClampFrame,
              a = this.clampMargin / o.resolution,
              h = this.clampOffset;
            return (
              (s[0] = (e._frame.x + a + h) / o.width),
              (s[1] = (e._frame.y + a + h) / o.height),
              (s[2] = (e._frame.x + e._frame.width - a + h) / o.width),
              (s[3] = (e._frame.y + e._frame.height - a + h) / o.height),
              (this.uClampOffset[0] = h / o.realWidth),
              (this.uClampOffset[1] = h / o.realHeight),
              (this.isSimple =
                e._frame.width === o.width &&
                e._frame.height === o.height &&
                0 === e.rotate),
              !0
            );
          }),
          t
        );
      })(),
      tB = (function (t) {
        function e(e, r, i) {
          var n = this,
            o = null;
          return (
            'string' != typeof e &&
              void 0 === r &&
              void 0 === i &&
              ((o = e), (e = void 0), (r = void 0), (i = void 0)),
            ((n =
              t.call(
                this,
                e ||
                  'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n',
                r ||
                  'varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n',
                i
              ) || this).maskSprite = o),
            (n.maskMatrix = new c.Matrix()),
            n
          );
        }
        return (
          _(e, t),
          Object.defineProperty(e.prototype, 'maskSprite', {
            get: function () {
              return this._maskSprite;
            },
            set: function (t) {
              (this._maskSprite = t),
                this._maskSprite && (this._maskSprite.renderable = !1);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.apply = function (t, e, r, i) {
            var n = this._maskSprite,
              o = n._texture;
            o.valid &&
              (o.uvMatrix || (o.uvMatrix = new tL(o, 0)),
              o.uvMatrix.update(),
              (this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1),
              (this.uniforms.mask = o),
              (this.uniforms.otherMatrix = t
                .calculateSpriteMatrix(this.maskMatrix, n)
                .prepend(o.uvMatrix.mapCoord)),
              (this.uniforms.alpha = n.worldAlpha),
              (this.uniforms.maskClamp = o.uvMatrix.uClampFrame),
              t.applyFilter(this, e, r, i));
          }),
          e
        );
      })(tF),
      tG = (function () {
        function t(t) {
          (this.renderer = t),
            (this.enableScissor = !0),
            (this.alphaMaskPool = []),
            (this.maskDataPool = []),
            (this.maskStack = []),
            (this.alphaMaskIndex = 0);
        }
        return (
          (t.prototype.setMaskStack = function (t) {
            (this.maskStack = t),
              this.renderer.scissor.setMaskStack(t),
              this.renderer.stencil.setMaskStack(t);
          }),
          (t.prototype.push = function (t, e) {
            var r = e;
            if (!r.isMaskData) {
              var i = this.maskDataPool.pop() || new td();
              (i.pooled = !0), (i.maskObject = e), (r = i);
            }
            var n =
              0 !== this.maskStack.length
                ? this.maskStack[this.maskStack.length - 1]
                : null;
            if (
              (r.copyCountersOrReset(n),
              (r._colorMask = n ? n._colorMask : 15),
              r.autoDetect && this.detect(r),
              (r._target = t),
              r.type !== o.MASK_TYPES.SPRITE && this.maskStack.push(r),
              r.enabled)
            )
              switch (r.type) {
                case o.MASK_TYPES.SCISSOR:
                  this.renderer.scissor.push(r);
                  break;
                case o.MASK_TYPES.STENCIL:
                  this.renderer.stencil.push(r);
                  break;
                case o.MASK_TYPES.SPRITE:
                  r.copyCountersOrReset(null), this.pushSpriteMask(r);
                  break;
                case o.MASK_TYPES.COLOR:
                  this.pushColorMask(r);
              }
            r.type === o.MASK_TYPES.SPRITE && this.maskStack.push(r);
          }),
          (t.prototype.pop = function (t) {
            var e = this.maskStack.pop();
            if (e && e._target === t) {
              if (e.enabled)
                switch (e.type) {
                  case o.MASK_TYPES.SCISSOR:
                    this.renderer.scissor.pop(e);
                    break;
                  case o.MASK_TYPES.STENCIL:
                    this.renderer.stencil.pop(e.maskObject);
                    break;
                  case o.MASK_TYPES.SPRITE:
                    this.popSpriteMask(e);
                    break;
                  case o.MASK_TYPES.COLOR:
                    this.popColorMask(e);
                }
              if (
                (e.reset(),
                e.pooled && this.maskDataPool.push(e),
                0 !== this.maskStack.length)
              ) {
                var r = this.maskStack[this.maskStack.length - 1];
                r.type === o.MASK_TYPES.SPRITE &&
                  r._filters &&
                  (r._filters[0].maskSprite = r.maskObject);
              }
            }
          }),
          (t.prototype.detect = function (t) {
            var e = t.maskObject;
            e
              ? e.isSprite
                ? (t.type = o.MASK_TYPES.SPRITE)
                : this.enableScissor && this.renderer.scissor.testScissor(t)
                ? (t.type = o.MASK_TYPES.SCISSOR)
                : (t.type = o.MASK_TYPES.STENCIL)
              : (t.type = o.MASK_TYPES.COLOR);
          }),
          (t.prototype.pushSpriteMask = function (t) {
            var e,
              r,
              i,
              n,
              o = t.maskObject,
              s = t._target,
              a = t._filters;
            a ||
              (a = this.alphaMaskPool[this.alphaMaskIndex]) ||
              (a = this.alphaMaskPool[this.alphaMaskIndex] = [new tB()]);
            var h = this.renderer,
              u = h.renderTexture;
            if (u.current) {
              var l = u.current;
              (i = t.resolution || l.resolution),
                (n =
                  null !== (e = t.multisample) && void 0 !== e
                    ? e
                    : l.multisample);
            } else
              (i = t.resolution || h.resolution),
                (n =
                  null !== (r = t.multisample) && void 0 !== r
                    ? r
                    : h.multisample);
            (a[0].resolution = i),
              (a[0].multisample = n),
              (a[0].maskSprite = o);
            var c = s.filterArea;
            (s.filterArea = o.getBounds(!0)),
              h.filter.push(s, a),
              (s.filterArea = c),
              !t._filters && this.alphaMaskIndex++;
          }),
          (t.prototype.popSpriteMask = function (t) {
            this.renderer.filter.pop(),
              t._filters
                ? (t._filters[0].maskSprite = null)
                : (this.alphaMaskIndex--,
                  (this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite =
                    null));
          }),
          (t.prototype.pushColorMask = function (t) {
            var e = t._colorMask,
              r = (t._colorMask = e & t.colorMask);
            r !== e &&
              this.renderer.gl.colorMask(
                (1 & r) != 0,
                (2 & r) != 0,
                (4 & r) != 0,
                (8 & r) != 0
              );
          }),
          (t.prototype.popColorMask = function (t) {
            var e = t._colorMask,
              r =
                this.maskStack.length > 0
                  ? this.maskStack[this.maskStack.length - 1]._colorMask
                  : 15;
            r !== e &&
              this.renderer.gl.colorMask(
                (1 & r) != 0,
                (2 & r) != 0,
                (4 & r) != 0,
                (8 & r) != 0
              );
          }),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })(),
      tU = (function () {
        function t(t) {
          (this.renderer = t), (this.maskStack = []), (this.glConst = 0);
        }
        return (
          (t.prototype.getStackLength = function () {
            return this.maskStack.length;
          }),
          (t.prototype.setMaskStack = function (t) {
            var e = this.renderer.gl,
              r = this.getStackLength();
            this.maskStack = t;
            var i = this.getStackLength();
            i !== r &&
              (0 === i
                ? e.disable(this.glConst)
                : (e.enable(this.glConst), this._useCurrent()));
          }),
          (t.prototype._useCurrent = function () {}),
          (t.prototype.destroy = function () {
            (this.renderer = null), (this.maskStack = null);
          }),
          t
        );
      })(),
      tk = new c.Matrix(),
      tX = [],
      tj = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.glConst = (0,
            n.settings).ADAPTER.getWebGLRenderingContext().SCISSOR_TEST),
            r
          );
        }
        return (
          _(e, t),
          (e.prototype.getStackLength = function () {
            var t = this.maskStack[this.maskStack.length - 1];
            return t ? t._scissorCounter : 0;
          }),
          (e.prototype.calcScissorRect = function (t) {
            if (!t._scissorRectLocal) {
              var e,
                r = t._scissorRect,
                i = t.maskObject,
                n = this.renderer,
                o = n.renderTexture,
                s = i.getBounds(
                  !0,
                  null !== (e = tX.pop()) && void 0 !== e
                    ? e
                    : new c.Rectangle()
                );
              this.roundFrameToPixels(
                s,
                o.current ? o.current.resolution : n.resolution,
                o.sourceFrame,
                o.destinationFrame,
                n.projection.transform
              ),
                r && s.fit(r),
                (t._scissorRectLocal = s);
            }
          }),
          (e.isMatrixRotated = function (t) {
            if (!t) return !1;
            var e = t.a,
              r = t.b,
              i = t.c,
              n = t.d;
            return (
              (Math.abs(r) > 1e-4 || Math.abs(i) > 1e-4) &&
              (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4)
            );
          }),
          (e.prototype.testScissor = function (t) {
            var r = t.maskObject;
            if (
              !r.isFastRect ||
              !r.isFastRect() ||
              e.isMatrixRotated(r.worldTransform) ||
              e.isMatrixRotated(this.renderer.projection.transform)
            )
              return !1;
            this.calcScissorRect(t);
            var i = t._scissorRectLocal;
            return i.width > 0 && i.height > 0;
          }),
          (e.prototype.roundFrameToPixels = function (t, r, i, n, o) {
            e.isMatrixRotated(o) ||
              ((o = o ? tk.copyFrom(o) : tk.identity())
                .translate(-i.x, -i.y)
                .scale(n.width / i.width, n.height / i.height)
                .translate(n.x, n.y),
              this.renderer.filter.transformAABB(o, t),
              t.fit(n),
              (t.x = Math.round(t.x * r)),
              (t.y = Math.round(t.y * r)),
              (t.width = Math.round(t.width * r)),
              (t.height = Math.round(t.height * r)));
          }),
          (e.prototype.push = function (t) {
            t._scissorRectLocal || this.calcScissorRect(t);
            var e = this.renderer.gl;
            t._scissorRect || e.enable(e.SCISSOR_TEST),
              t._scissorCounter++,
              (t._scissorRect = t._scissorRectLocal),
              this._useCurrent();
          }),
          (e.prototype.pop = function (t) {
            var e = this.renderer.gl;
            t && tX.push(t._scissorRectLocal),
              this.getStackLength() > 0
                ? this._useCurrent()
                : e.disable(e.SCISSOR_TEST);
          }),
          (e.prototype._useCurrent = function () {
            var t,
              e = this.maskStack[this.maskStack.length - 1]._scissorRect;
            (t = this.renderer.renderTexture.current
              ? e.y
              : this.renderer.height - e.height - e.y),
              this.renderer.gl.scissor(e.x, t, e.width, e.height);
          }),
          e
        );
      })(tU),
      tH = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.glConst = (0,
            n.settings).ADAPTER.getWebGLRenderingContext().STENCIL_TEST),
            r
          );
        }
        return (
          _(e, t),
          (e.prototype.getStackLength = function () {
            var t = this.maskStack[this.maskStack.length - 1];
            return t ? t._stencilCounter : 0;
          }),
          (e.prototype.push = function (t) {
            var e = t.maskObject,
              r = this.renderer.gl,
              i = t._stencilCounter;
            0 === i &&
              (this.renderer.framebuffer.forceStencil(),
              r.clearStencil(0),
              r.clear(r.STENCIL_BUFFER_BIT),
              r.enable(r.STENCIL_TEST)),
              t._stencilCounter++;
            var n = t._colorMask;
            0 !== n && ((t._colorMask = 0), r.colorMask(!1, !1, !1, !1)),
              r.stencilFunc(r.EQUAL, i, 4294967295),
              r.stencilOp(r.KEEP, r.KEEP, r.INCR),
              (e.renderable = !0),
              e.render(this.renderer),
              this.renderer.batch.flush(),
              (e.renderable = !1),
              0 !== n &&
                ((t._colorMask = n),
                r.colorMask(
                  (1 & n) != 0,
                  (2 & n) != 0,
                  (4 & n) != 0,
                  (8 & n) != 0
                )),
              this._useCurrent();
          }),
          (e.prototype.pop = function (t) {
            var e = this.renderer.gl;
            if (0 === this.getStackLength()) e.disable(e.STENCIL_TEST);
            else {
              var r =
                  0 !== this.maskStack.length
                    ? this.maskStack[this.maskStack.length - 1]
                    : null,
                i = r ? r._colorMask : 15;
              0 !== i && ((r._colorMask = 0), e.colorMask(!1, !1, !1, !1)),
                e.stencilOp(e.KEEP, e.KEEP, e.DECR),
                (t.renderable = !0),
                t.render(this.renderer),
                this.renderer.batch.flush(),
                (t.renderable = !1),
                0 !== i &&
                  ((r._colorMask = i),
                  e.colorMask(
                    (1 & i) != 0,
                    (2 & i) != 0,
                    (4 & i) != 0,
                    (8 & i) != 0
                  )),
                this._useCurrent();
            }
          }),
          (e.prototype._useCurrent = function () {
            var t = this.renderer.gl;
            t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295),
              t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
          }),
          e
        );
      })(tU),
      tY = (function () {
        function t(t) {
          (this.renderer = t),
            (this.destinationFrame = null),
            (this.sourceFrame = null),
            (this.defaultFrame = null),
            (this.projectionMatrix = new c.Matrix()),
            (this.transform = null);
        }
        return (
          (t.prototype.update = function (t, e, r, i) {
            (this.destinationFrame =
              t || this.destinationFrame || this.defaultFrame),
              (this.sourceFrame = e || this.sourceFrame || t),
              this.calculateProjection(
                this.destinationFrame,
                this.sourceFrame,
                r,
                i
              ),
              this.transform && this.projectionMatrix.append(this.transform);
            var n = this.renderer;
            (n.globalUniforms.uniforms.projectionMatrix =
              this.projectionMatrix),
              n.globalUniforms.update(),
              n.shader.shader &&
                n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
          }),
          (t.prototype.calculateProjection = function (t, e, r, i) {
            var n = this.projectionMatrix,
              o = i ? -1 : 1;
            n.identity(),
              (n.a = (1 / e.width) * 2),
              (n.d = o * ((1 / e.height) * 2)),
              (n.tx = -1 - e.x * n.a),
              (n.ty = -o - e.y * n.d);
          }),
          (t.prototype.setTransform = function (t) {}),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })(),
      tV = new c.Rectangle(),
      tz = new c.Rectangle(),
      tW = (function () {
        function t(t) {
          (this.renderer = t),
            (this.clearColor = t._backgroundColorRgba),
            (this.defaultMaskStack = []),
            (this.current = null),
            (this.sourceFrame = new c.Rectangle()),
            (this.destinationFrame = new c.Rectangle()),
            (this.viewportFrame = new c.Rectangle());
        }
        return (
          (t.prototype.bind = function (t, e, r) {
            void 0 === t && (t = null);
            var i,
              n,
              o,
              s = this.renderer;
            (this.current = t),
              t
                ? ((o = (i = t.baseTexture).resolution),
                  e ||
                    ((tV.width = t.frame.width),
                    (tV.height = t.frame.height),
                    (e = tV)),
                  r ||
                    ((tz.x = t.frame.x),
                    (tz.y = t.frame.y),
                    (tz.width = e.width),
                    (tz.height = e.height),
                    (r = tz)),
                  (n = i.framebuffer))
                : ((o = s.resolution),
                  e ||
                    ((tV.width = s.screen.width),
                    (tV.height = s.screen.height),
                    (e = tV)),
                  r || (((r = tV).width = e.width), (r.height = e.height)));
            var a = this.viewportFrame;
            (a.x = r.x * o),
              (a.y = r.y * o),
              (a.width = r.width * o),
              (a.height = r.height * o),
              t || (a.y = s.view.height - (a.y + a.height)),
              a.ceil(),
              this.renderer.framebuffer.bind(n, a),
              this.renderer.projection.update(r, e, o, !n),
              t
                ? this.renderer.mask.setMaskStack(i.maskStack)
                : this.renderer.mask.setMaskStack(this.defaultMaskStack),
              this.sourceFrame.copyFrom(e),
              this.destinationFrame.copyFrom(r);
          }),
          (t.prototype.clear = function (t, e) {
            t = this.current
              ? t || this.current.baseTexture.clearColor
              : t || this.clearColor;
            var r = this.destinationFrame,
              i = this.current
                ? this.current.baseTexture
                : this.renderer.screen,
              n = r.width !== i.width || r.height !== i.height;
            if (n) {
              var o = this.viewportFrame,
                s = o.x,
                a = o.y,
                h = o.width,
                u = o.height;
              (s = Math.round(s)),
                (a = Math.round(a)),
                (h = Math.round(h)),
                (u = Math.round(u)),
                this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
                this.renderer.gl.scissor(s, a, h, u);
            }
            this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e),
              n && this.renderer.scissor.pop();
          }),
          (t.prototype.resize = function () {
            this.bind(null);
          }),
          (t.prototype.reset = function () {
            this.bind(null);
          }),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })();
    function tq(t, e, r, i, n) {
      r.buffer.update(n);
    }
    var tK = {
        float: '\n        data[offset] = v;\n    ',
        vec2: '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ',
        vec3: '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ',
        vec4: '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ',
        mat2: '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ',
        mat3: '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ',
        mat4: '\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    ',
      },
      tZ = {
        float: 4,
        vec2: 8,
        vec3: 12,
        vec4: 16,
        int: 4,
        ivec2: 8,
        ivec3: 12,
        ivec4: 16,
        uint: 4,
        uvec2: 8,
        uvec3: 12,
        uvec4: 16,
        bool: 4,
        bvec2: 8,
        bvec3: 12,
        bvec4: 16,
        mat2: 32,
        mat3: 48,
        mat4: 64,
      },
      tQ = (function () {
        function t(t, e) {
          (this.program = t),
            (this.uniformData = e),
            (this.uniformGroups = {}),
            (this.uniformDirtyGroups = {}),
            (this.uniformBufferBindings = {});
        }
        return (
          (t.prototype.destroy = function () {
            (this.uniformData = null),
              (this.uniformGroups = null),
              (this.uniformDirtyGroups = null),
              (this.uniformBufferBindings = null),
              (this.program = null);
          }),
          t
        );
      })(),
      tJ = 0,
      t$ = { textureCount: 0, uboCount: 0 },
      t0 = (function () {
        function t(t) {
          (this.destroyed = !1),
            (this.renderer = t),
            this.systemCheck(),
            (this.gl = null),
            (this.shader = null),
            (this.program = null),
            (this.cache = {}),
            (this._uboCache = {}),
            (this.id = tJ++);
        }
        return (
          (t.prototype.systemCheck = function () {
            if (
              !(function () {
                if ('boolean' == typeof i) return i;
                try {
                  var t = Function(
                    'param1',
                    'param2',
                    'param3',
                    'return param1[param2] === param3;'
                  );
                  i = !0 === t({ a: 'b' }, 'a', 'b');
                } catch (t) {
                  i = !1;
                }
                return i;
              })()
            )
              throw Error(
                'Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.'
              );
          }),
          (t.prototype.contextChange = function (t) {
            (this.gl = t), this.reset();
          }),
          (t.prototype.bind = function (t, e) {
            t.disposeRunner.add(this),
              (t.uniforms.globals = this.renderer.globalUniforms);
            var r = t.program,
              i =
                r.glPrograms[this.renderer.CONTEXT_UID] ||
                this.generateProgram(t);
            return (
              (this.shader = t),
              this.program !== r &&
                ((this.program = r), this.gl.useProgram(i.program)),
              e ||
                ((t$.textureCount = 0),
                (t$.uboCount = 0),
                this.syncUniformGroup(t.uniformGroup, t$)),
              i
            );
          }),
          (t.prototype.setUniforms = function (t) {
            var e = this.shader.program,
              r = e.glPrograms[this.renderer.CONTEXT_UID];
            e.syncUniforms(r.uniformData, t, this.renderer);
          }),
          (t.prototype.syncUniformGroup = function (t, e) {
            var r = this.getGlProgram();
            (t.static && t.dirtyId === r.uniformDirtyGroups[t.id]) ||
              ((r.uniformDirtyGroups[t.id] = t.dirtyId),
              this.syncUniforms(t, r, e));
          }),
          (t.prototype.syncUniforms = function (t, e, r) {
            (
              t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t)
            )(e.uniformData, t.uniforms, this.renderer, r);
          }),
          (t.prototype.createSyncGroups = function (t) {
            var e = this.getSignature(t, this.shader.program.uniformData, 'u');
            return (
              this.cache[e] ||
                (this.cache[e] = (function (t, e) {
                  var r,
                    i = [
                      '\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    ',
                    ];
                  for (var n in t.uniforms) {
                    var o = e[n];
                    if (!o) {
                      (null === (r = t.uniforms[n]) || void 0 === r
                        ? void 0
                        : r.group) &&
                        (t.uniforms[n].ubo
                          ? i.push(
                              '\n                        renderer.shader.syncUniformBufferGroup(uv.' +
                                n +
                                ", '" +
                                n +
                                "');\n                    "
                            )
                          : i.push(
                              '\n                        renderer.shader.syncUniformGroup(uv.' +
                                n +
                                ', syncData);\n                    '
                            ));
                      continue;
                    }
                    for (
                      var s = t.uniforms[n], a = !1, h = 0;
                      h < tR.length;
                      h++
                    )
                      if (tR[h].test(o, s)) {
                        i.push(tR[h].code(n, s)), (a = !0);
                        break;
                      }
                    if (!a) {
                      var u = (1 !== o.size || o.isArray ? tM : tO)[
                        o.type
                      ].replace('location', 'ud["' + n + '"].location');
                      i.push(
                        '\n            cu = ud["' +
                          n +
                          '"];\n            cv = cu.value;\n            v = uv["' +
                          n +
                          '"];\n            ' +
                          u +
                          ';'
                      );
                    }
                  }
                  return Function(
                    'ud',
                    'uv',
                    'renderer',
                    'syncData',
                    i.join('\n')
                  );
                })(t, this.shader.program.uniformData)),
              (t.syncUniforms[this.shader.program.id] = this.cache[e]),
              t.syncUniforms[this.shader.program.id]
            );
          }),
          (t.prototype.syncUniformBufferGroup = function (t, e) {
            var r = this.getGlProgram();
            if (!t.static || 0 !== t.dirtyId || !r.uniformGroups[t.id]) {
              t.dirtyId = 0;
              var i =
                r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
              t.buffer.update(),
                i(r.uniformData, t.uniforms, this.renderer, t$, t.buffer);
            }
            this.renderer.buffer.bindBufferBase(
              t.buffer,
              r.uniformBufferBindings[e]
            );
          }),
          (t.prototype.createSyncBufferGroup = function (t, e, r) {
            var i = this.renderer.gl;
            this.renderer.buffer.bind(t.buffer);
            var n = this.gl.getUniformBlockIndex(e.program, r);
            (e.uniformBufferBindings[r] = this.shader.uniformBindCount),
              i.uniformBlockBinding(e.program, n, this.shader.uniformBindCount),
              this.shader.uniformBindCount++;
            var o = this.getSignature(
                t,
                this.shader.program.uniformData,
                'ubo'
              ),
              s = this._uboCache[o];
            if (
              (s ||
                (s = this._uboCache[o] =
                  (function (t, e) {
                    if (!t.autoManage) return { size: 0, syncFunc: tq };
                    for (
                      var r = (function (t) {
                          for (
                            var e = t.map(function (t) {
                                return {
                                  data: t,
                                  offset: 0,
                                  dataLen: 0,
                                  dirty: 0,
                                };
                              }),
                              r = 0,
                              i = 0,
                              n = 0,
                              o = 0;
                            o < e.length;
                            o++
                          ) {
                            var s = e[o];
                            if (
                              ((r = tZ[s.data.type]),
                              s.data.size > 1 &&
                                (r = Math.max(r, 16) * s.data.size),
                              (s.dataLen = r),
                              i % r != 0 && i < 16)
                            ) {
                              var a = (i % r) % 16;
                              (i += a), (n += a);
                            }
                            i + r > 16
                              ? ((n = 16 * Math.ceil(n / 16)),
                                (s.offset = n),
                                (n += r),
                                (i = r))
                              : ((s.offset = n), (i += r), (n += r));
                          }
                          return {
                            uboElements: e,
                            size: (n = 16 * Math.ceil(n / 16)),
                          };
                        })(
                          (function (t, e) {
                            var r = [];
                            for (var i in t) e[i] && r.push(e[i]);
                            return (
                              r.sort(function (t, e) {
                                return t.index - e.index;
                              }),
                              r
                            );
                          })(t.uniforms, e)
                        ),
                        i = r.uboElements,
                        n = r.size,
                        o = [
                          '\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    ',
                        ],
                        s = 0;
                      s < i.length;
                      s++
                    ) {
                      for (
                        var a = i[s],
                          h = t.uniforms[a.data.name],
                          u = a.data.name,
                          l = !1,
                          c = 0;
                        c < tR.length;
                        c++
                      ) {
                        var p = tR[c];
                        if (p.codeUbo && p.test(a.data, h)) {
                          o.push(
                            'offset = ' + a.offset / 4 + ';',
                            tR[c].codeUbo(a.data.name, h)
                          ),
                            (l = !0);
                          break;
                        }
                      }
                      if (!l) {
                        if (a.data.size > 1) {
                          var f = tT[a.data.type],
                            d = Math.max(tZ[a.data.type] / 16, 1),
                            _ = f / d,
                            y = (4 - (_ % 4)) % 4;
                          o.push(
                            '\n                cv = ud.' +
                              u +
                              '.value;\n                v = uv.' +
                              u +
                              ';\n                offset = ' +
                              a.offset / 4 +
                              ';\n\n                t = 0;\n\n                for(var i=0; i < ' +
                              a.data.size * d +
                              '; i++)\n                {\n                    for(var j = 0; j < ' +
                              _ +
                              '; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += ' +
                              y +
                              ';\n                }\n\n                '
                          );
                        } else {
                          var v = tK[a.data.type];
                          o.push(
                            '\n                cv = ud.' +
                              u +
                              '.value;\n                v = uv.' +
                              u +
                              ';\n                offset = ' +
                              a.offset / 4 +
                              ';\n                ' +
                              v +
                              ';\n                '
                          );
                        }
                      }
                    }
                    return (
                      o.push('\n       renderer.buffer.update(buffer);\n    '),
                      {
                        size: n,
                        syncFunc: Function(
                          'ud',
                          'uv',
                          'renderer',
                          'syncData',
                          'buffer',
                          o.join('\n')
                        ),
                      }
                    );
                  })(t, this.shader.program.uniformData)),
              t.autoManage)
            ) {
              var a = new Float32Array(s.size / 4);
              t.buffer.update(a);
            }
            return (e.uniformGroups[t.id] = s.syncFunc), e.uniformGroups[t.id];
          }),
          (t.prototype.getSignature = function (t, e, r) {
            var i = t.uniforms,
              n = [r + '-'];
            for (var o in i) n.push(o), e[o] && n.push(e[o].type);
            return n.join('-');
          }),
          (t.prototype.getGlProgram = function () {
            return this.shader
              ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID]
              : null;
          }),
          (t.prototype.generateProgram = function (t) {
            var e = this.gl,
              r = t.program,
              i = (function (t, e) {
                var r = t_(t, t.VERTEX_SHADER, e.vertexSrc),
                  i = t_(t, t.FRAGMENT_SHADER, e.fragmentSrc),
                  n = t.createProgram();
                if (
                  (t.attachShader(n, r),
                  t.attachShader(n, i),
                  t.linkProgram(n),
                  !t.getProgramParameter(n, t.LINK_STATUS) &&
                    (t.getProgramParameter(n, t.LINK_STATUS) ||
                      (t.getShaderParameter(r, t.COMPILE_STATUS) || ty(t, r),
                      t.getShaderParameter(i, t.COMPILE_STATUS) || ty(t, i),
                      console.error(
                        'PixiJS Error: Could not initialize shader.'
                      ),
                      '' !== t.getProgramInfoLog(n) &&
                        console.warn(
                          'PixiJS Warning: gl.getProgramInfoLog()',
                          t.getProgramInfoLog(n)
                        ))),
                  (e.attributeData = (function (t, e) {
                    for (
                      var r = {},
                        i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES),
                        n = 0;
                      n < i;
                      n++
                    ) {
                      var o = e.getActiveAttrib(t, n);
                      if (0 !== o.name.indexOf('gl_')) {
                        var s = tA(e, o.type),
                          a = {
                            type: s,
                            name: o.name,
                            size: tT[s],
                            location: e.getAttribLocation(t, o.name),
                          };
                        r[o.name] = a;
                      }
                    }
                    return r;
                  })(n, t)),
                  (e.uniformData = (function (t, e) {
                    for (
                      var r = {},
                        i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS),
                        n = 0;
                      n < i;
                      n++
                    ) {
                      var o = e.getActiveUniform(t, n),
                        s = o.name.replace(/\[.*?\]$/, ''),
                        a = !!o.name.match(/\[.*?\]$/),
                        h = tA(e, o.type);
                      r[s] = {
                        name: s,
                        index: n,
                        type: h,
                        size: o.size,
                        isArray: a,
                        value: tm(h, o.size),
                      };
                    }
                    return r;
                  })(n, t)),
                  !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(
                    e.vertexSrc
                  ))
                ) {
                  var o = Object.keys(e.attributeData);
                  o.sort(function (t, e) {
                    return t > e ? 1 : -1;
                  });
                  for (var s = 0; s < o.length; s++)
                    (e.attributeData[o[s]].location = s),
                      t.bindAttribLocation(n, s, o[s]);
                  t.linkProgram(n);
                }
                t.deleteShader(r), t.deleteShader(i);
                var a = {};
                for (var s in e.uniformData) {
                  var h = e.uniformData[s];
                  a[s] = {
                    location: t.getUniformLocation(n, s),
                    value: tm(h.type, h.size),
                  };
                }
                return new tQ(n, a);
              })(e, r);
            return (r.glPrograms[this.renderer.CONTEXT_UID] = i), i;
          }),
          (t.prototype.reset = function () {
            (this.program = null), (this.shader = null);
          }),
          (t.prototype.disposeShader = function (t) {
            this.shader === t && (this.shader = null);
          }),
          (t.prototype.destroy = function () {
            (this.renderer = null), (this.destroyed = !0);
          }),
          t
        );
      })(),
      t1 = (function () {
        function t() {
          (this.gl = null),
            (this.stateId = 0),
            (this.polygonOffset = 0),
            (this.blendMode = o.BLEND_MODES.NONE),
            (this._blendEq = !1),
            (this.map = []),
            (this.map[0] = this.setBlend),
            (this.map[1] = this.setOffset),
            (this.map[2] = this.setCullFace),
            (this.map[3] = this.setDepthTest),
            (this.map[4] = this.setFrontFace),
            (this.map[5] = this.setDepthMask),
            (this.checks = []),
            (this.defaultState = new tC()),
            (this.defaultState.blend = !0);
        }
        return (
          (t.prototype.contextChange = function (t) {
            var e;
            (this.gl = t),
              (this.blendModes =
                (void 0 === e && (e = []),
                (e[o.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.ADD] = [t.ONE, t.ONE]),
                (e[o.BLEND_MODES.MULTIPLY] = [
                  t.DST_COLOR,
                  t.ONE_MINUS_SRC_ALPHA,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA,
                ]),
                (e[o.BLEND_MODES.SCREEN] = [
                  t.ONE,
                  t.ONE_MINUS_SRC_COLOR,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA,
                ]),
                (e[o.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.NONE] = [0, 0]),
                (e[o.BLEND_MODES.NORMAL_NPM] = [
                  t.SRC_ALPHA,
                  t.ONE_MINUS_SRC_ALPHA,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA,
                ]),
                (e[o.BLEND_MODES.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE]),
                (e[o.BLEND_MODES.SCREEN_NPM] = [
                  t.SRC_ALPHA,
                  t.ONE_MINUS_SRC_COLOR,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA,
                ]),
                (e[o.BLEND_MODES.SRC_IN] = [t.DST_ALPHA, t.ZERO]),
                (e[o.BLEND_MODES.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO]),
                (e[o.BLEND_MODES.SRC_ATOP] = [
                  t.DST_ALPHA,
                  t.ONE_MINUS_SRC_ALPHA,
                ]),
                (e[o.BLEND_MODES.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE]),
                (e[o.BLEND_MODES.DST_IN] = [t.ZERO, t.SRC_ALPHA]),
                (e[o.BLEND_MODES.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA]),
                (e[o.BLEND_MODES.DST_ATOP] = [
                  t.ONE_MINUS_DST_ALPHA,
                  t.SRC_ALPHA,
                ]),
                (e[o.BLEND_MODES.XOR] = [
                  t.ONE_MINUS_DST_ALPHA,
                  t.ONE_MINUS_SRC_ALPHA,
                ]),
                (e[o.BLEND_MODES.SUBTRACT] = [
                  t.ONE,
                  t.ONE,
                  t.ONE,
                  t.ONE,
                  t.FUNC_REVERSE_SUBTRACT,
                  t.FUNC_ADD,
                ]),
                e)),
              this.set(this.defaultState),
              this.reset();
          }),
          (t.prototype.set = function (t) {
            if (((t = t || this.defaultState), this.stateId !== t.data)) {
              for (var e = this.stateId ^ t.data, r = 0; e; )
                1 & e && this.map[r].call(this, !!(t.data & (1 << r))),
                  (e >>= 1),
                  r++;
              this.stateId = t.data;
            }
            for (var r = 0; r < this.checks.length; r++)
              this.checks[r](this, t);
          }),
          (t.prototype.forceState = function (t) {
            t = t || this.defaultState;
            for (var e = 0; e < this.map.length; e++)
              this.map[e].call(this, !!(t.data & (1 << e)));
            for (var e = 0; e < this.checks.length; e++)
              this.checks[e](this, t);
            this.stateId = t.data;
          }),
          (t.prototype.setBlend = function (e) {
            this.updateCheck(t.checkBlendMode, e),
              this.gl[e ? 'enable' : 'disable'](this.gl.BLEND);
          }),
          (t.prototype.setOffset = function (e) {
            this.updateCheck(t.checkPolygonOffset, e),
              this.gl[e ? 'enable' : 'disable'](this.gl.POLYGON_OFFSET_FILL);
          }),
          (t.prototype.setDepthTest = function (t) {
            this.gl[t ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
          }),
          (t.prototype.setDepthMask = function (t) {
            this.gl.depthMask(t);
          }),
          (t.prototype.setCullFace = function (t) {
            this.gl[t ? 'enable' : 'disable'](this.gl.CULL_FACE);
          }),
          (t.prototype.setFrontFace = function (t) {
            this.gl.frontFace(this.gl[t ? 'CW' : 'CCW']);
          }),
          (t.prototype.setBlendMode = function (t) {
            if (t !== this.blendMode) {
              this.blendMode = t;
              var e = this.blendModes[t],
                r = this.gl;
              2 === e.length
                ? r.blendFunc(e[0], e[1])
                : r.blendFuncSeparate(e[0], e[1], e[2], e[3]),
                6 === e.length
                  ? ((this._blendEq = !0), r.blendEquationSeparate(e[4], e[5]))
                  : this._blendEq &&
                    ((this._blendEq = !1),
                    r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
            }
          }),
          (t.prototype.setPolygonOffset = function (t, e) {
            this.gl.polygonOffset(t, e);
          }),
          (t.prototype.reset = function () {
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
              this.forceState(this.defaultState),
              (this._blendEq = !0),
              (this.blendMode = -1),
              this.setBlendMode(0);
          }),
          (t.prototype.updateCheck = function (t, e) {
            var r = this.checks.indexOf(t);
            e && -1 === r
              ? this.checks.push(t)
              : e || -1 === r || this.checks.splice(r, 1);
          }),
          (t.checkBlendMode = function (t, e) {
            t.setBlendMode(e.blendMode);
          }),
          (t.checkPolygonOffset = function (t, e) {
            t.setPolygonOffset(1, e.polygonOffset);
          }),
          (t.prototype.destroy = function () {
            this.gl = null;
          }),
          t
        );
      })(),
      t2 = (function () {
        function t(t) {
          (this.renderer = t),
            (this.count = 0),
            (this.checkCount = 0),
            (this.maxIdle = n.settings.GC_MAX_IDLE),
            (this.checkCountMax = n.settings.GC_MAX_CHECK_COUNT),
            (this.mode = n.settings.GC_MODE);
        }
        return (
          (t.prototype.postrender = function () {
            this.renderer.renderingToScreen &&
              (this.count++,
              this.mode !== o.GC_MODES.MANUAL &&
                (this.checkCount++,
                this.checkCount > this.checkCountMax &&
                  ((this.checkCount = 0), this.run())));
          }),
          (t.prototype.run = function () {
            for (
              var t = this.renderer.texture,
                e = t.managedTextures,
                r = !1,
                i = 0;
              i < e.length;
              i++
            ) {
              var n = e[i];
              !n.framebuffer &&
                this.count - n.touched > this.maxIdle &&
                (t.destroyTexture(n, !0), (e[i] = null), (r = !0));
            }
            if (r) {
              for (var o = 0, i = 0; i < e.length; i++)
                null !== e[i] && (e[o++] = e[i]);
              e.length = o;
            }
          }),
          (t.prototype.unload = function (t) {
            var e = this.renderer.texture,
              r = t._texture;
            r && !r.framebuffer && e.destroyTexture(r);
            for (var i = t.children.length - 1; i >= 0; i--)
              this.unload(t.children[i]);
          }),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })(),
      t3 = function (t) {
        (this.texture = t),
          (this.width = -1),
          (this.height = -1),
          (this.dirtyId = -1),
          (this.dirtyStyleId = -1),
          (this.mipmap = !1),
          (this.wrapMode = 33071),
          (this.type = o.TYPES.UNSIGNED_BYTE),
          (this.internalFormat = o.FORMATS.RGBA),
          (this.samplerType = 0);
      },
      t4 = (function () {
        function t(t) {
          (this.renderer = t),
            (this.boundTextures = []),
            (this.currentLocation = -1),
            (this.managedTextures = []),
            (this._unknownBoundTextures = !1),
            (this.unknownTexture = new b()),
            (this.hasIntegerTextures = !1);
        }
        return (
          (t.prototype.contextChange = function () {
            var t,
              e,
              r,
              i,
              n,
              s,
              a,
              h,
              u,
              l,
              c,
              p,
              f,
              d,
              _,
              y,
              v,
              m,
              g,
              b,
              x,
              T,
              E,
              S = (this.gl = this.renderer.gl);
            (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
              (this.webGLVersion = this.renderer.context.webGLVersion),
              (this.internalFormats =
                ('WebGL2RenderingContext' in globalThis &&
                S instanceof globalThis.WebGL2RenderingContext
                  ? (((t = {})[o.TYPES.UNSIGNED_BYTE] =
                      (((e = {})[o.FORMATS.RGBA] = S.RGBA8),
                      (e[o.FORMATS.RGB] = S.RGB8),
                      (e[o.FORMATS.RG] = S.RG8),
                      (e[o.FORMATS.RED] = S.R8),
                      (e[o.FORMATS.RGBA_INTEGER] = S.RGBA8UI),
                      (e[o.FORMATS.RGB_INTEGER] = S.RGB8UI),
                      (e[o.FORMATS.RG_INTEGER] = S.RG8UI),
                      (e[o.FORMATS.RED_INTEGER] = S.R8UI),
                      (e[o.FORMATS.ALPHA] = S.ALPHA),
                      (e[o.FORMATS.LUMINANCE] = S.LUMINANCE),
                      (e[o.FORMATS.LUMINANCE_ALPHA] = S.LUMINANCE_ALPHA),
                      e)),
                    (t[o.TYPES.BYTE] =
                      (((r = {})[o.FORMATS.RGBA] = S.RGBA8_SNORM),
                      (r[o.FORMATS.RGB] = S.RGB8_SNORM),
                      (r[o.FORMATS.RG] = S.RG8_SNORM),
                      (r[o.FORMATS.RED] = S.R8_SNORM),
                      (r[o.FORMATS.RGBA_INTEGER] = S.RGBA8I),
                      (r[o.FORMATS.RGB_INTEGER] = S.RGB8I),
                      (r[o.FORMATS.RG_INTEGER] = S.RG8I),
                      (r[o.FORMATS.RED_INTEGER] = S.R8I),
                      r)),
                    (t[o.TYPES.UNSIGNED_SHORT] =
                      (((i = {})[o.FORMATS.RGBA_INTEGER] = S.RGBA16UI),
                      (i[o.FORMATS.RGB_INTEGER] = S.RGB16UI),
                      (i[o.FORMATS.RG_INTEGER] = S.RG16UI),
                      (i[o.FORMATS.RED_INTEGER] = S.R16UI),
                      (i[o.FORMATS.DEPTH_COMPONENT] = S.DEPTH_COMPONENT16),
                      i)),
                    (t[o.TYPES.SHORT] =
                      (((n = {})[o.FORMATS.RGBA_INTEGER] = S.RGBA16I),
                      (n[o.FORMATS.RGB_INTEGER] = S.RGB16I),
                      (n[o.FORMATS.RG_INTEGER] = S.RG16I),
                      (n[o.FORMATS.RED_INTEGER] = S.R16I),
                      n)),
                    (t[o.TYPES.UNSIGNED_INT] =
                      (((s = {})[o.FORMATS.RGBA_INTEGER] = S.RGBA32UI),
                      (s[o.FORMATS.RGB_INTEGER] = S.RGB32UI),
                      (s[o.FORMATS.RG_INTEGER] = S.RG32UI),
                      (s[o.FORMATS.RED_INTEGER] = S.R32UI),
                      (s[o.FORMATS.DEPTH_COMPONENT] = S.DEPTH_COMPONENT24),
                      s)),
                    (t[o.TYPES.INT] =
                      (((a = {})[o.FORMATS.RGBA_INTEGER] = S.RGBA32I),
                      (a[o.FORMATS.RGB_INTEGER] = S.RGB32I),
                      (a[o.FORMATS.RG_INTEGER] = S.RG32I),
                      (a[o.FORMATS.RED_INTEGER] = S.R32I),
                      a)),
                    (t[o.TYPES.FLOAT] =
                      (((h = {})[o.FORMATS.RGBA] = S.RGBA32F),
                      (h[o.FORMATS.RGB] = S.RGB32F),
                      (h[o.FORMATS.RG] = S.RG32F),
                      (h[o.FORMATS.RED] = S.R32F),
                      (h[o.FORMATS.DEPTH_COMPONENT] = S.DEPTH_COMPONENT32F),
                      h)),
                    (t[o.TYPES.HALF_FLOAT] =
                      (((u = {})[o.FORMATS.RGBA] = S.RGBA16F),
                      (u[o.FORMATS.RGB] = S.RGB16F),
                      (u[o.FORMATS.RG] = S.RG16F),
                      (u[o.FORMATS.RED] = S.R16F),
                      u)),
                    (t[o.TYPES.UNSIGNED_SHORT_5_6_5] =
                      (((l = {})[o.FORMATS.RGB] = S.RGB565), l)),
                    (t[o.TYPES.UNSIGNED_SHORT_4_4_4_4] =
                      (((c = {})[o.FORMATS.RGBA] = S.RGBA4), c)),
                    (t[o.TYPES.UNSIGNED_SHORT_5_5_5_1] =
                      (((p = {})[o.FORMATS.RGBA] = S.RGB5_A1), p)),
                    (t[o.TYPES.UNSIGNED_INT_2_10_10_10_REV] =
                      (((f = {})[o.FORMATS.RGBA] = S.RGB10_A2),
                      (f[o.FORMATS.RGBA_INTEGER] = S.RGB10_A2UI),
                      f)),
                    (t[o.TYPES.UNSIGNED_INT_10F_11F_11F_REV] =
                      (((d = {})[o.FORMATS.RGB] = S.R11F_G11F_B10F), d)),
                    (t[o.TYPES.UNSIGNED_INT_5_9_9_9_REV] =
                      (((_ = {})[o.FORMATS.RGB] = S.RGB9_E5), _)),
                    (t[o.TYPES.UNSIGNED_INT_24_8] =
                      (((y = {})[o.FORMATS.DEPTH_STENCIL] = S.DEPTH24_STENCIL8),
                      y)),
                    (t[o.TYPES.FLOAT_32_UNSIGNED_INT_24_8_REV] =
                      (((v = {})[o.FORMATS.DEPTH_STENCIL] =
                        S.DEPTH32F_STENCIL8),
                      v)),
                    (E = t))
                  : (((m = {})[o.TYPES.UNSIGNED_BYTE] =
                      (((g = {})[o.FORMATS.RGBA] = S.RGBA),
                      (g[o.FORMATS.RGB] = S.RGB),
                      (g[o.FORMATS.ALPHA] = S.ALPHA),
                      (g[o.FORMATS.LUMINANCE] = S.LUMINANCE),
                      (g[o.FORMATS.LUMINANCE_ALPHA] = S.LUMINANCE_ALPHA),
                      g)),
                    (m[o.TYPES.UNSIGNED_SHORT_5_6_5] =
                      (((b = {})[o.FORMATS.RGB] = S.RGB), b)),
                    (m[o.TYPES.UNSIGNED_SHORT_4_4_4_4] =
                      (((x = {})[o.FORMATS.RGBA] = S.RGBA), x)),
                    (m[o.TYPES.UNSIGNED_SHORT_5_5_5_1] =
                      (((T = {})[o.FORMATS.RGBA] = S.RGBA), T)),
                    (E = m)),
                E));
            var A = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
            this.boundTextures.length = A;
            for (var R = 0; R < A; R++) this.boundTextures[R] = null;
            this.emptyTextures = {};
            var O = new t3(S.createTexture());
            S.bindTexture(S.TEXTURE_2D, O.texture),
              S.texImage2D(
                S.TEXTURE_2D,
                0,
                S.RGBA,
                1,
                1,
                0,
                S.RGBA,
                S.UNSIGNED_BYTE,
                new Uint8Array(4)
              ),
              (this.emptyTextures[S.TEXTURE_2D] = O),
              (this.emptyTextures[S.TEXTURE_CUBE_MAP] = new t3(
                S.createTexture()
              )),
              S.bindTexture(
                S.TEXTURE_CUBE_MAP,
                this.emptyTextures[S.TEXTURE_CUBE_MAP].texture
              );
            for (var R = 0; R < 6; R++)
              S.texImage2D(
                S.TEXTURE_CUBE_MAP_POSITIVE_X + R,
                0,
                S.RGBA,
                1,
                1,
                0,
                S.RGBA,
                S.UNSIGNED_BYTE,
                null
              );
            S.texParameteri(S.TEXTURE_CUBE_MAP, S.TEXTURE_MAG_FILTER, S.LINEAR),
              S.texParameteri(
                S.TEXTURE_CUBE_MAP,
                S.TEXTURE_MIN_FILTER,
                S.LINEAR
              );
            for (var R = 0; R < this.boundTextures.length; R++)
              this.bind(null, R);
          }),
          (t.prototype.bind = function (t, e) {
            void 0 === e && (e = 0);
            var r = this.gl;
            if (
              (t = null == t ? void 0 : t.castToBaseTexture()) &&
              t.valid &&
              !t.parentTextureArray
            ) {
              t.touched = this.renderer.textureGC.count;
              var i = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
              this.boundTextures[e] !== t &&
                (this.currentLocation !== e &&
                  ((this.currentLocation = e), r.activeTexture(r.TEXTURE0 + e)),
                r.bindTexture(t.target, i.texture)),
                i.dirtyId !== t.dirtyId
                  ? (this.currentLocation !== e &&
                      ((this.currentLocation = e),
                      r.activeTexture(r.TEXTURE0 + e)),
                    this.updateTexture(t))
                  : i.dirtyStyleId !== t.dirtyStyleId &&
                    this.updateTextureStyle(t),
                (this.boundTextures[e] = t);
            } else
              this.currentLocation !== e &&
                ((this.currentLocation = e), r.activeTexture(r.TEXTURE0 + e)),
                r.bindTexture(
                  r.TEXTURE_2D,
                  this.emptyTextures[r.TEXTURE_2D].texture
                ),
                (this.boundTextures[e] = null);
          }),
          (t.prototype.reset = function () {
            (this._unknownBoundTextures = !0),
              (this.hasIntegerTextures = !1),
              (this.currentLocation = -1);
            for (var t = 0; t < this.boundTextures.length; t++)
              this.boundTextures[t] = this.unknownTexture;
          }),
          (t.prototype.unbind = function (t) {
            var e = this.gl,
              r = this.boundTextures;
            if (this._unknownBoundTextures) {
              this._unknownBoundTextures = !1;
              for (var i = 0; i < r.length; i++)
                r[i] === this.unknownTexture && this.bind(null, i);
            }
            for (var i = 0; i < r.length; i++)
              r[i] === t &&
                (this.currentLocation !== i &&
                  (e.activeTexture(e.TEXTURE0 + i), (this.currentLocation = i)),
                e.bindTexture(t.target, this.emptyTextures[t.target].texture),
                (r[i] = null));
          }),
          (t.prototype.ensureSamplerType = function (t) {
            var e = this.boundTextures,
              r = this.hasIntegerTextures,
              i = this.CONTEXT_UID;
            if (r)
              for (var n = t - 1; n >= 0; --n) {
                var s = e[n];
                s &&
                  s._glTextures[i].samplerType !== o.SAMPLER_TYPES.FLOAT &&
                  this.renderer.texture.unbind(s);
              }
          }),
          (t.prototype.initTexture = function (t) {
            var e = new t3(this.gl.createTexture());
            return (
              (e.dirtyId = -1),
              (t._glTextures[this.CONTEXT_UID] = e),
              this.managedTextures.push(t),
              t.on('dispose', this.destroyTexture, this),
              e
            );
          }),
          (t.prototype.initTextureType = function (t, e) {
            var r, i;
            (e.internalFormat =
              null !==
                (i =
                  null === (r = this.internalFormats[t.type]) || void 0 === r
                    ? void 0
                    : r[t.format]) && void 0 !== i
                ? i
                : t.format),
              2 === this.webGLVersion && t.type === o.TYPES.HALF_FLOAT
                ? (e.type = this.gl.HALF_FLOAT)
                : (e.type = t.type);
          }),
          (t.prototype.updateTexture = function (t) {
            var e = t._glTextures[this.CONTEXT_UID];
            if (e) {
              var r = this.renderer;
              if (
                (this.initTextureType(t, e),
                t.resource && t.resource.upload(r, t, e))
              )
                e.samplerType !== o.SAMPLER_TYPES.FLOAT &&
                  (this.hasIntegerTextures = !0);
              else {
                var i = t.realWidth,
                  n = t.realHeight,
                  s = r.gl;
                (e.width !== i || e.height !== n || e.dirtyId < 0) &&
                  ((e.width = i),
                  (e.height = n),
                  s.texImage2D(
                    t.target,
                    0,
                    e.internalFormat,
                    i,
                    n,
                    0,
                    t.format,
                    e.type,
                    null
                  ));
              }
              t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
                (e.dirtyId = t.dirtyId);
            }
          }),
          (t.prototype.destroyTexture = function (t, e) {
            var r = this.gl;
            if (
              (t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] &&
              (this.unbind(t),
              r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
              t.off('dispose', this.destroyTexture, this),
              delete t._glTextures[this.CONTEXT_UID],
              !e)
            ) {
              var i = this.managedTextures.indexOf(t);
              -1 !== i && (0, s.removeItems)(this.managedTextures, i, 1);
            }
          }),
          (t.prototype.updateTextureStyle = function (t) {
            var e = t._glTextures[this.CONTEXT_UID];
            e &&
              ((t.mipmap !== o.MIPMAP_MODES.POW2 && 2 === this.webGLVersion) ||
              t.isPowerOfTwo
                ? (e.mipmap = t.mipmap >= 1)
                : (e.mipmap = !1),
              2 === this.webGLVersion || t.isPowerOfTwo
                ? (e.wrapMode = t.wrapMode)
                : (e.wrapMode = o.WRAP_MODES.CLAMP),
              (t.resource && t.resource.style(this.renderer, t, e)) ||
                this.setStyle(t, e),
              (e.dirtyStyleId = t.dirtyStyleId));
          }),
          (t.prototype.setStyle = function (t, e) {
            var r = this.gl;
            if (
              (e.mipmap &&
                t.mipmap !== o.MIPMAP_MODES.ON_MANUAL &&
                r.generateMipmap(t.target),
              r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode),
              r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode),
              e.mipmap)
            ) {
              r.texParameteri(
                t.target,
                r.TEXTURE_MIN_FILTER,
                t.scaleMode === o.SCALE_MODES.LINEAR
                  ? r.LINEAR_MIPMAP_LINEAR
                  : r.NEAREST_MIPMAP_NEAREST
              );
              var i = this.renderer.context.extensions.anisotropicFiltering;
              if (
                i &&
                t.anisotropicLevel > 0 &&
                t.scaleMode === o.SCALE_MODES.LINEAR
              ) {
                var n = Math.min(
                  t.anisotropicLevel,
                  r.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                );
                r.texParameterf(t.target, i.TEXTURE_MAX_ANISOTROPY_EXT, n);
              }
            } else
              r.texParameteri(
                t.target,
                r.TEXTURE_MIN_FILTER,
                t.scaleMode === o.SCALE_MODES.LINEAR ? r.LINEAR : r.NEAREST
              );
            r.texParameteri(
              t.target,
              r.TEXTURE_MAG_FILTER,
              t.scaleMode === o.SCALE_MODES.LINEAR ? r.LINEAR : r.NEAREST
            );
          }),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })(),
      t8 = {
        __proto__: null,
        FilterSystem: tn,
        BatchSystem: ts,
        ContextSystem: th,
        FramebufferSystem: tc,
        GeometrySystem: tf,
        MaskSystem: tG,
        ScissorSystem: tj,
        StencilSystem: tH,
        ProjectionSystem: tY,
        RenderTextureSystem: tW,
        ShaderSystem: t0,
        StateSystem: t1,
        TextureGCSystem: t2,
        TextureSystem: t4,
      },
      t6 = new c.Matrix(),
      t5 = (function (t) {
        function e(e, r) {
          void 0 === e && (e = o.RENDERER_TYPE.UNKNOWN);
          var i = t.call(this) || this;
          return (
            (r = Object.assign({}, n.settings.RENDER_OPTIONS, r)),
            (i.options = r),
            (i.type = e),
            (i.screen = new c.Rectangle(0, 0, r.width, r.height)),
            (i.view = r.view || (0, n.settings).ADAPTER.createCanvas()),
            (i.resolution = r.resolution || n.settings.RESOLUTION),
            (i.useContextAlpha = r.useContextAlpha),
            (i.autoDensity = !!r.autoDensity),
            (i.preserveDrawingBuffer = r.preserveDrawingBuffer),
            (i.clearBeforeRender = r.clearBeforeRender),
            (i._backgroundColor = 0),
            (i._backgroundColorRgba = [0, 0, 0, 1]),
            (i._backgroundColorString = '#000000'),
            (i.backgroundColor = r.backgroundColor || i._backgroundColor),
            (i.backgroundAlpha = r.backgroundAlpha),
            void 0 !== r.transparent &&
              ((0, s.deprecation)(
                '6.0.0',
                'Option transparent is deprecated, please use backgroundAlpha instead.'
              ),
              (i.useContextAlpha = r.transparent),
              (i.backgroundAlpha = r.transparent ? 0 : 1)),
            (i._lastObjectRendered = null),
            (i.plugins = {}),
            i
          );
        }
        return (
          _(e, t),
          (e.prototype.initPlugins = function (t) {
            for (var e in t) this.plugins[e] = new t[e](this);
          }),
          Object.defineProperty(e.prototype, 'width', {
            get: function () {
              return this.view.width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'height', {
            get: function () {
              return this.view.height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.resize = function (t, e) {
            (this.view.width = Math.round(t * this.resolution)),
              (this.view.height = Math.round(e * this.resolution));
            var r = this.view.width / this.resolution,
              i = this.view.height / this.resolution;
            (this.screen.width = r),
              (this.screen.height = i),
              this.autoDensity &&
                ((this.view.style.width = r + 'px'),
                (this.view.style.height = i + 'px')),
              this.emit('resize', r, i);
          }),
          (e.prototype.generateTexture = function (t, e, r, i) {
            void 0 === e && (e = {}),
              'number' == typeof e &&
                ((0, s.deprecation)(
                  '6.1.0',
                  'generateTexture options (scaleMode, resolution, region) are now object options.'
                ),
                (e = { scaleMode: e, resolution: r, region: i }));
            var n = e.region,
              o = (function (t, e) {
                var r = {};
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) &&
                    0 > e.indexOf(i) &&
                    (r[i] = t[i]);
                if (
                  null != t &&
                  'function' == typeof Object.getOwnPropertySymbols
                )
                  for (
                    var n = 0, i = Object.getOwnPropertySymbols(t);
                    n < i.length;
                    n++
                  )
                    0 > e.indexOf(i[n]) &&
                      Object.prototype.propertyIsEnumerable.call(t, i[n]) &&
                      (r[i[n]] = t[i[n]]);
                return r;
              })(e, ['region']);
            0 === (i = n || t.getLocalBounds(null, !0)).width && (i.width = 1),
              0 === i.height && (i.height = 1);
            var a = X.create(y({ width: i.width, height: i.height }, o));
            return (
              (t6.tx = -i.x),
              (t6.ty = -i.y),
              this.render(t, {
                renderTexture: a,
                clear: !1,
                transform: t6,
                skipUpdateTransform: !!t.parent,
              }),
              a
            );
          }),
          (e.prototype.destroy = function (t) {
            for (var e in this.plugins)
              this.plugins[e].destroy(), (this.plugins[e] = null);
            t &&
              this.view.parentNode &&
              this.view.parentNode.removeChild(this.view),
              (this.plugins = null),
              (this.type = o.RENDERER_TYPE.UNKNOWN),
              (this.view = null),
              (this.screen = null),
              (this._tempDisplayObjectParent = null),
              (this.options = null),
              (this._backgroundColorRgba = null),
              (this._backgroundColorString = null),
              (this._lastObjectRendered = null);
          }),
          Object.defineProperty(e.prototype, 'backgroundColor', {
            get: function () {
              return this._backgroundColor;
            },
            set: function (t) {
              (this._backgroundColor = t),
                (this._backgroundColorString = (0, s.hex2string)(t)),
                (0, s.hex2rgb)(t, this._backgroundColorRgba);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'backgroundAlpha', {
            get: function () {
              return this._backgroundColorRgba[3];
            },
            set: function (t) {
              this._backgroundColorRgba[3] = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(I(a)),
      t9 = function (t) {
        (this.buffer = t || null),
          (this.updateID = -1),
          (this.byteLength = -1),
          (this.refCount = 0);
      },
      t7 = (function () {
        function t(t) {
          (this.renderer = t),
            (this.managedBuffers = {}),
            (this.boundBufferBases = {});
        }
        return (
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          (t.prototype.contextChange = function () {
            this.disposeAll(!0),
              (this.gl = this.renderer.gl),
              (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
          }),
          (t.prototype.bind = function (t) {
            var e = this.gl,
              r = this.CONTEXT_UID,
              i = t._glBuffers[r] || this.createGLBuffer(t);
            e.bindBuffer(t.type, i.buffer);
          }),
          (t.prototype.bindBufferBase = function (t, e) {
            var r = this.gl,
              i = this.CONTEXT_UID;
            if (this.boundBufferBases[e] !== t) {
              var n = t._glBuffers[i] || this.createGLBuffer(t);
              (this.boundBufferBases[e] = t),
                r.bindBufferBase(r.UNIFORM_BUFFER, e, n.buffer);
            }
          }),
          (t.prototype.bindBufferRange = function (t, e, r) {
            var i = this.gl,
              n = this.CONTEXT_UID;
            r = r || 0;
            var o = t._glBuffers[n] || this.createGLBuffer(t);
            i.bindBufferRange(i.UNIFORM_BUFFER, e || 0, o.buffer, 256 * r, 256);
          }),
          (t.prototype.update = function (t) {
            var e = this.gl,
              r = this.CONTEXT_UID,
              i = t._glBuffers[r];
            if (t._updateID !== i.updateID) {
              if (
                ((i.updateID = t._updateID),
                e.bindBuffer(t.type, i.buffer),
                i.byteLength >= t.data.byteLength)
              )
                e.bufferSubData(t.type, 0, t.data);
              else {
                var n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                (i.byteLength = t.data.byteLength),
                  e.bufferData(t.type, t.data, n);
              }
            }
          }),
          (t.prototype.dispose = function (t, e) {
            if (this.managedBuffers[t.id]) {
              delete this.managedBuffers[t.id];
              var r = t._glBuffers[this.CONTEXT_UID],
                i = this.gl;
              t.disposeRunner.remove(this),
                r &&
                  (e || i.deleteBuffer(r.buffer),
                  delete t._glBuffers[this.CONTEXT_UID]);
            }
          }),
          (t.prototype.disposeAll = function (t) {
            for (
              var e = Object.keys(this.managedBuffers), r = 0;
              r < e.length;
              r++
            )
              this.dispose(this.managedBuffers[e[r]], t);
          }),
          (t.prototype.createGLBuffer = function (t) {
            var e = this.CONTEXT_UID,
              r = this.gl;
            return (
              (t._glBuffers[e] = new t9(r.createBuffer())),
              (this.managedBuffers[t.id] = t),
              t.disposeRunner.add(this),
              t._glBuffers[e]
            );
          }),
          t
        );
      })(),
      et = (function (t) {
        function e(r) {
          var i = t.call(this, o.RENDERER_TYPE.WEBGL, r) || this;
          return (
            (r = i.options),
            (i.gl = null),
            (i.CONTEXT_UID = 0),
            (i.runners = {
              destroy: new u.Runner('destroy'),
              contextChange: new u.Runner('contextChange'),
              reset: new u.Runner('reset'),
              update: new u.Runner('update'),
              postrender: new u.Runner('postrender'),
              prerender: new u.Runner('prerender'),
              resize: new u.Runner('resize'),
            }),
            i.runners.contextChange.add(i),
            (i.globalUniforms = new tt(
              { projectionMatrix: new c.Matrix() },
              !0
            )),
            i
              .addSystem(tG, 'mask')
              .addSystem(th, 'context')
              .addSystem(t1, 'state')
              .addSystem(t0, 'shader')
              .addSystem(t4, 'texture')
              .addSystem(t7, 'buffer')
              .addSystem(tf, 'geometry')
              .addSystem(tc, 'framebuffer')
              .addSystem(tj, 'scissor')
              .addSystem(tH, 'stencil')
              .addSystem(tY, 'projection')
              .addSystem(t2, 'textureGC')
              .addSystem(tn, 'filter')
              .addSystem(tW, 'renderTexture')
              .addSystem(ts, 'batch'),
            i.initPlugins(e.__plugins),
            (i.multisample = void 0),
            r.context
              ? i.context.initFromContext(r.context)
              : i.context.initFromOptions({
                  alpha: !!i.useContextAlpha,
                  antialias: r.antialias,
                  premultipliedAlpha:
                    i.useContextAlpha && 'notMultiplied' !== i.useContextAlpha,
                  stencil: !0,
                  preserveDrawingBuffer: r.preserveDrawingBuffer,
                  powerPreference: i.options.powerPreference,
                }),
            (i.renderingToScreen = !0),
            (0, s.sayHello)(
              2 === i.context.webGLVersion ? 'WebGL 2' : 'WebGL 1'
            ),
            i.resize(i.options.width, i.options.height),
            i
          );
        }
        return (
          _(e, t),
          (e.create = function (t) {
            if ((0, s.isWebGLSupported)()) return new e(t);
            throw Error(
              'WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.'
            );
          }),
          (e.prototype.contextChange = function () {
            var t,
              e = this.gl;
            if (1 === this.context.webGLVersion) {
              var r = e.getParameter(e.FRAMEBUFFER_BINDING);
              e.bindFramebuffer(e.FRAMEBUFFER, null),
                (t = e.getParameter(e.SAMPLES)),
                e.bindFramebuffer(e.FRAMEBUFFER, r);
            } else {
              var r = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);
              e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
                (t = e.getParameter(e.SAMPLES)),
                e.bindFramebuffer(e.DRAW_FRAMEBUFFER, r);
            }
            t >= o.MSAA_QUALITY.HIGH
              ? (this.multisample = o.MSAA_QUALITY.HIGH)
              : t >= o.MSAA_QUALITY.MEDIUM
              ? (this.multisample = o.MSAA_QUALITY.MEDIUM)
              : t >= o.MSAA_QUALITY.LOW
              ? (this.multisample = o.MSAA_QUALITY.LOW)
              : (this.multisample = o.MSAA_QUALITY.NONE);
          }),
          (e.prototype.addSystem = function (t, e) {
            var r = new t(this);
            if (this[e])
              throw Error('Whoops! The name "' + e + '" is already in use');
            for (var i in ((this[e] = r), this.runners)) this.runners[i].add(r);
            return this;
          }),
          (e.prototype.render = function (t, e) {
            if (
              (e &&
                (e instanceof X
                  ? ((0, s.deprecation)(
                      '6.0.0',
                      'Renderer#render arguments changed, use options instead.'
                    ),
                    (r = e),
                    (i = arguments[2]),
                    (n = arguments[3]),
                    (o = arguments[4]))
                  : ((r = e.renderTexture),
                    (i = e.clear),
                    (n = e.transform),
                    (o = e.skipUpdateTransform))),
              (this.renderingToScreen = !r),
              this.runners.prerender.emit(),
              this.emit('prerender'),
              (this.projection.transform = n),
              !this.context.isLost)
            ) {
              if ((r || (this._lastObjectRendered = t), !o)) {
                var r,
                  i,
                  n,
                  o,
                  a = t.enableTempParent();
                t.updateTransform(), t.disableTempParent(a);
              }
              this.renderTexture.bind(r),
                this.batch.currentRenderer.start(),
                (void 0 !== i ? i : this.clearBeforeRender) &&
                  this.renderTexture.clear(),
                t.render(this),
                this.batch.currentRenderer.flush(),
                r && r.baseTexture.update(),
                this.runners.postrender.emit(),
                (this.projection.transform = null),
                this.emit('postrender');
            }
          }),
          (e.prototype.generateTexture = function (e, r, i, n) {
            void 0 === r && (r = {});
            var o = t.prototype.generateTexture.call(this, e, r, i, n);
            return this.framebuffer.blit(), o;
          }),
          (e.prototype.resize = function (e, r) {
            t.prototype.resize.call(this, e, r),
              this.runners.resize.emit(this.screen.height, this.screen.width);
          }),
          (e.prototype.reset = function () {
            return this.runners.reset.emit(), this;
          }),
          (e.prototype.clear = function () {
            this.renderTexture.bind(), this.renderTexture.clear();
          }),
          (e.prototype.destroy = function (e) {
            for (var r in (this.runners.destroy.emit(), this.runners))
              this.runners[r].destroy();
            t.prototype.destroy.call(this, e), (this.gl = null);
          }),
          Object.defineProperty(e.prototype, 'extract', {
            get: function () {
              return (
                (0, s.deprecation)(
                  '6.0.0',
                  'Renderer#extract has been deprecated, please use Renderer#plugins.extract instead.'
                ),
                this.plugins.extract
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.registerPlugin = function (t, e) {
            (0, s.deprecation)(
              '6.5.0',
              'Renderer.registerPlugin() has been deprecated, please use extensions.add() instead.'
            ),
              (0, h.extensions).add({
                name: t,
                type: h.ExtensionType.RendererPlugin,
                ref: e,
              });
          }),
          (e.__plugins = {}),
          e
        );
      })(t5);
    function ee(t) {
      return et.create(t);
    }
    (0, h.extensions).handleByMap(h.ExtensionType.RendererPlugin, et.__plugins);
    var er =
        'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}',
      ei =
        'attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n';
    (function (t) {
      (0, s.deprecation)(
        '6.1.0',
        'System class is deprecated, implemement ISystem interface instead.'
      ),
        (this.renderer = t);
    }).prototype.destroy = function () {
      this.renderer = null;
    };
    var en = function () {
        (this.texArray = null),
          (this.blend = 0),
          (this.type = o.DRAW_MODES.TRIANGLES),
          (this.start = 0),
          (this.size = 0),
          (this.data = null);
      },
      eo = (function () {
        function t() {
          (this.elements = []), (this.ids = []), (this.count = 0);
        }
        return (
          (t.prototype.clear = function () {
            for (var t = 0; t < this.count; t++) this.elements[t] = null;
            this.count = 0;
          }),
          t
        );
      })(),
      es = (function () {
        function t(t) {
          'number' == typeof t
            ? (this.rawBinaryData = new ArrayBuffer(t))
            : t instanceof Uint8Array
            ? (this.rawBinaryData = t.buffer)
            : (this.rawBinaryData = t),
            (this.uint32View = new Uint32Array(this.rawBinaryData)),
            (this.float32View = new Float32Array(this.rawBinaryData));
        }
        return (
          Object.defineProperty(t.prototype, 'int8View', {
            get: function () {
              return (
                this._int8View ||
                  (this._int8View = new Int8Array(this.rawBinaryData)),
                this._int8View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'uint8View', {
            get: function () {
              return (
                this._uint8View ||
                  (this._uint8View = new Uint8Array(this.rawBinaryData)),
                this._uint8View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'int16View', {
            get: function () {
              return (
                this._int16View ||
                  (this._int16View = new Int16Array(this.rawBinaryData)),
                this._int16View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'uint16View', {
            get: function () {
              return (
                this._uint16View ||
                  (this._uint16View = new Uint16Array(this.rawBinaryData)),
                this._uint16View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'int32View', {
            get: function () {
              return (
                this._int32View ||
                  (this._int32View = new Int32Array(this.rawBinaryData)),
                this._int32View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.view = function (t) {
            return this[t + 'View'];
          }),
          (t.prototype.destroy = function () {
            (this.rawBinaryData = null),
              (this._int8View = null),
              (this._uint8View = null),
              (this._int16View = null),
              (this._uint16View = null),
              (this._int32View = null),
              (this.uint32View = null),
              (this.float32View = null);
          }),
          (t.sizeOf = function (t) {
            switch (t) {
              case 'int8':
              case 'uint8':
                return 1;
              case 'int16':
              case 'uint16':
                return 2;
              case 'int32':
              case 'uint32':
              case 'float32':
                return 4;
              default:
                throw Error(t + " isn't a valid view type");
            }
          }),
          t
        );
      })(),
      ea = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.shaderGenerator = null),
            (r.geometryClass = null),
            (r.vertexSize = null),
            (r.state = tC.for2d()),
            (r.size = 4 * n.settings.SPRITE_BATCH_SIZE),
            (r._vertexCount = 0),
            (r._indexCount = 0),
            (r._bufferedElements = []),
            (r._bufferedTextures = []),
            (r._bufferSize = 0),
            (r._shader = null),
            (r._packedGeometries = []),
            (r._packedGeometryPoolSize = 2),
            (r._flushId = 0),
            (r._aBuffers = {}),
            (r._iBuffers = {}),
            (r.MAX_TEXTURES = 1),
            r.renderer.on('prerender', r.onPrerender, r),
            e.runners.contextChange.add(r),
            (r._dcIndex = 0),
            (r._aIndex = 0),
            (r._iIndex = 0),
            (r._attributeBuffer = null),
            (r._indexBuffer = null),
            (r._tempBoundTextures = []),
            r
          );
        }
        return (
          _(e, t),
          (e.prototype.contextChange = function () {
            var t = this.renderer.gl;
            n.settings.PREFER_ENV === o.ENV.WEBGL_LEGACY
              ? (this.MAX_TEXTURES = 1)
              : ((this.MAX_TEXTURES = Math.min(
                  t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                  n.settings.SPRITE_MAX_TEXTURES
                )),
                (this.MAX_TEXTURES = (function (t, e) {
                  if (0 === t)
                    throw Error(
                      'Invalid value of `0` passed to `checkMaxIfStatementsInShader`'
                    );
                  for (var r = e.createShader(e.FRAGMENT_SHADER); ; ) {
                    var i =
                      'precision mediump float;\nvoid main(void){\nfloat test = 0.1;\n%forloop%\ngl_FragColor = vec4(0.0);\n}'.replace(
                        /%forloop%/gi,
                        (function (t) {
                          for (var e = '', r = 0; r < t; ++r)
                            r > 0 && (e += '\nelse '),
                              r < t - 1 && (e += 'if(test == ' + r + '.0){}');
                          return e;
                        })(t)
                      );
                    if (
                      (e.shaderSource(r, i),
                      e.compileShader(r),
                      e.getShaderParameter(r, e.COMPILE_STATUS))
                    )
                      break;
                    t = (t / 2) | 0;
                  }
                  return t;
                })(this.MAX_TEXTURES, t))),
              (this._shader = this.shaderGenerator.generateShader(
                this.MAX_TEXTURES
              ));
            for (var e = 0; e < this._packedGeometryPoolSize; e++)
              this._packedGeometries[e] = new this.geometryClass();
            this.initFlushBuffers();
          }),
          (e.prototype.initFlushBuffers = function () {
            for (
              var t = e._drawCallPool,
                r = e._textureArrayPool,
                i = this.size / 4,
                n = Math.floor(i / this.MAX_TEXTURES) + 1;
              t.length < i;

            )
              t.push(new en());
            for (; r.length < n; ) r.push(new eo());
            for (var o = 0; o < this.MAX_TEXTURES; o++)
              this._tempBoundTextures[o] = null;
          }),
          (e.prototype.onPrerender = function () {
            this._flushId = 0;
          }),
          (e.prototype.render = function (t) {
            t._texture.valid &&
              (this._vertexCount + t.vertexData.length / 2 > this.size &&
                this.flush(),
              (this._vertexCount += t.vertexData.length / 2),
              (this._indexCount += t.indices.length),
              (this._bufferedTextures[this._bufferSize] =
                t._texture.baseTexture),
              (this._bufferedElements[this._bufferSize++] = t));
          }),
          (e.prototype.buildTexturesAndDrawCalls = function () {
            var t = this._bufferedTextures,
              r = this.MAX_TEXTURES,
              i = e._textureArrayPool,
              n = this.renderer.batch,
              o = this._tempBoundTextures,
              s = this.renderer.textureGC.count,
              a = ++b._globalBatch,
              h = 0,
              u = i[0],
              l = 0;
            n.copyBoundTextures(o, r);
            for (var c = 0; c < this._bufferSize; ++c) {
              var p = t[c];
              (t[c] = null),
                p._batchEnabled !== a &&
                  (u.count >= r &&
                    (n.boundArray(u, o, a, r),
                    this.buildDrawCalls(u, l, c),
                    (l = c),
                    (u = i[++h]),
                    ++a),
                  (p._batchEnabled = a),
                  (p.touched = s),
                  (u.elements[u.count++] = p));
            }
            u.count > 0 &&
              (n.boundArray(u, o, a, r),
              this.buildDrawCalls(u, l, this._bufferSize),
              ++h,
              ++a);
            for (var c = 0; c < o.length; c++) o[c] = null;
            b._globalBatch = a;
          }),
          (e.prototype.buildDrawCalls = function (t, r, i) {
            var n = this._bufferedElements,
              o = this._attributeBuffer,
              a = this._indexBuffer,
              h = this.vertexSize,
              u = e._drawCallPool,
              l = this._dcIndex,
              c = this._aIndex,
              p = this._iIndex,
              f = u[l];
            (f.start = this._iIndex), (f.texArray = t);
            for (var d = r; d < i; ++d) {
              var _ = n[d],
                y = _._texture.baseTexture,
                v = s.premultiplyBlendMode[y.alphaMode ? 1 : 0][_.blendMode];
              (n[d] = null),
                r < d &&
                  f.blend !== v &&
                  ((f.size = p - f.start),
                  (r = d),
                  ((f = u[++l]).texArray = t),
                  (f.start = p)),
                this.packInterleavedGeometry(_, o, a, c, p),
                (c += (_.vertexData.length / 2) * h),
                (p += _.indices.length),
                (f.blend = v);
            }
            r < i && ((f.size = p - f.start), ++l),
              (this._dcIndex = l),
              (this._aIndex = c),
              (this._iIndex = p);
          }),
          (e.prototype.bindAndClearTexArray = function (t) {
            for (var e = this.renderer.texture, r = 0; r < t.count; r++)
              e.bind(t.elements[r], t.ids[r]), (t.elements[r] = null);
            t.count = 0;
          }),
          (e.prototype.updateGeometry = function () {
            var t = this._packedGeometries,
              e = this._attributeBuffer,
              r = this._indexBuffer;
            n.settings.CAN_UPLOAD_SAME_BUFFER
              ? (t[this._flushId]._buffer.update(e.rawBinaryData),
                t[this._flushId]._indexBuffer.update(r),
                this.renderer.geometry.updateBuffers())
              : (this._packedGeometryPoolSize <= this._flushId &&
                  (this._packedGeometryPoolSize++,
                  (t[this._flushId] = new this.geometryClass())),
                t[this._flushId]._buffer.update(e.rawBinaryData),
                t[this._flushId]._indexBuffer.update(r),
                this.renderer.geometry.bind(t[this._flushId]),
                this.renderer.geometry.updateBuffers(),
                this._flushId++);
          }),
          (e.prototype.drawBatches = function () {
            for (
              var t = this._dcIndex,
                r = this.renderer,
                i = r.gl,
                n = r.state,
                o = e._drawCallPool,
                s = null,
                a = 0;
              a < t;
              a++
            ) {
              var h = o[a],
                u = h.texArray,
                l = h.type,
                c = h.size,
                p = h.start,
                f = h.blend;
              s !== u && ((s = u), this.bindAndClearTexArray(u)),
                (this.state.blendMode = f),
                n.set(this.state),
                i.drawElements(l, c, i.UNSIGNED_SHORT, 2 * p);
            }
          }),
          (e.prototype.flush = function () {
            0 !== this._vertexCount &&
              ((this._attributeBuffer = this.getAttributeBuffer(
                this._vertexCount
              )),
              (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
              (this._aIndex = 0),
              (this._iIndex = 0),
              (this._dcIndex = 0),
              this.buildTexturesAndDrawCalls(),
              this.updateGeometry(),
              this.drawBatches(),
              (this._bufferSize = 0),
              (this._vertexCount = 0),
              (this._indexCount = 0));
          }),
          (e.prototype.start = function () {
            this.renderer.state.set(this.state),
              this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),
              this.renderer.shader.bind(this._shader),
              n.settings.CAN_UPLOAD_SAME_BUFFER &&
                this.renderer.geometry.bind(
                  this._packedGeometries[this._flushId]
                );
          }),
          (e.prototype.stop = function () {
            this.flush();
          }),
          (e.prototype.destroy = function () {
            for (var e = 0; e < this._packedGeometryPoolSize; e++)
              this._packedGeometries[e] && this._packedGeometries[e].destroy();
            this.renderer.off('prerender', this.onPrerender, this),
              (this._aBuffers = null),
              (this._iBuffers = null),
              (this._packedGeometries = null),
              (this._attributeBuffer = null),
              (this._indexBuffer = null),
              this._shader && (this._shader.destroy(), (this._shader = null)),
              t.prototype.destroy.call(this);
          }),
          (e.prototype.getAttributeBuffer = function (t) {
            var e = (0, s.nextPow2)(Math.ceil(t / 8)),
              r = (0, s.log2)(e),
              i = 8 * e;
            this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
            var n = this._aBuffers[i];
            return (
              n || (this._aBuffers[i] = n = new es(i * this.vertexSize * 4)), n
            );
          }),
          (e.prototype.getIndexBuffer = function (t) {
            var e = (0, s.nextPow2)(Math.ceil(t / 12)),
              r = (0, s.log2)(e);
            this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
            var i = this._iBuffers[r];
            return i || (this._iBuffers[r] = i = new Uint16Array(12 * e)), i;
          }),
          (e.prototype.packInterleavedGeometry = function (t, e, r, i, n) {
            for (
              var o = e.uint32View,
                a = e.float32View,
                h = i / this.vertexSize,
                u = t.uvs,
                l = t.indices,
                c = t.vertexData,
                p = t._texture.baseTexture._batchLocation,
                f = Math.min(t.worldAlpha, 1),
                d =
                  f < 1 && t._texture.baseTexture.alphaMode
                    ? (0, s.premultiplyTint)(t._tintRGB, f)
                    : t._tintRGB + ((255 * f) << 24),
                _ = 0;
              _ < c.length;
              _ += 2
            )
              (a[i++] = c[_]),
                (a[i++] = c[_ + 1]),
                (a[i++] = u[_]),
                (a[i++] = u[_ + 1]),
                (o[i++] = d),
                (a[i++] = p);
            for (var _ = 0; _ < l.length; _++) r[n++] = h + l[_];
          }),
          (e._drawCallPool = []),
          (e._textureArrayPool = []),
          e
        );
      })(to),
      eh = (function () {
        function t(t, e) {
          if (
            ((this.vertexSrc = t),
            (this.fragTemplate = e),
            (this.programCache = {}),
            (this.defaultGroupCache = {}),
            0 > e.indexOf('%count%'))
          )
            throw Error('Fragment template must contain "%count%".');
          if (0 > e.indexOf('%forloop%'))
            throw Error('Fragment template must contain "%forloop%".');
        }
        return (
          (t.prototype.generateShader = function (t) {
            if (!this.programCache[t]) {
              for (var e = new Int32Array(t), r = 0; r < t; r++) e[r] = r;
              this.defaultGroupCache[t] = tt.from({ uSamplers: e }, !0);
              var i = this.fragTemplate;
              (i = (i = i.replace(/%count%/gi, '' + t)).replace(
                /%forloop%/gi,
                this.generateSampleSrc(t)
              )),
                (this.programCache[t] = new tw(this.vertexSrc, i));
            }
            var n = {
              tint: new Float32Array([1, 1, 1, 1]),
              translationMatrix: new c.Matrix(),
              default: this.defaultGroupCache[t],
            };
            return new tD(this.programCache[t], n);
          }),
          (t.prototype.generateSampleSrc = function (t) {
            var e = '';
            e += '\n\n';
            for (var r = 0; r < t; r++)
              r > 0 && (e += '\nelse '),
                r < t - 1 && (e += 'if(vTextureId < ' + r + '.5)'),
                (e +=
                  '\n{\n	color = texture2D(uSamplers[' +
                  r +
                  '], vTextureCoord);\n}');
            return e + '\n\n';
          }),
          t
        );
      })(),
      eu = (function (t) {
        function e(e) {
          void 0 === e && (e = !1);
          var r = t.call(this) || this;
          return (
            (r._buffer = new V(null, e, !1)),
            (r._indexBuffer = new V(null, e, !0)),
            r
              .addAttribute('aVertexPosition', r._buffer, 2, !1, o.TYPES.FLOAT)
              .addAttribute('aTextureCoord', r._buffer, 2, !1, o.TYPES.FLOAT)
              .addAttribute('aColor', r._buffer, 4, !0, o.TYPES.UNSIGNED_BYTE)
              .addAttribute('aTextureId', r._buffer, 1, !0, o.TYPES.FLOAT)
              .addIndex(r._indexBuffer),
            r
          );
        }
        return _(e, t), e;
      })(Z),
      el =
        'precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n',
      ec =
        'varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n',
      ep = (function () {
        function t() {}
        return (
          (t.create = function (t) {
            var e = Object.assign(
                { vertex: el, fragment: ec, geometryClass: eu, vertexSize: 6 },
                t
              ),
              r = e.vertex,
              i = e.fragment,
              n = e.vertexSize,
              o = e.geometryClass;
            return (function (t) {
              function e(e) {
                var s = t.call(this, e) || this;
                return (
                  (s.shaderGenerator = new eh(r, i)),
                  (s.geometryClass = o),
                  (s.vertexSize = n),
                  s
                );
              }
              return _(e, t), e;
            })(ea);
          }),
          Object.defineProperty(t, 'defaultVertexSrc', {
            get: function () {
              return el;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'defaultFragmentTemplate', {
            get: function () {
              return ec;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })().create();
    Object.assign(ep, {
      extension: { name: 'batch', type: h.ExtensionType.RendererPlugin },
    });
    var ef = {},
      ed = function (t) {
        Object.defineProperty(ef, t, {
          get: function () {
            return (
              (0, s.deprecation)(
                '6.0.0',
                'PIXI.systems.' + t + ' has moved to PIXI.' + t
              ),
              D[t]
            );
          },
        });
      };
    for (var e_ in D) ed(e_);
    var ey = {},
      ev = function (t) {
        Object.defineProperty(ey, t, {
          get: function () {
            return (
              (0, s.deprecation)(
                '6.0.0',
                'PIXI.resources.' + t + ' has moved to PIXI.' + t
              ),
              t8[t]
            );
          },
        });
      };
    for (var e_ in t8) ev(e_);
  }),
  N('8q0ed', function (t, e) {
    w(t.exports, 'isMobile', () => R), w(t.exports, 'settings', () => O);
    /*!
     * @pixi/settings - v6.5.10
     * Compiled Thu, 06 Jul 2023 15:25:11 UTC
     *
     * @pixi/settings is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */ var r,
      i,
      n,
      o,
      s,
      a,
      h,
      u = F('6n98C'),
      l = /iPhone/i,
      c = /iPod/i,
      p = /iPad/i,
      f = /\biOS-universal(?:.+)Mac\b/i,
      d = /\bAndroid(?:.+)Mobile\b/i,
      _ = /Android/i,
      y = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
      v = /Silk/i,
      m = /Windows Phone/i,
      g = /\bWindows(?:.+)ARM\b/i,
      b = /BlackBerry/i,
      x = /BB10/i,
      T = /Opera Mini/i,
      E = /\b(CriOS|Chrome)(?:.+)Mobile/i,
      S = /Mobile(?:.+)Firefox\b/i,
      A = function (t) {
        return (
          void 0 !== t &&
          'MacIntel' === t.platform &&
          'number' == typeof t.maxTouchPoints &&
          t.maxTouchPoints > 1 &&
          'undefined' == typeof MSStream
        );
      },
      R =
        ((i = { userAgent: '', platform: '', maxTouchPoints: 0 }),
        (r = globalThis.navigator) || 'undefined' == typeof navigator
          ? 'string' == typeof r
            ? (i.userAgent = r)
            : r &&
              r.userAgent &&
              (i = {
                userAgent: r.userAgent,
                platform: r.platform,
                maxTouchPoints: r.maxTouchPoints || 0,
              })
          : (i = {
              userAgent: navigator.userAgent,
              platform: navigator.platform,
              maxTouchPoints: navigator.maxTouchPoints || 0,
            }),
        void 0 !== (o = (n = i.userAgent).split('[FBAN'))[1] && (n = o[0]),
        void 0 !== (o = n.split('Twitter'))[1] && (n = o[0]),
        ((h = {
          apple: {
            phone:
              ((s = n),
              (a = function (t) {
                return t.test(s);
              }))(l) && !a(m),
            ipod: a(c),
            tablet: !a(l) && (a(p) || A(i)) && !a(m),
            universal: a(f),
            device: (a(l) || a(c) || a(p) || a(f) || A(i)) && !a(m),
          },
          amazon: { phone: a(y), tablet: !a(y) && a(v), device: a(y) || a(v) },
          android: {
            phone: (!a(m) && a(y)) || (!a(m) && a(d)),
            tablet: !a(m) && !a(y) && !a(d) && (a(v) || a(_)),
            device:
              (!a(m) && (a(y) || a(v) || a(d) || a(_))) || a(/\bokhttp\b/i),
          },
          windows: { phone: a(m), tablet: a(g), device: a(m) || a(g) },
          other: {
            blackberry: a(b),
            blackberry10: a(x),
            opera: a(T),
            firefox: a(S),
            chrome: a(E),
            device: a(b) || a(x) || a(T) || a(S) || a(E),
          },
          any: !1,
          phone: !1,
          tablet: !1,
        }).any =
          h.apple.device ||
          h.android.device ||
          h.windows.device ||
          h.other.device),
        (h.phone = h.apple.phone || h.android.phone || h.windows.phone),
        (h.tablet = h.apple.tablet || h.android.tablet || h.windows.tablet),
        h),
      O = {
        ADAPTER: {
          createCanvas: function (t, e) {
            var r = document.createElement('canvas');
            return (r.width = t), (r.height = e), r;
          },
          getWebGLRenderingContext: function () {
            return WebGLRenderingContext;
          },
          getNavigator: function () {
            return navigator;
          },
          getBaseUrl: function () {
            var t;
            return null !== (t = document.baseURI) && void 0 !== t
              ? t
              : window.location.href;
          },
          fetch: function (t, e) {
            return fetch(t, e);
          },
        },
        MIPMAP_TEXTURES: u.MIPMAP_MODES.POW2,
        ANISOTROPIC_LEVEL: 0,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        FILTER_MULTISAMPLE: u.MSAA_QUALITY.NONE,
        SPRITE_MAX_TEXTURES: (function (t) {
          var e = !0;
          if (R.tablet || R.phone) {
            if (R.apple.device) {
              var r = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
              if (r) {
                var i = parseInt(r[1], 10);
                i < 11 && (e = !1);
              }
            }
            if (R.android.device) {
              var r = navigator.userAgent.match(/Android\s([0-9.]*)/);
              if (r) {
                var i = parseInt(r[1], 10);
                i < 7 && (e = !1);
              }
            }
          }
          return e ? 32 : 4;
        })(0),
        SPRITE_BATCH_SIZE: 4096,
        RENDER_OPTIONS: {
          view: null,
          width: 800,
          height: 600,
          autoDensity: !1,
          backgroundColor: 0,
          backgroundAlpha: 1,
          useContextAlpha: !0,
          clearBeforeRender: !0,
          antialias: !1,
          preserveDrawingBuffer: !1,
        },
        GC_MODE: u.GC_MODES.AUTO,
        GC_MAX_IDLE: 3600,
        GC_MAX_CHECK_COUNT: 600,
        WRAP_MODE: u.WRAP_MODES.CLAMP,
        SCALE_MODE: u.SCALE_MODES.LINEAR,
        PRECISION_VERTEX: u.PRECISION.HIGH,
        PRECISION_FRAGMENT: R.apple.device
          ? u.PRECISION.HIGH
          : u.PRECISION.MEDIUM,
        CAN_UPLOAD_SAME_BUFFER: !R.apple.device,
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1,
      };
  }),
  N('6n98C', function (t, e) {
    var r,
      i,
      n,
      o,
      s,
      a,
      h,
      u,
      l,
      c,
      p,
      f,
      d,
      _,
      y,
      v,
      m,
      g,
      b,
      x,
      T,
      E,
      S,
      A,
      R,
      O,
      M,
      P,
      I,
      D,
      C,
      F,
      N,
      L,
      B,
      G,
      U,
      k,
      X,
      j;
    w(t.exports, 'ENV', () => r),
      w(t.exports, 'RENDERER_TYPE', () => i),
      w(t.exports, 'BUFFER_BITS', () => n),
      w(t.exports, 'BLEND_MODES', () => o),
      w(t.exports, 'DRAW_MODES', () => s),
      w(t.exports, 'FORMATS', () => a),
      w(t.exports, 'TARGETS', () => h),
      w(t.exports, 'TYPES', () => u),
      w(t.exports, 'SAMPLER_TYPES', () => l),
      w(t.exports, 'SCALE_MODES', () => c),
      w(t.exports, 'WRAP_MODES', () => p),
      w(t.exports, 'MIPMAP_MODES', () => f),
      w(t.exports, 'ALPHA_MODES', () => d),
      w(t.exports, 'CLEAR_MODES', () => _),
      w(t.exports, 'GC_MODES', () => y),
      w(t.exports, 'PRECISION', () => v),
      w(t.exports, 'MASK_TYPES', () => m),
      w(t.exports, 'MSAA_QUALITY', () => b),
      w(t.exports, 'BUFFER_TYPE', () => x),
      ((T = r || (r = {}))[(T.WEBGL_LEGACY = 0)] = 'WEBGL_LEGACY'),
      (T[(T.WEBGL = 1)] = 'WEBGL'),
      (T[(T.WEBGL2 = 2)] = 'WEBGL2'),
      ((E = i || (i = {}))[(E.UNKNOWN = 0)] = 'UNKNOWN'),
      (E[(E.WEBGL = 1)] = 'WEBGL'),
      (E[(E.CANVAS = 2)] = 'CANVAS'),
      ((S = n || (n = {}))[(S.COLOR = 16384)] = 'COLOR'),
      (S[(S.DEPTH = 256)] = 'DEPTH'),
      (S[(S.STENCIL = 1024)] = 'STENCIL'),
      ((A = o || (o = {}))[(A.NORMAL = 0)] = 'NORMAL'),
      (A[(A.ADD = 1)] = 'ADD'),
      (A[(A.MULTIPLY = 2)] = 'MULTIPLY'),
      (A[(A.SCREEN = 3)] = 'SCREEN'),
      (A[(A.OVERLAY = 4)] = 'OVERLAY'),
      (A[(A.DARKEN = 5)] = 'DARKEN'),
      (A[(A.LIGHTEN = 6)] = 'LIGHTEN'),
      (A[(A.COLOR_DODGE = 7)] = 'COLOR_DODGE'),
      (A[(A.COLOR_BURN = 8)] = 'COLOR_BURN'),
      (A[(A.HARD_LIGHT = 9)] = 'HARD_LIGHT'),
      (A[(A.SOFT_LIGHT = 10)] = 'SOFT_LIGHT'),
      (A[(A.DIFFERENCE = 11)] = 'DIFFERENCE'),
      (A[(A.EXCLUSION = 12)] = 'EXCLUSION'),
      (A[(A.HUE = 13)] = 'HUE'),
      (A[(A.SATURATION = 14)] = 'SATURATION'),
      (A[(A.COLOR = 15)] = 'COLOR'),
      (A[(A.LUMINOSITY = 16)] = 'LUMINOSITY'),
      (A[(A.NORMAL_NPM = 17)] = 'NORMAL_NPM'),
      (A[(A.ADD_NPM = 18)] = 'ADD_NPM'),
      (A[(A.SCREEN_NPM = 19)] = 'SCREEN_NPM'),
      (A[(A.NONE = 20)] = 'NONE'),
      (A[(A.SRC_OVER = 0)] = 'SRC_OVER'),
      (A[(A.SRC_IN = 21)] = 'SRC_IN'),
      (A[(A.SRC_OUT = 22)] = 'SRC_OUT'),
      (A[(A.SRC_ATOP = 23)] = 'SRC_ATOP'),
      (A[(A.DST_OVER = 24)] = 'DST_OVER'),
      (A[(A.DST_IN = 25)] = 'DST_IN'),
      (A[(A.DST_OUT = 26)] = 'DST_OUT'),
      (A[(A.DST_ATOP = 27)] = 'DST_ATOP'),
      (A[(A.ERASE = 26)] = 'ERASE'),
      (A[(A.SUBTRACT = 28)] = 'SUBTRACT'),
      (A[(A.XOR = 29)] = 'XOR'),
      ((R = s || (s = {}))[(R.POINTS = 0)] = 'POINTS'),
      (R[(R.LINES = 1)] = 'LINES'),
      (R[(R.LINE_LOOP = 2)] = 'LINE_LOOP'),
      (R[(R.LINE_STRIP = 3)] = 'LINE_STRIP'),
      (R[(R.TRIANGLES = 4)] = 'TRIANGLES'),
      (R[(R.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
      (R[(R.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN'),
      ((O = a || (a = {}))[(O.RGBA = 6408)] = 'RGBA'),
      (O[(O.RGB = 6407)] = 'RGB'),
      (O[(O.RG = 33319)] = 'RG'),
      (O[(O.RED = 6403)] = 'RED'),
      (O[(O.RGBA_INTEGER = 36249)] = 'RGBA_INTEGER'),
      (O[(O.RGB_INTEGER = 36248)] = 'RGB_INTEGER'),
      (O[(O.RG_INTEGER = 33320)] = 'RG_INTEGER'),
      (O[(O.RED_INTEGER = 36244)] = 'RED_INTEGER'),
      (O[(O.ALPHA = 6406)] = 'ALPHA'),
      (O[(O.LUMINANCE = 6409)] = 'LUMINANCE'),
      (O[(O.LUMINANCE_ALPHA = 6410)] = 'LUMINANCE_ALPHA'),
      (O[(O.DEPTH_COMPONENT = 6402)] = 'DEPTH_COMPONENT'),
      (O[(O.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
      ((M = h || (h = {}))[(M.TEXTURE_2D = 3553)] = 'TEXTURE_2D'),
      (M[(M.TEXTURE_CUBE_MAP = 34067)] = 'TEXTURE_CUBE_MAP'),
      (M[(M.TEXTURE_2D_ARRAY = 35866)] = 'TEXTURE_2D_ARRAY'),
      (M[(M.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
        'TEXTURE_CUBE_MAP_POSITIVE_X'),
      (M[(M.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
        'TEXTURE_CUBE_MAP_NEGATIVE_X'),
      (M[(M.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
        'TEXTURE_CUBE_MAP_POSITIVE_Y'),
      (M[(M.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
        'TEXTURE_CUBE_MAP_NEGATIVE_Y'),
      (M[(M.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
        'TEXTURE_CUBE_MAP_POSITIVE_Z'),
      (M[(M.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
        'TEXTURE_CUBE_MAP_NEGATIVE_Z'),
      ((P = u || (u = {}))[(P.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
      (P[(P.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
      (P[(P.UNSIGNED_SHORT_5_6_5 = 33635)] = 'UNSIGNED_SHORT_5_6_5'),
      (P[(P.UNSIGNED_SHORT_4_4_4_4 = 32819)] = 'UNSIGNED_SHORT_4_4_4_4'),
      (P[(P.UNSIGNED_SHORT_5_5_5_1 = 32820)] = 'UNSIGNED_SHORT_5_5_5_1'),
      (P[(P.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
      (P[(P.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
        'UNSIGNED_INT_10F_11F_11F_REV'),
      (P[(P.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
        'UNSIGNED_INT_2_10_10_10_REV'),
      (P[(P.UNSIGNED_INT_24_8 = 34042)] = 'UNSIGNED_INT_24_8'),
      (P[(P.UNSIGNED_INT_5_9_9_9_REV = 35902)] = 'UNSIGNED_INT_5_9_9_9_REV'),
      (P[(P.BYTE = 5120)] = 'BYTE'),
      (P[(P.SHORT = 5122)] = 'SHORT'),
      (P[(P.INT = 5124)] = 'INT'),
      (P[(P.FLOAT = 5126)] = 'FLOAT'),
      (P[(P.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
        'FLOAT_32_UNSIGNED_INT_24_8_REV'),
      (P[(P.HALF_FLOAT = 36193)] = 'HALF_FLOAT'),
      ((I = l || (l = {}))[(I.FLOAT = 0)] = 'FLOAT'),
      (I[(I.INT = 1)] = 'INT'),
      (I[(I.UINT = 2)] = 'UINT'),
      ((D = c || (c = {}))[(D.NEAREST = 0)] = 'NEAREST'),
      (D[(D.LINEAR = 1)] = 'LINEAR'),
      ((C = p || (p = {}))[(C.CLAMP = 33071)] = 'CLAMP'),
      (C[(C.REPEAT = 10497)] = 'REPEAT'),
      (C[(C.MIRRORED_REPEAT = 33648)] = 'MIRRORED_REPEAT'),
      ((F = f || (f = {}))[(F.OFF = 0)] = 'OFF'),
      (F[(F.POW2 = 1)] = 'POW2'),
      (F[(F.ON = 2)] = 'ON'),
      (F[(F.ON_MANUAL = 3)] = 'ON_MANUAL'),
      ((N = d || (d = {}))[(N.NPM = 0)] = 'NPM'),
      (N[(N.UNPACK = 1)] = 'UNPACK'),
      (N[(N.PMA = 2)] = 'PMA'),
      (N[(N.NO_PREMULTIPLIED_ALPHA = 0)] = 'NO_PREMULTIPLIED_ALPHA'),
      (N[(N.PREMULTIPLY_ON_UPLOAD = 1)] = 'PREMULTIPLY_ON_UPLOAD'),
      (N[(N.PREMULTIPLY_ALPHA = 2)] = 'PREMULTIPLY_ALPHA'),
      (N[(N.PREMULTIPLIED_ALPHA = 2)] = 'PREMULTIPLIED_ALPHA'),
      ((L = _ || (_ = {}))[(L.NO = 0)] = 'NO'),
      (L[(L.YES = 1)] = 'YES'),
      (L[(L.AUTO = 2)] = 'AUTO'),
      (L[(L.BLEND = 0)] = 'BLEND'),
      (L[(L.CLEAR = 1)] = 'CLEAR'),
      (L[(L.BLIT = 2)] = 'BLIT'),
      ((B = y || (y = {}))[(B.AUTO = 0)] = 'AUTO'),
      (B[(B.MANUAL = 1)] = 'MANUAL'),
      ((G = v || (v = {})).LOW = 'lowp'),
      (G.MEDIUM = 'mediump'),
      (G.HIGH = 'highp'),
      ((U = m || (m = {}))[(U.NONE = 0)] = 'NONE'),
      (U[(U.SCISSOR = 1)] = 'SCISSOR'),
      (U[(U.STENCIL = 2)] = 'STENCIL'),
      (U[(U.SPRITE = 3)] = 'SPRITE'),
      (U[(U.COLOR = 4)] = 'COLOR'),
      ((k = g || (g = {}))[(k.RED = 1)] = 'RED'),
      (k[(k.GREEN = 2)] = 'GREEN'),
      (k[(k.BLUE = 4)] = 'BLUE'),
      (k[(k.ALPHA = 8)] = 'ALPHA'),
      ((X = b || (b = {}))[(X.NONE = 0)] = 'NONE'),
      (X[(X.LOW = 2)] = 'LOW'),
      (X[(X.MEDIUM = 4)] = 'MEDIUM'),
      (X[(X.HIGH = 8)] = 'HIGH'),
      ((j = x || (x = {}))[(j.ELEMENT_ARRAY_BUFFER = 34963)] =
        'ELEMENT_ARRAY_BUFFER'),
      (j[(j.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
      (j[(j.UNIFORM_BUFFER = 35345)] = 'UNIFORM_BUFFER');
  }),
  N('e70pz', function (t, e) {
    w(t.exports, 'url', () => a),
      w(t.exports, 'sayHello', () => l),
      w(t.exports, 'isWebGLSupported', () => c),
      w(t.exports, 'hex2rgb', () => f),
      w(t.exports, 'hex2string', () => d),
      w(t.exports, 'string2hex', () => _),
      w(t.exports, 'premultiplyBlendMode', () => y),
      w(t.exports, 'correctBlendMode', () => v),
      w(t.exports, 'premultiplyRgba', () => m),
      w(t.exports, 'premultiplyTint', () => g),
      w(t.exports, 'premultiplyTintToRgba', () => b),
      w(t.exports, 'createIndicesForQuads', () => x),
      w(t.exports, 'getBufferType', () => T),
      w(t.exports, 'nextPow2', () => E),
      w(t.exports, 'isPow2', () => S),
      w(t.exports, 'log2', () => A),
      w(t.exports, 'removeItems', () => R),
      w(t.exports, 'sign', () => O),
      w(t.exports, 'uid', () => P),
      w(t.exports, 'deprecation', () => C),
      w(t.exports, 'ProgramCache', () => N),
      w(t.exports, 'TextureCache', () => L),
      w(t.exports, 'BaseTextureCache', () => B),
      w(t.exports, 'CanvasRenderTarget', () => G),
      w(t.exports, 'trimCanvas', () => U),
      w(t.exports, 'determineCrossOrigin', () => k),
      w(t.exports, 'getResolutionOfUrl', () => X),
      w(t.exports, 'isMobile', () => F('8q0ed').isMobile),
      w(t.exports, 'EventEmitter', () => I(F('3vRz3'))),
      w(t.exports, 'earcut', () => I(F('2jYVZ')));
    /*!
     * @pixi/utils - v6.5.10
     * Compiled Thu, 06 Jul 2023 15:25:11 UTC
     *
     * @pixi/utils is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */ var r,
      i,
      n = F('8q0ed');
    F('3vRz3'), F('2jYVZ');
    var o = F('biuEp'),
      s = F('6n98C'),
      a = { parse: o.parse, format: o.format, resolve: o.resolve };
    (n.settings.RETINA_PREFIX = /@([0-9\.]+)x/),
      (n.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1);
    var h = !1,
      u = '6.5.10';
    function l(t) {
      var e;
      h ||
        ((0, n.settings).ADAPTER.getNavigator()
          .userAgent.toLowerCase()
          .indexOf('chrome') > -1
          ? (e = globalThis.console).log.apply(e, [
              '\n %c %c %c PixiJS ' +
                u +
                ' - ✰ ' +
                t +
                ' ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n',
              'background: #ff66a5; padding:5px 0;',
              'background: #ff66a5; padding:5px 0;',
              'color: #ff66a5; background: #030307; padding:5px 0;',
              'background: #ff66a5; padding:5px 0;',
              'background: #ffc3dc; padding:5px 0;',
              'background: #ff66a5; padding:5px 0;',
              'color: #ff2424; background: #fff; padding:5px 0;',
              'color: #ff2424; background: #fff; padding:5px 0;',
              'color: #ff2424; background: #fff; padding:5px 0;',
            ])
          : globalThis.console &&
            globalThis.console.log(
              'PixiJS ' + u + ' - ' + t + ' - http://www.pixijs.com/'
            ),
        (h = !0));
    }
    function c() {
      return (
        void 0 === r &&
          (r = (function () {
            var t = {
              stencil: !0,
              failIfMajorPerformanceCaveat:
                n.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
            };
            try {
              if (!(0, n.settings).ADAPTER.getWebGLRenderingContext())
                return !1;
              var e = (0, n.settings).ADAPTER.createCanvas(),
                r =
                  e.getContext('webgl', t) ||
                  e.getContext('experimental-webgl', t),
                i = !!(r && r.getContextAttributes().stencil);
              if (r) {
                var o = r.getExtension('WEBGL_lose_context');
                o && o.loseContext();
              }
              return (r = null), i;
            } catch (t) {
              return !1;
            }
          })()),
        r
      );
    }
    var p = {
      aliceblue: '#f0f8ff',
      antiquewhite: '#faebd7',
      aqua: '#00ffff',
      aquamarine: '#7fffd4',
      azure: '#f0ffff',
      beige: '#f5f5dc',
      bisque: '#ffe4c4',
      black: '#000000',
      blanchedalmond: '#ffebcd',
      blue: '#0000ff',
      blueviolet: '#8a2be2',
      brown: '#a52a2a',
      burlywood: '#deb887',
      cadetblue: '#5f9ea0',
      chartreuse: '#7fff00',
      chocolate: '#d2691e',
      coral: '#ff7f50',
      cornflowerblue: '#6495ed',
      cornsilk: '#fff8dc',
      crimson: '#dc143c',
      cyan: '#00ffff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkgray: '#a9a9a9',
      darkgreen: '#006400',
      darkgrey: '#a9a9a9',
      darkkhaki: '#bdb76b',
      darkmagenta: '#8b008b',
      darkolivegreen: '#556b2f',
      darkorange: '#ff8c00',
      darkorchid: '#9932cc',
      darkred: '#8b0000',
      darksalmon: '#e9967a',
      darkseagreen: '#8fbc8f',
      darkslateblue: '#483d8b',
      darkslategray: '#2f4f4f',
      darkslategrey: '#2f4f4f',
      darkturquoise: '#00ced1',
      darkviolet: '#9400d3',
      deeppink: '#ff1493',
      deepskyblue: '#00bfff',
      dimgray: '#696969',
      dimgrey: '#696969',
      dodgerblue: '#1e90ff',
      firebrick: '#b22222',
      floralwhite: '#fffaf0',
      forestgreen: '#228b22',
      fuchsia: '#ff00ff',
      gainsboro: '#dcdcdc',
      ghostwhite: '#f8f8ff',
      goldenrod: '#daa520',
      gold: '#ffd700',
      gray: '#808080',
      green: '#008000',
      greenyellow: '#adff2f',
      grey: '#808080',
      honeydew: '#f0fff0',
      hotpink: '#ff69b4',
      indianred: '#cd5c5c',
      indigo: '#4b0082',
      ivory: '#fffff0',
      khaki: '#f0e68c',
      lavenderblush: '#fff0f5',
      lavender: '#e6e6fa',
      lawngreen: '#7cfc00',
      lemonchiffon: '#fffacd',
      lightblue: '#add8e6',
      lightcoral: '#f08080',
      lightcyan: '#e0ffff',
      lightgoldenrodyellow: '#fafad2',
      lightgray: '#d3d3d3',
      lightgreen: '#90ee90',
      lightgrey: '#d3d3d3',
      lightpink: '#ffb6c1',
      lightsalmon: '#ffa07a',
      lightseagreen: '#20b2aa',
      lightskyblue: '#87cefa',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      lightsteelblue: '#b0c4de',
      lightyellow: '#ffffe0',
      lime: '#00ff00',
      limegreen: '#32cd32',
      linen: '#faf0e6',
      magenta: '#ff00ff',
      maroon: '#800000',
      mediumaquamarine: '#66cdaa',
      mediumblue: '#0000cd',
      mediumorchid: '#ba55d3',
      mediumpurple: '#9370db',
      mediumseagreen: '#3cb371',
      mediumslateblue: '#7b68ee',
      mediumspringgreen: '#00fa9a',
      mediumturquoise: '#48d1cc',
      mediumvioletred: '#c71585',
      midnightblue: '#191970',
      mintcream: '#f5fffa',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      navajowhite: '#ffdead',
      navy: '#000080',
      oldlace: '#fdf5e6',
      olive: '#808000',
      olivedrab: '#6b8e23',
      orange: '#ffa500',
      orangered: '#ff4500',
      orchid: '#da70d6',
      palegoldenrod: '#eee8aa',
      palegreen: '#98fb98',
      paleturquoise: '#afeeee',
      palevioletred: '#db7093',
      papayawhip: '#ffefd5',
      peachpuff: '#ffdab9',
      peru: '#cd853f',
      pink: '#ffc0cb',
      plum: '#dda0dd',
      powderblue: '#b0e0e6',
      purple: '#800080',
      rebeccapurple: '#663399',
      red: '#ff0000',
      rosybrown: '#bc8f8f',
      royalblue: '#4169e1',
      saddlebrown: '#8b4513',
      salmon: '#fa8072',
      sandybrown: '#f4a460',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      sienna: '#a0522d',
      silver: '#c0c0c0',
      skyblue: '#87ceeb',
      slateblue: '#6a5acd',
      slategray: '#708090',
      slategrey: '#708090',
      snow: '#fffafa',
      springgreen: '#00ff7f',
      steelblue: '#4682b4',
      tan: '#d2b48c',
      teal: '#008080',
      thistle: '#d8bfd8',
      tomato: '#ff6347',
      turquoise: '#40e0d0',
      violet: '#ee82ee',
      wheat: '#f5deb3',
      white: '#ffffff',
      whitesmoke: '#f5f5f5',
      yellow: '#ffff00',
      yellowgreen: '#9acd32',
    };
    function f(t, e) {
      return (
        void 0 === e && (e = []),
        (e[0] = ((t >> 16) & 255) / 255),
        (e[1] = ((t >> 8) & 255) / 255),
        (e[2] = (255 & t) / 255),
        e
      );
    }
    function d(t) {
      var e = t.toString(16);
      return '#' + (e = '000000'.substring(0, 6 - e.length) + e);
    }
    function _(t) {
      return (
        'string' == typeof t &&
          '#' === (t = p[t.toLowerCase()] || t)[0] &&
          (t = t.slice(1)),
        parseInt(t, 16)
      );
    }
    var y = (function () {
      for (var t = [], e = [], r = 0; r < 32; r++) (t[r] = r), (e[r] = r);
      (t[s.BLEND_MODES.NORMAL_NPM] = s.BLEND_MODES.NORMAL),
        (t[s.BLEND_MODES.ADD_NPM] = s.BLEND_MODES.ADD),
        (t[s.BLEND_MODES.SCREEN_NPM] = s.BLEND_MODES.SCREEN),
        (e[s.BLEND_MODES.NORMAL] = s.BLEND_MODES.NORMAL_NPM),
        (e[s.BLEND_MODES.ADD] = s.BLEND_MODES.ADD_NPM),
        (e[s.BLEND_MODES.SCREEN] = s.BLEND_MODES.SCREEN_NPM);
      var i = [];
      return i.push(e), i.push(t), i;
    })();
    function v(t, e) {
      return y[e ? 1 : 0][t];
    }
    function m(t, e, r, i) {
      return (
        (r = r || new Float32Array(4)),
        i || void 0 === i
          ? ((r[0] = t[0] * e), (r[1] = t[1] * e), (r[2] = t[2] * e))
          : ((r[0] = t[0]), (r[1] = t[1]), (r[2] = t[2])),
        (r[3] = e),
        r
      );
    }
    function g(t, e) {
      if (1 === e) return ((255 * e) << 24) + t;
      if (0 === e) return 0;
      var r = (t >> 16) & 255,
        i = (t >> 8) & 255,
        n = 255 & t;
      return (
        (r = (r * e + 0.5) | 0),
        (i = (i * e + 0.5) | 0),
        (n = (n * e + 0.5) | 0),
        ((255 * e) << 24) + (r << 16) + (i << 8) + n
      );
    }
    function b(t, e, r, i) {
      return (
        ((r = r || new Float32Array(4))[0] = ((t >> 16) & 255) / 255),
        (r[1] = ((t >> 8) & 255) / 255),
        (r[2] = (255 & t) / 255),
        (i || void 0 === i) && ((r[0] *= e), (r[1] *= e), (r[2] *= e)),
        (r[3] = e),
        r
      );
    }
    function x(t, e) {
      void 0 === e && (e = null);
      var r = 6 * t;
      if ((e = e || new Uint16Array(r)).length !== r)
        throw Error(
          'Out buffer length is incorrect, got ' +
            e.length +
            ' and expected ' +
            r
        );
      for (var i = 0, n = 0; i < r; i += 6, n += 4)
        (e[i + 0] = n + 0),
          (e[i + 1] = n + 1),
          (e[i + 2] = n + 2),
          (e[i + 3] = n + 0),
          (e[i + 4] = n + 2),
          (e[i + 5] = n + 3);
      return e;
    }
    function T(t) {
      if (4 === t.BYTES_PER_ELEMENT)
        return t instanceof Float32Array
          ? 'Float32Array'
          : t instanceof Uint32Array
          ? 'Uint32Array'
          : 'Int32Array';
      if (2 === t.BYTES_PER_ELEMENT) {
        if (t instanceof Uint16Array) return 'Uint16Array';
      } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return 'Uint8Array';
      return null;
    }
    function E(t) {
      return (
        (t += 0 === t ? 1 : 0),
        --t,
        (t |= t >>> 1),
        (t |= t >>> 2),
        (t |= t >>> 4),
        (t |= t >>> 8),
        (t |= t >>> 16) + 1
      );
    }
    function S(t) {
      return !(t & (t - 1)) && !!t;
    }
    function A(t) {
      var e = (t > 65535 ? 1 : 0) << 4,
        r = ((t >>>= e) > 255 ? 1 : 0) << 3;
      return (
        (t >>>= r),
        (e |= r),
        (r = (t > 15 ? 1 : 0) << 2),
        (t >>>= r),
        (e |= r),
        (r = (t > 3 ? 1 : 0) << 1),
        (t >>>= r),
        (e |= r) | (t >> 1)
      );
    }
    function R(t, e, r) {
      var i,
        n = t.length;
      if (!(e >= n) && 0 !== r) {
        r = e + r > n ? n - e : r;
        var o = n - r;
        for (i = e; i < o; ++i) t[i] = t[i + r];
        t.length = o;
      }
    }
    function O(t) {
      return 0 === t ? 0 : t < 0 ? -1 : 1;
    }
    Float32Array, Uint32Array, Int32Array, Uint8Array;
    var M = 0;
    function P() {
      return ++M;
    }
    var D = {};
    function C(t, e, r) {
      if ((void 0 === r && (r = 3), !D[e])) {
        var i = Error().stack;
        void 0 === i
          ? console.warn(
              'PixiJS Deprecation Warning: ',
              e + '\nDeprecated since v' + t
            )
          : ((i = i.split('\n').splice(r).join('\n')),
            console.groupCollapsed
              ? (console.groupCollapsed(
                  '%cPixiJS Deprecation Warning: %c%s',
                  'color:#614108;background:#fffbe6',
                  'font-weight:normal;color:#614108;background:#fffbe6',
                  e + '\nDeprecated since v' + t
                ),
                console.warn(i),
                console.groupEnd())
              : (console.warn(
                  'PixiJS Deprecation Warning: ',
                  e + '\nDeprecated since v' + t
                ),
                console.warn(i))),
          (D[e] = !0);
      }
    }
    var N = {},
      L = Object.create(null),
      B = Object.create(null),
      G = (function () {
        function t(t, e, r) {
          (this.canvas = (0, n.settings).ADAPTER.createCanvas()),
            (this.context = this.canvas.getContext('2d')),
            (this.resolution = r || n.settings.RESOLUTION),
            this.resize(t, e);
        }
        return (
          (t.prototype.clear = function () {
            this.context.setTransform(1, 0, 0, 1, 0, 0),
              this.context.clearRect(
                0,
                0,
                this.canvas.width,
                this.canvas.height
              );
          }),
          (t.prototype.resize = function (t, e) {
            (this.canvas.width = Math.round(t * this.resolution)),
              (this.canvas.height = Math.round(e * this.resolution));
          }),
          (t.prototype.destroy = function () {
            (this.context = null), (this.canvas = null);
          }),
          Object.defineProperty(t.prototype, 'width', {
            get: function () {
              return this.canvas.width;
            },
            set: function (t) {
              this.canvas.width = Math.round(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'height', {
            get: function () {
              return this.canvas.height;
            },
            set: function (t) {
              this.canvas.height = Math.round(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })();
    function U(t) {
      var e,
        r,
        i,
        n = t.width,
        o = t.height,
        s = t.getContext('2d', { willReadFrequently: !0 }),
        a = s.getImageData(0, 0, n, o).data,
        h = a.length,
        u = { top: null, left: null, right: null, bottom: null },
        l = null;
      for (e = 0; e < h; e += 4)
        0 !== a[e + 3] &&
          ((r = (e / 4) % n),
          (i = ~~(e / 4 / n)),
          null === u.top && (u.top = i),
          null === u.left ? (u.left = r) : r < u.left && (u.left = r),
          null === u.right
            ? (u.right = r + 1)
            : u.right < r && (u.right = r + 1),
          null === u.bottom ? (u.bottom = i) : u.bottom < i && (u.bottom = i));
      return (
        null !== u.top &&
          ((n = u.right - u.left),
          (o = u.bottom - u.top + 1),
          (l = s.getImageData(u.left, u.top, n, o))),
        { height: o, width: n, data: l }
      );
    }
    function k(t, e) {
      if ((void 0 === e && (e = globalThis.location), 0 === t.indexOf('data:')))
        return '';
      (e = e || globalThis.location),
        i || (i = document.createElement('a')),
        (i.href = t);
      var r = a.parse(i.href),
        n = (!r.port && '' === e.port) || r.port === e.port;
      return r.hostname === e.hostname && n && r.protocol === e.protocol
        ? ''
        : 'anonymous';
    }
    function X(t, e) {
      var r = (0, n.settings).RETINA_PREFIX.exec(t);
      return r ? parseFloat(r[1]) : void 0 !== e ? e : 1;
    }
  }),
  N('3vRz3', function (t, e) {
    var r = Object.prototype.hasOwnProperty,
      i = '~';
    function n() {}
    function o(t, e, r) {
      (this.fn = t), (this.context = e), (this.once = r || !1);
    }
    function s(t, e, r, n, s) {
      if ('function' != typeof r)
        throw TypeError('The listener must be a function');
      var a = new o(r, n || t, s),
        h = i ? i + e : e;
      return (
        t._events[h]
          ? t._events[h].fn
            ? (t._events[h] = [t._events[h], a])
            : t._events[h].push(a)
          : ((t._events[h] = a), t._eventsCount++),
        t
      );
    }
    function a(t, e) {
      0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
    }
    function h() {
      (this._events = new n()), (this._eventsCount = 0);
    }
    Object.create &&
      ((n.prototype = Object.create(null)), new n().__proto__ || (i = !1)),
      (h.prototype.eventNames = function () {
        var t,
          e,
          n = [];
        if (0 === this._eventsCount) return n;
        for (e in (t = this._events))
          r.call(t, e) && n.push(i ? e.slice(1) : e);
        return Object.getOwnPropertySymbols
          ? n.concat(Object.getOwnPropertySymbols(t))
          : n;
      }),
      (h.prototype.listeners = function (t) {
        var e = i ? i + t : t,
          r = this._events[e];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, o = r.length, s = Array(o); n < o; n++) s[n] = r[n].fn;
        return s;
      }),
      (h.prototype.listenerCount = function (t) {
        var e = i ? i + t : t,
          r = this._events[e];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (h.prototype.emit = function (t, e, r, n, o, s) {
        var a = i ? i + t : t;
        if (!this._events[a]) return !1;
        var h,
          u,
          l = this._events[a],
          c = arguments.length;
        if (l.fn) {
          switch ((l.once && this.removeListener(t, l.fn, void 0, !0), c)) {
            case 1:
              return l.fn.call(l.context), !0;
            case 2:
              return l.fn.call(l.context, e), !0;
            case 3:
              return l.fn.call(l.context, e, r), !0;
            case 4:
              return l.fn.call(l.context, e, r, n), !0;
            case 5:
              return l.fn.call(l.context, e, r, n, o), !0;
            case 6:
              return l.fn.call(l.context, e, r, n, o, s), !0;
          }
          for (u = 1, h = Array(c - 1); u < c; u++) h[u - 1] = arguments[u];
          l.fn.apply(l.context, h);
        } else {
          var p,
            f = l.length;
          for (u = 0; u < f; u++)
            switch (
              (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), c)
            ) {
              case 1:
                l[u].fn.call(l[u].context);
                break;
              case 2:
                l[u].fn.call(l[u].context, e);
                break;
              case 3:
                l[u].fn.call(l[u].context, e, r);
                break;
              case 4:
                l[u].fn.call(l[u].context, e, r, n);
                break;
              default:
                if (!h)
                  for (p = 1, h = Array(c - 1); p < c; p++)
                    h[p - 1] = arguments[p];
                l[u].fn.apply(l[u].context, h);
            }
        }
        return !0;
      }),
      (h.prototype.on = function (t, e, r) {
        return s(this, t, e, r, !1);
      }),
      (h.prototype.once = function (t, e, r) {
        return s(this, t, e, r, !0);
      }),
      (h.prototype.removeListener = function (t, e, r, n) {
        var o = i ? i + t : t;
        if (!this._events[o]) return this;
        if (!e) return a(this, o), this;
        var s = this._events[o];
        if (s.fn)
          s.fn !== e || (n && !s.once) || (r && s.context !== r) || a(this, o);
        else {
          for (var h = 0, u = [], l = s.length; h < l; h++)
            (s[h].fn !== e || (n && !s[h].once) || (r && s[h].context !== r)) &&
              u.push(s[h]);
          u.length ? (this._events[o] = 1 === u.length ? u[0] : u) : a(this, o);
        }
        return this;
      }),
      (h.prototype.removeAllListeners = function (t) {
        var e;
        return (
          t
            ? ((e = i ? i + t : t), this._events[e] && a(this, e))
            : ((this._events = new n()), (this._eventsCount = 0)),
          this
        );
      }),
      (h.prototype.off = h.prototype.removeListener),
      (h.prototype.addListener = h.prototype.on),
      (h.prefixed = i),
      (h.EventEmitter = h),
      (t.exports = h);
  }),
  N('2jYVZ', function (t, e) {
    function r(t, e, r) {
      r = r || 2;
      var c,
        p,
        _,
        v,
        m,
        g,
        b,
        x = e && e.length,
        T = x ? e[0] * r : t.length,
        E = i(t, 0, T, r, !0),
        S = [];
      if (!E || E.next === E.prev) return S;
      if (
        (x &&
          (E = (function (t, e, r, s) {
            var u,
              l,
              c,
              p,
              _,
              y = [];
            for (u = 0, l = e.length; u < l; u++)
              (c = e[u] * s),
                (p = u < l - 1 ? e[u + 1] * s : t.length),
                (_ = i(t, c, p, s, !1)) === _.next && (_.steiner = !0),
                y.push(
                  (function (t) {
                    var e = t,
                      r = t;
                    do
                      (e.x < r.x || (e.x === r.x && e.y < r.y)) && (r = e),
                        (e = e.next);
                    while (e !== t);
                    return r;
                  })(_)
                );
            for (y.sort(o), u = 0; u < y.length; u++)
              r = (function (t, e) {
                var r = (function (t, e) {
                  var r,
                    i,
                    n,
                    o = e,
                    s = t.x,
                    u = t.y,
                    l = -1 / 0;
                  do {
                    if (u <= o.y && u >= o.next.y && o.next.y !== o.y) {
                      var c =
                        o.x + ((u - o.y) * (o.next.x - o.x)) / (o.next.y - o.y);
                      if (
                        c <= s &&
                        c > l &&
                        ((l = c), (n = o.x < o.next.x ? o : o.next), c === s)
                      )
                        return n;
                    }
                    o = o.next;
                  } while (o !== e);
                  if (!n) return null;
                  var p,
                    d = n,
                    _ = n.x,
                    y = n.y,
                    v = 1 / 0;
                  o = n;
                  do
                    s >= o.x &&
                      o.x >= _ &&
                      s !== o.x &&
                      a(u < y ? s : l, u, _, y, u < y ? l : s, u, o.x, o.y) &&
                      ((p = Math.abs(u - o.y) / (s - o.x)),
                      f(o, t) &&
                        (p < v ||
                          (p === v &&
                            (o.x > n.x ||
                              (o.x === n.x &&
                                ((r = n),
                                (i = o),
                                0 > h(r.prev, r, i.prev) &&
                                  0 > h(i.next, r, r.next)))))) &&
                        ((n = o), (v = p))),
                      (o = o.next);
                  while (o !== d);
                  return n;
                })(t, e);
                if (!r) return e;
                var i = d(r, t);
                return n(i, i.next), n(r, r.next);
              })(y[u], r);
            return r;
          })(t, e, E, r)),
        t.length > 80 * r)
      ) {
        (c = _ = t[0]), (p = v = t[1]);
        for (var A = r; A < T; A += r)
          (m = t[A]),
            (g = t[A + 1]),
            m < c && (c = m),
            g < p && (p = g),
            m > _ && (_ = m),
            g > v && (v = g);
        b = 0 !== (b = Math.max(_ - c, v - p)) ? 32767 / b : 0;
      }
      return (
        (function t(e, r, i, o, c, p, _) {
          if (e) {
            !_ &&
              p &&
              (function (t, e, r, i) {
                var n = t;
                do
                  0 === n.z && (n.z = s(n.x, n.y, e, r, i)),
                    (n.prevZ = n.prev),
                    (n.nextZ = n.next),
                    (n = n.next);
                while (n !== t);
                (n.prevZ.nextZ = null),
                  (n.prevZ = null),
                  (function (t) {
                    var e,
                      r,
                      i,
                      n,
                      o,
                      s,
                      a,
                      h,
                      u = 1;
                    do {
                      for (r = t, t = null, o = null, s = 0; r; ) {
                        for (
                          s++, i = r, a = 0, e = 0;
                          e < u && (a++, (i = i.nextZ));
                          e++
                        );
                        for (h = u; a > 0 || (h > 0 && i); )
                          0 !== a && (0 === h || !i || r.z <= i.z)
                            ? ((n = r), (r = r.nextZ), a--)
                            : ((n = i), (i = i.nextZ), h--),
                            o ? (o.nextZ = n) : (t = n),
                            (n.prevZ = o),
                            (o = n);
                        r = i;
                      }
                      (o.nextZ = null), (u *= 2);
                    } while (s > 1);
                  })(n);
              })(e, o, c, p);
            for (var v, m, g = e; e.prev !== e.next; ) {
              if (
                ((v = e.prev),
                (m = e.next),
                p
                  ? (function (t, e, r, i) {
                      var n = t.prev,
                        o = t.next;
                      if (h(n, t, o) >= 0) return !1;
                      for (
                        var u = n.x,
                          l = t.x,
                          c = o.x,
                          p = n.y,
                          f = t.y,
                          d = o.y,
                          _ = u < l ? (u < c ? u : c) : l < c ? l : c,
                          y = p < f ? (p < d ? p : d) : f < d ? f : d,
                          v = u > l ? (u > c ? u : c) : l > c ? l : c,
                          m = p > f ? (p > d ? p : d) : f > d ? f : d,
                          g = s(_, y, e, r, i),
                          b = s(v, m, e, r, i),
                          x = t.prevZ,
                          T = t.nextZ;
                        x && x.z >= g && T && T.z <= b;

                      ) {
                        if (
                          (x.x >= _ &&
                            x.x <= v &&
                            x.y >= y &&
                            x.y <= m &&
                            x !== n &&
                            x !== o &&
                            a(u, p, l, f, c, d, x.x, x.y) &&
                            h(x.prev, x, x.next) >= 0) ||
                          ((x = x.prevZ),
                          T.x >= _ &&
                            T.x <= v &&
                            T.y >= y &&
                            T.y <= m &&
                            T !== n &&
                            T !== o &&
                            a(u, p, l, f, c, d, T.x, T.y) &&
                            h(T.prev, T, T.next) >= 0)
                        )
                          return !1;
                        T = T.nextZ;
                      }
                      for (; x && x.z >= g; ) {
                        if (
                          x.x >= _ &&
                          x.x <= v &&
                          x.y >= y &&
                          x.y <= m &&
                          x !== n &&
                          x !== o &&
                          a(u, p, l, f, c, d, x.x, x.y) &&
                          h(x.prev, x, x.next) >= 0
                        )
                          return !1;
                        x = x.prevZ;
                      }
                      for (; T && T.z <= b; ) {
                        if (
                          T.x >= _ &&
                          T.x <= v &&
                          T.y >= y &&
                          T.y <= m &&
                          T !== n &&
                          T !== o &&
                          a(u, p, l, f, c, d, T.x, T.y) &&
                          h(T.prev, T, T.next) >= 0
                        )
                          return !1;
                        T = T.nextZ;
                      }
                      return !0;
                    })(e, o, c, p)
                  : (function (t) {
                      var e = t.prev,
                        r = t.next;
                      if (h(e, t, r) >= 0) return !1;
                      for (
                        var i = e.x,
                          n = t.x,
                          o = r.x,
                          s = e.y,
                          u = t.y,
                          l = r.y,
                          c = i < n ? (i < o ? i : o) : n < o ? n : o,
                          p = s < u ? (s < l ? s : l) : u < l ? u : l,
                          f = i > n ? (i > o ? i : o) : n > o ? n : o,
                          d = s > u ? (s > l ? s : l) : u > l ? u : l,
                          _ = r.next;
                        _ !== e;

                      ) {
                        if (
                          _.x >= c &&
                          _.x <= f &&
                          _.y >= p &&
                          _.y <= d &&
                          a(i, s, n, u, o, l, _.x, _.y) &&
                          h(_.prev, _, _.next) >= 0
                        )
                          return !1;
                        _ = _.next;
                      }
                      return !0;
                    })(e))
              ) {
                r.push((v.i / i) | 0),
                  r.push((e.i / i) | 0),
                  r.push((m.i / i) | 0),
                  y(e),
                  (e = m.next),
                  (g = m.next);
                continue;
              }
              if ((e = m) === g) {
                _
                  ? 1 === _
                    ? t(
                        (e = (function (t, e, r) {
                          var i = t;
                          do {
                            var o = i.prev,
                              s = i.next.next;
                            !u(o, s) &&
                              l(o, i, i.next, s) &&
                              f(o, s) &&
                              f(s, o) &&
                              (e.push((o.i / r) | 0),
                              e.push((i.i / r) | 0),
                              e.push((s.i / r) | 0),
                              y(i),
                              y(i.next),
                              (i = t = s)),
                              (i = i.next);
                          } while (i !== t);
                          return n(i);
                        })(n(e), r, i)),
                        r,
                        i,
                        o,
                        c,
                        p,
                        2
                      )
                    : 2 === _ &&
                      (function (e, r, i, o, s, a) {
                        var c = e;
                        do {
                          for (var p, _, y = c.next.next; y !== c.prev; ) {
                            if (
                              c.i !== y.i &&
                              ((p = c),
                              (_ = y),
                              p.next.i !== _.i &&
                                p.prev.i !== _.i &&
                                !(function (t, e) {
                                  var r = t;
                                  do {
                                    if (
                                      r.i !== t.i &&
                                      r.next.i !== t.i &&
                                      r.i !== e.i &&
                                      r.next.i !== e.i &&
                                      l(r, r.next, t, e)
                                    )
                                      return !0;
                                    r = r.next;
                                  } while (r !== t);
                                  return !1;
                                })(p, _) &&
                                ((f(p, _) &&
                                  f(_, p) &&
                                  (function (t, e) {
                                    var r = t,
                                      i = !1,
                                      n = (t.x + e.x) / 2,
                                      o = (t.y + e.y) / 2;
                                    do
                                      r.y > o != r.next.y > o &&
                                        r.next.y !== r.y &&
                                        n <
                                          ((r.next.x - r.x) * (o - r.y)) /
                                            (r.next.y - r.y) +
                                            r.x &&
                                        (i = !i),
                                        (r = r.next);
                                    while (r !== t);
                                    return i;
                                  })(p, _) &&
                                  (h(p.prev, p, _.prev) || h(p, _.prev, _))) ||
                                  (u(p, _) &&
                                    h(p.prev, p, p.next) > 0 &&
                                    h(_.prev, _, _.next) > 0)))
                            ) {
                              var v = d(c, y);
                              (c = n(c, c.next)),
                                (v = n(v, v.next)),
                                t(c, r, i, o, s, a, 0),
                                t(v, r, i, o, s, a, 0);
                              return;
                            }
                            y = y.next;
                          }
                          c = c.next;
                        } while (c !== e);
                      })(e, r, i, o, c, p)
                  : t(n(e), r, i, o, c, p, 1);
                break;
              }
            }
          }
        })(E, S, r, c, p, b, 0),
        S
      );
    }
    function i(t, e, r, i, n) {
      var o, s;
      if (n === m(t, e, r, i) > 0)
        for (o = e; o < r; o += i) s = _(o, t[o], t[o + 1], s);
      else for (o = r - i; o >= e; o -= i) s = _(o, t[o], t[o + 1], s);
      return s && u(s, s.next) && (y(s), (s = s.next)), s;
    }
    function n(t, e) {
      if (!t) return t;
      e || (e = t);
      var r,
        i = t;
      do
        if (
          ((r = !1), !i.steiner && (u(i, i.next) || 0 === h(i.prev, i, i.next)))
        ) {
          if ((y(i), (i = e = i.prev) === i.next)) break;
          r = !0;
        } else i = i.next;
      while (r || i !== e);
      return e;
    }
    function o(t, e) {
      return t.x - e.x;
    }
    function s(t, e, r, i, n) {
      return (
        (t =
          ((t =
            ((t =
              ((t = ((t = ((t - r) * n) | 0) | (t << 8)) & 16711935) |
                (t << 4)) &
              252645135) |
              (t << 2)) &
            858993459) |
            (t << 1)) &
          1431655765) |
        ((e =
          ((e =
            ((e =
              ((e = ((e = ((e - i) * n) | 0) | (e << 8)) & 16711935) |
                (e << 4)) &
              252645135) |
              (e << 2)) &
            858993459) |
            (e << 1)) &
          1431655765) <<
          1)
      );
    }
    function a(t, e, r, i, n, o, s, a) {
      return (
        (n - s) * (e - a) >= (t - s) * (o - a) &&
        (t - s) * (i - a) >= (r - s) * (e - a) &&
        (r - s) * (o - a) >= (n - s) * (i - a)
      );
    }
    function h(t, e, r) {
      return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y);
    }
    function u(t, e) {
      return t.x === e.x && t.y === e.y;
    }
    function l(t, e, r, i) {
      var n = p(h(t, e, r)),
        o = p(h(t, e, i)),
        s = p(h(r, i, t)),
        a = p(h(r, i, e));
      return !!(
        (n !== o && s !== a) ||
        (0 === n && c(t, r, e)) ||
        (0 === o && c(t, i, e)) ||
        (0 === s && c(r, t, i)) ||
        (0 === a && c(r, e, i))
      );
    }
    function c(t, e, r) {
      return (
        e.x <= Math.max(t.x, r.x) &&
        e.x >= Math.min(t.x, r.x) &&
        e.y <= Math.max(t.y, r.y) &&
        e.y >= Math.min(t.y, r.y)
      );
    }
    function p(t) {
      return t > 0 ? 1 : t < 0 ? -1 : 0;
    }
    function f(t, e) {
      return 0 > h(t.prev, t, t.next)
        ? h(t, e, t.next) >= 0 && h(t, t.prev, e) >= 0
        : 0 > h(t, e, t.prev) || 0 > h(t, t.next, e);
    }
    function d(t, e) {
      var r = new v(t.i, t.x, t.y),
        i = new v(e.i, e.x, e.y),
        n = t.next,
        o = e.prev;
      return (
        (t.next = e),
        (e.prev = t),
        (r.next = n),
        (n.prev = r),
        (i.next = r),
        (r.prev = i),
        (o.next = i),
        (i.prev = o),
        i
      );
    }
    function _(t, e, r, i) {
      var n = new v(t, e, r);
      return (
        i
          ? ((n.next = i.next), (n.prev = i), (i.next.prev = n), (i.next = n))
          : ((n.prev = n), (n.next = n)),
        n
      );
    }
    function y(t) {
      (t.next.prev = t.prev),
        (t.prev.next = t.next),
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function v(t, e, r) {
      (this.i = t),
        (this.x = e),
        (this.y = r),
        (this.prev = null),
        (this.next = null),
        (this.z = 0),
        (this.prevZ = null),
        (this.nextZ = null),
        (this.steiner = !1);
    }
    function m(t, e, r, i) {
      for (var n = 0, o = e, s = r - i; o < r; o += i)
        (n += (t[s] - t[o]) * (t[o + 1] + t[s + 1])), (s = o);
      return n;
    }
    (t.exports = r),
      (t.exports.default = r),
      (r.deviation = function (t, e, r, i) {
        var n = e && e.length,
          o = n ? e[0] * r : t.length,
          s = Math.abs(m(t, 0, o, r));
        if (n)
          for (var a = 0, h = e.length; a < h; a++) {
            var u = e[a] * r,
              l = a < h - 1 ? e[a + 1] * r : t.length;
            s -= Math.abs(m(t, u, l, r));
          }
        var c = 0;
        for (a = 0; a < i.length; a += 3) {
          var p = i[a] * r,
            f = i[a + 1] * r,
            d = i[a + 2] * r;
          c += Math.abs(
            (t[p] - t[d]) * (t[f + 1] - t[p + 1]) -
              (t[p] - t[f]) * (t[d + 1] - t[p + 1])
          );
        }
        return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s);
      }),
      (r.flatten = function (t) {
        for (
          var e = t[0][0].length,
            r = { vertices: [], holes: [], dimensions: e },
            i = 0,
            n = 0;
          n < t.length;
          n++
        ) {
          for (var o = 0; o < t[n].length; o++)
            for (var s = 0; s < e; s++) r.vertices.push(t[n][o][s]);
          n > 0 && ((i += t[n - 1].length), r.holes.push(i));
        }
        return r;
      });
  }),
  N('7CNFb', function (t, e) {
    w(t.exports, 'ExtensionType', () => i), w(t.exports, 'extensions', () => s);
    /*!
     * @pixi/extensions - v6.5.10
     * Compiled Thu, 06 Jul 2023 15:25:11 UTC
     *
     * @pixi/extensions is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var r,
      i,
      n = function () {
        return (n =
          Object.assign ||
          function (t) {
            for (var e, r = arguments, i = 1, n = arguments.length; i < n; i++)
              for (var o in (e = r[i]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
    ((r = i || (i = {})).Application = 'application'),
      (r.RendererPlugin = 'renderer-webgl-plugin'),
      (r.CanvasRendererPlugin = 'renderer-canvas-plugin'),
      (r.Loader = 'loader'),
      (r.LoadParser = 'load-parser'),
      (r.ResolveParser = 'resolve-parser'),
      (r.CacheParser = 'cache-parser'),
      (r.DetectionParser = 'detection-parser');
    var o = function (t) {
        if ('function' == typeof t || ('object' == typeof t && t.extension)) {
          if (!t.extension)
            throw Error('Extension class must have an extension object');
          var e =
            'object' != typeof t.extension
              ? { type: t.extension }
              : t.extension;
          t = n(n({}, e), { ref: t });
        }
        if ('object' == typeof t) t = n({}, t);
        else throw Error('Invalid extension type');
        return 'string' == typeof t.type && (t.type = [t.type]), t;
      },
      s = {
        _addHandlers: null,
        _removeHandlers: null,
        _queue: {},
        remove: function () {
          for (
            var t = arguments, e = this, r = [], i = 0;
            i < arguments.length;
            i++
          )
            r[i] = t[i];
          return (
            r.map(o).forEach(function (t) {
              t.type.forEach(function (r) {
                var i, n;
                return null === (n = (i = e._removeHandlers)[r]) || void 0 === n
                  ? void 0
                  : n.call(i, t);
              });
            }),
            this
          );
        },
        add: function () {
          for (
            var t = arguments, e = this, r = [], i = 0;
            i < arguments.length;
            i++
          )
            r[i] = t[i];
          return (
            r.map(o).forEach(function (t) {
              t.type.forEach(function (r) {
                var i = e._addHandlers,
                  n = e._queue;
                i[r] ? i[r](t) : ((n[r] = n[r] || []), n[r].push(t));
              });
            }),
            this
          );
        },
        handle: function (t, e, r) {
          var i = (this._addHandlers = this._addHandlers || {}),
            n = (this._removeHandlers = this._removeHandlers || {});
          if (i[t] || n[t])
            throw Error('Extension type ' + t + ' already has a handler');
          (i[t] = e), (n[t] = r);
          var o = this._queue;
          return (
            o[t] &&
              (o[t].forEach(function (t) {
                return e(t);
              }),
              delete o[t]),
            this
          );
        },
        handleByMap: function (t, e) {
          return this.handle(
            t,
            function (t) {
              e[t.name] = t.ref;
            },
            function (t) {
              delete e[t.name];
            }
          );
        },
        handleByList: function (t, e) {
          return this.handle(
            t,
            function (r) {
              var n, o;
              e.includes(r.ref) ||
                (e.push(r.ref),
                t === i.Loader &&
                  (null === (o = (n = r.ref).add) ||
                    void 0 === o ||
                    o.call(n)));
            },
            function (t) {
              var r = e.indexOf(t.ref);
              -1 !== r && e.splice(r, 1);
            }
          );
        },
      };
  }),
  N('iLeV2', function (t, e) {
    w(t.exports, 'Runner', () => r);
    /*!
     * @pixi/runner - v6.5.10
     * Compiled Thu, 06 Jul 2023 15:25:11 UTC
     *
     * @pixi/runner is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */ var r = (function () {
      function t(t) {
        (this.items = []), (this._name = t), (this._aliasCount = 0);
      }
      return (
        (t.prototype.emit = function (t, e, r, i, n, o, s, a) {
          if (arguments.length > 8) throw Error('max arguments reached');
          var h = this.name,
            u = this.items;
          this._aliasCount++;
          for (var l = 0, c = u.length; l < c; l++)
            u[l][h](t, e, r, i, n, o, s, a);
          return u === this.items && this._aliasCount--, this;
        }),
        (t.prototype.ensureNonAliasedItems = function () {
          this._aliasCount > 0 &&
            this.items.length > 1 &&
            ((this._aliasCount = 0), (this.items = this.items.slice(0)));
        }),
        (t.prototype.add = function (t) {
          return (
            t[this._name] &&
              (this.ensureNonAliasedItems(),
              this.remove(t),
              this.items.push(t)),
            this
          );
        }),
        (t.prototype.remove = function (t) {
          var e = this.items.indexOf(t);
          return (
            -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)),
            this
          );
        }),
        (t.prototype.contains = function (t) {
          return -1 !== this.items.indexOf(t);
        }),
        (t.prototype.removeAll = function () {
          return this.ensureNonAliasedItems(), (this.items.length = 0), this;
        }),
        (t.prototype.destroy = function () {
          this.removeAll(), (this.items = null), (this._name = null);
        }),
        Object.defineProperty(t.prototype, 'empty', {
          get: function () {
            return 0 === this.items.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'name', {
          get: function () {
            return this._name;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })();
    Object.defineProperties(r.prototype, {
      dispatch: { value: r.prototype.emit },
      run: { value: r.prototype.emit },
    });
  }),
  N('2JyLN', function (t, e) {
    w(t.exports, 'UPDATE_PRIORITY', () => i),
      w(t.exports, 'Ticker', () => a),
      w(t.exports, 'TickerPlugin', () => h);
    /*!
     * @pixi/ticker - v6.5.10
     * Compiled Thu, 06 Jul 2023 15:25:11 UTC
     *
     * @pixi/ticker is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */ var r,
      i,
      n = F('8q0ed'),
      o = F('7CNFb');
    (n.settings.TARGET_FPMS = 0.06),
      ((r = i || (i = {}))[(r.INTERACTION = 50)] = 'INTERACTION'),
      (r[(r.HIGH = 25)] = 'HIGH'),
      (r[(r.NORMAL = 0)] = 'NORMAL'),
      (r[(r.LOW = -25)] = 'LOW'),
      (r[(r.UTILITY = -50)] = 'UTILITY');
    var s = (function () {
        function t(t, e, r, i) {
          void 0 === e && (e = null),
            void 0 === r && (r = 0),
            void 0 === i && (i = !1),
            (this.next = null),
            (this.previous = null),
            (this._destroyed = !1),
            (this.fn = t),
            (this.context = e),
            (this.priority = r),
            (this.once = i);
        }
        return (
          (t.prototype.match = function (t, e) {
            return (
              void 0 === e && (e = null), this.fn === t && this.context === e
            );
          }),
          (t.prototype.emit = function (t) {
            this.fn &&
              (this.context ? this.fn.call(this.context, t) : this.fn(t));
            var e = this.next;
            return (
              this.once && this.destroy(!0),
              this._destroyed && (this.next = null),
              e
            );
          }),
          (t.prototype.connect = function (t) {
            (this.previous = t),
              t.next && (t.next.previous = this),
              (this.next = t.next),
              (t.next = this);
          }),
          (t.prototype.destroy = function (t) {
            void 0 === t && (t = !1),
              (this._destroyed = !0),
              (this.fn = null),
              (this.context = null),
              this.previous && (this.previous.next = this.next),
              this.next && (this.next.previous = this.previous);
            var e = this.next;
            return (this.next = t ? null : e), (this.previous = null), e;
          }),
          t
        );
      })(),
      a = (function () {
        function t() {
          var t = this;
          (this.autoStart = !1),
            (this.deltaTime = 1),
            (this.lastTime = -1),
            (this.speed = 1),
            (this.started = !1),
            (this._requestId = null),
            (this._maxElapsedMS = 100),
            (this._minElapsedMS = 0),
            (this._protected = !1),
            (this._lastFrame = -1),
            (this._head = new s(null, null, 1 / 0)),
            (this.deltaMS = 1 / n.settings.TARGET_FPMS),
            (this.elapsedMS = 1 / n.settings.TARGET_FPMS),
            (this._tick = function (e) {
              (t._requestId = null),
                t.started &&
                  (t.update(e),
                  t.started &&
                    null === t._requestId &&
                    t._head.next &&
                    (t._requestId = requestAnimationFrame(t._tick)));
            });
        }
        return (
          (t.prototype._requestIfNeeded = function () {
            null === this._requestId &&
              this._head.next &&
              ((this.lastTime = performance.now()),
              (this._lastFrame = this.lastTime),
              (this._requestId = requestAnimationFrame(this._tick)));
          }),
          (t.prototype._cancelIfNeeded = function () {
            null !== this._requestId &&
              (cancelAnimationFrame(this._requestId), (this._requestId = null));
          }),
          (t.prototype._startIfPossible = function () {
            this.started
              ? this._requestIfNeeded()
              : this.autoStart && this.start();
          }),
          (t.prototype.add = function (t, e, r) {
            return (
              void 0 === r && (r = i.NORMAL), this._addListener(new s(t, e, r))
            );
          }),
          (t.prototype.addOnce = function (t, e, r) {
            return (
              void 0 === r && (r = i.NORMAL),
              this._addListener(new s(t, e, r, !0))
            );
          }),
          (t.prototype._addListener = function (t) {
            var e = this._head.next,
              r = this._head;
            if (e) {
              for (; e; ) {
                if (t.priority > e.priority) {
                  t.connect(r);
                  break;
                }
                (r = e), (e = e.next);
              }
              t.previous || t.connect(r);
            } else t.connect(r);
            return this._startIfPossible(), this;
          }),
          (t.prototype.remove = function (t, e) {
            for (var r = this._head.next; r; )
              r = r.match(t, e) ? r.destroy() : r.next;
            return this._head.next || this._cancelIfNeeded(), this;
          }),
          Object.defineProperty(t.prototype, 'count', {
            get: function () {
              if (!this._head) return 0;
              for (var t = 0, e = this._head; (e = e.next); ) t++;
              return t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.start = function () {
            this.started || ((this.started = !0), this._requestIfNeeded());
          }),
          (t.prototype.stop = function () {
            this.started && ((this.started = !1), this._cancelIfNeeded());
          }),
          (t.prototype.destroy = function () {
            if (!this._protected) {
              this.stop();
              for (var t = this._head.next; t; ) t = t.destroy(!0);
              this._head.destroy(), (this._head = null);
            }
          }),
          (t.prototype.update = function (t) {
            if ((void 0 === t && (t = performance.now()), t > this.lastTime)) {
              if (
                ((e = this.elapsedMS = t - this.lastTime) >
                  this._maxElapsedMS && (e = this._maxElapsedMS),
                (e *= this.speed),
                this._minElapsedMS)
              ) {
                var e,
                  r = (t - this._lastFrame) | 0;
                if (r < this._minElapsedMS) return;
                this._lastFrame = t - (r % this._minElapsedMS);
              }
              (this.deltaMS = e),
                (this.deltaTime = this.deltaMS * n.settings.TARGET_FPMS);
              for (var i = this._head, o = i.next; o; )
                o = o.emit(this.deltaTime);
              i.next || this._cancelIfNeeded();
            } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
            this.lastTime = t;
          }),
          Object.defineProperty(t.prototype, 'FPS', {
            get: function () {
              return 1e3 / this.elapsedMS;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'minFPS', {
            get: function () {
              return 1e3 / this._maxElapsedMS;
            },
            set: function (t) {
              var e = Math.min(
                Math.max(0, Math.min(this.maxFPS, t)) / 1e3,
                n.settings.TARGET_FPMS
              );
              this._maxElapsedMS = 1 / e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'maxFPS', {
            get: function () {
              return this._minElapsedMS
                ? Math.round(1e3 / this._minElapsedMS)
                : 0;
            },
            set: function (t) {
              if (0 === t) this._minElapsedMS = 0;
              else {
                var e = Math.max(this.minFPS, t);
                this._minElapsedMS = 1 / (e / 1e3);
              }
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'shared', {
            get: function () {
              if (!t._shared) {
                var e = (t._shared = new t());
                (e.autoStart = !0), (e._protected = !0);
              }
              return t._shared;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'system', {
            get: function () {
              if (!t._system) {
                var e = (t._system = new t());
                (e.autoStart = !0), (e._protected = !0);
              }
              return t._system;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(),
      h = (function () {
        function t() {}
        return (
          (t.init = function (t) {
            var e = this;
            (t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
              Object.defineProperty(this, 'ticker', {
                set: function (t) {
                  this._ticker && this._ticker.remove(this.render, this),
                    (this._ticker = t),
                    t && t.add(this.render, this, i.LOW);
                },
                get: function () {
                  return this._ticker;
                },
              }),
              (this.stop = function () {
                e._ticker.stop();
              }),
              (this.start = function () {
                e._ticker.start();
              }),
              (this._ticker = null),
              (this.ticker = t.sharedTicker ? a.shared : new a()),
              t.autoStart && this.start();
          }),
          (t.destroy = function () {
            if (this._ticker) {
              var t = this._ticker;
              (this.ticker = null), t.destroy();
            }
          }),
          (t.extension = o.ExtensionType.Application),
          t
        );
      })();
  }),
  N('960oV', function (t, e) {
    w(t.exports, 'PI_2', () => n),
      w(t.exports, 'RAD_TO_DEG', () => o),
      w(t.exports, 'DEG_TO_RAD', () => s),
      w(t.exports, 'SHAPES', () => i),
      w(t.exports, 'Point', () => a),
      w(t.exports, 'Rectangle', () => u),
      w(t.exports, 'Circle', () => l),
      w(t.exports, 'Ellipse', () => c),
      w(t.exports, 'Polygon', () => p),
      w(t.exports, 'RoundedRectangle', () => f),
      w(t.exports, 'ObservablePoint', () => d),
      w(t.exports, 'Matrix', () => _),
      w(t.exports, 'groupD8', () => E),
      w(t.exports, 'Transform', () => S);
    /*!
     * @pixi/math - v6.5.10
     * Compiled Thu, 06 Jul 2023 15:25:11 UTC
     *
     * @pixi/math is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */ var r,
      i,
      n = 2 * Math.PI,
      o = 180 / Math.PI,
      s = Math.PI / 180;
    ((r = i || (i = {}))[(r.POLY = 0)] = 'POLY'),
      (r[(r.RECT = 1)] = 'RECT'),
      (r[(r.CIRC = 2)] = 'CIRC'),
      (r[(r.ELIP = 3)] = 'ELIP'),
      (r[(r.RREC = 4)] = 'RREC');
    var a = (function () {
        function t(t, e) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            (this.x = 0),
            (this.y = 0),
            (this.x = t),
            (this.y = e);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this.x, this.y);
          }),
          (t.prototype.copyFrom = function (t) {
            return this.set(t.x, t.y), this;
          }),
          (t.prototype.copyTo = function (t) {
            return t.set(this.x, this.y), t;
          }),
          (t.prototype.equals = function (t) {
            return t.x === this.x && t.y === this.y;
          }),
          (t.prototype.set = function (t, e) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = t),
              (this.x = t),
              (this.y = e),
              this
            );
          }),
          (t.prototype.toString = function () {
            return '[@pixi/math:Point x=' + this.x + ' y=' + this.y + ']';
          }),
          t
        );
      })(),
      h = [new a(), new a(), new a(), new a()],
      u = (function () {
        function t(t, e, r, n) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            (this.x = Number(t)),
            (this.y = Number(e)),
            (this.width = Number(r)),
            (this.height = Number(n)),
            (this.type = i.RECT);
        }
        return (
          Object.defineProperty(t.prototype, 'left', {
            get: function () {
              return this.x;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'right', {
            get: function () {
              return this.x + this.width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'top', {
            get: function () {
              return this.y;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'bottom', {
            get: function () {
              return this.y + this.height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'EMPTY', {
            get: function () {
              return new t(0, 0, 0, 0);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.clone = function () {
            return new t(this.x, this.y, this.width, this.height);
          }),
          (t.prototype.copyFrom = function (t) {
            return (
              (this.x = t.x),
              (this.y = t.y),
              (this.width = t.width),
              (this.height = t.height),
              this
            );
          }),
          (t.prototype.copyTo = function (t) {
            return (
              (t.x = this.x),
              (t.y = this.y),
              (t.width = this.width),
              (t.height = this.height),
              t
            );
          }),
          (t.prototype.contains = function (t, e) {
            return (
              !(this.width <= 0) &&
              !(this.height <= 0) &&
              t >= this.x &&
              t < this.x + this.width &&
              e >= this.y &&
              e < this.y + this.height
            );
          }),
          (t.prototype.intersects = function (t, e) {
            if (!e) {
              var r = this.x < t.x ? t.x : this.x;
              if ((this.right > t.right ? t.right : this.right) <= r) return !1;
              var i = this.y < t.y ? t.y : this.y;
              return (this.bottom > t.bottom ? t.bottom : this.bottom) > i;
            }
            var n = this.left,
              o = this.right,
              s = this.top,
              a = this.bottom;
            if (o <= n || a <= s) return !1;
            var u = h[0].set(t.left, t.top),
              l = h[1].set(t.left, t.bottom),
              c = h[2].set(t.right, t.top),
              p = h[3].set(t.right, t.bottom);
            if (c.x <= u.x || l.y <= u.y) return !1;
            var f = Math.sign(e.a * e.d - e.b * e.c);
            if (
              0 === f ||
              (e.apply(u, u),
              e.apply(l, l),
              e.apply(c, c),
              e.apply(p, p),
              Math.max(u.x, l.x, c.x, p.x) <= n ||
                Math.min(u.x, l.x, c.x, p.x) >= o ||
                Math.max(u.y, l.y, c.y, p.y) <= s ||
                Math.min(u.y, l.y, c.y, p.y) >= a)
            )
              return !1;
            var d = f * (l.y - u.y),
              _ = f * (u.x - l.x),
              y = d * n + _ * s,
              v = d * o + _ * s,
              m = d * n + _ * a,
              g = d * o + _ * a;
            if (
              Math.max(y, v, m, g) <= d * u.x + _ * u.y ||
              Math.min(y, v, m, g) >= d * p.x + _ * p.y
            )
              return !1;
            var b = f * (u.y - c.y),
              x = f * (c.x - u.x),
              T = b * n + x * s,
              E = b * o + x * s,
              S = b * n + x * a,
              A = b * o + x * a;
            return !(
              Math.max(T, E, S, A) <= b * u.x + x * u.y ||
              Math.min(T, E, S, A) >= b * p.x + x * p.y
            );
          }),
          (t.prototype.pad = function (t, e) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = t),
              (this.x -= t),
              (this.y -= e),
              (this.width += 2 * t),
              (this.height += 2 * e),
              this
            );
          }),
          (t.prototype.fit = function (t) {
            var e = Math.max(this.x, t.x),
              r = Math.min(this.x + this.width, t.x + t.width),
              i = Math.max(this.y, t.y),
              n = Math.min(this.y + this.height, t.y + t.height);
            return (
              (this.x = e),
              (this.width = Math.max(r - e, 0)),
              (this.y = i),
              (this.height = Math.max(n - i, 0)),
              this
            );
          }),
          (t.prototype.ceil = function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = 0.001);
            var r = Math.ceil((this.x + this.width - e) * t) / t,
              i = Math.ceil((this.y + this.height - e) * t) / t;
            return (
              (this.x = Math.floor((this.x + e) * t) / t),
              (this.y = Math.floor((this.y + e) * t) / t),
              (this.width = r - this.x),
              (this.height = i - this.y),
              this
            );
          }),
          (t.prototype.enlarge = function (t) {
            var e = Math.min(this.x, t.x),
              r = Math.max(this.x + this.width, t.x + t.width),
              i = Math.min(this.y, t.y),
              n = Math.max(this.y + this.height, t.y + t.height);
            return (
              (this.x = e),
              (this.width = r - e),
              (this.y = i),
              (this.height = n - i),
              this
            );
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/math:Rectangle x=' +
              this.x +
              ' y=' +
              this.y +
              ' width=' +
              this.width +
              ' height=' +
              this.height +
              ']'
            );
          }),
          t
        );
      })(),
      l = (function () {
        function t(t, e, r) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            (this.x = t),
            (this.y = e),
            (this.radius = r),
            (this.type = i.CIRC);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this.x, this.y, this.radius);
          }),
          (t.prototype.contains = function (t, e) {
            if (this.radius <= 0) return !1;
            var r = this.radius * this.radius,
              i = this.x - t,
              n = this.y - e;
            return (i *= i), (n *= n), i + n <= r;
          }),
          (t.prototype.getBounds = function () {
            return new u(
              this.x - this.radius,
              this.y - this.radius,
              2 * this.radius,
              2 * this.radius
            );
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/math:Circle x=' +
              this.x +
              ' y=' +
              this.y +
              ' radius=' +
              this.radius +
              ']'
            );
          }),
          t
        );
      })(),
      c = (function () {
        function t(t, e, r, n) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            (this.x = t),
            (this.y = e),
            (this.width = r),
            (this.height = n),
            (this.type = i.ELIP);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this.x, this.y, this.width, this.height);
          }),
          (t.prototype.contains = function (t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var r = (t - this.x) / this.width,
              i = (e - this.y) / this.height;
            return (r *= r), (i *= i), r + i <= 1;
          }),
          (t.prototype.getBounds = function () {
            return new u(
              this.x - this.width,
              this.y - this.height,
              this.width,
              this.height
            );
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/math:Ellipse x=' +
              this.x +
              ' y=' +
              this.y +
              ' width=' +
              this.width +
              ' height=' +
              this.height +
              ']'
            );
          }),
          t
        );
      })(),
      p = (function () {
        function t() {
          for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
            e[r] = t[r];
          var n = Array.isArray(e[0]) ? e[0] : e;
          if ('number' != typeof n[0]) {
            for (var o = [], s = 0, a = n.length; s < a; s++)
              o.push(n[s].x, n[s].y);
            n = o;
          }
          (this.points = n), (this.type = i.POLY), (this.closeStroke = !0);
        }
        return (
          (t.prototype.clone = function () {
            var e = new t(this.points.slice());
            return (e.closeStroke = this.closeStroke), e;
          }),
          (t.prototype.contains = function (t, e) {
            for (
              var r = !1, i = this.points.length / 2, n = 0, o = i - 1;
              n < i;
              o = n++
            ) {
              var s = this.points[2 * n],
                a = this.points[2 * n + 1],
                h = this.points[2 * o],
                u = this.points[2 * o + 1];
              a > e != u > e &&
                t < ((e - a) / (u - a)) * (h - s) + s &&
                (r = !r);
            }
            return r;
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/math:PolygoncloseStroke=' +
              this.closeStroke +
              'points=' +
              this.points.reduce(function (t, e) {
                return t + ', ' + e;
              }, '') +
              ']'
            );
          }),
          t
        );
      })(),
      f = (function () {
        function t(t, e, r, n, o) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = 20),
            (this.x = t),
            (this.y = e),
            (this.width = r),
            (this.height = n),
            (this.radius = o),
            (this.type = i.RREC);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this.x, this.y, this.width, this.height, this.radius);
          }),
          (t.prototype.contains = function (t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            if (
              t >= this.x &&
              t <= this.x + this.width &&
              e >= this.y &&
              e <= this.y + this.height
            ) {
              var r = Math.max(
                0,
                Math.min(this.radius, Math.min(this.width, this.height) / 2)
              );
              if (
                (e >= this.y + r && e <= this.y + this.height - r) ||
                (t >= this.x + r && t <= this.x + this.width - r)
              )
                return !0;
              var i = t - (this.x + r),
                n = e - (this.y + r),
                o = r * r;
              if (
                i * i + n * n <= o ||
                (i = t - (this.x + this.width - r)) * i + n * n <= o ||
                i * i + (n = e - (this.y + this.height - r)) * n <= o ||
                (i = t - (this.x + r)) * i + n * n <= o
              )
                return !0;
            }
            return !1;
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/math:RoundedRectangle x=' +
              this.x +
              ' y=' +
              this.y +
              ('width=' + this.width + ' height=' + this.height) +
              ' radius=' +
              this.radius +
              ']'
            );
          }),
          t
        );
      })(),
      d = (function () {
        function t(t, e, r, i) {
          void 0 === r && (r = 0),
            void 0 === i && (i = 0),
            (this._x = r),
            (this._y = i),
            (this.cb = t),
            (this.scope = e);
        }
        return (
          (t.prototype.clone = function (e, r) {
            return (
              void 0 === e && (e = this.cb),
              void 0 === r && (r = this.scope),
              new t(e, r, this._x, this._y)
            );
          }),
          (t.prototype.set = function (t, e) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = t),
              (this._x !== t || this._y !== e) &&
                ((this._x = t), (this._y = e), this.cb.call(this.scope)),
              this
            );
          }),
          (t.prototype.copyFrom = function (t) {
            return (
              (this._x !== t.x || this._y !== t.y) &&
                ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)),
              this
            );
          }),
          (t.prototype.copyTo = function (t) {
            return t.set(this._x, this._y), t;
          }),
          (t.prototype.equals = function (t) {
            return t.x === this._x && t.y === this._y;
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/math:ObservablePoint x=0 y=0 scope=' + this.scope + ']'
            );
          }),
          Object.defineProperty(t.prototype, 'x', {
            get: function () {
              return this._x;
            },
            set: function (t) {
              this._x !== t && ((this._x = t), this.cb.call(this.scope));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'y', {
            get: function () {
              return this._y;
            },
            set: function (t) {
              this._y !== t && ((this._y = t), this.cb.call(this.scope));
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(),
      _ = (function () {
        function t(t, e, r, i, n, o) {
          void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = 1),
            void 0 === n && (n = 0),
            void 0 === o && (o = 0),
            (this.array = null),
            (this.a = t),
            (this.b = e),
            (this.c = r),
            (this.d = i),
            (this.tx = n),
            (this.ty = o);
        }
        return (
          (t.prototype.fromArray = function (t) {
            (this.a = t[0]),
              (this.b = t[1]),
              (this.c = t[3]),
              (this.d = t[4]),
              (this.tx = t[2]),
              (this.ty = t[5]);
          }),
          (t.prototype.set = function (t, e, r, i, n, o) {
            return (
              (this.a = t),
              (this.b = e),
              (this.c = r),
              (this.d = i),
              (this.tx = n),
              (this.ty = o),
              this
            );
          }),
          (t.prototype.toArray = function (t, e) {
            this.array || (this.array = new Float32Array(9));
            var r = e || this.array;
            return (
              t
                ? ((r[0] = this.a),
                  (r[1] = this.b),
                  (r[2] = 0),
                  (r[3] = this.c),
                  (r[4] = this.d),
                  (r[5] = 0),
                  (r[6] = this.tx),
                  (r[7] = this.ty))
                : ((r[0] = this.a),
                  (r[1] = this.c),
                  (r[2] = this.tx),
                  (r[3] = this.b),
                  (r[4] = this.d),
                  (r[5] = this.ty),
                  (r[6] = 0),
                  (r[7] = 0)),
              (r[8] = 1),
              r
            );
          }),
          (t.prototype.apply = function (t, e) {
            e = e || new a();
            var r = t.x,
              i = t.y;
            return (
              (e.x = this.a * r + this.c * i + this.tx),
              (e.y = this.b * r + this.d * i + this.ty),
              e
            );
          }),
          (t.prototype.applyInverse = function (t, e) {
            e = e || new a();
            var r = 1 / (this.a * this.d + -(this.c * this.b)),
              i = t.x,
              n = t.y;
            return (
              (e.x =
                this.d * r * i +
                -this.c * r * n +
                (this.ty * this.c - this.tx * this.d) * r),
              (e.y =
                this.a * r * n +
                -this.b * r * i +
                (-this.ty * this.a + this.tx * this.b) * r),
              e
            );
          }),
          (t.prototype.translate = function (t, e) {
            return (this.tx += t), (this.ty += e), this;
          }),
          (t.prototype.scale = function (t, e) {
            return (
              (this.a *= t),
              (this.d *= e),
              (this.c *= t),
              (this.b *= e),
              (this.tx *= t),
              (this.ty *= e),
              this
            );
          }),
          (t.prototype.rotate = function (t) {
            var e = Math.cos(t),
              r = Math.sin(t),
              i = this.a,
              n = this.c,
              o = this.tx;
            return (
              (this.a = i * e - this.b * r),
              (this.b = i * r + this.b * e),
              (this.c = n * e - this.d * r),
              (this.d = n * r + this.d * e),
              (this.tx = o * e - this.ty * r),
              (this.ty = o * r + this.ty * e),
              this
            );
          }),
          (t.prototype.append = function (t) {
            var e = this.a,
              r = this.b,
              i = this.c,
              n = this.d;
            return (
              (this.a = t.a * e + t.b * i),
              (this.b = t.a * r + t.b * n),
              (this.c = t.c * e + t.d * i),
              (this.d = t.c * r + t.d * n),
              (this.tx = t.tx * e + t.ty * i + this.tx),
              (this.ty = t.tx * r + t.ty * n + this.ty),
              this
            );
          }),
          (t.prototype.setTransform = function (t, e, r, i, n, o, s, a, h) {
            return (
              (this.a = Math.cos(s + h) * n),
              (this.b = Math.sin(s + h) * n),
              (this.c = -Math.sin(s - a) * o),
              (this.d = Math.cos(s - a) * o),
              (this.tx = t - (r * this.a + i * this.c)),
              (this.ty = e - (r * this.b + i * this.d)),
              this
            );
          }),
          (t.prototype.prepend = function (t) {
            var e = this.tx;
            if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
              var r = this.a,
                i = this.c;
              (this.a = r * t.a + this.b * t.c),
                (this.b = r * t.b + this.b * t.d),
                (this.c = i * t.a + this.d * t.c),
                (this.d = i * t.b + this.d * t.d);
            }
            return (
              (this.tx = e * t.a + this.ty * t.c + t.tx),
              (this.ty = e * t.b + this.ty * t.d + t.ty),
              this
            );
          }),
          (t.prototype.decompose = function (t) {
            var e = this.a,
              r = this.b,
              i = this.c,
              o = this.d,
              s = t.pivot,
              a = -Math.atan2(-i, o),
              h = Math.atan2(r, e),
              u = Math.abs(a + h);
            return (
              u < 1e-5 || 1e-5 > Math.abs(n - u)
                ? ((t.rotation = h), (t.skew.x = t.skew.y = 0))
                : ((t.rotation = 0), (t.skew.x = a), (t.skew.y = h)),
              (t.scale.x = Math.sqrt(e * e + r * r)),
              (t.scale.y = Math.sqrt(i * i + o * o)),
              (t.position.x = this.tx + (s.x * e + s.y * i)),
              (t.position.y = this.ty + (s.x * r + s.y * o)),
              t
            );
          }),
          (t.prototype.invert = function () {
            var t = this.a,
              e = this.b,
              r = this.c,
              i = this.d,
              n = this.tx,
              o = t * i - e * r;
            return (
              (this.a = i / o),
              (this.b = -e / o),
              (this.c = -r / o),
              (this.d = t / o),
              (this.tx = (r * this.ty - i * n) / o),
              (this.ty = -(t * this.ty - e * n) / o),
              this
            );
          }),
          (t.prototype.identity = function () {
            return (
              (this.a = 1),
              (this.b = 0),
              (this.c = 0),
              (this.d = 1),
              (this.tx = 0),
              (this.ty = 0),
              this
            );
          }),
          (t.prototype.clone = function () {
            var e = new t();
            return (
              (e.a = this.a),
              (e.b = this.b),
              (e.c = this.c),
              (e.d = this.d),
              (e.tx = this.tx),
              (e.ty = this.ty),
              e
            );
          }),
          (t.prototype.copyTo = function (t) {
            return (
              (t.a = this.a),
              (t.b = this.b),
              (t.c = this.c),
              (t.d = this.d),
              (t.tx = this.tx),
              (t.ty = this.ty),
              t
            );
          }),
          (t.prototype.copyFrom = function (t) {
            return (
              (this.a = t.a),
              (this.b = t.b),
              (this.c = t.c),
              (this.d = t.d),
              (this.tx = t.tx),
              (this.ty = t.ty),
              this
            );
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/math:Matrix a=' +
              this.a +
              ' b=' +
              this.b +
              ' c=' +
              this.c +
              ' d=' +
              this.d +
              ' tx=' +
              this.tx +
              ' ty=' +
              this.ty +
              ']'
            );
          }),
          Object.defineProperty(t, 'IDENTITY', {
            get: function () {
              return new t();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, 'TEMP_MATRIX', {
            get: function () {
              return new t();
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(),
      y = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
      v = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
      m = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
      g = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
      b = [],
      x = [],
      T = Math.sign;
    !(function () {
      for (var t = 0; t < 16; t++) {
        var e = [];
        b.push(e);
        for (var r = 0; r < 16; r++)
          for (
            var i = T(y[t] * y[r] + m[t] * v[r]),
              n = T(v[t] * y[r] + g[t] * v[r]),
              o = T(y[t] * m[r] + m[t] * g[r]),
              s = T(v[t] * m[r] + g[t] * g[r]),
              a = 0;
            a < 16;
            a++
          )
            if (y[a] === i && v[a] === n && m[a] === o && g[a] === s) {
              e.push(a);
              break;
            }
      }
      for (var t = 0; t < 16; t++) {
        var h = new _();
        h.set(y[t], v[t], m[t], g[t], 0, 0), x.push(h);
      }
    })();
    var E = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MAIN_DIAGONAL: 10,
        MIRROR_HORIZONTAL: 12,
        REVERSE_DIAGONAL: 14,
        uX: function (t) {
          return y[t];
        },
        uY: function (t) {
          return v[t];
        },
        vX: function (t) {
          return m[t];
        },
        vY: function (t) {
          return g[t];
        },
        inv: function (t) {
          return 8 & t ? 15 & t : 7 & -t;
        },
        add: function (t, e) {
          return b[t][e];
        },
        sub: function (t, e) {
          return b[t][E.inv(e)];
        },
        rotate180: function (t) {
          return 4 ^ t;
        },
        isVertical: function (t) {
          return (3 & t) == 2;
        },
        byDirection: function (t, e) {
          return 2 * Math.abs(t) <= Math.abs(e)
            ? e >= 0
              ? E.S
              : E.N
            : 2 * Math.abs(e) <= Math.abs(t)
            ? t > 0
              ? E.E
              : E.W
            : e > 0
            ? t > 0
              ? E.SE
              : E.SW
            : t > 0
            ? E.NE
            : E.NW;
        },
        matrixAppendRotationInv: function (t, e, r, i) {
          void 0 === r && (r = 0), void 0 === i && (i = 0);
          var n = x[E.inv(e)];
          (n.tx = r), (n.ty = i), t.append(n);
        },
      },
      S = (function () {
        function t() {
          (this.worldTransform = new _()),
            (this.localTransform = new _()),
            (this.position = new d(this.onChange, this, 0, 0)),
            (this.scale = new d(this.onChange, this, 1, 1)),
            (this.pivot = new d(this.onChange, this, 0, 0)),
            (this.skew = new d(this.updateSkew, this, 0, 0)),
            (this._rotation = 0),
            (this._cx = 1),
            (this._sx = 0),
            (this._cy = 0),
            (this._sy = 1),
            (this._localID = 0),
            (this._currentLocalID = 0),
            (this._worldID = 0),
            (this._parentID = 0);
        }
        return (
          (t.prototype.onChange = function () {
            this._localID++;
          }),
          (t.prototype.updateSkew = function () {
            (this._cx = Math.cos(this._rotation + this.skew.y)),
              (this._sx = Math.sin(this._rotation + this.skew.y)),
              (this._cy = -Math.sin(this._rotation - this.skew.x)),
              (this._sy = Math.cos(this._rotation - this.skew.x)),
              this._localID++;
          }),
          (t.prototype.toString = function () {
            return (
              '[@pixi/math:Transform position=(' +
              this.position.x +
              ', ' +
              this.position.y +
              ') rotation=' +
              this.rotation +
              ' ' +
              ('scale=(' + this.scale.x) +
              ', ' +
              this.scale.y +
              ') ' +
              ('skew=(' + this.skew.x) +
              ', ' +
              this.skew.y +
              ') ]'
            );
          }),
          (t.prototype.updateLocalTransform = function () {
            var t = this.localTransform;
            this._localID !== this._currentLocalID &&
              ((t.a = this._cx * this.scale.x),
              (t.b = this._sx * this.scale.x),
              (t.c = this._cy * this.scale.y),
              (t.d = this._sy * this.scale.y),
              (t.tx =
                this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
              (t.ty =
                this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
              (this._currentLocalID = this._localID),
              (this._parentID = -1));
          }),
          (t.prototype.updateTransform = function (t) {
            var e = this.localTransform;
            if (
              (this._localID !== this._currentLocalID &&
                ((e.a = this._cx * this.scale.x),
                (e.b = this._sx * this.scale.x),
                (e.c = this._cy * this.scale.y),
                (e.d = this._sy * this.scale.y),
                (e.tx =
                  this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c)),
                (e.ty =
                  this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d)),
                (this._currentLocalID = this._localID),
                (this._parentID = -1)),
              this._parentID !== t._worldID)
            ) {
              var r = t.worldTransform,
                i = this.worldTransform;
              (i.a = e.a * r.a + e.b * r.c),
                (i.b = e.a * r.b + e.b * r.d),
                (i.c = e.c * r.a + e.d * r.c),
                (i.d = e.c * r.b + e.d * r.d),
                (i.tx = e.tx * r.a + e.ty * r.c + r.tx),
                (i.ty = e.tx * r.b + e.ty * r.d + r.ty),
                (this._parentID = t._worldID),
                this._worldID++;
            }
          }),
          (t.prototype.setFromMatrix = function (t) {
            t.decompose(this), this._localID++;
          }),
          Object.defineProperty(t.prototype, 'rotation', {
            get: function () {
              return this._rotation;
            },
            set: function (t) {
              this._rotation !== t && ((this._rotation = t), this.updateSkew());
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.IDENTITY = new t()),
          t
        );
      })();
  });
var L = {};
function B(t, e) {
  (this.name = 'AggregateError'), (this.errors = t), (this.message = e || '');
}
w(L, 'Application', () => rN),
  w(L, 'Graphics', () => eO),
  (B.prototype = Error.prototype);
var G = setTimeout;
function U(t) {
  return !!(t && void 0 !== t.length);
}
function k() {}
function X(t) {
  if (!(this instanceof X))
    throw TypeError('Promises must be constructed via new');
  if ('function' != typeof t) throw TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    W(t, this);
}
function j(t, e) {
  for (; 3 === t._state; ) t = t._value;
  if (0 === t._state) {
    t._deferreds.push(e);
    return;
  }
  (t._handled = !0),
    X._immediateFn(function () {
      var r,
        i = 1 === t._state ? e.onFulfilled : e.onRejected;
      if (null === i) {
        (1 === t._state ? H : Y)(e.promise, t._value);
        return;
      }
      try {
        r = i(t._value);
      } catch (t) {
        Y(e.promise, t);
        return;
      }
      H(e.promise, r);
    });
}
function H(t, e) {
  try {
    if (e === t) throw TypeError('A promise cannot be resolved with itself.');
    if (e && ('object' == typeof e || 'function' == typeof e)) {
      var r = e.then;
      if (e instanceof X) {
        (t._state = 3), (t._value = e), V(t);
        return;
      }
      if ('function' == typeof r) {
        W(function () {
          r.apply(e, arguments);
        }, t);
        return;
      }
    }
    (t._state = 1), (t._value = e), V(t);
  } catch (e) {
    Y(t, e);
  }
}
function Y(t, e) {
  (t._state = 2), (t._value = e), V(t);
}
function V(t) {
  2 === t._state &&
    0 === t._deferreds.length &&
    X._immediateFn(function () {
      t._handled || X._unhandledRejectionFn(t._value);
    });
  for (var e = 0, r = t._deferreds.length; e < r; e++) j(t, t._deferreds[e]);
  t._deferreds = null;
}
function z(t, e, r) {
  (this.onFulfilled = 'function' == typeof t ? t : null),
    (this.onRejected = 'function' == typeof e ? e : null),
    (this.promise = r);
}
function W(t, e) {
  var r = !1;
  try {
    t(
      function (t) {
        r || ((r = !0), H(e, t));
      },
      function (t) {
        r || ((r = !0), Y(e, t));
      }
    );
  } catch (t) {
    if (r) return;
    (r = !0), Y(e, t);
  }
}
(X.prototype.catch = function (t) {
  return this.then(null, t);
}),
  (X.prototype.then = function (t, e) {
    var r = new this.constructor(k);
    return j(this, new z(t, e, r)), r;
  }),
  (X.prototype.finally = /*!
   * pixi.js - v6.5.10
   * Compiled Thu, 06 Jul 2023 15:25:11 UTC
   *
   * pixi.js is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */ /*!
   * @pixi/polyfill - v6.5.10
   * Compiled Thu, 06 Jul 2023 15:25:11 UTC
   *
   * @pixi/polyfill is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */ function (t) {
    var e = this.constructor;
    return this.then(
      function (r) {
        return e.resolve(t()).then(function () {
          return r;
        });
      },
      function (r) {
        return e.resolve(t()).then(function () {
          return e.reject(r);
        });
      }
    );
  }),
  (X.all = function (t) {
    return new X(function (e, r) {
      if (!U(t)) return r(TypeError('Promise.all accepts an array'));
      var i = Array.prototype.slice.call(t);
      if (0 === i.length) return e([]);
      for (var n = i.length, o = 0; o < i.length; o++)
        !(function t(o, s) {
          try {
            if (s && ('object' == typeof s || 'function' == typeof s)) {
              var a = s.then;
              if ('function' == typeof a) {
                a.call(
                  s,
                  function (e) {
                    t(o, e);
                  },
                  r
                );
                return;
              }
            }
            (i[o] = s), 0 == --n && e(i);
          } catch (t) {
            r(t);
          }
        })(o, i[o]);
    });
  }),
  (X.any = function (t) {
    var e = this;
    return new e(function (r, i) {
      if (!(t && void 0 !== t.length))
        return i(TypeError('Promise.any accepts an array'));
      var n = Array.prototype.slice.call(t);
      if (0 === n.length) return i();
      for (var o = [], s = 0; s < n.length; s++)
        try {
          e.resolve(n[s])
            .then(r)
            .catch(function (t) {
              o.push(t),
                o.length === n.length &&
                  i(new B(o, 'All promises were rejected'));
            });
        } catch (t) {
          i(t);
        }
    });
  }),
  (X.allSettled = function (t) {
    return new this(function (e, r) {
      if (!(t && void 0 !== t.length))
        return r(
          TypeError(
            typeof t +
              ' ' +
              t +
              ' is not iterable(cannot read property Symbol(Symbol.iterator))'
          )
        );
      var i = Array.prototype.slice.call(t);
      if (0 === i.length) return e([]);
      for (var n = i.length, o = 0; o < i.length; o++)
        !(function t(r, o) {
          if (o && ('object' == typeof o || 'function' == typeof o)) {
            var s = o.then;
            if ('function' == typeof s) {
              s.call(
                o,
                function (e) {
                  t(r, e);
                },
                function (t) {
                  (i[r] = { status: 'rejected', reason: t }), 0 == --n && e(i);
                }
              );
              return;
            }
          }
          (i[r] = { status: 'fulfilled', value: o }), 0 == --n && e(i);
        })(o, i[o]);
    });
  }),
  (X.resolve = function (t) {
    return t && 'object' == typeof t && t.constructor === X
      ? t
      : new X(function (e) {
          e(t);
        });
  }),
  (X.reject = function (t) {
    return new X(function (e, r) {
      r(t);
    });
  }),
  (X.race = function (t) {
    return new X(function (e, r) {
      if (!U(t)) return r(TypeError('Promise.race accepts an array'));
      for (var i = 0, n = t.length; i < n; i++) X.resolve(t[i]).then(e, r);
    });
  }),
  (X._immediateFn =
    ('function' == typeof setImmediate &&
      function (t) {
        setImmediate(t);
      }) ||
    function (t) {
      G(t, 0);
    }),
  (X._unhandledRejectionFn = function (t) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', t);
  });
var q = {},
  K = Object.getOwnPropertySymbols,
  Z = Object.prototype.hasOwnProperty,
  Q = Object.prototype.propertyIsEnumerable;
if (
  ((q = !(function () {
    try {
      if (!Object.assign) return !1;
      var t = new String('abc');
      if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1;
      for (var e = {}, r = 0; r < 10; r++) e['_' + String.fromCharCode(r)] = r;
      var i = Object.getOwnPropertyNames(e).map(function (t) {
        return e[t];
      });
      if ('0123456789' !== i.join('')) return !1;
      var n = {};
      if (
        ('abcdefghijklmnopqrst'.split('').forEach(function (t) {
          n[t] = t;
        }),
        'abcdefghijklmnopqrst' !== Object.keys(Object.assign({}, n)).join(''))
      )
        return !1;
      return !0;
    } catch (t) {
      return !1;
    }
  })()
    ? function (t, e) {
        for (
          var r,
            i,
            n = (function (t) {
              if (null == t)
                throw TypeError(
                  'Object.assign cannot be called with null or undefined'
                );
              return Object(t);
            })(t),
            o = 1;
          o < arguments.length;
          o++
        ) {
          for (var s in (r = Object(arguments[o])))
            Z.call(r, s) && (n[s] = r[s]);
          if (K) {
            i = K(r);
            for (var a = 0; a < i.length; a++)
              Q.call(r, i[a]) && (n[i[a]] = r[i[a]]);
          }
        }
        return n;
      }
    : Object.assign),
  'undefined' == typeof globalThis &&
    ('undefined' != typeof self
      ? (self.globalThis = self)
      : void 0 !== P && (P.globalThis = P)),
  globalThis.Promise || (globalThis.Promise = X),
  Object.assign || (Object.assign = I(q)),
  (Date.now && Date.prototype.getTime) ||
    (Date.now = function () {
      return new Date().getTime();
    }),
  !(globalThis.performance && globalThis.performance.now))
) {
  var J = Date.now();
  globalThis.performance || (globalThis.performance = {}),
    (globalThis.performance.now = function () {
      return Date.now() - J;
    });
}
for (
  var $ = Date.now(), tt = ['ms', 'moz', 'webkit', 'o'], te = 0;
  te < tt.length && !globalThis.requestAnimationFrame;
  ++te
) {
  var tr = tt[te];
  (globalThis.requestAnimationFrame = globalThis[tr + 'RequestAnimationFrame']),
    (globalThis.cancelAnimationFrame =
      globalThis[tr + 'CancelAnimationFrame'] ||
      globalThis[tr + 'CancelRequestAnimationFrame']);
}
globalThis.requestAnimationFrame ||
  (globalThis.requestAnimationFrame = function (t) {
    if ('function' != typeof t) throw TypeError(t + 'is not a function');
    var e = Date.now(),
      r = 16 + $ - e;
    return (
      r < 0 && (r = 0),
      ($ = e),
      globalThis.self.setTimeout(function () {
        ($ = Date.now()), t(performance.now());
      }, r)
    );
  }),
  globalThis.cancelAnimationFrame ||
    (globalThis.cancelAnimationFrame = function (t) {
      return clearTimeout(t);
    }),
  Math.sign ||
    (Math.sign = function (t) {
      return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }),
  Number.isInteger ||
    (Number.isInteger = function (t) {
      return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
    }),
  globalThis.ArrayBuffer || (globalThis.ArrayBuffer = Array),
  globalThis.Float32Array || (globalThis.Float32Array = Array),
  globalThis.Uint32Array || (globalThis.Uint32Array = Array),
  globalThis.Uint16Array || (globalThis.Uint16Array = Array),
  globalThis.Uint8Array || (globalThis.Uint8Array = Array),
  globalThis.Int32Array || (globalThis.Int32Array = Array);
var ti = F('e70pz'),
  tn = F('8q0ed'),
  to = F('960oV');
F('e70pz');
var ts = F('3vRz3'),
  ti = F('e70pz'),
  ta = F('6n98C');
tn.settings.SORTABLE_CHILDREN = !1;
var th = (function () {
    function t() {
      (this.minX = 1 / 0),
        (this.minY = 1 / 0),
        (this.maxX = -1 / 0),
        (this.maxY = -1 / 0),
        (this.rect = null),
        (this.updateID = -1);
    }
    return (
      (t.prototype.isEmpty = function () {
        return this.minX > this.maxX || this.minY > this.maxY;
      }),
      (t.prototype.clear = function () {
        (this.minX = 1 / 0),
          (this.minY = 1 / 0),
          (this.maxX = -1 / 0),
          (this.maxY = -1 / 0);
      }),
      (t.prototype.getRectangle = function (t) {
        return this.minX > this.maxX || this.minY > this.maxY
          ? to.Rectangle.EMPTY
          : (((t = t || new to.Rectangle(0, 0, 1, 1)).x = this.minX),
            (t.y = this.minY),
            (t.width = this.maxX - this.minX),
            (t.height = this.maxY - this.minY),
            t);
      }),
      (t.prototype.addPoint = function (t) {
        (this.minX = Math.min(this.minX, t.x)),
          (this.maxX = Math.max(this.maxX, t.x)),
          (this.minY = Math.min(this.minY, t.y)),
          (this.maxY = Math.max(this.maxY, t.y));
      }),
      (t.prototype.addPointMatrix = function (t, e) {
        var r = t.a,
          i = t.b,
          n = t.c,
          o = t.d,
          s = t.tx,
          a = t.ty,
          h = r * e.x + n * e.y + s,
          u = i * e.x + o * e.y + a;
        (this.minX = Math.min(this.minX, h)),
          (this.maxX = Math.max(this.maxX, h)),
          (this.minY = Math.min(this.minY, u)),
          (this.maxY = Math.max(this.maxY, u));
      }),
      (t.prototype.addQuad = function (t) {
        var e = this.minX,
          r = this.minY,
          i = this.maxX,
          n = this.maxY,
          o = t[0],
          s = t[1];
        (e = o < e ? o : e),
          (r = s < r ? s : r),
          (i = o > i ? o : i),
          (n = s > n ? s : n),
          (o = t[2]),
          (s = t[3]),
          (e = o < e ? o : e),
          (r = s < r ? s : r),
          (i = o > i ? o : i),
          (n = s > n ? s : n),
          (o = t[4]),
          (s = t[5]),
          (e = o < e ? o : e),
          (r = s < r ? s : r),
          (i = o > i ? o : i),
          (n = s > n ? s : n),
          (o = t[6]),
          (s = t[7]),
          (e = o < e ? o : e),
          (r = s < r ? s : r),
          (i = o > i ? o : i),
          (n = s > n ? s : n),
          (this.minX = e),
          (this.minY = r),
          (this.maxX = i),
          (this.maxY = n);
      }),
      (t.prototype.addFrame = function (t, e, r, i, n) {
        this.addFrameMatrix(t.worldTransform, e, r, i, n);
      }),
      (t.prototype.addFrameMatrix = function (t, e, r, i, n) {
        var o = t.a,
          s = t.b,
          a = t.c,
          h = t.d,
          u = t.tx,
          l = t.ty,
          c = this.minX,
          p = this.minY,
          f = this.maxX,
          d = this.maxY,
          _ = o * e + a * r + u,
          y = s * e + h * r + l;
        (c = _ < c ? _ : c),
          (p = y < p ? y : p),
          (f = _ > f ? _ : f),
          (d = y > d ? y : d),
          (_ = o * i + a * r + u),
          (y = s * i + h * r + l),
          (c = _ < c ? _ : c),
          (p = y < p ? y : p),
          (f = _ > f ? _ : f),
          (d = y > d ? y : d),
          (_ = o * e + a * n + u),
          (y = s * e + h * n + l),
          (c = _ < c ? _ : c),
          (p = y < p ? y : p),
          (f = _ > f ? _ : f),
          (d = y > d ? y : d),
          (_ = o * i + a * n + u),
          (y = s * i + h * n + l),
          (c = _ < c ? _ : c),
          (p = y < p ? y : p),
          (f = _ > f ? _ : f),
          (d = y > d ? y : d),
          (this.minX = c),
          (this.minY = p),
          (this.maxX = f),
          (this.maxY = d);
      }),
      (t.prototype.addVertexData = function (t, e, r) {
        for (
          var i = this.minX, n = this.minY, o = this.maxX, s = this.maxY, a = e;
          a < r;
          a += 2
        ) {
          var h = t[a],
            u = t[a + 1];
          (i = h < i ? h : i),
            (n = u < n ? u : n),
            (o = h > o ? h : o),
            (s = u > s ? u : s);
        }
        (this.minX = i), (this.minY = n), (this.maxX = o), (this.maxY = s);
      }),
      (t.prototype.addVertices = function (t, e, r, i) {
        this.addVerticesMatrix(t.worldTransform, e, r, i);
      }),
      (t.prototype.addVerticesMatrix = function (t, e, r, i, n, o) {
        void 0 === n && (n = 0), void 0 === o && (o = n);
        for (
          var s = t.a,
            a = t.b,
            h = t.c,
            u = t.d,
            l = t.tx,
            c = t.ty,
            p = this.minX,
            f = this.minY,
            d = this.maxX,
            _ = this.maxY,
            y = r;
          y < i;
          y += 2
        ) {
          var v = e[y],
            m = e[y + 1],
            g = s * v + h * m + l,
            b = u * m + a * v + c;
          (p = Math.min(p, g - n)),
            (d = Math.max(d, g + n)),
            (f = Math.min(f, b - o)),
            (_ = Math.max(_, b + o));
        }
        (this.minX = p), (this.minY = f), (this.maxX = d), (this.maxY = _);
      }),
      (t.prototype.addBounds = function (t) {
        var e = this.minX,
          r = this.minY,
          i = this.maxX,
          n = this.maxY;
        (this.minX = t.minX < e ? t.minX : e),
          (this.minY = t.minY < r ? t.minY : r),
          (this.maxX = t.maxX > i ? t.maxX : i),
          (this.maxY = t.maxY > n ? t.maxY : n);
      }),
      (t.prototype.addBoundsMask = function (t, e) {
        var r = t.minX > e.minX ? t.minX : e.minX,
          i = t.minY > e.minY ? t.minY : e.minY,
          n = t.maxX < e.maxX ? t.maxX : e.maxX,
          o = t.maxY < e.maxY ? t.maxY : e.maxY;
        if (r <= n && i <= o) {
          var s = this.minX,
            a = this.minY,
            h = this.maxX,
            u = this.maxY;
          (this.minX = r < s ? r : s),
            (this.minY = i < a ? i : a),
            (this.maxX = n > h ? n : h),
            (this.maxY = o > u ? o : u);
        }
      }),
      (t.prototype.addBoundsMatrix = function (t, e) {
        this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
      }),
      (t.prototype.addBoundsArea = function (t, e) {
        var r = t.minX > e.x ? t.minX : e.x,
          i = t.minY > e.y ? t.minY : e.y,
          n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
          o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        if (r <= n && i <= o) {
          var s = this.minX,
            a = this.minY,
            h = this.maxX,
            u = this.maxY;
          (this.minX = r < s ? r : s),
            (this.minY = i < a ? i : a),
            (this.maxX = n > h ? n : h),
            (this.maxY = o > u ? o : u);
        }
      }),
      (t.prototype.pad = function (t, e) {
        void 0 === t && (t = 0),
          void 0 === e && (e = t),
          this.isEmpty() ||
            ((this.minX -= t),
            (this.maxX += t),
            (this.minY -= e),
            (this.maxY += e));
      }),
      (t.prototype.addFramePad = function (t, e, r, i, n, o) {
        (t -= n),
          (e -= o),
          (r += n),
          (i += o),
          (this.minX = this.minX < t ? this.minX : t),
          (this.maxX = this.maxX > r ? this.maxX : r),
          (this.minY = this.minY < e ? this.minY : e),
          (this.maxY = this.maxY > i ? this.maxY : i);
      }),
      t
    );
  })(),
  tu = function (t, e) {
    return (tu =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
function tl(t, e) {
  function r() {
    this.constructor = t;
  }
  tu(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
var tc = (function (t) {
    function e() {
      var e = t.call(this) || this;
      return (
        (e.tempDisplayObjectParent = null),
        (e.transform = new to.Transform()),
        (e.alpha = 1),
        (e.visible = !0),
        (e.renderable = !0),
        (e.cullable = !1),
        (e.cullArea = null),
        (e.parent = null),
        (e.worldAlpha = 1),
        (e._lastSortedIndex = 0),
        (e._zIndex = 0),
        (e.filterArea = null),
        (e.filters = null),
        (e._enabledFilters = null),
        (e._bounds = new th()),
        (e._localBounds = null),
        (e._boundsID = 0),
        (e._boundsRect = null),
        (e._localBoundsRect = null),
        (e._mask = null),
        (e._maskRefCount = 0),
        (e._destroyed = !1),
        (e.isSprite = !1),
        (e.isMask = !1),
        e
      );
    }
    return (
      tl(e, t),
      (e.mixin = function (t) {
        for (var r = Object.keys(t), i = 0; i < r.length; ++i) {
          var n = r[i];
          Object.defineProperty(
            e.prototype,
            n,
            Object.getOwnPropertyDescriptor(t, n)
          );
        }
      }),
      Object.defineProperty(e.prototype, 'destroyed', {
        get: function () {
          return this._destroyed;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._recursivePostUpdateTransform = function () {
        this.parent
          ? (this.parent._recursivePostUpdateTransform(),
            this.transform.updateTransform(this.parent.transform))
          : this.transform.updateTransform(
              this._tempDisplayObjectParent.transform
            );
      }),
      (e.prototype.updateTransform = function () {
        this._boundsID++,
          this.transform.updateTransform(this.parent.transform),
          (this.worldAlpha = this.alpha * this.parent.worldAlpha);
      }),
      (e.prototype.getBounds = function (t, e) {
        return (
          t ||
            (this.parent
              ? (this._recursivePostUpdateTransform(), this.updateTransform())
              : ((this.parent = this._tempDisplayObjectParent),
                this.updateTransform(),
                (this.parent = null))),
          this._bounds.updateID !== this._boundsID &&
            (this.calculateBounds(), (this._bounds.updateID = this._boundsID)),
          e ||
            (this._boundsRect || (this._boundsRect = new to.Rectangle()),
            (e = this._boundsRect)),
          this._bounds.getRectangle(e)
        );
      }),
      (e.prototype.getLocalBounds = function (t) {
        t ||
          (this._localBoundsRect ||
            (this._localBoundsRect = new to.Rectangle()),
          (t = this._localBoundsRect)),
          this._localBounds || (this._localBounds = new th());
        var e = this.transform,
          r = this.parent;
        (this.parent = null),
          (this.transform = this._tempDisplayObjectParent.transform);
        var i = this._bounds,
          n = this._boundsID;
        this._bounds = this._localBounds;
        var o = this.getBounds(!1, t);
        return (
          (this.parent = r),
          (this.transform = e),
          (this._bounds = i),
          (this._bounds.updateID += this._boundsID - n),
          o
        );
      }),
      (e.prototype.toGlobal = function (t, e, r) {
        return (
          void 0 === r && (r = !1),
          r ||
            (this._recursivePostUpdateTransform(),
            this.parent
              ? this.displayObjectUpdateTransform()
              : ((this.parent = this._tempDisplayObjectParent),
                this.displayObjectUpdateTransform(),
                (this.parent = null))),
          this.worldTransform.apply(t, e)
        );
      }),
      (e.prototype.toLocal = function (t, e, r, i) {
        return (
          e && (t = e.toGlobal(t, r, i)),
          i ||
            (this._recursivePostUpdateTransform(),
            this.parent
              ? this.displayObjectUpdateTransform()
              : ((this.parent = this._tempDisplayObjectParent),
                this.displayObjectUpdateTransform(),
                (this.parent = null))),
          this.worldTransform.applyInverse(t, r)
        );
      }),
      (e.prototype.setParent = function (t) {
        if (!t || !t.addChild)
          throw Error('setParent: Argument must be a Container');
        return t.addChild(this), t;
      }),
      (e.prototype.setTransform = function (t, e, r, i, n, o, s, a, h) {
        return (
          void 0 === t && (t = 0),
          void 0 === e && (e = 0),
          void 0 === r && (r = 1),
          void 0 === i && (i = 1),
          void 0 === n && (n = 0),
          void 0 === o && (o = 0),
          void 0 === s && (s = 0),
          void 0 === a && (a = 0),
          void 0 === h && (h = 0),
          (this.position.x = t),
          (this.position.y = e),
          (this.scale.x = r || 1),
          (this.scale.y = i || 1),
          (this.rotation = n),
          (this.skew.x = o),
          (this.skew.y = s),
          (this.pivot.x = a),
          (this.pivot.y = h),
          this
        );
      }),
      (e.prototype.destroy = function (t) {
        this.parent && this.parent.removeChild(this),
          (this._destroyed = !0),
          (this.transform = null),
          (this.parent = null),
          (this._bounds = null),
          (this.mask = null),
          (this.cullArea = null),
          (this.filters = null),
          (this.filterArea = null),
          (this.hitArea = null),
          (this.interactive = !1),
          (this.interactiveChildren = !1),
          this.emit('destroyed'),
          this.removeAllListeners();
      }),
      Object.defineProperty(e.prototype, '_tempDisplayObjectParent', {
        get: function () {
          return (
            null === this.tempDisplayObjectParent &&
              (this.tempDisplayObjectParent = new tp()),
            this.tempDisplayObjectParent
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.enableTempParent = function () {
        var t = this.parent;
        return (this.parent = this._tempDisplayObjectParent), t;
      }),
      (e.prototype.disableTempParent = function (t) {
        this.parent = t;
      }),
      Object.defineProperty(e.prototype, 'x', {
        get: function () {
          return this.position.x;
        },
        set: function (t) {
          this.transform.position.x = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'y', {
        get: function () {
          return this.position.y;
        },
        set: function (t) {
          this.transform.position.y = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'worldTransform', {
        get: function () {
          return this.transform.worldTransform;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'localTransform', {
        get: function () {
          return this.transform.localTransform;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'position', {
        get: function () {
          return this.transform.position;
        },
        set: function (t) {
          this.transform.position.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'scale', {
        get: function () {
          return this.transform.scale;
        },
        set: function (t) {
          this.transform.scale.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'pivot', {
        get: function () {
          return this.transform.pivot;
        },
        set: function (t) {
          this.transform.pivot.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'skew', {
        get: function () {
          return this.transform.skew;
        },
        set: function (t) {
          this.transform.skew.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'rotation', {
        get: function () {
          return this.transform.rotation;
        },
        set: function (t) {
          this.transform.rotation = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'angle', {
        get: function () {
          return this.transform.rotation * to.RAD_TO_DEG;
        },
        set: function (t) {
          this.transform.rotation = t * to.DEG_TO_RAD;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'zIndex', {
        get: function () {
          return this._zIndex;
        },
        set: function (t) {
          (this._zIndex = t), this.parent && (this.parent.sortDirty = !0);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'worldVisible', {
        get: function () {
          var t = this;
          do {
            if (!t.visible) return !1;
            t = t.parent;
          } while (t);
          return !0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'mask', {
        get: function () {
          return this._mask;
        },
        set: function (t) {
          if (this._mask !== t) {
            if (this._mask) {
              var e = this._mask.isMaskData
                ? this._mask.maskObject
                : this._mask;
              e &&
                (e._maskRefCount--,
                0 === e._maskRefCount &&
                  ((e.renderable = !0), (e.isMask = !1)));
            }
            if (((this._mask = t), this._mask)) {
              var e = this._mask.isMaskData
                ? this._mask.maskObject
                : this._mask;
              e &&
                (0 === e._maskRefCount &&
                  ((e.renderable = !1), (e.isMask = !0)),
                e._maskRefCount++);
            }
          }
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })(I(ts)),
  tp = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.sortDirty = null), e;
    }
    return tl(e, t), e;
  })(tc);
function tf(t, e) {
  return t.zIndex === e.zIndex
    ? t._lastSortedIndex - e._lastSortedIndex
    : t.zIndex - e.zIndex;
}
tc.prototype.displayObjectUpdateTransform = tc.prototype.updateTransform;
var td = (function (t) {
  function e() {
    var e = t.call(this) || this;
    return (
      (e.children = []),
      (e.sortableChildren = tn.settings.SORTABLE_CHILDREN),
      (e.sortDirty = !1),
      e
    );
  }
  return (
    tl(e, t),
    (e.prototype.onChildrenChange = function (t) {}),
    (e.prototype.addChild = function () {
      for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
        e[r] = t[r];
      if (e.length > 1) for (var i = 0; i < e.length; i++) this.addChild(e[i]);
      else {
        var n = e[0];
        n.parent && n.parent.removeChild(n),
          (n.parent = this),
          (this.sortDirty = !0),
          (n.transform._parentID = -1),
          this.children.push(n),
          this._boundsID++,
          this.onChildrenChange(this.children.length - 1),
          this.emit('childAdded', n, this, this.children.length - 1),
          n.emit('added', this);
      }
      return e[0];
    }),
    (e.prototype.addChildAt = function (t, e) {
      if (e < 0 || e > this.children.length)
        throw Error(
          t +
            'addChildAt: The index ' +
            e +
            ' supplied is out of bounds ' +
            this.children.length
        );
      return (
        t.parent && t.parent.removeChild(t),
        (t.parent = this),
        (this.sortDirty = !0),
        (t.transform._parentID = -1),
        this.children.splice(e, 0, t),
        this._boundsID++,
        this.onChildrenChange(e),
        t.emit('added', this),
        this.emit('childAdded', t, this, e),
        t
      );
    }),
    (e.prototype.swapChildren = function (t, e) {
      if (t !== e) {
        var r = this.getChildIndex(t),
          i = this.getChildIndex(e);
        (this.children[r] = e),
          (this.children[i] = t),
          this.onChildrenChange(r < i ? r : i);
      }
    }),
    (e.prototype.getChildIndex = function (t) {
      var e = this.children.indexOf(t);
      if (-1 === e)
        throw Error('The supplied DisplayObject must be a child of the caller');
      return e;
    }),
    (e.prototype.setChildIndex = function (t, e) {
      if (e < 0 || e >= this.children.length)
        throw Error(
          'The index ' +
            e +
            ' supplied is out of bounds ' +
            this.children.length
        );
      var r = this.getChildIndex(t);
      (0, ti.removeItems)(this.children, r, 1),
        this.children.splice(e, 0, t),
        this.onChildrenChange(e);
    }),
    (e.prototype.getChildAt = function (t) {
      if (t < 0 || t >= this.children.length)
        throw Error('getChildAt: Index (' + t + ') does not exist.');
      return this.children[t];
    }),
    (e.prototype.removeChild = function () {
      for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
        e[r] = t[r];
      if (e.length > 1)
        for (var i = 0; i < e.length; i++) this.removeChild(e[i]);
      else {
        var n = e[0],
          o = this.children.indexOf(n);
        if (-1 === o) return null;
        (n.parent = null),
          (n.transform._parentID = -1),
          (0, ti.removeItems)(this.children, o, 1),
          this._boundsID++,
          this.onChildrenChange(o),
          n.emit('removed', this),
          this.emit('childRemoved', n, this, o);
      }
      return e[0];
    }),
    (e.prototype.removeChildAt = function (t) {
      var e = this.getChildAt(t);
      return (
        (e.parent = null),
        (e.transform._parentID = -1),
        (0, ti.removeItems)(this.children, t, 1),
        this._boundsID++,
        this.onChildrenChange(t),
        e.emit('removed', this),
        this.emit('childRemoved', e, this, t),
        e
      );
    }),
    (e.prototype.removeChildren = function (t, e) {
      void 0 === t && (t = 0), void 0 === e && (e = this.children.length);
      var r,
        i = t,
        n = e,
        o = n - i;
      if (o > 0 && o <= n) {
        r = this.children.splice(i, o);
        for (var s = 0; s < r.length; ++s)
          (r[s].parent = null),
            r[s].transform && (r[s].transform._parentID = -1);
        this._boundsID++, this.onChildrenChange(t);
        for (var s = 0; s < r.length; ++s)
          r[s].emit('removed', this), this.emit('childRemoved', r[s], this, s);
        return r;
      }
      if (0 === o && 0 === this.children.length) return [];
      throw RangeError(
        'removeChildren: numeric values are outside the acceptable range.'
      );
    }),
    (e.prototype.sortChildren = function () {
      for (var t = !1, e = 0, r = this.children.length; e < r; ++e) {
        var i = this.children[e];
        (i._lastSortedIndex = e), t || 0 === i.zIndex || (t = !0);
      }
      t && this.children.length > 1 && this.children.sort(tf),
        (this.sortDirty = !1);
    }),
    (e.prototype.updateTransform = function () {
      this.sortableChildren && this.sortDirty && this.sortChildren(),
        this._boundsID++,
        this.transform.updateTransform(this.parent.transform),
        (this.worldAlpha = this.alpha * this.parent.worldAlpha);
      for (var t = 0, e = this.children.length; t < e; ++t) {
        var r = this.children[t];
        r.visible && r.updateTransform();
      }
    }),
    (e.prototype.calculateBounds = function () {
      this._bounds.clear(), this._calculateBounds();
      for (var t = 0; t < this.children.length; t++) {
        var e = this.children[t];
        if (e.visible && e.renderable) {
          if ((e.calculateBounds(), e._mask)) {
            var r = e._mask.isMaskData ? e._mask.maskObject : e._mask;
            r
              ? (r.calculateBounds(),
                this._bounds.addBoundsMask(e._bounds, r._bounds))
              : this._bounds.addBounds(e._bounds);
          } else
            e.filterArea
              ? this._bounds.addBoundsArea(e._bounds, e.filterArea)
              : this._bounds.addBounds(e._bounds);
        }
      }
      this._bounds.updateID = this._boundsID;
    }),
    (e.prototype.getLocalBounds = function (e, r) {
      void 0 === r && (r = !1);
      var i = t.prototype.getLocalBounds.call(this, e);
      if (!r)
        for (var n = 0, o = this.children.length; n < o; ++n) {
          var s = this.children[n];
          s.visible && s.updateTransform();
        }
      return i;
    }),
    (e.prototype._calculateBounds = function () {}),
    (e.prototype._renderWithCulling = function (t) {
      var r,
        i,
        n = t.renderTexture.sourceFrame;
      if (n.width > 0 && n.height > 0) {
        if (
          (this.cullArea
            ? ((r = this.cullArea), (i = this.worldTransform))
            : this._render !== e.prototype._render && (r = this.getBounds(!0)),
          r && n.intersects(r, i))
        )
          this._render(t);
        else if (this.cullArea) return;
        for (var o = 0, s = this.children.length; o < s; ++o) {
          var a = this.children[o],
            h = a.cullable;
          (a.cullable = h || !this.cullArea), a.render(t), (a.cullable = h);
        }
      }
    }),
    (e.prototype.render = function (t) {
      if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
        if (this._mask || (this.filters && this.filters.length))
          this.renderAdvanced(t);
        else if (this.cullable) this._renderWithCulling(t);
        else {
          this._render(t);
          for (var e = 0, r = this.children.length; e < r; ++e)
            this.children[e].render(t);
        }
      }
    }),
    (e.prototype.renderAdvanced = function (t) {
      var e = this.filters,
        r = this._mask;
      if (e) {
        this._enabledFilters || (this._enabledFilters = []),
          (this._enabledFilters.length = 0);
        for (var i = 0; i < e.length; i++)
          e[i].enabled && this._enabledFilters.push(e[i]);
      }
      var n =
        (e && this._enabledFilters && this._enabledFilters.length) ||
        (r &&
          (!r.isMaskData ||
            (r.enabled && (r.autoDetect || r.type !== ta.MASK_TYPES.NONE))));
      if (
        (n && t.batch.flush(),
        e &&
          this._enabledFilters &&
          this._enabledFilters.length &&
          t.filter.push(this, this._enabledFilters),
        r && t.mask.push(this, this._mask),
        this.cullable)
      )
        this._renderWithCulling(t);
      else {
        this._render(t);
        for (var i = 0, o = this.children.length; i < o; ++i)
          this.children[i].render(t);
      }
      n && t.batch.flush(),
        r && t.mask.pop(this),
        e &&
          this._enabledFilters &&
          this._enabledFilters.length &&
          t.filter.pop();
    }),
    (e.prototype._render = function (t) {}),
    (e.prototype.destroy = function (e) {
      t.prototype.destroy.call(this), (this.sortDirty = !1);
      var r = 'boolean' == typeof e ? e : e && e.children,
        i = this.removeChildren(0, this.children.length);
      if (r) for (var n = 0; n < i.length; ++n) i[n].destroy(e);
    }),
    Object.defineProperty(e.prototype, 'width', {
      get: function () {
        return this.scale.x * this.getLocalBounds().width;
      },
      set: function (t) {
        var e = this.getLocalBounds().width;
        0 !== e ? (this.scale.x = t / e) : (this.scale.x = 1),
          (this._width = t);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'height', {
      get: function () {
        return this.scale.y * this.getLocalBounds().height;
      },
      set: function (t) {
        var e = this.getLocalBounds().height;
        0 !== e ? (this.scale.y = t / e) : (this.scale.y = 1),
          (this._height = t);
      },
      enumerable: !1,
      configurable: !0,
    }),
    e
  );
})(tc);
(td.prototype.containerUpdateTransform = td.prototype.updateTransform),
  F('e70pz');
var tn = F('8q0ed'),
  ti = F('e70pz'),
  t_ = F('jH9fL');
tc.mixin({
  accessible: !1,
  accessibleTitle: null,
  accessibleHint: null,
  tabIndex: 0,
  _accessibleActive: !1,
  _accessibleDiv: null,
  accessibleType: 'button',
  accessiblePointerEvents: 'auto',
  accessibleChildren: !0,
  renderId: -1,
});
var ty = (function () {
    function t(t) {
      (this.debug = !1),
        (this._isActive = !1),
        (this._isMobileAccessibility = !1),
        (this.pool = []),
        (this.renderId = 0),
        (this.children = []),
        (this.androidUpdateCount = 0),
        (this.androidUpdateFrequency = 500),
        (this._hookDiv = null),
        (tn.isMobile.tablet || tn.isMobile.phone) && this.createTouchHook();
      var e = document.createElement('div');
      (e.style.width = '100px'),
        (e.style.height = '100px'),
        (e.style.position = 'absolute'),
        (e.style.top = '0px'),
        (e.style.left = '0px'),
        (e.style.zIndex = '2'),
        (this.div = e),
        (this.renderer = t),
        (this._onKeyDown = this._onKeyDown.bind(this)),
        (this._onMouseMove = this._onMouseMove.bind(this)),
        globalThis.addEventListener('keydown', this._onKeyDown, !1);
    }
    return (
      Object.defineProperty(t.prototype, 'isActive', {
        get: function () {
          return this._isActive;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'isMobileAccessibility', {
        get: function () {
          return this._isMobileAccessibility;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.createTouchHook = function () {
        var t = this,
          e = document.createElement('button');
        (e.style.width = '1px'),
          (e.style.height = '1px'),
          (e.style.position = 'absolute'),
          (e.style.top = '-1000px'),
          (e.style.left = '-1000px'),
          (e.style.zIndex = '2'),
          (e.style.backgroundColor = '#FF0000'),
          (e.title = 'select to enable accessibility for this content'),
          e.addEventListener('focus', function () {
            (t._isMobileAccessibility = !0), t.activate(), t.destroyTouchHook();
          }),
          document.body.appendChild(e),
          (this._hookDiv = e);
      }),
      (t.prototype.destroyTouchHook = function () {
        this._hookDiv &&
          (document.body.removeChild(this._hookDiv), (this._hookDiv = null));
      }),
      (t.prototype.activate = function () {
        var t;
        this._isActive ||
          ((this._isActive = !0),
          globalThis.document.addEventListener(
            'mousemove',
            this._onMouseMove,
            !0
          ),
          globalThis.removeEventListener('keydown', this._onKeyDown, !1),
          this.renderer.on('postrender', this.update, this),
          null === (t = this.renderer.view.parentNode) ||
            void 0 === t ||
            t.appendChild(this.div));
      }),
      (t.prototype.deactivate = function () {
        var t;
        this._isActive &&
          !this._isMobileAccessibility &&
          ((this._isActive = !1),
          globalThis.document.removeEventListener(
            'mousemove',
            this._onMouseMove,
            !0
          ),
          globalThis.addEventListener('keydown', this._onKeyDown, !1),
          this.renderer.off('postrender', this.update),
          null === (t = this.div.parentNode) ||
            void 0 === t ||
            t.removeChild(this.div));
      }),
      (t.prototype.updateAccessibleObjects = function (t) {
        if (t.visible && t.accessibleChildren) {
          t.accessible &&
            t.interactive &&
            (t._accessibleActive || this.addChild(t),
            (t.renderId = this.renderId));
          var e = t.children;
          if (e)
            for (var r = 0; r < e.length; r++)
              this.updateAccessibleObjects(e[r]);
        }
      }),
      (t.prototype.update = function () {
        var t = performance.now();
        if (
          (!tn.isMobile.android.device || !(t < this.androidUpdateCount)) &&
          ((this.androidUpdateCount = t + this.androidUpdateFrequency),
          this.renderer.renderingToScreen)
        ) {
          this.renderer._lastObjectRendered &&
            this.updateAccessibleObjects(this.renderer._lastObjectRendered);
          var e = this.renderer.view.getBoundingClientRect(),
            r = e.left,
            i = e.top,
            n = e.width,
            o = e.height,
            s = this.renderer,
            a = s.width,
            h = s.height,
            u = s.resolution,
            l = (n / a) * u,
            c = (o / h) * u,
            p = this.div;
          (p.style.left = r + 'px'),
            (p.style.top = i + 'px'),
            (p.style.width = a + 'px'),
            (p.style.height = h + 'px');
          for (var f = 0; f < this.children.length; f++) {
            var d = this.children[f];
            if (d.renderId !== this.renderId)
              (d._accessibleActive = !1),
                (0, ti.removeItems)(this.children, f, 1),
                this.div.removeChild(d._accessibleDiv),
                this.pool.push(d._accessibleDiv),
                (d._accessibleDiv = null),
                f--;
            else {
              p = d._accessibleDiv;
              var _ = d.hitArea,
                y = d.worldTransform;
              d.hitArea
                ? ((p.style.left = (y.tx + _.x * y.a) * l + 'px'),
                  (p.style.top = (y.ty + _.y * y.d) * c + 'px'),
                  (p.style.width = _.width * y.a * l + 'px'),
                  (p.style.height = _.height * y.d * c + 'px'))
                : ((_ = d.getBounds()),
                  this.capHitArea(_),
                  (p.style.left = _.x * l + 'px'),
                  (p.style.top = _.y * c + 'px'),
                  (p.style.width = _.width * l + 'px'),
                  (p.style.height = _.height * c + 'px'),
                  p.title !== d.accessibleTitle &&
                    null !== d.accessibleTitle &&
                    (p.title = d.accessibleTitle),
                  p.getAttribute('aria-label') !== d.accessibleHint &&
                    null !== d.accessibleHint &&
                    p.setAttribute('aria-label', d.accessibleHint)),
                (d.accessibleTitle !== p.title || d.tabIndex !== p.tabIndex) &&
                  ((p.title = d.accessibleTitle),
                  (p.tabIndex = d.tabIndex),
                  this.debug && this.updateDebugHTML(p));
            }
          }
          this.renderId++;
        }
      }),
      (t.prototype.updateDebugHTML = function (t) {
        t.innerHTML =
          'type: ' +
          t.type +
          '</br> title : ' +
          t.title +
          '</br> tabIndex: ' +
          t.tabIndex;
      }),
      (t.prototype.capHitArea = function (t) {
        t.x < 0 && ((t.width += t.x), (t.x = 0)),
          t.y < 0 && ((t.height += t.y), (t.y = 0));
        var e = this.renderer,
          r = e.width,
          i = e.height;
        t.x + t.width > r && (t.width = r - t.x),
          t.y + t.height > i && (t.height = i - t.y);
      }),
      (t.prototype.addChild = function (t) {
        var e = this.pool.pop();
        e ||
          (((e = document.createElement('button')).style.width = '100px'),
          (e.style.height = '100px'),
          (e.style.backgroundColor = this.debug
            ? 'rgba(255,255,255,0.5)'
            : 'transparent'),
          (e.style.position = 'absolute'),
          (e.style.zIndex = '2'),
          (e.style.borderStyle = 'none'),
          navigator.userAgent.toLowerCase().indexOf('chrome') > -1
            ? e.setAttribute('aria-live', 'off')
            : e.setAttribute('aria-live', 'polite'),
          navigator.userAgent.match(/rv:.*Gecko\//)
            ? e.setAttribute('aria-relevant', 'additions')
            : e.setAttribute('aria-relevant', 'text'),
          e.addEventListener('click', this._onClick.bind(this)),
          e.addEventListener('focus', this._onFocus.bind(this)),
          e.addEventListener('focusout', this._onFocusOut.bind(this))),
          (e.style.pointerEvents = t.accessiblePointerEvents),
          (e.type = t.accessibleType),
          t.accessibleTitle && null !== t.accessibleTitle
            ? (e.title = t.accessibleTitle)
            : (t.accessibleHint && null !== t.accessibleHint) ||
              (e.title = 'displayObject ' + t.tabIndex),
          t.accessibleHint &&
            null !== t.accessibleHint &&
            e.setAttribute('aria-label', t.accessibleHint),
          this.debug && this.updateDebugHTML(e),
          (t._accessibleActive = !0),
          (t._accessibleDiv = e),
          (e.displayObject = t),
          this.children.push(t),
          this.div.appendChild(t._accessibleDiv),
          (t._accessibleDiv.tabIndex = t.tabIndex);
      }),
      (t.prototype._onClick = function (t) {
        var e = this.renderer.plugins.interaction,
          r = t.target.displayObject,
          i = e.eventData;
        e.dispatchEvent(r, 'click', i),
          e.dispatchEvent(r, 'pointertap', i),
          e.dispatchEvent(r, 'tap', i);
      }),
      (t.prototype._onFocus = function (t) {
        t.target.getAttribute('aria-live') ||
          t.target.setAttribute('aria-live', 'assertive');
        var e = this.renderer.plugins.interaction,
          r = t.target.displayObject,
          i = e.eventData;
        e.dispatchEvent(r, 'mouseover', i);
      }),
      (t.prototype._onFocusOut = function (t) {
        t.target.getAttribute('aria-live') ||
          t.target.setAttribute('aria-live', 'polite');
        var e = this.renderer.plugins.interaction,
          r = t.target.displayObject,
          i = e.eventData;
        e.dispatchEvent(r, 'mouseout', i);
      }),
      (t.prototype._onKeyDown = function (t) {
        9 === t.keyCode && this.activate();
      }),
      (t.prototype._onMouseMove = function (t) {
        (0 !== t.movementX || 0 !== t.movementY) && this.deactivate();
      }),
      (t.prototype.destroy = function () {
        this.destroyTouchHook(),
          (this.div = null),
          globalThis.document.removeEventListener(
            'mousemove',
            this._onMouseMove,
            !0
          ),
          globalThis.removeEventListener('keydown', this._onKeyDown),
          (this.pool = null),
          (this.children = null),
          (this.renderer = null);
      }),
      (t.extension = {
        name: 'accessibility',
        type: [
          t_.ExtensionType.RendererPlugin,
          t_.ExtensionType.CanvasRendererPlugin,
        ],
      }),
      t
    );
  })(),
  to = F('960oV'),
  tv = F('2JyLN');
F('e70pz');
var ts = F('3vRz3'),
  t_ = F('jH9fL'),
  tm = (function () {
    function t() {
      (this.pressure = 0),
        (this.rotationAngle = 0),
        (this.twist = 0),
        (this.tangentialPressure = 0),
        (this.global = new to.Point()),
        (this.target = null),
        (this.originalEvent = null),
        (this.identifier = null),
        (this.isPrimary = !1),
        (this.button = 0),
        (this.buttons = 0),
        (this.width = 0),
        (this.height = 0),
        (this.tiltX = 0),
        (this.tiltY = 0),
        (this.pointerType = null),
        (this.pressure = 0),
        (this.rotationAngle = 0),
        (this.twist = 0),
        (this.tangentialPressure = 0);
    }
    return (
      Object.defineProperty(t.prototype, 'pointerId', {
        get: function () {
          return this.identifier;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.getLocalPosition = function (t, e, r) {
        return t.worldTransform.applyInverse(r || this.global, e);
      }),
      (t.prototype.copyEvent = function (t) {
        'isPrimary' in t && t.isPrimary && (this.isPrimary = !0),
          (this.button = 'button' in t && t.button);
        var e = 'buttons' in t && t.buttons;
        (this.buttons = Number.isInteger(e) ? e : 'which' in t && t.which),
          (this.width = 'width' in t && t.width),
          (this.height = 'height' in t && t.height),
          (this.tiltX = 'tiltX' in t && t.tiltX),
          (this.tiltY = 'tiltY' in t && t.tiltY),
          (this.pointerType = 'pointerType' in t && t.pointerType),
          (this.pressure = 'pressure' in t && t.pressure),
          (this.rotationAngle = 'rotationAngle' in t && t.rotationAngle),
          (this.twist = ('twist' in t && t.twist) || 0),
          (this.tangentialPressure =
            ('tangentialPressure' in t && t.tangentialPressure) || 0);
      }),
      (t.prototype.reset = function () {
        this.isPrimary = !1;
      }),
      t
    );
  })(),
  tg = function (t, e) {
    return (tg =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  },
  tb = (function () {
    function t() {
      (this.stopped = !1),
        (this.stopsPropagatingAt = null),
        (this.stopPropagationHint = !1),
        (this.target = null),
        (this.currentTarget = null),
        (this.type = null),
        (this.data = null);
    }
    return (
      (t.prototype.stopPropagation = function () {
        (this.stopped = !0),
          (this.stopPropagationHint = !0),
          (this.stopsPropagatingAt = this.currentTarget);
      }),
      (t.prototype.reset = function () {
        (this.stopped = !1),
          (this.stopsPropagatingAt = null),
          (this.stopPropagationHint = !1),
          (this.currentTarget = null),
          (this.target = null);
      }),
      t
    );
  })(),
  tx = (function () {
    function t(e) {
      (this._pointerId = e), (this._flags = t.FLAGS.NONE);
    }
    return (
      (t.prototype._doSet = function (t, e) {
        e ? (this._flags = this._flags | t) : (this._flags = this._flags & ~t);
      }),
      Object.defineProperty(t.prototype, 'pointerId', {
        get: function () {
          return this._pointerId;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'flags', {
        get: function () {
          return this._flags;
        },
        set: function (t) {
          this._flags = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'none', {
        get: function () {
          return this._flags === t.FLAGS.NONE;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'over', {
        get: function () {
          return (this._flags & t.FLAGS.OVER) != 0;
        },
        set: function (e) {
          this._doSet(t.FLAGS.OVER, e);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'rightDown', {
        get: function () {
          return (this._flags & t.FLAGS.RIGHT_DOWN) != 0;
        },
        set: function (e) {
          this._doSet(t.FLAGS.RIGHT_DOWN, e);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'leftDown', {
        get: function () {
          return (this._flags & t.FLAGS.LEFT_DOWN) != 0;
        },
        set: function (e) {
          this._doSet(t.FLAGS.LEFT_DOWN, e);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4,
      })),
      t
    );
  })(),
  tT = (function () {
    function t() {
      this._tempPoint = new to.Point();
    }
    return (
      (t.prototype.recursiveFindHit = function (t, e, r, i, n) {
        if (!e || !e.visible) return !1;
        var o,
          s = t.data.global;
        n = e.interactive || n;
        var a = !1,
          h = n,
          u = !0;
        if (e.hitArea)
          i &&
            (e.worldTransform.applyInverse(s, this._tempPoint),
            e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)
              ? (a = !0)
              : ((i = !1), (u = !1))),
            (h = !1);
        else if (e._mask && i) {
          var l = e._mask.isMaskData ? e._mask.maskObject : e._mask;
          !l ||
            (null === (o = l.containsPoint) || void 0 === o
              ? void 0
              : o.call(l, s)) ||
            (i = !1);
        }
        if (u && e.interactiveChildren && e.children)
          for (var c = e.children, p = c.length - 1; p >= 0; p--) {
            var f = c[p],
              d = this.recursiveFindHit(t, f, r, i, h);
            if (d) {
              if (!f.parent) continue;
              (h = !1), d && (t.target && (i = !1), (a = !0));
            }
          }
        return (
          n &&
            (i &&
              !t.target &&
              !e.hitArea &&
              e.containsPoint &&
              e.containsPoint(s) &&
              (a = !0),
            e.interactive &&
              (a && !t.target && (t.target = e), r && r(t, e, !!a))),
          a
        );
      }),
      (t.prototype.findHit = function (t, e, r, i) {
        this.recursiveFindHit(t, e, r, i, !1);
      }),
      t
    );
  })();
tc.mixin({
  interactive: !1,
  interactiveChildren: !0,
  hitArea: null,
  get buttonMode() {
    return 'pointer' === this.cursor;
  },
  set buttonMode(value) {
    value
      ? (this.cursor = 'pointer')
      : 'pointer' === this.cursor && (this.cursor = null);
  },
  cursor: null,
  get trackedPointers() {
    return (
      void 0 === this._trackedPointers && (this._trackedPointers = {}),
      this._trackedPointers
    );
  },
  _trackedPointers: void 0,
});
var tE = { target: null, data: { global: null } },
  tS = (function (t) {
    function e(e, r) {
      var i = t.call(this) || this;
      return (
        (r = r || {}),
        (i.renderer = e),
        (i.autoPreventDefault =
          void 0 === r.autoPreventDefault || r.autoPreventDefault),
        (i.interactionFrequency = r.interactionFrequency || 10),
        (i.mouse = new tm()),
        (i.mouse.identifier = 1),
        i.mouse.global.set(-999999),
        (i.activeInteractionData = {}),
        (i.activeInteractionData[1] = i.mouse),
        (i.interactionDataPool = []),
        (i.eventData = new tb()),
        (i.interactionDOMElement = null),
        (i.moveWhenInside = !1),
        (i.eventsAdded = !1),
        (i.tickerAdded = !1),
        (i.mouseOverRenderer = !('PointerEvent' in globalThis)),
        (i.supportsTouchEvents = 'ontouchstart' in globalThis),
        (i.supportsPointerEvents = !!globalThis.PointerEvent),
        (i.onPointerUp = i.onPointerUp.bind(i)),
        (i.processPointerUp = i.processPointerUp.bind(i)),
        (i.onPointerCancel = i.onPointerCancel.bind(i)),
        (i.processPointerCancel = i.processPointerCancel.bind(i)),
        (i.onPointerDown = i.onPointerDown.bind(i)),
        (i.processPointerDown = i.processPointerDown.bind(i)),
        (i.onPointerMove = i.onPointerMove.bind(i)),
        (i.processPointerMove = i.processPointerMove.bind(i)),
        (i.onPointerOut = i.onPointerOut.bind(i)),
        (i.processPointerOverOut = i.processPointerOverOut.bind(i)),
        (i.onPointerOver = i.onPointerOver.bind(i)),
        (i.cursorStyles = { default: 'inherit', pointer: 'pointer' }),
        (i.currentCursorMode = null),
        (i.cursor = null),
        (i.resolution = 1),
        (i.delayedEvents = []),
        (i.search = new tT()),
        (i._tempDisplayObject = new tp()),
        (i._eventListenerOptions = { capture: !0, passive: !1 }),
        (i._useSystemTicker =
          void 0 === r.useSystemTicker || r.useSystemTicker),
        i.setTargetElement(i.renderer.view, i.renderer.resolution),
        i
      );
    }
    return (
      !(function (t, e) {
        function r() {
          this.constructor = t;
        }
        tg(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      })(e, t),
      Object.defineProperty(e.prototype, 'useSystemTicker', {
        get: function () {
          return this._useSystemTicker;
        },
        set: function (t) {
          (this._useSystemTicker = t),
            t ? this.addTickerListener() : this.removeTickerListener();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'lastObjectRendered', {
        get: function () {
          return this.renderer._lastObjectRendered || this._tempDisplayObject;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.hitTest = function (t, e) {
        return (
          (tE.target = null),
          (tE.data.global = t),
          e || (e = this.lastObjectRendered),
          this.processInteractive(tE, e, null, !0),
          tE.target
        );
      }),
      (e.prototype.setTargetElement = function (t, e) {
        void 0 === e && (e = 1),
          this.removeTickerListener(),
          this.removeEvents(),
          (this.interactionDOMElement = t),
          (this.resolution = e),
          this.addEvents(),
          this.addTickerListener();
      }),
      (e.prototype.addTickerListener = function () {
        !this.tickerAdded &&
          this.interactionDOMElement &&
          this._useSystemTicker &&
          ((0, tv.Ticker).system.add(
            this.tickerUpdate,
            this,
            tv.UPDATE_PRIORITY.INTERACTION
          ),
          (this.tickerAdded = !0));
      }),
      (e.prototype.removeTickerListener = function () {
        this.tickerAdded &&
          ((0, tv.Ticker).system.remove(this.tickerUpdate, this),
          (this.tickerAdded = !1));
      }),
      (e.prototype.addEvents = function () {
        if (!this.eventsAdded && this.interactionDOMElement) {
          var t = this.interactionDOMElement.style;
          globalThis.navigator.msPointerEnabled
            ? ((t.msContentZooming = 'none'), (t.msTouchAction = 'none'))
            : this.supportsPointerEvents && (t.touchAction = 'none'),
            this.supportsPointerEvents
              ? (globalThis.document.addEventListener(
                  'pointermove',
                  this.onPointerMove,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.addEventListener(
                  'pointerdown',
                  this.onPointerDown,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.addEventListener(
                  'pointerleave',
                  this.onPointerOut,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.addEventListener(
                  'pointerover',
                  this.onPointerOver,
                  this._eventListenerOptions
                ),
                globalThis.addEventListener(
                  'pointercancel',
                  this.onPointerCancel,
                  this._eventListenerOptions
                ),
                globalThis.addEventListener(
                  'pointerup',
                  this.onPointerUp,
                  this._eventListenerOptions
                ))
              : (globalThis.document.addEventListener(
                  'mousemove',
                  this.onPointerMove,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.addEventListener(
                  'mousedown',
                  this.onPointerDown,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.addEventListener(
                  'mouseout',
                  this.onPointerOut,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.addEventListener(
                  'mouseover',
                  this.onPointerOver,
                  this._eventListenerOptions
                ),
                globalThis.addEventListener(
                  'mouseup',
                  this.onPointerUp,
                  this._eventListenerOptions
                )),
            this.supportsTouchEvents &&
              (this.interactionDOMElement.addEventListener(
                'touchstart',
                this.onPointerDown,
                this._eventListenerOptions
              ),
              this.interactionDOMElement.addEventListener(
                'touchcancel',
                this.onPointerCancel,
                this._eventListenerOptions
              ),
              this.interactionDOMElement.addEventListener(
                'touchend',
                this.onPointerUp,
                this._eventListenerOptions
              ),
              this.interactionDOMElement.addEventListener(
                'touchmove',
                this.onPointerMove,
                this._eventListenerOptions
              )),
            (this.eventsAdded = !0);
        }
      }),
      (e.prototype.removeEvents = function () {
        if (this.eventsAdded && this.interactionDOMElement) {
          var t = this.interactionDOMElement.style;
          globalThis.navigator.msPointerEnabled
            ? ((t.msContentZooming = ''), (t.msTouchAction = ''))
            : this.supportsPointerEvents && (t.touchAction = ''),
            this.supportsPointerEvents
              ? (globalThis.document.removeEventListener(
                  'pointermove',
                  this.onPointerMove,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.removeEventListener(
                  'pointerdown',
                  this.onPointerDown,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.removeEventListener(
                  'pointerleave',
                  this.onPointerOut,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.removeEventListener(
                  'pointerover',
                  this.onPointerOver,
                  this._eventListenerOptions
                ),
                globalThis.removeEventListener(
                  'pointercancel',
                  this.onPointerCancel,
                  this._eventListenerOptions
                ),
                globalThis.removeEventListener(
                  'pointerup',
                  this.onPointerUp,
                  this._eventListenerOptions
                ))
              : (globalThis.document.removeEventListener(
                  'mousemove',
                  this.onPointerMove,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.removeEventListener(
                  'mousedown',
                  this.onPointerDown,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.removeEventListener(
                  'mouseout',
                  this.onPointerOut,
                  this._eventListenerOptions
                ),
                this.interactionDOMElement.removeEventListener(
                  'mouseover',
                  this.onPointerOver,
                  this._eventListenerOptions
                ),
                globalThis.removeEventListener(
                  'mouseup',
                  this.onPointerUp,
                  this._eventListenerOptions
                )),
            this.supportsTouchEvents &&
              (this.interactionDOMElement.removeEventListener(
                'touchstart',
                this.onPointerDown,
                this._eventListenerOptions
              ),
              this.interactionDOMElement.removeEventListener(
                'touchcancel',
                this.onPointerCancel,
                this._eventListenerOptions
              ),
              this.interactionDOMElement.removeEventListener(
                'touchend',
                this.onPointerUp,
                this._eventListenerOptions
              ),
              this.interactionDOMElement.removeEventListener(
                'touchmove',
                this.onPointerMove,
                this._eventListenerOptions
              )),
            (this.interactionDOMElement = null),
            (this.eventsAdded = !1);
        }
      }),
      (e.prototype.tickerUpdate = function (t) {
        (this._deltaTime += t),
          this._deltaTime < this.interactionFrequency ||
            ((this._deltaTime = 0), this.update());
      }),
      (e.prototype.update = function () {
        if (this.interactionDOMElement) {
          if (this._didMove) {
            this._didMove = !1;
            return;
          }
          for (var t in ((this.cursor = null), this.activeInteractionData))
            if (this.activeInteractionData.hasOwnProperty(t)) {
              var e = this.activeInteractionData[t];
              if (e.originalEvent && 'touch' !== e.pointerType) {
                var r = this.configureInteractionEventForDOMEvent(
                  this.eventData,
                  e.originalEvent,
                  e
                );
                this.processInteractive(
                  r,
                  this.lastObjectRendered,
                  this.processPointerOverOut,
                  !0
                );
              }
            }
          this.setCursorMode(this.cursor);
        }
      }),
      (e.prototype.setCursorMode = function (t) {
        t = t || 'default';
        var e = !0;
        if (
          (globalThis.OffscreenCanvas &&
            this.interactionDOMElement instanceof OffscreenCanvas &&
            (e = !1),
          this.currentCursorMode !== t)
        ) {
          this.currentCursorMode = t;
          var r = this.cursorStyles[t];
          if (r)
            switch (typeof r) {
              case 'string':
                e && (this.interactionDOMElement.style.cursor = r);
                break;
              case 'function':
                r(t);
                break;
              case 'object':
                e && Object.assign(this.interactionDOMElement.style, r);
            }
          else
            e &&
              'string' == typeof t &&
              !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) &&
              (this.interactionDOMElement.style.cursor = t);
        }
      }),
      (e.prototype.dispatchEvent = function (t, e, r) {
        (!r.stopPropagationHint || t === r.stopsPropagatingAt) &&
          ((r.currentTarget = t), (r.type = e), t.emit(e, r), t[e] && t[e](r));
      }),
      (e.prototype.delayDispatchEvent = function (t, e, r) {
        this.delayedEvents.push({
          displayObject: t,
          eventString: e,
          eventData: r,
        });
      }),
      (e.prototype.mapPositionToPoint = function (t, e, r) {
        i = this.interactionDOMElement.parentElement
          ? this.interactionDOMElement.getBoundingClientRect()
          : {
              x: 0,
              y: 0,
              width: this.interactionDOMElement.width,
              height: this.interactionDOMElement.height,
              left: 0,
              top: 0,
            };
        var i,
          n = 1 / this.resolution;
        (t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) * n),
          (t.y =
            (r - i.top) * (this.interactionDOMElement.height / i.height) * n);
      }),
      (e.prototype.processInteractive = function (t, e, r, i) {
        var n = this.search.findHit(t, e, r, i),
          o = this.delayedEvents;
        if (!o.length) return n;
        t.stopPropagationHint = !1;
        var s = o.length;
        this.delayedEvents = [];
        for (var a = 0; a < s; a++) {
          var h = o[a],
            u = h.displayObject,
            l = h.eventString,
            c = h.eventData;
          c.stopsPropagatingAt === u && (c.stopPropagationHint = !0),
            this.dispatchEvent(u, l, c);
        }
        return n;
      }),
      (e.prototype.onPointerDown = function (t) {
        if (!this.supportsTouchEvents || 'touch' !== t.pointerType) {
          var e = this.normalizeToPointerData(t);
          this.autoPreventDefault &&
            e[0].isNormalized &&
            (t.cancelable || !('cancelable' in t)) &&
            t.preventDefault();
          for (var r = e.length, i = 0; i < r; i++) {
            var n = e[i],
              o = this.getInteractionDataForPointerId(n),
              s = this.configureInteractionEventForDOMEvent(
                this.eventData,
                n,
                o
              );
            if (
              ((s.data.originalEvent = t),
              this.processInteractive(
                s,
                this.lastObjectRendered,
                this.processPointerDown,
                !0
              ),
              this.emit('pointerdown', s),
              'touch' === n.pointerType)
            )
              this.emit('touchstart', s);
            else if ('mouse' === n.pointerType || 'pen' === n.pointerType) {
              var a = 2 === n.button;
              this.emit(a ? 'rightdown' : 'mousedown', this.eventData);
            }
          }
        }
      }),
      (e.prototype.processPointerDown = function (t, e, r) {
        var i = t.data,
          n = t.data.identifier;
        if (r) {
          if (
            (e.trackedPointers[n] || (e.trackedPointers[n] = new tx(n)),
            this.dispatchEvent(e, 'pointerdown', t),
            'touch' === i.pointerType)
          )
            this.dispatchEvent(e, 'touchstart', t);
          else if ('mouse' === i.pointerType || 'pen' === i.pointerType) {
            var o = 2 === i.button;
            o
              ? (e.trackedPointers[n].rightDown = !0)
              : (e.trackedPointers[n].leftDown = !0),
              this.dispatchEvent(e, o ? 'rightdown' : 'mousedown', t);
          }
        }
      }),
      (e.prototype.onPointerComplete = function (t, e, r) {
        var i = this.normalizeToPointerData(t),
          n = i.length,
          o = t.target;
        t.composedPath &&
          t.composedPath().length > 0 &&
          (o = t.composedPath()[0]);
        for (
          var s = o !== this.interactionDOMElement ? 'outside' : '', a = 0;
          a < n;
          a++
        ) {
          var h = i[a],
            u = this.getInteractionDataForPointerId(h),
            l = this.configureInteractionEventForDOMEvent(this.eventData, h, u);
          if (
            ((l.data.originalEvent = t),
            this.processInteractive(l, this.lastObjectRendered, r, e || !s),
            this.emit(e ? 'pointercancel' : 'pointerup' + s, l),
            'mouse' === h.pointerType || 'pen' === h.pointerType)
          ) {
            var c = 2 === h.button;
            this.emit(c ? 'rightup' + s : 'mouseup' + s, l);
          } else
            'touch' === h.pointerType &&
              (this.emit(e ? 'touchcancel' : 'touchend' + s, l),
              this.releaseInteractionDataForPointerId(h.pointerId));
        }
      }),
      (e.prototype.onPointerCancel = function (t) {
        (this.supportsTouchEvents && 'touch' === t.pointerType) ||
          this.onPointerComplete(t, !0, this.processPointerCancel);
      }),
      (e.prototype.processPointerCancel = function (t, e) {
        var r = t.data,
          i = t.data.identifier;
        void 0 !== e.trackedPointers[i] &&
          (delete e.trackedPointers[i],
          this.dispatchEvent(e, 'pointercancel', t),
          'touch' === r.pointerType && this.dispatchEvent(e, 'touchcancel', t));
      }),
      (e.prototype.onPointerUp = function (t) {
        (this.supportsTouchEvents && 'touch' === t.pointerType) ||
          this.onPointerComplete(t, !1, this.processPointerUp);
      }),
      (e.prototype.processPointerUp = function (t, e, r) {
        var i = t.data,
          n = t.data.identifier,
          o = e.trackedPointers[n],
          s = 'touch' === i.pointerType,
          a = 'mouse' === i.pointerType || 'pen' === i.pointerType,
          h = !1;
        if (a) {
          var u = 2 === i.button,
            l = tx.FLAGS,
            c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
            p = void 0 !== o && o.flags & c;
          r
            ? (this.dispatchEvent(e, u ? 'rightup' : 'mouseup', t),
              p &&
                (this.dispatchEvent(e, u ? 'rightclick' : 'click', t),
                (h = !0)))
            : p &&
              this.dispatchEvent(e, u ? 'rightupoutside' : 'mouseupoutside', t),
            o && (u ? (o.rightDown = !1) : (o.leftDown = !1));
        }
        r
          ? (this.dispatchEvent(e, 'pointerup', t),
            s && this.dispatchEvent(e, 'touchend', t),
            o &&
              ((!a || h) && this.dispatchEvent(e, 'pointertap', t),
              s && (this.dispatchEvent(e, 'tap', t), (o.over = !1))))
          : o &&
            (this.dispatchEvent(e, 'pointerupoutside', t),
            s && this.dispatchEvent(e, 'touchendoutside', t)),
          o && o.none && delete e.trackedPointers[n];
      }),
      (e.prototype.onPointerMove = function (t) {
        if (!this.supportsTouchEvents || 'touch' !== t.pointerType) {
          var e = this.normalizeToPointerData(t);
          ('mouse' === e[0].pointerType || 'pen' === e[0].pointerType) &&
            ((this._didMove = !0), (this.cursor = null));
          for (var r = e.length, i = 0; i < r; i++) {
            var n = e[i],
              o = this.getInteractionDataForPointerId(n),
              s = this.configureInteractionEventForDOMEvent(
                this.eventData,
                n,
                o
              );
            (s.data.originalEvent = t),
              this.processInteractive(
                s,
                this.lastObjectRendered,
                this.processPointerMove,
                !0
              ),
              this.emit('pointermove', s),
              'touch' === n.pointerType && this.emit('touchmove', s),
              ('mouse' === n.pointerType || 'pen' === n.pointerType) &&
                this.emit('mousemove', s);
          }
          'mouse' === e[0].pointerType && this.setCursorMode(this.cursor);
        }
      }),
      (e.prototype.processPointerMove = function (t, e, r) {
        var i = t.data,
          n = 'touch' === i.pointerType,
          o = 'mouse' === i.pointerType || 'pen' === i.pointerType;
        o && this.processPointerOverOut(t, e, r),
          (!this.moveWhenInside || r) &&
            (this.dispatchEvent(e, 'pointermove', t),
            n && this.dispatchEvent(e, 'touchmove', t),
            o && this.dispatchEvent(e, 'mousemove', t));
      }),
      (e.prototype.onPointerOut = function (t) {
        if (!this.supportsTouchEvents || 'touch' !== t.pointerType) {
          var e = this.normalizeToPointerData(t)[0];
          'mouse' === e.pointerType &&
            ((this.mouseOverRenderer = !1), this.setCursorMode(null));
          var r = this.getInteractionDataForPointerId(e),
            i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
          (i.data.originalEvent = e),
            this.processInteractive(
              i,
              this.lastObjectRendered,
              this.processPointerOverOut,
              !1
            ),
            this.emit('pointerout', i),
            'mouse' === e.pointerType || 'pen' === e.pointerType
              ? this.emit('mouseout', i)
              : this.releaseInteractionDataForPointerId(r.identifier);
        }
      }),
      (e.prototype.processPointerOverOut = function (t, e, r) {
        var i = t.data,
          n = t.data.identifier,
          o = 'mouse' === i.pointerType || 'pen' === i.pointerType,
          s = e.trackedPointers[n];
        r && !s && (s = e.trackedPointers[n] = new tx(n)),
          void 0 !== s &&
            (r && this.mouseOverRenderer
              ? (!s.over &&
                  ((s.over = !0),
                  this.delayDispatchEvent(e, 'pointerover', t),
                  o && this.delayDispatchEvent(e, 'mouseover', t)),
                o && null === this.cursor && (this.cursor = e.cursor))
              : s.over &&
                ((s.over = !1),
                this.dispatchEvent(e, 'pointerout', this.eventData),
                o && this.dispatchEvent(e, 'mouseout', t),
                s.none && delete e.trackedPointers[n]));
      }),
      (e.prototype.onPointerOver = function (t) {
        if (!this.supportsTouchEvents || 'touch' !== t.pointerType) {
          var e = this.normalizeToPointerData(t)[0],
            r = this.getInteractionDataForPointerId(e),
            i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
          (i.data.originalEvent = e),
            'mouse' === e.pointerType && (this.mouseOverRenderer = !0),
            this.emit('pointerover', i),
            ('mouse' === e.pointerType || 'pen' === e.pointerType) &&
              this.emit('mouseover', i);
        }
      }),
      (e.prototype.getInteractionDataForPointerId = function (t) {
        var e,
          r = t.pointerId;
        return (
          1 === r || 'mouse' === t.pointerType
            ? (e = this.mouse)
            : this.activeInteractionData[r]
            ? (e = this.activeInteractionData[r])
            : (((e = this.interactionDataPool.pop() || new tm()).identifier =
                r),
              (this.activeInteractionData[r] = e)),
          e.copyEvent(t),
          e
        );
      }),
      (e.prototype.releaseInteractionDataForPointerId = function (t) {
        var e = this.activeInteractionData[t];
        e &&
          (delete this.activeInteractionData[t],
          e.reset(),
          this.interactionDataPool.push(e));
      }),
      (e.prototype.configureInteractionEventForDOMEvent = function (t, e, r) {
        return (
          (t.data = r),
          this.mapPositionToPoint(r.global, e.clientX, e.clientY),
          'touch' === e.pointerType &&
            ((e.globalX = r.global.x), (e.globalY = r.global.y)),
          (r.originalEvent = e),
          t.reset(),
          t
        );
      }),
      (e.prototype.normalizeToPointerData = function (t) {
        var e = [];
        if (this.supportsTouchEvents && t instanceof TouchEvent)
          for (var r = 0, i = t.changedTouches.length; r < i; r++) {
            var n = t.changedTouches[r];
            void 0 === n.button && (n.button = t.touches.length ? 1 : 0),
              void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0),
              void 0 === n.isPrimary &&
                (n.isPrimary =
                  1 === t.touches.length && 'touchstart' === t.type),
              void 0 === n.width && (n.width = n.radiusX || 1),
              void 0 === n.height && (n.height = n.radiusY || 1),
              void 0 === n.tiltX && (n.tiltX = 0),
              void 0 === n.tiltY && (n.tiltY = 0),
              void 0 === n.pointerType && (n.pointerType = 'touch'),
              void 0 === n.pointerId && (n.pointerId = n.identifier || 0),
              void 0 === n.pressure && (n.pressure = n.force || 0.5),
              void 0 === n.twist && (n.twist = 0),
              void 0 === n.tangentialPressure && (n.tangentialPressure = 0),
              void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX),
              void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY),
              (n.isNormalized = !0),
              e.push(n);
          }
        else
          (!globalThis.MouseEvent ||
            (t instanceof MouseEvent &&
              (!this.supportsPointerEvents ||
                !(t instanceof globalThis.PointerEvent)))) &&
            (void 0 === t.isPrimary && (t.isPrimary = !0),
            void 0 === t.width && (t.width = 1),
            void 0 === t.height && (t.height = 1),
            void 0 === t.tiltX && (t.tiltX = 0),
            void 0 === t.tiltY && (t.tiltY = 0),
            void 0 === t.pointerType && (t.pointerType = 'mouse'),
            void 0 === t.pointerId && (t.pointerId = 1),
            void 0 === t.pressure && (t.pressure = 0.5),
            void 0 === t.twist && (t.twist = 0),
            void 0 === t.tangentialPressure && (t.tangentialPressure = 0),
            (t.isNormalized = !0)),
            e.push(t);
        return e;
      }),
      (e.prototype.destroy = function () {
        this.removeEvents(),
          this.removeTickerListener(),
          this.removeAllListeners(),
          (this.renderer = null),
          (this.mouse = null),
          (this.eventData = null),
          (this.interactionDOMElement = null),
          (this.onPointerDown = null),
          (this.processPointerDown = null),
          (this.onPointerUp = null),
          (this.processPointerUp = null),
          (this.onPointerCancel = null),
          (this.processPointerCancel = null),
          (this.onPointerMove = null),
          (this.processPointerMove = null),
          (this.onPointerOut = null),
          (this.processPointerOverOut = null),
          (this.onPointerOver = null),
          (this.search = null);
      }),
      (e.extension = {
        name: 'interaction',
        type: [
          t_.ExtensionType.RendererPlugin,
          t_.ExtensionType.CanvasRendererPlugin,
        ],
      }),
      e
    );
  })(I(ts)),
  t_ = F('jH9fL'),
  ta = F('6n98C'),
  ti = F('e70pz'),
  to = F('960oV'),
  t_ = F('jH9fL'),
  tA = new to.Rectangle(),
  tR = (function () {
    function t(t) {
      this.renderer = t;
    }
    return (
      (t.prototype.image = function (t, e, r) {
        var i = new Image();
        return (i.src = this.base64(t, e, r)), i;
      }),
      (t.prototype.base64 = function (t, e, r) {
        return this.canvas(t).toDataURL(e, r);
      }),
      (t.prototype.canvas = function (e, r) {
        var i = this._rawPixels(e, r),
          n = i.pixels,
          o = i.width,
          s = i.height,
          a = i.flipY,
          h = new ti.CanvasRenderTarget(o, s, 1),
          u = h.context.getImageData(0, 0, o, s);
        if (
          (t.arrayPostDivide(n, u.data), h.context.putImageData(u, 0, 0), a)
        ) {
          var l = new ti.CanvasRenderTarget(h.width, h.height, 1);
          l.context.scale(1, -1),
            l.context.drawImage(h.canvas, 0, -s),
            h.destroy(),
            (h = l);
        }
        return h.canvas;
      }),
      (t.prototype.pixels = function (e, r) {
        var i = this._rawPixels(e, r).pixels;
        return t.arrayPostDivide(i, i), i;
      }),
      (t.prototype._rawPixels = function (t, e) {
        var r,
          i,
          n = this.renderer,
          o = !1,
          s = !1;
        if (t) {
          if (t instanceof t_.RenderTexture) i = t;
          else {
            var a =
              n.context.webGLVersion >= 2
                ? n.multisample
                : ta.MSAA_QUALITY.NONE;
            if (
              ((i = this.renderer.generateTexture(t, { multisample: a })),
              a !== ta.MSAA_QUALITY.NONE)
            ) {
              var h = (0, t_.RenderTexture).create({
                width: i.width,
                height: i.height,
              });
              n.framebuffer.bind(i.framebuffer),
                n.framebuffer.blit(h.framebuffer),
                n.framebuffer.bind(null),
                i.destroy(!0),
                (i = h);
            }
            s = !0;
          }
        }
        i
          ? ((r = i.baseTexture.resolution),
            (e = null != e ? e : i.frame),
            (o = !1),
            n.renderTexture.bind(i))
          : ((r = n.resolution),
            e || (((e = tA).width = n.width), (e.height = n.height)),
            (o = !0),
            n.renderTexture.bind(null));
        var u = Math.round(e.width * r),
          l = Math.round(e.height * r),
          c = new Uint8Array(4 * u * l),
          p = n.gl;
        return (
          p.readPixels(
            Math.round(e.x * r),
            Math.round(e.y * r),
            u,
            l,
            p.RGBA,
            p.UNSIGNED_BYTE,
            c
          ),
          s && i.destroy(!0),
          { pixels: c, width: u, height: l, flipY: o }
        );
      }),
      (t.prototype.destroy = function () {
        this.renderer = null;
      }),
      (t.arrayPostDivide = function (t, e) {
        for (var r = 0; r < t.length; r += 4) {
          var i = (e[r + 3] = t[r + 3]);
          0 !== i
            ? ((e[r] = Math.round(Math.min((255 * t[r]) / i, 255))),
              (e[r + 1] = Math.round(Math.min((255 * t[r + 1]) / i, 255))),
              (e[r + 2] = Math.round(Math.min((255 * t[r + 2]) / i, 255))))
            : ((e[r] = t[r]), (e[r + 1] = t[r + 1]), (e[r + 2] = t[r + 2]));
        }
      }),
      (t.extension = {
        name: 'extract',
        type: t_.ExtensionType.RendererPlugin,
      }),
      t
    );
  })(),
  t_ = F('jH9fL'),
  ti = F('e70pz'),
  tO = (function () {
    function t(t, e, r) {
      void 0 === e && (e = !1),
        (this._fn = t),
        (this._once = e),
        (this._thisArg = r),
        (this._next = this._prev = this._owner = null);
    }
    return (
      (t.prototype.detach = function () {
        return null !== this._owner && (this._owner.detach(this), !0);
      }),
      t
    );
  })();
function tM(t, e) {
  return (
    t._head ? ((t._tail._next = e), (e._prev = t._tail)) : (t._head = e),
    (t._tail = e),
    (e._owner = t),
    e
  );
}
var tP = (function () {
  function t() {
    this._head = this._tail = void 0;
  }
  return (
    (t.prototype.handlers = function (t) {
      void 0 === t && (t = !1);
      var e = this._head;
      if (t) return !!e;
      for (var r = []; e; ) r.push(e), (e = e._next);
      return r;
    }),
    (t.prototype.has = function (t) {
      if (!(t instanceof tO))
        throw Error(
          'MiniSignal#has(): First arg must be a SignalBinding object.'
        );
      return t._owner === this;
    }),
    (t.prototype.dispatch = function () {
      for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
        e[r] = t[r];
      var i = this._head;
      if (!i) return !1;
      for (; i; )
        i._once && this.detach(i), i._fn.apply(i._thisArg, e), (i = i._next);
      return !0;
    }),
    (t.prototype.add = function (t, e) {
      if ((void 0 === e && (e = null), 'function' != typeof t))
        throw Error('MiniSignal#add(): First arg must be a Function.');
      return tM(this, new tO(t, !1, e));
    }),
    (t.prototype.once = function (t, e) {
      if ((void 0 === e && (e = null), 'function' != typeof t))
        throw Error('MiniSignal#once(): First arg must be a Function.');
      return tM(this, new tO(t, !0, e));
    }),
    (t.prototype.detach = function (t) {
      if (!(t instanceof tO))
        throw Error(
          'MiniSignal#detach(): First arg must be a SignalBinding object.'
        );
      return (
        t._owner !== this ||
          (t._prev && (t._prev._next = t._next),
          t._next && (t._next._prev = t._prev),
          t === this._head
            ? ((this._head = t._next), null === t._next && (this._tail = null))
            : t === this._tail &&
              ((this._tail = t._prev), (this._tail._next = null)),
          (t._owner = null)),
        this
      );
    }),
    (t.prototype.detachAll = function () {
      var t = this._head;
      if (!t) return this;
      for (this._head = this._tail = null; t; )
        (t._owner = null), (t = t._next);
      return this;
    }),
    t
  );
})();
function tI(t, e) {
  e = e || {};
  for (
    var r = {
        key: [
          'source',
          'protocol',
          'authority',
          'userInfo',
          'user',
          'password',
          'host',
          'port',
          'relative',
          'path',
          'directory',
          'file',
          'query',
          'anchor',
        ],
        q: { name: 'queryKey', parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
        parser: {
          strict:
            /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose:
            /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        },
      },
      i = r.parser[e.strictMode ? 'strict' : 'loose'].exec(t),
      n = {},
      o = 14;
    o--;

  )
    n[r.key[o]] = i[o] || '';
  return (
    (n[r.q.name] = {}),
    n[r.key[12]].replace(r.q.parser, function (t, e, i) {
      e && (n[r.q.name][e] = i);
    }),
    n
  );
}
var tw = null;
function tD() {}
function tC(t, e, r) {
  e && 0 === e.indexOf('.') && (e = e.substring(1)), e && (t[e] = r);
}
function tF(t) {
  return t.toString().replace('object ', '');
}
var tN = (function () {
  function t(e, r, i) {
    if (
      ((this._dequeue = tD),
      (this._onLoadBinding = null),
      (this._elementTimer = 0),
      (this._boundComplete = null),
      (this._boundOnError = null),
      (this._boundOnProgress = null),
      (this._boundOnTimeout = null),
      (this._boundXhrOnError = null),
      (this._boundXhrOnTimeout = null),
      (this._boundXhrOnAbort = null),
      (this._boundXhrOnLoad = null),
      'string' != typeof e || 'string' != typeof r)
    )
      throw Error(
        'Both name and url are required for constructing a resource.'
      );
    (i = i || {}),
      (this._flags = 0),
      this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf('data:')),
      (this.name = e),
      (this.url = r),
      (this.extension = this._getExtension()),
      (this.data = null),
      (this.crossOrigin = !0 === i.crossOrigin ? 'anonymous' : i.crossOrigin),
      (this.timeout = i.timeout || 0),
      (this.loadType = i.loadType || this._determineLoadType()),
      (this.xhrType = i.xhrType),
      (this.metadata = i.metadata || {}),
      (this.error = null),
      (this.xhr = null),
      (this.children = []),
      (this.type = t.TYPE.UNKNOWN),
      (this.progressChunk = 0),
      (this._dequeue = tD),
      (this._onLoadBinding = null),
      (this._elementTimer = 0),
      (this._boundComplete = this.complete.bind(this)),
      (this._boundOnError = this._onError.bind(this)),
      (this._boundOnProgress = this._onProgress.bind(this)),
      (this._boundOnTimeout = this._onTimeout.bind(this)),
      (this._boundXhrOnError = this._xhrOnError.bind(this)),
      (this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this)),
      (this._boundXhrOnAbort = this._xhrOnAbort.bind(this)),
      (this._boundXhrOnLoad = this._xhrOnLoad.bind(this)),
      (this.onStart = new tP()),
      (this.onProgress = new tP()),
      (this.onComplete = new tP()),
      (this.onAfterMiddleware = new tP());
  }
  return (
    (t.setExtensionLoadType = function (e, r) {
      tC(t._loadTypeMap, e, r);
    }),
    (t.setExtensionXhrType = function (e, r) {
      tC(t._xhrTypeMap, e, r);
    }),
    Object.defineProperty(t.prototype, 'isDataUrl', {
      get: function () {
        return this._hasFlag(t.STATUS_FLAGS.DATA_URL);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, 'isComplete', {
      get: function () {
        return this._hasFlag(t.STATUS_FLAGS.COMPLETE);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, 'isLoading', {
      get: function () {
        return this._hasFlag(t.STATUS_FLAGS.LOADING);
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.complete = function () {
      this._clearEvents(), this._finish();
    }),
    (t.prototype.abort = function (e) {
      if (!this.error) {
        if (((this.error = Error(e)), this._clearEvents(), this.xhr))
          this.xhr.abort();
        else if (this.xdr) this.xdr.abort();
        else if (this.data) {
          if (this.data.src) this.data.src = t.EMPTY_GIF;
          else
            for (; this.data.firstChild; )
              this.data.removeChild(this.data.firstChild);
        }
        this._finish();
      }
    }),
    (t.prototype.load = function (e) {
      var r = this;
      if (!this.isLoading) {
        if (this.isComplete) {
          e &&
            setTimeout(function () {
              return e(r);
            }, 1);
          return;
        }
        switch (
          (e && this.onComplete.once(e),
          this._setFlag(t.STATUS_FLAGS.LOADING, !0),
          this.onStart.dispatch(this),
          (!1 === this.crossOrigin || 'string' != typeof this.crossOrigin) &&
            (this.crossOrigin = this._determineCrossOrigin(this.url)),
          this.loadType)
        ) {
          case t.LOAD_TYPE.IMAGE:
            (this.type = t.TYPE.IMAGE), this._loadElement('image');
            break;
          case t.LOAD_TYPE.AUDIO:
            (this.type = t.TYPE.AUDIO), this._loadSourceElement('audio');
            break;
          case t.LOAD_TYPE.VIDEO:
            (this.type = t.TYPE.VIDEO), this._loadSourceElement('video');
            break;
          case t.LOAD_TYPE.XHR:
          default:
            void 0 === d &&
              (d = !!(
                globalThis.XDomainRequest &&
                !('withCredentials' in new XMLHttpRequest())
              )),
              d && this.crossOrigin ? this._loadXdr() : this._loadXhr();
        }
      }
    }),
    (t.prototype._hasFlag = function (t) {
      return (this._flags & t) != 0;
    }),
    (t.prototype._setFlag = function (t, e) {
      this._flags = e ? this._flags | t : this._flags & ~t;
    }),
    (t.prototype._clearEvents = function () {
      clearTimeout(this._elementTimer),
        this.data &&
          this.data.removeEventListener &&
          (this.data.removeEventListener('error', this._boundOnError, !1),
          this.data.removeEventListener('load', this._boundComplete, !1),
          this.data.removeEventListener('progress', this._boundOnProgress, !1),
          this.data.removeEventListener(
            'canplaythrough',
            this._boundComplete,
            !1
          )),
        this.xhr &&
          (this.xhr.removeEventListener
            ? (this.xhr.removeEventListener('error', this._boundXhrOnError, !1),
              this.xhr.removeEventListener(
                'timeout',
                this._boundXhrOnTimeout,
                !1
              ),
              this.xhr.removeEventListener('abort', this._boundXhrOnAbort, !1),
              this.xhr.removeEventListener(
                'progress',
                this._boundOnProgress,
                !1
              ),
              this.xhr.removeEventListener('load', this._boundXhrOnLoad, !1))
            : ((this.xhr.onerror = null),
              (this.xhr.ontimeout = null),
              (this.xhr.onprogress = null),
              (this.xhr.onload = null)));
    }),
    (t.prototype._finish = function () {
      if (this.isComplete)
        throw Error('Complete called again for an already completed resource.');
      this._setFlag(t.STATUS_FLAGS.COMPLETE, !0),
        this._setFlag(t.STATUS_FLAGS.LOADING, !1),
        this.onComplete.dispatch(this);
    }),
    (t.prototype._loadElement = function (t) {
      this.metadata.loadElement
        ? (this.data = this.metadata.loadElement)
        : 'image' === t && void 0 !== globalThis.Image
        ? (this.data = new Image())
        : (this.data = document.createElement(t)),
        this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
        this.metadata.skipSource || (this.data.src = this.url),
        this.data.addEventListener('error', this._boundOnError, !1),
        this.data.addEventListener('load', this._boundComplete, !1),
        this.data.addEventListener('progress', this._boundOnProgress, !1),
        this.timeout &&
          (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
    }),
    (t.prototype._loadSourceElement = function (t) {
      if (
        (this.metadata.loadElement
          ? (this.data = this.metadata.loadElement)
          : 'audio' === t && void 0 !== globalThis.Audio
          ? (this.data = new Audio())
          : (this.data = document.createElement(t)),
        null === this.data)
      ) {
        this.abort('Unsupported element: ' + t);
        return;
      }
      if (
        (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
        !this.metadata.skipSource)
      ) {
        if (navigator.isCocoonJS)
          this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
        else if (Array.isArray(this.url))
          for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r)
            this.data.appendChild(
              this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e)
            );
        else {
          var e = this.metadata.mimeType;
          this.data.appendChild(
            this._createSource(t, this.url, Array.isArray(e) ? e[0] : e)
          );
        }
      }
      this.data.addEventListener('error', this._boundOnError, !1),
        this.data.addEventListener('load', this._boundComplete, !1),
        this.data.addEventListener('progress', this._boundOnProgress, !1),
        this.data.addEventListener('canplaythrough', this._boundComplete, !1),
        this.data.load(),
        this.timeout &&
          (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
    }),
    (t.prototype._loadXhr = function () {
      'string' != typeof this.xhrType &&
        (this.xhrType = this._determineXhrType());
      var e = (this.xhr = new XMLHttpRequest());
      'use-credentials' === this.crossOrigin && (e.withCredentials = !0),
        e.open('GET', this.url, !0),
        (e.timeout = this.timeout),
        this.xhrType === t.XHR_RESPONSE_TYPE.JSON ||
        this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT
          ? (e.responseType = t.XHR_RESPONSE_TYPE.TEXT)
          : (e.responseType = this.xhrType),
        e.addEventListener('error', this._boundXhrOnError, !1),
        e.addEventListener('timeout', this._boundXhrOnTimeout, !1),
        e.addEventListener('abort', this._boundXhrOnAbort, !1),
        e.addEventListener('progress', this._boundOnProgress, !1),
        e.addEventListener('load', this._boundXhrOnLoad, !1),
        e.send();
    }),
    (t.prototype._loadXdr = function () {
      'string' != typeof this.xhrType &&
        (this.xhrType = this._determineXhrType());
      var t = (this.xhr = new globalThis.XDomainRequest());
      (t.timeout = this.timeout || 5e3),
        (t.onerror = this._boundXhrOnError),
        (t.ontimeout = this._boundXhrOnTimeout),
        (t.onprogress = this._boundOnProgress),
        (t.onload = this._boundXhrOnLoad),
        t.open('GET', this.url, !0),
        setTimeout(function () {
          return t.send();
        }, 1);
    }),
    (t.prototype._createSource = function (t, e, r) {
      r || (r = t + '/' + this._getExtension(e));
      var i = document.createElement('source');
      return (i.src = e), (i.type = r), i;
    }),
    (t.prototype._onError = function (t) {
      this.abort('Failed to load element using: ' + t.target.nodeName);
    }),
    (t.prototype._onProgress = function (t) {
      t &&
        t.lengthComputable &&
        this.onProgress.dispatch(this, t.loaded / t.total);
    }),
    (t.prototype._onTimeout = function () {
      this.abort('Load timed out.');
    }),
    (t.prototype._xhrOnError = function () {
      var t = this.xhr;
      this.abort(
        tF(t) +
          ' Request failed. Status: ' +
          t.status +
          ', text: "' +
          t.statusText +
          '"'
      );
    }),
    (t.prototype._xhrOnTimeout = function () {
      var t = this.xhr;
      this.abort(tF(t) + ' Request timed out.');
    }),
    (t.prototype._xhrOnAbort = function () {
      var t = this.xhr;
      this.abort(tF(t) + ' Request was aborted by the user.');
    }),
    (t.prototype._xhrOnLoad = function () {
      var e = this.xhr,
        r = '',
        i = void 0 === e.status ? 200 : e.status;
      if (
        (('' === e.responseType ||
          'text' === e.responseType ||
          void 0 === e.responseType) &&
          (r = e.responseText),
        0 === i &&
        (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER)
          ? (i = 200)
          : 1223 === i && (i = 204),
        ((i / 100) | 0) == 2)
      ) {
        if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT)
          (this.data = r), (this.type = t.TYPE.TEXT);
        else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON)
          try {
            (this.data = JSON.parse(r)), (this.type = t.TYPE.JSON);
          } catch (t) {
            this.abort('Error trying to parse loaded json: ' + t);
            return;
          }
        else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT)
          try {
            if (globalThis.DOMParser) {
              var n = new DOMParser();
              this.data = n.parseFromString(r, 'text/xml');
            } else {
              var o = document.createElement('div');
              (o.innerHTML = r), (this.data = o);
            }
            this.type = t.TYPE.XML;
          } catch (t) {
            this.abort('Error trying to parse loaded xml: ' + t);
            return;
          }
        else this.data = e.response || r;
      } else {
        this.abort('[' + e.status + '] ' + e.statusText + ': ' + e.responseURL);
        return;
      }
      this.complete();
    }),
    (t.prototype._determineCrossOrigin = function (t, e) {
      if (0 === t.indexOf('data:')) return '';
      if (globalThis.origin !== globalThis.location.origin) return 'anonymous';
      (e = e || globalThis.location),
        tw || (tw = document.createElement('a')),
        (tw.href = t);
      var r = tI(tw.href, { strictMode: !0 }),
        i = (!r.port && '' === e.port) || r.port === e.port,
        n = r.protocol ? r.protocol + ':' : '';
      return r.host === e.hostname && i && n === e.protocol ? '' : 'anonymous';
    }),
    (t.prototype._determineXhrType = function () {
      return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT;
    }),
    (t.prototype._determineLoadType = function () {
      return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR;
    }),
    (t.prototype._getExtension = function (t) {
      void 0 === t && (t = this.url);
      var e = '';
      if (this.isDataUrl) {
        var r = t.indexOf('/');
        e = t.substring(r + 1, t.indexOf(';', r));
      } else {
        var i = t.indexOf('?'),
          n = t.indexOf('#'),
          o = Math.min(i > -1 ? i : t.length, n > -1 ? n : t.length);
        e = (t = t.substring(0, o)).substring(t.lastIndexOf('.') + 1);
      }
      return e.toLowerCase();
    }),
    (t.prototype._getMimeFromXhrType = function (e) {
      switch (e) {
        case t.XHR_RESPONSE_TYPE.BUFFER:
          return 'application/octet-binary';
        case t.XHR_RESPONSE_TYPE.BLOB:
          return 'application/blob';
        case t.XHR_RESPONSE_TYPE.DOCUMENT:
          return 'application/xml';
        case t.XHR_RESPONSE_TYPE.JSON:
          return 'application/json';
        case t.XHR_RESPONSE_TYPE.DEFAULT:
        case t.XHR_RESPONSE_TYPE.TEXT:
        default:
          return 'text/plain';
      }
    }),
    t
  );
})();
function tL() {}
((e = (t = tN || (tN = {})).STATUS_FLAGS || (t.STATUS_FLAGS = {}))[
  (e.NONE = 0)
] = 'NONE'),
  (e[(e.DATA_URL = 1)] = 'DATA_URL'),
  (e[(e.COMPLETE = 2)] = 'COMPLETE'),
  (e[(e.LOADING = 4)] = 'LOADING'),
  ((r = t.TYPE || (t.TYPE = {}))[(r.UNKNOWN = 0)] = 'UNKNOWN'),
  (r[(r.JSON = 1)] = 'JSON'),
  (r[(r.XML = 2)] = 'XML'),
  (r[(r.IMAGE = 3)] = 'IMAGE'),
  (r[(r.AUDIO = 4)] = 'AUDIO'),
  (r[(r.VIDEO = 5)] = 'VIDEO'),
  (r[(r.TEXT = 6)] = 'TEXT'),
  ((i = t.LOAD_TYPE || (t.LOAD_TYPE = {}))[(i.XHR = 1)] = 'XHR'),
  (i[(i.IMAGE = 2)] = 'IMAGE'),
  (i[(i.AUDIO = 3)] = 'AUDIO'),
  (i[(i.VIDEO = 4)] = 'VIDEO'),
  ((n = t.XHR_RESPONSE_TYPE || (t.XHR_RESPONSE_TYPE = {})).DEFAULT = 'text'),
  (n.BUFFER = 'arraybuffer'),
  (n.BLOB = 'blob'),
  (n.DOCUMENT = 'document'),
  (n.JSON = 'json'),
  (n.TEXT = 'text'),
  (t._loadTypeMap = {
    gif: t.LOAD_TYPE.IMAGE,
    png: t.LOAD_TYPE.IMAGE,
    bmp: t.LOAD_TYPE.IMAGE,
    jpg: t.LOAD_TYPE.IMAGE,
    jpeg: t.LOAD_TYPE.IMAGE,
    tif: t.LOAD_TYPE.IMAGE,
    tiff: t.LOAD_TYPE.IMAGE,
    webp: t.LOAD_TYPE.IMAGE,
    tga: t.LOAD_TYPE.IMAGE,
    avif: t.LOAD_TYPE.IMAGE,
    svg: t.LOAD_TYPE.IMAGE,
    'svg+xml': t.LOAD_TYPE.IMAGE,
    mp3: t.LOAD_TYPE.AUDIO,
    ogg: t.LOAD_TYPE.AUDIO,
    wav: t.LOAD_TYPE.AUDIO,
    mp4: t.LOAD_TYPE.VIDEO,
    webm: t.LOAD_TYPE.VIDEO,
  }),
  (t._xhrTypeMap = {
    xhtml: t.XHR_RESPONSE_TYPE.DOCUMENT,
    html: t.XHR_RESPONSE_TYPE.DOCUMENT,
    htm: t.XHR_RESPONSE_TYPE.DOCUMENT,
    xml: t.XHR_RESPONSE_TYPE.DOCUMENT,
    tmx: t.XHR_RESPONSE_TYPE.DOCUMENT,
    svg: t.XHR_RESPONSE_TYPE.DOCUMENT,
    tsx: t.XHR_RESPONSE_TYPE.DOCUMENT,
    gif: t.XHR_RESPONSE_TYPE.BLOB,
    png: t.XHR_RESPONSE_TYPE.BLOB,
    bmp: t.XHR_RESPONSE_TYPE.BLOB,
    jpg: t.XHR_RESPONSE_TYPE.BLOB,
    jpeg: t.XHR_RESPONSE_TYPE.BLOB,
    tif: t.XHR_RESPONSE_TYPE.BLOB,
    tiff: t.XHR_RESPONSE_TYPE.BLOB,
    webp: t.XHR_RESPONSE_TYPE.BLOB,
    tga: t.XHR_RESPONSE_TYPE.BLOB,
    avif: t.XHR_RESPONSE_TYPE.BLOB,
    json: t.XHR_RESPONSE_TYPE.JSON,
    text: t.XHR_RESPONSE_TYPE.TEXT,
    txt: t.XHR_RESPONSE_TYPE.TEXT,
    ttf: t.XHR_RESPONSE_TYPE.BUFFER,
    otf: t.XHR_RESPONSE_TYPE.BUFFER,
  }),
  (t.EMPTY_GIF =
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
var tB = function (t, e) {
    (this.data = t), (this.callback = e);
  },
  tG = (function () {
    function t(t, e) {
      var r = this;
      if (
        (void 0 === e && (e = 1),
        (this.workers = 0),
        (this.saturated = tL),
        (this.unsaturated = tL),
        (this.empty = tL),
        (this.drain = tL),
        (this.error = tL),
        (this.started = !1),
        (this.paused = !1),
        (this._tasks = []),
        (this._insert = function (t, e, i) {
          if (i && 'function' != typeof i)
            throw Error('task callback must be a function');
          if (((r.started = !0), null == t && r.idle())) {
            setTimeout(function () {
              return r.drain();
            }, 1);
            return;
          }
          var n = new tB(t, 'function' == typeof i ? i : tL);
          e ? r._tasks.unshift(n) : r._tasks.push(n), setTimeout(r.process, 1);
        }),
        (this.process = function () {
          for (; !r.paused && r.workers < r.concurrency && r._tasks.length; ) {
            var t = r._tasks.shift();
            0 === r._tasks.length && r.empty(),
              (r.workers += 1),
              r.workers === r.concurrency && r.saturated(),
              r._worker(
                t.data,
                (function (t) {
                  return function () {
                    for (
                      var e = arguments, r = [], i = 0;
                      i < arguments.length;
                      i++
                    )
                      r[i] = e[i];
                    if (null === t) throw Error('Callback was already called.');
                    var n = t;
                    (t = null), n.apply(this, r);
                  };
                })(r._next(t))
              );
          }
        }),
        (this._worker = t),
        0 === e)
      )
        throw Error('Concurrency must not be zero');
      (this.concurrency = e), (this.buffer = e / 4);
    }
    return (
      (t.prototype._next = function (t) {
        var e = this;
        return function () {
          for (var r = arguments, i = [], n = 0; n < arguments.length; n++)
            i[n] = r[n];
          (e.workers -= 1),
            t.callback.apply(t, i),
            null != i[0] && e.error(i[0], t.data),
            e.workers <= e.concurrency - e.buffer && e.unsaturated(),
            e.idle() && e.drain(),
            e.process();
        };
      }),
      (t.prototype.push = function (t, e) {
        this._insert(t, !1, e);
      }),
      (t.prototype.kill = function () {
        (this.workers = 0),
          (this.drain = tL),
          (this.started = !1),
          (this._tasks = []);
      }),
      (t.prototype.unshift = function (t, e) {
        this._insert(t, !0, e);
      }),
      (t.prototype.length = function () {
        return this._tasks.length;
      }),
      (t.prototype.running = function () {
        return this.workers;
      }),
      (t.prototype.idle = function () {
        return this._tasks.length + this.workers === 0;
      }),
      (t.prototype.pause = function () {
        !0 !== this.paused && (this.paused = !0);
      }),
      (t.prototype.resume = function () {
        if (!1 !== this.paused) {
          this.paused = !1;
          for (var t = 1; t <= this.concurrency; t++) this.process();
        }
      }),
      (t.eachSeries = function (t, e, r, i) {
        var n = 0,
          o = t.length;
        !(function s(a) {
          if (a || n === o) {
            r && r(a);
            return;
          }
          i
            ? setTimeout(function () {
                e(t[n++], s);
              }, 1)
            : e(t[n++], s);
        })();
      }),
      (t.queue = function (e, r) {
        return new t(e, r);
      }),
      t
    );
  })(),
  tU = /(#[\w-]+)?$/,
  tk = (function () {
    function t(e, r) {
      var i = this;
      void 0 === e && (e = ''),
        void 0 === r && (r = 10),
        (this.progress = 0),
        (this.loading = !1),
        (this.defaultQueryString = ''),
        (this._beforeMiddleware = []),
        (this._afterMiddleware = []),
        (this._resourcesParsing = []),
        (this._boundLoadResource = function (t, e) {
          return i._loadResource(t, e);
        }),
        (this.resources = {}),
        (this.baseUrl = e),
        (this._beforeMiddleware = []),
        (this._afterMiddleware = []),
        (this._resourcesParsing = []),
        (this._boundLoadResource = function (t, e) {
          return i._loadResource(t, e);
        }),
        (this._queue = tG.queue(this._boundLoadResource, r)),
        this._queue.pause(),
        (this.resources = {}),
        (this.onProgress = new tP()),
        (this.onError = new tP()),
        (this.onLoad = new tP()),
        (this.onStart = new tP()),
        (this.onComplete = new tP());
      for (var n = 0; n < t._plugins.length; ++n) {
        var o = t._plugins[n],
          s = o.pre,
          a = o.use;
        s && this.pre(s), a && this.use(a);
      }
      this._protected = !1;
    }
    return (
      (t.prototype._add = function (t, e, r, i) {
        if (this.loading && (!r || !r.parentResource))
          throw Error('Cannot add resources while the loader is running.');
        if (this.resources[t])
          throw Error('Resource named "' + t + '" already exists.');
        if (
          ((e = this._prepareUrl(e)),
          (this.resources[t] = new tN(t, e, r)),
          'function' == typeof i && this.resources[t].onAfterMiddleware.once(i),
          this.loading)
        ) {
          for (
            var n = r.parentResource, o = [], s = 0;
            s < n.children.length;
            ++s
          )
            n.children[s].isComplete || o.push(n.children[s]);
          var a = (n.progressChunk * (o.length + 1)) / (o.length + 2);
          n.children.push(this.resources[t]), (n.progressChunk = a);
          for (var s = 0; s < o.length; ++s) o[s].progressChunk = a;
          this.resources[t].progressChunk = a;
        }
        return this._queue.push(this.resources[t]), this;
      }),
      (t.prototype.pre = function (t) {
        return this._beforeMiddleware.push(t), this;
      }),
      (t.prototype.use = function (t) {
        return this._afterMiddleware.push(t), this;
      }),
      (t.prototype.reset = function () {
        for (var t in ((this.progress = 0),
        (this.loading = !1),
        this._queue.kill(),
        this._queue.pause(),
        this.resources)) {
          var e = this.resources[t];
          e._onLoadBinding && e._onLoadBinding.detach(),
            e.isLoading && e.abort('loader reset');
        }
        return (this.resources = {}), this;
      }),
      (t.prototype.load = function (t) {
        if (
          ((0, ti.deprecation)(
            '6.5.0',
            '@pixi/loaders is being replaced with @pixi/assets in the next major release.'
          ),
          'function' == typeof t && this.onComplete.once(t),
          this.loading)
        )
          return this;
        if (this._queue.idle()) this._onStart(), this._onComplete();
        else {
          for (
            var e = 100 / this._queue._tasks.length, r = 0;
            r < this._queue._tasks.length;
            ++r
          )
            this._queue._tasks[r].data.progressChunk = e;
          this._onStart(), this._queue.resume();
        }
        return this;
      }),
      Object.defineProperty(t.prototype, 'concurrency', {
        get: function () {
          return this._queue.concurrency;
        },
        set: function (t) {
          this._queue.concurrency = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype._prepareUrl = function (t) {
        var e,
          r = tI(t, { strictMode: !0 });
        if (
          ((e =
            r.protocol || !r.path || 0 === t.indexOf('//')
              ? t
              : this.baseUrl.length &&
                this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 &&
                '/' !== t.charAt(0)
              ? this.baseUrl + '/' + t
              : this.baseUrl + t),
          this.defaultQueryString)
        ) {
          var i = tU.exec(e)[0];
          -1 !== (e = e.slice(0, e.length - i.length)).indexOf('?')
            ? (e += '&' + this.defaultQueryString)
            : (e += '?' + this.defaultQueryString),
            (e += i);
        }
        return e;
      }),
      (t.prototype._loadResource = function (t, e) {
        var r = this;
        (t._dequeue = e),
          tG.eachSeries(
            this._beforeMiddleware,
            function (e, i) {
              e.call(r, t, function () {
                i(t.isComplete ? {} : null);
              });
            },
            function () {
              t.isComplete
                ? r._onLoad(t)
                : ((t._onLoadBinding = t.onComplete.once(r._onLoad, r)),
                  t.load());
            },
            !0
          );
      }),
      (t.prototype._onStart = function () {
        (this.progress = 0), (this.loading = !0), this.onStart.dispatch(this);
      }),
      (t.prototype._onComplete = function () {
        (this.progress = 100),
          (this.loading = !1),
          this.onComplete.dispatch(this, this.resources);
      }),
      (t.prototype._onLoad = function (t) {
        var e = this;
        (t._onLoadBinding = null),
          this._resourcesParsing.push(t),
          t._dequeue(),
          tG.eachSeries(
            this._afterMiddleware,
            function (r, i) {
              r.call(e, t, i);
            },
            function () {
              t.onAfterMiddleware.dispatch(t),
                (e.progress = Math.min(100, e.progress + t.progressChunk)),
                e.onProgress.dispatch(e, t),
                t.error
                  ? e.onError.dispatch(t.error, e, t)
                  : e.onLoad.dispatch(e, t),
                e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1),
                e._queue.idle() &&
                  0 === e._resourcesParsing.length &&
                  e._onComplete();
            },
            !0
          );
      }),
      (t.prototype.destroy = function () {
        this._protected || this.reset();
      }),
      Object.defineProperty(t, 'shared', {
        get: function () {
          var e = t._shared;
          return e || (((e = new t())._protected = !0), (t._shared = e)), e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.registerPlugin = function (e) {
        return (
          (0, ti.deprecation)(
            '6.5.0',
            'Loader.registerPlugin() is deprecated, use extensions.add() instead.'
          ),
          (0, t_.extensions).add({ type: t_.ExtensionType.Loader, ref: e }),
          t
        );
      }),
      (t._plugins = []),
      t
    );
  })();
(0, t_.extensions).handleByList(t_.ExtensionType.Loader, tk._plugins),
  (tk.prototype.add = function (t, e, r, i) {
    if (Array.isArray(t)) {
      for (var n = 0; n < t.length; ++n) this.add(t[n]);
      return this;
    }
    if (
      ('object' == typeof t &&
        ((r = t),
        (i = e || r.callback || r.onComplete),
        (e = r.url),
        (t = r.name || r.key || r.url)),
      'string' != typeof e && ((i = r), (r = e), (e = t)),
      'string' != typeof e)
    )
      throw Error('No url passed to add resource to loader.');
    return (
      'function' == typeof r && ((i = r), (r = null)), this._add(t, e, r, i)
    );
  });
var tX = (function () {
    function t() {}
    return (
      (t.init = function (t) {
        (t = Object.assign({ sharedLoader: !1 }, t)),
          (this.loader = t.sharedLoader ? tk.shared : new tk());
      }),
      (t.destroy = function () {
        this.loader && (this.loader.destroy(), (this.loader = null));
      }),
      (t.extension = t_.ExtensionType.Application),
      t
    );
  })(),
  tj = (function () {
    function t() {}
    return (
      (t.add = function () {
        tN.setExtensionLoadType('svg', tN.LOAD_TYPE.XHR),
          tN.setExtensionXhrType('svg', tN.XHR_RESPONSE_TYPE.TEXT);
      }),
      (t.use = function (t, e) {
        if (t.data && (t.type === tN.TYPE.IMAGE || 'svg' === t.extension)) {
          var r = t.data,
            i = t.url,
            n = t.name,
            o = t.metadata;
          (0, t_.Texture)
            .fromLoader(r, i, n, o)
            .then(function (r) {
              (t.texture = r), e();
            })
            .catch(e);
        } else e();
      }),
      (t.extension = t_.ExtensionType.Loader),
      t
    );
  })();
function tH(t, e) {
  if (!t.data) {
    e();
    return;
  }
  if (t.xhr && t.xhrType === tN.XHR_RESPONSE_TYPE.BLOB) {
    if (self.Blob && 'string' != typeof t.data) {
      if (0 === t.data.type.indexOf('image')) {
        var r = globalThis.URL || globalThis.webkitURL,
          i = r.createObjectURL(t.data);
        (t.blob = t.data),
          (t.data = new Image()),
          (t.data.src = i),
          (t.type = tN.TYPE.IMAGE),
          (t.data.onload = function () {
            r.revokeObjectURL(i), (t.data.onload = null), e();
          });
        return;
      }
    } else {
      var n = t.xhr.getResponseHeader('content-type');
      if (n && 0 === n.indexOf('image')) {
        (t.data = new Image()),
          (t.data.src =
            'data:' +
            n +
            ';base64,' +
            (function (t) {
              for (var e = '', r = 0; r < t.length; ) {
                for (
                  var i = [0, 0, 0], n = [0, 0, 0, 0], o = 0;
                  o < i.length;
                  ++o
                )
                  r < t.length ? (i[o] = 255 & t.charCodeAt(r++)) : (i[o] = 0);
                switch (
                  ((n[0] = i[0] >> 2),
                  (n[1] = ((3 & i[0]) << 4) | (i[1] >> 4)),
                  (n[2] = ((15 & i[1]) << 2) | (i[2] >> 6)),
                  (n[3] = 63 & i[2]),
                  r - (t.length - 1))
                ) {
                  case 2:
                    (n[3] = 64), (n[2] = 64);
                    break;
                  case 1:
                    n[3] = 64;
                }
                for (var o = 0; o < n.length; ++o)
                  e +=
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(
                      n[o]
                    );
              }
              return e;
            })(t.xhr.responseText)),
          (t.type = tN.TYPE.IMAGE),
          (t.data.onload = function () {
            (t.data.onload = null), e();
          });
        return;
      }
    }
  }
  e();
}
var tY = (function () {
  function t() {}
  return (t.extension = t_.ExtensionType.Loader), (t.use = tH), t;
})();
(0, t_.extensions).add(tj, tY);
/*!
 * @pixi/compressed-textures - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  ti = F('e70pz'),
  tn = F('8q0ed'),
  ta = F('6n98C');
((o = y || (y = {}))[(o.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
  'COMPRESSED_RGB_S3TC_DXT1_EXT'),
  (o[(o.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
    'COMPRESSED_RGBA_S3TC_DXT1_EXT'),
  (o[(o.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
    'COMPRESSED_RGBA_S3TC_DXT3_EXT'),
  (o[(o.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
    'COMPRESSED_RGBA_S3TC_DXT5_EXT'),
  (o[(o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] =
    'COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT'),
  (o[(o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] =
    'COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT'),
  (o[(o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] =
    'COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT'),
  (o[(o.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] =
    'COMPRESSED_SRGB_S3TC_DXT1_EXT'),
  (o[(o.COMPRESSED_R11_EAC = 37488)] = 'COMPRESSED_R11_EAC'),
  (o[(o.COMPRESSED_SIGNED_R11_EAC = 37489)] = 'COMPRESSED_SIGNED_R11_EAC'),
  (o[(o.COMPRESSED_RG11_EAC = 37490)] = 'COMPRESSED_RG11_EAC'),
  (o[(o.COMPRESSED_SIGNED_RG11_EAC = 37491)] = 'COMPRESSED_SIGNED_RG11_EAC'),
  (o[(o.COMPRESSED_RGB8_ETC2 = 37492)] = 'COMPRESSED_RGB8_ETC2'),
  (o[(o.COMPRESSED_RGBA8_ETC2_EAC = 37496)] = 'COMPRESSED_RGBA8_ETC2_EAC'),
  (o[(o.COMPRESSED_SRGB8_ETC2 = 37493)] = 'COMPRESSED_SRGB8_ETC2'),
  (o[(o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
    'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC'),
  (o[(o.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
    'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
  (o[(o.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
    'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
  (o[(o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] =
    'COMPRESSED_RGB_PVRTC_4BPPV1_IMG'),
  (o[(o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] =
    'COMPRESSED_RGBA_PVRTC_4BPPV1_IMG'),
  (o[(o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] =
    'COMPRESSED_RGB_PVRTC_2BPPV1_IMG'),
  (o[(o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] =
    'COMPRESSED_RGBA_PVRTC_2BPPV1_IMG'),
  (o[(o.COMPRESSED_RGB_ETC1_WEBGL = 36196)] = 'COMPRESSED_RGB_ETC1_WEBGL'),
  (o[(o.COMPRESSED_RGB_ATC_WEBGL = 35986)] = 'COMPRESSED_RGB_ATC_WEBGL'),
  (o[(o.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986)] =
    'COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL'),
  (o[(o.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] =
    'COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL'),
  (o[(o.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808)] =
    'COMPRESSED_RGBA_ASTC_4x4_KHR');
var tV =
    (((_ = {})[y.COMPRESSED_RGB_S3TC_DXT1_EXT] = 0.5),
    (_[y.COMPRESSED_RGBA_S3TC_DXT1_EXT] = 0.5),
    (_[y.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1),
    (_[y.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1),
    (_[y.COMPRESSED_SRGB_S3TC_DXT1_EXT] = 0.5),
    (_[y.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = 0.5),
    (_[y.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1),
    (_[y.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1),
    (_[y.COMPRESSED_R11_EAC] = 0.5),
    (_[y.COMPRESSED_SIGNED_R11_EAC] = 0.5),
    (_[y.COMPRESSED_RG11_EAC] = 1),
    (_[y.COMPRESSED_SIGNED_RG11_EAC] = 1),
    (_[y.COMPRESSED_RGB8_ETC2] = 0.5),
    (_[y.COMPRESSED_RGBA8_ETC2_EAC] = 1),
    (_[y.COMPRESSED_SRGB8_ETC2] = 0.5),
    (_[y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1),
    (_[y.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5),
    (_[y.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5),
    (_[y.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = 0.5),
    (_[y.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = 0.5),
    (_[y.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = 0.25),
    (_[y.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = 0.25),
    (_[y.COMPRESSED_RGB_ETC1_WEBGL] = 0.5),
    (_[y.COMPRESSED_RGB_ATC_WEBGL] = 0.5),
    (_[y.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1),
    (_[y.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1),
    (_[y.COMPRESSED_RGBA_ASTC_4x4_KHR] = 1),
    _),
  tz = function (t, e) {
    return (tz =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
function tW(t, e) {
  function r() {
    this.constructor = t;
  }
  tz(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
var tq = (function (t) {
    function e(r, i) {
      var n = t.call(this, r, i) || this;
      return (
        (n.format = i.format),
        (n.levels = i.levels || 1),
        (n._width = i.width),
        (n._height = i.height),
        (n._extension = e._formatToExtension(n.format)),
        (i.levelBuffers || n.buffer) &&
          (n._levelBuffers =
            i.levelBuffers ||
            e._createLevelBuffers(
              r instanceof Uint8Array ? r : n.buffer.uint8View,
              n.format,
              n.levels,
              4,
              4,
              n.width,
              n.height
            )),
        n
      );
    }
    return (
      tW(e, t),
      (e.prototype.upload = function (t, e, r) {
        var i = t.gl;
        if (!t.context.extensions[this._extension])
          throw Error(
            this._extension +
              ' textures are not supported on the current machine'
          );
        if (!this._levelBuffers) return !1;
        for (var n = 0, o = this.levels; n < o; n++) {
          var s = this._levelBuffers[n],
            a = s.levelID,
            h = s.levelWidth,
            u = s.levelHeight,
            l = s.levelBuffer;
          i.compressedTexImage2D(i.TEXTURE_2D, a, this.format, h, u, 0, l);
        }
        return !0;
      }),
      (e.prototype.onBlobLoaded = function () {
        this._levelBuffers = e._createLevelBuffers(
          this.buffer.uint8View,
          this.format,
          this.levels,
          4,
          4,
          this.width,
          this.height
        );
      }),
      (e._formatToExtension = function (t) {
        if (t >= 33776 && t <= 33779) return 's3tc';
        if (t >= 37488 && t <= 37497) return 'etc';
        if (t >= 35840 && t <= 35843) return 'pvrtc';
        if (t >= 36196) return 'etc1';
        if (t >= 35986 && t <= 34798) return 'atc';
        throw Error('Invalid (compressed) texture format given!');
      }),
      (e._createLevelBuffers = function (t, e, r, i, n, o, s) {
        for (
          var a = Array(r),
            h = t.byteOffset,
            u = o,
            l = s,
            c = (u + i - 1) & ~(i - 1),
            p = (l + n - 1) & ~(n - 1),
            f = c * p * tV[e],
            d = 0;
          d < r;
          d++
        )
          (a[d] = {
            levelID: d,
            levelWidth: r > 1 ? u : c,
            levelHeight: r > 1 ? l : p,
            levelBuffer: new Uint8Array(t.buffer, h, f),
          }),
            (h += f),
            (l = l >> 1 || 1),
            (f =
              (c = ((u = u >> 1 || 1) + i - 1) & ~(i - 1)) *
              (p = (l + n - 1) & ~(n - 1)) *
              tV[e]);
        return a;
      }),
      e
    );
  })(
    (function (t) {
      function e(e, r) {
        void 0 === r && (r = { width: 1, height: 1, autoLoad: !0 });
        var i,
          n,
          o = this;
        return (
          'string' == typeof e
            ? ((i = e), (n = new Uint8Array()))
            : ((i = null), (n = e)),
          ((o = t.call(this, n, r) || this).origin = i),
          (o.buffer = n ? new t_.ViewableBuffer(n) : null),
          o.origin && !1 !== r.autoLoad && o.load(),
          n &&
            n.length &&
            ((o.loaded = !0), o.onBlobLoaded(o.buffer.rawBinaryData)),
          o
        );
      }
      return (
        tW(e, t),
        (e.prototype.onBlobLoaded = function (t) {}),
        (e.prototype.load = function () {
          var t, e, r, i;
          return (
            (t = this),
            (e = void 0),
            (r = Promise),
            (i = function () {
              var t;
              return (function (t, e) {
                var r,
                  i,
                  n,
                  o,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & n[0]) throw n[1];
                      return n[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (o = { next: a(0), throw: a(1), return: a(2) }),
                  'function' == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                      return this;
                    }),
                  o
                );
                function a(o) {
                  return function (a) {
                    return (function (o) {
                      if (r) throw TypeError('Generator is already executing.');
                      for (; s; )
                        try {
                          if (
                            ((r = 1),
                            i &&
                              (n =
                                2 & o[0]
                                  ? i.return
                                  : o[0]
                                  ? i.throw || ((n = i.return) && n.call(i), 0)
                                  : i.next) &&
                              !(n = n.call(i, o[1])).done)
                          )
                            return n;
                          switch (
                            ((i = 0), n && (o = [2 & o[0], n.value]), o[0])
                          ) {
                            case 0:
                            case 1:
                              n = o;
                              break;
                            case 4:
                              return s.label++, { value: o[1], done: !1 };
                            case 5:
                              s.label++, (i = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (
                                !(n =
                                  (n = s.trys).length > 0 && n[n.length - 1]) &&
                                (6 === o[0] || 2 === o[0])
                              ) {
                                s = 0;
                                continue;
                              }
                              if (
                                3 === o[0] &&
                                (!n || (o[1] > n[0] && o[1] < n[3]))
                              ) {
                                s.label = o[1];
                                break;
                              }
                              if (6 === o[0] && s.label < n[1]) {
                                (s.label = n[1]), (n = o);
                                break;
                              }
                              if (n && s.label < n[2]) {
                                (s.label = n[2]), s.ops.push(o);
                                break;
                              }
                              n[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          o = e.call(t, s);
                        } catch (t) {
                          (o = [6, t]), (i = 0);
                        } finally {
                          r = n = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, a]);
                  };
                }
              })(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, fetch(this.origin)];
                  case 1:
                    return [4, e.sent().blob()];
                  case 2:
                    return [4, e.sent().arrayBuffer()];
                  case 3:
                    return (
                      (t = e.sent()),
                      (this.data = new Uint32Array(t)),
                      (this.buffer = new t_.ViewableBuffer(t)),
                      (this.loaded = !0),
                      this.onBlobLoaded(t),
                      this.update(),
                      [2, this]
                    );
                }
              });
            }),
            new (r || (r = Promise))(function (n, o) {
              function s(t) {
                try {
                  h(i.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function a(t) {
                try {
                  h(i.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function h(t) {
                var e;
                t.done
                  ? n(t.value)
                  : ((e = t.value) instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })
                    ).then(s, a);
              }
              h((i = i.apply(t, e || [])).next());
            })
          );
        }),
        e
      );
    })(t_.BufferResource)
  ),
  tK = (function () {
    function t() {}
    return (
      (t.use = function (e, r) {
        var i = e.data;
        if (e.type === tN.TYPE.JSON && i && i.cacheID && i.textures) {
          for (
            var n = i.textures, o = void 0, s = void 0, a = 0, h = n.length;
            a < h;
            a++
          ) {
            var u = n[a],
              l = u.src,
              c = u.format;
            if ((c || (s = l), t.textureFormats[c])) {
              o = l;
              break;
            }
          }
          if (!(o = o || s)) {
            r(
              Error(
                'Cannot load compressed-textures in ' +
                  e.url +
                  ', make sure you provide a fallback'
              )
            );
            return;
          }
          if (o === e.url) {
            r(
              Error(
                "URL of compressed texture cannot be the same as the manifest's URL"
              )
            );
            return;
          }
          var p = {
              crossOrigin: e.crossOrigin,
              metadata: e.metadata.imageMetadata,
              parentResource: e,
            },
            f = (0, ti.url).resolve(e.url.replace(this.baseUrl, ''), o),
            d = i.cacheID;
          this.add(d, f, p, function (t) {
            if (t.error) {
              r(t.error);
              return;
            }
            var i = t.texture,
              n = t.textures;
            Object.assign(e, {
              texture: void 0 === i ? null : i,
              textures: void 0 === n ? {} : n,
            }),
              r();
          });
        } else r();
      }),
      Object.defineProperty(t, 'textureExtensions', {
        get: function () {
          if (!t._textureExtensions) {
            var e = (0, tn.settings).ADAPTER.createCanvas().getContext('webgl');
            if (!e)
              return (
                console.warn(
                  'WebGL not available for compressed textures. Silently failing.'
                ),
                {}
              );
            var r = {
              s3tc: e.getExtension('WEBGL_compressed_texture_s3tc'),
              s3tc_sRGB: e.getExtension('WEBGL_compressed_texture_s3tc_srgb'),
              etc: e.getExtension('WEBGL_compressed_texture_etc'),
              etc1: e.getExtension('WEBGL_compressed_texture_etc1'),
              pvrtc:
                e.getExtension('WEBGL_compressed_texture_pvrtc') ||
                e.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
              atc: e.getExtension('WEBGL_compressed_texture_atc'),
              astc: e.getExtension('WEBGL_compressed_texture_astc'),
            };
            t._textureExtensions = r;
          }
          return t._textureExtensions;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, 'textureFormats', {
        get: function () {
          if (!t._textureFormats) {
            var e = t.textureExtensions;
            for (var r in ((t._textureFormats = {}), e)) {
              var i = e[r];
              i && Object.assign(t._textureFormats, Object.getPrototypeOf(i));
            }
          }
          return t._textureFormats;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.extension = t_.ExtensionType.Loader),
      t
    );
  })();
function tZ(t, e, r) {
  var i = { textures: {}, texture: null };
  return (
    e &&
      e
        .map(function (t) {
          return new t_.Texture(
            new t_.BaseTexture(
              t,
              Object.assign(
                {
                  mipmap: ta.MIPMAP_MODES.OFF,
                  alphaMode: ta.ALPHA_MODES.NO_PREMULTIPLIED_ALPHA,
                },
                r
              )
            )
          );
        })
        .forEach(function (e, r) {
          var n = e.baseTexture,
            o = t + '-' + (r + 1);
          (0, t_.BaseTexture).addToCache(n, o),
            (0, t_.Texture).addToCache(e, o),
            0 === r &&
              ((0, t_.BaseTexture).addToCache(n, t),
              (0, t_.Texture).addToCache(e, t),
              (i.texture = e)),
            (i.textures[o] = e);
        }),
    i
  );
}
var tQ = { FOURCC: 2 },
  tJ = { DXGI_FORMAT: 0, RESOURCE_DIMENSION: 1, MISC_FLAG: 2, ARRAY_SIZE: 3 };
((s = g || (g = {}))[(s.DXGI_FORMAT_UNKNOWN = 0)] = 'DXGI_FORMAT_UNKNOWN'),
  (s[(s.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1)] =
    'DXGI_FORMAT_R32G32B32A32_TYPELESS'),
  (s[(s.DXGI_FORMAT_R32G32B32A32_FLOAT = 2)] =
    'DXGI_FORMAT_R32G32B32A32_FLOAT'),
  (s[(s.DXGI_FORMAT_R32G32B32A32_UINT = 3)] = 'DXGI_FORMAT_R32G32B32A32_UINT'),
  (s[(s.DXGI_FORMAT_R32G32B32A32_SINT = 4)] = 'DXGI_FORMAT_R32G32B32A32_SINT'),
  (s[(s.DXGI_FORMAT_R32G32B32_TYPELESS = 5)] =
    'DXGI_FORMAT_R32G32B32_TYPELESS'),
  (s[(s.DXGI_FORMAT_R32G32B32_FLOAT = 6)] = 'DXGI_FORMAT_R32G32B32_FLOAT'),
  (s[(s.DXGI_FORMAT_R32G32B32_UINT = 7)] = 'DXGI_FORMAT_R32G32B32_UINT'),
  (s[(s.DXGI_FORMAT_R32G32B32_SINT = 8)] = 'DXGI_FORMAT_R32G32B32_SINT'),
  (s[(s.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9)] =
    'DXGI_FORMAT_R16G16B16A16_TYPELESS'),
  (s[(s.DXGI_FORMAT_R16G16B16A16_FLOAT = 10)] =
    'DXGI_FORMAT_R16G16B16A16_FLOAT'),
  (s[(s.DXGI_FORMAT_R16G16B16A16_UNORM = 11)] =
    'DXGI_FORMAT_R16G16B16A16_UNORM'),
  (s[(s.DXGI_FORMAT_R16G16B16A16_UINT = 12)] = 'DXGI_FORMAT_R16G16B16A16_UINT'),
  (s[(s.DXGI_FORMAT_R16G16B16A16_SNORM = 13)] =
    'DXGI_FORMAT_R16G16B16A16_SNORM'),
  (s[(s.DXGI_FORMAT_R16G16B16A16_SINT = 14)] = 'DXGI_FORMAT_R16G16B16A16_SINT'),
  (s[(s.DXGI_FORMAT_R32G32_TYPELESS = 15)] = 'DXGI_FORMAT_R32G32_TYPELESS'),
  (s[(s.DXGI_FORMAT_R32G32_FLOAT = 16)] = 'DXGI_FORMAT_R32G32_FLOAT'),
  (s[(s.DXGI_FORMAT_R32G32_UINT = 17)] = 'DXGI_FORMAT_R32G32_UINT'),
  (s[(s.DXGI_FORMAT_R32G32_SINT = 18)] = 'DXGI_FORMAT_R32G32_SINT'),
  (s[(s.DXGI_FORMAT_R32G8X24_TYPELESS = 19)] = 'DXGI_FORMAT_R32G8X24_TYPELESS'),
  (s[(s.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20)] =
    'DXGI_FORMAT_D32_FLOAT_S8X24_UINT'),
  (s[(s.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21)] =
    'DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS'),
  (s[(s.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22)] =
    'DXGI_FORMAT_X32_TYPELESS_G8X24_UINT'),
  (s[(s.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23)] =
    'DXGI_FORMAT_R10G10B10A2_TYPELESS'),
  (s[(s.DXGI_FORMAT_R10G10B10A2_UNORM = 24)] = 'DXGI_FORMAT_R10G10B10A2_UNORM'),
  (s[(s.DXGI_FORMAT_R10G10B10A2_UINT = 25)] = 'DXGI_FORMAT_R10G10B10A2_UINT'),
  (s[(s.DXGI_FORMAT_R11G11B10_FLOAT = 26)] = 'DXGI_FORMAT_R11G11B10_FLOAT'),
  (s[(s.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27)] = 'DXGI_FORMAT_R8G8B8A8_TYPELESS'),
  (s[(s.DXGI_FORMAT_R8G8B8A8_UNORM = 28)] = 'DXGI_FORMAT_R8G8B8A8_UNORM'),
  (s[(s.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29)] =
    'DXGI_FORMAT_R8G8B8A8_UNORM_SRGB'),
  (s[(s.DXGI_FORMAT_R8G8B8A8_UINT = 30)] = 'DXGI_FORMAT_R8G8B8A8_UINT'),
  (s[(s.DXGI_FORMAT_R8G8B8A8_SNORM = 31)] = 'DXGI_FORMAT_R8G8B8A8_SNORM'),
  (s[(s.DXGI_FORMAT_R8G8B8A8_SINT = 32)] = 'DXGI_FORMAT_R8G8B8A8_SINT'),
  (s[(s.DXGI_FORMAT_R16G16_TYPELESS = 33)] = 'DXGI_FORMAT_R16G16_TYPELESS'),
  (s[(s.DXGI_FORMAT_R16G16_FLOAT = 34)] = 'DXGI_FORMAT_R16G16_FLOAT'),
  (s[(s.DXGI_FORMAT_R16G16_UNORM = 35)] = 'DXGI_FORMAT_R16G16_UNORM'),
  (s[(s.DXGI_FORMAT_R16G16_UINT = 36)] = 'DXGI_FORMAT_R16G16_UINT'),
  (s[(s.DXGI_FORMAT_R16G16_SNORM = 37)] = 'DXGI_FORMAT_R16G16_SNORM'),
  (s[(s.DXGI_FORMAT_R16G16_SINT = 38)] = 'DXGI_FORMAT_R16G16_SINT'),
  (s[(s.DXGI_FORMAT_R32_TYPELESS = 39)] = 'DXGI_FORMAT_R32_TYPELESS'),
  (s[(s.DXGI_FORMAT_D32_FLOAT = 40)] = 'DXGI_FORMAT_D32_FLOAT'),
  (s[(s.DXGI_FORMAT_R32_FLOAT = 41)] = 'DXGI_FORMAT_R32_FLOAT'),
  (s[(s.DXGI_FORMAT_R32_UINT = 42)] = 'DXGI_FORMAT_R32_UINT'),
  (s[(s.DXGI_FORMAT_R32_SINT = 43)] = 'DXGI_FORMAT_R32_SINT'),
  (s[(s.DXGI_FORMAT_R24G8_TYPELESS = 44)] = 'DXGI_FORMAT_R24G8_TYPELESS'),
  (s[(s.DXGI_FORMAT_D24_UNORM_S8_UINT = 45)] = 'DXGI_FORMAT_D24_UNORM_S8_UINT'),
  (s[(s.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46)] =
    'DXGI_FORMAT_R24_UNORM_X8_TYPELESS'),
  (s[(s.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47)] =
    'DXGI_FORMAT_X24_TYPELESS_G8_UINT'),
  (s[(s.DXGI_FORMAT_R8G8_TYPELESS = 48)] = 'DXGI_FORMAT_R8G8_TYPELESS'),
  (s[(s.DXGI_FORMAT_R8G8_UNORM = 49)] = 'DXGI_FORMAT_R8G8_UNORM'),
  (s[(s.DXGI_FORMAT_R8G8_UINT = 50)] = 'DXGI_FORMAT_R8G8_UINT'),
  (s[(s.DXGI_FORMAT_R8G8_SNORM = 51)] = 'DXGI_FORMAT_R8G8_SNORM'),
  (s[(s.DXGI_FORMAT_R8G8_SINT = 52)] = 'DXGI_FORMAT_R8G8_SINT'),
  (s[(s.DXGI_FORMAT_R16_TYPELESS = 53)] = 'DXGI_FORMAT_R16_TYPELESS'),
  (s[(s.DXGI_FORMAT_R16_FLOAT = 54)] = 'DXGI_FORMAT_R16_FLOAT'),
  (s[(s.DXGI_FORMAT_D16_UNORM = 55)] = 'DXGI_FORMAT_D16_UNORM'),
  (s[(s.DXGI_FORMAT_R16_UNORM = 56)] = 'DXGI_FORMAT_R16_UNORM'),
  (s[(s.DXGI_FORMAT_R16_UINT = 57)] = 'DXGI_FORMAT_R16_UINT'),
  (s[(s.DXGI_FORMAT_R16_SNORM = 58)] = 'DXGI_FORMAT_R16_SNORM'),
  (s[(s.DXGI_FORMAT_R16_SINT = 59)] = 'DXGI_FORMAT_R16_SINT'),
  (s[(s.DXGI_FORMAT_R8_TYPELESS = 60)] = 'DXGI_FORMAT_R8_TYPELESS'),
  (s[(s.DXGI_FORMAT_R8_UNORM = 61)] = 'DXGI_FORMAT_R8_UNORM'),
  (s[(s.DXGI_FORMAT_R8_UINT = 62)] = 'DXGI_FORMAT_R8_UINT'),
  (s[(s.DXGI_FORMAT_R8_SNORM = 63)] = 'DXGI_FORMAT_R8_SNORM'),
  (s[(s.DXGI_FORMAT_R8_SINT = 64)] = 'DXGI_FORMAT_R8_SINT'),
  (s[(s.DXGI_FORMAT_A8_UNORM = 65)] = 'DXGI_FORMAT_A8_UNORM'),
  (s[(s.DXGI_FORMAT_R1_UNORM = 66)] = 'DXGI_FORMAT_R1_UNORM'),
  (s[(s.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67)] =
    'DXGI_FORMAT_R9G9B9E5_SHAREDEXP'),
  (s[(s.DXGI_FORMAT_R8G8_B8G8_UNORM = 68)] = 'DXGI_FORMAT_R8G8_B8G8_UNORM'),
  (s[(s.DXGI_FORMAT_G8R8_G8B8_UNORM = 69)] = 'DXGI_FORMAT_G8R8_G8B8_UNORM'),
  (s[(s.DXGI_FORMAT_BC1_TYPELESS = 70)] = 'DXGI_FORMAT_BC1_TYPELESS'),
  (s[(s.DXGI_FORMAT_BC1_UNORM = 71)] = 'DXGI_FORMAT_BC1_UNORM'),
  (s[(s.DXGI_FORMAT_BC1_UNORM_SRGB = 72)] = 'DXGI_FORMAT_BC1_UNORM_SRGB'),
  (s[(s.DXGI_FORMAT_BC2_TYPELESS = 73)] = 'DXGI_FORMAT_BC2_TYPELESS'),
  (s[(s.DXGI_FORMAT_BC2_UNORM = 74)] = 'DXGI_FORMAT_BC2_UNORM'),
  (s[(s.DXGI_FORMAT_BC2_UNORM_SRGB = 75)] = 'DXGI_FORMAT_BC2_UNORM_SRGB'),
  (s[(s.DXGI_FORMAT_BC3_TYPELESS = 76)] = 'DXGI_FORMAT_BC3_TYPELESS'),
  (s[(s.DXGI_FORMAT_BC3_UNORM = 77)] = 'DXGI_FORMAT_BC3_UNORM'),
  (s[(s.DXGI_FORMAT_BC3_UNORM_SRGB = 78)] = 'DXGI_FORMAT_BC3_UNORM_SRGB'),
  (s[(s.DXGI_FORMAT_BC4_TYPELESS = 79)] = 'DXGI_FORMAT_BC4_TYPELESS'),
  (s[(s.DXGI_FORMAT_BC4_UNORM = 80)] = 'DXGI_FORMAT_BC4_UNORM'),
  (s[(s.DXGI_FORMAT_BC4_SNORM = 81)] = 'DXGI_FORMAT_BC4_SNORM'),
  (s[(s.DXGI_FORMAT_BC5_TYPELESS = 82)] = 'DXGI_FORMAT_BC5_TYPELESS'),
  (s[(s.DXGI_FORMAT_BC5_UNORM = 83)] = 'DXGI_FORMAT_BC5_UNORM'),
  (s[(s.DXGI_FORMAT_BC5_SNORM = 84)] = 'DXGI_FORMAT_BC5_SNORM'),
  (s[(s.DXGI_FORMAT_B5G6R5_UNORM = 85)] = 'DXGI_FORMAT_B5G6R5_UNORM'),
  (s[(s.DXGI_FORMAT_B5G5R5A1_UNORM = 86)] = 'DXGI_FORMAT_B5G5R5A1_UNORM'),
  (s[(s.DXGI_FORMAT_B8G8R8A8_UNORM = 87)] = 'DXGI_FORMAT_B8G8R8A8_UNORM'),
  (s[(s.DXGI_FORMAT_B8G8R8X8_UNORM = 88)] = 'DXGI_FORMAT_B8G8R8X8_UNORM'),
  (s[(s.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89)] =
    'DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM'),
  (s[(s.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90)] = 'DXGI_FORMAT_B8G8R8A8_TYPELESS'),
  (s[(s.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91)] =
    'DXGI_FORMAT_B8G8R8A8_UNORM_SRGB'),
  (s[(s.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92)] = 'DXGI_FORMAT_B8G8R8X8_TYPELESS'),
  (s[(s.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93)] =
    'DXGI_FORMAT_B8G8R8X8_UNORM_SRGB'),
  (s[(s.DXGI_FORMAT_BC6H_TYPELESS = 94)] = 'DXGI_FORMAT_BC6H_TYPELESS'),
  (s[(s.DXGI_FORMAT_BC6H_UF16 = 95)] = 'DXGI_FORMAT_BC6H_UF16'),
  (s[(s.DXGI_FORMAT_BC6H_SF16 = 96)] = 'DXGI_FORMAT_BC6H_SF16'),
  (s[(s.DXGI_FORMAT_BC7_TYPELESS = 97)] = 'DXGI_FORMAT_BC7_TYPELESS'),
  (s[(s.DXGI_FORMAT_BC7_UNORM = 98)] = 'DXGI_FORMAT_BC7_UNORM'),
  (s[(s.DXGI_FORMAT_BC7_UNORM_SRGB = 99)] = 'DXGI_FORMAT_BC7_UNORM_SRGB'),
  (s[(s.DXGI_FORMAT_AYUV = 100)] = 'DXGI_FORMAT_AYUV'),
  (s[(s.DXGI_FORMAT_Y410 = 101)] = 'DXGI_FORMAT_Y410'),
  (s[(s.DXGI_FORMAT_Y416 = 102)] = 'DXGI_FORMAT_Y416'),
  (s[(s.DXGI_FORMAT_NV12 = 103)] = 'DXGI_FORMAT_NV12'),
  (s[(s.DXGI_FORMAT_P010 = 104)] = 'DXGI_FORMAT_P010'),
  (s[(s.DXGI_FORMAT_P016 = 105)] = 'DXGI_FORMAT_P016'),
  (s[(s.DXGI_FORMAT_420_OPAQUE = 106)] = 'DXGI_FORMAT_420_OPAQUE'),
  (s[(s.DXGI_FORMAT_YUY2 = 107)] = 'DXGI_FORMAT_YUY2'),
  (s[(s.DXGI_FORMAT_Y210 = 108)] = 'DXGI_FORMAT_Y210'),
  (s[(s.DXGI_FORMAT_Y216 = 109)] = 'DXGI_FORMAT_Y216'),
  (s[(s.DXGI_FORMAT_NV11 = 110)] = 'DXGI_FORMAT_NV11'),
  (s[(s.DXGI_FORMAT_AI44 = 111)] = 'DXGI_FORMAT_AI44'),
  (s[(s.DXGI_FORMAT_IA44 = 112)] = 'DXGI_FORMAT_IA44'),
  (s[(s.DXGI_FORMAT_P8 = 113)] = 'DXGI_FORMAT_P8'),
  (s[(s.DXGI_FORMAT_A8P8 = 114)] = 'DXGI_FORMAT_A8P8'),
  (s[(s.DXGI_FORMAT_B4G4R4A4_UNORM = 115)] = 'DXGI_FORMAT_B4G4R4A4_UNORM'),
  (s[(s.DXGI_FORMAT_P208 = 116)] = 'DXGI_FORMAT_P208'),
  (s[(s.DXGI_FORMAT_V208 = 117)] = 'DXGI_FORMAT_V208'),
  (s[(s.DXGI_FORMAT_V408 = 118)] = 'DXGI_FORMAT_V408'),
  (s[(s.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119)] =
    'DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE'),
  (s[(s.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120)] =
    'DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE'),
  (s[(s.DXGI_FORMAT_FORCE_UINT = 121)] = 'DXGI_FORMAT_FORCE_UINT'),
  ((a = b || (b = {}))[(a.DDS_DIMENSION_TEXTURE1D = 2)] =
    'DDS_DIMENSION_TEXTURE1D'),
  (a[(a.DDS_DIMENSION_TEXTURE2D = 3)] = 'DDS_DIMENSION_TEXTURE2D'),
  (a[(a.DDS_DIMENSION_TEXTURE3D = 6)] = 'DDS_DIMENSION_TEXTURE3D');
var t$ =
    (((v = {})[827611204] = y.COMPRESSED_RGBA_S3TC_DXT1_EXT),
    (v[861165636] = y.COMPRESSED_RGBA_S3TC_DXT3_EXT),
    (v[894720068] = y.COMPRESSED_RGBA_S3TC_DXT5_EXT),
    v),
  t0 =
    (((m = {})[g.DXGI_FORMAT_BC1_TYPELESS] = y.COMPRESSED_RGBA_S3TC_DXT1_EXT),
    (m[g.DXGI_FORMAT_BC1_UNORM] = y.COMPRESSED_RGBA_S3TC_DXT1_EXT),
    (m[g.DXGI_FORMAT_BC2_TYPELESS] = y.COMPRESSED_RGBA_S3TC_DXT3_EXT),
    (m[g.DXGI_FORMAT_BC2_UNORM] = y.COMPRESSED_RGBA_S3TC_DXT3_EXT),
    (m[g.DXGI_FORMAT_BC3_TYPELESS] = y.COMPRESSED_RGBA_S3TC_DXT5_EXT),
    (m[g.DXGI_FORMAT_BC3_UNORM] = y.COMPRESSED_RGBA_S3TC_DXT5_EXT),
    (m[g.DXGI_FORMAT_BC1_UNORM_SRGB] = y.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT),
    (m[g.DXGI_FORMAT_BC2_UNORM_SRGB] = y.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT),
    (m[g.DXGI_FORMAT_BC3_UNORM_SRGB] = y.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT),
    m),
  t1 = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
  t2 = {
    ENDIANNESS: 12,
    GL_TYPE: 16,
    GL_FORMAT: 24,
    GL_INTERNAL_FORMAT: 28,
    PIXEL_WIDTH: 36,
    PIXEL_HEIGHT: 40,
    PIXEL_DEPTH: 44,
    NUMBER_OF_ARRAY_ELEMENTS: 48,
    NUMBER_OF_FACES: 52,
    NUMBER_OF_MIPMAP_LEVELS: 56,
    BYTES_OF_KEY_VALUE_DATA: 60,
  },
  t3 =
    (((x = {})[ta.TYPES.UNSIGNED_BYTE] = 1),
    (x[ta.TYPES.UNSIGNED_SHORT] = 2),
    (x[ta.TYPES.INT] = 4),
    (x[ta.TYPES.UNSIGNED_INT] = 4),
    (x[ta.TYPES.FLOAT] = 4),
    (x[ta.TYPES.HALF_FLOAT] = 8),
    x),
  t4 =
    (((T = {})[ta.FORMATS.RGBA] = 4),
    (T[ta.FORMATS.RGB] = 3),
    (T[ta.FORMATS.RG] = 2),
    (T[ta.FORMATS.RED] = 1),
    (T[ta.FORMATS.LUMINANCE] = 1),
    (T[ta.FORMATS.LUMINANCE_ALPHA] = 2),
    (T[ta.FORMATS.ALPHA] = 1),
    T),
  t8 =
    (((E = {})[ta.TYPES.UNSIGNED_SHORT_4_4_4_4] = 2),
    (E[ta.TYPES.UNSIGNED_SHORT_5_5_5_1] = 2),
    (E[ta.TYPES.UNSIGNED_SHORT_5_6_5] = 2),
    E);
tN.setExtensionXhrType('dds', tN.XHR_RESPONSE_TYPE.BUFFER);
var t6 = (function () {
  function t() {}
  return (
    (t.use = function (t, e) {
      if ('dds' === t.extension && t.data)
        try {
          Object.assign(
            t,
            tZ(
              t.name || t.url,
              (function (t) {
                var e = new Uint32Array(t);
                if (542327876 !== e[0])
                  throw Error('Invalid DDS file magic word');
                var r = new Uint32Array(
                    t,
                    0,
                    124 / Uint32Array.BYTES_PER_ELEMENT
                  ),
                  i = r[3],
                  n = r[4],
                  o = r[7],
                  s = new Uint32Array(
                    t,
                    19 * Uint32Array.BYTES_PER_ELEMENT,
                    32 / Uint32Array.BYTES_PER_ELEMENT
                  ),
                  a = s[1];
                if (4 & a) {
                  var h = s[tQ.FOURCC];
                  if (808540228 !== h) {
                    var u = t$[h];
                    return [
                      new tq(new Uint8Array(t, 128), {
                        format: u,
                        width: n,
                        height: i,
                        levels: o,
                      }),
                    ];
                  }
                  var l = new Uint32Array(
                      e.buffer,
                      128,
                      20 / Uint32Array.BYTES_PER_ELEMENT
                    ),
                    c = l[tJ.DXGI_FORMAT],
                    p = l[tJ.RESOURCE_DIMENSION],
                    f = l[tJ.MISC_FLAG],
                    d = l[tJ.ARRAY_SIZE],
                    _ = t0[c];
                  if (void 0 === _)
                    throw Error(
                      'DDSParser cannot parse texture data with DXGI format ' +
                        c
                    );
                  if (4 === f)
                    throw Error('DDSParser does not support cubemap textures');
                  if (p === b.DDS_DIMENSION_TEXTURE3D)
                    throw Error('DDSParser does not supported 3D texture data');
                  var y = [];
                  if (1 === d) y.push(new Uint8Array(t, 148));
                  else {
                    for (var v = tV[_], m = 0, g = n, x = i, T = 0; T < o; T++)
                      (m +=
                        Math.max(1, (g + 3) & -4) *
                        Math.max(1, (x + 3) & -4) *
                        v),
                        (g >>>= 1),
                        (x >>>= 1);
                    for (var E = 148, T = 0; T < d; T++)
                      y.push(new Uint8Array(t, E, m)), (E += m);
                  }
                  return y.map(function (t) {
                    return new tq(t, {
                      format: _,
                      width: n,
                      height: i,
                      levels: o,
                    });
                  });
                }
                if (64 & a)
                  throw Error(
                    'DDSParser does not support uncompressed texture data.'
                  );
                if (512 & a)
                  throw Error(
                    'DDSParser does not supported YUV uncompressed texture data.'
                  );
                if (131072 & a)
                  throw Error(
                    'DDSParser does not support single-channel (lumninance) texture data!'
                  );
                if (2 & a)
                  throw Error(
                    'DDSParser does not support single-channel (alpha) texture data!'
                  );
                throw Error(
                  'DDSParser failed to load a texture file due to an unknown reason!'
                );
              })(t.data),
              t.metadata
            )
          );
        } catch (t) {
          e(t);
          return;
        }
      e();
    }),
    (t.extension = t_.ExtensionType.Loader),
    t
  );
})();
tN.setExtensionXhrType('ktx', tN.XHR_RESPONSE_TYPE.BUFFER);
var t5 = (function () {
    function t() {}
    return (
      (t.use = function (t, e) {
        if ('ktx' === t.extension && t.data)
          try {
            var r = t.name || t.url,
              i = (function (t, e, r) {
                void 0 === r && (r = !1);
                var i,
                  n = new DataView(e);
                if (
                  !(function (t, e) {
                    for (var r = 0; r < t1.length; r++)
                      if (e.getUint8(r) !== t1[r])
                        return (
                          console.error(t + ' is not a valid *.ktx file!'), !1
                        );
                    return !0;
                  })(t, n)
                )
                  return null;
                var o = 67305985 === n.getUint32(t2.ENDIANNESS, !0),
                  s = n.getUint32(t2.GL_TYPE, o),
                  a = n.getUint32(t2.GL_FORMAT, o),
                  h = n.getUint32(t2.GL_INTERNAL_FORMAT, o),
                  u = n.getUint32(t2.PIXEL_WIDTH, o),
                  l = n.getUint32(t2.PIXEL_HEIGHT, o) || 1,
                  c = n.getUint32(t2.PIXEL_DEPTH, o) || 1,
                  p = n.getUint32(t2.NUMBER_OF_ARRAY_ELEMENTS, o) || 1,
                  f = n.getUint32(t2.NUMBER_OF_FACES, o),
                  d = n.getUint32(t2.NUMBER_OF_MIPMAP_LEVELS, o),
                  _ = n.getUint32(t2.BYTES_OF_KEY_VALUE_DATA, o);
                if (0 === l || 1 !== c)
                  throw Error('Only 2D textures are supported');
                if (1 !== f)
                  throw Error(
                    'CubeTextures are not supported by KTXLoader yet!'
                  );
                if (1 !== p)
                  throw Error('WebGL does not support array textures');
                var y = (u + 3) & -4,
                  v = (l + 3) & -4,
                  m = Array(p),
                  g = u * l;
                if (
                  (0 === s && (g = y * v),
                  void 0 ===
                    (i = 0 !== s ? (t3[s] ? t3[s] * t4[a] : t8[s]) : tV[h]))
                )
                  throw Error(
                    'Unable to resolve the pixel format stored in the *.ktx file!'
                  );
                for (
                  var b = r
                      ? (function (t, e, r) {
                          for (var i = new Map(), n = 0; n < e; ) {
                            var o = t.getUint32(64 + n, r),
                              s = 64 + n + 4,
                              a = 3 - ((o + 3) % 4);
                            if (0 === o || o > e - n) {
                              console.error(
                                'KTXLoader: keyAndValueByteSize out of bounds'
                              );
                              break;
                            }
                            for (
                              var h = 0;
                              h < o && 0 !== t.getUint8(s + h);
                              h++
                            );
                            if (-1 === h) {
                              console.error(
                                'KTXLoader: Failed to find null byte terminating kvData key'
                              );
                              break;
                            }
                            var u = new TextDecoder().decode(
                                new Uint8Array(t.buffer, s, h)
                              ),
                              l = new DataView(t.buffer, s + h + 1, o - h - 1);
                            i.set(u, l), (n += 4 + o + a);
                          }
                          return i;
                        })(n, _, o)
                      : null,
                    x = g * i,
                    T = u,
                    E = l,
                    S = y,
                    A = v,
                    R = 64 + _,
                    O = 0;
                  O < d;
                  O++
                ) {
                  for (
                    var M = n.getUint32(R, o), P = R + 4, I = 0;
                    I < p;
                    I++
                  ) {
                    var w = m[I];
                    w || (w = m[I] = Array(d)),
                      (w[O] = {
                        levelID: O,
                        levelWidth: d > 1 || 0 !== s ? T : S,
                        levelHeight: d > 1 || 0 !== s ? E : A,
                        levelBuffer: new Uint8Array(e, P, x),
                      }),
                      (P += x);
                  }
                  (R += M + 4),
                    (R = R % 4 != 0 ? R + 4 - (R % 4) : R),
                    (E = E >> 1 || 1),
                    (x =
                      (S = ((T = T >> 1 || 1) + 4 - 1) & -4) *
                      (A = (E + 4 - 1) & -4) *
                      i);
                }
                return 0 !== s
                  ? {
                      uncompressed: m.map(function (t) {
                        var e = t[0].levelBuffer,
                          r = !1;
                        return (
                          s === ta.TYPES.FLOAT
                            ? (e = new Float32Array(
                                t[0].levelBuffer.buffer,
                                t[0].levelBuffer.byteOffset,
                                t[0].levelBuffer.byteLength / 4
                              ))
                            : s === ta.TYPES.UNSIGNED_INT
                            ? ((r = !0),
                              (e = new Uint32Array(
                                t[0].levelBuffer.buffer,
                                t[0].levelBuffer.byteOffset,
                                t[0].levelBuffer.byteLength / 4
                              )))
                            : s === ta.TYPES.INT &&
                              ((r = !0),
                              (e = new Int32Array(
                                t[0].levelBuffer.buffer,
                                t[0].levelBuffer.byteOffset,
                                t[0].levelBuffer.byteLength / 4
                              ))),
                          {
                            resource: new t_.BufferResource(e, {
                              width: t[0].levelWidth,
                              height: t[0].levelHeight,
                            }),
                            type: s,
                            format: r
                              ? (function (t) {
                                  switch (t) {
                                    case ta.FORMATS.RGBA:
                                      return ta.FORMATS.RGBA_INTEGER;
                                    case ta.FORMATS.RGB:
                                      return ta.FORMATS.RGB_INTEGER;
                                    case ta.FORMATS.RG:
                                      return ta.FORMATS.RG_INTEGER;
                                    case ta.FORMATS.RED:
                                      return ta.FORMATS.RED_INTEGER;
                                    default:
                                      return t;
                                  }
                                })(a)
                              : a,
                          }
                        );
                      }),
                      kvData: b,
                    }
                  : {
                      compressed: m.map(function (t) {
                        return new tq(null, {
                          format: h,
                          width: u,
                          height: l,
                          levels: d,
                          levelBuffers: t,
                        });
                      }),
                      kvData: b,
                    };
              })(r, t.data, this.loadKeyValueData),
              n = i.compressed,
              o = i.uncompressed,
              s = i.kvData;
            if (n) {
              var a = tZ(r, n, t.metadata);
              if (s && a.textures)
                for (var h in a.textures)
                  a.textures[h].baseTexture.ktxKeyValueData = s;
              Object.assign(t, a);
            } else if (o) {
              var u = {};
              o.forEach(function (t, e) {
                var i = new t_.Texture(
                    new t_.BaseTexture(t.resource, {
                      mipmap: ta.MIPMAP_MODES.OFF,
                      alphaMode: ta.ALPHA_MODES.NO_PREMULTIPLIED_ALPHA,
                      type: t.type,
                      format: t.format,
                    })
                  ),
                  n = r + '-' + (e + 1);
                s && (i.baseTexture.ktxKeyValueData = s),
                  (0, t_.BaseTexture).addToCache(i.baseTexture, n),
                  (0, t_.Texture).addToCache(i, n),
                  0 === e &&
                    ((u[r] = i),
                    (0, t_.BaseTexture).addToCache(i.baseTexture, r),
                    (0, t_.Texture).addToCache(i, r)),
                  (u[n] = i);
              }),
                Object.assign(t, { textures: u });
            }
          } catch (t) {
            e(t);
            return;
          }
        e();
      }),
      (t.extension = t_.ExtensionType.Loader),
      (t.loadKeyValueData = !1),
      t
    );
  })(),
  ta = F('6n98C'),
  ti = F('e70pz'),
  t_ = F('jH9fL'),
  to = F('960oV'),
  t9 = function (t, e) {
    return (t9 =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
function t7(t, e) {
  function r() {
    this.constructor = t;
  }
  t9(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
!(function (t) {
  function e(e, r, i, n) {
    void 0 === e && (e = 1500),
      void 0 === i && (i = 16384),
      void 0 === n && (n = !1);
    var o = t.call(this) || this;
    return (
      i > 16384 && (i = 16384),
      (o._properties = [!1, !0, !1, !1, !1]),
      (o._maxSize = e),
      (o._batchSize = i),
      (o._buffers = null),
      (o._bufferUpdateIDs = []),
      (o._updateID = 0),
      (o.interactiveChildren = !1),
      (o.blendMode = ta.BLEND_MODES.NORMAL),
      (o.autoResize = n),
      (o.roundPixels = !0),
      (o.baseTexture = null),
      o.setProperties(r),
      (o._tint = 0),
      (o.tintRgb = new Float32Array(4)),
      (o.tint = 16777215),
      o
    );
  }
  t7(e, t),
    (e.prototype.setProperties = function (t) {
      t &&
        ((this._properties[0] =
          'vertices' in t || 'scale' in t
            ? !!t.vertices || !!t.scale
            : this._properties[0]),
        (this._properties[1] =
          'position' in t ? !!t.position : this._properties[1]),
        (this._properties[2] =
          'rotation' in t ? !!t.rotation : this._properties[2]),
        (this._properties[3] = 'uvs' in t ? !!t.uvs : this._properties[3]),
        (this._properties[4] =
          'tint' in t || 'alpha' in t
            ? !!t.tint || !!t.alpha
            : this._properties[4]));
    }),
    (e.prototype.updateTransform = function () {
      this.displayObjectUpdateTransform();
    }),
    Object.defineProperty(e.prototype, 'tint', {
      get: function () {
        return this._tint;
      },
      set: function (t) {
        (this._tint = t), (0, ti.hex2rgb)(t, this.tintRgb);
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype.render = function (t) {
      var e = this;
      this.visible &&
        !(this.worldAlpha <= 0) &&
        this.children.length &&
        this.renderable &&
        (this.baseTexture ||
          ((this.baseTexture = this.children[0]._texture.baseTexture),
          this.baseTexture.valid ||
            this.baseTexture.once('update', function () {
              return e.onChildrenChange(0);
            })),
        t.batch.setObjectRenderer(t.plugins.particle),
        t.plugins.particle.render(this));
    }),
    (e.prototype.onChildrenChange = function (t) {
      for (
        var e = Math.floor(t / this._batchSize);
        this._bufferUpdateIDs.length < e;

      )
        this._bufferUpdateIDs.push(0);
      this._bufferUpdateIDs[e] = ++this._updateID;
    }),
    (e.prototype.dispose = function () {
      if (this._buffers) {
        for (var t = 0; t < this._buffers.length; ++t)
          this._buffers[t].destroy();
        this._buffers = null;
      }
    }),
    (e.prototype.destroy = function (e) {
      t.prototype.destroy.call(this, e),
        this.dispose(),
        (this._properties = null),
        (this._buffers = null),
        (this._bufferUpdateIDs = null);
    });
})(td);
var et = (function () {
    function t(t, e, r) {
      (this.geometry = new t_.Geometry()),
        (this.indexBuffer = null),
        (this.size = r),
        (this.dynamicProperties = []),
        (this.staticProperties = []);
      for (var i = 0; i < t.length; ++i) {
        var n = t[i];
        (n = {
          attributeName: n.attributeName,
          size: n.size,
          uploadFunction: n.uploadFunction,
          type: n.type || ta.TYPES.FLOAT,
          offset: n.offset,
        }),
          e[i] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
      }
      (this.staticStride = 0),
        (this.staticBuffer = null),
        (this.staticData = null),
        (this.staticDataUint32 = null),
        (this.dynamicStride = 0),
        (this.dynamicBuffer = null),
        (this.dynamicData = null),
        (this.dynamicDataUint32 = null),
        (this._updateID = 0),
        this.initBuffers();
    }
    return (
      (t.prototype.initBuffers = function () {
        var t = this.geometry,
          e = 0;
        (this.indexBuffer = new t_.Buffer(
          (0, ti.createIndicesForQuads)(this.size),
          !0,
          !0
        )),
          t.addIndex(this.indexBuffer),
          (this.dynamicStride = 0);
        for (var r = 0; r < this.dynamicProperties.length; ++r) {
          var i = this.dynamicProperties[r];
          (i.offset = e), (e += i.size), (this.dynamicStride += i.size);
        }
        var n = new ArrayBuffer(this.size * this.dynamicStride * 16);
        (this.dynamicData = new Float32Array(n)),
          (this.dynamicDataUint32 = new Uint32Array(n)),
          (this.dynamicBuffer = new t_.Buffer(this.dynamicData, !1, !1));
        var o = 0;
        this.staticStride = 0;
        for (var r = 0; r < this.staticProperties.length; ++r) {
          var i = this.staticProperties[r];
          (i.offset = o), (o += i.size), (this.staticStride += i.size);
        }
        var s = new ArrayBuffer(this.size * this.staticStride * 16);
        (this.staticData = new Float32Array(s)),
          (this.staticDataUint32 = new Uint32Array(s)),
          (this.staticBuffer = new t_.Buffer(this.staticData, !0, !1));
        for (var r = 0; r < this.dynamicProperties.length; ++r) {
          var i = this.dynamicProperties[r];
          t.addAttribute(
            i.attributeName,
            this.dynamicBuffer,
            0,
            i.type === ta.TYPES.UNSIGNED_BYTE,
            i.type,
            4 * this.dynamicStride,
            4 * i.offset
          );
        }
        for (var r = 0; r < this.staticProperties.length; ++r) {
          var i = this.staticProperties[r];
          t.addAttribute(
            i.attributeName,
            this.staticBuffer,
            0,
            i.type === ta.TYPES.UNSIGNED_BYTE,
            i.type,
            4 * this.staticStride,
            4 * i.offset
          );
        }
      }),
      (t.prototype.uploadDynamic = function (t, e, r) {
        for (var i = 0; i < this.dynamicProperties.length; i++) {
          var n = this.dynamicProperties[i];
          n.uploadFunction(
            t,
            e,
            r,
            n.type === ta.TYPES.UNSIGNED_BYTE
              ? this.dynamicDataUint32
              : this.dynamicData,
            this.dynamicStride,
            n.offset
          );
        }
        this.dynamicBuffer._updateID++;
      }),
      (t.prototype.uploadStatic = function (t, e, r) {
        for (var i = 0; i < this.staticProperties.length; i++) {
          var n = this.staticProperties[i];
          n.uploadFunction(
            t,
            e,
            r,
            n.type === ta.TYPES.UNSIGNED_BYTE
              ? this.staticDataUint32
              : this.staticData,
            this.staticStride,
            n.offset
          );
        }
        this.staticBuffer._updateID++;
      }),
      (t.prototype.destroy = function () {
        (this.indexBuffer = null),
          (this.dynamicProperties = null),
          (this.dynamicBuffer = null),
          (this.dynamicData = null),
          (this.dynamicDataUint32 = null),
          (this.staticProperties = null),
          (this.staticBuffer = null),
          (this.staticData = null),
          (this.staticDataUint32 = null),
          this.geometry.destroy();
      }),
      t
    );
  })(),
  ee = (function (t) {
    function e(e) {
      var r = t.call(this, e) || this;
      return (
        (r.shader = null),
        (r.properties = null),
        (r.tempMatrix = new to.Matrix()),
        (r.properties = [
          {
            attributeName: 'aVertexPosition',
            size: 2,
            uploadFunction: r.uploadVertices,
            offset: 0,
          },
          {
            attributeName: 'aPositionCoord',
            size: 2,
            uploadFunction: r.uploadPosition,
            offset: 0,
          },
          {
            attributeName: 'aRotation',
            size: 1,
            uploadFunction: r.uploadRotation,
            offset: 0,
          },
          {
            attributeName: 'aTextureCoord',
            size: 2,
            uploadFunction: r.uploadUvs,
            offset: 0,
          },
          {
            attributeName: 'aColor',
            size: 1,
            type: ta.TYPES.UNSIGNED_BYTE,
            uploadFunction: r.uploadTint,
            offset: 0,
          },
        ]),
        (r.shader = (0, t_.Shader).from(
          'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n',
          'varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}',
          {}
        )),
        (r.state = (0, t_.State).for2d()),
        r
      );
    }
    return (
      t7(e, t),
      (e.prototype.render = function (t) {
        var e = t.children,
          r = t._maxSize,
          i = t._batchSize,
          n = this.renderer,
          o = e.length;
        if (0 !== o) {
          o > r && !t.autoResize && (o = r);
          var s = t._buffers;
          s || (s = t._buffers = this.generateBuffers(t));
          var a = e[0]._texture.baseTexture,
            h = a.alphaMode > 0;
          (this.state.blendMode = (0, ti.correctBlendMode)(t.blendMode, h)),
            n.state.set(this.state);
          var u = n.gl,
            l = t.worldTransform.copyTo(this.tempMatrix);
          l.prepend(n.globalUniforms.uniforms.projectionMatrix),
            (this.shader.uniforms.translationMatrix = l.toArray(!0)),
            (this.shader.uniforms.uColor = (0, ti.premultiplyRgba)(
              t.tintRgb,
              t.worldAlpha,
              this.shader.uniforms.uColor,
              h
            )),
            (this.shader.uniforms.uSampler = a),
            this.renderer.shader.bind(this.shader);
          for (var c = !1, p = 0, f = 0; p < o; p += i, f += 1) {
            var d = o - p;
            d > i && (d = i),
              f >= s.length && s.push(this._generateOneMoreBuffer(t));
            var _ = s[f];
            _.uploadDynamic(e, p, d);
            var y = t._bufferUpdateIDs[f] || 0;
            (c = c || _._updateID < y) &&
              ((_._updateID = t._updateID), _.uploadStatic(e, p, d)),
              n.geometry.bind(_.geometry),
              u.drawElements(u.TRIANGLES, 6 * d, u.UNSIGNED_SHORT, 0);
          }
        }
      }),
      (e.prototype.generateBuffers = function (t) {
        for (
          var e = [],
            r = t._maxSize,
            i = t._batchSize,
            n = t._properties,
            o = 0;
          o < r;
          o += i
        )
          e.push(new et(this.properties, n, i));
        return e;
      }),
      (e.prototype._generateOneMoreBuffer = function (t) {
        var e = t._batchSize,
          r = t._properties;
        return new et(this.properties, r, e);
      }),
      (e.prototype.uploadVertices = function (t, e, r, i, n, o) {
        for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < r; ++l) {
          var c = t[e + l],
            p = c._texture,
            f = c.scale.x,
            d = c.scale.y,
            _ = p.trim,
            y = p.orig;
          _
            ? ((s = (a = _.x - c.anchor.x * y.width) + _.width),
              (h = (u = _.y - c.anchor.y * y.height) + _.height))
            : ((s = y.width * (1 - c.anchor.x)),
              (a = -(y.width * c.anchor.x)),
              (h = y.height * (1 - c.anchor.y)),
              (u = -(y.height * c.anchor.y))),
            (i[o] = a * f),
            (i[o + 1] = u * d),
            (i[o + n] = s * f),
            (i[o + n + 1] = u * d),
            (i[o + 2 * n] = s * f),
            (i[o + 2 * n + 1] = h * d),
            (i[o + 3 * n] = a * f),
            (i[o + 3 * n + 1] = h * d),
            (o += 4 * n);
        }
      }),
      (e.prototype.uploadPosition = function (t, e, r, i, n, o) {
        for (var s = 0; s < r; s++) {
          var a = t[e + s].position;
          (i[o] = a.x),
            (i[o + 1] = a.y),
            (i[o + n] = a.x),
            (i[o + n + 1] = a.y),
            (i[o + 2 * n] = a.x),
            (i[o + 2 * n + 1] = a.y),
            (i[o + 3 * n] = a.x),
            (i[o + 3 * n + 1] = a.y),
            (o += 4 * n);
        }
      }),
      (e.prototype.uploadRotation = function (t, e, r, i, n, o) {
        for (var s = 0; s < r; s++) {
          var a = t[e + s].rotation;
          (i[o] = a),
            (i[o + n] = a),
            (i[o + 2 * n] = a),
            (i[o + 3 * n] = a),
            (o += 4 * n);
        }
      }),
      (e.prototype.uploadUvs = function (t, e, r, i, n, o) {
        for (var s = 0; s < r; ++s) {
          var a = t[e + s]._texture._uvs;
          a
            ? ((i[o] = a.x0),
              (i[o + 1] = a.y0),
              (i[o + n] = a.x1),
              (i[o + n + 1] = a.y1),
              (i[o + 2 * n] = a.x2),
              (i[o + 2 * n + 1] = a.y2),
              (i[o + 3 * n] = a.x3),
              (i[o + 3 * n + 1] = a.y3))
            : ((i[o] = 0),
              (i[o + 1] = 0),
              (i[o + n] = 0),
              (i[o + n + 1] = 0),
              (i[o + 2 * n] = 0),
              (i[o + 2 * n + 1] = 0),
              (i[o + 3 * n] = 0),
              (i[o + 3 * n + 1] = 0)),
            (o += 4 * n);
        }
      }),
      (e.prototype.uploadTint = function (t, e, r, i, n, o) {
        for (var s = 0; s < r; ++s) {
          var a = t[e + s],
            h = a._texture.baseTexture.alphaMode > 0,
            u = a.alpha,
            l =
              u < 1 && h
                ? (0, ti.premultiplyTint)(a._tintRGB, u)
                : a._tintRGB + ((255 * u) << 24);
          (i[o] = l),
            (i[o + n] = l),
            (i[o + 2 * n] = l),
            (i[o + 3 * n] = l),
            (o += 4 * n);
        }
      }),
      (e.prototype.destroy = function () {
        t.prototype.destroy.call(this),
          this.shader && (this.shader.destroy(), (this.shader = null)),
          (this.tempMatrix = null);
      }),
      (e.extension = {
        name: 'particle',
        type: t_.ExtensionType.RendererPlugin,
      }),
      e
    );
  })(t_.ObjectRenderer),
  tn = F('8q0ed'),
  t_ = (F('jH9fL'), F('jH9fL')),
  to = F('960oV');
F('e70pz');
var er = F('2jYVZ'),
  ti = F('e70pz'),
  ta = F('6n98C');
((h = S || (S = {})).MITER = 'miter'),
  (h.BEVEL = 'bevel'),
  (h.ROUND = 'round'),
  ((u = A || (A = {})).BUTT = 'butt'),
  (u.ROUND = 'round'),
  (u.SQUARE = 'square');
var ei = {
    adaptive: !0,
    maxLength: 10,
    minSegments: 8,
    maxSegments: 2048,
    epsilon: 1e-4,
    _segmentsCount: function (t, e) {
      if ((void 0 === e && (e = 20), !this.adaptive || !t || isNaN(t)))
        return e;
      var r = Math.ceil(t / this.maxLength);
      return (
        r < this.minSegments
          ? (r = this.minSegments)
          : r > this.maxSegments && (r = this.maxSegments),
        r
      );
    },
  },
  en = (function () {
    function t() {
      (this.color = 16777215),
        (this.alpha = 1),
        (this.texture = t_.Texture.WHITE),
        (this.matrix = null),
        (this.visible = !1),
        this.reset();
    }
    return (
      (t.prototype.clone = function () {
        var e = new t();
        return (
          (e.color = this.color),
          (e.alpha = this.alpha),
          (e.texture = this.texture),
          (e.matrix = this.matrix),
          (e.visible = this.visible),
          e
        );
      }),
      (t.prototype.reset = function () {
        (this.color = 16777215),
          (this.alpha = 1),
          (this.texture = t_.Texture.WHITE),
          (this.matrix = null),
          (this.visible = !1);
      }),
      (t.prototype.destroy = function () {
        (this.texture = null), (this.matrix = null);
      }),
      t
    );
  })(),
  eo = function (t, e) {
    return (eo =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
function es(t, e) {
  function r() {
    this.constructor = t;
  }
  eo(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
function ea(t, e) {
  void 0 === e && (e = !1);
  var r,
    i,
    n = t.length;
  if (!(n < 6)) {
    for (var o = 0, s = 0, a = t[n - 2], h = t[n - 1]; s < n; s += 2) {
      var u = t[s],
        l = t[s + 1];
      (o += (u - a) * (l + h)), (a = u), (h = l);
    }
    if ((!e && o > 0) || (e && o <= 0))
      for (var c = n / 2, s = c + (c % 2); s < n; s += 2) {
        var p = n - s - 2,
          f = n - s - 1,
          d = s,
          _ = s + 1;
        (r = [t[d], t[p]]),
          (t[p] = r[0]),
          (t[d] = r[1]),
          (i = [t[_], t[f]]),
          (t[f] = i[0]),
          (t[_] = i[1]);
      }
  }
}
var eh = {
    build: function (t) {
      t.points = t.shape.points.slice();
    },
    triangulate: function (t, e) {
      var r = t.points,
        i = t.holes,
        n = e.points,
        o = e.indices;
      if (r.length >= 6) {
        ea(r, !1);
        for (var s = [], a = 0; a < i.length; a++) {
          var h = i[a];
          ea(h.points, !0), s.push(r.length / 2), (r = r.concat(h.points));
        }
        var u = I(er)(r, s, 2);
        if (!u) return;
        for (var l = n.length / 2, a = 0; a < u.length; a += 3)
          o.push(u[a] + l), o.push(u[a + 1] + l), o.push(u[a + 2] + l);
        for (var a = 0; a < r.length; a++) n.push(r[a]);
      }
    },
  },
  eu = {
    build: function (t) {
      var e,
        r,
        i,
        n,
        o,
        s,
        a = t.points;
      if (t.type === to.SHAPES.CIRC) {
        var h = t.shape;
        (e = h.x), (r = h.y), (o = s = h.radius), (i = n = 0);
      } else if (t.type === to.SHAPES.ELIP) {
        var u = t.shape;
        (e = u.x), (r = u.y), (o = u.width), (s = u.height), (i = n = 0);
      } else {
        var l = t.shape,
          c = l.width / 2,
          p = l.height / 2;
        (e = l.x + c),
          (r = l.y + p),
          (o = s = Math.max(0, Math.min(l.radius, Math.min(c, p)))),
          (i = c - o),
          (n = p - s);
      }
      if (!(o >= 0 && s >= 0 && i >= 0 && n >= 0)) {
        a.length = 0;
        return;
      }
      var f = Math.ceil(2.3 * Math.sqrt(o + s)),
        d = 8 * f + (i ? 4 : 0) + (n ? 4 : 0);
      if (((a.length = d), 0 !== d)) {
        if (0 === f) {
          (a.length = 8),
            (a[0] = a[6] = e + i),
            (a[1] = a[3] = r + n),
            (a[2] = a[4] = e - i),
            (a[5] = a[7] = r - n);
          return;
        }
        var _ = 0,
          y = 4 * f + (i ? 2 : 0) + 2,
          v = y,
          m = d,
          g = i + o,
          b = n,
          x = e + g,
          T = e - g,
          E = r + b;
        if (((a[_++] = x), (a[_++] = E), (a[--y] = E), (a[--y] = T), n)) {
          var S = r - b;
          (a[v++] = T), (a[v++] = S), (a[--m] = S), (a[--m] = x);
        }
        for (var A = 1; A < f; A++) {
          var R = (Math.PI / 2) * (A / f),
            g = i + Math.cos(R) * o,
            b = n + Math.sin(R) * s,
            x = e + g,
            T = e - g,
            E = r + b,
            S = r - b;
          (a[_++] = x),
            (a[_++] = E),
            (a[--y] = E),
            (a[--y] = T),
            (a[v++] = T),
            (a[v++] = S),
            (a[--m] = S),
            (a[--m] = x);
        }
        var g = i,
          b = n + s,
          x = e + g,
          T = e - g,
          E = r + b,
          S = r - b;
        (a[_++] = x),
          (a[_++] = E),
          (a[--m] = S),
          (a[--m] = x),
          i && ((a[_++] = T), (a[_++] = E), (a[--m] = S), (a[--m] = T));
      }
    },
    triangulate: function (t, e) {
      var r,
        i,
        n = t.points,
        o = e.points,
        s = e.indices;
      if (0 !== n.length) {
        var a = o.length / 2,
          h = a;
        if (t.type !== to.SHAPES.RREC) {
          var u = t.shape;
          (r = u.x), (i = u.y);
        } else {
          var l = t.shape;
          (r = l.x + l.width / 2), (i = l.y + l.height / 2);
        }
        var c = t.matrix;
        o.push(
          t.matrix ? c.a * r + c.c * i + c.tx : r,
          t.matrix ? c.b * r + c.d * i + c.ty : i
        ),
          a++,
          o.push(n[0], n[1]);
        for (var p = 2; p < n.length; p += 2)
          o.push(n[p], n[p + 1]), s.push(a++, h, a);
        s.push(h + 1, h, a);
      }
    },
  };
function el(t, e, r, i, n, o, s) {
  void 0 === s && (s = []);
  for (
    var a, h, u = s, l = 0, c = 0, p = 0, f = 0, d = 0, _ = 0, y = 0, v = 0;
    y <= 20;
    ++y
  )
    (l = t + (r - t) * (v = y / 20)),
      (c = e + (i - e) * v),
      (p = r + (n - r) * v),
      (f = i + (o - i) * v),
      (d = (a = l) + (p - a) * v),
      (_ = (h = c) + (f - h) * v),
      (0 !== y || u[u.length - 2] !== d || u[u.length - 1] !== _) &&
        u.push(d, _);
  return u;
}
function ec(t, e, r, i, n, o, s, a) {
  s ? ((h = i), (u = -r)) : ((h = -i), (u = r));
  var h,
    u,
    l = t - r * n + h,
    c = e - i * n + u,
    p = t + r * o + h,
    f = e + i * o + u;
  return a.push(l, c), a.push(p, f), 2;
}
function ep(t, e, r, i, n, o, s, a) {
  var h = r - t,
    u = i - e,
    l = Math.atan2(h, u),
    c = Math.atan2(n - t, o - e);
  a && l < c ? (l += 2 * Math.PI) : !a && l > c && (c += 2 * Math.PI);
  var p = l,
    f = c - l,
    d = Math.sqrt(h * h + u * u),
    _ = (((15 * Math.abs(f) * Math.sqrt(d)) / Math.PI) >> 0) + 1,
    y = f / _;
  if (((p += y), a)) {
    s.push(t, e), s.push(r, i);
    for (var v = 1, m = p; v < _; v++, m += y)
      s.push(t, e), s.push(t + Math.sin(m) * d, e + Math.cos(m) * d);
    s.push(t, e), s.push(n, o);
  } else {
    s.push(r, i), s.push(t, e);
    for (var v = 1, m = p; v < _; v++, m += y)
      s.push(t + Math.sin(m) * d, e + Math.cos(m) * d), s.push(t, e);
    s.push(n, o), s.push(t, e);
  }
  return 2 * _;
}
function ef(t, e) {
  t.lineStyle.native
    ? (function (t, e) {
        var r = 0,
          i = t.shape,
          n = t.points || i.points,
          o = i.type !== to.SHAPES.POLY || i.closeStroke;
        if (0 !== n.length) {
          var s = e.points,
            a = e.indices,
            h = n.length / 2,
            u = s.length / 2,
            l = u;
          for (s.push(n[0], n[1]), r = 1; r < h; r++)
            s.push(n[2 * r], n[2 * r + 1]), a.push(l, l + 1), l++;
          o && a.push(l, u);
        }
      })(t, e)
    : (function (t, e) {
        var r = t.shape,
          i = t.points || r.points.slice(),
          n = e.closePointEps;
        if (0 !== i.length) {
          var o = t.lineStyle,
            s = new to.Point(i[0], i[1]),
            a = new to.Point(i[i.length - 2], i[i.length - 1]),
            h = r.type !== to.SHAPES.POLY || r.closeStroke,
            u = Math.abs(s.x - a.x) < n && Math.abs(s.y - a.y) < n;
          if (h) {
            (i = i.slice()),
              u && (i.pop(), i.pop(), a.set(i[i.length - 2], i[i.length - 1]));
            var l = (s.x + a.x) * 0.5,
              c = (a.y + s.y) * 0.5;
            i.unshift(l, c), i.push(l, c);
          }
          var p = e.points,
            f = i.length / 2,
            d = i.length,
            _ = p.length / 2,
            y = o.width / 2,
            v = y * y,
            m = o.miterLimit * o.miterLimit,
            g = i[0],
            b = i[1],
            x = i[2],
            T = i[3],
            E = 0,
            R = 0,
            O = -(b - T),
            M = g - x,
            P = 0,
            I = 0,
            w = Math.sqrt(O * O + M * M);
          (O /= w), (M /= w), (O *= y), (M *= y);
          var D = o.alignment,
            C = (1 - D) * 2,
            F = 2 * D;
          h ||
            (o.cap === A.ROUND
              ? (d +=
                  ep(
                    g - O * (C - F) * 0.5,
                    b - M * (C - F) * 0.5,
                    g - O * C,
                    b - M * C,
                    g + O * F,
                    b + M * F,
                    p,
                    !0
                  ) + 2)
              : o.cap === A.SQUARE && (d += ec(g, b, O, M, C, F, !0, p))),
            p.push(g - O * C, b - M * C),
            p.push(g + O * F, b + M * F);
          for (var N = 1; N < f - 1; ++N) {
            (g = i[(N - 1) * 2]),
              (b = i[(N - 1) * 2 + 1]),
              (x = i[2 * N]),
              (T = i[2 * N + 1]),
              (E = i[(N + 1) * 2]),
              (R = i[(N + 1) * 2 + 1]),
              (w = Math.sqrt((O = -(b - T)) * O + (M = g - x) * M)),
              (O /= w),
              (M /= w),
              (O *= y),
              (M *= y),
              (w = Math.sqrt((P = -(T - R)) * P + (I = x - E) * I)),
              (P /= w),
              (I /= w),
              (P *= y),
              (I *= y);
            var L = x - g,
              B = b - T,
              G = x - E,
              U = R - T,
              k = L * G + B * U,
              X = B * G - U * L,
              j = X < 0;
            if (Math.abs(X) < 0.001 * Math.abs(k)) {
              p.push(x - O * C, T - M * C),
                p.push(x + O * F, T + M * F),
                k >= 0 &&
                  (o.join === S.ROUND
                    ? (d +=
                        ep(
                          x,
                          T,
                          x - O * C,
                          T - M * C,
                          x - P * C,
                          T - I * C,
                          p,
                          !1
                        ) + 4)
                    : (d += 2),
                  p.push(x - P * F, T - I * F),
                  p.push(x + P * C, T + I * C));
              continue;
            }
            var H = (-O + g) * (-M + T) - (-O + x) * (-M + b),
              Y = (-P + E) * (-I + T) - (-P + x) * (-I + R),
              V = (L * Y - G * H) / X,
              z = (U * H - B * Y) / X,
              W = (V - x) * (V - x) + (z - T) * (z - T),
              q = x + (V - x) * C,
              K = T + (z - T) * C,
              Z = x - (V - x) * F,
              Q = T - (z - T) * F,
              J = j ? C : F;
            W <= Math.min(L * L + B * B, G * G + U * U) + J * J * v
              ? o.join === S.BEVEL || W / v > m
                ? (j
                    ? (p.push(q, K),
                      p.push(x + O * F, T + M * F),
                      p.push(q, K),
                      p.push(x + P * F, T + I * F))
                    : (p.push(x - O * C, T - M * C),
                      p.push(Z, Q),
                      p.push(x - P * C, T - I * C),
                      p.push(Z, Q)),
                  (d += 2))
                : o.join === S.ROUND
                ? j
                  ? (p.push(q, K),
                    p.push(x + O * F, T + M * F),
                    (d +=
                      ep(
                        x,
                        T,
                        x + O * F,
                        T + M * F,
                        x + P * F,
                        T + I * F,
                        p,
                        !0
                      ) + 4),
                    p.push(q, K),
                    p.push(x + P * F, T + I * F))
                  : (p.push(x - O * C, T - M * C),
                    p.push(Z, Q),
                    (d +=
                      ep(
                        x,
                        T,
                        x - O * C,
                        T - M * C,
                        x - P * C,
                        T - I * C,
                        p,
                        !1
                      ) + 4),
                    p.push(x - P * C, T - I * C),
                    p.push(Z, Q))
                : (p.push(q, K), p.push(Z, Q))
              : (p.push(x - O * C, T - M * C),
                p.push(x + O * F, T + M * F),
                o.join === S.ROUND
                  ? j
                    ? (d +=
                        ep(
                          x,
                          T,
                          x + O * F,
                          T + M * F,
                          x + P * F,
                          T + I * F,
                          p,
                          !0
                        ) + 2)
                    : (d +=
                        ep(
                          x,
                          T,
                          x - O * C,
                          T - M * C,
                          x - P * C,
                          T - I * C,
                          p,
                          !1
                        ) + 2)
                  : o.join === S.MITER &&
                    W / v <= m &&
                    (j
                      ? (p.push(Z, Q), p.push(Z, Q))
                      : (p.push(q, K), p.push(q, K)),
                    (d += 2)),
                p.push(x - P * C, T - I * C),
                p.push(x + P * F, T + I * F),
                (d += 2));
          }
          (g = i[(f - 2) * 2]),
            (b = i[(f - 2) * 2 + 1]),
            (x = i[(f - 1) * 2]),
            (w = Math.sqrt(
              (O = -(b - (T = i[(f - 1) * 2 + 1]))) * O + (M = g - x) * M
            )),
            (O /= w),
            (M /= w),
            (O *= y),
            (M *= y),
            p.push(x - O * C, T - M * C),
            p.push(x + O * F, T + M * F),
            h ||
              (o.cap === A.ROUND
                ? (d +=
                    ep(
                      x - O * (C - F) * 0.5,
                      T - M * (C - F) * 0.5,
                      x - O * C,
                      T - M * C,
                      x + O * F,
                      T + M * F,
                      p,
                      !1
                    ) + 2)
                : o.cap === A.SQUARE && (d += ec(x, T, O, M, C, F, !1, p)));
          for (
            var $ = e.indices, tt = ei.epsilon * ei.epsilon, N = _;
            N < d + _ - 2;
            ++N
          )
            (g = p[2 * N]),
              (b = p[2 * N + 1]),
              (x = p[(N + 1) * 2]),
              (T = p[(N + 1) * 2 + 1]),
              (E = p[(N + 2) * 2]),
              Math.abs(
                g * (T - (R = p[(N + 2) * 2 + 1])) + x * (R - b) + E * (b - T)
              ) < tt || $.push(N, N + 1, N + 2);
        }
      })(t, e);
}
var ed = (function () {
    function t() {}
    return (
      (t.curveTo = function (t, e, r, i, n, o) {
        var s = o[o.length - 2],
          a = o[o.length - 1] - e,
          h = s - t,
          u = i - e,
          l = r - t,
          c = Math.abs(a * l - h * u);
        if (c < 1e-8 || 0 === n)
          return (
            (o[o.length - 2] !== t || o[o.length - 1] !== e) && o.push(t, e),
            null
          );
        var p = a * a + h * h,
          f = u * u + l * l,
          d = a * u + h * l,
          _ = (n * Math.sqrt(p)) / c,
          y = (n * Math.sqrt(f)) / c,
          v = (_ * d) / p,
          m = (y * d) / f,
          g = _ * l + y * h,
          b = _ * u + y * a,
          x = Math.atan2(a * (y + v) - b, h * (y + v) - g),
          T = Math.atan2(u * (_ + m) - b, l * (_ + m) - g);
        return {
          cx: g + t,
          cy: b + e,
          radius: n,
          startAngle: x,
          endAngle: T,
          anticlockwise: h * u > l * a,
        };
      }),
      (t.arc = function (t, e, r, i, n, o, s, a, h) {
        for (
          var u = s - o,
            l = ei._segmentsCount(
              Math.abs(u) * n,
              40 * Math.ceil(Math.abs(u) / to.PI_2)
            ),
            c = u / (2 * l),
            p = 2 * c,
            f = Math.cos(c),
            d = Math.sin(c),
            _ = l - 1,
            y = (_ % 1) / _,
            v = 0;
          v <= _;
          ++v
        ) {
          var m = c + o + p * (v + y * v),
            g = Math.cos(m),
            b = -Math.sin(m);
          h.push((f * g + d * b) * n + r, (-(f * b) + d * g) * n + i);
        }
      }),
      t
    );
  })(),
  e_ = (function () {
    function t() {}
    return (
      (t.curveLength = function (t, e, r, i, n, o, s, a) {
        for (
          var h = 0,
            u = 0,
            l = 0,
            c = 0,
            p = 0,
            f = 0,
            d = 0,
            _ = 0,
            y = 0,
            v = 0,
            m = 0,
            g = t,
            b = e,
            x = 1;
          x <= 10;
          ++x
        )
          (c = (l = (u = x / 10) * u) * u),
            (_ =
              (d = (f = (p = 1 - u) * p) * p) * t +
              3 * f * u * r +
              3 * p * l * n +
              c * s),
            (y = d * e + 3 * f * u * i + 3 * p * l * o + c * a),
            (v = g - _),
            (m = b - y),
            (g = _),
            (b = y),
            (h += Math.sqrt(v * v + m * m));
        return h;
      }),
      (t.curveTo = function (e, r, i, n, o, s, a) {
        var h = a[a.length - 2],
          u = a[a.length - 1];
        a.length -= 2;
        var l = ei._segmentsCount(t.curveLength(h, u, e, r, i, n, o, s)),
          c = 0,
          p = 0,
          f = 0,
          d = 0,
          _ = 0;
        a.push(h, u);
        for (var y = 1, v = 0; y <= l; ++y)
          (f = (p = (c = 1 - (v = y / l)) * c) * c),
            (_ = (d = v * v) * v),
            a.push(
              f * h + 3 * p * v * e + 3 * c * d * i + _ * o,
              f * u + 3 * p * v * r + 3 * c * d * n + _ * s
            );
      }),
      t
    );
  })(),
  ey = (function () {
    function t() {}
    return (
      (t.curveLength = function (t, e, r, i, n, o) {
        var s = t - 2 * r + n,
          a = e - 2 * i + o,
          h = 2 * r - 2 * t,
          u = 2 * i - 2 * e,
          l = 4 * (s * s + a * a),
          c = 4 * (s * h + a * u),
          p = h * h + u * u,
          f = 2 * Math.sqrt(l + c + p),
          d = Math.sqrt(l),
          _ = 2 * l * d,
          y = 2 * Math.sqrt(p),
          v = c / d;
        return (
          (_ * f +
            d * c * (f - y) +
            (4 * p * l - c * c) * Math.log((2 * d + v + f) / (v + y))) /
          (4 * _)
        );
      }),
      (t.curveTo = function (e, r, i, n, o) {
        for (
          var s = o[o.length - 2],
            a = o[o.length - 1],
            h = ei._segmentsCount(t.curveLength(s, a, e, r, i, n)),
            u = 0,
            l = 0,
            c = 1;
          c <= h;
          ++c
        ) {
          var p = c / h;
          (u = s + (e - s) * p),
            (l = a + (r - a) * p),
            o.push(
              u + (e + (i - e) * p - u) * p,
              l + (r + (n - r) * p - l) * p
            );
        }
      }),
      t
    );
  })(),
  ev = (function () {
    function t() {
      this.reset();
    }
    return (
      (t.prototype.begin = function (t, e, r) {
        this.reset(),
          (this.style = t),
          (this.start = e),
          (this.attribStart = r);
      }),
      (t.prototype.end = function (t, e) {
        (this.attribSize = e - this.attribStart), (this.size = t - this.start);
      }),
      (t.prototype.reset = function () {
        (this.style = null),
          (this.size = 0),
          (this.start = 0),
          (this.attribStart = 0),
          (this.attribSize = 0);
      }),
      t
    );
  })(),
  em =
    (((R = {})[to.SHAPES.POLY] = eh),
    (R[to.SHAPES.CIRC] = eu),
    (R[to.SHAPES.ELIP] = eu),
    (R[to.SHAPES.RECT] = {
      build: function (t) {
        var e = t.shape,
          r = e.x,
          i = e.y,
          n = e.width,
          o = e.height,
          s = t.points;
        (s.length = 0), s.push(r, i, r + n, i, r + n, i + o, r, i + o);
      },
      triangulate: function (t, e) {
        var r = t.points,
          i = e.points,
          n = i.length / 2;
        i.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]),
          e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3);
      },
    }),
    (R[to.SHAPES.RREC] = {
      build: function (t) {
        if (eO.nextRoundedRectBehavior) {
          eu.build(t);
          return;
        }
        var e = t.shape,
          r = t.points,
          i = e.x,
          n = e.y,
          o = e.width,
          s = e.height,
          a = Math.max(0, Math.min(e.radius, Math.min(o, s) / 2));
        (r.length = 0),
          a
            ? (el(i, n + a, i, n, i + a, n, r),
              el(i + o - a, n, i + o, n, i + o, n + a, r),
              el(i + o, n + s - a, i + o, n + s, i + o - a, n + s, r),
              el(i + a, n + s, i, n + s, i, n + s - a, r))
            : r.push(i, n, i + o, n, i + o, n + s, i, n + s);
      },
      triangulate: function (t, e) {
        if (eO.nextRoundedRectBehavior) {
          eu.triangulate(t, e);
          return;
        }
        for (
          var r = t.points,
            i = e.points,
            n = e.indices,
            o = i.length / 2,
            s = I(er)(r, null, 2),
            a = 0,
            h = s.length;
          a < h;
          a += 3
        )
          n.push(s[a] + o), n.push(s[a + 1] + o), n.push(s[a + 2] + o);
        for (var a = 0, h = r.length; a < h; a++) i.push(r[a], r[++a]);
      },
    }),
    R),
  eg = [],
  eb = [],
  ex = (function () {
    function t(t, e, r, i) {
      void 0 === e && (e = null),
        void 0 === r && (r = null),
        void 0 === i && (i = null),
        (this.points = []),
        (this.holes = []),
        (this.shape = t),
        (this.lineStyle = r),
        (this.fillStyle = e),
        (this.matrix = i),
        (this.type = t.type);
    }
    return (
      (t.prototype.clone = function () {
        return new t(this.shape, this.fillStyle, this.lineStyle, this.matrix);
      }),
      (t.prototype.destroy = function () {
        (this.shape = null),
          (this.holes.length = 0),
          (this.holes = null),
          (this.points.length = 0),
          (this.points = null),
          (this.lineStyle = null),
          (this.fillStyle = null);
      }),
      t
    );
  })(),
  eT = new to.Point(),
  eE = (function (t) {
    function e() {
      var e = t.call(this) || this;
      return (
        (e.closePointEps = 1e-4),
        (e.boundsPadding = 0),
        (e.uvsFloat32 = null),
        (e.indicesUint16 = null),
        (e.batchable = !1),
        (e.points = []),
        (e.colors = []),
        (e.uvs = []),
        (e.indices = []),
        (e.textureIds = []),
        (e.graphicsData = []),
        (e.drawCalls = []),
        (e.batchDirty = -1),
        (e.batches = []),
        (e.dirty = 0),
        (e.cacheDirty = -1),
        (e.clearDirty = 0),
        (e.shapeIndex = 0),
        (e._bounds = new th()),
        (e.boundsDirty = -1),
        e
      );
    }
    return (
      es(e, t),
      Object.defineProperty(e.prototype, 'bounds', {
        get: function () {
          return (
            this.updateBatches(),
            this.boundsDirty !== this.dirty &&
              ((this.boundsDirty = this.dirty), this.calculateBounds()),
            this._bounds
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.invalidate = function () {
        (this.boundsDirty = -1),
          this.dirty++,
          this.batchDirty++,
          (this.shapeIndex = 0),
          (this.points.length = 0),
          (this.colors.length = 0),
          (this.uvs.length = 0),
          (this.indices.length = 0),
          (this.textureIds.length = 0);
        for (var t = 0; t < this.drawCalls.length; t++)
          this.drawCalls[t].texArray.clear(), eb.push(this.drawCalls[t]);
        this.drawCalls.length = 0;
        for (var t = 0; t < this.batches.length; t++) {
          var e = this.batches[t];
          e.reset(), eg.push(e);
        }
        this.batches.length = 0;
      }),
      (e.prototype.clear = function () {
        return (
          this.graphicsData.length > 0 &&
            (this.invalidate(),
            this.clearDirty++,
            (this.graphicsData.length = 0)),
          this
        );
      }),
      (e.prototype.drawShape = function (t, e, r, i) {
        void 0 === e && (e = null),
          void 0 === r && (r = null),
          void 0 === i && (i = null);
        var n = new ex(t, e, r, i);
        return this.graphicsData.push(n), this.dirty++, this;
      }),
      (e.prototype.drawHole = function (t, e) {
        if ((void 0 === e && (e = null), !this.graphicsData.length))
          return null;
        var r = new ex(t, null, null, e),
          i = this.graphicsData[this.graphicsData.length - 1];
        return (r.lineStyle = i.lineStyle), i.holes.push(r), this.dirty++, this;
      }),
      (e.prototype.destroy = function () {
        t.prototype.destroy.call(this);
        for (var e = 0; e < this.graphicsData.length; ++e)
          this.graphicsData[e].destroy();
        (this.points.length = 0),
          (this.points = null),
          (this.colors.length = 0),
          (this.colors = null),
          (this.uvs.length = 0),
          (this.uvs = null),
          (this.indices.length = 0),
          (this.indices = null),
          this.indexBuffer.destroy(),
          (this.indexBuffer = null),
          (this.graphicsData.length = 0),
          (this.graphicsData = null),
          (this.drawCalls.length = 0),
          (this.drawCalls = null),
          (this.batches.length = 0),
          (this.batches = null),
          (this._bounds = null);
      }),
      (e.prototype.containsPoint = function (t) {
        for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
          var i = e[r];
          if (
            i.fillStyle.visible &&
            i.shape &&
            (i.matrix ? i.matrix.applyInverse(t, eT) : eT.copyFrom(t),
            i.shape.contains(eT.x, eT.y))
          ) {
            var n = !1;
            if (i.holes) {
              for (var o = 0; o < i.holes.length; o++)
                if (i.holes[o].shape.contains(eT.x, eT.y)) {
                  n = !0;
                  break;
                }
            }
            if (!n) return !0;
          }
        }
        return !1;
      }),
      (e.prototype.updateBatches = function () {
        if (!this.graphicsData.length) {
          this.batchable = !0;
          return;
        }
        if (this.validateBatching()) {
          this.cacheDirty = this.dirty;
          var t = this.uvs,
            e = this.graphicsData,
            r = null,
            i = null;
          this.batches.length > 0 &&
            (i = (r = this.batches[this.batches.length - 1]).style);
          for (var n = this.shapeIndex; n < e.length; n++) {
            this.shapeIndex++;
            var o = e[n],
              s = o.fillStyle,
              a = o.lineStyle;
            em[o.type].build(o),
              o.matrix && this.transformPoints(o.points, o.matrix),
              (s.visible || a.visible) && this.processHoles(o.holes);
            for (var h = 0; h < 2; h++) {
              var u = 0 === h ? s : a;
              if (u.visible) {
                var l = u.texture.baseTexture,
                  c = this.indices.length,
                  p = this.points.length / 2;
                (l.wrapMode = ta.WRAP_MODES.REPEAT),
                  0 === h ? this.processFill(o) : this.processLine(o);
                var f = this.points.length / 2 - p;
                0 !== f &&
                  (r && !this._compareStyles(i, u) && (r.end(c, p), (r = null)),
                  r ||
                    ((r = eg.pop() || new ev()).begin(u, c, p),
                    this.batches.push(r),
                    (i = u)),
                  this.addUvs(this.points, t, u.texture, p, f, u.matrix));
              }
            }
          }
          var d = this.indices.length,
            _ = this.points.length / 2;
          if ((r && r.end(d, _), 0 === this.batches.length)) {
            this.batchable = !0;
            return;
          }
          var y = _ > 65535;
          this.indicesUint16 &&
          this.indices.length === this.indicesUint16.length &&
          y === this.indicesUint16.BYTES_PER_ELEMENT > 2
            ? this.indicesUint16.set(this.indices)
            : (this.indicesUint16 = y
                ? new Uint32Array(this.indices)
                : new Uint16Array(this.indices)),
            (this.batchable = this.isBatchable()),
            this.batchable ? this.packBatches() : this.buildDrawCalls();
        }
      }),
      (e.prototype._compareStyles = function (t, e) {
        return (
          !!t &&
          !!e &&
          t.texture.baseTexture === e.texture.baseTexture &&
          t.color + t.alpha === e.color + e.alpha &&
          !!t.native == !!e.native
        );
      }),
      (e.prototype.validateBatching = function () {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length)
          return !1;
        for (var t = 0, e = this.graphicsData.length; t < e; t++) {
          var r = this.graphicsData[t],
            i = r.fillStyle,
            n = r.lineStyle;
          if (
            (i && !i.texture.baseTexture.valid) ||
            (n && !n.texture.baseTexture.valid)
          )
            return !1;
        }
        return !0;
      }),
      (e.prototype.packBatches = function () {
        this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
        for (var t = this.batches, e = 0, r = t.length; e < r; e++)
          for (var i = t[e], n = 0; n < i.size; n++) {
            var o = i.start + n;
            this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart;
          }
      }),
      (e.prototype.isBatchable = function () {
        if (this.points.length > 131070) return !1;
        for (var t = this.batches, r = 0; r < t.length; r++)
          if (t[r].style.native) return !1;
        return this.points.length < 2 * e.BATCHABLE_SIZE;
      }),
      (e.prototype.buildDrawCalls = function () {
        for (
          var t = ++t_.BaseTexture._globalBatch, e = 0;
          e < this.drawCalls.length;
          e++
        )
          this.drawCalls[e].texArray.clear(), eb.push(this.drawCalls[e]);
        this.drawCalls.length = 0;
        var r = this.colors,
          i = this.textureIds,
          n = eb.pop();
        n ||
          ((n = new t_.BatchDrawCall()).texArray = new t_.BatchTextureArray()),
          (n.texArray.count = 0),
          (n.start = 0),
          (n.size = 0),
          (n.type = ta.DRAW_MODES.TRIANGLES);
        var o = 0,
          s = null,
          a = 0,
          h = !1,
          u = ta.DRAW_MODES.TRIANGLES,
          l = 0;
        this.drawCalls.push(n);
        for (var e = 0; e < this.batches.length; e++) {
          var c = this.batches[e],
            p = c.style,
            f = p.texture.baseTexture;
          !!p.native !== h &&
            ((u = (h = !!p.native)
              ? ta.DRAW_MODES.LINES
              : ta.DRAW_MODES.TRIANGLES),
            (s = null),
            (o = 8),
            t++),
            s !== f &&
              ((s = f),
              f._batchEnabled !== t &&
                (8 === o &&
                  (t++,
                  (o = 0),
                  n.size > 0 &&
                    ((n = eb.pop()) ||
                      ((n = new t_.BatchDrawCall()).texArray =
                        new t_.BatchTextureArray()),
                    this.drawCalls.push(n)),
                  (n.start = l),
                  (n.size = 0),
                  (n.texArray.count = 0),
                  (n.type = u)),
                (f.touched = 1),
                (f._batchEnabled = t),
                (f._batchLocation = o),
                (f.wrapMode = ta.WRAP_MODES.REPEAT),
                (n.texArray.elements[n.texArray.count++] = f),
                o++)),
            (n.size += c.size),
            (l += c.size),
            (a = f._batchLocation),
            this.addColors(r, p.color, p.alpha, c.attribSize, c.attribStart),
            this.addTextureIds(i, a, c.attribSize, c.attribStart);
        }
        (t_.BaseTexture._globalBatch = t), this.packAttributes();
      }),
      (e.prototype.packAttributes = function () {
        for (
          var t = this.points,
            e = this.uvs,
            r = this.colors,
            i = this.textureIds,
            n = new ArrayBuffer(12 * t.length),
            o = new Float32Array(n),
            s = new Uint32Array(n),
            a = 0,
            h = 0;
          h < t.length / 2;
          h++
        )
          (o[a++] = t[2 * h]),
            (o[a++] = t[2 * h + 1]),
            (o[a++] = e[2 * h]),
            (o[a++] = e[2 * h + 1]),
            (s[a++] = r[h]),
            (o[a++] = i[h]);
        this._buffer.update(n), this._indexBuffer.update(this.indicesUint16);
      }),
      (e.prototype.processFill = function (t) {
        t.holes.length
          ? eh.triangulate(t, this)
          : em[t.type].triangulate(t, this);
      }),
      (e.prototype.processLine = function (t) {
        ef(t, this);
        for (var e = 0; e < t.holes.length; e++) ef(t.holes[e], this);
      }),
      (e.prototype.processHoles = function (t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          em[r.type].build(r),
            r.matrix && this.transformPoints(r.points, r.matrix);
        }
      }),
      (e.prototype.calculateBounds = function () {
        var t = this._bounds;
        t.clear(),
          t.addVertexData(this.points, 0, this.points.length),
          t.pad(this.boundsPadding, this.boundsPadding);
      }),
      (e.prototype.transformPoints = function (t, e) {
        for (var r = 0; r < t.length / 2; r++) {
          var i = t[2 * r],
            n = t[2 * r + 1];
          (t[2 * r] = e.a * i + e.c * n + e.tx),
            (t[2 * r + 1] = e.b * i + e.d * n + e.ty);
        }
      }),
      (e.prototype.addColors = function (t, e, r, i, n) {
        void 0 === n && (n = 0);
        var o = (0, ti.premultiplyTint)(
          (e >> 16) + (65280 & e) + ((255 & e) << 16),
          r
        );
        t.length = Math.max(t.length, n + i);
        for (var s = 0; s < i; s++) t[n + s] = o;
      }),
      (e.prototype.addTextureIds = function (t, e, r, i) {
        void 0 === i && (i = 0), (t.length = Math.max(t.length, i + r));
        for (var n = 0; n < r; n++) t[i + n] = e;
      }),
      (e.prototype.addUvs = function (t, e, r, i, n, o) {
        void 0 === o && (o = null);
        for (var s = 0, a = e.length, h = r.frame; s < n; ) {
          var u = t[(i + s) * 2],
            l = t[(i + s) * 2 + 1];
          if (o) {
            var c = o.a * u + o.c * l + o.tx;
            (l = o.b * u + o.d * l + o.ty), (u = c);
          }
          s++, e.push(u / h.width, l / h.height);
        }
        var p = r.baseTexture;
        (h.width < p.width || h.height < p.height) &&
          this.adjustUvs(e, r, a, n);
      }),
      (e.prototype.adjustUvs = function (t, e, r, i) {
        for (
          var n = e.baseTexture,
            o = r + 2 * i,
            s = e.frame,
            a = s.width / n.width,
            h = s.height / n.height,
            u = s.x / s.width,
            l = s.y / s.height,
            c = Math.floor(t[r] + 1e-6),
            p = Math.floor(t[r + 1] + 1e-6),
            f = r + 2;
          f < o;
          f += 2
        )
          (c = Math.min(c, Math.floor(t[f] + 1e-6))),
            (p = Math.min(p, Math.floor(t[f + 1] + 1e-6)));
        (u -= c), (l -= p);
        for (var f = r; f < o; f += 2)
          (t[f] = (t[f] + u) * a), (t[f + 1] = (t[f + 1] + l) * h);
      }),
      (e.BATCHABLE_SIZE = 100),
      e
    );
  })(t_.BatchGeometry),
  eS = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (
        (e.width = 0),
        (e.alignment = 0.5),
        (e.native = !1),
        (e.cap = A.BUTT),
        (e.join = S.MITER),
        (e.miterLimit = 10),
        e
      );
    }
    return (
      es(e, t),
      (e.prototype.clone = function () {
        var t = new e();
        return (
          (t.color = this.color),
          (t.alpha = this.alpha),
          (t.texture = this.texture),
          (t.matrix = this.matrix),
          (t.visible = this.visible),
          (t.width = this.width),
          (t.alignment = this.alignment),
          (t.native = this.native),
          (t.cap = this.cap),
          (t.join = this.join),
          (t.miterLimit = this.miterLimit),
          t
        );
      }),
      (e.prototype.reset = function () {
        t.prototype.reset.call(this),
          (this.color = 0),
          (this.alignment = 0.5),
          (this.width = 0),
          (this.native = !1);
      }),
      e
    );
  })(en),
  eA = new Float32Array(3),
  eR = {},
  eO = (function (t) {
    function e(e) {
      void 0 === e && (e = null);
      var r = t.call(this) || this;
      return (
        (r.shader = null),
        (r.pluginName = 'batch'),
        (r.currentPath = null),
        (r.batches = []),
        (r.batchTint = -1),
        (r.batchDirty = -1),
        (r.vertexData = null),
        (r._fillStyle = new en()),
        (r._lineStyle = new eS()),
        (r._matrix = null),
        (r._holeMode = !1),
        (r.state = (0, t_.State).for2d()),
        (r._geometry = e || new eE()),
        r._geometry.refCount++,
        (r._transformID = -1),
        (r.tint = 16777215),
        (r.blendMode = ta.BLEND_MODES.NORMAL),
        r
      );
    }
    return (
      es(e, t),
      Object.defineProperty(e.prototype, 'geometry', {
        get: function () {
          return this._geometry;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.clone = function () {
        return this.finishPoly(), new e(this._geometry);
      }),
      Object.defineProperty(e.prototype, 'blendMode', {
        get: function () {
          return this.state.blendMode;
        },
        set: function (t) {
          this.state.blendMode = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'tint', {
        get: function () {
          return this._tint;
        },
        set: function (t) {
          this._tint = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'fill', {
        get: function () {
          return this._fillStyle;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'line', {
        get: function () {
          return this._lineStyle;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.lineStyle = function (t, e, r, i, n) {
        return (
          void 0 === t && (t = null),
          void 0 === e && (e = 0),
          void 0 === r && (r = 1),
          void 0 === i && (i = 0.5),
          void 0 === n && (n = !1),
          'number' == typeof t &&
            (t = { width: t, color: e, alpha: r, alignment: i, native: n }),
          this.lineTextureStyle(t)
        );
      }),
      (e.prototype.lineTextureStyle = function (t) {
        (t = Object.assign(
          {
            width: 0,
            texture: t_.Texture.WHITE,
            color: t && t.texture ? 16777215 : 0,
            alpha: 1,
            matrix: null,
            alignment: 0.5,
            native: !1,
            cap: A.BUTT,
            join: S.MITER,
            miterLimit: 10,
          },
          t
        )),
          this.currentPath && this.startPoly();
        var e = t.width > 0 && t.alpha > 0;
        return (
          e
            ? (t.matrix && ((t.matrix = t.matrix.clone()), t.matrix.invert()),
              Object.assign(this._lineStyle, { visible: e }, t))
            : this._lineStyle.reset(),
          this
        );
      }),
      (e.prototype.startPoly = function () {
        if (this.currentPath) {
          var t = this.currentPath.points,
            e = this.currentPath.points.length;
          e > 2 &&
            (this.drawShape(this.currentPath),
            (this.currentPath = new to.Polygon()),
            (this.currentPath.closeStroke = !1),
            this.currentPath.points.push(t[e - 2], t[e - 1]));
        } else
          (this.currentPath = new to.Polygon()),
            (this.currentPath.closeStroke = !1);
      }),
      (e.prototype.finishPoly = function () {
        this.currentPath &&
          (this.currentPath.points.length > 2
            ? (this.drawShape(this.currentPath), (this.currentPath = null))
            : (this.currentPath.points.length = 0));
      }),
      (e.prototype.moveTo = function (t, e) {
        return (
          this.startPoly(),
          (this.currentPath.points[0] = t),
          (this.currentPath.points[1] = e),
          this
        );
      }),
      (e.prototype.lineTo = function (t, e) {
        this.currentPath || this.moveTo(0, 0);
        var r = this.currentPath.points,
          i = r[r.length - 2],
          n = r[r.length - 1];
        return (i !== t || n !== e) && r.push(t, e), this;
      }),
      (e.prototype._initCurve = function (t, e) {
        void 0 === t && (t = 0),
          void 0 === e && (e = 0),
          this.currentPath
            ? 0 === this.currentPath.points.length &&
              (this.currentPath.points = [t, e])
            : this.moveTo(t, e);
      }),
      (e.prototype.quadraticCurveTo = function (t, e, r, i) {
        this._initCurve();
        var n = this.currentPath.points;
        return (
          0 === n.length && this.moveTo(0, 0), ey.curveTo(t, e, r, i, n), this
        );
      }),
      (e.prototype.bezierCurveTo = function (t, e, r, i, n, o) {
        return (
          this._initCurve(),
          e_.curveTo(t, e, r, i, n, o, this.currentPath.points),
          this
        );
      }),
      (e.prototype.arcTo = function (t, e, r, i, n) {
        this._initCurve(t, e);
        var o = this.currentPath.points,
          s = ed.curveTo(t, e, r, i, n, o);
        if (s) {
          var a = s.cx,
            h = s.cy,
            u = s.radius,
            l = s.startAngle,
            c = s.endAngle,
            p = s.anticlockwise;
          this.arc(a, h, u, l, c, p);
        }
        return this;
      }),
      (e.prototype.arc = function (t, e, r, i, n, o) {
        if (
          (void 0 === o && (o = !1),
          i === n ||
            (!o && n <= i ? (n += to.PI_2) : o && i <= n && (i += to.PI_2),
            0 == n - i))
        )
          return this;
        var s = t + Math.cos(i) * r,
          a = e + Math.sin(i) * r,
          h = this._geometry.closePointEps,
          u = this.currentPath ? this.currentPath.points : null;
        if (u) {
          var l = Math.abs(u[u.length - 2] - s),
            c = Math.abs(u[u.length - 1] - a);
          (l < h && c < h) || u.push(s, a);
        } else this.moveTo(s, a), (u = this.currentPath.points);
        return ed.arc(s, a, t, e, r, i, n, o, u), this;
      }),
      (e.prototype.beginFill = function (t, e) {
        return (
          void 0 === t && (t = 0),
          void 0 === e && (e = 1),
          this.beginTextureFill({
            texture: t_.Texture.WHITE,
            color: t,
            alpha: e,
          })
        );
      }),
      (e.prototype.beginTextureFill = function (t) {
        (t = Object.assign(
          {
            texture: t_.Texture.WHITE,
            color: 16777215,
            alpha: 1,
            matrix: null,
          },
          t
        )),
          this.currentPath && this.startPoly();
        var e = t.alpha > 0;
        return (
          e
            ? (t.matrix && ((t.matrix = t.matrix.clone()), t.matrix.invert()),
              Object.assign(this._fillStyle, { visible: e }, t))
            : this._fillStyle.reset(),
          this
        );
      }),
      (e.prototype.endFill = function () {
        return this.finishPoly(), this._fillStyle.reset(), this;
      }),
      (e.prototype.drawRect = function (t, e, r, i) {
        return this.drawShape(new to.Rectangle(t, e, r, i));
      }),
      (e.prototype.drawRoundedRect = function (t, e, r, i, n) {
        return this.drawShape(new to.RoundedRectangle(t, e, r, i, n));
      }),
      (e.prototype.drawCircle = function (t, e, r) {
        return this.drawShape(new to.Circle(t, e, r));
      }),
      (e.prototype.drawEllipse = function (t, e, r, i) {
        return this.drawShape(new to.Ellipse(t, e, r, i));
      }),
      (e.prototype.drawPolygon = function () {
        for (var t, e = arguments, r = [], i = 0; i < arguments.length; i++)
          r[i] = e[i];
        var n = !0,
          o = r[0];
        o.points
          ? ((n = o.closeStroke), (t = o.points))
          : (t = Array.isArray(r[0]) ? r[0] : r);
        var s = new to.Polygon(t);
        return (s.closeStroke = n), this.drawShape(s), this;
      }),
      (e.prototype.drawShape = function (t) {
        return (
          this._holeMode
            ? this._geometry.drawHole(t, this._matrix)
            : this._geometry.drawShape(
                t,
                this._fillStyle.clone(),
                this._lineStyle.clone(),
                this._matrix
              ),
          this
        );
      }),
      (e.prototype.clear = function () {
        return (
          this._geometry.clear(),
          this._lineStyle.reset(),
          this._fillStyle.reset(),
          this._boundsID++,
          (this._matrix = null),
          (this._holeMode = !1),
          (this.currentPath = null),
          this
        );
      }),
      (e.prototype.isFastRect = function () {
        var t = this._geometry.graphicsData;
        return (
          1 === t.length &&
          t[0].shape.type === to.SHAPES.RECT &&
          !t[0].matrix &&
          !t[0].holes.length &&
          !(t[0].lineStyle.visible && t[0].lineStyle.width)
        );
      }),
      (e.prototype._render = function (t) {
        this.finishPoly();
        var e = this._geometry;
        e.updateBatches(),
          e.batchable
            ? (this.batchDirty !== e.batchDirty && this._populateBatches(),
              this._renderBatched(t))
            : (t.batch.flush(), this._renderDirect(t));
      }),
      (e.prototype._populateBatches = function () {
        var t = this._geometry,
          e = this.blendMode,
          r = t.batches.length;
        (this.batchTint = -1),
          (this._transformID = -1),
          (this.batchDirty = t.batchDirty),
          (this.batches.length = r),
          (this.vertexData = new Float32Array(t.points));
        for (var i = 0; i < r; i++) {
          var n = t.batches[i],
            o = n.style.color,
            s = new Float32Array(
              this.vertexData.buffer,
              8 * n.attribStart,
              2 * n.attribSize
            ),
            a = new Float32Array(
              t.uvsFloat32.buffer,
              8 * n.attribStart,
              2 * n.attribSize
            ),
            h = {
              vertexData: s,
              blendMode: e,
              indices: new Uint16Array(
                t.indicesUint16.buffer,
                2 * n.start,
                n.size
              ),
              uvs: a,
              _batchRGB: (0, ti.hex2rgb)(o),
              _tintRGB: o,
              _texture: n.style.texture,
              alpha: n.style.alpha,
              worldAlpha: 1,
            };
          this.batches[i] = h;
        }
      }),
      (e.prototype._renderBatched = function (t) {
        if (this.batches.length) {
          t.batch.setObjectRenderer(t.plugins[this.pluginName]),
            this.calculateVertices(),
            this.calculateTints();
          for (var e = 0, r = this.batches.length; e < r; e++) {
            var i = this.batches[e];
            (i.worldAlpha = this.worldAlpha * i.alpha),
              t.plugins[this.pluginName].render(i);
          }
        }
      }),
      (e.prototype._renderDirect = function (t) {
        var e = this._resolveDirectShader(t),
          r = this._geometry,
          i = this.tint,
          n = this.worldAlpha,
          o = e.uniforms,
          s = r.drawCalls;
        (o.translationMatrix = this.transform.worldTransform),
          (o.tint[0] = (((i >> 16) & 255) / 255) * n),
          (o.tint[1] = (((i >> 8) & 255) / 255) * n),
          (o.tint[2] = ((255 & i) / 255) * n),
          (o.tint[3] = n),
          t.shader.bind(e),
          t.geometry.bind(r, e),
          t.state.set(this.state);
        for (var a = 0, h = s.length; a < h; a++)
          this._renderDrawCallDirect(t, r.drawCalls[a]);
      }),
      (e.prototype._renderDrawCallDirect = function (t, e) {
        for (
          var r = e.texArray,
            i = e.type,
            n = e.size,
            o = e.start,
            s = r.count,
            a = 0;
          a < s;
          a++
        )
          t.texture.bind(r.elements[a], a);
        t.geometry.draw(i, n, o);
      }),
      (e.prototype._resolveDirectShader = function (t) {
        var e = this.shader,
          r = this.pluginName;
        if (!e) {
          if (!eR[r]) {
            for (
              var i = t.plugins[r].MAX_TEXTURES, n = new Int32Array(i), o = 0;
              o < i;
              o++
            )
              n[o] = o;
            var s = {
                tint: new Float32Array([1, 1, 1, 1]),
                translationMatrix: new to.Matrix(),
                default: (0, t_.UniformGroup).from({ uSamplers: n }, !0),
              },
              a = t.plugins[r]._shader.program;
            eR[r] = new t_.Shader(a, s);
          }
          e = eR[r];
        }
        return e;
      }),
      (e.prototype._calculateBounds = function () {
        this.finishPoly();
        var t = this._geometry;
        if (t.graphicsData.length) {
          var e = t.bounds,
            r = e.minX,
            i = e.minY,
            n = e.maxX,
            o = e.maxY;
          this._bounds.addFrame(this.transform, r, i, n, o);
        }
      }),
      (e.prototype.containsPoint = function (t) {
        return (
          this.worldTransform.applyInverse(t, e._TEMP_POINT),
          this._geometry.containsPoint(e._TEMP_POINT)
        );
      }),
      (e.prototype.calculateTints = function () {
        if (this.batchTint !== this.tint) {
          this.batchTint = this.tint;
          for (
            var t = (0, ti.hex2rgb)(this.tint, eA), e = 0;
            e < this.batches.length;
            e++
          ) {
            var r = this.batches[e],
              i = r._batchRGB,
              n =
                ((t[0] * i[0] * 255) << 16) +
                ((t[1] * i[1] * 255) << 8) +
                (0 | (t[2] * i[2] * 255));
            r._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16);
          }
        }
      }),
      (e.prototype.calculateVertices = function () {
        var t = this.transform._worldID;
        if (this._transformID !== t) {
          this._transformID = t;
          for (
            var e = this.transform.worldTransform,
              r = e.a,
              i = e.b,
              n = e.c,
              o = e.d,
              s = e.tx,
              a = e.ty,
              h = this._geometry.points,
              u = this.vertexData,
              l = 0,
              c = 0;
            c < h.length;
            c += 2
          ) {
            var p = h[c],
              f = h[c + 1];
            (u[l++] = r * p + n * f + s), (u[l++] = o * f + i * p + a);
          }
        }
      }),
      (e.prototype.closePath = function () {
        var t = this.currentPath;
        return t && ((t.closeStroke = !0), this.finishPoly()), this;
      }),
      (e.prototype.setMatrix = function (t) {
        return (this._matrix = t), this;
      }),
      (e.prototype.beginHole = function () {
        return this.finishPoly(), (this._holeMode = !0), this;
      }),
      (e.prototype.endHole = function () {
        return this.finishPoly(), (this._holeMode = !1), this;
      }),
      (e.prototype.destroy = function (e) {
        this._geometry.refCount--,
          0 === this._geometry.refCount && this._geometry.dispose(),
          (this._matrix = null),
          (this.currentPath = null),
          this._lineStyle.destroy(),
          (this._lineStyle = null),
          this._fillStyle.destroy(),
          (this._fillStyle = null),
          (this._geometry = null),
          (this.shader = null),
          (this.vertexData = null),
          (this.batches.length = 0),
          (this.batches = null),
          t.prototype.destroy.call(this, e);
      }),
      (e.nextRoundedRectBehavior = !1),
      (e._TEMP_POINT = new to.Point()),
      e
    );
  })(td),
  tv = F('2JyLN'),
  ta = F('6n98C'),
  t_ = F('jH9fL'),
  to = F('960oV'),
  tn = F('8q0ed'),
  ti = F('e70pz'),
  eM = function (t, e) {
    return (eM =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  },
  eP = new to.Point(),
  eI = new Uint16Array([0, 1, 2, 0, 2, 3]),
  ew = (function (t) {
    function e(e) {
      var r = t.call(this) || this;
      return (
        (r._anchor = new to.ObservablePoint(
          r._onAnchorUpdate,
          r,
          e ? e.defaultAnchor.x : 0,
          e ? e.defaultAnchor.y : 0
        )),
        (r._texture = null),
        (r._width = 0),
        (r._height = 0),
        (r._tint = null),
        (r._tintRGB = null),
        (r.tint = 16777215),
        (r.blendMode = ta.BLEND_MODES.NORMAL),
        (r._cachedTint = 16777215),
        (r.uvs = null),
        (r.texture = e || t_.Texture.EMPTY),
        (r.vertexData = new Float32Array(8)),
        (r.vertexTrimmedData = null),
        (r._transformID = -1),
        (r._textureID = -1),
        (r._transformTrimmedID = -1),
        (r._textureTrimmedID = -1),
        (r.indices = eI),
        (r.pluginName = 'batch'),
        (r.isSprite = !0),
        (r._roundPixels = tn.settings.ROUND_PIXELS),
        r
      );
    }
    return (
      !(function (t, e) {
        function r() {
          this.constructor = t;
        }
        eM(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      })(e, t),
      (e.prototype._onTextureUpdate = function () {
        (this._textureID = -1),
          (this._textureTrimmedID = -1),
          (this._cachedTint = 16777215),
          this._width &&
            (this.scale.x =
              ((0, ti.sign)(this.scale.x) * this._width) /
              this._texture.orig.width),
          this._height &&
            (this.scale.y =
              ((0, ti.sign)(this.scale.y) * this._height) /
              this._texture.orig.height);
      }),
      (e.prototype._onAnchorUpdate = function () {
        (this._transformID = -1), (this._transformTrimmedID = -1);
      }),
      (e.prototype.calculateVertices = function () {
        var t = this._texture;
        if (
          this._transformID !== this.transform._worldID ||
          this._textureID !== t._updateID
        ) {
          this._textureID !== t._updateID &&
            (this.uvs = this._texture._uvs.uvsFloat32),
            (this._transformID = this.transform._worldID),
            (this._textureID = t._updateID);
          var e = this.transform.worldTransform,
            r = e.a,
            i = e.b,
            n = e.c,
            o = e.d,
            s = e.tx,
            a = e.ty,
            h = this.vertexData,
            u = t.trim,
            l = t.orig,
            c = this._anchor,
            p = 0,
            f = 0,
            d = 0,
            _ = 0;
          if (
            (u
              ? ((p = (f = u.x - c._x * l.width) + u.width),
                (d = (_ = u.y - c._y * l.height) + u.height))
              : ((p = (f = -c._x * l.width) + l.width),
                (d = (_ = -c._y * l.height) + l.height)),
            (h[0] = r * f + n * _ + s),
            (h[1] = o * _ + i * f + a),
            (h[2] = r * p + n * _ + s),
            (h[3] = o * _ + i * p + a),
            (h[4] = r * p + n * d + s),
            (h[5] = o * d + i * p + a),
            (h[6] = r * f + n * d + s),
            (h[7] = o * d + i * f + a),
            this._roundPixels)
          )
            for (var y = tn.settings.RESOLUTION, v = 0; v < h.length; ++v)
              h[v] = Math.round(((h[v] * y) | 0) / y);
        }
      }),
      (e.prototype.calculateTrimmedVertices = function () {
        if (this.vertexTrimmedData) {
          if (
            this._transformTrimmedID === this.transform._worldID &&
            this._textureTrimmedID === this._texture._updateID
          )
            return;
        } else this.vertexTrimmedData = new Float32Array(8);
        (this._transformTrimmedID = this.transform._worldID),
          (this._textureTrimmedID = this._texture._updateID);
        var t = this._texture,
          e = this.vertexTrimmedData,
          r = t.orig,
          i = this._anchor,
          n = this.transform.worldTransform,
          o = n.a,
          s = n.b,
          a = n.c,
          h = n.d,
          u = n.tx,
          l = n.ty,
          c = -i._x * r.width,
          p = c + r.width,
          f = -i._y * r.height,
          d = f + r.height;
        (e[0] = o * c + a * f + u),
          (e[1] = h * f + s * c + l),
          (e[2] = o * p + a * f + u),
          (e[3] = h * f + s * p + l),
          (e[4] = o * p + a * d + u),
          (e[5] = h * d + s * p + l),
          (e[6] = o * c + a * d + u),
          (e[7] = h * d + s * c + l);
      }),
      (e.prototype._render = function (t) {
        this.calculateVertices(),
          t.batch.setObjectRenderer(t.plugins[this.pluginName]),
          t.plugins[this.pluginName].render(this);
      }),
      (e.prototype._calculateBounds = function () {
        var t = this._texture.trim,
          e = this._texture.orig;
        t && (t.width !== e.width || t.height !== e.height)
          ? (this.calculateTrimmedVertices(),
            this._bounds.addQuad(this.vertexTrimmedData))
          : (this.calculateVertices(), this._bounds.addQuad(this.vertexData));
      }),
      (e.prototype.getLocalBounds = function (e) {
        return 0 === this.children.length
          ? (this._localBounds || (this._localBounds = new th()),
            (this._localBounds.minX = -(
              this._texture.orig.width * this._anchor._x
            )),
            (this._localBounds.minY = -(
              this._texture.orig.height * this._anchor._y
            )),
            (this._localBounds.maxX =
              this._texture.orig.width * (1 - this._anchor._x)),
            (this._localBounds.maxY =
              this._texture.orig.height * (1 - this._anchor._y)),
            e ||
              (this._localBoundsRect ||
                (this._localBoundsRect = new to.Rectangle()),
              (e = this._localBoundsRect)),
            this._localBounds.getRectangle(e))
          : t.prototype.getLocalBounds.call(this, e);
      }),
      (e.prototype.containsPoint = function (t) {
        this.worldTransform.applyInverse(t, eP);
        var e = this._texture.orig.width,
          r = this._texture.orig.height,
          i = -e * this.anchor.x,
          n = 0;
        return (
          eP.x >= i &&
          eP.x < i + e &&
          ((n = -r * this.anchor.y), eP.y >= n && eP.y < n + r)
        );
      }),
      (e.prototype.destroy = function (e) {
        if (
          (t.prototype.destroy.call(this, e),
          this._texture.off('update', this._onTextureUpdate, this),
          (this._anchor = null),
          'boolean' == typeof e ? e : e && e.texture)
        ) {
          var r = 'boolean' == typeof e ? e : e && e.baseTexture;
          this._texture.destroy(!!r);
        }
        this._texture = null;
      }),
      (e.from = function (t, r) {
        return new e(t instanceof t_.Texture ? t : (0, t_.Texture).from(t, r));
      }),
      Object.defineProperty(e.prototype, 'roundPixels', {
        get: function () {
          return this._roundPixels;
        },
        set: function (t) {
          this._roundPixels !== t && (this._transformID = -1),
            (this._roundPixels = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'width', {
        get: function () {
          return Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function (t) {
          var e = (0, ti.sign)(this.scale.x) || 1;
          (this.scale.x = (e * t) / this._texture.orig.width),
            (this._width = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'height', {
        get: function () {
          return Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function (t) {
          var e = (0, ti.sign)(this.scale.y) || 1;
          (this.scale.y = (e * t) / this._texture.orig.height),
            (this._height = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'anchor', {
        get: function () {
          return this._anchor;
        },
        set: function (t) {
          this._anchor.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'tint', {
        get: function () {
          return this._tint;
        },
        set: function (t) {
          (this._tint = t),
            (this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'texture', {
        get: function () {
          return this._texture;
        },
        set: function (t) {
          this._texture !== t &&
            (this._texture &&
              this._texture.off('update', this._onTextureUpdate, this),
            (this._texture = t || t_.Texture.EMPTY),
            (this._cachedTint = 16777215),
            (this._textureID = -1),
            (this._textureTrimmedID = -1),
            t &&
              (t.baseTexture.valid
                ? this._onTextureUpdate()
                : t.once('update', this._onTextureUpdate, this)));
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })(td),
  t_ = F('jH9fL'),
  tn = F('8q0ed'),
  to = F('960oV'),
  ti = F('e70pz'),
  eD = function (t, e) {
    return (eD =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
((l = O || (O = {}))[(l.LINEAR_VERTICAL = 0)] = 'LINEAR_VERTICAL'),
  (l[(l.LINEAR_HORIZONTAL = 1)] = 'LINEAR_HORIZONTAL');
var eC = {
    align: 'left',
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: 'black',
    dropShadowDistance: 5,
    fill: 'black',
    fillGradientType: O.LINEAR_VERTICAL,
    fillGradientStops: [],
    fontFamily: 'Arial',
    fontSize: 26,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    lineJoin: 'miter',
    miterLimit: 10,
    padding: 0,
    stroke: 'black',
    strokeThickness: 0,
    textBaseline: 'alphabetic',
    trim: !1,
    whiteSpace: 'pre',
    wordWrap: !1,
    wordWrapWidth: 100,
    leading: 0,
  },
  eF = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui'],
  eN = (function () {
    function t(t) {
      (this.styleID = 0), this.reset(), eG(this, t, t);
    }
    return (
      (t.prototype.clone = function () {
        var e = {};
        return eG(e, this, eC), new t(e);
      }),
      (t.prototype.reset = function () {
        eG(this, eC, eC);
      }),
      Object.defineProperty(t.prototype, 'align', {
        get: function () {
          return this._align;
        },
        set: function (t) {
          this._align !== t && ((this._align = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'breakWords', {
        get: function () {
          return this._breakWords;
        },
        set: function (t) {
          this._breakWords !== t && ((this._breakWords = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'dropShadow', {
        get: function () {
          return this._dropShadow;
        },
        set: function (t) {
          this._dropShadow !== t && ((this._dropShadow = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'dropShadowAlpha', {
        get: function () {
          return this._dropShadowAlpha;
        },
        set: function (t) {
          this._dropShadowAlpha !== t &&
            ((this._dropShadowAlpha = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'dropShadowAngle', {
        get: function () {
          return this._dropShadowAngle;
        },
        set: function (t) {
          this._dropShadowAngle !== t &&
            ((this._dropShadowAngle = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'dropShadowBlur', {
        get: function () {
          return this._dropShadowBlur;
        },
        set: function (t) {
          this._dropShadowBlur !== t &&
            ((this._dropShadowBlur = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'dropShadowColor', {
        get: function () {
          return this._dropShadowColor;
        },
        set: function (t) {
          var e = eB(t);
          this._dropShadowColor !== e &&
            ((this._dropShadowColor = e), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'dropShadowDistance', {
        get: function () {
          return this._dropShadowDistance;
        },
        set: function (t) {
          this._dropShadowDistance !== t &&
            ((this._dropShadowDistance = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'fill', {
        get: function () {
          return this._fill;
        },
        set: function (t) {
          var e = eB(t);
          this._fill !== e && ((this._fill = e), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'fillGradientType', {
        get: function () {
          return this._fillGradientType;
        },
        set: function (t) {
          this._fillGradientType !== t &&
            ((this._fillGradientType = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'fillGradientStops', {
        get: function () {
          return this._fillGradientStops;
        },
        set: function (t) {
          !(function (t, e) {
            if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length)
              return !1;
            for (var r = 0; r < t.length; ++r) if (t[r] !== e[r]) return !1;
            return !0;
          })(this._fillGradientStops, t) &&
            ((this._fillGradientStops = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'fontFamily', {
        get: function () {
          return this._fontFamily;
        },
        set: function (t) {
          this.fontFamily !== t && ((this._fontFamily = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'fontSize', {
        get: function () {
          return this._fontSize;
        },
        set: function (t) {
          this._fontSize !== t && ((this._fontSize = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'fontStyle', {
        get: function () {
          return this._fontStyle;
        },
        set: function (t) {
          this._fontStyle !== t && ((this._fontStyle = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'fontVariant', {
        get: function () {
          return this._fontVariant;
        },
        set: function (t) {
          this._fontVariant !== t && ((this._fontVariant = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'fontWeight', {
        get: function () {
          return this._fontWeight;
        },
        set: function (t) {
          this._fontWeight !== t && ((this._fontWeight = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'letterSpacing', {
        get: function () {
          return this._letterSpacing;
        },
        set: function (t) {
          this._letterSpacing !== t &&
            ((this._letterSpacing = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'lineHeight', {
        get: function () {
          return this._lineHeight;
        },
        set: function (t) {
          this._lineHeight !== t && ((this._lineHeight = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'leading', {
        get: function () {
          return this._leading;
        },
        set: function (t) {
          this._leading !== t && ((this._leading = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'lineJoin', {
        get: function () {
          return this._lineJoin;
        },
        set: function (t) {
          this._lineJoin !== t && ((this._lineJoin = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'miterLimit', {
        get: function () {
          return this._miterLimit;
        },
        set: function (t) {
          this._miterLimit !== t && ((this._miterLimit = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'padding', {
        get: function () {
          return this._padding;
        },
        set: function (t) {
          this._padding !== t && ((this._padding = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'stroke', {
        get: function () {
          return this._stroke;
        },
        set: function (t) {
          var e = eB(t);
          this._stroke !== e && ((this._stroke = e), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'strokeThickness', {
        get: function () {
          return this._strokeThickness;
        },
        set: function (t) {
          this._strokeThickness !== t &&
            ((this._strokeThickness = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'textBaseline', {
        get: function () {
          return this._textBaseline;
        },
        set: function (t) {
          this._textBaseline !== t &&
            ((this._textBaseline = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'trim', {
        get: function () {
          return this._trim;
        },
        set: function (t) {
          this._trim !== t && ((this._trim = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'whiteSpace', {
        get: function () {
          return this._whiteSpace;
        },
        set: function (t) {
          this._whiteSpace !== t && ((this._whiteSpace = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'wordWrap', {
        get: function () {
          return this._wordWrap;
        },
        set: function (t) {
          this._wordWrap !== t && ((this._wordWrap = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'wordWrapWidth', {
        get: function () {
          return this._wordWrapWidth;
        },
        set: function (t) {
          this._wordWrapWidth !== t &&
            ((this._wordWrapWidth = t), this.styleID++);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.toFontString = function () {
        var t =
            'number' == typeof this.fontSize
              ? this.fontSize + 'px'
              : this.fontSize,
          e = this.fontFamily;
        Array.isArray(this.fontFamily) || (e = this.fontFamily.split(','));
        for (var r = e.length - 1; r >= 0; r--) {
          var i = e[r].trim();
          !/([\"\'])[^\'\"]+\1/.test(i) &&
            0 > eF.indexOf(i) &&
            (i = '"' + i + '"'),
            (e[r] = i);
        }
        return (
          this.fontStyle +
          ' ' +
          this.fontVariant +
          ' ' +
          this.fontWeight +
          ' ' +
          t +
          ' ' +
          e.join(',')
        );
      }),
      t
    );
  })();
function eL(t) {
  return 'number' == typeof t
    ? (0, ti.hex2string)(t)
    : ('string' == typeof t &&
        0 === t.indexOf('0x') &&
        (t = t.replace('0x', '#')),
      t);
}
function eB(t) {
  if (!Array.isArray(t)) return eL(t);
  for (var e = 0; e < t.length; ++e) t[e] = eL(t[e]);
  return t;
}
function eG(t, e, r) {
  for (var i in r) Array.isArray(e[i]) ? (t[i] = e[i].slice()) : (t[i] = e[i]);
}
var eU = { willReadFrequently: !0 },
  ek = (function () {
    function t(t, e, r, i, n, o, s, a, h) {
      (this.text = t),
        (this.style = e),
        (this.width = r),
        (this.height = i),
        (this.lines = n),
        (this.lineWidths = o),
        (this.lineHeight = s),
        (this.maxLineWidth = a),
        (this.fontProperties = h);
    }
    return (
      (t.measureText = function (e, r, i, n) {
        void 0 === n && (n = t._canvas), (i = null == i ? r.wordWrap : i);
        var o = r.toFontString(),
          s = t.measureFont(o);
        0 === s.fontSize &&
          ((s.fontSize = r.fontSize), (s.ascent = r.fontSize));
        var a = n.getContext('2d', eU);
        a.font = o;
        for (
          var h = (i ? t.wordWrap(e, r, n) : e).split(/(?:\r\n|\r|\n)/),
            u = Array(h.length),
            l = 0,
            c = 0;
          c < h.length;
          c++
        ) {
          var p =
            a.measureText(h[c]).width + (h[c].length - 1) * r.letterSpacing;
          (u[c] = p), (l = Math.max(l, p));
        }
        var f = l + r.strokeThickness;
        r.dropShadow && (f += r.dropShadowDistance);
        var d = r.lineHeight || s.fontSize + r.strokeThickness,
          _ =
            Math.max(d, s.fontSize + r.strokeThickness) +
            (h.length - 1) * (d + r.leading);
        return (
          r.dropShadow && (_ += r.dropShadowDistance),
          new t(e, r, f, _, h, u, d + r.leading, l, s)
        );
      }),
      (t.wordWrap = function (e, r, i) {
        void 0 === i && (i = t._canvas);
        for (
          var n = i.getContext('2d', eU),
            o = 0,
            s = '',
            a = '',
            h = Object.create(null),
            u = r.letterSpacing,
            l = r.whiteSpace,
            c = t.collapseSpaces(l),
            p = t.collapseNewlines(l),
            f = !c,
            d = r.wordWrapWidth + u,
            _ = t.tokenize(e),
            y = 0;
          y < _.length;
          y++
        ) {
          var v = _[y];
          if (t.isNewline(v)) {
            if (!p) {
              (a += t.addLine(s)), (f = !c), (s = ''), (o = 0);
              continue;
            }
            v = ' ';
          }
          if (c) {
            var m = t.isBreakingSpace(v),
              g = t.isBreakingSpace(s[s.length - 1]);
            if (m && g) continue;
          }
          var b = t.getFromCache(v, u, h, n);
          if (b > d) {
            if (
              ('' !== s && ((a += t.addLine(s)), (s = ''), (o = 0)),
              t.canBreakWords(v, r.breakWords))
            )
              for (var x = t.wordWrapSplit(v), T = 0; T < x.length; T++) {
                for (var E = x[T], S = 1; x[T + S]; ) {
                  var A = x[T + S],
                    R = E[E.length - 1];
                  if (t.canBreakChars(R, A, v, T, r.breakWords)) break;
                  (E += A), S++;
                }
                T += E.length - 1;
                var O = t.getFromCache(E, u, h, n);
                O + o > d && ((a += t.addLine(s)), (f = !1), (s = ''), (o = 0)),
                  (s += E),
                  (o += O);
              }
            else {
              s.length > 0 && ((a += t.addLine(s)), (s = ''), (o = 0));
              var M = y === _.length - 1;
              (a += t.addLine(v, !M)), (f = !1), (s = ''), (o = 0);
            }
          } else
            b + o > d && ((f = !1), (a += t.addLine(s)), (s = ''), (o = 0)),
              (s.length > 0 || !t.isBreakingSpace(v) || f) &&
                ((s += v), (o += b));
        }
        return a + t.addLine(s, !1);
      }),
      (t.addLine = function (e, r) {
        return (
          void 0 === r && (r = !0), (e = t.trimRight(e)), (e = r ? e + '\n' : e)
        );
      }),
      (t.getFromCache = function (t, e, r, i) {
        var n = r[t];
        if ('number' != typeof n) {
          var o = t.length * e;
          (n = i.measureText(t).width + o), (r[t] = n);
        }
        return n;
      }),
      (t.collapseSpaces = function (t) {
        return 'normal' === t || 'pre-line' === t;
      }),
      (t.collapseNewlines = function (t) {
        return 'normal' === t;
      }),
      (t.trimRight = function (e) {
        if ('string' != typeof e) return '';
        for (var r = e.length - 1; r >= 0; r--) {
          var i = e[r];
          if (!t.isBreakingSpace(i)) break;
          e = e.slice(0, -1);
        }
        return e;
      }),
      (t.isNewline = function (e) {
        return (
          'string' == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0
        );
      }),
      (t.isBreakingSpace = function (e, r) {
        return (
          'string' == typeof e &&
          t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
        );
      }),
      (t.tokenize = function (e) {
        var r = [],
          i = '';
        if ('string' != typeof e) return r;
        for (var n = 0; n < e.length; n++) {
          var o = e[n],
            s = e[n + 1];
          if (t.isBreakingSpace(o, s) || t.isNewline(o)) {
            '' !== i && (r.push(i), (i = '')), r.push(o);
            continue;
          }
          i += o;
        }
        return '' !== i && r.push(i), r;
      }),
      (t.canBreakWords = function (t, e) {
        return e;
      }),
      (t.canBreakChars = function (t, e, r, i, n) {
        return !0;
      }),
      (t.wordWrapSplit = function (t) {
        return t.split('');
      }),
      (t.measureFont = function (e) {
        if (t._fonts[e]) return t._fonts[e];
        var r = { ascent: 0, descent: 0, fontSize: 0 },
          i = t._canvas,
          n = t._context;
        n.font = e;
        var o = t.METRICS_STRING + t.BASELINE_SYMBOL,
          s = Math.ceil(n.measureText(o).width),
          a = Math.ceil(n.measureText(t.BASELINE_SYMBOL).width),
          h = Math.ceil(t.HEIGHT_MULTIPLIER * a);
        (a = (a * t.BASELINE_MULTIPLIER) | 0),
          (i.width = s),
          (i.height = h),
          (n.fillStyle = '#f00'),
          n.fillRect(0, 0, s, h),
          (n.font = e),
          (n.textBaseline = 'alphabetic'),
          (n.fillStyle = '#000'),
          n.fillText(o, 0, a);
        var u = n.getImageData(0, 0, s, h).data,
          l = u.length,
          c = 4 * s,
          p = 0,
          f = 0,
          d = !1;
        for (p = 0; p < a; ++p) {
          for (var _ = 0; _ < c; _ += 4)
            if (255 !== u[f + _]) {
              d = !0;
              break;
            }
          if (d) break;
          f += c;
        }
        for (r.ascent = a - p, f = l - c, d = !1, p = h; p > a; --p) {
          for (var _ = 0; _ < c; _ += 4)
            if (255 !== u[f + _]) {
              d = !0;
              break;
            }
          if (d) break;
          f -= c;
        }
        return (
          (r.descent = p - a),
          (r.fontSize = r.ascent + r.descent),
          (t._fonts[e] = r),
          r
        );
      }),
      (t.clearMetrics = function (e) {
        void 0 === e && (e = ''), e ? delete t._fonts[e] : (t._fonts = {});
      }),
      Object.defineProperty(t, '_canvas', {
        get: function () {
          if (!t.__canvas) {
            var e = void 0;
            try {
              var r = new OffscreenCanvas(0, 0),
                i = r.getContext('2d', eU);
              if (i && i.measureText) return (t.__canvas = r), r;
              e = (0, tn.settings).ADAPTER.createCanvas();
            } catch (t) {
              e = (0, tn.settings).ADAPTER.createCanvas();
            }
            (e.width = e.height = 10), (t.__canvas = e);
          }
          return t.__canvas;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, '_context', {
        get: function () {
          return (
            t.__context || (t.__context = t._canvas.getContext('2d', eU)),
            t.__context
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      t
    );
  })();
(ek._fonts = {}),
  (ek.METRICS_STRING = '|ÉqÅ'),
  (ek.BASELINE_SYMBOL = 'M'),
  (ek.BASELINE_MULTIPLIER = 1.4),
  (ek.HEIGHT_MULTIPLIER = 2),
  (ek._newlines = [10, 13]),
  (ek._breakingSpaces = [
    9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
    12288,
  ]);
var eX = { texture: !0, children: !1, baseTexture: !0 },
  ej = (function (t) {
    function e(e, r, i) {
      var n = this,
        o = !1;
      i || ((i = (0, tn.settings).ADAPTER.createCanvas()), (o = !0)),
        (i.width = 3),
        (i.height = 3);
      var s = (0, t_.Texture).from(i);
      return (
        (s.orig = new to.Rectangle()),
        (s.trim = new to.Rectangle()),
        ((n = t.call(this, s) || this)._ownCanvas = o),
        (n.canvas = i),
        (n.context = i.getContext('2d', { willReadFrequently: !0 })),
        (n._resolution = tn.settings.RESOLUTION),
        (n._autoResolution = !0),
        (n._text = null),
        (n._style = null),
        (n._styleListener = null),
        (n._font = ''),
        (n.text = e),
        (n.style = r),
        (n.localStyleID = -1),
        n
      );
    }
    return (
      !(function (t, e) {
        function r() {
          this.constructor = t;
        }
        eD(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      })(e, t),
      (e.prototype.updateText = function (t) {
        var r,
          i,
          n = this._style;
        if (
          (this.localStyleID !== n.styleID &&
            ((this.dirty = !0), (this.localStyleID = n.styleID)),
          this.dirty || !t)
        ) {
          this._font = this._style.toFontString();
          var o = this.context,
            s = ek.measureText(
              this._text || ' ',
              this._style,
              this._style.wordWrap,
              this.canvas
            ),
            a = s.width,
            h = s.height,
            u = s.lines,
            l = s.lineHeight,
            c = s.lineWidths,
            p = s.maxLineWidth,
            f = s.fontProperties;
          (this.canvas.width = Math.ceil(
            Math.ceil(Math.max(1, a) + 2 * n.padding) * this._resolution
          )),
            (this.canvas.height = Math.ceil(
              Math.ceil(Math.max(1, h) + 2 * n.padding) * this._resolution
            )),
            o.scale(this._resolution, this._resolution),
            o.clearRect(0, 0, this.canvas.width, this.canvas.height),
            (o.font = this._font),
            (o.lineWidth = n.strokeThickness),
            (o.textBaseline = n.textBaseline),
            (o.lineJoin = n.lineJoin),
            (o.miterLimit = n.miterLimit);
          for (var d = n.dropShadow ? 2 : 1, _ = 0; _ < d; ++_) {
            var y = n.dropShadow && 0 === _,
              v = y ? Math.ceil(Math.max(1, h) + 2 * n.padding) : 0,
              m = v * this._resolution;
            if (y) {
              (o.fillStyle = 'black'), (o.strokeStyle = 'black');
              var g = n.dropShadowColor,
                b = (0, ti.hex2rgb)(
                  'number' == typeof g ? g : (0, ti.string2hex)(g)
                ),
                x = n.dropShadowBlur * this._resolution,
                T = n.dropShadowDistance * this._resolution;
              (o.shadowColor =
                'rgba(' +
                255 * b[0] +
                ',' +
                255 * b[1] +
                ',' +
                255 * b[2] +
                ',' +
                n.dropShadowAlpha +
                ')'),
                (o.shadowBlur = x),
                (o.shadowOffsetX = Math.cos(n.dropShadowAngle) * T),
                (o.shadowOffsetY = Math.sin(n.dropShadowAngle) * T + m);
            } else
              (o.fillStyle = this._generateFillStyle(n, u, s)),
                (o.strokeStyle = n.stroke),
                (o.shadowColor = 'black'),
                (o.shadowBlur = 0),
                (o.shadowOffsetX = 0),
                (o.shadowOffsetY = 0);
            var E = (l - f.fontSize) / 2;
            (!e.nextLineHeightBehavior || l - f.fontSize < 0) && (E = 0);
            for (var S = 0; S < u.length; S++)
              (r = n.strokeThickness / 2),
                (i = n.strokeThickness / 2 + S * l + f.ascent + E),
                'right' === n.align
                  ? (r += p - c[S])
                  : 'center' === n.align && (r += (p - c[S]) / 2),
                n.stroke &&
                  n.strokeThickness &&
                  this.drawLetterSpacing(
                    u[S],
                    r + n.padding,
                    i + n.padding - v,
                    !0
                  ),
                n.fill &&
                  this.drawLetterSpacing(
                    u[S],
                    r + n.padding,
                    i + n.padding - v
                  );
          }
          this.updateTexture();
        }
      }),
      (e.prototype.drawLetterSpacing = function (t, r, i, n) {
        void 0 === n && (n = !1);
        var o = this._style.letterSpacing,
          s =
            e.experimentalLetterSpacing &&
            ('letterSpacing' in CanvasRenderingContext2D.prototype ||
              'textLetterSpacing' in CanvasRenderingContext2D.prototype);
        if (0 === o || s) {
          s &&
            ((this.context.letterSpacing = o),
            (this.context.textLetterSpacing = o)),
            n
              ? this.context.strokeText(t, r, i)
              : this.context.fillText(t, r, i);
          return;
        }
        for (
          var a = r,
            h = Array.from ? Array.from(t) : t.split(''),
            u = this.context.measureText(t).width,
            l = 0,
            c = 0;
          c < h.length;
          ++c
        ) {
          var p = h[c];
          n ? this.context.strokeText(p, a, i) : this.context.fillText(p, a, i);
          for (var f = '', d = c + 1; d < h.length; ++d) f += h[d];
          (a += u - (l = this.context.measureText(f).width) + o), (u = l);
        }
      }),
      (e.prototype.updateTexture = function () {
        var t = this.canvas;
        if (this._style.trim) {
          var e = (0, ti.trimCanvas)(t);
          e.data &&
            ((t.width = e.width),
            (t.height = e.height),
            this.context.putImageData(e.data, 0, 0));
        }
        var r = this._texture,
          i = this._style,
          n = i.trim ? 0 : i.padding,
          o = r.baseTexture;
        (r.trim.width = r._frame.width = t.width / this._resolution),
          (r.trim.height = r._frame.height = t.height / this._resolution),
          (r.trim.x = -n),
          (r.trim.y = -n),
          (r.orig.width = r._frame.width - 2 * n),
          (r.orig.height = r._frame.height - 2 * n),
          this._onTextureUpdate(),
          o.setRealSize(t.width, t.height, this._resolution),
          r.updateUvs(),
          (this.dirty = !1);
      }),
      (e.prototype._render = function (e) {
        this._autoResolution &&
          this._resolution !== e.resolution &&
          ((this._resolution = e.resolution), (this.dirty = !0)),
          this.updateText(!0),
          t.prototype._render.call(this, e);
      }),
      (e.prototype.updateTransform = function () {
        this.updateText(!0), t.prototype.updateTransform.call(this);
      }),
      (e.prototype.getBounds = function (e, r) {
        return (
          this.updateText(!0),
          -1 === this._textureID && (e = !1),
          t.prototype.getBounds.call(this, e, r)
        );
      }),
      (e.prototype.getLocalBounds = function (e) {
        return this.updateText(!0), t.prototype.getLocalBounds.call(this, e);
      }),
      (e.prototype._calculateBounds = function () {
        this.calculateVertices(), this._bounds.addQuad(this.vertexData);
      }),
      (e.prototype._generateFillStyle = function (t, e, r) {
        var i,
          n = t.fill;
        if (!Array.isArray(n)) return n;
        if (1 === n.length) return n[0];
        var o = t.dropShadow ? t.dropShadowDistance : 0,
          s = t.padding || 0,
          a = this.canvas.width / this._resolution - o - 2 * s,
          h = this.canvas.height / this._resolution - o - 2 * s,
          u = n.slice(),
          l = t.fillGradientStops.slice();
        if (!l.length)
          for (var c = u.length + 1, p = 1; p < c; ++p) l.push(p / c);
        if (
          (u.unshift(n[0]),
          l.unshift(0),
          u.push(n[n.length - 1]),
          l.push(1),
          t.fillGradientType === O.LINEAR_VERTICAL)
        ) {
          i = this.context.createLinearGradient(a / 2, s, a / 2, h + s);
          for (
            var f = r.fontProperties.fontSize + t.strokeThickness, p = 0;
            p < e.length;
            p++
          ) {
            var d = r.lineHeight * (p - 1) + f,
              _ = r.lineHeight * p,
              y = _;
            p > 0 && d > _ && (y = (_ + d) / 2);
            var v = _ + f,
              m = r.lineHeight * (p + 1),
              g = v;
            p + 1 < e.length && m < v && (g = (v + m) / 2);
            for (var b = (g - y) / h, x = 0; x < u.length; x++) {
              var T = Math.min(
                1,
                Math.max(
                  0,
                  y / h + ('number' == typeof l[x] ? l[x] : x / u.length) * b
                )
              );
              (T = Number(T.toFixed(5))), i.addColorStop(T, u[x]);
            }
          }
        } else {
          i = this.context.createLinearGradient(s, h / 2, a + s, h / 2);
          for (var E = u.length + 1, S = 1, p = 0; p < u.length; p++) {
            var A = void 0;
            (A = 'number' == typeof l[p] ? l[p] : S / E),
              i.addColorStop(A, u[p]),
              S++;
          }
        }
        return i;
      }),
      (e.prototype.destroy = function (e) {
        'boolean' == typeof e && (e = { children: e }),
          (e = Object.assign({}, eX, e)),
          t.prototype.destroy.call(this, e),
          this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
          (this.context = null),
          (this.canvas = null),
          (this._style = null);
      }),
      Object.defineProperty(e.prototype, 'width', {
        get: function () {
          return (
            this.updateText(!0),
            Math.abs(this.scale.x) * this._texture.orig.width
          );
        },
        set: function (t) {
          this.updateText(!0);
          var e = (0, ti.sign)(this.scale.x) || 1;
          (this.scale.x = (e * t) / this._texture.orig.width),
            (this._width = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'height', {
        get: function () {
          return (
            this.updateText(!0),
            Math.abs(this.scale.y) * this._texture.orig.height
          );
        },
        set: function (t) {
          this.updateText(!0);
          var e = (0, ti.sign)(this.scale.y) || 1;
          (this.scale.y = (e * t) / this._texture.orig.height),
            (this._height = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'style', {
        get: function () {
          return this._style;
        },
        set: function (t) {
          (t = t || {}) instanceof eN
            ? (this._style = t)
            : (this._style = new eN(t)),
            (this.localStyleID = -1),
            (this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'text', {
        get: function () {
          return this._text;
        },
        set: function (t) {
          (t = String(null == t ? '' : t)),
            this._text !== t && ((this._text = t), (this.dirty = !0));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'resolution', {
        get: function () {
          return this._resolution;
        },
        set: function (t) {
          (this._autoResolution = !1),
            this._resolution !== t &&
              ((this._resolution = t), (this.dirty = !0));
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.nextLineHeightBehavior = !1),
      (e.experimentalLetterSpacing = !1),
      e
    );
  })(ew),
  ti = F('e70pz');
tn.settings.UPLOADS_PER_FRAME = 4;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var eH =
    function (t, e) {
      return (eH =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        })(t, e);
    },
  eY = (function () {
    function t(t) {
      (this.maxItemsPerFrame = t), (this.itemsLeft = 0);
    }
    return (
      (t.prototype.beginFrame = function () {
        this.itemsLeft = this.maxItemsPerFrame;
      }),
      (t.prototype.allowedToUpload = function () {
        return this.itemsLeft-- > 0;
      }),
      t
    );
  })();
function eV(t, e) {
  var r = !1;
  if (t && t._textures && t._textures.length) {
    for (var i = 0; i < t._textures.length; i++)
      if (t._textures[i] instanceof t_.Texture) {
        var n = t._textures[i].baseTexture;
        -1 === e.indexOf(n) && (e.push(n), (r = !0));
      }
  }
  return r;
}
function ez(t, e) {
  if (t.baseTexture instanceof t_.BaseTexture) {
    var r = t.baseTexture;
    return -1 === e.indexOf(r) && e.push(r), !0;
  }
  return !1;
}
function eW(t, e) {
  if (t._texture && t._texture instanceof t_.Texture) {
    var r = t._texture.baseTexture;
    return -1 === e.indexOf(r) && e.push(r), !0;
  }
  return !1;
}
function eq(t, e) {
  return e instanceof ej && (e.updateText(!0), !0);
}
function eK(t, e) {
  if (e instanceof eN) {
    var r = e.toFontString();
    return ek.measureFont(r), !0;
  }
  return !1;
}
function eZ(t, e) {
  if (t instanceof ej) {
    -1 === e.indexOf(t.style) && e.push(t.style),
      -1 === e.indexOf(t) && e.push(t);
    var r = t._texture.baseTexture;
    return -1 === e.indexOf(r) && e.push(r), !0;
  }
  return !1;
}
function eQ(t, e) {
  return t instanceof eN && (-1 === e.indexOf(t) && e.push(t), !0);
}
function eJ(t, e) {
  return (
    e instanceof t_.BaseTexture &&
    (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0)
  );
}
function e$(t, e) {
  if (!(e instanceof eO)) return !1;
  var r = e.geometry;
  e.finishPoly(), r.updateBatches();
  for (var i = r.batches, n = 0; n < i.length; n++) {
    var o = i[n].style.texture;
    o && eJ(t, o.baseTexture);
  }
  return r.batchable || t.geometry.bind(r, e._resolveDirectShader(t)), !0;
}
function e0(t, e) {
  return t instanceof eO && (e.push(t), !0);
}
var e1 = (function (t) {
  function e(e) {
    var r = t.call(this, e) || this;
    return (
      (r.uploadHookHelper = r.renderer),
      r.registerFindHook(e0),
      r.registerUploadHook(eJ),
      r.registerUploadHook(e$),
      r
    );
  }
  return (
    !(function (t, e) {
      function r() {
        this.constructor = t;
      }
      eH(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    })(e, t),
    (e.extension = { name: 'prepare', type: t_.ExtensionType.RendererPlugin }),
    e
  );
})(
  (function () {
    function t(t) {
      var e = this;
      (this.limiter = new eY(tn.settings.UPLOADS_PER_FRAME)),
        (this.renderer = t),
        (this.uploadHookHelper = null),
        (this.queue = []),
        (this.addHooks = []),
        (this.uploadHooks = []),
        (this.completes = []),
        (this.ticking = !1),
        (this.delayedTick = function () {
          e.queue && e.prepareItems();
        }),
        this.registerFindHook(eZ),
        this.registerFindHook(eQ),
        this.registerFindHook(eV),
        this.registerFindHook(ez),
        this.registerFindHook(eW),
        this.registerUploadHook(eq),
        this.registerUploadHook(eK);
    }
    return (
      (t.prototype.upload = function (t, e) {
        var r = this;
        return (
          'function' == typeof t && ((e = t), (t = null)),
          e &&
            (0, ti.deprecation)(
              '6.5.0',
              'BasePrepare.upload callback is deprecated, use the return Promise instead.'
            ),
          new Promise(function (i) {
            t && r.add(t);
            var n = function () {
              null == e || e(), i();
            };
            r.queue.length
              ? (r.completes.push(n),
                r.ticking ||
                  ((r.ticking = !0),
                  (0, tv.Ticker).system.addOnce(
                    r.tick,
                    r,
                    tv.UPDATE_PRIORITY.UTILITY
                  )))
              : n();
          })
        );
      }),
      (t.prototype.tick = function () {
        setTimeout(this.delayedTick, 0);
      }),
      (t.prototype.prepareItems = function () {
        for (
          this.limiter.beginFrame();
          this.queue.length && this.limiter.allowedToUpload();

        ) {
          var t = this.queue[0],
            e = !1;
          if (t && !t._destroyed) {
            for (var r = 0, i = this.uploadHooks.length; r < i; r++)
              if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                this.queue.shift(), (e = !0);
                break;
              }
          }
          e || this.queue.shift();
        }
        if (this.queue.length)
          (0, tv.Ticker).system.addOnce(
            this.tick,
            this,
            tv.UPDATE_PRIORITY.UTILITY
          );
        else {
          this.ticking = !1;
          var n = this.completes.slice(0);
          this.completes.length = 0;
          for (var r = 0, i = n.length; r < i; r++) n[r]();
        }
      }),
      (t.prototype.registerFindHook = function (t) {
        return t && this.addHooks.push(t), this;
      }),
      (t.prototype.registerUploadHook = function (t) {
        return t && this.uploadHooks.push(t), this;
      }),
      (t.prototype.add = function (t) {
        for (
          var e = 0, r = this.addHooks.length;
          e < r && !this.addHooks[e](t, this.queue);
          e++
        );
        if (t instanceof td)
          for (var e = t.children.length - 1; e >= 0; e--)
            this.add(t.children[e]);
        return this;
      }),
      (t.prototype.destroy = function () {
        this.ticking && (0, tv.Ticker).system.remove(this.tick, this),
          (this.ticking = !1),
          (this.addHooks = null),
          (this.uploadHooks = null),
          (this.renderer = null),
          (this.completes = null),
          (this.queue = null),
          (this.limiter = null),
          (this.uploadHookHelper = null);
      }),
      t
    );
  })()
);
!(function () {
  function t(t) {
    (this.maxMilliseconds = t), (this.frameStart = 0);
  }
  (t.prototype.beginFrame = function () {
    this.frameStart = Date.now();
  }),
    (t.prototype.allowedToUpload = function () {
      return Date.now() - this.frameStart < this.maxMilliseconds;
    });
})();
/*!
 * @pixi/spritesheet - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var to = F('960oV'),
  t_ = F('jH9fL'),
  ti = F('e70pz'),
  e2 = (function () {
    function t(t, e, r) {
      void 0 === r && (r = null),
        (this.linkedSheets = []),
        (this._texture = t instanceof t_.Texture ? t : null),
        (this.baseTexture =
          t instanceof t_.BaseTexture ? t : this._texture.baseTexture),
        (this.textures = {}),
        (this.animations = {}),
        (this.data = e);
      var i = this.baseTexture.resource;
      (this.resolution = this._updateResolution(r || (i ? i.url : null))),
        (this._frames = this.data.frames),
        (this._frameKeys = Object.keys(this._frames)),
        (this._batchIndex = 0),
        (this._callback = null);
    }
    return (
      (t.prototype._updateResolution = function (t) {
        void 0 === t && (t = null);
        var e = this.data.meta.scale,
          r = (0, ti.getResolutionOfUrl)(t, null);
        return (
          null === r && (r = void 0 !== e ? parseFloat(e) : 1),
          1 !== r && this.baseTexture.setResolution(r),
          r
        );
      }),
      (t.prototype.parse = function (e) {
        var r = this;
        return (
          e &&
            (0, ti.deprecation)(
              '6.5.0',
              'Spritesheet.parse callback is deprecated, use the return Promise instead.'
            ),
          new Promise(function (i) {
            (r._callback = function (t) {
              null == e || e(t), i(t);
            }),
              (r._batchIndex = 0),
              r._frameKeys.length <= t.BATCH_SIZE
                ? (r._processFrames(0),
                  r._processAnimations(),
                  r._parseComplete())
                : r._nextBatch();
          })
        );
      }),
      (t.prototype._processFrames = function (e) {
        for (
          var r = e, i = t.BATCH_SIZE;
          r - e < i && r < this._frameKeys.length;

        ) {
          var n = this._frameKeys[r],
            o = this._frames[n],
            s = o.frame;
          if (s) {
            var a = null,
              h = null,
              u = !1 !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame,
              l = new to.Rectangle(
                0,
                0,
                Math.floor(u.w) / this.resolution,
                Math.floor(u.h) / this.resolution
              );
            (a = o.rotated
              ? new to.Rectangle(
                  Math.floor(s.x) / this.resolution,
                  Math.floor(s.y) / this.resolution,
                  Math.floor(s.h) / this.resolution,
                  Math.floor(s.w) / this.resolution
                )
              : new to.Rectangle(
                  Math.floor(s.x) / this.resolution,
                  Math.floor(s.y) / this.resolution,
                  Math.floor(s.w) / this.resolution,
                  Math.floor(s.h) / this.resolution
                )),
              !1 !== o.trimmed &&
                o.spriteSourceSize &&
                (h = new to.Rectangle(
                  Math.floor(o.spriteSourceSize.x) / this.resolution,
                  Math.floor(o.spriteSourceSize.y) / this.resolution,
                  Math.floor(s.w) / this.resolution,
                  Math.floor(s.h) / this.resolution
                )),
              (this.textures[n] = new t_.Texture(
                this.baseTexture,
                a,
                l,
                h,
                o.rotated ? 2 : 0,
                o.anchor
              )),
              (0, t_.Texture).addToCache(this.textures[n], n);
          }
          r++;
        }
      }),
      (t.prototype._processAnimations = function () {
        var t = this.data.animations || {};
        for (var e in t) {
          this.animations[e] = [];
          for (var r = 0; r < t[e].length; r++) {
            var i = t[e][r];
            this.animations[e].push(this.textures[i]);
          }
        }
      }),
      (t.prototype._parseComplete = function () {
        var t = this._callback;
        (this._callback = null),
          (this._batchIndex = 0),
          t.call(this, this.textures);
      }),
      (t.prototype._nextBatch = function () {
        var e = this;
        this._processFrames(this._batchIndex * t.BATCH_SIZE),
          this._batchIndex++,
          setTimeout(function () {
            e._batchIndex * t.BATCH_SIZE < e._frameKeys.length
              ? e._nextBatch()
              : (e._processAnimations(), e._parseComplete());
          }, 0);
      }),
      (t.prototype.destroy = function (t) {
        var e;
        for (var r in (void 0 === t && (t = !1), this.textures))
          this.textures[r].destroy();
        (this._frames = null),
          (this._frameKeys = null),
          (this.data = null),
          (this.textures = null),
          t &&
            (null === (e = this._texture) || void 0 === e || e.destroy(),
            this.baseTexture.destroy()),
          (this._texture = null),
          (this.baseTexture = null),
          (this.linkedSheets = []);
      }),
      (t.BATCH_SIZE = 1e3),
      t
    );
  })(),
  e3 = (function () {
    function t() {}
    return (
      (t.use = function (e, r) {
        var i,
          n,
          o = this,
          s = e.name + '_image';
        if (
          !e.data ||
          e.type !== tN.TYPE.JSON ||
          !e.data.frames ||
          o.resources[s]
        ) {
          r();
          return;
        }
        var a =
          null ===
            (n = null === (i = e.data) || void 0 === i ? void 0 : i.meta) ||
          void 0 === n
            ? void 0
            : n.related_multi_packs;
        if (Array.isArray(a))
          for (var h = 0; h < a.length; h++)
            !(function (t) {
              if ('string' == typeof t) {
                var r = t.replace('.json', ''),
                  i = (0, ti.url).resolve(e.url.replace(o.baseUrl, ''), t);
                if (
                  !(
                    o.resources[r] ||
                    Object.values(o.resources).some(function (t) {
                      return (0, ti.url).format((0, ti.url).parse(t.url)) === i;
                    })
                  )
                ) {
                  var n = {
                    crossOrigin: e.crossOrigin,
                    loadType: tN.LOAD_TYPE.XHR,
                    xhrType: tN.XHR_RESPONSE_TYPE.JSON,
                    parentResource: e,
                    metadata: e.metadata,
                  };
                  o.add(r, i, n);
                }
              }
            })(a[h]);
        var u = {
            crossOrigin: e.crossOrigin,
            metadata: e.metadata.imageMetadata,
            parentResource: e,
          },
          l = t.getResourcePath(e, o.baseUrl);
        o.add(s, l, u, function (t) {
          if (t.error) {
            r(t.error);
            return;
          }
          var i = new e2(t.texture, e.data, e.url);
          i.parse().then(function () {
            (e.spritesheet = i), (e.textures = i.textures), r();
          });
        });
      }),
      (t.getResourcePath = function (t, e) {
        return t.isDataUrl
          ? t.data.meta.image
          : (0, ti.url).resolve(t.url.replace(e, ''), t.data.meta.image);
      }),
      (t.extension = t_.ExtensionType.Loader),
      t
    );
  })(),
  t_ = F('jH9fL'),
  to = F('960oV'),
  ta = F('6n98C'),
  ti = F('e70pz'),
  e4 = function (t, e) {
    return (e4 =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
function e8(t, e) {
  function r() {
    this.constructor = t;
  }
  e4(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
var e6 = new to.Point();
!(function (t) {
  function e(e, r, i) {
    void 0 === r && (r = 100), void 0 === i && (i = 100);
    var n = t.call(this, e) || this;
    return (
      (n.tileTransform = new to.Transform()),
      (n._width = r),
      (n._height = i),
      (n.uvMatrix = n.texture.uvMatrix || new t_.TextureMatrix(e)),
      (n.pluginName = 'tilingSprite'),
      (n.uvRespectAnchor = !1),
      n
    );
  }
  e8(e, t),
    Object.defineProperty(e.prototype, 'clampMargin', {
      get: function () {
        return this.uvMatrix.clampMargin;
      },
      set: function (t) {
        (this.uvMatrix.clampMargin = t), this.uvMatrix.update(!0);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'tileScale', {
      get: function () {
        return this.tileTransform.scale;
      },
      set: function (t) {
        this.tileTransform.scale.copyFrom(t);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'tilePosition', {
      get: function () {
        return this.tileTransform.position;
      },
      set: function (t) {
        this.tileTransform.position.copyFrom(t);
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype._onTextureUpdate = function () {
      this.uvMatrix && (this.uvMatrix.texture = this._texture),
        (this._cachedTint = 16777215);
    }),
    (e.prototype._render = function (t) {
      var e = this._texture;
      e &&
        e.valid &&
        (this.tileTransform.updateLocalTransform(),
        this.uvMatrix.update(),
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
        t.plugins[this.pluginName].render(this));
    }),
    (e.prototype._calculateBounds = function () {
      var t = -(this._width * this._anchor._x),
        e = -(this._height * this._anchor._y),
        r = this._width * (1 - this._anchor._x),
        i = this._height * (1 - this._anchor._y);
      this._bounds.addFrame(this.transform, t, e, r, i);
    }),
    (e.prototype.getLocalBounds = function (e) {
      return 0 === this.children.length
        ? ((this._bounds.minX = -(this._width * this._anchor._x)),
          (this._bounds.minY = -(this._height * this._anchor._y)),
          (this._bounds.maxX = this._width * (1 - this._anchor._x)),
          (this._bounds.maxY = this._height * (1 - this._anchor._y)),
          e ||
            (this._localBoundsRect ||
              (this._localBoundsRect = new to.Rectangle()),
            (e = this._localBoundsRect)),
          this._bounds.getRectangle(e))
        : t.prototype.getLocalBounds.call(this, e);
    }),
    (e.prototype.containsPoint = function (t) {
      this.worldTransform.applyInverse(t, e6);
      var e = this._width,
        r = this._height,
        i = -e * this.anchor._x;
      if (e6.x >= i && e6.x < i + e) {
        var n = -r * this.anchor._y;
        if (e6.y >= n && e6.y < n + r) return !0;
      }
      return !1;
    }),
    (e.prototype.destroy = function (e) {
      t.prototype.destroy.call(this, e),
        (this.tileTransform = null),
        (this.uvMatrix = null);
    }),
    (e.from = function (t, r) {
      return new e(
        t instanceof t_.Texture ? t : (0, t_.Texture).from(t, r),
        r.width,
        r.height
      );
    }),
    Object.defineProperty(e.prototype, 'width', {
      get: function () {
        return this._width;
      },
      set: function (t) {
        this._width = t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'height', {
      get: function () {
        return this._height;
      },
      set: function (t) {
        this._height = t;
      },
      enumerable: !1,
      configurable: !0,
    });
})(ew);
var e5 =
    '#version 100\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n',
  e9 = new to.Matrix(),
  e7 = (function (t) {
    function e(e) {
      var r = t.call(this, e) || this;
      return (
        e.runners.contextChange.add(r),
        (r.quad = new t_.QuadUv()),
        (r.state = (0, t_.State).for2d()),
        r
      );
    }
    return (
      e8(e, t),
      (e.prototype.contextChange = function () {
        var t = this.renderer,
          e = { globals: t.globalUniforms };
        (this.simpleShader = (0, t_.Shader).from(
          e5,
          '#version 100\n#define SHADER_NAME Tiling-Sprite-Simple-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n',
          e
        )),
          (this.shader =
            t.context.webGLVersion > 1
              ? (0, t_.Shader).from(
                  '#version 300 es\n#define SHADER_NAME Tiling-Sprite-300\n\nprecision lowp float;\n\nin vec2 aVertexPosition;\nin vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nout vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n',
                  '#version 300 es\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nin vec2 vTextureCoord;\n\nout vec4 fragmentColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0\n\n    fragmentColor = texSample * uColor;\n}\n',
                  e
                )
              : (0, t_.Shader).from(
                  e5,
                  '#version 100\n#ifdef GL_EXT_shader_texture_lod\n    #extension GL_EXT_shader_texture_lod : enable\n#endif\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    #ifdef GL_EXT_shader_texture_lod\n        vec4 texSample = unclamped == coord\n            ? texture2D(uSampler, coord) \n            : texture2DLodEXT(uSampler, coord, 0);\n    #else\n        vec4 texSample = texture2D(uSampler, coord);\n    #endif\n\n    gl_FragColor = texSample * uColor;\n}\n',
                  e
                ));
      }),
      (e.prototype.render = function (t) {
        var e = this.renderer,
          r = this.quad,
          i = r.vertices;
        (i[0] = i[6] = -(t._width * t.anchor.x)),
          (i[1] = i[3] = -(t._height * t.anchor.y)),
          (i[2] = i[4] = t._width * (1 - t.anchor.x)),
          (i[5] = i[7] = t._height * (1 - t.anchor.y));
        var n = t.uvRespectAnchor ? t.anchor.x : 0,
          o = t.uvRespectAnchor ? t.anchor.y : 0;
        ((i = r.uvs)[0] = i[6] = -n),
          (i[1] = i[3] = -o),
          (i[2] = i[4] = 1 - n),
          (i[5] = i[7] = 1 - o),
          r.invalidate();
        var s = t._texture,
          a = s.baseTexture,
          h = a.alphaMode > 0,
          u = t.tileTransform.localTransform,
          l = t.uvMatrix,
          c =
            a.isPowerOfTwo &&
            s.frame.width === a.width &&
            s.frame.height === a.height;
        c &&
          (a._glTextures[e.CONTEXT_UID]
            ? (c = a.wrapMode !== ta.WRAP_MODES.CLAMP)
            : a.wrapMode === ta.WRAP_MODES.CLAMP &&
              (a.wrapMode = ta.WRAP_MODES.REPEAT));
        var p = c ? this.simpleShader : this.shader,
          f = s.width,
          d = s.height,
          _ = t._width,
          y = t._height;
        e9.set(
          (u.a * f) / _,
          (u.b * f) / y,
          (u.c * d) / _,
          (u.d * d) / y,
          u.tx / _,
          u.ty / y
        ),
          e9.invert(),
          c
            ? e9.prepend(l.mapCoord)
            : ((p.uniforms.uMapCoord = l.mapCoord.toArray(!0)),
              (p.uniforms.uClampFrame = l.uClampFrame),
              (p.uniforms.uClampOffset = l.uClampOffset)),
          (p.uniforms.uTransform = e9.toArray(!0)),
          (p.uniforms.uColor = (0, ti.premultiplyTintToRgba)(
            t.tint,
            t.worldAlpha,
            p.uniforms.uColor,
            h
          )),
          (p.uniforms.translationMatrix = t.transform.worldTransform.toArray(
            !0
          )),
          (p.uniforms.uSampler = s),
          e.shader.bind(p),
          e.geometry.bind(r),
          (this.state.blendMode = (0, ti.correctBlendMode)(t.blendMode, h)),
          e.state.set(this.state),
          e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
      }),
      (e.extension = {
        name: 'tilingSprite',
        type: t_.ExtensionType.RendererPlugin,
      }),
      e
    );
  })(t_.ObjectRenderer),
  to = F('960oV'),
  tn = F('8q0ed'),
  t_ = F('jH9fL'),
  to = F('960oV'),
  ta = F('6n98C'),
  tn = F('8q0ed'),
  ti = F('e70pz'),
  rt = function (t, e) {
    return (rt =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
function re(t, e) {
  function r() {
    this.constructor = t;
  }
  rt(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
var rr = (function () {
    function t(t, e) {
      (this.uvBuffer = t),
        (this.uvMatrix = e),
        (this.data = null),
        (this._bufferUpdateId = -1),
        (this._textureUpdateId = -1),
        (this._updateID = 0);
    }
    return (
      (t.prototype.update = function (t) {
        if (
          t ||
          this._bufferUpdateId !== this.uvBuffer._updateID ||
          this._textureUpdateId !== this.uvMatrix._updateID
        ) {
          (this._bufferUpdateId = this.uvBuffer._updateID),
            (this._textureUpdateId = this.uvMatrix._updateID);
          var e = this.uvBuffer.data;
          (this.data && this.data.length === e.length) ||
            (this.data = new Float32Array(e.length)),
            this.uvMatrix.multiplyUvs(e, this.data),
            this._updateID++;
        }
      }),
      t
    );
  })(),
  ri = new to.Point(),
  rn = new to.Polygon(),
  ro = (function (t) {
    function e(e, r, i, n) {
      void 0 === n && (n = ta.DRAW_MODES.TRIANGLES);
      var o = t.call(this) || this;
      return (
        (o.geometry = e),
        (o.shader = r),
        (o.state = i || (0, t_.State).for2d()),
        (o.drawMode = n),
        (o.start = 0),
        (o.size = 0),
        (o.uvs = null),
        (o.indices = null),
        (o.vertexData = new Float32Array(1)),
        (o.vertexDirty = -1),
        (o._transformID = -1),
        (o._roundPixels = tn.settings.ROUND_PIXELS),
        (o.batchUvs = null),
        o
      );
    }
    return (
      re(e, t),
      Object.defineProperty(e.prototype, 'geometry', {
        get: function () {
          return this._geometry;
        },
        set: function (t) {
          this._geometry !== t &&
            (this._geometry &&
              (this._geometry.refCount--,
              0 === this._geometry.refCount && this._geometry.dispose()),
            (this._geometry = t),
            this._geometry && this._geometry.refCount++,
            (this.vertexDirty = -1));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'uvBuffer', {
        get: function () {
          return this.geometry.buffers[1];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'verticesBuffer', {
        get: function () {
          return this.geometry.buffers[0];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'material', {
        get: function () {
          return this.shader;
        },
        set: function (t) {
          this.shader = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'blendMode', {
        get: function () {
          return this.state.blendMode;
        },
        set: function (t) {
          this.state.blendMode = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'roundPixels', {
        get: function () {
          return this._roundPixels;
        },
        set: function (t) {
          this._roundPixels !== t && (this._transformID = -1),
            (this._roundPixels = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'tint', {
        get: function () {
          return 'tint' in this.shader ? this.shader.tint : null;
        },
        set: function (t) {
          this.shader.tint = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'texture', {
        get: function () {
          return 'texture' in this.shader ? this.shader.texture : null;
        },
        set: function (t) {
          this.shader.texture = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._render = function (t) {
        var r = this.geometry.buffers[0].data;
        this.shader.batchable &&
        this.drawMode === ta.DRAW_MODES.TRIANGLES &&
        r.length < 2 * e.BATCHABLE_SIZE
          ? this._renderToBatch(t)
          : this._renderDefault(t);
      }),
      (e.prototype._renderDefault = function (t) {
        var e = this.shader;
        (e.alpha = this.worldAlpha),
          e.update && e.update(),
          t.batch.flush(),
          (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(
            !0
          )),
          t.shader.bind(e),
          t.state.set(this.state),
          t.geometry.bind(this.geometry, e),
          t.geometry.draw(
            this.drawMode,
            this.size,
            this.start,
            this.geometry.instanceCount
          );
      }),
      (e.prototype._renderToBatch = function (t) {
        var e = this.geometry,
          r = this.shader;
        r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()),
          this.calculateVertices(),
          (this.indices = e.indexBuffer.data),
          (this._tintRGB = r._tintRGB),
          (this._texture = r.texture);
        var i = this.material.pluginName;
        t.batch.setObjectRenderer(t.plugins[i]), t.plugins[i].render(this);
      }),
      (e.prototype.calculateVertices = function () {
        var t = this.geometry.buffers[0],
          e = t.data,
          r = t._updateID;
        if (
          r !== this.vertexDirty ||
          this._transformID !== this.transform._worldID
        ) {
          (this._transformID = this.transform._worldID),
            this.vertexData.length !== e.length &&
              (this.vertexData = new Float32Array(e.length));
          for (
            var i = this.transform.worldTransform,
              n = i.a,
              o = i.b,
              s = i.c,
              a = i.d,
              h = i.tx,
              u = i.ty,
              l = this.vertexData,
              c = 0;
            c < l.length / 2;
            c++
          ) {
            var p = e[2 * c],
              f = e[2 * c + 1];
            (l[2 * c] = n * p + s * f + h), (l[2 * c + 1] = o * p + a * f + u);
          }
          if (this._roundPixels)
            for (var d = tn.settings.RESOLUTION, c = 0; c < l.length; ++c)
              l[c] = Math.round(((l[c] * d) | 0) / d);
          this.vertexDirty = r;
        }
      }),
      (e.prototype.calculateUvs = function () {
        var t = this.geometry.buffers[1],
          e = this.shader;
        e.uvMatrix.isSimple
          ? (this.uvs = t.data)
          : (this.batchUvs || (this.batchUvs = new rr(t, e.uvMatrix)),
            this.batchUvs.update(),
            (this.uvs = this.batchUvs.data));
      }),
      (e.prototype._calculateBounds = function () {
        this.calculateVertices(),
          this._bounds.addVertexData(
            this.vertexData,
            0,
            this.vertexData.length
          );
      }),
      (e.prototype.containsPoint = function (t) {
        if (!this.getBounds().contains(t.x, t.y)) return !1;
        this.worldTransform.applyInverse(t, ri);
        for (
          var e = this.geometry.getBuffer('aVertexPosition').data,
            r = rn.points,
            i = this.geometry.getIndex().data,
            n = i.length,
            o = 4 === this.drawMode ? 3 : 1,
            s = 0;
          s + 2 < n;
          s += o
        ) {
          var a = 2 * i[s],
            h = 2 * i[s + 1],
            u = 2 * i[s + 2];
          if (
            ((r[0] = e[a]),
            (r[1] = e[a + 1]),
            (r[2] = e[h]),
            (r[3] = e[h + 1]),
            (r[4] = e[u]),
            (r[5] = e[u + 1]),
            rn.contains(ri.x, ri.y))
          )
            return !0;
        }
        return !1;
      }),
      (e.prototype.destroy = function (e) {
        t.prototype.destroy.call(this, e),
          this._cachedTexture &&
            (this._cachedTexture.destroy(), (this._cachedTexture = null)),
          (this.geometry = null),
          (this.shader = null),
          (this.state = null),
          (this.uvs = null),
          (this.indices = null),
          (this.vertexData = null);
      }),
      (e.BATCHABLE_SIZE = 100),
      e
    );
  })(td),
  rs = (function (t) {
    function e(e, r) {
      var i = this,
        n = {
          uSampler: e,
          alpha: 1,
          uTextureMatrix: to.Matrix.IDENTITY,
          uColor: new Float32Array([1, 1, 1, 1]),
        };
      return (
        (r = Object.assign(
          { tint: 16777215, alpha: 1, pluginName: 'batch' },
          r
        )).uniforms && Object.assign(n, r.uniforms),
        ((i =
          t.call(
            this,
            r.program ||
              (0, t_.Program).from(
                'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n',
                'varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n'
              ),
            n
          ) || this)._colorDirty = !1),
        (i.uvMatrix = new t_.TextureMatrix(e)),
        (i.batchable = void 0 === r.program),
        (i.pluginName = r.pluginName),
        (i.tint = r.tint),
        (i.alpha = r.alpha),
        i
      );
    }
    return (
      re(e, t),
      Object.defineProperty(e.prototype, 'texture', {
        get: function () {
          return this.uniforms.uSampler;
        },
        set: function (t) {
          this.uniforms.uSampler !== t &&
            (!this.uniforms.uSampler.baseTexture.alphaMode !=
              !t.baseTexture.alphaMode && (this._colorDirty = !0),
            (this.uniforms.uSampler = t),
            (this.uvMatrix.texture = t));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'alpha', {
        get: function () {
          return this._alpha;
        },
        set: function (t) {
          t !== this._alpha && ((this._alpha = t), (this._colorDirty = !0));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'tint', {
        get: function () {
          return this._tint;
        },
        set: function (t) {
          t !== this._tint &&
            ((this._tint = t),
            (this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)),
            (this._colorDirty = !0));
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.update = function () {
        if (this._colorDirty) {
          this._colorDirty = !1;
          var t = this.texture.baseTexture;
          (0, ti.premultiplyTintToRgba)(
            this._tint,
            this._alpha,
            this.uniforms.uColor,
            t.alphaMode
          );
        }
        this.uvMatrix.update() &&
          (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
      }),
      e
    );
  })(t_.Shader),
  ra = (function (t) {
    function e(e, r, i) {
      var n = t.call(this) || this,
        o = new t_.Buffer(e),
        s = new t_.Buffer(r, !0),
        a = new t_.Buffer(i, !0, !0);
      return (
        n
          .addAttribute('aVertexPosition', o, 2, !1, ta.TYPES.FLOAT)
          .addAttribute('aTextureCoord', s, 2, !1, ta.TYPES.FLOAT)
          .addIndex(a),
        (n._updateId = -1),
        n
      );
    }
    return (
      re(e, t),
      Object.defineProperty(e.prototype, 'vertexDirtyId', {
        get: function () {
          return this.buffers[0]._updateID;
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })(t_.Geometry),
  ti = F('e70pz'),
  t_ = F('jH9fL'),
  ta = F('6n98C'),
  rh = function (t, e) {
    return (rh =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  },
  ru = function () {
    (this.info = []),
      (this.common = []),
      (this.page = []),
      (this.char = []),
      (this.kerning = []),
      (this.distanceField = []);
  },
  rl = (function () {
    function t() {}
    return (
      (t.test = function (t) {
        return 'string' == typeof t && 0 === t.indexOf('info face=');
      }),
      (t.parse = function (t) {
        var e = t.match(/^[a-z]+\s+.+$/gm),
          r = {
            info: [],
            common: [],
            page: [],
            char: [],
            chars: [],
            kerning: [],
            kernings: [],
            distanceField: [],
          };
        for (var i in e) {
          var n = e[i].match(/^[a-z]+/gm)[0],
            o = e[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
            s = {};
          for (var a in o) {
            var h = o[a].split('='),
              u = h[0],
              l = h[1].replace(/"/gm, ''),
              c = parseFloat(l),
              p = isNaN(c) ? l : c;
            s[u] = p;
          }
          r[n].push(s);
        }
        var f = new ru();
        return (
          r.info.forEach(function (t) {
            return f.info.push({ face: t.face, size: parseInt(t.size, 10) });
          }),
          r.common.forEach(function (t) {
            return f.common.push({ lineHeight: parseInt(t.lineHeight, 10) });
          }),
          r.page.forEach(function (t) {
            return f.page.push({ id: parseInt(t.id, 10), file: t.file });
          }),
          r.char.forEach(function (t) {
            return f.char.push({
              id: parseInt(t.id, 10),
              page: parseInt(t.page, 10),
              x: parseInt(t.x, 10),
              y: parseInt(t.y, 10),
              width: parseInt(t.width, 10),
              height: parseInt(t.height, 10),
              xoffset: parseInt(t.xoffset, 10),
              yoffset: parseInt(t.yoffset, 10),
              xadvance: parseInt(t.xadvance, 10),
            });
          }),
          r.kerning.forEach(function (t) {
            return f.kerning.push({
              first: parseInt(t.first, 10),
              second: parseInt(t.second, 10),
              amount: parseInt(t.amount, 10),
            });
          }),
          r.distanceField.forEach(function (t) {
            return f.distanceField.push({
              distanceRange: parseInt(t.distanceRange, 10),
              fieldType: t.fieldType,
            });
          }),
          f
        );
      }),
      t
    );
  })(),
  rc = (function () {
    function t() {}
    return (
      (t.test = function (t) {
        return (
          t instanceof XMLDocument &&
          t.getElementsByTagName('page').length &&
          null !== t.getElementsByTagName('info')[0].getAttribute('face')
        );
      }),
      (t.parse = function (t) {
        for (
          var e = new ru(),
            r = t.getElementsByTagName('info'),
            i = t.getElementsByTagName('common'),
            n = t.getElementsByTagName('page'),
            o = t.getElementsByTagName('char'),
            s = t.getElementsByTagName('kerning'),
            a = t.getElementsByTagName('distanceField'),
            h = 0;
          h < r.length;
          h++
        )
          e.info.push({
            face: r[h].getAttribute('face'),
            size: parseInt(r[h].getAttribute('size'), 10),
          });
        for (var h = 0; h < i.length; h++)
          e.common.push({
            lineHeight: parseInt(i[h].getAttribute('lineHeight'), 10),
          });
        for (var h = 0; h < n.length; h++)
          e.page.push({
            id: parseInt(n[h].getAttribute('id'), 10) || 0,
            file: n[h].getAttribute('file'),
          });
        for (var h = 0; h < o.length; h++) {
          var u = o[h];
          e.char.push({
            id: parseInt(u.getAttribute('id'), 10),
            page: parseInt(u.getAttribute('page'), 10) || 0,
            x: parseInt(u.getAttribute('x'), 10),
            y: parseInt(u.getAttribute('y'), 10),
            width: parseInt(u.getAttribute('width'), 10),
            height: parseInt(u.getAttribute('height'), 10),
            xoffset: parseInt(u.getAttribute('xoffset'), 10),
            yoffset: parseInt(u.getAttribute('yoffset'), 10),
            xadvance: parseInt(u.getAttribute('xadvance'), 10),
          });
        }
        for (var h = 0; h < s.length; h++)
          e.kerning.push({
            first: parseInt(s[h].getAttribute('first'), 10),
            second: parseInt(s[h].getAttribute('second'), 10),
            amount: parseInt(s[h].getAttribute('amount'), 10),
          });
        for (var h = 0; h < a.length; h++)
          e.distanceField.push({
            fieldType: a[h].getAttribute('fieldType'),
            distanceRange: parseInt(a[h].getAttribute('distanceRange'), 10),
          });
        return e;
      }),
      t
    );
  })(),
  rp = (function () {
    function t() {}
    return (
      (t.test = function (t) {
        if ('string' == typeof t && t.indexOf('<font>') > -1) {
          var e = new globalThis.DOMParser().parseFromString(t, 'text/xml');
          return rc.test(e);
        }
        return !1;
      }),
      (t.parse = function (t) {
        var e = new globalThis.DOMParser().parseFromString(t, 'text/xml');
        return rc.parse(e);
      }),
      t
    );
  })(),
  rf = [rl, rc, rp];
function rd(t) {
  for (var e = 0; e < rf.length; e++) if (rf[e].test(t)) return rf[e];
  return null;
}
function r_(t) {
  return Array.from ? Array.from(t) : t.split('');
}
function ry(t) {
  return t.codePointAt ? t.codePointAt(0) : t.charCodeAt(0);
}
var rv = (function () {
    function t(t, e, r) {
      var i,
        n,
        o = t.info[0],
        s = t.common[0],
        a = t.page[0],
        h = t.distanceField[0],
        u = (0, ti.getResolutionOfUrl)(a.file),
        l = {};
      (this._ownsTextures = r),
        (this.font = o.face),
        (this.size = o.size),
        (this.lineHeight = s.lineHeight / u),
        (this.chars = {}),
        (this.pageTextures = l);
      for (var c = 0; c < t.page.length; c++) {
        var p = t.page[c],
          f = p.id,
          d = p.file;
        (l[f] = e instanceof Array ? e[c] : e[d]),
          (null == h ? void 0 : h.fieldType) &&
            'none' !== h.fieldType &&
            ((l[f].baseTexture.alphaMode =
              ta.ALPHA_MODES.NO_PREMULTIPLIED_ALPHA),
            (l[f].baseTexture.mipmap = ta.MIPMAP_MODES.OFF));
      }
      for (var c = 0; c < t.char.length; c++) {
        var _ = t.char[c],
          f = _.id,
          y = _.page,
          v = t.char[c],
          m = v.x,
          g = v.y,
          b = v.width,
          x = v.height,
          T = v.xoffset,
          E = v.yoffset,
          S = v.xadvance;
        (m /= u), (g /= u), (b /= u), (x /= u), (T /= u), (E /= u), (S /= u);
        var A = new to.Rectangle(
          m + l[y].frame.x / u,
          g + l[y].frame.y / u,
          b,
          x
        );
        this.chars[f] = {
          xOffset: T,
          yOffset: E,
          xAdvance: S,
          kerning: {},
          texture: new t_.Texture(l[y].baseTexture, A),
          page: y,
        };
      }
      for (var c = 0; c < t.kerning.length; c++) {
        var R = t.kerning[c],
          O = R.first,
          M = R.second,
          P = R.amount;
        (O /= u),
          (M /= u),
          (P /= u),
          this.chars[M] && (this.chars[M].kerning[O] = P);
      }
      (this.distanceFieldRange = null == h ? void 0 : h.distanceRange),
        (this.distanceFieldType =
          null !==
            (n =
              null === (i = null == h ? void 0 : h.fieldType) || void 0 === i
                ? void 0
                : i.toLowerCase()) && void 0 !== n
            ? n
            : 'none');
    }
    return (
      (t.prototype.destroy = function () {
        for (var t in this.chars)
          this.chars[t].texture.destroy(), (this.chars[t].texture = null);
        for (var t in this.pageTextures)
          this._ownsTextures && this.pageTextures[t].destroy(!0),
            (this.pageTextures[t] = null);
        (this.chars = null), (this.pageTextures = null);
      }),
      (t.install = function (e, r, i) {
        if (e instanceof ru) n = e;
        else {
          var n,
            o = rd(e);
          if (!o) throw Error('Unrecognized data format for font.');
          n = o.parse(e);
        }
        r instanceof t_.Texture && (r = [r]);
        var s = new t(n, r, i);
        return (t.available[s.font] = s), s;
      }),
      (t.uninstall = function (e) {
        var r = t.available[e];
        if (!r) throw Error("No font found named '" + e + "'");
        r.destroy(), delete t.available[e];
      }),
      (t.from = function (e, r, i) {
        if (!e) throw Error('[BitmapFont] Property `name` is required.');
        var n,
          o,
          s,
          a = Object.assign({}, t.defaultOptions, i),
          h = a.chars,
          u = a.padding,
          l = a.resolution,
          c = a.textureWidth,
          p = a.textureHeight,
          f = (function (t) {
            'string' == typeof t && (t = [t]);
            for (var e = [], r = 0, i = t.length; r < i; r++) {
              var n = t[r];
              if (Array.isArray(n)) {
                if (2 !== n.length)
                  throw Error(
                    '[BitmapFont]: Invalid character range length, expecting 2 got ' +
                      n.length +
                      '.'
                  );
                var o = n[0].charCodeAt(0),
                  s = n[1].charCodeAt(0);
                if (s < o)
                  throw Error('[BitmapFont]: Invalid character range.');
                for (var a = o; a <= s; a++) e.push(String.fromCharCode(a));
              } else e.push.apply(e, r_(n));
            }
            if (0 === e.length)
              throw Error('[BitmapFont]: Empty set when resolving characters.');
            return e;
          })(h),
          d = r instanceof eN ? r : new eN(r),
          _ = new ru();
        (_.info[0] = { face: d.fontFamily, size: d.fontSize }),
          (_.common[0] = { lineHeight: d.fontSize });
        for (var y = 0, v = 0, m = 0, g = [], b = 0; b < f.length; b++) {
          n ||
            (((n = (0, tn.settings).ADAPTER.createCanvas()).width = c),
            (n.height = p),
            (o = n.getContext('2d')),
            (s = new t_.BaseTexture(n, { resolution: l })),
            g.push(new t_.Texture(s)),
            _.page.push({ id: g.length - 1, file: '' }));
          var x = f[b],
            T = ek.measureText(x, d, !1, n),
            E = T.width,
            S = Math.ceil(T.height),
            A = Math.ceil(('italic' === d.fontStyle ? 2 : 1) * E);
          if (v >= p - S * l) {
            if (0 === v)
              throw Error(
                '[BitmapFont] textureHeight ' +
                  p +
                  'px is too small ' +
                  ("(fontFamily: '" +
                    d.fontFamily +
                    "', fontSize: " +
                    d.fontSize) +
                  "px, char: '" +
                  x +
                  "')"
              );
            --b, (n = null), (o = null), (s = null), (v = 0), (y = 0), (m = 0);
            continue;
          }
          if (
            ((m = Math.max(S + T.fontProperties.descent, m)), A * l + y >= c)
          ) {
            if (0 === y)
              throw Error(
                '[BitmapFont] textureWidth ' +
                  c +
                  'px is too small ' +
                  ("(fontFamily: '" +
                    d.fontFamily +
                    "', fontSize: " +
                    d.fontSize) +
                  "px, char: '" +
                  x +
                  "')"
              );
            --b, (v += m * l), (v = Math.ceil(v)), (y = 0), (m = 0);
            continue;
          }
          !(function (t, e, r, i, n, o, s) {
            var a = r.text,
              h = r.fontProperties;
            e.translate(i, n), e.scale(o, o);
            var u = s.strokeThickness / 2,
              l = -(s.strokeThickness / 2);
            if (
              ((e.font = s.toFontString()),
              (e.lineWidth = s.strokeThickness),
              (e.textBaseline = s.textBaseline),
              (e.lineJoin = s.lineJoin),
              (e.miterLimit = s.miterLimit),
              (e.fillStyle = (function (t, e, r, i, n, o) {
                var s,
                  a = r.fill;
                if (!Array.isArray(a)) return a;
                if (1 === a.length) return a[0];
                var h = r.dropShadow ? r.dropShadowDistance : 0,
                  u = r.padding || 0,
                  l = t.width / i - h - 2 * u,
                  c = t.height / i - h - 2 * u,
                  p = a.slice(),
                  f = r.fillGradientStops.slice();
                if (!f.length)
                  for (var d = p.length + 1, _ = 1; _ < d; ++_) f.push(_ / d);
                if (
                  (p.unshift(a[0]),
                  f.unshift(0),
                  p.push(a[a.length - 1]),
                  f.push(1),
                  r.fillGradientType === O.LINEAR_VERTICAL)
                ) {
                  s = e.createLinearGradient(l / 2, u, l / 2, c + u);
                  for (
                    var y = 0,
                      v = (o.fontProperties.fontSize + r.strokeThickness) / c,
                      _ = 0;
                    _ < n.length;
                    _++
                  )
                    for (var m = o.lineHeight * _, g = 0; g < p.length; g++) {
                      var b = Math.max(
                        y,
                        m / c +
                          ('number' == typeof f[g] ? f[g] : g / p.length) * v
                      );
                      (b = Math.min(b, 1)), s.addColorStop(b, p[g]), (y = b);
                    }
                } else {
                  s = e.createLinearGradient(u, c / 2, l + u, c / 2);
                  for (var x = p.length + 1, T = 1, _ = 0; _ < p.length; _++) {
                    var E = void 0;
                    (E = 'number' == typeof f[_] ? f[_] : T / x),
                      s.addColorStop(E, p[_]),
                      T++;
                  }
                }
                return s;
              })(t, e, s, o, [a], r)),
              (e.strokeStyle = s.stroke),
              s.dropShadow)
            ) {
              var c = s.dropShadowColor,
                p = (0, ti.hex2rgb)(
                  'number' == typeof c ? c : (0, ti.string2hex)(c)
                ),
                f = s.dropShadowBlur * o,
                d = s.dropShadowDistance * o;
              (e.shadowColor =
                'rgba(' +
                255 * p[0] +
                ',' +
                255 * p[1] +
                ',' +
                255 * p[2] +
                ',' +
                s.dropShadowAlpha +
                ')'),
                (e.shadowBlur = f),
                (e.shadowOffsetX = Math.cos(s.dropShadowAngle) * d),
                (e.shadowOffsetY = Math.sin(s.dropShadowAngle) * d);
            } else
              (e.shadowColor = 'black'),
                (e.shadowBlur = 0),
                (e.shadowOffsetX = 0),
                (e.shadowOffsetY = 0);
            s.stroke &&
              s.strokeThickness &&
              e.strokeText(a, u, l + r.lineHeight - h.descent),
              s.fill && e.fillText(a, u, l + r.lineHeight - h.descent),
              e.setTransform(1, 0, 0, 1, 0, 0),
              (e.fillStyle = 'rgba(0, 0, 0, 0)');
          })(n, o, T, y, v, l, d);
          var R = ry(T.text);
          _.char.push({
            id: R,
            page: g.length - 1,
            x: y / l,
            y: v / l,
            width: A,
            height: S,
            xoffset: 0,
            yoffset: 0,
            xadvance: Math.ceil(
              E -
                (d.dropShadow ? d.dropShadowDistance : 0) -
                (d.stroke ? d.strokeThickness : 0)
            ),
          }),
            (y += (A + 2 * u) * l),
            (y = Math.ceil(y));
        }
        if (!(null == i ? void 0 : i.skipKerning))
          for (var b = 0, M = f.length; b < M; b++)
            for (var P = f[b], I = 0; I < M; I++) {
              var w = f[I],
                D = o.measureText(P).width,
                C = o.measureText(w).width,
                F = o.measureText(P + w).width - (D + C);
              F && _.kerning.push({ first: ry(P), second: ry(w), amount: F });
            }
        var N = new t(_, g, !0);
        return (
          void 0 !== t.available[e] && t.uninstall(e), (t.available[e] = N), N
        );
      }),
      (t.ALPHA = [['a', 'z'], ['A', 'Z'], ' ']),
      (t.NUMERIC = [['0', '9']]),
      (t.ALPHANUMERIC = [['a', 'z'], ['A', 'Z'], ['0', '9'], ' ']),
      (t.ASCII = [[' ', '~']]),
      (t.defaultOptions = {
        resolution: 1,
        textureWidth: 512,
        textureHeight: 512,
        padding: 4,
        chars: t.ALPHANUMERIC,
      }),
      (t.available = {}),
      t
    );
  })(),
  rm = [],
  rg = [],
  rb = [];
!(function (t) {
  function e(r, i) {
    void 0 === i && (i = {});
    var n = t.call(this) || this;
    n._tint = 16777215;
    var o = Object.assign({}, e.styleDefaults, i),
      s = o.align,
      a = o.tint,
      h = o.maxWidth,
      u = o.letterSpacing,
      l = o.fontName,
      c = o.fontSize;
    if (!rv.available[l]) throw Error('Missing BitmapFont "' + l + '"');
    return (
      (n._activePagesMeshData = []),
      (n._textWidth = 0),
      (n._textHeight = 0),
      (n._align = s),
      (n._tint = a),
      (n._font = void 0),
      (n._fontName = l),
      (n._fontSize = c),
      (n.text = r),
      (n._maxWidth = h),
      (n._maxLineHeight = 0),
      (n._letterSpacing = u),
      (n._anchor = new to.ObservablePoint(
        function () {
          n.dirty = !0;
        },
        n,
        0,
        0
      )),
      (n._roundPixels = tn.settings.ROUND_PIXELS),
      (n.dirty = !0),
      (n._resolution = tn.settings.RESOLUTION),
      (n._autoResolution = !0),
      (n._textureCache = {}),
      n
    );
  }
  !(function (t, e) {
    function r() {
      this.constructor = t;
    }
    rh(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  })(e, t),
    (e.prototype.updateText = function () {
      for (
        var t,
          e = rv.available[this._fontName],
          r = this.fontSize,
          i = r / e.size,
          n = new to.Point(),
          o = [],
          s = [],
          a = [],
          h = r_(this._text.replace(/(?:\r\n|\r)/g, '\n') || ' '),
          u = (this._maxWidth * e.size) / r,
          l = 'none' === e.distanceFieldType ? rm : rg,
          c = null,
          p = 0,
          f = 0,
          d = 0,
          _ = -1,
          y = 0,
          v = 0,
          m = 0,
          g = 0,
          b = 0;
        b < h.length;
        b++
      ) {
        var x = h[b],
          T = ry(x);
        if (
          (/(?:\s)/.test(x) && ((_ = b), (y = p), g++),
          '\r' === x || '\n' === x)
        ) {
          s.push(p),
            a.push(-1),
            (f = Math.max(f, p)),
            ++d,
            ++v,
            (n.x = 0),
            (n.y += e.lineHeight),
            (c = null),
            (g = 0);
          continue;
        }
        var E = e.chars[T];
        if (E) {
          c && E.kerning[c] && (n.x += E.kerning[c]);
          var S = rb.pop() || {
            texture: t_.Texture.EMPTY,
            line: 0,
            charCode: 0,
            prevSpaces: 0,
            position: new to.Point(),
          };
          (S.texture = E.texture),
            (S.line = d),
            (S.charCode = T),
            (S.position.x = n.x + E.xOffset + this._letterSpacing / 2),
            (S.position.y = n.y + E.yOffset),
            (S.prevSpaces = g),
            o.push(S),
            (p =
              S.position.x +
              Math.max(E.xAdvance - E.xOffset, E.texture.orig.width)),
            (n.x += E.xAdvance + this._letterSpacing),
            (m = Math.max(m, E.yOffset + E.texture.height)),
            (c = T),
            -1 !== _ &&
              u > 0 &&
              n.x > u &&
              (++v,
              (0, ti.removeItems)(o, 1 + _ - v, 1 + b - _),
              (b = _),
              (_ = -1),
              s.push(y),
              a.push(o.length > 0 ? o[o.length - 1].prevSpaces : 0),
              (f = Math.max(f, y)),
              d++,
              (n.x = 0),
              (n.y += e.lineHeight),
              (c = null),
              (g = 0));
        }
      }
      var A = h[h.length - 1];
      '\r' !== A &&
        '\n' !== A &&
        (/(?:\s)/.test(A) && (p = y),
        s.push(p),
        (f = Math.max(f, p)),
        a.push(-1));
      for (var R = [], b = 0; b <= d; b++) {
        var O = 0;
        'right' === this._align
          ? (O = f - s[b])
          : 'center' === this._align
          ? (O = (f - s[b]) / 2)
          : 'justify' === this._align && (O = a[b] < 0 ? 0 : (f - s[b]) / a[b]),
          R.push(O);
      }
      var M = o.length,
        P = {},
        I = [],
        w = this._activePagesMeshData;
      l.push.apply(l, w);
      for (var b = 0; b < M; b++) {
        var D = o[b].texture,
          C = D.baseTexture.uid;
        if (!P[C]) {
          var F = l.pop();
          if (!F) {
            var N = new ra(),
              L = void 0,
              B = void 0;
            'none' === e.distanceFieldType
              ? ((L = new rs(t_.Texture.EMPTY)), (B = ta.BLEND_MODES.NORMAL))
              : ((L = new rs(t_.Texture.EMPTY, {
                  program: (0, t_.Program).from(
                    '// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n',
                    '// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n  if (median < 0.01) {\r\n    alpha = 0.0;\r\n  } else if (median > 0.99) {\r\n    alpha = 1.0;\r\n  }\r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r\n\r\n}\r\n'
                  ),
                  uniforms: { uFWidth: 0 },
                })),
                (B = ta.BLEND_MODES.NORMAL_NPM));
            var G = new ro(N, L);
            (G.blendMode = B),
              (F = {
                index: 0,
                indexCount: 0,
                vertexCount: 0,
                uvsCount: 0,
                total: 0,
                mesh: G,
                vertices: null,
                uvs: null,
                indices: null,
              });
          }
          (F.index = 0),
            (F.indexCount = 0),
            (F.vertexCount = 0),
            (F.uvsCount = 0),
            (F.total = 0);
          var U = this._textureCache;
          (U[C] = U[C] || new t_.Texture(D.baseTexture)),
            (F.mesh.texture = U[C]),
            (F.mesh.tint = this._tint),
            I.push(F),
            (P[C] = F);
        }
        P[C].total++;
      }
      for (var b = 0; b < w.length; b++)
        -1 === I.indexOf(w[b]) && this.removeChild(w[b].mesh);
      for (var b = 0; b < I.length; b++)
        I[b].mesh.parent !== this && this.addChild(I[b].mesh);
      for (var b in ((this._activePagesMeshData = I), P)) {
        var F = P[b],
          k = F.total;
        if (
          !(
            (null === (t = F.indices) || void 0 === t ? void 0 : t.length) >
            6 * k
          ) ||
          F.vertices.length < 2 * ro.BATCHABLE_SIZE
        )
          (F.vertices = new Float32Array(8 * k)),
            (F.uvs = new Float32Array(8 * k)),
            (F.indices = new Uint16Array(6 * k));
        else
          for (var X = F.total, j = F.vertices, H = 8 * X; H < j.length; H++)
            j[H] = 0;
        F.mesh.size = 6 * k;
      }
      for (var b = 0; b < M; b++) {
        var x = o[b],
          Y =
            x.position.x +
            R[x.line] * ('justify' === this._align ? x.prevSpaces : 1);
        this._roundPixels && (Y = Math.round(Y));
        var V = Y * i,
          z = x.position.y * i,
          D = x.texture,
          W = P[D.baseTexture.uid],
          q = D.frame,
          K = D._uvs,
          Z = W.index++;
        (W.indices[6 * Z + 0] = 0 + 4 * Z),
          (W.indices[6 * Z + 1] = 1 + 4 * Z),
          (W.indices[6 * Z + 2] = 2 + 4 * Z),
          (W.indices[6 * Z + 3] = 0 + 4 * Z),
          (W.indices[6 * Z + 4] = 2 + 4 * Z),
          (W.indices[6 * Z + 5] = 3 + 4 * Z),
          (W.vertices[8 * Z + 0] = V),
          (W.vertices[8 * Z + 1] = z),
          (W.vertices[8 * Z + 2] = V + q.width * i),
          (W.vertices[8 * Z + 3] = z),
          (W.vertices[8 * Z + 4] = V + q.width * i),
          (W.vertices[8 * Z + 5] = z + q.height * i),
          (W.vertices[8 * Z + 6] = V),
          (W.vertices[8 * Z + 7] = z + q.height * i),
          (W.uvs[8 * Z + 0] = K.x0),
          (W.uvs[8 * Z + 1] = K.y0),
          (W.uvs[8 * Z + 2] = K.x1),
          (W.uvs[8 * Z + 3] = K.y1),
          (W.uvs[8 * Z + 4] = K.x2),
          (W.uvs[8 * Z + 5] = K.y2),
          (W.uvs[8 * Z + 6] = K.x3),
          (W.uvs[8 * Z + 7] = K.y3);
      }
      for (var b in ((this._textWidth = f * i),
      (this._textHeight = (n.y + e.lineHeight) * i),
      P)) {
        var F = P[b];
        if (0 !== this.anchor.x || 0 !== this.anchor.y)
          for (
            var Q = 0,
              J = this._textWidth * this.anchor.x,
              $ = this._textHeight * this.anchor.y,
              tt = 0;
            tt < F.total;
            tt++
          )
            (F.vertices[Q++] -= J),
              (F.vertices[Q++] -= $),
              (F.vertices[Q++] -= J),
              (F.vertices[Q++] -= $),
              (F.vertices[Q++] -= J),
              (F.vertices[Q++] -= $),
              (F.vertices[Q++] -= J),
              (F.vertices[Q++] -= $);
        this._maxLineHeight = m * i;
        var te = F.mesh.geometry.getBuffer('aVertexPosition'),
          tr = F.mesh.geometry.getBuffer('aTextureCoord'),
          tn = F.mesh.geometry.getIndex();
        (te.data = F.vertices),
          (tr.data = F.uvs),
          (tn.data = F.indices),
          te.update(),
          tr.update(),
          tn.update();
      }
      for (var b = 0; b < o.length; b++) rb.push(o[b]);
      (this._font = e), (this.dirty = !1);
    }),
    (e.prototype.updateTransform = function () {
      this.validate(), this.containerUpdateTransform();
    }),
    (e.prototype._render = function (e) {
      this._autoResolution &&
        this._resolution !== e.resolution &&
        ((this._resolution = e.resolution), (this.dirty = !0));
      var r = rv.available[this._fontName],
        i = r.distanceFieldRange,
        n = r.distanceFieldType,
        o = r.size;
      if ('none' !== n)
        for (
          var s = this.worldTransform,
            a = s.a,
            h = s.b,
            u = s.c,
            l = s.d,
            c =
              (Math.abs(Math.sqrt(a * a + h * h)) +
                Math.abs(Math.sqrt(u * u + l * l))) /
              2,
            p = this.fontSize / o,
            f = 0,
            d = this._activePagesMeshData;
          f < d.length;
          f++
        )
          d[f].mesh.shader.uniforms.uFWidth = c * i * p * this._resolution;
      t.prototype._render.call(this, e);
    }),
    (e.prototype.getLocalBounds = function () {
      return this.validate(), t.prototype.getLocalBounds.call(this);
    }),
    (e.prototype.validate = function () {
      var t = rv.available[this._fontName];
      if (!t) throw Error('Missing BitmapFont "' + this._fontName + '"');
      this._font !== t && (this.dirty = !0), this.dirty && this.updateText();
    }),
    Object.defineProperty(e.prototype, 'tint', {
      get: function () {
        return this._tint;
      },
      set: function (t) {
        if (this._tint !== t) {
          this._tint = t;
          for (var e = 0; e < this._activePagesMeshData.length; e++)
            this._activePagesMeshData[e].mesh.tint = t;
        }
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'align', {
      get: function () {
        return this._align;
      },
      set: function (t) {
        this._align !== t && ((this._align = t), (this.dirty = !0));
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'fontName', {
      get: function () {
        return this._fontName;
      },
      set: function (t) {
        if (!rv.available[t]) throw Error('Missing BitmapFont "' + t + '"');
        this._fontName !== t && ((this._fontName = t), (this.dirty = !0));
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'fontSize', {
      get: function () {
        var t;
        return null !== (t = this._fontSize) && void 0 !== t
          ? t
          : rv.available[this._fontName].size;
      },
      set: function (t) {
        this._fontSize !== t && ((this._fontSize = t), (this.dirty = !0));
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'anchor', {
      get: function () {
        return this._anchor;
      },
      set: function (t) {
        'number' == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'text', {
      get: function () {
        return this._text;
      },
      set: function (t) {
        (t = String(null == t ? '' : t)),
          this._text !== t && ((this._text = t), (this.dirty = !0));
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'maxWidth', {
      get: function () {
        return this._maxWidth;
      },
      set: function (t) {
        this._maxWidth !== t && ((this._maxWidth = t), (this.dirty = !0));
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'maxLineHeight', {
      get: function () {
        return this.validate(), this._maxLineHeight;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'textWidth', {
      get: function () {
        return this.validate(), this._textWidth;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'letterSpacing', {
      get: function () {
        return this._letterSpacing;
      },
      set: function (t) {
        this._letterSpacing !== t &&
          ((this._letterSpacing = t), (this.dirty = !0));
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'roundPixels', {
      get: function () {
        return this._roundPixels;
      },
      set: function (t) {
        t !== this._roundPixels && ((this._roundPixels = t), (this.dirty = !0));
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'textHeight', {
      get: function () {
        return this.validate(), this._textHeight;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'resolution', {
      get: function () {
        return this._resolution;
      },
      set: function (t) {
        (this._autoResolution = !1),
          this._resolution !== t && ((this._resolution = t), (this.dirty = !0));
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype.destroy = function (e) {
      var r = this._textureCache,
        i = 'none' === rv.available[this._fontName].distanceFieldType ? rm : rg;
      i.push.apply(i, this._activePagesMeshData);
      for (var n = 0, o = this._activePagesMeshData; n < o.length; n++) {
        var s = o[n];
        this.removeChild(s.mesh);
      }
      for (var a in ((this._activePagesMeshData = []),
      i
        .filter(function (t) {
          return r[t.mesh.texture.baseTexture.uid];
        })
        .forEach(function (t) {
          t.mesh.texture = t_.Texture.EMPTY;
        }),
      r))
        r[a].destroy(), delete r[a];
      (this._font = null),
        (this._textureCache = null),
        t.prototype.destroy.call(this, e);
    }),
    (e.styleDefaults = {
      align: 'left',
      tint: 16777215,
      maxWidth: 0,
      letterSpacing: 0,
    });
})(td);
var rx = (function () {
    function t() {}
    return (
      (t.add = function () {
        tN.setExtensionXhrType('fnt', tN.XHR_RESPONSE_TYPE.TEXT);
      }),
      (t.use = function (e, r) {
        var i = rd(e.data);
        if (!i) {
          r();
          return;
        }
        for (
          var n = t.getBaseUrl(this, e),
            o = i.parse(e.data),
            s = {},
            a = function (t) {
              (s[t.metadata.pageFile] = t.texture),
                Object.keys(s).length === o.page.length &&
                  ((e.bitmapFont = rv.install(o, s, !0)), r());
            },
            h = 0;
          h < o.page.length;
          ++h
        ) {
          var u = o.page[h].file,
            l = n + u,
            c = !1;
          for (var p in this.resources) {
            var f = this.resources[p];
            if (f.url === l) {
              (f.metadata.pageFile = u),
                f.texture ? a(f) : f.onAfterMiddleware.add(a),
                (c = !0);
              break;
            }
          }
          if (!c) {
            var d = {
              crossOrigin: e.crossOrigin,
              loadType: tN.LOAD_TYPE.IMAGE,
              metadata: Object.assign(
                { pageFile: u },
                e.metadata.imageMetadata
              ),
              parentResource: e,
            };
            this.add(l, d, a);
          }
        }
      }),
      (t.getBaseUrl = function (e, r) {
        var i = r.isDataUrl ? '' : t.dirname(r.url);
        return (
          r.isDataUrl &&
            ('.' === i && (i = ''),
            e.baseUrl &&
              i &&
              '/' === e.baseUrl.charAt(e.baseUrl.length - 1) &&
              (i += '/')),
          (i = i.replace(e.baseUrl, '')) &&
            '/' !== i.charAt(i.length - 1) &&
            (i += '/'),
          i
        );
      }),
      (t.dirname = function (t) {
        var e = t
          .replace(/\\/g, '/')
          .replace(/\/$/, '')
          .replace(/\/[^\/]*$/, '');
        return e === t ? '.' : '' === e ? '/' : e;
      }),
      (t.extension = t_.ExtensionType.Loader),
      t
    );
  })(),
  tv = F('2JyLN'),
  t_ = F('jH9fL'),
  rT = function (t, e) {
    return (rT =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
!(function (t) {
  function e(e) {
    void 0 === e && (e = 1);
    var r =
      t.call(
        this,
        t_.defaultVertex,
        'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n',
        { uAlpha: 1 }
      ) || this;
    return (r.alpha = e), r;
  }
  !(function (t, e) {
    function r() {
      this.constructor = t;
    }
    rT(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  })(e, t),
    Object.defineProperty(e.prototype, 'alpha', {
      get: function () {
        return this.uniforms.uAlpha;
      },
      set: function (t) {
        this.uniforms.uAlpha = t;
      },
      enumerable: !1,
      configurable: !0,
    });
})(t_.Filter);
/*!
 * @pixi/filter-blur - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  tn = F('8q0ed'),
  ta = F('6n98C'),
  rE = function (t, e) {
    return (rE =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
function rS(t, e) {
  function r() {
    this.constructor = t;
  }
  rE(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
var rA = {
    5: [0.153388, 0.221461, 0.250301],
    7: [0.071303, 0.131514, 0.189879, 0.214607],
    9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
    11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
    13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
    15: [
      489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
      0.197448,
    ],
  },
  rR = (function (t) {
    function e(e, r, i, n, o) {
      void 0 === r && (r = 8),
        void 0 === i && (i = 4),
        void 0 === n && (n = tn.settings.FILTER_RESOLUTION),
        void 0 === o && (o = 5);
      var s = this,
        a = (function (t, e) {
          var r,
            i = Math.ceil(t / 2),
            n =
              '\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }',
            o = '';
          r = e
            ? 'vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);'
            : 'vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);';
          for (var s = 0; s < t; s++) {
            var a = r.replace('%index%', s.toString());
            o += (a = a.replace('%sampleIndex%', s - (i - 1) + '.0')) + '\n';
          }
          return (n = n.replace('%blur%', o)).replace('%size%', t.toString());
        })(o, e),
        h = (function (t) {
          for (
            var e,
              r = rA[t],
              i = r.length,
              n =
                'varying vec2 vBlurTexCoords[%size%];\nuniform sampler2D uSampler;\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n    %blur%\n}',
              o = '',
              s = 0;
            s < t;
            s++
          ) {
            var a =
              'gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;'.replace(
                '%index%',
                s.toString()
              );
            (e = s),
              s >= i && (e = t - s - 1),
              (o += (a = a.replace('%value%', r[e].toString())) + '\n');
          }
          return (n = n.replace('%blur%', o)).replace('%size%', t.toString());
        })(o);
      return (
        ((s = t.call(this, a, h) || this).horizontal = e),
        (s.resolution = n),
        (s._quality = 0),
        (s.quality = i),
        (s.blur = r),
        s
      );
    }
    return (
      rS(e, t),
      (e.prototype.apply = function (t, e, r, i) {
        if (
          (r
            ? this.horizontal
              ? (this.uniforms.strength = (1 / r.width) * (r.width / e.width))
              : (this.uniforms.strength =
                  (1 / r.height) * (r.height / e.height))
            : this.horizontal
            ? (this.uniforms.strength =
                (1 / t.renderer.width) * (t.renderer.width / e.width))
            : (this.uniforms.strength =
                (1 / t.renderer.height) * (t.renderer.height / e.height)),
          (this.uniforms.strength *= this.strength),
          (this.uniforms.strength /= this.passes),
          1 === this.passes)
        )
          t.applyFilter(this, e, r, i);
        else {
          var n = t.getFilterTexture(),
            o = t.renderer,
            s = e,
            a = n;
          (this.state.blend = !1),
            t.applyFilter(this, s, a, ta.CLEAR_MODES.CLEAR);
          for (var h = 1; h < this.passes - 1; h++) {
            t.bindAndClear(s, ta.CLEAR_MODES.BLIT),
              (this.uniforms.uSampler = a);
            var u = a;
            (a = s), (s = u), o.shader.bind(this), o.geometry.draw(5);
          }
          (this.state.blend = !0),
            t.applyFilter(this, a, r, i),
            t.returnFilterTexture(n);
        }
      }),
      Object.defineProperty(e.prototype, 'blur', {
        get: function () {
          return this.strength;
        },
        set: function (t) {
          (this.padding = 1 + 2 * Math.abs(t)), (this.strength = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'quality', {
        get: function () {
          return this._quality;
        },
        set: function (t) {
          (this._quality = t), (this.passes = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })(t_.Filter);
!(function (t) {
  function e(e, r, i, n) {
    void 0 === e && (e = 8),
      void 0 === r && (r = 4),
      void 0 === i && (i = tn.settings.FILTER_RESOLUTION),
      void 0 === n && (n = 5);
    var o = t.call(this) || this;
    return (
      (o.blurXFilter = new rR(!0, e, r, i, n)),
      (o.blurYFilter = new rR(!1, e, r, i, n)),
      (o.resolution = i),
      (o.quality = r),
      (o.blur = e),
      (o.repeatEdgePixels = !1),
      o
    );
  }
  rS(e, t),
    (e.prototype.apply = function (t, e, r, i) {
      var n = Math.abs(this.blurXFilter.strength),
        o = Math.abs(this.blurYFilter.strength);
      if (n && o) {
        var s = t.getFilterTexture();
        this.blurXFilter.apply(t, e, s, ta.CLEAR_MODES.CLEAR),
          this.blurYFilter.apply(t, s, r, i),
          t.returnFilterTexture(s);
      } else
        o
          ? this.blurYFilter.apply(t, e, r, i)
          : this.blurXFilter.apply(t, e, r, i);
    }),
    (e.prototype.updatePadding = function () {
      this._repeatEdgePixels
        ? (this.padding = 0)
        : (this.padding =
            2 *
            Math.max(
              Math.abs(this.blurXFilter.strength),
              Math.abs(this.blurYFilter.strength)
            ));
    }),
    Object.defineProperty(e.prototype, 'blur', {
      get: function () {
        return this.blurXFilter.blur;
      },
      set: function (t) {
        (this.blurXFilter.blur = this.blurYFilter.blur = t),
          this.updatePadding();
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'quality', {
      get: function () {
        return this.blurXFilter.quality;
      },
      set: function (t) {
        this.blurXFilter.quality = this.blurYFilter.quality = t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'blurX', {
      get: function () {
        return this.blurXFilter.blur;
      },
      set: function (t) {
        (this.blurXFilter.blur = t), this.updatePadding();
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'blurY', {
      get: function () {
        return this.blurYFilter.blur;
      },
      set: function (t) {
        (this.blurYFilter.blur = t), this.updatePadding();
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'blendMode', {
      get: function () {
        return this.blurYFilter.blendMode;
      },
      set: function (t) {
        this.blurYFilter.blendMode = t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'repeatEdgePixels', {
      get: function () {
        return this._repeatEdgePixels;
      },
      set: function (t) {
        (this._repeatEdgePixels = t), this.updatePadding();
      },
      enumerable: !1,
      configurable: !0,
    });
})(t_.Filter);
/*!
 * @pixi/filter-color-matrix - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  rO = function (t, e) {
    return (rO =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  },
  rM = (function (t) {
    function e() {
      var e = this,
        r = {
          m: new Float32Array([
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
          ]),
          uAlpha: 1,
        };
      return (
        ((e =
          t.call(
            this,
            t_.defaultFilterVertex,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n',
            r
          ) || this).alpha = 1),
        e
      );
    }
    return (
      !(function (t, e) {
        function r() {
          this.constructor = t;
        }
        rO(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      })(e, t),
      (e.prototype._loadMatrix = function (t, e) {
        void 0 === e && (e = !1);
        var r = t;
        e &&
          (this._multiply(r, this.uniforms.m, t), (r = this._colorMatrix(r))),
          (this.uniforms.m = r);
      }),
      (e.prototype._multiply = function (t, e, r) {
        return (
          (t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15]),
          (t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16]),
          (t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17]),
          (t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18]),
          (t[4] =
            e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4]),
          (t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15]),
          (t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16]),
          (t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17]),
          (t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18]),
          (t[9] =
            e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9]),
          (t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15]),
          (t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16]),
          (t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17]),
          (t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18]),
          (t[14] =
            e[10] * r[4] +
            e[11] * r[9] +
            e[12] * r[14] +
            e[13] * r[19] +
            e[14]),
          (t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15]),
          (t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16]),
          (t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17]),
          (t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18]),
          (t[19] =
            e[15] * r[4] +
            e[16] * r[9] +
            e[17] * r[14] +
            e[18] * r[19] +
            e[19]),
          t
        );
      }),
      (e.prototype._colorMatrix = function (t) {
        var e = new Float32Array(t);
        return (e[4] /= 255), (e[9] /= 255), (e[14] /= 255), (e[19] /= 255), e;
      }),
      (e.prototype.brightness = function (t, e) {
        this._loadMatrix(
          [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0],
          e
        );
      }),
      (e.prototype.tint = function (t, e) {
        this._loadMatrix(
          [
            ((t >> 16) & 255) / 255,
            0,
            0,
            0,
            0,
            0,
            ((t >> 8) & 255) / 255,
            0,
            0,
            0,
            0,
            0,
            (255 & t) / 255,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ],
          e
        );
      }),
      (e.prototype.greyscale = function (t, e) {
        this._loadMatrix(
          [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0],
          e
        );
      }),
      (e.prototype.blackAndWhite = function (t) {
        this._loadMatrix(
          [
            0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0,
            0, 1, 0,
          ],
          t
        );
      }),
      (e.prototype.hue = function (t, e) {
        var r = Math.cos((t = ((t || 0) / 180) * Math.PI)),
          i = Math.sin(t),
          n = 1 / 3,
          o = (0, Math.sqrt)(1 / 3);
        this._loadMatrix(
          [
            r + (1 - r) * n,
            n * (1 - r) - o * i,
            n * (1 - r) + o * i,
            0,
            0,
            n * (1 - r) + o * i,
            r + n * (1 - r),
            n * (1 - r) - o * i,
            0,
            0,
            n * (1 - r) - o * i,
            n * (1 - r) + o * i,
            r + n * (1 - r),
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ],
          e
        );
      }),
      (e.prototype.contrast = function (t, e) {
        var r = (t || 0) + 1,
          i = -0.5 * (r - 1);
        this._loadMatrix(
          [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0],
          e
        );
      }),
      (e.prototype.saturate = function (t, e) {
        void 0 === t && (t = 0);
        var r = (2 * t) / 3 + 1,
          i = -((r - 1) * 0.5);
        this._loadMatrix(
          [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0],
          e
        );
      }),
      (e.prototype.desaturate = function () {
        this.saturate(-1);
      }),
      (e.prototype.negative = function (t) {
        this._loadMatrix(
          [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0],
          t
        );
      }),
      (e.prototype.sepia = function (t) {
        this._loadMatrix(
          [
            0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0,
            0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
          ],
          t
        );
      }),
      (e.prototype.technicolor = function (t) {
        this._loadMatrix(
          [
            1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
            11.793603434377337, -0.3087833385928097, 1.7658908555458428,
            -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
            -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0,
            0, 1, 0,
          ],
          t
        );
      }),
      (e.prototype.polaroid = function (t) {
        this._loadMatrix(
          [
            1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016,
            -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
          ],
          t
        );
      }),
      (e.prototype.toBGR = function (t) {
        this._loadMatrix(
          [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
          t
        );
      }),
      (e.prototype.kodachrome = function (t) {
        this._loadMatrix(
          [
            1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
            63.72958762196502, -0.16404339962244616, 1.0835251566291304,
            -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
            -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0,
            0, 1, 0,
          ],
          t
        );
      }),
      (e.prototype.browni = function (t) {
        this._loadMatrix(
          [
            0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
            47.43192855600873, -0.037703249837783157, 0.8609577587992641,
            0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
            -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0,
            0, 0, 1, 0,
          ],
          t
        );
      }),
      (e.prototype.vintage = function (t) {
        this._loadMatrix(
          [
            0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
            9.651285835294123, 0.02578397704808868, 0.6441188644374771,
            0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
            -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0,
            0, 1, 0,
          ],
          t
        );
      }),
      (e.prototype.colorTone = function (t, e, r, i, n) {
        var o = (((r = r || 16770432) >> 16) & 255) / 255,
          s = ((r >> 8) & 255) / 255,
          a = (255 & r) / 255,
          h = (((i = i || 3375104) >> 16) & 255) / 255,
          u = ((i >> 8) & 255) / 255,
          l = (255 & i) / 255,
          c = [
            0.3,
            0.59,
            0.11,
            0,
            0,
            o,
            s,
            a,
            (t = t || 0.2),
            0,
            h,
            u,
            l,
            (e = e || 0.15),
            0,
            o - h,
            s - u,
            a - l,
            0,
            0,
          ];
        this._loadMatrix(c, n);
      }),
      (e.prototype.night = function (t, e) {
        var r = [
          -2 * (t = t || 0.1),
          -t,
          0,
          0,
          0,
          -t,
          0,
          t,
          0,
          0,
          0,
          t,
          2 * t,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
        ];
        this._loadMatrix(r, e);
      }),
      (e.prototype.predator = function (t, e) {
        this._loadMatrix(
          [
            11.224130630493164 * t,
            -4.794486999511719 * t,
            -2.8746118545532227 * t,
            0 * t,
            0.40342438220977783 * t,
            -3.6330697536468506 * t,
            9.193157196044922 * t,
            -2.951810836791992 * t,
            0 * t,
            -1.316135048866272 * t,
            -3.2184197902679443 * t,
            -4.2375030517578125 * t,
            7.476448059082031 * t,
            0 * t,
            0.8044459223747253 * t,
            0,
            0,
            0,
            1,
            0,
          ],
          e
        );
      }),
      (e.prototype.lsd = function (t) {
        this._loadMatrix(
          [
            2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0,
            0, 1, 0,
          ],
          t
        );
      }),
      (e.prototype.reset = function () {
        this._loadMatrix(
          [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          !1
        );
      }),
      Object.defineProperty(e.prototype, 'matrix', {
        get: function () {
          return this.uniforms.m;
        },
        set: function (t) {
          this.uniforms.m = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'alpha', {
        get: function () {
          return this.uniforms.uAlpha;
        },
        set: function (t) {
          this.uniforms.uAlpha = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })(t_.Filter);
rM.prototype.grayscale = rM.prototype.greyscale;
/*!
 * @pixi/filter-displacement - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  to = F('960oV'),
  rP = function (t, e) {
    return (rP =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
!(function (t) {
  function e(e, r) {
    var i = this,
      n = new to.Matrix();
    return (
      (e.renderable = !1),
      ((i =
        t.call(
          this,
          'attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n	gl_Position = filterVertexPosition();\n	vTextureCoord = filterTextureCoord();\n	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n',
          'varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n',
          {
            mapSampler: e._texture,
            filterMatrix: n,
            scale: { x: 1, y: 1 },
            rotation: new Float32Array([1, 0, 0, 1]),
          }
        ) || this).maskSprite = e),
      (i.maskMatrix = n),
      null == r && (r = 20),
      (i.scale = new to.Point(r, r)),
      i
    );
  }
  !(function (t, e) {
    function r() {
      this.constructor = t;
    }
    rP(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  })(e, t),
    (e.prototype.apply = function (t, e, r, i) {
      (this.uniforms.filterMatrix = t.calculateSpriteMatrix(
        this.maskMatrix,
        this.maskSprite
      )),
        (this.uniforms.scale.x = this.scale.x),
        (this.uniforms.scale.y = this.scale.y);
      var n = this.maskSprite.worldTransform,
        o = Math.sqrt(n.a * n.a + n.b * n.b),
        s = Math.sqrt(n.c * n.c + n.d * n.d);
      0 !== o &&
        0 !== s &&
        ((this.uniforms.rotation[0] = n.a / o),
        (this.uniforms.rotation[1] = n.b / o),
        (this.uniforms.rotation[2] = n.c / s),
        (this.uniforms.rotation[3] = n.d / s)),
        t.applyFilter(this, e, r, i);
    }),
    Object.defineProperty(e.prototype, 'map', {
      get: function () {
        return this.uniforms.mapSampler;
      },
      set: function (t) {
        this.uniforms.mapSampler = t;
      },
      enumerable: !1,
      configurable: !0,
    });
})(t_.Filter);
/*!
 * @pixi/filter-fxaa - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  rI = function (t, e) {
    return (rI =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
!(function (t, e) {
  function r() {
    this.constructor = t;
  }
  rI(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
})(function () {
  return (
    c.call(
      this,
      '\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n',
      'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'
    ) || this
  );
}, (c = t_.Filter));
/*!
 * @pixi/filter-noise - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  rw = function (t, e) {
    return (rw =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
!(function (t) {
  function e(e, r) {
    void 0 === e && (e = 0.5), void 0 === r && (r = Math.random());
    var i =
      t.call(
        this,
        t_.defaultFilterVertex,
        'precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n',
        { uNoise: 0, uSeed: 0 }
      ) || this;
    return (i.noise = e), (i.seed = r), i;
  }
  !(function (t, e) {
    function r() {
      this.constructor = t;
    }
    rw(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  })(e, t),
    Object.defineProperty(e.prototype, 'noise', {
      get: function () {
        return this.uniforms.uNoise;
      },
      set: function (t) {
        this.uniforms.uNoise = t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'seed', {
      get: function () {
        return this.uniforms.uSeed;
      },
      set: function (t) {
        this.uniforms.uSeed = t;
      },
      enumerable: !1,
      configurable: !0,
    });
})(t_.Filter);
/*!
 * @pixi/mixin-cache-as-bitmap - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  to = F('960oV'),
  ti = F('e70pz'),
  tn = F('8q0ed'),
  ta = F('6n98C'),
  rD = new to.Matrix();
(tc.prototype._cacheAsBitmap = !1),
  (tc.prototype._cacheData = null),
  (tc.prototype._cacheAsBitmapResolution = null),
  (tc.prototype._cacheAsBitmapMultisample = ta.MSAA_QUALITY.NONE);
var rC = function () {
  (this.textureCacheId = null),
    (this.originalRender = null),
    (this.originalRenderCanvas = null),
    (this.originalCalculateBounds = null),
    (this.originalGetLocalBounds = null),
    (this.originalUpdateTransform = null),
    (this.originalDestroy = null),
    (this.originalMask = null),
    (this.originalFilterArea = null),
    (this.originalContainsPoint = null),
    (this.sprite = null);
};
Object.defineProperties(tc.prototype, {
  cacheAsBitmapResolution: {
    get: function () {
      return this._cacheAsBitmapResolution;
    },
    set: function (t) {
      t !== this._cacheAsBitmapResolution &&
        ((this._cacheAsBitmapResolution = t),
        this.cacheAsBitmap &&
          ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
    },
  },
  cacheAsBitmapMultisample: {
    get: function () {
      return this._cacheAsBitmapMultisample;
    },
    set: function (t) {
      t !== this._cacheAsBitmapMultisample &&
        ((this._cacheAsBitmapMultisample = t),
        this.cacheAsBitmap &&
          ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
    },
  },
  cacheAsBitmap: {
    get: function () {
      return this._cacheAsBitmap;
    },
    set: function (t) {
      var e;
      this._cacheAsBitmap !== t &&
        ((this._cacheAsBitmap = t),
        t
          ? (this._cacheData || (this._cacheData = new rC()),
            ((e = this._cacheData).originalRender = this.render),
            (e.originalRenderCanvas = this.renderCanvas),
            (e.originalUpdateTransform = this.updateTransform),
            (e.originalCalculateBounds = this.calculateBounds),
            (e.originalGetLocalBounds = this.getLocalBounds),
            (e.originalDestroy = this.destroy),
            (e.originalContainsPoint = this.containsPoint),
            (e.originalMask = this._mask),
            (e.originalFilterArea = this.filterArea),
            (this.render = this._renderCached),
            (this.renderCanvas = this._renderCachedCanvas),
            (this.destroy = this._cacheAsBitmapDestroy))
          : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(),
            (this.render = e.originalRender),
            (this.renderCanvas = e.originalRenderCanvas),
            (this.calculateBounds = e.originalCalculateBounds),
            (this.getLocalBounds = e.originalGetLocalBounds),
            (this.destroy = e.originalDestroy),
            (this.updateTransform = e.originalUpdateTransform),
            (this.containsPoint = e.originalContainsPoint),
            (this._mask = e.originalMask),
            (this.filterArea = e.originalFilterArea)));
    },
  },
}),
  (tc.prototype._renderCached = function (t) {
    this.visible &&
      !(this.worldAlpha <= 0) &&
      this.renderable &&
      (this._initCachedDisplayObject(t),
      (this._cacheData.sprite.transform._worldID = this.transform._worldID),
      (this._cacheData.sprite.worldAlpha = this.worldAlpha),
      this._cacheData.sprite._render(t));
  }),
  (tc.prototype._initCachedDisplayObject = function (t) {
    if (!this._cacheData || !this._cacheData.sprite) {
      var e,
        r = this.alpha;
      (this.alpha = 1), t.batch.flush();
      var i = this.getLocalBounds(null, !0).clone();
      if (this.filters && this.filters.length) {
        var n = this.filters[0].padding;
        i.pad(n);
      }
      i.ceil(tn.settings.RESOLUTION);
      var o = t.renderTexture.current,
        s = t.renderTexture.sourceFrame.clone(),
        a = t.renderTexture.destinationFrame.clone(),
        h = t.projection.transform,
        u = (0, t_.RenderTexture).create({
          width: i.width,
          height: i.height,
          resolution: this.cacheAsBitmapResolution || t.resolution,
          multisample:
            null !== (e = this.cacheAsBitmapMultisample) && void 0 !== e
              ? e
              : t.multisample,
        }),
        l = 'cacheAsBitmap_' + (0, ti.uid)();
      (this._cacheData.textureCacheId = l),
        (0, t_.BaseTexture).addToCache(u.baseTexture, l),
        (0, t_.Texture).addToCache(u, l);
      var c = this.transform.localTransform
        .copyTo(rD)
        .invert()
        .translate(-i.x, -i.y);
      (this.render = this._cacheData.originalRender),
        t.render(this, {
          renderTexture: u,
          clear: !0,
          transform: c,
          skipUpdateTransform: !1,
        }),
        t.framebuffer.blit(),
        (t.projection.transform = h),
        t.renderTexture.bind(o, s, a),
        (this.render = this._renderCached),
        (this.updateTransform = this.displayObjectUpdateTransform),
        (this.calculateBounds = this._calculateCachedBounds),
        (this.getLocalBounds = this._getCachedLocalBounds),
        (this._mask = null),
        (this.filterArea = null),
        (this.alpha = r);
      var p = new ew(u);
      (p.transform.worldTransform = this.transform.worldTransform),
        (p.anchor.x = -(i.x / i.width)),
        (p.anchor.y = -(i.y / i.height)),
        (p.alpha = r),
        (p._bounds = this._bounds),
        (this._cacheData.sprite = p),
        (this.transform._parentID = -1),
        this.parent
          ? this.updateTransform()
          : (this.enableTempParent(),
            this.updateTransform(),
            this.disableTempParent(null)),
        (this.containsPoint = p.containsPoint.bind(p));
    }
  }),
  (tc.prototype._renderCachedCanvas = function (t) {
    this.visible &&
      !(this.worldAlpha <= 0) &&
      this.renderable &&
      (this._initCachedDisplayObjectCanvas(t),
      (this._cacheData.sprite.worldAlpha = this.worldAlpha),
      this._cacheData.sprite._renderCanvas(t));
  }),
  (tc.prototype._initCachedDisplayObjectCanvas = function (t) {
    if (!this._cacheData || !this._cacheData.sprite) {
      var e = this.getLocalBounds(null, !0),
        r = this.alpha;
      this.alpha = 1;
      var i = t.context,
        n = t._projTransform;
      e.ceil(tn.settings.RESOLUTION);
      var o = (0, t_.RenderTexture).create({
          width: e.width,
          height: e.height,
        }),
        s = 'cacheAsBitmap_' + (0, ti.uid)();
      (this._cacheData.textureCacheId = s),
        (0, t_.BaseTexture).addToCache(o.baseTexture, s),
        (0, t_.Texture).addToCache(o, s),
        this.transform.localTransform.copyTo(rD),
        rD.invert(),
        (rD.tx -= e.x),
        (rD.ty -= e.y),
        (this.renderCanvas = this._cacheData.originalRenderCanvas),
        t.render(this, {
          renderTexture: o,
          clear: !0,
          transform: rD,
          skipUpdateTransform: !1,
        }),
        (t.context = i),
        (t._projTransform = n),
        (this.renderCanvas = this._renderCachedCanvas),
        (this.updateTransform = this.displayObjectUpdateTransform),
        (this.calculateBounds = this._calculateCachedBounds),
        (this.getLocalBounds = this._getCachedLocalBounds),
        (this._mask = null),
        (this.filterArea = null),
        (this.alpha = r);
      var a = new ew(o);
      (a.transform.worldTransform = this.transform.worldTransform),
        (a.anchor.x = -(e.x / e.width)),
        (a.anchor.y = -(e.y / e.height)),
        (a.alpha = r),
        (a._bounds = this._bounds),
        (this._cacheData.sprite = a),
        (this.transform._parentID = -1),
        this.parent
          ? this.updateTransform()
          : ((this.parent = t._tempDisplayObjectParent),
            this.updateTransform(),
            (this.parent = null)),
        (this.containsPoint = a.containsPoint.bind(a));
    }
  }),
  (tc.prototype._calculateCachedBounds = function () {
    this._bounds.clear(),
      (this._cacheData.sprite.transform._worldID = this.transform._worldID),
      this._cacheData.sprite._calculateBounds(),
      (this._bounds.updateID = this._boundsID);
  }),
  (tc.prototype._getCachedLocalBounds = function () {
    return this._cacheData.sprite.getLocalBounds(null);
  }),
  (tc.prototype._destroyCachedDisplayObject = function () {
    this._cacheData.sprite._texture.destroy(!0),
      (this._cacheData.sprite = null),
      (0, t_.BaseTexture).removeFromCache(this._cacheData.textureCacheId),
      (0, t_.Texture).removeFromCache(this._cacheData.textureCacheId),
      (this._cacheData.textureCacheId = null);
  }),
  (tc.prototype._cacheAsBitmapDestroy = function (t) {
    (this.cacheAsBitmap = !1), this.destroy(t);
  }),
  (tc.prototype.name = null),
  (td.prototype.getChildByName = function (t, e) {
    for (var r = 0, i = this.children.length; r < i; r++)
      if (this.children[r].name === t) return this.children[r];
    if (e)
      for (var r = 0, i = this.children.length; r < i; r++) {
        var n = this.children[r];
        if (n.getChildByName) {
          var o = n.getChildByName(t, !0);
          if (o) return o;
        }
      }
    return null;
  });
/*!
 * @pixi/mixin-get-global-position - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var to = F('960oV');
tc.prototype.getGlobalPosition = function (t, e) {
  return (
    void 0 === t && (t = new to.Point()),
    void 0 === e && (e = !1),
    this.parent
      ? this.parent.toGlobal(this.position, t, e)
      : ((t.x = this.position.x), (t.y = this.position.y)),
    t
  );
};
/*!
 * @pixi/app - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  ti = F('e70pz'),
  rF = (function () {
    function t() {}
    return (
      (t.init = function (t) {
        var e = this;
        Object.defineProperty(this, 'resizeTo', {
          set: function (t) {
            globalThis.removeEventListener('resize', this.queueResize),
              (this._resizeTo = t),
              t &&
                (globalThis.addEventListener('resize', this.queueResize),
                this.resize());
          },
          get: function () {
            return this._resizeTo;
          },
        }),
          (this.queueResize = function () {
            e._resizeTo &&
              (e.cancelResize(),
              (e._resizeId = requestAnimationFrame(function () {
                return e.resize();
              })));
          }),
          (this.cancelResize = function () {
            e._resizeId &&
              (cancelAnimationFrame(e._resizeId), (e._resizeId = null));
          }),
          (this.resize = function () {
            if (e._resizeTo) {
              if ((e.cancelResize(), e._resizeTo === globalThis.window))
                (t = globalThis.innerWidth), (r = globalThis.innerHeight);
              else {
                var t,
                  r,
                  i = e._resizeTo,
                  n = i.clientWidth,
                  o = i.clientHeight;
                (t = n), (r = o);
              }
              e.renderer.resize(t, r);
            }
          }),
          (this._resizeId = null),
          (this._resizeTo = null),
          (this.resizeTo = t.resizeTo || null);
      }),
      (t.destroy = function () {
        globalThis.removeEventListener('resize', this.queueResize),
          this.cancelResize(),
          (this.cancelResize = null),
          (this.queueResize = null),
          (this.resizeTo = null),
          (this.resize = null);
      }),
      (t.extension = t_.ExtensionType.Application),
      t
    );
  })(),
  rN = (function () {
    function t(e) {
      var r = this;
      (this.stage = new td()),
        (e = Object.assign({ forceCanvas: !1 }, e)),
        (this.renderer = (0, t_.autoDetectRenderer)(e)),
        t._plugins.forEach(function (t) {
          t.init.call(r, e);
        });
    }
    return (
      (t.registerPlugin = function (t) {
        (0, ti.deprecation)(
          '6.5.0',
          'Application.registerPlugin() is deprecated, use extensions.add()'
        ),
          (0, t_.extensions).add({
            type: t_.ExtensionType.Application,
            ref: t,
          });
      }),
      (t.prototype.render = function () {
        this.renderer.render(this.stage);
      }),
      Object.defineProperty(t.prototype, 'view', {
        get: function () {
          return this.renderer.view;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'screen', {
        get: function () {
          return this.renderer.screen;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.destroy = function (e, r) {
        var i = this,
          n = t._plugins.slice(0);
        n.reverse(),
          n.forEach(function (t) {
            t.destroy.call(i);
          }),
          this.stage.destroy(r),
          (this.stage = null),
          this.renderer.destroy(e),
          (this.renderer = null);
      }),
      (t._plugins = []),
      t
    );
  })();
(0, t_.extensions).handleByList(t_.ExtensionType.Application, rN._plugins),
  (0, t_.extensions).add(rF),
  F('6n98C'),
  F('960oV');
/*!
 * @pixi/mesh-extras - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var ta = F('6n98C'),
  t_ = F('jH9fL'),
  rL = function (t, e) {
    return (rL =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
function rB(t, e) {
  function r() {
    this.constructor = t;
  }
  rL(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
var rG = (function (t) {
    function e(e, r, i, n) {
      void 0 === e && (e = 100),
        void 0 === r && (r = 100),
        void 0 === i && (i = 10),
        void 0 === n && (n = 10);
      var o = t.call(this) || this;
      return (
        (o.segWidth = i),
        (o.segHeight = n),
        (o.width = e),
        (o.height = r),
        o.build(),
        o
      );
    }
    return (
      rB(e, t),
      (e.prototype.build = function () {
        for (
          var t = this.segWidth * this.segHeight,
            e = [],
            r = [],
            i = [],
            n = this.segWidth - 1,
            o = this.segHeight - 1,
            s = this.width / n,
            a = this.height / o,
            h = 0;
          h < t;
          h++
        ) {
          var u = h % this.segWidth,
            l = (h / this.segWidth) | 0;
          e.push(u * s, l * a), r.push(u / n, l / o);
        }
        for (var c = n * o, h = 0; h < c; h++) {
          var p = h % n,
            f = (h / n) | 0,
            d = f * this.segWidth + p,
            _ = f * this.segWidth + p + 1,
            y = (f + 1) * this.segWidth + p,
            v = (f + 1) * this.segWidth + p + 1;
          i.push(d, _, y, _, v, y);
        }
        (this.buffers[0].data = new Float32Array(e)),
          (this.buffers[1].data = new Float32Array(r)),
          (this.indexBuffer.data = new Uint16Array(i)),
          this.buffers[0].update(),
          this.buffers[1].update(),
          this.indexBuffer.update();
      }),
      e
    );
  })(ra),
  rU = (function (t) {
    function e(e, r, i) {
      void 0 === e && (e = 200), void 0 === i && (i = 0);
      var n =
        t.call(
          this,
          new Float32Array(4 * r.length),
          new Float32Array(4 * r.length),
          new Uint16Array((r.length - 1) * 6)
        ) || this;
      return (n.points = r), (n._width = e), (n.textureScale = i), n.build(), n;
    }
    return (
      rB(e, t),
      Object.defineProperty(e.prototype, 'width', {
        get: function () {
          return this._width;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.build = function () {
        var t = this.points;
        if (t) {
          var e = this.getBuffer('aVertexPosition'),
            r = this.getBuffer('aTextureCoord'),
            i = this.getIndex();
          if (!(t.length < 1)) {
            e.data.length / 4 !== t.length &&
              ((e.data = new Float32Array(4 * t.length)),
              (r.data = new Float32Array(4 * t.length)),
              (i.data = new Uint16Array((t.length - 1) * 6)));
            var n = r.data,
              o = i.data;
            (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 1);
            for (
              var s = 0,
                a = t[0],
                h = this._width * this.textureScale,
                u = t.length,
                l = 0;
              l < u;
              l++
            ) {
              var c = 4 * l;
              if (this.textureScale > 0) {
                var p = a.x - t[l].x,
                  f = a.y - t[l].y,
                  d = Math.sqrt(p * p + f * f);
                (a = t[l]), (s += d / h);
              } else s = l / (u - 1);
              (n[c] = s), (n[c + 1] = 0), (n[c + 2] = s), (n[c + 3] = 1);
            }
            for (var _ = 0, l = 0; l < u - 1; l++) {
              var c = 2 * l;
              (o[_++] = c),
                (o[_++] = c + 1),
                (o[_++] = c + 2),
                (o[_++] = c + 2),
                (o[_++] = c + 1),
                (o[_++] = c + 3);
            }
            r.update(), i.update(), this.updateVertices();
          }
        }
      }),
      (e.prototype.updateVertices = function () {
        var t,
          e = this.points;
        if (!(e.length < 1)) {
          for (
            var r = e[0],
              i = 0,
              n = 0,
              o = this.buffers[0].data,
              s = e.length,
              a = 0;
            a < s;
            a++
          ) {
            var h = e[a],
              u = 4 * a;
            n = -((t = a < e.length - 1 ? e[a + 1] : h).x - r.x);
            var l = Math.sqrt((i = t.y - r.y) * i + n * n),
              c =
                this.textureScale > 0
                  ? (this.textureScale * this._width) / 2
                  : this._width / 2;
            (i /= l),
              (n /= l),
              (i *= c),
              (n *= c),
              (o[u] = h.x + i),
              (o[u + 1] = h.y + n),
              (o[u + 2] = h.x - i),
              (o[u + 3] = h.y - n),
              (r = h);
          }
          this.buffers[0].update();
        }
      }),
      (e.prototype.update = function () {
        this.textureScale > 0 ? this.build() : this.updateVertices();
      }),
      e
    );
  })(ra);
!(function (t) {
  function e(e, r, i) {
    void 0 === i && (i = 0);
    var n = this,
      o = new rU(e.height, r, i),
      s = new rs(e);
    return (
      i > 0 && (e.baseTexture.wrapMode = ta.WRAP_MODES.REPEAT),
      ((n = t.call(this, o, s) || this).autoUpdate = !0),
      n
    );
  }
  rB(e, t),
    (e.prototype._render = function (e) {
      var r = this.geometry;
      (this.autoUpdate || r._width !== this.shader.texture.height) &&
        ((r._width = this.shader.texture.height), r.update()),
        t.prototype._render.call(this, e);
    });
})(ro);
var rk = (function (t) {
  function e(e, r, i) {
    var n = this,
      o = new rG(e.width, e.height, r, i),
      s = new rs(t_.Texture.WHITE);
    return (
      ((n = t.call(this, o, s) || this).texture = e), (n.autoResize = !0), n
    );
  }
  return (
    rB(e, t),
    (e.prototype.textureUpdated = function () {
      this._textureID = this.shader.texture._updateID;
      var t = this.geometry,
        e = this.shader.texture,
        r = e.width,
        i = e.height;
      this.autoResize &&
        (t.width !== r || t.height !== i) &&
        ((t.width = this.shader.texture.width),
        (t.height = this.shader.texture.height),
        t.build());
    }),
    Object.defineProperty(e.prototype, 'texture', {
      get: function () {
        return this.shader.texture;
      },
      set: function (t) {
        this.shader.texture !== t &&
          ((this.shader.texture = t),
          (this._textureID = -1),
          t.baseTexture.valid
            ? this.textureUpdated()
            : t.once('update', this.textureUpdated, this));
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype._render = function (e) {
      this._textureID !== this.shader.texture._updateID &&
        this.textureUpdated(),
        t.prototype._render.call(this, e);
    }),
    (e.prototype.destroy = function (e) {
      this.shader.texture.off('update', this.textureUpdated, this),
        t.prototype.destroy.call(this, e);
    }),
    e
  );
})(ro);
!(function (t) {
  function e(e, r, i, n, o) {
    void 0 === e && (e = t_.Texture.EMPTY);
    var s = this,
      a = new ra(r, i, n);
    a.getBuffer('aVertexPosition').static = !1;
    var h = new rs(e);
    return ((s = t.call(this, a, h, null, o) || this).autoUpdate = !0), s;
  }
  rB(e, t),
    Object.defineProperty(e.prototype, 'vertices', {
      get: function () {
        return this.geometry.getBuffer('aVertexPosition').data;
      },
      set: function (t) {
        this.geometry.getBuffer('aVertexPosition').data = t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype._render = function (e) {
      this.autoUpdate && this.geometry.getBuffer('aVertexPosition').update(),
        t.prototype._render.call(this, e);
    });
})(ro),
  (function (t) {
    function e(e, r, i, n, o) {
      void 0 === r && (r = 10),
        void 0 === i && (i = 10),
        void 0 === n && (n = 10),
        void 0 === o && (o = 10);
      var s = t.call(this, t_.Texture.WHITE, 4, 4) || this;
      return (
        (s._origWidth = e.orig.width),
        (s._origHeight = e.orig.height),
        (s._width = s._origWidth),
        (s._height = s._origHeight),
        (s._leftWidth = r),
        (s._rightWidth = n),
        (s._topHeight = i),
        (s._bottomHeight = o),
        (s.texture = e),
        s
      );
    }
    rB(e, t),
      (e.prototype.textureUpdated = function () {
        (this._textureID = this.shader.texture._updateID), this._refresh();
      }),
      Object.defineProperty(e.prototype, 'vertices', {
        get: function () {
          return this.geometry.getBuffer('aVertexPosition').data;
        },
        set: function (t) {
          this.geometry.getBuffer('aVertexPosition').data = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.updateHorizontalVertices = function () {
        var t = this.vertices,
          e = this._getMinScale();
        (t[9] = t[11] = t[13] = t[15] = this._topHeight * e),
          (t[17] =
            t[19] =
            t[21] =
            t[23] =
              this._height - this._bottomHeight * e),
          (t[25] = t[27] = t[29] = t[31] = this._height);
      }),
      (e.prototype.updateVerticalVertices = function () {
        var t = this.vertices,
          e = this._getMinScale();
        (t[2] = t[10] = t[18] = t[26] = this._leftWidth * e),
          (t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e),
          (t[6] = t[14] = t[22] = t[30] = this._width);
      }),
      (e.prototype._getMinScale = function () {
        var t = this._leftWidth + this._rightWidth,
          e = this._width > t ? 1 : this._width / t,
          r = this._topHeight + this._bottomHeight;
        return Math.min(e, this._height > r ? 1 : this._height / r);
      }),
      Object.defineProperty(e.prototype, 'width', {
        get: function () {
          return this._width;
        },
        set: function (t) {
          (this._width = t), this._refresh();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'height', {
        get: function () {
          return this._height;
        },
        set: function (t) {
          (this._height = t), this._refresh();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'leftWidth', {
        get: function () {
          return this._leftWidth;
        },
        set: function (t) {
          (this._leftWidth = t), this._refresh();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'rightWidth', {
        get: function () {
          return this._rightWidth;
        },
        set: function (t) {
          (this._rightWidth = t), this._refresh();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'topHeight', {
        get: function () {
          return this._topHeight;
        },
        set: function (t) {
          (this._topHeight = t), this._refresh();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'bottomHeight', {
        get: function () {
          return this._bottomHeight;
        },
        set: function (t) {
          (this._bottomHeight = t), this._refresh();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype._refresh = function () {
        var t = this.texture,
          e = this.geometry.buffers[1].data;
        (this._origWidth = t.orig.width), (this._origHeight = t.orig.height);
        var r = 1 / this._origWidth,
          i = 1 / this._origHeight;
        (e[0] = e[8] = e[16] = e[24] = 0),
          (e[1] = e[3] = e[5] = e[7] = 0),
          (e[6] = e[14] = e[22] = e[30] = 1),
          (e[25] = e[27] = e[29] = e[31] = 1),
          (e[2] = e[10] = e[18] = e[26] = r * this._leftWidth),
          (e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth),
          (e[9] = e[11] = e[13] = e[15] = i * this._topHeight),
          (e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight),
          this.updateHorizontalVertices(),
          this.updateVerticalVertices(),
          this.geometry.buffers[0].update(),
          this.geometry.buffers[1].update();
      });
  })(rk),
  F('iLeV2');
/*!
 * @pixi/sprite-animated - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var t_ = F('jH9fL'),
  tv = F('2JyLN'),
  rX = function (t, e) {
    return (rX =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      })(t, e);
  };
!(function (t) {
  function e(e, r) {
    void 0 === r && (r = !0);
    var i =
      t.call(this, e[0] instanceof t_.Texture ? e[0] : e[0].texture) || this;
    return (
      (i._textures = null),
      (i._durations = null),
      (i._autoUpdate = r),
      (i._isConnectedToTicker = !1),
      (i.animationSpeed = 1),
      (i.loop = !0),
      (i.updateAnchor = !1),
      (i.onComplete = null),
      (i.onFrameChange = null),
      (i.onLoop = null),
      (i._currentTime = 0),
      (i._playing = !1),
      (i._previousFrame = null),
      (i.textures = e),
      i
    );
  }
  (function (t, e) {
    function r() {
      this.constructor = t;
    }
    rX(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  })(e, t),
    (e.prototype.stop = function () {
      this._playing &&
        ((this._playing = !1),
        this._autoUpdate &&
          this._isConnectedToTicker &&
          ((0, tv.Ticker).shared.remove(this.update, this),
          (this._isConnectedToTicker = !1)));
    }),
    (e.prototype.play = function () {
      this._playing ||
        ((this._playing = !0),
        !this._autoUpdate ||
          this._isConnectedToTicker ||
          ((0, tv.Ticker).shared.add(
            this.update,
            this,
            tv.UPDATE_PRIORITY.HIGH
          ),
          (this._isConnectedToTicker = !0)));
    }),
    (e.prototype.gotoAndStop = function (t) {
      this.stop();
      var e = this.currentFrame;
      (this._currentTime = t), e !== this.currentFrame && this.updateTexture();
    }),
    (e.prototype.gotoAndPlay = function (t) {
      var e = this.currentFrame;
      (this._currentTime = t),
        e !== this.currentFrame && this.updateTexture(),
        this.play();
    }),
    (e.prototype.update = function (t) {
      if (this._playing) {
        var e = this.animationSpeed * t,
          r = this.currentFrame;
        if (null !== this._durations) {
          var i = (this._currentTime % 1) * this._durations[this.currentFrame];
          for (i += (e / 60) * 1e3; i < 0; )
            this._currentTime--, (i += this._durations[this.currentFrame]);
          var n = Math.sign(this.animationSpeed * t);
          for (
            this._currentTime = Math.floor(this._currentTime);
            i >= this._durations[this.currentFrame];

          )
            (i -= this._durations[this.currentFrame] * n),
              (this._currentTime += n);
          this._currentTime += i / this._durations[this.currentFrame];
        } else this._currentTime += e;
        this._currentTime < 0 && !this.loop
          ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
          : this._currentTime >= this._textures.length && !this.loop
          ? (this.gotoAndStop(this._textures.length - 1),
            this.onComplete && this.onComplete())
          : r !== this.currentFrame &&
            (this.loop &&
              this.onLoop &&
              (this.animationSpeed > 0 && this.currentFrame < r
                ? this.onLoop()
                : this.animationSpeed < 0 &&
                  this.currentFrame > r &&
                  this.onLoop()),
            this.updateTexture());
      }
    }),
    (e.prototype.updateTexture = function () {
      var t = this.currentFrame;
      this._previousFrame !== t &&
        ((this._previousFrame = t),
        (this._texture = this._textures[t]),
        (this._textureID = -1),
        (this._textureTrimmedID = -1),
        (this._cachedTint = 16777215),
        (this.uvs = this._texture._uvs.uvsFloat32),
        this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor),
        this.onFrameChange && this.onFrameChange(this.currentFrame));
    }),
    (e.prototype.destroy = function (e) {
      this.stop(),
        t.prototype.destroy.call(this, e),
        (this.onComplete = null),
        (this.onFrameChange = null),
        (this.onLoop = null);
    }),
    (e.fromFrames = function (t) {
      for (var r = [], i = 0; i < t.length; ++i)
        r.push((0, t_.Texture).from(t[i]));
      return new e(r);
    }),
    (e.fromImages = function (t) {
      for (var r = [], i = 0; i < t.length; ++i)
        r.push((0, t_.Texture).from(t[i]));
      return new e(r);
    }),
    Object.defineProperty(e.prototype, 'totalFrames', {
      get: function () {
        return this._textures.length;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'textures', {
      get: function () {
        return this._textures;
      },
      set: function (t) {
        if (t[0] instanceof t_.Texture)
          (this._textures = t), (this._durations = null);
        else {
          (this._textures = []), (this._durations = []);
          for (var e = 0; e < t.length; e++)
            this._textures.push(t[e].texture), this._durations.push(t[e].time);
        }
        (this._previousFrame = null), this.gotoAndStop(0), this.updateTexture();
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'currentFrame', {
      get: function () {
        var t = Math.floor(this._currentTime) % this._textures.length;
        return t < 0 && (t += this._textures.length), t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'playing', {
      get: function () {
        return this._playing;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, 'autoUpdate', {
      get: function () {
        return this._autoUpdate;
      },
      set: function (t) {
        t !== this._autoUpdate &&
          ((this._autoUpdate = t),
          !this._autoUpdate && this._isConnectedToTicker
            ? ((0, tv.Ticker).shared.remove(this.update, this),
              (this._isConnectedToTicker = !1))
            : this._autoUpdate &&
              !this._isConnectedToTicker &&
              this._playing &&
              ((0, tv.Ticker).shared.add(this.update, this),
              (this._isConnectedToTicker = !0)));
      },
      enumerable: !1,
      configurable: !0,
    });
})(ew),
  F('8q0ed'),
  (0, t_.extensions).add(
    ty,
    tR,
    tS,
    ee,
    e1,
    t_.BatchRenderer,
    e7,
    rx,
    tK,
    t6,
    t5,
    e3,
    tv.TickerPlugin,
    tX
  ),
  Object.keys((p = t_)).forEach(function (t) {
    'default' === t ||
      '__esModule' === t ||
      Object.prototype.hasOwnProperty.call(L, t) ||
      Object.defineProperty(L, t, {
        enumerable: !0,
        get: function () {
          return p[t];
        },
      });
  });
const rj = new rN({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 2171169,
});
document.body.appendChild(rj.view),
  ((f = M || (M = {}))[(f.Sand = 0)] = 'Sand');
class rH {
  constructor(t, e, r, i) {
    (this.x = t),
      (this.y = e),
      (this.w = r),
      (this.color = i),
      (this.square = new eO()),
      this.square.drawRect(0, 0, r, r),
      (this.square.x = t),
      (this.square.y = e),
      (this.square.interactive = !0),
      (this.square.buttonMode = !0),
      (this.filled = !1),
      this.square.on('pointerdown', () => {
        this.setColor(rz), this.fill();
      });
  }
  addToStage(t) {
    t.addChild(this.square);
  }
  setColor(t) {
    this.color = t;
  }
}
const rY = document.getElementById('color-picker'),
  rV = document.getElementById('reset-color');
let rz = 14860356;
rY.addEventListener('input', () => {
  rz = parseInt(rY.value.slice(1), 16);
}),
  rV.addEventListener('click', () => {
    rz = 14860356;
  });
class rW extends rH {
  fill() {
    this.square.clear(),
      this.square.beginFill(this.color),
      this.square.drawRect(0, 0, this.w, this.w),
      this.square.endFill(),
      (this.filled = !0);
  }
  clear() {
    this.square.clear(),
      this.square.drawRect(0, 0, this.w, this.w),
      this.square.endFill(),
      (this.filled = !1);
  }
}
let rq = Math.floor(rj.renderer.width / 4),
  rK = Math.floor(rj.renderer.height / 4),
  rZ = Array.from({ length: rq }, () => Array(rK).fill(null));
for (let t = 0; t < rq; t++)
  for (let e = 0; e < rK; e++)
    (rZ[t][e] = new rW(4 * t, 4 * e, 4, 14860356)),
      rZ[t][e].addToStage(rj.stage);
let rQ = !1;
const rJ = document.getElementById('brush-size');
let r$ = 4;
rJ.addEventListener('input', () => {
  r$ = rJ.valueAsNumber;
});
let r0 = new eO();
function r1(t) {
  let e = rj.view.getBoundingClientRect(),
    r = t.clientX ?? t.touches[0].clientX,
    i = t.clientY ?? t.touches[0].clientY,
    n = r - e.left,
    o = i - e.top,
    s = Math.floor(n / 4),
    a = Math.floor(o / 4),
    h = Math.max(0, s - r$),
    u = Math.min(rq, s + r$),
    l = Math.max(0, a - r$),
    c = Math.min(rK, a + r$);
  for (let t = h; t < u; t++)
    for (let e = l; e < c; e++) {
      let r = t - s,
        i = e - a;
      Math.sqrt(r * r + i * i) <= r$ &&
        (rZ[t][e].setColor(rz), rZ[t][e].fill());
    }
}
function r2(t) {
  let e = rj.view.getBoundingClientRect(),
    r = t.clientX ?? t.touches[0].clientX,
    i = t.clientY ?? t.touches[0].clientY,
    n = r - e.left,
    o = i - e.top;
  r0.clear(), r0.lineStyle(1, 16777215), r0.drawCircle(n, o, 4 * r$);
}
rj.stage.addChild(r0),
  rj.view.addEventListener('mousedown', () => (rQ = !0)),
  rj.view.addEventListener('mousemove', (t) => {
    rQ && r1(t), r2(t);
  }),
  rj.view.addEventListener('mouseup', () => (rQ = !1)),
  rj.view.addEventListener('touchstart', () => (rQ = !0)),
  rj.view.addEventListener('touchmove', (t) => {
    rQ && r1(t), r2(t);
  }),
  rj.view.addEventListener('touchend', () => (rQ = !1));
const r3 = document.getElementById('gravity');
let r4 = 0.9;
r3.addEventListener('input', () => {
  r4 = r3.valueAsNumber;
}),
  requestAnimationFrame(function t() {
    (function () {
      for (let t = 0; t < rq; t++)
        for (let e = rK - 2; e >= 0; e--) {
          let r = rZ[t][e],
            i = rZ[t][e + 1];
          r.filled &&
            !i.filled &&
            Math.random() < r4 &&
            (r.clear(), i.setColor(r.color), i.fill());
        }
    })(),
      (function () {
        for (let t = 0; t < rq; t++)
          for (let e = rK - 1; e >= 0; e--) {
            let r = rZ[t][e];
            if (r.filled) {
              let i = e + 1 < rK ? rZ[t][e + 1] : null;
              if (i && i.filled) {
                let i = t + (0.5 > Math.random() ? -1 : 1);
                if (i >= 0 && i < rq) {
                  let t = rZ[i][e],
                    n = e + 1 < rK ? rZ[i][e + 1] : null;
                  t.filled ||
                    (n && n.filled) ||
                    (r.clear(), t.setColor(r.color), t.fill());
                }
              }
            }
          }
      })(),
      requestAnimationFrame(t);
  });
//# sourceMappingURL=index.8da6c2c6.js.map
