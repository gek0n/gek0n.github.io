/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */ !function(e) {
  var n =
      'object' == typeof window && window || 'object' == typeof self && self;
  'undefined' != typeof exports ? e(exports) :
                                  n &&
          (n.hljs = e({}),
           'function' == typeof define && define.amd && define([], function() {
             return n.hljs
           }))
}(function(e) {
  function n(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  function t(e) {
    return e.nodeName.toLowerCase()
  }

  function r(e, n) {
    var t = e && e.exec(n);
    return t && 0 === t.index
  }

  function a(e) {
    return k.test(e)
  }

  function i(e) {
    var n, t, r, i, o = e.className + ' ';
    if (o += e.parentNode ? e.parentNode.className : '', t = B.exec(o))
      return w(t[1]) ? t[1] : 'no-highlight';
    for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++)
      if (i = o[n], a(i) || w(i)) return i
  }

  function o(e) {
    var n, t = {}, r = Array.prototype.slice.call(arguments, 1);
    for (n in e) t[n] = e[n];
    return r.forEach(function(e) {
      for (n in e) t[n] = e[n]
    }),
           t
  }

  function u(e) {
    var n = [];
    return function r(e, a) {
      for (var i = e.firstChild; i; i = i.nextSibling)
        3 === i.nodeType ? a += i.nodeValue.length :
                           1 === i.nodeType &&
                (n.push({event: 'start', offset: a, node: i}), a = r(i, a),
                 t(i).match(/br|hr|img|input/) ||
                     n.push({event: 'stop', offset: a, node: i}));
      return a
    }(e, 0),
           n
  }

  function c(e, r, a) {
    function i() {
      return e.length && r.length ? e[0].offset !== r[0].offset ?
                                    e[0].offset < r[0].offset ? e : r :
                                    'start' === r[0].event ? e : r :
                                    e.length ? e : r
    }

    function o(e) {
      function r(e) {
        return ' ' + e.nodeName + '="' + n(e.value).replace('"', '&quot;') + '"'
      }
      s += '<' + t(e) + E.map.call(e.attributes, r).join('') + '>'
    }

    function u(e) {
      s += '</' + t(e) + '>'
    }

    function c(e) {
      ('start' === e.event ? o : u)(e.node)
    }
    for (var l = 0, s = '', f = []; e.length || r.length;) {
      var g = i();
      if (s += n(a.substring(l, g[0].offset)), l = g[0].offset, g === e) {
        f.reverse().forEach(u);
        do
          c(g.splice(0, 1)[0]), g = i();
        while (g === e && g.length && g[0].offset === l);
        f.reverse().forEach(o)
      } else
        'start' === g[0].event ? f.push(g[0].node) : f.pop(),
            c(g.splice(0, 1)[0])
    }
    return s + n(a.substr(l))
  }

  function l(e) {
    return e.v && !e.cached_variants &&
               (e.cached_variants = e.v.map(function(n) {
                 return o(e, {v: null}, n)
               })),
           e.cached_variants || e.eW && [o(e)] || [e]
  }

  function s(e) {
    function n(e) {
      return e && e.source || e
    }

    function t(t, r) {
      return new RegExp(n(t), 'm' + (e.cI ? 'i' : '') + (r ? 'g' : ''))
    }

    function r(a, i) {
      if (!a.compiled) {
        if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
          var o = {}, u = function(n, t) {
            e.cI && (t = t.toLowerCase()), t.split(' ').forEach(function(e) {
              var t = e.split('|');
              o[t[0]] = [n, t[1] ? Number(t[1]) : 1]
            })
          };
          'string' == typeof a.k ? u('keyword', a.k) :
                                   x(a.k).forEach(function(e) {
                                     u(e, a.k[e])
                                   }),
              a.k = o
        }
        a.lR = t(a.l || /\w+/, !0),
        i &&
            (a.bK && (a.b = '\\b(' + a.bK.split(' ').join('|') + ')\\b'),
             a.b || (a.b = /\B|\b/), a.bR = t(a.b),
             a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)),
             a.tE = n(a.e) || '',
             a.eW && i.tE && (a.tE += (a.e ? '|' : '') + i.tE)),
        a.i && (a.iR = t(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []),
        a.c = Array.prototype.concat.apply([], a.c.map(function(e) {
          return l('self' === e ? a : e)
        })),
        a.c.forEach(function(e) {
          r(e, a)
        }),
        a.starts && r(a.starts, i);
        var c = a.c.map(function(e) {
                     return e.bK ? '\\.?(' + e.b + ')\\.?' : e.b
                   })
                    .concat([a.tE, a.i])
                    .map(n)
                    .filter(Boolean);
        a.t = c.length ? t(c.join('|'), !0) : {
          exec: function() {
            return null
          }
        }
      }
    }
    r(e)
  }

  function f(e, t, a, i) {
    function o(e, n) {
      var t, a;
      for (t = 0, a = n.c.length; a > t; t++)
        if (r(n.c[t].bR, e)) return n.c[t]
    }

    function u(e, n) {
      if (r(e.eR, n)) {
        for (; e.endsParent && e.parent;) e = e.parent;
        return e
      }
      return e.eW ? u(e.parent, n) : void 0
    }

    function c(e, n) {
      return !a && r(n.iR, e)
    }

    function l(e, n) {
      var t = N.cI ? n[0].toLowerCase() : n[0];
      return e.k.hasOwnProperty(t) && e.k[t]
    }

    function p(e, n, t, r) {
      var a = r ? '' : I.classPrefix, i = '<span class="' + a, o = t ? '' : C;
      return i += e + '">', i + n + o
    }

    function h() {
      var e, t, r, a;
      if (!E.k) return n(k);
      for (a = '', t = 0, E.lR.lastIndex = 0, r = E.lR.exec(k); r;)
        a += n(k.substring(t, r.index)),
            e = l(E, r), e ? (B += e[1], a += p(e[0], n(r[0]))) : a += n(r[0]),
            t = E.lR.lastIndex, r = E.lR.exec(k);
      return a + n(k.substr(t))
    }

    function d() {
      var e = 'string' == typeof E.sL;
      if (e && !y[E.sL]) return n(k);
      var t = e ? f(E.sL, k, !0, x[E.sL]) : g(k, E.sL.length ? E.sL : void 0);
      return E.r > 0 && (B += t.r), e && (x[E.sL] = t.top),
             p(t.language, t.value, !1, !0)
    }

    function b() {
      L += null != E.sL ? d() : h(), k = ''
    }

    function v(e) {
      L += e.cN ? p(e.cN, '', !0) : '',
          E = Object.create(e, {parent: {value: E}})
    }

    function m(e, n) {
      if (k += e, null == n) return b(), 0;
      var t = o(n, E);
      if (t)
        return t.skip ? k += n :
                        (t.eB && (k += n), b(), t.rB || t.eB || (k = n)),
               v(t, n), t.rB ? 0 : n.length;
      var r = u(E, n);
      if (r) {
        var a = E;
        a.skip ? k += n : (a.rE || a.eE || (k += n), b(), a.eE && (k = n));
        do
          E.cN && (L += C), E.skip || (B += E.r), E = E.parent;
        while (E !== r.parent);
        return r.starts && v(r.starts, ''), a.rE ? 0 : n.length
      }
      if (c(n, E))
        throw new Error(
            'Illegal lexeme "' + n + '" for mode "' + (E.cN || '<unnamed>') +
            '"');
      return k += n, n.length || 1
    }
    var N = w(e);
    if (!N) throw new Error('Unknown language: "' + e + '"');
    s(N);
    var R, E = i || N, x = {}, L = '';
    for (R = E; R !== N; R = R.parent) R.cN && (L = p(R.cN, '', !0) + L);
    var k = '', B = 0;
    try {
      for (var M, j, O = 0;;) {
        if (E.t.lastIndex = O, M = E.t.exec(t), !M) break;
        j = m(t.substring(O, M.index), M[0]), O = M.index + j
      }
      for (m(t.substr(O)), R = E; R.parent; R = R.parent) R.cN && (L += C);
      return {
        r: B, value: L, language: e, top: E
      }
    } catch (T) {
      if (T.message && -1 !== T.message.indexOf('Illegal'))
        return {r: 0, value: n(t)};
      throw T
    }
  }

  function g(e, t) {
    t = t || I.languages || x(y);
    var r = {r: 0, value: n(e)}, a = r;
    return t.filter(w).forEach(function(n) {
      var t = f(n, e, !1);
      t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
    }),
           a.language && (r.second_best = a), r
  }

  function p(e) {
    return I.tabReplace || I.useBR ? e.replace(M, function(e, n) {
      return I.useBR && '\n' === e ?
          '<br>' :
          I.tabReplace ? n.replace(/\t/g, I.tabReplace) : ''
    }) : e
  }

  function h(e, n, t) {
    var r = n ? L[n] : t, a = [e.trim()];
    return e.match(/\bhljs\b/) || a.push('hljs'),
           -1 === e.indexOf(r) && a.push(r), a.join(' ').trim()
  }

  function d(e) {
    var n, t, r, o, l, s = i(e);
    a(s) ||
        (I.useBR ? (n = document.createElementNS(
                        'http://www.w3.org/1999/xhtml', 'div'),
                    n.innerHTML = e.innerHTML.replace(/\n/g, '').replace(
                        /<br[ \/]*>/g, '\n')) :
                   n = e,
         l = n.textContent, r = s ? f(s, l, !0) : g(l), t = u(n),
         t.length &&
             (o = document.createElementNS(
                  'http://www.w3.org/1999/xhtml', 'div'),
              o.innerHTML = r.value, r.value = c(t, u(o), l)),
         r.value = p(r.value), e.innerHTML = r.value,
         e.className = h(e.className, s, r.language),
         e.result = {language: r.language, re: r.r},
         r.second_best && (e.second_best = {
           language: r.second_best.language,
           re: r.second_best.r
         }))
  }

  function b(e) {
    I = o(I, e)
  }

  function v() {
    if (!v.called) {
      v.called = !0;
      var e = document.querySelectorAll('pre code');
      E.forEach.call(e, d)
    }
  }

  function m() {
    addEventListener('DOMContentLoaded', v, !1), addEventListener('load', v, !1)
  }

  function N(n, t) {
    var r = y[n] = t(e);
    r.aliases && r.aliases.forEach(function(e) {
      L[e] = n
    })
  }

  function R() {
    return x(y)
  }

  function w(e) {
    return e = (e || '').toLowerCase(), y[e] || y[L[e]]
  }
  var E = [], x = Object.keys, y = {}, L = {},
      k = /^(no-?highlight|plain|text)$/i, B = /\blang(?:uage)?-([\w-]+)\b/i,
      M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, C = '</span>', I = {
        classPrefix: 'hljs-',
        tabReplace: null,
        useBR: !1,
        languages: void 0
      };
  return e.highlight = f, e.highlightAuto = g, e.fixMarkup = p,
         e.highlightBlock = d, e.configure = b, e.initHighlighting = v,
         e.initHighlightingOnLoad = m, e.registerLanguage = N,
         e.listLanguages = R, e.getLanguage = w, e.inherit = o,
         e.IR = '[a-zA-Z]\\w*', e.UIR = '[a-zA-Z_]\\w*',
         e.NR = '\\b\\d+(\\.\\d+)?',
         e.CNR =
             '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
         e.BNR = '\\b(0b[01]+)',
         e.RSR =
             '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
         e.BE = {b: '\\\\[\\s\\S]', r: 0},
         e.ASM = {cN: 'string', b: '\'', e: '\'', i: '\\n', c: [e.BE]},
         e.QSM = {cN: 'string', b: '"', e: '"', i: '\\n', c: [e.BE]}, e.PWM = {
           b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
         },
         e.C =
             function(n, t, r) {
           var a = e.inherit({cN: 'comment', b: n, e: t, c: []}, r || {});
           return a.c.push(e.PWM),
                  a.c.push(
                      {cN: 'doctag', b: '(?:TODO|FIXME|NOTE|BUG|XXX):', r: 0}),
                  a
         },
         e.CLCM = e.C('//', '$'), e.CBCM = e.C('/\\*', '\\*/'),
         e.HCM = e.C('#', '$'), e.NM = {cN: 'number', b: e.NR, r: 0},
         e.CNM = {cN: 'number', b: e.CNR, r: 0},
         e.BNM = {cN: 'number', b: e.BNR, r: 0}, e.CSSNM = {
           cN: 'number',
           b: e.NR +
               '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
           r: 0
         },
         e.RM = {
           cN: 'regexp',
           b: /\//,
           e: /\/[gimuy]*/,
           i: /\n/,
           c: [e.BE, {b: /\[/, e: /\]/, r: 0, c: [e.BE]}]
         },
         e.TM = {cN: 'title', b: e.IR, r: 0},
         e.UTM = {cN: 'title', b: e.UIR, r: 0},
         e.METHOD_GUARD = {b: '\\.\\s*' + e.UIR, r: 0}, e
});
hljs.registerLanguage('r', function(e) {
  var r = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';
  return {
    c: [
      e.HCM, {
        b: r,
        l: r,
        k: {
          keyword:
              'function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...',
          literal:
              'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10'
        },
        r: 0
      },
      {cN: 'number', b: '0[xX][0-9a-fA-F]+[Li]?\\b', r: 0},
      {cN: 'number', b: '\\d+(?:[eE][+\\-]?\\d*)?L\\b', r: 0},
      {cN: 'number', b: '\\d+\\.(?!\\d)(?:i\\b)?', r: 0},
      {cN: 'number', b: '\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b', r: 0},
      {cN: 'number', b: '\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b', r: 0},
      {b: '`', e: '`', r: 0},
      {cN: 'string', c: [e.BE], v: [{b: '"', e: '"'}, {b: '\'', e: '\''}]}
    ]
  }
});
hljs.registerLanguage('rust', function(e) {
  var t = '([ui](8|16|32|64|128|size)|f(32|64))?',
      r = 'alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield move default',
      n = 'drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
  return {
    aliases: ['rs'],
        k: {keyword: r, literal: 'true false Some None Ok Err', built_in: n},
        l: e.IR + '!?', i: '</', c: [
          e.CLCM, e.C('/\\*', '\\*/', {c: ['self']}),
          e.inherit(e.QSM, {b: /b?"/, i: null}), {
            cN: 'string',
            v: [
              {b: /r(#*)"(.|\n)*?"\1(?!#)/},
              {b: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}
            ]
          },
          {cN: 'symbol', b: /'[a-zA-Z_][a-zA-Z0-9_]*/}, {
            cN: 'number',
            v: [
              {b: '\\b0b([01_]+)' + t}, {b: '\\b0o([0-7_]+)' + t},
              {b: '\\b0x([A-Fa-f0-9_]+)' + t},
              {b: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' + t}
            ],
            r: 0
          },
          {cN: 'function', bK: 'fn', e: '(\\(|<)', eE: !0, c: [e.UTM]}, {
            cN: 'meta',
            b: '#\\!?\\[',
            e: '\\]',
            c: [{cN: 'meta-string', b: /"/, e: /"/}]
          },
          {
            cN: 'class',
            bK: 'type',
            e: ';',
            c: [e.inherit(e.UTM, {endsParent: !0})],
            i: '\\S'
          },
          {
            cN: 'class',
            bK: 'trait enum struct union',
            e: '{',
            c: [e.inherit(e.UTM, {endsParent: !0})],
            i: '[\\w\\d]'
          },
          {b: e.IR + '::', k: {built_in: n}}, {b: '->'}
        ]
  }
});
hljs.registerLanguage('matlab', function(e) {
  var a = [e.CNM, {cN: 'string', b: '\'', e: '\'', c: [e.BE, {b: '\'\''}]}],
      s = {r: 0, c: [{b: /'['\.]*/}]};
  return {
    k: {
      keyword:
          'break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while',
      built_in:
          'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson'
    },
        i: '(//|"|#|/\\*|\\s+/\\w+)', c: [
          {
            cN: 'function',
            bK: 'function',
            e: '$',
            c: [
              e.UTM,
              {cN: 'params', v: [{b: '\\(', e: '\\)'}, {b: '\\[', e: '\\]'}]}
            ]
          },
          {
            b: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
            rB: !0,
            r: 0,
            c: [{b: /[a-zA-Z_][a-zA-Z_0-9]*/, r: 0}, s.c[0]]
          },
          {b: '\\[', e: '\\]', c: a, r: 0, starts: s},
          {b: '\\{', e: /}/, c: a, r: 0, starts: s}, {b: /\)/, r: 0, starts: s},
          e.C('^\\s*\\%\\{\\s*$', '^\\s*\\%\\}\\s*$'), e.C('\\%', '$')
        ].concat(a)
  }
});
hljs.registerLanguage('fortran', function(e) {
  var t = {cN: 'params', b: '\\(', e: '\\)'}, n = {
    literal: '.False. .True.',
    keyword:
        'kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data',
    built_in:
        'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image'
  };
  return {
    cI: !0, aliases: ['f90', 'f95'], k: n, i: /\/\*/, c: [
      e.inherit(e.ASM, {cN: 'string', r: 0}),
      e.inherit(e.QSM, {cN: 'string', r: 0}), {
        cN: 'function',
        bK: 'subroutine function program',
        i: '[${=\\n]',
        c: [e.UTM, t]
      },
      e.C('!', '$', {r: 0}), {
        cN: 'number',
        b: '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
        r: 0
      }
    ]
  }
});
hljs.registerLanguage('ini', function(e) {
  var b = {
    cN: 'string',
    c: [e.BE],
    v: [
      {b: '\'\'\'', e: '\'\'\'', r: 10}, {b: '"""', e: '"""', r: 10},
      {b: '"', e: '"'}, {b: '\'', e: '\''}
    ]
  };
  return {
    aliases: ['toml'], cI: !0, i: /\S/, c: [
      e.C(';', '$'), e.HCM, {cN: 'section', b: /^\s*\[+/, e: /\]+/}, {
        b: /^[a-z0-9\[\]_-]+\s*=\s*/,
        e: '$',
        rB: !0,
        c: [
          {cN: 'attr', b: /[a-z0-9\[\]_-]+/}, {
            b: /=/,
            eW: !0,
            r: 0,
            c: [
              {cN: 'literal', b: /\bon|off|true|false|yes|no\b/}, {
                cN: 'variable',
                v: [{b: /\$[\w\d"][\w\d_]*/}, {b: /\$\{(.*?)}/}]
              },
              b, {cN: 'number', b: /([\+\-]+)?[\d]+_[\d_]+/}, e.NM
            ]
          }
        ]
      }
    ]
  }
});
hljs.registerLanguage('smalltalk', function(e) {
  var s = '[a-z][a-zA-Z0-9_]*', a = {cN: 'string', b: '\\$.{1}'},
      r = {cN: 'symbol', b: '#' + e.UIR};
  return {
    aliases: ['st'], k: 'self super nil true false thisContext', c: [
      e.C('"', '"'), e.ASM, {cN: 'type', b: '\\b[A-Z][A-Za-z0-9_]*', r: 0},
      {b: s + ':', r: 0}, e.CNM, r, a, {
        b: '\\|[ ]*' + s + '([ ]+' + s + ')*[ ]*\\|',
        rB: !0,
        e: /\|/,
        i: /\S/,
        c: [{b: '(\\|[ ]*)?' + s}]
      },
      {b: '\\#\\(', e: '\\)', c: [e.ASM, a, e.CNM, r]}
    ]
  }
});
hljs.registerLanguage('coffeescript', function(e) {
  var c = {
    keyword:
        'in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not',
    literal: 'true false null undefined yes no on off',
    built_in: 'npm require console print module global window document'
  },
      n = '[A-Za-z$_][0-9A-Za-z$_]*', r = {cN: 'subst', b: /#\{/, e: /}/, k: c},
      i = [
        e.BNM, e.inherit(e.CNM, {starts: {e: '(\\s*/)?', r: 0}}), {
          cN: 'string',
          v: [
            {b: /'''/, e: /'''/, c: [e.BE]}, {b: /'/, e: /'/, c: [e.BE]},
            {b: /"""/, e: /"""/, c: [e.BE, r]}, {b: /"/, e: /"/, c: [e.BE, r]}
          ]
        },
        {
          cN: 'regexp',
          v: [
            {b: '///', e: '///', c: [r, e.HCM]}, {b: '//[gim]*', r: 0},
            {b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}
          ]
        },
        {b: '@' + n}, {
          sL: 'javascript',
          eB: !0,
          eE: !0,
          v: [{b: '```', e: '```'}, {b: '`', e: '`'}]
        }
      ];
  r.c = i;
  var s = e.inherit(e.TM, {b: n}), t = '(\\(.*\\))?\\s*\\B[-=]>', o = {
    cN: 'params',
    b: '\\([^\\(]',
    rB: !0,
    c: [{b: /\(/, e: /\)/, k: c, c: ['self'].concat(i)}]
  };
  return {
    aliases: ['coffee', 'cson', 'iced'], k: c, i: /\/\*/, c: i.concat([
      e.C('###', '###'), e.HCM, {
        cN: 'function',
        b: '^\\s*' + n + '\\s*=\\s*' + t,
        e: '[-=]>',
        rB: !0,
        c: [s, o]
      },
      {
        b: /[:\(,=]\s*/,
        r: 0,
        c: [{cN: 'function', b: t, e: '[-=]>', rB: !0, c: [o]}]
      },
      {
        cN: 'class',
        bK: 'class',
        e: '$',
        i: /[:="\[\]]/,
        c: [{bK: 'extends', eW: !0, i: /[:="\[\]]/, c: [s]}, s]
      },
      {b: n + ':', e: ':', rB: !0, rE: !0, r: 0}
    ])
  }
});
hljs.registerLanguage('erlang-repl', function(e) {
  return {
    k: {
      built_in: 'spawn spawn_link self',
      keyword:
          'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor'
    },
        c: [
          {cN: 'meta', b: '^[0-9]+> ', r: 10}, e.C('%', '$'), {
            cN: 'number',
            b: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
            r: 0
          },
          e.ASM, e.QSM, {b: '\\?(::)?([A-Z]\\w*(::)?)+'}, {b: '->'}, {b: 'ok'},
          {b: '!'}, {
            b: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
            r: 0
          },
          {b: '[A-Z][a-zA-Z0-9_\']*', r: 0}
        ]
  }
});
hljs.registerLanguage('apache', function(e) {
  var r = {cN: 'number', b: '[\\$%]\\d+'};
  return {
    aliases: ['apacheconf'], cI: !0,
        c:
            [
              e.HCM, {cN: 'section', b: '</?', e: '>'}, {
                cN: 'attribute',
                b: /\w+/,
                r: 0,
                k: {
                  nomarkup:
                      'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername'
                },
                starts: {
                  e: /$/,
                  r: 0,
                  k: {literal: 'on off all'},
                  c: [
                    {cN: 'meta', b: '\\s\\[', e: '\\]$'},
                    {cN: 'variable', b: '[\\$%]\\{', e: '\\}', c: ['self', r]},
                    r, e.QSM
                  ]
                }
              }
            ],
        i: /\S/
  }
});
hljs.registerLanguage('cpp', function(t) {
  var e = {cN: 'keyword', b: '\\b[a-z\\d_]*_t\\b'}, r = {
    cN: 'string',
    v: [
      {b: '(u8?|U)?L?"', e: '"', i: '\\n', c: [t.BE]},
      {b: '(u8?|U)?R"', e: '"', c: [t.BE]}, {b: '\'\\\\?.', e: '\'', i: '.'}
    ]
  },
      s = {
        cN: 'number',
        v: [
          {b: '\\b(0b[01\']+)'}, {
            b: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)'
          },
          {
            b: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)'
          }
        ],
        r: 0
      },
      i = {
        cN: 'meta',
        b: /#\s*[a-z]+\b/,
        e: /$/,
        k: {
          'meta-keyword':
              'if else elif endif define undef warning error line pragma ifdef ifndef include'
        },
        c: [
          {b: /\\\n/, r: 0}, t.inherit(r, {cN: 'meta-string'}),
          {cN: 'meta-string', b: /<[^\n>]*>/, e: /$/, i: '\\n'}, t.CLCM, t.CBCM
        ]
      },
      a = t.IR + '\\s*\\(', c = {
        keyword:
            'int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not',
        built_in:
            'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr',
        literal: 'true false nullptr NULL'
      },
      n = [e, t.CLCM, t.CBCM, s, r];
  return {
    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'], k: c, i: '</', c: n.concat([
      i, {
        b: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
        e: '>',
        k: c,
        c: ['self', e]
      },
      {b: t.IR + '::', k: c}, {
        v: [
          {b: /=/, e: /;/}, {b: /\(/, e: /\)/},
          {bK: 'new throw return else', e: /;/}
        ],
        k: c,
        c: n.concat([{b: /\(/, e: /\)/, k: c, c: n.concat(['self']), r: 0}]),
        r: 0
      },
      {
        cN: 'function',
        b: '(' + t.IR + '[\\*&\\s]+)+' + a,
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: c,
        i: /[^\w\s\*&]/,
        c: [
          {b: a, rB: !0, c: [t.TM], r: 0}, {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            k: c,
            r: 0,
            c: [t.CLCM, t.CBCM, r, s, e]
          },
          t.CLCM, t.CBCM, i
        ]
      },
      {
        cN: 'class',
        bK: 'class struct',
        e: /[{;:]/,
        c: [{b: /</, e: />/, c: ['self']}, t.TM]
      }
    ]),
        exports: {preprocessor: i, strings: r, k: c}
  }
});
hljs.registerLanguage('arduino', function(e) {
  var t = e.getLanguage('cpp').exports;
  return {
    k: {
      keyword: 'boolean byte word string String array ' + t.k.keyword,
      built_in:
          'setup loop while catch for if do goto try switch case else default break continue return KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put',
      literal:
          'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW'
    },
        c: [t.preprocessor, e.CLCM, e.CBCM, e.ASM, e.QSM, e.CNM]
  }
});
hljs.registerLanguage('xml', function(s) {
  var e = '[A-Za-z0-9\\._:-]+', t = {
    eW: !0,
    i: /</,
    r: 0,
    c: [
      {cN: 'attr', b: e, r: 0}, {
        b: /=\s*/,
        r: 0,
        c: [{
          cN: 'string',
          endsParent: !0,
          v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s"'=<>`]+/}]
        }]
      }
    ]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
        cI: !0, c: [
          {
            cN: 'meta',
            b: '<!DOCTYPE',
            e: '>',
            r: 10,
            c: [{b: '\\[', e: '\\]'}]
          },
          s.C('<!--', '-->', {r: 10}),
          {b: '<\\!\\[CDATA\\[', e: '\\]\\]>', r: 10}, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: 'php',
            c: [{b: '/\\*', e: '\\*/', skip: !0}]
          },
          {
            cN: 'tag',
            b: '<style(?=\\s|>|$)',
            e: '>',
            k: {name: 'style'},
            c: [t],
            starts: {e: '</style>', rE: !0, sL: ['css', 'xml']}
          },
          {
            cN: 'tag',
            b: '<script(?=\\s|>|$)',
            e: '>',
            k: {name: 'script'},
            c: [t],
            starts: {
              e: '</script>',
              rE: !0,
              sL: ['actionscript', 'javascript', 'handlebars', 'xml']
            }
          },
          {
            cN: 'meta',
            v: [{b: /<\?xml/, e: /\?>/, r: 10}, {b: /<\?\w+/, e: /\?>/}]
          },
          {
            cN: 'tag',
            b: '</?',
            e: '/?>',
            c: [{cN: 'name', b: /[^\/><\s]+/, r: 0}, t]
          }
        ]
  }
});
hljs.registerLanguage('markdown', function(e) {
  return {
    aliases: ['md', 'mkdown', 'mkd'], c: [
      {cN: 'section', v: [{b: '^#{1,6}', e: '$'}, {b: '^.+?\\n[=-]{2,}$'}]},
      {b: '<', e: '>', sL: 'xml', r: 0},
      {cN: 'bullet', b: '^([*+-]|(\\d+\\.))\\s+'},
      {cN: 'strong', b: '[*_]{2}.+?[*_]{2}'},
      {cN: 'emphasis', v: [{b: '\\*.+?\\*'}, {b: '_.+?_', r: 0}]},
      {cN: 'quote', b: '^>\\s+', e: '$'}, {
        cN: 'code',
        v: [
          {b: '^```w*s*$', e: '^```s*$'}, {b: '`.+?`'},
          {b: '^( {4}|	)', e: '$', r: 0}
        ]
      },
      {b: '^[-\\*]{3,}', e: '$'}, {
        b: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
        rB: !0,
        c: [
          {cN: 'string', b: '\\[', e: '\\]', eB: !0, rE: !0, r: 0},
          {cN: 'link', b: '\\]\\(', e: '\\)', eB: !0, eE: !0},
          {cN: 'symbol', b: '\\]\\[', e: '\\]', eB: !0, eE: !0}
        ],
        r: 10
      },
      {
        b: /^\[[^\n]+\]:/,
        rB: !0,
        c: [
          {cN: 'symbol', b: /\[/, e: /\]/, eB: !0, eE: !0},
          {cN: 'link', b: /:\s*/, e: /$/, eB: !0}
        ]
      }
    ]
  }
});
hljs.registerLanguage('python', function(e) {
  var r = {
    keyword:
        'and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False',
    built_in: 'Ellipsis NotImplemented'
  },
      b = {cN: 'meta', b: /^(>>>|\.\.\.) /},
      c = {cN: 'subst', b: /\{/, e: /\}/, k: r, i: /#/}, a = {
        cN: 'string',
        c: [e.BE],
        v: [
          {b: /(u|b)?r?'''/, e: /'''/, c: [b], r: 10},
          {b: /(u|b)?r?"""/, e: /"""/, c: [b], r: 10},
          {b: /(fr|rf|f)'''/, e: /'''/, c: [b, c]},
          {b: /(fr|rf|f)"""/, e: /"""/, c: [b, c]},
          {b: /(u|r|ur)'/, e: /'/, r: 10}, {b: /(u|r|ur)"/, e: /"/, r: 10},
          {b: /(b|br)'/, e: /'/}, {b: /(b|br)"/, e: /"/},
          {b: /(fr|rf|f)'/, e: /'/, c: [c]}, {b: /(fr|rf|f)"/, e: /"/, c: [c]},
          e.ASM, e.QSM
        ]
      },
      s = {
        cN: 'number',
        r: 0,
        v: [
          {b: e.BNR + '[lLjJ]?'}, {b: '\\b(0o[0-7]+)[lLjJ]?'},
          {b: e.CNR + '[lLjJ]?'}
        ]
      },
      i = {cN: 'params', b: /\(/, e: /\)/, c: ['self', b, s, a]};
  return c.c = [a, s, b], {
    aliases: ['py', 'gyp'], k: r, i: /(<\/|->|\?)|=>/, c: [
      b, s, a, e.HCM, {
        v: [{cN: 'function', bK: 'def'}, {cN: 'class', bK: 'class'}],
        e: /:/,
        i: /[${=;\n,]/,
        c: [e.UTM, i, {b: /->/, eW: !0, k: 'None'}]
      },
      {cN: 'meta', b: /^[\t ]*@/, e: /$/}, {b: /\b(print|exec)\(/}
    ]
  }
});
hljs.registerLanguage('delphi', function(e) {
  var r = 'exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ',
      t = [e.CLCM, e.C(/\{/, /\}/, {r: 0}), e.C(/\(\*/, /\*\)/, {r: 10})],
      a = {cN: 'meta', v: [{b: /\{\$/, e: /\}/}, {b: /\(\*\$/, e: /\*\)/}]},
      c = {cN: 'string', b: /'/, e: /'/, c: [{b: /''/}]},
      i = {cN: 'string', b: /(#\d+)+/},
      o = {b: e.IR + '\\s*=\\s*class\\s*\\(', rB: !0, c: [e.TM]}, n = {
        cN: 'function',
        bK: 'function constructor destructor procedure',
        e: /[:;]/,
        k: 'function constructor|10 destructor|10 procedure|10',
        c: [
          e.TM, {cN: 'params', b: /\(/, e: /\)/, k: r, c: [c, i, a].concat(t)},
          a
        ].concat(t)
      };
  return {
    aliases:
        ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],
        cI: !0, k: r, i: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
        c: [c, i, e.NM, o, n, a].concat(t)
  }
});
hljs.registerLanguage('scheme', function(e) {
  var t = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+',
      r = '(\\-|\\+)?\\d+([./]\\d+)?', a = r + '[+\\-]' + r + 'i', i = {
        'builtin-name':
            'case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules \' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?'
      },
      n = {cN: 'meta', b: '^#!', e: '$'},
      c = {cN: 'literal', b: '(#t|#f|#\\\\' + t + '|#\\\\.)'}, l = {
        cN: 'number',
        v: [
          {b: r, r: 0}, {b: a, r: 0}, {b: '#b[0-1]+(/[0-1]+)?'},
          {b: '#o[0-7]+(/[0-7]+)?'}, {b: '#x[0-9a-f]+(/[0-9a-f]+)?'}
        ]
      },
      s = e.QSM, o = [e.C(';', '$', {r: 0}), e.C('#\\|', '\\|#')],
      u = {b: t, r: 0}, p = {cN: 'symbol', b: '\'' + t}, d = {eW: !0, r: 0},
      m = {
        v: [{b: /'/}, {b: '`'}],
        c: [{b: '\\(', e: '\\)', c: ['self', c, s, l, u, p]}]
      },
      g = {cN: 'name', b: t, l: t, k: i}, h = {
        b: /lambda/,
        eW: !0,
        rB: !0,
        c: [g, {b: /\(/, e: /\)/, endsParent: !0, c: [u]}]
      },
      b = {v: [{b: '\\(', e: '\\)'}, {b: '\\[', e: '\\]'}], c: [h, g, d]};
  return d.c = [c, l, s, u, p, m, b].concat(o), {
    i: /\S/, c: [n, l, s, p, m, b].concat(o)
  }
});
hljs.registerLanguage('dos', function(e) {
  var r = e.C(/^\s*@?rem\b/, /$/, {r: 10}), t = {
    cN: 'symbol',
    b: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
    r: 0
  };
  return {
    aliases: ['bat', 'cmd'], cI: !0, i: /\/\*/, k: {
      keyword:
          'if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq',
      built_in:
          'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del'
    },
        c: [
          {cN: 'variable', b: /%%[^ ]|%[^ ]+?%|![^ ]+?!/}, {
            cN: 'function',
            b: t.b,
            e: 'goto:eof',
            c: [
              e.inherit(
                  e.TM,
                  {b: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
              r
            ]
          },
          {cN: 'number', b: '\\b\\d+', r: 0}, r
        ]
  }
});
hljs.registerLanguage('mipsasm', function(s) {
  return {
    cI: !0, aliases: ['mips'], l: '\\.?' + s.IR, k: {
      meta:
          '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
      built_in:
          '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt '
    },
        c:
            [
              {
                cN: 'keyword',
                b: '\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(.hb)?|jr(.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs.[sd]|add.[sd]|alnv.ps|bc1[ft]l?|c.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et]).[sd]|(ceil|floor|round|trunc).[lw].[sd]|cfc1|cvt.d.[lsw]|cvt.l.[dsw]|cvt.ps.s|cvt.s.[dlw]|cvt.s.p[lu]|cvt.w.[dls]|div.[ds]|ldx?c1|luxc1|lwx?c1|madd.[sd]|mfc1|mov[fntz]?.[ds]|msub.[sd]|mth?c1|mul.[ds]|neg.[ds]|nmadd.[ds]|nmsub.[ds]|p[lu][lu].ps|recip.fmt|r?sqrt.[ds]|sdx?c1|sub.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)',
                e: '\\s'
              },
              s.C('[;#]', '$'), s.CBCM, s.QSM,
              {cN: 'string', b: '\'', e: '[^\\\\]\'', r: 0},
              {cN: 'title', b: '\\|', e: '\\|', i: '\\n', r: 0},
              {cN: 'number', v: [{b: '0x[0-9a-f]+'}, {b: '\\b-?\\d+'}], r: 0}, {
                cN: 'symbol',
                v: [
                  {b: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'},
                  {b: '^\\s*[0-9]+:'}, {b: '[0-9]+[bf]'}
                ],
                r: 0
              }
            ],
        i: '/'
  }
});
hljs.registerLanguage('smali', function(t) {
  var s =
          [
            'add',   'and',  'cmp',   'cmpg', 'cmpl', 'const',  'div', 'double',
            'float', 'goto', 'if',    'int',  'long', 'move',   'mul', 'neg',
            'new',   'nop',  'not',   'or',   'rem',  'return', 'shl', 'shr',
            'sput',  'sub',  'throw', 'ushr', 'xor'
          ],
      e =
          [
            'aget', 'aput', 'array', 'check', 'execute', 'fill', 'filled',
            'goto/16', 'goto/32', 'iget', 'instance', 'invoke', 'iput',
            'monitor', 'packed', 'sget', 'sparse'
          ],
      r = [
        'transient', 'constructor', 'abstract', 'final', 'synthetic', 'public',
        'private', 'protected', 'static', 'bridge', 'system'
      ];
  return {
    aliases: ['smali'], c: [
      {cN: 'string', b: '"', e: '"', r: 0}, t.C('#', '$', {r: 0}), {
        cN: 'keyword',
        v: [
          {b: '\\s*\\.end\\s[a-zA-Z0-9]*'}, {b: '^[ ]*\\.[a-zA-Z]*', r: 0},
          {b: '\\s:[a-zA-Z_0-9]*', r: 0}, {b: '\\s(' + r.join('|') + ')'}
        ]
      },
      {
        cN: 'built_in',
        v: [
          {b: '\\s(' + s.join('|') + ')\\s'},
          {b: '\\s(' + s.join('|') + ')((\\-|/)[a-zA-Z0-9]+)+\\s', r: 10},
          {b: '\\s(' + e.join('|') + ')((\\-|/)[a-zA-Z0-9]+)*\\s', r: 10}
        ]
      },
      {cN: 'class', b: 'L[^(;:\n]*;', r: 0}, {b: '[vp][0-9]+'}
    ]
  }
});
hljs.registerLanguage('javascript', function(e) {
  var r = '[A-Za-z$_][0-9A-Za-z$_]*', t = {
    keyword:
        'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
    literal: 'true false null undefined NaN Infinity',
    built_in:
        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise'
  },
      a = {
        cN: 'number',
        v: [{b: '\\b(0[bB][01]+)'}, {b: '\\b(0[oO][0-7]+)'}, {b: e.CNR}],
        r: 0
      },
      n = {cN: 'subst', b: '\\$\\{', e: '\\}', k: t, c: []},
      c = {cN: 'string', b: '`', e: '`', c: [e.BE, n]};
  n.c = [e.ASM, e.QSM, c, a, e.RM];
  var s = n.c.concat([e.CBCM, e.CLCM]);
  return {
    aliases: ['js', 'jsx'], k: t,
        c:
            [
              {cN: 'meta', r: 10, b: /^\s*['"]use (strict|asm)['"]/},
              {cN: 'meta', b: /^#!/, e: /$/}, e.ASM, e.QSM, c, e.CLCM, e.CBCM,
              a, {
                b: /[{,]\s*/,
                r: 0,
                c: [
                  {b: r + '\\s*:', rB: !0, r: 0, c: [{cN: 'attr', b: r, r: 0}]}
                ]
              },
              {
                b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
                k: 'return throw case',
                c:
                    [
                      e.CLCM, e.CBCM, e.RM, {
                        cN: 'function',
                        b: '(\\(.*?\\)|' + r + ')\\s*=>',
                        rB: !0,
                        e: '\\s*=>',
                        c:
                            [{
                              cN: 'params',
                              v:
                                  [
                                    {b: r}, {b: /\(\s*\)/}, {
                                      b: /\(/,
                                      e: /\)/,
                                      eB: !0,
                                      eE: !0,
                                      k: t,
                                      c: s
                                    }
                                  ]
                            }]
                      },
                      {
                        b: /</,
                        e: /(\/\w+|\w+\/)>/,
                        sL: 'xml',
                        c:
                            [
                              {b: /<\w+\s*\/>/, skip: !0}, {
                                b: /<\w+/,
                                e: /(\/\w+|\w+\/)>/,
                                skip: !0,
                                c: [{b: /<\w+\s*\/>/, skip: !0}, 'self']
                              }
                            ]
                      }
                    ],
                r: 0
              },
              {
                cN: 'function',
                bK: 'function',
                e: /\{/,
                eE: !0,
                c:
                    [
                      e.inherit(e.TM, {b: r}),
                      {cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, c: s}
                    ],
                i: /\[|%/
              },
              {b: /\$[(.]/}, e.METHOD_GUARD, {
                cN: 'class',
                bK: 'class',
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{bK: 'extends'}, e.UTM]
              },
              {bK: 'constructor', e: /\{/, eE: !0}
            ],
        i: /#(?!!)/
  }
});
hljs.registerLanguage('go', function(e) {
  var t = {
    keyword:
        'break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune',
    literal: 'true false iota nil',
    built_in:
        'append cap close complex copy imag len make new panic print println real recover delete'
  };
  return {
    aliases: ['golang'], k: t, i: '</', c: [
      e.CLCM, e.CBCM,
      {cN: 'string', v: [e.QSM, {b: '\'', e: '[^\\\\]\''}, {b: '`', e: '`'}]},
      {cN: 'number', v: [{b: e.CNR + '[dflsi]', r: 1}, e.CNM]}, {b: /:=/}, {
        cN: 'function',
        bK: 'func',
        e: /\s*\{/,
        eE: !0,
        c: [e.TM, {cN: 'params', b: /\(/, e: /\)/, k: t, i: /["']/}]
      }
    ]
  }
});
hljs.registerLanguage('ruby', function(e) {
  var b = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?',
      r = {
        keyword:
            'and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
        literal: 'true false nil'
      },
      c = {cN: 'doctag', b: '@[A-Za-z]+'}, a = {b: '#<', e: '>'},
      s =
          [
            e.C('#', '$', {c: [c]}),
            e.C('^\\=begin', '^\\=end', {c: [c], r: 10}),
            e.C('^__END__', '\\n$')
          ],
      n = {cN: 'subst', b: '#\\{', e: '}', k: r}, t = {
        cN: 'string',
        c: [e.BE, n],
        v: [
          {b: /'/, e: /'/}, {b: /"/, e: /"/}, {b: /`/, e: /`/},
          {b: '%[qQwWx]?\\(', e: '\\)'}, {b: '%[qQwWx]?\\[', e: '\\]'},
          {b: '%[qQwWx]?{', e: '}'}, {b: '%[qQwWx]?<', e: '>'},
          {b: '%[qQwWx]?/', e: '/'}, {b: '%[qQwWx]?%', e: '%'},
          {b: '%[qQwWx]?-', e: '-'}, {b: '%[qQwWx]?\\|', e: '\\|'},
          {b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},
          {b: /<<(-?)\w+$/, e: /^\s*\w+$/}
        ]
      },
      i = {cN: 'params', b: '\\(', e: '\\)', endsParent: !0, k: r}, d = [
        t, a, {
          cN: 'class',
          bK: 'class module',
          e: '$|;',
          i: /=/,
          c: [
            e.inherit(e.TM, {b: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
            {b: '<\\s*', c: [{b: '(' + e.IR + '::)?' + e.IR}]}
          ].concat(s)
        },
        {
          cN: 'function',
          bK: 'def',
          e: '$|;',
          c: [e.inherit(e.TM, {b: b}), i].concat(s)
        },
        {b: e.IR + '::'}, {cN: 'symbol', b: e.UIR + '(\\!|\\?)?:', r: 0},
        {cN: 'symbol', b: ':(?!\\s)', c: [t, {b: b}], r: 0}, {
          cN: 'number',
          b: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
          r: 0
        },
        {b: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'},
        {cN: 'params', b: /\|/, e: /\|/, k: r}, {
          b: '(' + e.RSR + '|unless)\\s*',
          k: 'unless',
          c: [
            a, {
              cN: 'regexp',
              c: [e.BE, n],
              i: /\n/,
              v: [
                {b: '/', e: '/[a-z]*'}, {b: '%r{', e: '}[a-z]*'},
                {b: '%r\\(', e: '\\)[a-z]*'}, {b: '%r!', e: '![a-z]*'},
                {b: '%r\\[', e: '\\][a-z]*'}
              ]
            }
          ].concat(s),
          r: 0
        }
      ].concat(s);
  n.c = d, i.c = d;
  var l = '[>?]>', o = '[\\w#]+\\(\\w+\\):\\d+:\\d+>',
      u = '(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>', w = [
        {b: /^\s*=>/, starts: {e: '$', c: d}}, {
          cN: 'meta',
          b: '^(' + l + '|' + o + '|' + u + ')',
          starts: {e: '$', c: d}
        }
      ];
  return {
    aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'], k: r, i: /\/\*/,
        c: s.concat(w).concat(d)
  }
});
hljs.registerLanguage('autoit', function(e) {
  var t = 'ByRef Case Const ContinueCase ContinueLoop Default Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With',
      r = 'True False And Null Not Or',
      i = 'Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait',
      l = {
        v: [
          e.C(';', '$', {r: 0}), e.C('#cs', '#ce'),
          e.C('#comments-start', '#comments-end')
        ]
      },
      n = {b: '\\$[A-z0-9_]+'}, o = {
        cN: 'string',
        v: [
          {b: /"/, e: /"/, c: [{b: /""/, r: 0}]},
          {b: /'/, e: /'/, c: [{b: /''/, r: 0}]}
        ]
      },
      a = {v: [e.BNM, e.CNM]}, S = {
        cN: 'meta',
        b: '#',
        e: '$',
        k: {
          'meta-keyword':
              'comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin'
        },
        c: [
          {b: /\\\n/, r: 0}, {
            bK: 'include',
            k: {'meta-keyword': 'include'},
            e: '$',
            c: [
              o, {
                cN: 'meta-string',
                v: [
                  {b: '<', e: '>'}, {b: /"/, e: /"/, c: [{b: /""/, r: 0}]},
                  {b: /'/, e: /'/, c: [{b: /''/, r: 0}]}
                ]
              }
            ]
          },
          o, l
        ]
      },
      C = {cN: 'symbol', b: '@[A-z0-9_]+'}, s = {
        cN: 'function',
        bK: 'Func',
        e: '$',
        i: '\\$|\\[|%',
        c: [e.UTM, {cN: 'params', b: '\\(', e: '\\)', c: [n, o, a]}]
      };
  return {
    cI: !0, i: /\/\*/, k: {keyword: t, built_in: i, literal: r},
        c: [l, n, o, a, S, C, s]
  }
});
hljs.registerLanguage('excel', function(E) {
  return {
    aliases: ['xlsx', 'xls'], cI: !0, l: /[a-zA-Z][\w\.]*/, k: {
      built_in:
          'ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF|0 IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST'
    },
        c: [
          {b: /^=/, e: /[^=]/, rE: !0, i: /=/, r: 10},
          {cN: 'symbol', b: /\b[A-Z]{1,2}\d+\b/, e: /[^\d]/, eE: !0, r: 0},
          {cN: 'symbol', b: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/, r: 0}, E.BE, E.QSM,
          {cN: 'number', b: E.NR + '(%)?', r: 0},
          E.C(/\bN\(/, /\)/, {eB: !0, eE: !0, i: /\n/})
        ]
  }
});
hljs.registerLanguage('php', function(e) {
  var c = {b: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*'},
      i = {cN: 'meta', b: /<\?(php)?|\?>/}, t = {
        cN: 'string',
        c: [e.BE, i],
        v: [
          {b: 'b"', e: '"'}, {b: 'b\'', e: '\''}, e.inherit(e.ASM, {i: null}),
          e.inherit(e.QSM, {i: null})
        ]
      },
      a = {v: [e.BNM, e.CNM]};
  return {
    aliases: ['php3', 'php4', 'php5', 'php6'], cI: !0,
        k: 'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally',
        c: [
          e.HCM, e.C('//', '$', {c: [i]}),
          e.C('/\\*', '\\*/', {c: [{cN: 'doctag', b: '@[A-Za-z]+'}]}),
          e.C('__halt_compiler.+?;', !1,
              {eW: !0, k: '__halt_compiler', l: e.UIR}),
          {
            cN: 'string',
            b: /<<<['"]?\w+['"]?$/,
            e: /^\w+;?$/,
            c: [e.BE, {cN: 'subst', v: [{b: /\$\w+/}, {b: /\{\$/, e: /\}/}]}]
          },
          i, {cN: 'keyword', b: /\$this\b/}, c,
          {b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/}, {
            cN: 'function',
            bK: 'function',
            e: /[;{]/,
            eE: !0,
            i: '\\$|\\[|%',
            c: [
              e.UTM,
              {cN: 'params', b: '\\(', e: '\\)', c: ['self', c, e.CBCM, t, a]}
            ]
          },
          {
            cN: 'class',
            bK: 'class interface',
            e: '{',
            eE: !0,
            i: /[:\(\$"]/,
            c: [{bK: 'extends implements'}, e.UTM]
          },
          {bK: 'namespace', e: ';', i: /[\.']/, c: [e.UTM]},
          {bK: 'use', e: ';', c: [e.UTM]}, {b: '=>'}, t, a
        ]
  }
});
hljs.registerLanguage('cs', function(e) {
  var i = {
    keyword:
        'abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield',
    literal: 'null false true'
  },
      t = {cN: 'string', b: '@"', e: '"', c: [{b: '""'}]},
      r = e.inherit(t, {i: /\n/}), a = {cN: 'subst', b: '{', e: '}', k: i},
      c = e.inherit(a, {i: /\n/}), n = {
        cN: 'string',
        b: /\$"/,
        e: '"',
        i: /\n/,
        c: [{b: '{{'}, {b: '}}'}, e.BE, c]
      },
      s = {
        cN: 'string',
        b: /\$@"/,
        e: '"',
        c: [{b: '{{'}, {b: '}}'}, {b: '""'}, a]
      },
      o = e.inherit(s, {i: /\n/, c: [{b: '{{'}, {b: '}}'}, {b: '""'}, c]});
  a.c = [s, n, t, e.ASM, e.QSM, e.CNM, e.CBCM],
  c.c = [o, n, r, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, {i: /\n/})];
  var l = {v: [s, n, t, e.ASM, e.QSM]},
      b = e.IR + '(<' + e.IR + '(\\s*,\\s*' + e.IR + ')*>)?(\\[\\])?';
  return {
    aliases: ['csharp'], k: i, i: /::/, c: [
      e.C('///', '$', {
        rB: !0,
        c: [{
          cN: 'doctag',
          v: [{b: '///', r: 0}, {b: '<!--|-->'}, {b: '</?', e: '>'}]
        }]
      }),
      e.CLCM, e.CBCM, {
        cN: 'meta',
        b: '#',
        e: '$',
        k: {
          'meta-keyword':
              'if else elif endif define undef warning error line region endregion pragma checksum'
        }
      },
      l, e.CNM, {
        bK: 'class interface',
        e: /[{;=]/,
        i: /[^\s:]/,
        c: [e.TM, e.CLCM, e.CBCM]
      },
      {
        bK: 'namespace',
        e: /[{;=]/,
        i: /[^\s:]/,
        c: [e.inherit(e.TM, {b: '[a-zA-Z](\\.?\\w)*'}), e.CLCM, e.CBCM]
      },
      {
        cN: 'meta',
        b: '^\\s*\\[',
        eB: !0,
        e: '\\]',
        eE: !0,
        c: [{cN: 'meta-string', b: /"/, e: /"/}]
      },
      {bK: 'new return throw await else', r: 0}, {
        cN: 'function',
        b: '(' + b + '\\s+)+' + e.IR + '\\s*\\(',
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: i,
        c: [
          {b: e.IR + '\\s*\\(', rB: !0, c: [e.TM], r: 0}, {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            eB: !0,
            eE: !0,
            k: i,
            r: 0,
            c: [l, e.CNM, e.CBCM]
          },
          e.CLCM, e.CBCM
        ]
      }
    ]
  }
});
hljs.registerLanguage('dts', function(e) {
  var a = {
    cN: 'string',
    v: [
      e.inherit(e.QSM, {b: '((u8?|U)|L)?"'}),
      {b: '(u8?|U)?R"', e: '"', c: [e.BE]}, {b: '\'\\\\?.', e: '\'', i: '.'}
    ]
  },
      c = {
        cN: 'number',
        v: [{b: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)'}, {b: e.CNR}],
        r: 0
      },
      b = {
        cN: 'meta',
        b: '#',
        e: '$',
        k: {'meta-keyword': 'if else elif endif define undef ifdef ifndef'},
        c: [
          {b: /\\\n/, r: 0}, {
            bK: 'include',
            e: '$',
            k: {'meta-keyword': 'include'},
            c: [
              e.inherit(a, {cN: 'meta-string'}),
              {cN: 'meta-string', b: '<', e: '>', i: '\\n'}
            ]
          },
          a, e.CLCM, e.CBCM
        ]
      },
      i = {cN: 'variable', b: '\\&[a-z\\d_]*\\b'},
      r = {cN: 'meta-keyword', b: '/[a-z][a-z\\d-]*/'},
      d = {cN: 'symbol', b: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:'},
      n = {cN: 'params', b: '<', e: '>', c: [c, i]}, s = {
        cN: 'class',
        b: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
        e: /[{;=]/,
        rB: !0,
        eE: !0
      },
      t = {
        cN: 'class',
        b: '/\\s*{',
        e: '};',
        r: 10,
        c: [i, r, d, s, n, e.CLCM, e.CBCM, c, a]
      };
  return {
    k: '',
        c: [t, i, r, d, s, n, e.CLCM, e.CBCM, c, a, b, {b: e.IR + '::', k: ''}]
  }
});
hljs.registerLanguage('x86asm', function(s) {
  return {
    cI: !0, l: '[.%]?' + s.IR, k: {
      keyword:
          'lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63',
      built_in:
          'ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr',
      meta:
          '%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__'
    },
        c: [
          s.C(';', '$', {r: 0}), {
            cN: 'number',
            v: [
              {
                b: '\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b',
                r: 0
              },
              {b: '\\$[0-9][0-9A-Fa-f]*', r: 0}, {
                b: '\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b'
              },
              {
                b: '\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b'
              }
            ]
          },
          s.QSM, {
            cN: 'string',
            v: [{b: '\'', e: '[^\\\\]\''}, {b: '`', e: '[^\\\\]`'}],
            r: 0
          },
          {
            cN: 'symbol',
            v: [
              {b: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)'},
              {b: '^\\s*%%[A-Za-z0-9_$#@~.?]*:'}
            ],
            r: 0
          },
          {cN: 'subst', b: '%[0-9]+', r: 0}, {cN: 'subst', b: '%!S+', r: 0},
          {cN: 'meta', b: /^\s*\.[\w_-]+/}
        ]
  }
});
hljs.registerLanguage('actionscript', function(e) {
  var a = '[a-zA-Z_$][a-zA-Z0-9_$]*', t = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)',
      c = {cN: 'rest_arg', b: '[.]{3}', e: a, r: 10};
  return {
    aliases: ['as'], k: {
      keyword:
          'as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with',
      literal: 'true false null undefined'
    },
        c:
            [
              e.ASM, e.QSM, e.CLCM, e.CBCM, e.CNM,
              {cN: 'class', bK: 'package', e: '{', c: [e.TM]}, {
                cN: 'class',
                bK: 'class interface',
                e: '{',
                eE: !0,
                c: [{bK: 'extends implements'}, e.TM]
              },
              {
                cN: 'meta',
                bK: 'import include',
                e: ';',
                k: {'meta-keyword': 'import include'}
              },
              {
                cN: 'function',
                bK: 'function',
                e: '[{;]',
                eE: !0,
                i: '\\S',
                c: [
                  e.TM, {
                    cN: 'params',
                    b: '\\(',
                    e: '\\)',
                    c: [e.ASM, e.QSM, e.CLCM, e.CBCM, c]
                  },
                  {b: ':\\s*' + t}
                ]
              },
              e.METHOD_GUARD
            ],
        i: /#/
  }
});
hljs.registerLanguage('http', function(e) {
  var t = 'HTTP/[0-9\\.]+';
  return {
    aliases: ['https'], i: '\\S', c: [
      {b: '^' + t, e: '$', c: [{cN: 'number', b: '\\b\\d{3}\\b'}]}, {
        b: '^[A-Z]+ (.*?) ' + t + '$',
        rB: !0,
        e: '$',
        c: [
          {cN: 'string', b: ' ', e: ' ', eB: !0, eE: !0}, {b: t},
          {cN: 'keyword', b: '[A-Z]+'}
        ]
      },
      {
        cN: 'attribute',
        b: '^\\w',
        e: ': ',
        eE: !0,
        i: '\\n|\\s|=',
        starts: {e: '$', r: 0}
      },
      {b: '\\n\\n', starts: {sL: [], eW: !0}}
    ]
  }
});
hljs.registerLanguage('objectivec', function(e) {
  var t = {
    cN: 'built_in',
    b: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+'
  },
      _ = {
        keyword:
            'int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
        literal: 'false true FALSE TRUE nil YES NO NULL',
        built_in:
            'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
      },
      i = /[a-zA-Z@][a-zA-Z0-9_]*/,
      n = '@interface @class @protocol @implementation';
  return {
    aliases: ['mm', 'objc', 'obj-c'], k: _, l: i, i: '</', c: [
      t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
        cN: 'string',
        v: [
          {b: '@"', e: '"', i: '\\n', c: [e.BE]},
          {b: '\'', e: '[^\\\\]\'', i: '[^\\\\][^\']'}
        ]
      },
      {
        cN: 'meta',
        b: '#',
        e: '$',
        c: [{cN: 'meta-string', v: [{b: '"', e: '"'}, {b: '<', e: '>'}]}]
      },
      {
        cN: 'class',
        b: '(' + n.split(' ').join('|') + ')\\b',
        e: '({|$)',
        eE: !0,
        k: n,
        l: i,
        c: [e.UTM]
      },
      {b: '\\.' + e.UIR, r: 0}
    ]
  }
});
hljs.registerLanguage('haskell', function(e) {
  var i = {v: [e.C('--', '$'), e.C('{-', '-}', {c: ['self']})]},
      a = {cN: 'meta', b: '{-#', e: '#-}'}, l = {cN: 'meta', b: '^#', e: '$'},
      c = {cN: 'type', b: '\\b[A-Z][\\w\']*', r: 0}, n = {
        b: '\\(',
        e: '\\)',
        i: '"',
        c: [
          a, l, {cN: 'type', b: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
          e.inherit(e.TM, {b: '[_a-z][\\w\']*'}), i
        ]
      },
      s = {b: '{', e: '}', c: n.c};
  return {
    aliases: ['hs'],
        k: 'let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec',
        c: [
          {
            bK: 'module',
            e: 'where',
            k: 'module where',
            c: [n, i],
            i: '\\W\\.|;'
          },
          {
            b: '\\bimport\\b',
            e: '$',
            k: 'import qualified as hiding',
            c: [n, i],
            i: '\\W\\.|;'
          },
          {
            cN: 'class',
            b: '^(\\s*)?(class|instance)\\b',
            e: 'where',
            k: 'class family instance where',
            c: [c, n, i]
          },
          {
            cN: 'class',
            b: '\\b(data|(new)?type)\\b',
            e: '$',
            k: 'data family type newtype deriving',
            c: [a, c, n, s, i]
          },
          {bK: 'default', e: '$', c: [c, n, i]},
          {bK: 'infix infixl infixr', e: '$', c: [e.CNM, i]}, {
            b: '\\bforeign\\b',
            e: '$',
            k: 'foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe',
            c: [c, e.QSM, i]
          },
          {cN: 'meta', b: '#!\\/usr\\/bin\\/env runhaskell', e: '$'}, a, l,
          e.QSM, e.CNM, c, e.inherit(e.TM, {b: '^[_a-z][\\w\']*'}), i,
          {b: '->|<-'}
        ]
  }
});
hljs.registerLanguage('typescript', function(e) {
  var r = {
    keyword:
        'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await',
    literal: 'true false null undefined NaN Infinity',
    built_in:
        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise'
  };
  return {
    aliases: ['ts'], k: r, c: [
      {cN: 'meta', b: /^\s*['"]use strict['"]/}, e.ASM, e.QSM, {
        cN: 'string',
        b: '`',
        e: '`',
        c: [e.BE, {cN: 'subst', b: '\\$\\{', e: '\\}'}]
      },
      e.CLCM, e.CBCM, {
        cN: 'number',
        v: [{b: '\\b(0[bB][01]+)'}, {b: '\\b(0[oO][0-7]+)'}, {b: e.CNR}],
        r: 0
      },
      {
        b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
        k: 'return throw case',
        c: [
          e.CLCM, e.CBCM, e.RM, {
            cN: 'function',
            b: '(\\(.*?\\)|' + e.IR + ')\\s*=>',
            rB: !0,
            e: '\\s*=>',
            c: [{
              cN: 'params',
              v: [
                {b: e.IR}, {b: /\(\s*\)/}, {
                  b: /\(/,
                  e: /\)/,
                  eB: !0,
                  eE: !0,
                  k: r,
                  c: ['self', e.CLCM, e.CBCM]
                }
              ]
            }]
          }
        ],
        r: 0
      },
      {
        cN: 'function',
        b: 'function',
        e: /[\{;]/,
        eE: !0,
        k: r,
        c: [
          'self', e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            eB: !0,
            eE: !0,
            k: r,
            c: [e.CLCM, e.CBCM],
            i: /["'\(]/
          }
        ],
        i: /%/,
        r: 0
      },
      {
        bK: 'constructor',
        e: /\{/,
        eE: !0,
        c: [
          'self', {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            eB: !0,
            eE: !0,
            k: r,
            c: [e.CLCM, e.CBCM],
            i: /["'\(]/
          }
        ]
      },
      {b: /module\./, k: {built_in: 'module'}, r: 0},
      {bK: 'module', e: /\{/, eE: !0},
      {bK: 'interface', e: /\{/, eE: !0, k: 'interface extends'}, {b: /\$[(.]/},
      {b: '\\.' + e.IR, r: 0}, {cN: 'meta', b: '@[A-Za-z]+'}
    ]
  }
});
hljs.registerLanguage('purebasic', function(e) {
  var r = {cN: 'string', b: '(~)?"', e: '"', i: '\\n'},
      t = {cN: 'symbol', b: '#[a-zA-Z_]\\w*\\$?'};
  return {
    aliases: ['pb', 'pbi'],
        k: 'And As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect Continue Data DataSection EndDataSection Debug DebugLevel Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndEnumeration EndIf EndImport EndInterface EndMacro EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration Extends FakeReturn For Next ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface Macro NewList Not Or ProcedureReturn Protected Prototype PrototypeC Read ReDim Repeat Until Restore Return Select Shared Static Step Structure StructureUnion Swap To Wend While With XIncludeFile XOr Procedure ProcedureC ProcedureCDLL ProcedureDLL Declare DeclareC DeclareCDLL DeclareDLL',
        c: [
          e.C(';', '$', {r: 0}), {
            cN: 'function',
            b: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
            e: '\\(',
            eE: !0,
            rB: !0,
            c: [
              {cN: 'keyword', b: '(Procedure|Declare)(C|CDLL|DLL)?', eE: !0},
              {cN: 'type', b: '\\.\\w*'}, e.UTM
            ]
          },
          r, t
        ]
  }
});
hljs.registerLanguage('java', function(e) {
  var a = '[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*',
      t = a + '(<' + a + '(\\s*,\\s*' + a + ')*>)?',
      r = 'false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do',
      s = '\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?',
      c = {cN: 'number', b: s, r: 0};
  return {
    aliases: ['jsp'], k: r, i: /<\/|#/, c: [
      e.C('/\\*\\*', '\\*/',
          {r: 0, c: [{b: /\w+@/, r: 0}, {cN: 'doctag', b: '@[A-Za-z]+'}]}),
      e.CLCM, e.CBCM, e.ASM, e.QSM, {
        cN: 'class',
        bK: 'class interface',
        e: /[{;=]/,
        eE: !0,
        k: 'class interface',
        i: /[:"\[\]]/,
        c: [{bK: 'extends implements'}, e.UTM]
      },
      {bK: 'new throw return else', r: 0}, {
        cN: 'function',
        b: '(' + t + '\\s+)+' + e.UIR + '\\s*\\(',
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: r,
        c: [
          {b: e.UIR + '\\s*\\(', rB: !0, r: 0, c: [e.UTM]}, {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            k: r,
            r: 0,
            c: [e.ASM, e.QSM, e.CNM, e.CBCM]
          },
          e.CLCM, e.CBCM
        ]
      },
      c, {cN: 'meta', b: '@[A-Za-z]+'}
    ]
  }
});
hljs.registerLanguage('profile', function(e) {
  return {
    c: [
      e.CNM, {b: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}', e: ':', eE: !0},
      {
        b: '(ncalls|tottime|cumtime)',
        e: '$',
        k: 'ncalls tottime|10 cumtime|10 filename',
        r: 10
      },
      {b: 'function calls', e: '$', c: [e.CNM], r: 10}, e.ASM, e.QSM,
      {cN: 'string', b: '\\(', e: '\\)$', eB: !0, eE: !0, r: 0}
    ]
  }
});
hljs.registerLanguage('bash', function(e) {
  var t = {cN: 'variable', v: [{b: /\$[\w\d#@][\w\d_]*/}, {b: /\$\{(.*?)}/}]},
      s = {
        cN: 'string',
        b: /"/,
        e: /"/,
        c: [e.BE, t, {cN: 'variable', b: /\$\(/, e: /\)/, c: [e.BE]}]
      },
      a = {cN: 'string', b: /'/, e: /'/};
  return {
    aliases: ['sh', 'zsh'], l: /\b-?[a-z\._]+\b/, k: {
      keyword: 'if then else elif fi for while in do done case esac function',
      literal: 'true false',
      built_in:
          'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp',
      _: '-ne -eq -lt -gt -f -d -e -s -l -a'
    },
        c: [
          {cN: 'meta', b: /^#![^\n]+sh\s*$/, r: 10}, {
            cN: 'function',
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {b: /\w[\w\d_]*/})],
            r: 0
          },
          e.HCM, s, a, t
        ]
  }
});
hljs.registerLanguage('shell', function(s) {
  return {
    aliases: ['console'], c: [{
      cN: 'meta',
      b: '^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]',
      starts: {e: '$', sL: 'bash'}
    }]
  }
});
hljs.registerLanguage('autohotkey', function(e) {
  var r = {b: '`[\\s\\S]'};
  return {
    cI: !0, aliases: ['ahk'], k: {
      keyword:
          'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',
      literal: 'A|0 true false NOT AND OR',
      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel'
    },
        c: [
          {cN: 'built_in', b: 'A_[a-zA-Z0-9]+'}, r, e.inherit(e.QSM, {c: [r]}),
          e.C(';', '$', {r: 0}), e.CBCM, {cN: 'number', b: e.NR, r: 0}, {
            cN: 'subst',
            b: '%(?=[a-zA-Z0-9#_$@])',
            e: '%',
            i: '[^a-zA-Z0-9#_$@]'
          },
          {cN: 'built_in', b: '^\\s*\\w+\\s*,'},
          {cN: 'meta', b: '^\\s*#w+', e: '$', r: 0}, {
            cN: 'symbol',
            c: [r],
            v: [{b: '^[^\\n";]+::(?!=)'}, {b: '^[^\\n";]+:(?!=)', r: 0}]
          },
          {b: ',\\s*,'}
        ]
  }
});
hljs.registerLanguage('fsharp', function(e) {
  var t = {b: '<', e: '>', c: [e.inherit(e.TM, {b: /'[a-zA-Z0-9_]+/})]};
  return {
    aliases: ['fs'],
        k: 'abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield',
        i: /\/\*/, c: [
          {cN: 'keyword', b: /\b(yield|return|let|do)!/},
          {cN: 'string', b: '@"', e: '"', c: [{b: '""'}]},
          {cN: 'string', b: '"""', e: '"""'}, e.C('\\(\\*', '\\*\\)'),
          {cN: 'class', bK: 'type', e: '\\(|=|$', eE: !0, c: [e.UTM, t]},
          {cN: 'meta', b: '\\[<', e: '>\\]', r: 10},
          {cN: 'symbol', b: '\\B(\'[A-Za-z])\\b', c: [e.BE]}, e.CLCM,
          e.inherit(e.QSM, {i: null}), e.CNM
        ]
  }
});
hljs.registerLanguage('vbscript', function(e) {
  return {
    aliases: ['vbs'], cI: !0, k: {
      keyword:
          'call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto',
      built_in:
          'lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err',
      literal: 'true false null nothing empty'
    },
        i: '//',
        c: [e.inherit(e.QSM, {c: [{b: '""'}]}), e.C(/'/, /$/, {r: 0}), e.CNM]
  }
});
hljs.registerLanguage('vbscript-html', function(r) {
  return {
    sL: 'xml', c: [{b: '<%', e: '%>', sL: 'vbscript'}]
  }
});
hljs.registerLanguage('erlang', function(e) {
  var r = '[a-z\'][a-zA-Z0-9_\']*', c = '(' + r + ':' + r + '|' + r + ')', b = {
    keyword:
        'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor',
    literal: 'false true'
  },
      i = e.C('%', '$'), n = {
        cN: 'number',
        b: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
        r: 0
      },
      a = {b: 'fun\\s+' + r + '/\\d+'}, d = {
        b: c + '\\(',
        e: '\\)',
        rB: !0,
        r: 0,
        c: [{b: c, r: 0}, {b: '\\(', e: '\\)', eW: !0, rE: !0, r: 0}]
      },
      o = {b: '{', e: '}', r: 0}, t = {b: '\\b_([A-Z][A-Za-z0-9_]*)?', r: 0},
      f = {b: '[A-Z][a-zA-Z0-9_]*', r: 0}, l = {
        b: '#' + e.UIR,
        r: 0,
        rB: !0,
        c: [{b: '#' + e.UIR, r: 0}, {b: '{', e: '}', r: 0}]
      },
      s = {bK: 'fun receive if try case', e: 'end', k: b};
  s.c = [i, a, e.inherit(e.ASM, {cN: ''}), s, d, e.QSM, n, o, t, f, l];
  var u = [i, a, s, d, e.QSM, n, o, t, f, l];
  d.c[1].c = u, o.c = u, l.c[1].c = u;
  var h = {cN: 'params', b: '\\(', e: '\\)', c: u};
  return {
    aliases: ['erl'], k: b, i: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))', c: [
      {
        cN: 'function',
        b: '^' + r + '\\s*\\(',
        e: '->',
        rB: !0,
        i: '\\(|#|//|/\\*|\\\\|:|;',
        c: [h, e.inherit(e.TM, {b: r})],
        starts: {e: ';|\\.', k: b, c: u}
      },
      i, {
        b: '^-',
        e: '\\.',
        r: 0,
        eE: !0,
        rB: !0,
        l: '-' + e.IR,
        k: '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec',
        c: [h]
      },
      n, e.QSM, l, t, f, o, {b: /\.$/}
    ]
  }
});
hljs.registerLanguage('sql', function(e) {
  var t = e.C('--', '$');
  return {
    cI: !0, i: /[<>{}*#]/, c: [
      {
        bK: 'begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment',
        e: /;/,
        eW: !0,
        l: /[\w\.]+/,
        k: {
          keyword:
              'abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
          literal: 'true false null',
          built_in:
              'array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void'
        },
        c: [
          {cN: 'string', b: '\'', e: '\'', c: [e.BE, {b: '\'\''}]},
          {cN: 'string', b: '"', e: '"', c: [e.BE, {b: '""'}]},
          {cN: 'string', b: '`', e: '`', c: [e.BE]}, e.CNM, e.CBCM, t
        ]
      },
      e.CBCM, t
    ]
  }
});
hljs.registerLanguage('brainfuck', function(r) {
  var n = {cN: 'literal', b: '[\\+\\-]', r: 0};
  return {
    aliases: ['bf'], c: [
      r.C('[^\\[\\]\\.,\\+\\-<> \r\n]', '[\\[\\]\\.,\\+\\-<> \r\n]',
          {rE: !0, r: 0}),
      {cN: 'title', b: '[\\[\\]]', r: 0}, {cN: 'string', b: '[\\.,]', r: 0},
      {b: /\+\+|\-\-/, rB: !0, c: [n]}, n
    ]
  }
});
hljs.registerLanguage('yaml', function(e) {
  var b = 'true false yes no null', a = '^[ \\-]*', r = '[a-zA-Z_][\\w\\-]*',
      t = {
        cN: 'attr',
        v: [
          {b: a + r + ':'}, {b: a + '"' + r + '":'}, {b: a + '\'' + r + '\':'}
        ]
      },
      c = {cN: 'template-variable', v: [{b: '{{', e: '}}'}, {b: '%{', e: '}'}]},
      l = {
        cN: 'string',
        r: 0,
        v: [{b: /'/, e: /'/}, {b: /"/, e: /"/}, {b: /\S+/}],
        c: [e.BE, c]
      };
  return {
    cI: !0, aliases: ['yml', 'YAML', 'yaml'], c: [
      t, {cN: 'meta', b: '^---s*$', r: 10},
      {cN: 'string', b: '[\\|>] *$', rE: !0, c: l.c, e: t.v[0].b},
      {b: '<%[%=-]?', e: '[%-]?%>', sL: 'ruby', eB: !0, eE: !0, r: 0},
      {cN: 'type', b: '!!' + e.UIR}, {cN: 'meta', b: '&' + e.UIR + '$'},
      {cN: 'meta', b: '\\*' + e.UIR + '$'}, {cN: 'bullet', b: '^ *-', r: 0},
      e.HCM, {bK: b, k: {literal: b}}, e.CNM, l
    ]
  }
});
hljs.registerLanguage('q', function(e) {
  var s = {
    keyword: 'do while select delete by update from',
    literal: '0b 1b',
    built_in:
        'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
    type:
        '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
  };
  return {
    aliases: ['k', 'kdb'], k: s, l: /(`?)[A-Za-z0-9_]+\b/,
        c: [e.CLCM, e.QSM, e.CNM]
  }
});
hljs.registerLanguage('powershell', function(e) {
  var t = {b: '`[\\s\\S]', r: 0},
      o = {cN: 'variable', v: [{b: /\$[\w\d][\w\d_:]*/}]},
      r = {cN: 'literal', b: /\$(null|true|false)\b/}, n = {
        cN: 'string',
        v: [{b: /"/, e: /"/}, {b: /@"/, e: /^"@/}],
        c: [t, o, {cN: 'variable', b: /\$[A-z]/, e: /[^A-z]/}]
      },
      a = {cN: 'string', v: [{b: /'/, e: /'/}, {b: /@'/, e: /^'@/}]}, i = {
        cN: 'doctag',
        v: [
          {
            b: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
          },
          {
            b: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
          }
        ]
      },
      s = e.inherit(
          e.C(null, null), {v: [{b: /#/, e: /$/}, {b: /<#/, e: /#>/}], c: [i]});
  return {
    aliases: ['ps'], l: /-?[A-z\.\-]+/, cI: !0, k: {
      keyword:
          'if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch',
      built_in:
          'Add-Computer Add-Content Add-History Add-JobTrigger Add-Member Add-PSSnapin Add-Type Checkpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item Clear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession Connect-WSMan Convert-Path ConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString ConvertTo-Xml Copy-Item Copy-ItemProperty Debug-Process Disable-ComputerRestore Disable-JobTrigger Disable-PSBreakpoint Disable-PSRemoting Disable-PSSessionConfiguration Disable-WSManCredSSP Disconnect-PSSession Disconnect-WSMan Disable-ScheduledJob Enable-ComputerRestore Enable-JobTrigger Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration Enable-ScheduledJob Enable-WSManCredSSP Enter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter Export-Csv Export-FormatData Export-ModuleMember Export-PSSession ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint Get-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date Get-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Host Get-HotFix Get-Help Get-History Get-IseSnippet Get-Item Get-ItemProperty Get-Job Get-JobTrigger Get-Location Get-Member Get-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive Get-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-ScheduledJob Get-ScheduledJobOption Get-Service Get-TraceSource Get-Transaction Get-TypeData Get-UICulture Get-Unique Get-Variable Get-Verb Get-WinEvent Get-WmiObject Get-WSManCredSSP Get-WSManInstance Group-Object Import-Alias Import-Clixml Import-Counter Import-Csv Import-IseSnippet Import-LocalizedData Import-PSSession Import-Module Invoke-AsWorkflow Invoke-Command Invoke-Expression Invoke-History Invoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod Invoke-WSManAction Join-Path Limit-EventLog Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Event New-EventLog New-IseSnippet New-Item New-ItemProperty New-JobTrigger New-Object New-Module New-ModuleManifest New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption New-PSTransportOption New-PSWorkflowExecutionOption New-PSWorkflowSession New-ScheduledJobOption New-Service New-TimeSpan New-Variable New-WebServiceProxy New-WinEvent New-WSManInstance New-WSManSessionOption Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Receive-Job Register-EngineEvent Register-ObjectEvent Register-PSSessionConfiguration Register-ScheduledJob Register-WmiEvent Remove-Computer Remove-Event Remove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-JobTrigger Remove-Module Remove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData Remove-Variable Remove-WmiObject Remove-WSManInstance Rename-Computer Rename-Item Rename-ItemProperty Reset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service Restore-Computer Resume-Job Resume-Service Save-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-JobTrigger Set-Location Set-PSBreakpoint Set-PSDebug Set-PSSessionConfiguration Set-ScheduledJob Set-ScheduledJobOption Set-Service Set-StrictMode Set-TraceSource Set-Variable Set-WmiInstance Set-WSManInstance Set-WSManQuickConfig Show-Command Show-ControlPanelItem Show-EventLog Sort-Object Split-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction Start-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript Suspend-Job Suspend-Service Tee-Object Test-ComputerSecureChannel Test-Connection Test-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command Unblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration Unregister-ScheduledJob Update-FormatData Update-Help Update-List Update-TypeData Use-Transaction Wait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog Write-Host Write-Output Write-Progress Write-Verbose Write-Warning Add-MDTPersistentDrive Disable-MDTMonitorService Enable-MDTMonitorService Get-MDTDeploymentShareStatistics Get-MDTMonitorData Get-MDTOperatingSystemCatalog Get-MDTPersistentDrive Import-MDTApplication Import-MDTDriver Import-MDTOperatingSystem Import-MDTPackage Import-MDTTaskSequence New-MDTDatabase Remove-MDTMonitorData Remove-MDTPersistentDrive Restore-MDTPersistentDrive Set-MDTMonitorData Test-MDTDeploymentShare Test-MDTMonitorData Update-MDTDatabaseSchema Update-MDTDeploymentShare Update-MDTLinkedDS Update-MDTMedia Update-MDTMedia Add-VamtProductKey Export-VamtData Find-VamtManagedMachine Get-VamtConfirmationId Get-VamtProduct Get-VamtProductKey Import-VamtData Initialize-VamtData Install-VamtConfirmationId Install-VamtProductActivation Install-VamtProductKey Update-VamtProduct',
      nomarkup:
          '-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace'
    },
        c: [t, e.NM, n, a, r, o, s]
  }
});
hljs.registerLanguage('makefile', function(e) {
  var i = {
    cN: 'variable',
    v: [{b: '\\$\\(' + e.UIR + '\\)', c: [e.BE]}, {b: /\$[@%<?\^\+\*]/}]
  },
      r = {cN: 'string', b: /"/, e: /"/, c: [e.BE, i]}, a = {
        cN: 'variable',
        b: /\$\([\w-]+\s/,
        e: /\)/,
        k: {
          built_in:
              'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value'
        },
        c: [i]
      },
      n = {
        b: '^' + e.UIR + '\\s*[:+?]?=',
        i: '\\n',
        rB: !0,
        c: [{b: '^' + e.UIR, e: '[:+?]?=', eE: !0}]
      },
      t = {
        cN: 'meta',
        b: /^\.PHONY:/,
        e: /$/,
        k: {'meta-keyword': '.PHONY'},
        l: /[\.\w]+/
      },
      l = {cN: 'section', b: /^[^\s]+:/, e: /$/, c: [i]};
  return {
    aliases: ['mk', 'mak'],
        k: 'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath',
        l: /[\w-]+/, c: [e.HCM, i, r, a, n, t, l]
  }
});
hljs.registerLanguage('qml', function(r) {
  var e = {
    keyword:
        'in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import',
    literal: 'true false null undefined NaN Infinity',
    built_in:
        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4dPromise'
  },
      t = '[a-zA-Z_][a-zA-Z0-9\\._]*', a = {
        cN: 'keyword',
        b: '\\bproperty\\b',
        starts: {cN: 'string', e: '(:|=|;|,|//|/\\*|$)', rE: !0}
      },
      n = {
        cN: 'keyword',
        b: '\\bsignal\\b',
        starts: {cN: 'string', e: '(\\(|:|=|;|,|//|/\\*|$)', rE: !0}
      },
      o = {
        cN: 'attribute',
        b: '\\bid\\s*:',
        starts: {cN: 'string', e: t, rE: !1}
      },
      i = {
        b: t + '\\s*:',
        rB: !0,
        c: [{cN: 'attribute', b: t, e: '\\s*:', eE: !0, r: 0}],
        r: 0
      },
      c = {b: t + '\\s*{', e: '{', rB: !0, r: 0, c: [r.inherit(r.TM, {b: t})]};
  return {
    aliases: ['qt'], cI: !1, k: e,
        c:
            [
              {cN: 'meta', b: /^\s*['"]use (strict|asm)['"]/}, r.ASM, r.QSM, {
                cN: 'string',
                b: '`',
                e: '`',
                c: [r.BE, {cN: 'subst', b: '\\$\\{', e: '\\}'}]
              },
              r.CLCM, r.CBCM, {
                cN: 'number',
                v: [
                  {b: '\\b(0[bB][01]+)'}, {b: '\\b(0[oO][0-7]+)'}, {b: r.CNR}
                ],
                r: 0
              },
              {
                b: '(' + r.RSR + '|\\b(case|return|throw)\\b)\\s*',
                k: 'return throw case',
                c: [
                  r.CLCM, r.CBCM, r.RM,
                  {b: /</, e: />\s*[);\]]/, r: 0, sL: 'xml'}
                ],
                r: 0
              },
              n, a, {
                cN: 'function',
                bK: 'function',
                e: /\{/,
                eE: !0,
                c: [
                  r.inherit(r.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {
                    cN: 'params',
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    c: [r.CLCM, r.CBCM]
                  }
                ],
                i: /\[|%/
              },
              {b: '\\.' + r.IR, r: 0}, o, i, c
            ],
        i: /#/
  }
});
hljs.registerLanguage('css', function(e) {
  var c = '[a-zA-Z-][a-zA-Z0-9_-]*', t = {
    b: /[A-Z\_\.\-]+\s*:/,
    rB: !0,
    e: ';',
    eW: !0,
    c: [{
      cN: 'attribute',
      b: /\S/,
      e: ':',
      eE: !0,
      starts: {
        eW: !0,
        eE: !0,
        c: [
          {
            b: /[\w-]+\(/,
            rB: !0,
            c: [
              {cN: 'built_in', b: /[\w-]+/},
              {b: /\(/, e: /\)/, c: [e.ASM, e.QSM]}
            ]
          },
          e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: 'number', b: '#[0-9A-Fa-f]+'},
          {cN: 'meta', b: '!important'}
        ]
      }
    }]
  };
  return {
    cI: !0, i: /[=\/|'\$]/, c: [
      e.CBCM, {cN: 'selector-id', b: /#[A-Za-z0-9_-]+/},
      {cN: 'selector-class', b: /\.[A-Za-z0-9_-]+/},
      {cN: 'selector-attr', b: /\[/, e: /\]/, i: '$'},
      {cN: 'selector-pseudo', b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},
      {b: '@(font-face|page)', l: '[a-z-]+', k: 'font-face page'}, {
        b: '@',
        e: '[{;]',
        i: /:/,
        c: [
          {cN: 'keyword', b: /\w+/},
          {b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM]}
        ]
      },
      {cN: 'selector-tag', b: c, r: 0},
      {b: '{', e: '}', i: /\S/, c: [e.CBCM, t]}
    ]
  }
});
hljs.registerLanguage('leaf', function(e) {
  return {
    c: [{
      cN: 'function',
      b: '#+[A-Za-z_0-9]*\\(',
      e: ' {',
      rB: !0,
      eE: !0,
      c: [
        {cN: 'keyword', b: '#+'}, {cN: 'title', b: '[A-Za-z_][A-Za-z_0-9]*'}, {
          cN: 'params',
          b: '\\(',
          e: '\\)',
          endsParent: !0,
          c: [
            {cN: 'string', b: '"', e: '"'},
            {cN: 'variable', b: '[A-Za-z_][A-Za-z_0-9]*'}
          ]
        }
      ]
    }]
  }
});
hljs.registerLanguage('vhdl', function(e) {
  var r = '\\d(_|\\d)*', t = '[eE][-+]?' + r,
      n = r + '(\\.' + r + ')?(' + t + ')?', o = '\\w+',
      i = r + '#' + o + '(\\.' + o + ')?#(' + t + ')?',
      a = '\\b(' + i + '|' + n + ')';
  return {
    cI: !0, k: {
      keyword:
          'abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable vmode vprop vunit wait when while with xnor xor',
      built_in:
          'boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signedreal_vector time_vector',
      literal: 'false true note warning error failure line text side width'
    },
        i: '{', c: [
          e.CBCM, e.C('--', '$'), e.QSM, {cN: 'number', b: a, r: 0},
          {cN: 'string', b: '\'(U|X|0|1|Z|W|L|H|-)\'', c: [e.BE]},
          {cN: 'symbol', b: '\'[A-Za-z](_?[A-Za-z0-9])*', c: [e.BE]}
        ]
  }
});
hljs.registerLanguage('nginx', function(e) {
  var r = {
    cN: 'variable',
    v: [{b: /\$\d+/}, {b: /\$\{/, e: /}/}, {b: '[\\$\\@]' + e.UIR}]
  },
      b = {
        eW: !0,
        l: '[a-z/_]+',
        k: {
          literal:
              'on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
        },
        r: 0,
        i: '=>',
        c: [
          e.HCM,
          {cN: 'string', c: [e.BE, r], v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}]},
          {b: '([a-z]+):/', e: '\\s', eW: !0, eE: !0, c: [r]}, {
            cN: 'regexp',
            c: [e.BE, r],
            v: [
              {b: '\\s\\^', e: '\\s|{|;', rE: !0},
              {b: '~\\*?\\s+', e: '\\s|{|;', rE: !0}, {b: '\\*(\\.[a-z\\-]+)+'},
              {b: '([a-z\\-]+\\.)+\\*'}
            ]
          },
          {
            cN: 'number',
            b: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
          },
          {cN: 'number', b: '\\b\\d+[kKmMgGdshdwy]*\\b', r: 0}, r
        ]
      };
  return {
    aliases: ['nginxconf'],
        c:
            [
              e.HCM, {
                b: e.UIR + '\\s+{',
                rB: !0,
                e: '{',
                c: [{cN: 'section', b: e.UIR}],
                r: 0
              },
              {
                b: e.UIR + '\\s',
                e: ';|{',
                rB: !0,
                c: [{cN: 'attribute', b: e.UIR, starts: b}],
                r: 0
              }
            ],
        i: '[^\\s\\}]'
  }
});
hljs.registerLanguage('livescript', function(e) {
  var t = {
    keyword:
        'in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf',
    literal: 'true false null undefined yes no on off it that void',
    built_in: 'npm require console print module global window document'
  },
      s = '[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*',
      n = e.inherit(e.TM, {b: s}), i = {cN: 'subst', b: /#\{/, e: /}/, k: t},
      r = {
        cN: 'subst',
        b: /#[A-Za-z$_]/,
        e: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
        k: t
      },
      c = [
        e.BNM, {
          cN: 'number',
          b: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
          r: 0,
          starts: {e: '(\\s*/)?', r: 0}
        },
        {
          cN: 'string',
          v: [
            {b: /'''/, e: /'''/, c: [e.BE]}, {b: /'/, e: /'/, c: [e.BE]},
            {b: /"""/, e: /"""/, c: [e.BE, i, r]},
            {b: /"/, e: /"/, c: [e.BE, i, r]}, {b: /\\/, e: /(\s|$)/, eE: !0}
          ]
        },
        {
          cN: 'regexp',
          v: [
            {b: '//', e: '//[gim]*', c: [i, e.HCM]},
            {b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}
          ]
        },
        {b: '@' + s}, {b: '``', e: '``', eB: !0, eE: !0, sL: 'javascript'}
      ];
  i.c = c;
  var a = {
    cN: 'params',
    b: '\\(',
    rB: !0,
    c: [{b: /\(/, e: /\)/, k: t, c: ['self'].concat(c)}]
  };
  return {
    aliases: ['ls'], k: t, i: /\/\*/, c: c.concat([
      e.C('\\/\\*', '\\*\\/'), e.HCM, {
        cN: 'function',
        c: [n, a],
        rB: !0,
        v: [
          {
            b: '(' + s + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?',
            e: '\\->\\*?'
          },
          {
            b: '(' + s + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?',
            e: '[-~]{1,2}>\\*?'
          },
          {
            b: '(' + s + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?',
            e: '!?[-~]{1,2}>\\*?'
          }
        ]
      },
      {
        cN: 'class',
        bK: 'class',
        e: '$',
        i: /[:="\[\]]/,
        c: [{bK: 'extends', eW: !0, i: /[:="\[\]]/, c: [n]}, n]
      },
      {b: s + ':', e: ':', rB: !0, rE: !0, r: 0}
    ])
  }
});
hljs.registerLanguage('basic', function(E) {
  return {
    cI: !0, i: '^.', l: '[a-zA-Z][a-zA-Z0-9_$%!#]*', k: {
      keyword:
          'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR'
    },
        c: [
          E.QSM, E.C('REM', '$', {r: 10}), E.C('\'', '$', {r: 0}),
          {cN: 'symbol', b: '^[0-9]+ ', r: 10},
          {cN: 'number', b: '\\b([0-9]+[0-9edED.]*[#!]?)', r: 0},
          {cN: 'number', b: '(&[hH][0-9a-fA-F]{1,4})'},
          {cN: 'number', b: '(&[oO][0-7]{1,6})'}
        ]
  }
});
hljs.registerLanguage('avrasm', function(r) {
  return {
    cI: !0, l: '\\.?' + r.IR, k: {
      keyword:
          'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr',
      built_in:
          'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
      meta:
          '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set'
    },
        c: [
          r.CBCM, r.C(';', '$', {r: 0}), r.CNM, r.BNM,
          {cN: 'number', b: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)'}, r.QSM,
          {cN: 'string', b: '\'', e: '[^\\\\]\'', i: '[^\\\\][^\']'},
          {cN: 'symbol', b: '^[A-Za-z0-9_.$]+:'}, {cN: 'meta', b: '#', e: '$'},
          {cN: 'subst', b: '@[0-9]+'}
        ]
  }
});
hljs.registerLanguage('kotlin', function(e) {
  var t = {
    keyword:
        'abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit initinterface annotation data sealed internal infix operator out by constructor super trait volatile transient native default',
    built_in: 'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
    literal: 'true false null'
  },
      r = {
        cN: 'keyword',
        b: /\b(break|continue|return|this)\b/,
        starts: {c: [{cN: 'symbol', b: /@\w+/}]}
      },
      i = {cN: 'symbol', b: e.UIR + '@'},
      n = {cN: 'subst', b: '\\${', e: '}', c: [e.ASM, e.CNM]},
      a = {cN: 'variable', b: '\\$' + e.UIR}, c = {
        cN: 'string',
        v: [
          {b: '"""', e: '"""', c: [a, n]},
          {b: '\'', e: '\'', i: /\n/, c: [e.BE]},
          {b: '"', e: '"', i: /\n/, c: [e.BE, a, n]}
        ]
      },
      s = {
        cN: 'meta',
        b: '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' +
            e.UIR + ')?'
      },
      o = {
        cN: 'meta',
        b: '@' + e.UIR,
        c: [{b: /\(/, e: /\)/, c: [e.inherit(c, {cN: 'meta-string'})]}]
      };
  return {
    k: t, c: [
      e.C('/\\*\\*', '\\*/', {r: 0, c: [{cN: 'doctag', b: '@[A-Za-z]+'}]}),
      e.CLCM, e.CBCM, r, i, s, o, {
        cN: 'function',
        bK: 'fun',
        e: '[(]|$',
        rB: !0,
        eE: !0,
        k: t,
        i: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
        r: 5,
        c: [
          {b: e.UIR + '\\s*\\(', rB: !0, r: 0, c: [e.UTM]},
          {cN: 'type', b: /</, e: />/, k: 'reified', r: 0}, {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            endsParent: !0,
            k: t,
            r: 0,
            c: [
              {
                b: /:/,
                e: /[=,\/]/,
                eW: !0,
                c: [{cN: 'type', b: e.UIR}, e.CLCM, e.CBCM],
                r: 0
              },
              e.CLCM, e.CBCM, s, o, c, e.CNM
            ]
          },
          e.CBCM
        ]
      },
      {
        cN: 'class',
        bK: 'class interface trait',
        e: /[:\{(]|$/,
        eE: !0,
        i: 'extends implements',
        c: [
          {bK: 'public protected internal private constructor'}, e.UTM,
          {cN: 'type', b: /</, e: />/, eB: !0, eE: !0, r: 0},
          {cN: 'type', b: /[,:]\s*/, e: /[<\(,]|$/, eB: !0, rE: !0}, s, o
        ]
      },
      c, {cN: 'meta', b: '^#!/usr/bin/env', e: '$', i: '\n'}, e.CNM
    ]
  }
});
hljs.registerLanguage('json', function(e) {
  var i = {literal: 'true false null'}, n = [e.QSM, e.CNM],
      r = {e: ',', eW: !0, eE: !0, c: n, k: i}, t = {
        b: '{',
        e: '}',
        c: [
          {cN: 'attr', b: /"/, e: /"/, c: [e.BE], i: '\\n'},
          e.inherit(r, {b: /:/})
        ],
        i: '\\S'
      },
      c = {b: '\\[', e: '\\]', c: [e.inherit(r)], i: '\\S'};
  return n.splice(n.length, 0, t, c), {
    c: n, k: i, i: '\\S'
  }
});
hljs.registerLanguage('llvm', function(e) {
  var n = '([-a-zA-Z$._][\\w\\-$.]*)';
  return {
    k: 'begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double',
        c: [
          {cN: 'keyword', b: 'i\\d+'}, e.C(';', '\\n', {r: 0}), e.QSM,
          {cN: 'string', v: [{b: '"', e: '[^\\\\]"'}], r: 0}, {
            cN: 'title',
            v: [{b: '@' + n}, {b: '@\\d+'}, {b: '!' + n}, {b: '!\\d+' + n}]
          },
          {cN: 'symbol', v: [{b: '%' + n}, {b: '%\\d+'}, {b: '#\\d+'}]}, {
            cN: 'number',
            v: [
              {b: '0[xX][a-fA-F0-9]+'},
              {b: '-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?'}
            ],
            r: 0
          }
        ]
  }
});
hljs.registerLanguage('dockerfile', function(e) {
  return {
    aliases: ['docker'], cI: !0,
        k: 'from maintainer expose env arg user onbuild stopsignal',
        c:
            [
              e.HCM, e.ASM, e.QSM, e.NM, {
                bK: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
                starts: {e: /[^\\]\n/, sL: 'bash'}
              }
            ],
        i: '</'
  }
});
hljs.registerLanguage('htmlbars', function(e) {
  var a = 'action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view',
      t = {
        i: /\}\}/,
        b: /[a-zA-Z0-9_]+=/,
        rB: !0,
        r: 0,
        c: [{cN: 'attr', b: /[a-zA-Z0-9_]+/}]
      },
      i =
          ({
            i: /\}\}/,
            b: /\)/,
            e: /\)/,
            c: [{
              b: /[a-zA-Z\.\-]+/,
              k: {built_in: a},
              starts: {eW: !0, r: 0, c: [e.QSM]}
            }]
          },
           {
             eW: !0,
             r: 0,
             k: {keyword: 'as', built_in: a},
             c: [e.QSM, t, e.NM]
           });
  return {
    cI: !0, sL: 'xml', c: [
      e.C('{{!(--)?', '(--)?}}'), {
        cN: 'template-tag',
        b: /\{\{[#\/]/,
        e: /\}\}/,
        c: [{cN: 'name', b: /[a-zA-Z\.\-]+/, k: {'builtin-name': a}, starts: i}]
      },
      {
        cN: 'template-variable',
        b: /\{\{[a-zA-Z][a-zA-Z\-]+/,
        e: /\}\}/,
        k: {keyword: 'as', built_in: a},
        c: [e.QSM]
      }
    ]
  }
});
hljs.registerLanguage('cmake', function(e) {
  return {
    aliases: ['cmake.in'], cI: !0, k: {
      keyword:
          'add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or equal less greater strless strgreater strequal matches'
    },
        c: [{cN: 'variable', b: '\\${', e: '}'}, e.HCM, e.QSM, e.NM]
  }
});
hljs.registerLanguage('django', function(e) {
  var t = {
    b: /\|[A-Za-z]+:?/,
    k: {
      name:
          'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone'
    },
    c: [e.QSM, e.ASM]
  };
  return {
    aliases: ['jinja'], cI: !0, sL: 'xml', c: [
      e.C(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), e.C(/\{#/, /#}/), {
        cN: 'template-tag',
        b: /\{%/,
        e: /%}/,
        c: [{
          cN: 'name',
          b: /\w+/,
          k: {
            name:
                'comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim'
          },
          starts: {eW: !0, k: 'in by as', c: [t], r: 0}
        }]
      },
      {cN: 'template-variable', b: /\{\{/, e: /}}/, c: [t]}
    ]
  }
});
hljs.registerLanguage('swift', function(e) {
  var i = {
    keyword:
        '__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet',
    literal: 'true false nil',
    built_in:
        'abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip'
  },
      t = {cN: 'type', b: '\\b[A-Z][\\wÀ-ʸ\']*', r: 0},
      n = e.C('/\\*', '\\*/', {c: ['self']}),
      r = {cN: 'subst', b: /\\\(/, e: '\\)', k: i, c: []}, a = {
        cN: 'number',
        b: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
        r: 0
      },
      o = e.inherit(e.QSM, {c: [r, e.BE]});
  return r.c = [a], {
    k: i, c: [
      o, e.CLCM, n, t, a, {
        cN: 'function',
        bK: 'func',
        e: '{',
        eE: !0,
        c: [
          e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {b: /</, e: />/}, {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            endsParent: !0,
            k: i,
            c: ['self', a, o, e.CBCM, {b: ':'}],
            i: /["']/
          }
        ],
        i: /\[|%/
      },
      {
        cN: 'class',
        bK: 'struct protocol class extension enum',
        k: i,
        e: '\\{',
        eE: !0,
        c: [e.inherit(e.TM, {b: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})]
      },
      {
        cN: 'meta',
        b: '(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)'
      },
      {bK: 'import', e: /$/, c: [e.CLCM, n]}
    ]
  }
});
hljs.registerLanguage('tex', function(c) {
  var e = {
    cN: 'tag',
    b: /\\/,
    r: 0,
    c: [{
      cN: 'name',
      v: [{b: /[a-zA-Zа-яА-я]+[*]?/}, {b: /[^a-zA-Zа-яА-я0-9]/}],
      starts: {
        eW: !0,
        r: 0,
        c: [
          {cN: 'string', v: [{b: /\[/, e: /\]/}, {b: /\{/, e: /\}/}]}, {
            b: /\s*=\s*/,
            eW: !0,
            r: 0,
            c: [{cN: 'number', b: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/}]
          }
        ]
      }
    }]
  };
  return {
    c: [
      e, {
        cN: 'formula',
        c: [e],
        r: 0,
        v: [{b: /\$\$/, e: /\$\$/}, {b: /\$/, e: /\$/}]
      },
      c.C('%', '$', {r: 0})
    ]
  }
});
hljs.registerLanguage('prolog', function(c) {
  var b = {b: /[a-z][A-Za-z0-9_]*/, r: 0}, r = {
    cN: 'symbol',
    v: [{b: /[A-Z][a-zA-Z0-9_]*/}, {b: /_[A-Za-z0-9_]*/}],
    r: 0
  },
      e = {b: /\(/, e: /\)/, r: 0}, n = {b: /\[/, e: /\]/},
      a = {cN: 'comment', b: /%/, e: /$/, c: [c.PWM]},
      t = {cN: 'string', b: /`/, e: /`/, c: [c.BE]},
      g = {cN: 'string', b: /0\'(\\\'|.)/}, s = {cN: 'string', b: /0\'\\s/},
      o = {b: /:-/},
      N = [b, r, e, o, n, a, c.CBCM, c.QSM, c.ASM, t, g, s, c.CNM];
  return e.c = N, n.c = N, {
    c: N.concat([{b: /\.$/}])
  }
});
hljs.registerLanguage('taggerscript', function(e) {
  var c = {
    cN: 'comment',
    b: /\$noop\(/,
    e: /\)/,
    c: [{b: /\(/, e: /\)/, c: ['self', {b: /\\./}]}],
    r: 10
  },
      r = {
        cN: 'keyword',
        b: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
        e: /\(/,
        eE: !0
      },
      a = {cN: 'variable', b: /%[_a-zA-Z0-9:]*/, e: '%'},
      b = {cN: 'symbol', b: /\\./};
  return {
    c: [c, r, a, b]
  }
});
hljs.registerLanguage('diff', function(e) {
  return {
    aliases: ['patch'], c: [
      {
        cN: 'meta',
        r: 10,
        v: [
          {b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},
          {b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/}, {b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}
        ]
      },
      {
        cN: 'comment',
        v: [
          {b: /Index: /, e: /$/}, {b: /={3,}/, e: /$/}, {b: /^\-{3}/, e: /$/},
          {b: /^\*{3} /, e: /$/}, {b: /^\+{3}/, e: /$/},
          {b: /\*{5}/, e: /\*{5}$/}
        ]
      },
      {cN: 'addition', b: '^\\+', e: '$'}, {cN: 'deletion', b: '^\\-', e: '$'},
      {cN: 'addition', b: '^\\!', e: '$'}
    ]
  }
});
hljs.registerLanguage('perl', function(e) {
  var t = 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when',
      r = {cN: 'subst', b: '[$@]\\{', e: '\\}', k: t}, s = {b: '->{', e: '}'},
      n = {
        v: [
          {b: /\$\d/}, {b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},
          {b: /[\$%@][^\s\w{]/, r: 0}
        ]
      },
      i = [e.BE, r, n], o = [
        n, e.HCM, e.C('^\\=\\w', '\\=cut', {eW: !0}), s, {
          cN: 'string',
          c: i,
          v: [
            {b: 'q[qwxr]?\\s*\\(', e: '\\)', r: 5},
            {b: 'q[qwxr]?\\s*\\[', e: '\\]', r: 5},
            {b: 'q[qwxr]?\\s*\\{', e: '\\}', r: 5},
            {b: 'q[qwxr]?\\s*\\|', e: '\\|', r: 5},
            {b: 'q[qwxr]?\\s*\\<', e: '\\>', r: 5},
            {b: 'qw\\s+q', e: 'q', r: 5}, {b: '\'', e: '\'', c: [e.BE]},
            {b: '"', e: '"'}, {b: '`', e: '`', c: [e.BE]},
            {b: '{\\w+}', c: [], r: 0}, {b: '-?\\w+\\s*\\=\\>', c: [], r: 0}
          ]
        },
        {
          cN: 'number',
          b: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
          r: 0
        },
        {
          b: '(\\/\\/|' + e.RSR +
              '|\\b(split|return|print|reverse|grep)\\b)\\s*',
          k: 'split return print reverse grep',
          r: 0,
          c: [
            e.HCM, {
              cN: 'regexp',
              b: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
              r: 10
            },
            {cN: 'regexp', b: '(m|qr)?/', e: '/[a-z]*', c: [e.BE], r: 0}
          ]
        },
        {
          cN: 'function',
          bK: 'sub',
          e: '(\\s*\\(.*?\\))?[;{]',
          eE: !0,
          r: 5,
          c: [e.TM]
        },
        {b: '-\\w\\b', r: 0}, {
          b: '^__DATA__$',
          e: '^__END__$',
          sL: 'mojolicious',
          c: [{b: '^@@.*', e: '$', cN: 'comment'}]
        }
      ];
  return r.c = o, s.c = o, {
    aliases: ['pl', 'pm'], l: /[\w\.]+/, k: t, c: o
  }
});
hljs.registerLanguage('armasm', function(s) {
  return {
    cI: !0, aliases: ['arm'], l: '\\.?' + s.IR, k: {
      meta:
          '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
      built_in:
          'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
    },
        c: [
          {
            cN: 'keyword',
            b: '\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?',
            e: '\\s'
          },
          s.C('[;@]', '$', {r: 0}), s.CBCM, s.QSM,
          {cN: 'string', b: '\'', e: '[^\\\\]\'', r: 0},
          {cN: 'title', b: '\\|', e: '\\|', i: '\\n', r: 0}, {
            cN: 'number',
            v: [
              {b: '[#$=]?0x[0-9a-f]+'}, {b: '[#$=]?0b[01]+'}, {b: '[#$=]\\d+'},
              {b: '\\b\\d+'}
            ],
            r: 0
          },
          {
            cN: 'symbol',
            v: [
              {b: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+'},
              {b: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, {b: '[=#]\\w+'}
            ],
            r: 0
          }
        ]
  }
});
hljs.registerLanguage('lua', function(e) {
  var t = '\\[=*\\[', a = '\\]=*\\]', r = {b: t, e: a, c: ['self']},
      n = [e.C('--(?!' + t + ')', '$'), e.C('--' + t, a, {c: [r], r: 10})];
  return {
    l: e.UIR, k: {
      literal: 'true false nil',
      keyword:
          'and break do else elseif end for goto if in local not or repeat return then until while',
      built_in:
          '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove'
    },
        c: n.concat([
          {
            cN: 'function',
            bK: 'function',
            e: '\\)',
            c: [
              e.inherit(
                  e.TM,
                  {b: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
              {cN: 'params', b: '\\(', eW: !0, c: n}
            ].concat(n)
          },
          e.CNM, e.ASM, e.QSM, {cN: 'string', b: t, e: a, c: [r], r: 5}
        ])
  }
});
hljs.registerLanguage('scala', function(e) {
  var t = {cN: 'meta', b: '@[A-Za-z]+'},
      a = {cN: 'subst', v: [{b: '\\$[A-Za-z0-9_]+'}, {b: '\\${', e: '}'}]},
      r = {
        cN: 'string',
        v: [
          {b: '"', e: '"', i: '\\n', c: [e.BE]}, {b: '"""', e: '"""', r: 10},
          {b: '[a-z]+"', e: '"', i: '\\n', c: [e.BE, a]},
          {cN: 'string', b: '[a-z]+"""', e: '"""', c: [a], r: 10}
        ]
      },
      c = {cN: 'symbol', b: '\'\\w[\\w\\d_]*(?!\')'},
      i = {cN: 'type', b: '\\b[A-Z][A-Za-z0-9_]*', r: 0}, s = {
        cN: 'title',
        b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
        r: 0
      },
      n = {
        cN: 'class',
        bK: 'class object trait type',
        e: /[:={\[\n;]/,
        eE: !0,
        c: [
          {bK: 'extends with', r: 10},
          {b: /\[/, e: /\]/, eB: !0, eE: !0, r: 0, c: [i]},
          {cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, r: 0, c: [i]}, s
        ]
      },
      l = {cN: 'function', bK: 'def', e: /[:={\[(\n;]/, eE: !0, c: [s]};
  return {
    k: {
      literal: 'true false null',
      keyword:
          'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'
    },
        c: [e.CLCM, e.CBCM, r, c, i, l, n, e.CNM, t]
  }
});
hljs.registerLanguage('less', function(e) {
  var r = '[\\w-]+', t = '(' + r + '|@{' + r + '})', a = [], c = [],
      s = function(e) {
        return {
          cN: 'string', b: '~?' + e + '.*?' + e
        }
      }, b = function(e, r, t) {
        return {
          cN: e, b: r, r: t
        }
      }, n = {b: '\\(', e: '\\)', c: c, r: 0};
  c.push(
      e.CLCM, e.CBCM, s('\''), s('"'), e.CSSNM,
      {b: '(url|data-uri)\\(', starts: {cN: 'string', e: '[\\)\\n]', eE: !0}},
      b('number', '#[0-9A-Fa-f]+\\b'), n, b('variable', '@@?' + r, 10),
      b('variable', '@{' + r + '}'), b('built_in', '~?`[^`]*?`'),
      {cN: 'attribute', b: r + '\\s*:', e: ':', rB: !0, eE: !0},
      {cN: 'meta', b: '!important'});
  var i = c.concat({b: '{', e: '}', c: a}),
      o = {bK: 'when', eW: !0, c: [{bK: 'and not'}].concat(c)}, u = {
        b: t + '\\s*:',
        rB: !0,
        e: '[;}]',
        r: 0,
        c: [{
          cN: 'attribute',
          b: t,
          e: ':',
          eE: !0,
          starts: {eW: !0, i: '[<=$]', r: 0, c: c}
        }]
      },
      l = {
        cN: 'keyword',
        b: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
        starts: {e: '[;{}]', rE: !0, c: c, r: 0}
      },
      C = {
        cN: 'variable',
        v: [{b: '@' + r + '\\s*:', r: 15}, {b: '@' + r}],
        starts: {e: '[;}]', rE: !0, c: i}
      },
      p = {
        v: [{b: '[\\.#:&\\[>]', e: '[;{}]'}, {b: t, e: '{'}],
        rB: !0,
        rE: !0,
        i: '[<=\'$"]',
        r: 0,
        c: [
          e.CLCM, e.CBCM, o, b('keyword', 'all\\b'),
          b('variable', '@{' + r + '}'), b('selector-tag', t + '%?', 0),
          b('selector-id', '#' + t), b('selector-class', '\\.' + t, 0),
          b('selector-tag', '&', 0), {cN: 'selector-attr', b: '\\[', e: '\\]'},
          {cN: 'selector-pseudo', b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},
          {b: '\\(', e: '\\)', c: i}, {b: '!important'}
        ]
      };
  return a.push(e.CLCM, e.CBCM, l, C, u, p), {
    cI: !0, i: '[=>\'/<($"]', c: a
  }
});