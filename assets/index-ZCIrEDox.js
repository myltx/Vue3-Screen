const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Kr2kB-Hv.js","assets/_plugin-vue_export-helper-xTgzwAqJ.js","assets/debounce-BB6hIF6A.js","assets/index-DixO8Rdl.js","assets/index-BFJTGOtX.css","assets/middle-0snC6whW.js","assets/index-BgXccAB9.js","assets/index-CfU66_gI.css","assets/middle-BTi2r56z.css","assets/index-BygobsSd.js","assets/ljxj-Ds2gdjbp.js","assets/ljxj-C71xN07t.css","assets/index-DuNoUYb7.css","assets/index-BdR-iiRj.js","assets/index-CHKw1FzH.css"])))=>i.map(i=>d[i]);
let Du, Qm, In, Pr, be, bu, Le, ro, Su, Ut, Dm, Ir, Iu, Jm, Bm, xf, co, Ya, Wu, km, Um, Cn, Hm, Nu, Pm, ty, Ks, Zm, Bl, $a, Ia, cy, qm, Ym, Fm, Gm, sy, ny, bg, Tf, iy, La, ey, $m, ly, Re, Lm, Vn, zm, Ne, _e, sn, Mt, Nm, Km, Vm, We, it, hr, Mu, Pn, en, Rr, rr, Cf, Te, gu, oe, He, Wm, xe, Xm, ry, oy;
let __tla = (async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);
        new MutationObserver((s)=>{
            for (const o of s)if (o.type === "childList") for (const i of o.addedNodes)i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(s) {
            const o = {};
            return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function r(s) {
            if (s.ep) return;
            s.ep = !0;
            const o = n(s);
            fetch(s.href, o);
        }
    })();
    function Vs(e) {
        const t = Object.create(null);
        for (const n of e.split(","))t[n] = 1;
        return (n)=>n in t;
    }
    const de = {}, Yt = [], ot = ()=>{}, Da = ()=>!1, Sr = (e)=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bs = (e)=>e.startsWith("onUpdate:"), we = Object.assign, Us = (e, t)=>{
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    }, Fa = Object.prototype.hasOwnProperty, ue = (e, t)=>Fa.call(e, t), X = Array.isArray, Zt = (e)=>wr(e) === "[object Map]", Ji = (e)=>wr(e) === "[object Set]", te = (e)=>typeof e == "function", ve = (e)=>typeof e == "string", mt = (e)=>typeof e == "symbol", ge = (e)=>e !== null && typeof e == "object", Qi = (e)=>(ge(e) || te(e)) && te(e.then) && te(e.catch), Xi = Object.prototype.toString, wr = (e)=>Xi.call(e), ka = (e)=>wr(e).slice(8, -1), el = (e)=>wr(e) === "[object Object]", Ws = (e)=>ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dn = Vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), xr = (e)=>{
        const t = Object.create(null);
        return (n)=>t[n] || (t[n] = e(n));
    }, Ha = /-(\w)/g, ze = xr((e)=>e.replace(Ha, (t, n)=>n ? n.toUpperCase() : "")), Va = /\B([A-Z])/g, Bt = xr((e)=>e.replace(Va, "-$1").toLowerCase()), Or = xr((e)=>e.charAt(0).toUpperCase() + e.slice(1)), Vr = xr((e)=>e ? `on${Or(e)}` : ""), Tt = (e, t)=>!Object.is(e, t), tr = (e, ...t)=>{
        for(let n = 0; n < e.length; n++)e[n](...t);
    }, ds = (e, t, n, r = !1)=>{
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n
        });
    }, ps = (e)=>{
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    }, Ba = (e)=>{
        const t = ve(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t;
    };
    let Po;
    const Er = ()=>Po || (Po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    Cn = function(e) {
        if (X(e)) {
            const t = {};
            for(let n = 0; n < e.length; n++){
                const r = e[n], s = ve(r) ? qa(r) : Cn(r);
                if (s) for(const o in s)t[o] = s[o];
            }
            return t;
        } else if (ve(e) || ge(e)) return e;
    };
    const Ua = /;(?![^(]*\))/g, Wa = /:([^]+)/, Ka = /\/\*[^]*?\*\//g;
    function qa(e) {
        const t = {};
        return e.replace(Ka, "").split(Ua).forEach((n)=>{
            if (n) {
                const r = n.split(Wa);
                r.length > 1 && (t[r[0].trim()] = r[1].trim());
            }
        }), t;
    }
    Ks = function(e) {
        let t = "";
        if (ve(e)) t = e;
        else if (X(e)) for(let n = 0; n < e.length; n++){
            const r = Ks(e[n]);
            r && (t += r + " ");
        }
        else if (ge(e)) for(const n in e)e[n] && (t += n + " ");
        return t.trim();
    };
    const za = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ga = Vs(za);
    function tl(e) {
        return !!e || e === "";
    }
    let nl, rl, Br;
    nl = (e)=>!!(e && e.__v_isRef === !0);
    Ya = (e)=>ve(e) ? e : e == null ? "" : X(e) || ge(e) && (e.toString === Xi || !te(e.toString)) ? nl(e) ? Ya(e.value) : JSON.stringify(e, rl, 2) : String(e);
    rl = (e, t)=>nl(t) ? rl(e, t.value) : Zt(t) ? {
            [`Map(${t.size})`]: [
                ...t.entries()
            ].reduce((n, [r, s], o)=>(n[Br(r, o) + " =>"] = s, n), {})
        } : Ji(t) ? {
            [`Set(${t.size})`]: [
                ...t.values()
            ].map((n)=>Br(n))
        } : mt(t) ? Br(t) : ge(t) && !X(t) && !el(t) ? String(t) : t;
    Br = (e, t = "")=>{
        var n;
        return mt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
    };
    let Ae;
    class sl {
        constructor(t = !1){
            this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1);
        }
        get active() {
            return this._active;
        }
        pause() {
            if (this._active) {
                this._isPaused = !0;
                let t, n;
                if (this.scopes) for(t = 0, n = this.scopes.length; t < n; t++)this.scopes[t].pause();
                for(t = 0, n = this.effects.length; t < n; t++)this.effects[t].pause();
            }
        }
        resume() {
            if (this._active && this._isPaused) {
                this._isPaused = !1;
                let t, n;
                if (this.scopes) for(t = 0, n = this.scopes.length; t < n; t++)this.scopes[t].resume();
                for(t = 0, n = this.effects.length; t < n; t++)this.effects[t].resume();
            }
        }
        run(t) {
            if (this._active) {
                const n = Ae;
                try {
                    return Ae = this, t();
                } finally{
                    Ae = n;
                }
            }
        }
        on() {
            ++this._on === 1 && (this.prevScope = Ae, Ae = this);
        }
        off() {
            this._on > 0 && --this._on === 0 && (Ae = this.prevScope, this.prevScope = void 0);
        }
        stop(t) {
            if (this._active) {
                this._active = !1;
                let n, r;
                for(n = 0, r = this.effects.length; n < r; n++)this.effects[n].stop();
                for(this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)this.cleanups[n]();
                if (this.cleanups.length = 0, this.scopes) {
                    for(n = 0, r = this.scopes.length; n < r; n++)this.scopes[n].stop(!0);
                    this.scopes.length = 0;
                }
                if (!this.detached && this.parent && !t) {
                    const s = this.parent.scopes.pop();
                    s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
                }
                this.parent = void 0;
            }
        }
    }
    function ol(e) {
        return new sl(e);
    }
    function qs() {
        return Ae;
    }
    function il(e, t = !1) {
        Ae && Ae.cleanups.push(e);
    }
    let he;
    const Ur = new WeakSet;
    class ll {
        constructor(t){
            this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && Ae.active && Ae.effects.push(this);
        }
        pause() {
            this.flags |= 64;
        }
        resume() {
            this.flags & 64 && (this.flags &= -65, Ur.has(this) && (Ur.delete(this), this.trigger()));
        }
        notify() {
            this.flags & 2 && !(this.flags & 32) || this.flags & 8 || al(this);
        }
        run() {
            if (!(this.flags & 1)) return this.fn();
            this.flags |= 2, $o(this), ul(this);
            const t = he, n = Ge;
            he = this, Ge = !0;
            try {
                return this.fn();
            } finally{
                fl(this), he = t, Ge = n, this.flags &= -3;
            }
        }
        stop() {
            if (this.flags & 1) {
                for(let t = this.deps; t; t = t.nextDep)Ys(t);
                this.deps = this.depsTail = void 0, $o(this), this.onStop && this.onStop(), this.flags &= -2;
            }
        }
        trigger() {
            this.flags & 64 ? Ur.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
        }
        runIfDirty() {
            hs(this) && this.run();
        }
        get dirty() {
            return hs(this);
        }
    }
    let cl = 0, pn, hn;
    function al(e, t = !1) {
        if (e.flags |= 8, t) {
            e.next = hn, hn = e;
            return;
        }
        e.next = pn, pn = e;
    }
    function zs() {
        cl++;
    }
    function Gs() {
        if (--cl > 0) return;
        if (hn) {
            let t = hn;
            for(hn = void 0; t;){
                const n = t.next;
                t.next = void 0, t.flags &= -9, t = n;
            }
        }
        let e;
        for(; pn;){
            let t = pn;
            for(pn = void 0; t;){
                const n = t.next;
                if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                    t.trigger();
                } catch (r) {
                    e || (e = r);
                }
                t = n;
            }
        }
        if (e) throw e;
    }
    function ul(e) {
        for(let t = e.deps; t; t = t.nextDep)t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
    }
    function fl(e) {
        let t, n = e.depsTail, r = n;
        for(; r;){
            const s = r.prevDep;
            r.version === -1 ? (r === n && (n = s), Ys(r), Za(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
        }
        e.deps = t, e.depsTail = n;
    }
    function hs(e) {
        for(let t = e.deps; t; t = t.nextDep)if (t.dep.version !== t.version || t.dep.computed && (dl(t.dep.computed) || t.dep.version !== t.version)) return !0;
        return !!e._dirty;
    }
    function dl(e) {
        if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Tn) || (e.globalVersion = Tn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hs(e)))) return;
        e.flags |= 2;
        const t = e.dep, n = he, r = Ge;
        he = e, Ge = !0;
        try {
            ul(e);
            const s = e.fn(e._value);
            (t.version === 0 || Tt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
        } catch (s) {
            throw t.version++, s;
        } finally{
            he = n, Ge = r, fl(e), e.flags &= -3;
        }
    }
    function Ys(e, t = !1) {
        const { dep: n, prevSub: r, nextSub: s } = e;
        if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
            n.computed.flags &= -5;
            for(let o = n.computed.deps; o; o = o.nextDep)Ys(o, !0);
        }
        !t && !--n.sc && n.map && n.map.delete(n.key);
    }
    function Za(e) {
        const { prevDep: t, nextDep: n } = e;
        t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
    }
    let Ge = !0;
    const pl = [];
    function ht() {
        pl.push(Ge), Ge = !1;
    }
    function gt() {
        const e = pl.pop();
        Ge = e === void 0 ? !0 : e;
    }
    function $o(e) {
        const { cleanup: t } = e;
        if (e.cleanup = void 0, t) {
            const n = he;
            he = void 0;
            try {
                t();
            } finally{
                he = n;
            }
        }
    }
    let Tn = 0;
    class Ja {
        constructor(t, n){
            this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
        }
    }
    class Zs {
        constructor(t){
            this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
        }
        track(t) {
            if (!he || !Ge || he === this.computed) return;
            let n = this.activeLink;
            if (n === void 0 || n.sub !== he) n = this.activeLink = new Ja(he, this), he.deps ? (n.prevDep = he.depsTail, he.depsTail.nextDep = n, he.depsTail = n) : he.deps = he.depsTail = n, hl(n);
            else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
                const r = n.nextDep;
                r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = he.depsTail, n.nextDep = void 0, he.depsTail.nextDep = n, he.depsTail = n, he.deps === n && (he.deps = r);
            }
            return n;
        }
        trigger(t) {
            this.version++, Tn++, this.notify(t);
        }
        notify(t) {
            zs();
            try {
                for(let n = this.subs; n; n = n.prevSub)n.sub.notify() && n.sub.dep.notify();
            } finally{
                Gs();
            }
        }
    }
    function hl(e) {
        if (e.dep.sc++, e.sub.flags & 4) {
            const t = e.dep.computed;
            if (t && !e.dep.subs) {
                t.flags |= 20;
                for(let r = t.deps; r; r = r.nextDep)hl(r);
            }
            const n = e.dep.subs;
            n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
        }
    }
    const cr = new WeakMap, Ft = Symbol(""), gs = Symbol(""), An = Symbol("");
    function Me(e, t, n) {
        if (Ge && he) {
            let r = cr.get(e);
            r || cr.set(e, r = new Map);
            let s = r.get(n);
            s || (r.set(n, s = new Zs), s.map = r, s.key = n), s.track();
        }
    }
    function ut(e, t, n, r, s, o) {
        const i = cr.get(e);
        if (!i) {
            Tn++;
            return;
        }
        const l = (c)=>{
            c && c.trigger();
        };
        if (zs(), t === "clear") i.forEach(l);
        else {
            const c = X(e), u = c && Ws(n);
            if (c && n === "length") {
                const a = Number(r);
                i.forEach((f, d)=>{
                    (d === "length" || d === An || !mt(d) && d >= a) && l(f);
                });
            } else switch((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(An)), t){
                case "add":
                    c ? u && l(i.get("length")) : (l(i.get(Ft)), Zt(e) && l(i.get(gs)));
                    break;
                case "delete":
                    c || (l(i.get(Ft)), Zt(e) && l(i.get(gs)));
                    break;
                case "set":
                    Zt(e) && l(i.get(Ft));
                    break;
            }
        }
        Gs();
    }
    function Qa(e, t) {
        const n = cr.get(e);
        return n && n.get(t);
    }
    function Wt(e) {
        const t = oe(e);
        return t === e ? t : (Me(t, "iterate", An), qe(e) ? t : t.map(Ee));
    }
    function Cr(e) {
        return Me(e = oe(e), "iterate", An), e;
    }
    const Xa = {
        __proto__: null,
        [Symbol.iterator] () {
            return Wr(this, Symbol.iterator, Ee);
        },
        concat (...e) {
            return Wt(this).concat(...e.map((t)=>X(t) ? Wt(t) : t));
        },
        entries () {
            return Wr(this, "entries", (e)=>(e[1] = Ee(e[1]), e));
        },
        every (e, t) {
            return lt(this, "every", e, t, void 0, arguments);
        },
        filter (e, t) {
            return lt(this, "filter", e, t, (n)=>n.map(Ee), arguments);
        },
        find (e, t) {
            return lt(this, "find", e, t, Ee, arguments);
        },
        findIndex (e, t) {
            return lt(this, "findIndex", e, t, void 0, arguments);
        },
        findLast (e, t) {
            return lt(this, "findLast", e, t, Ee, arguments);
        },
        findLastIndex (e, t) {
            return lt(this, "findLastIndex", e, t, void 0, arguments);
        },
        forEach (e, t) {
            return lt(this, "forEach", e, t, void 0, arguments);
        },
        includes (...e) {
            return Kr(this, "includes", e);
        },
        indexOf (...e) {
            return Kr(this, "indexOf", e);
        },
        join (e) {
            return Wt(this).join(e);
        },
        lastIndexOf (...e) {
            return Kr(this, "lastIndexOf", e);
        },
        map (e, t) {
            return lt(this, "map", e, t, void 0, arguments);
        },
        pop () {
            return ln(this, "pop");
        },
        push (...e) {
            return ln(this, "push", e);
        },
        reduce (e, ...t) {
            return Io(this, "reduce", e, t);
        },
        reduceRight (e, ...t) {
            return Io(this, "reduceRight", e, t);
        },
        shift () {
            return ln(this, "shift");
        },
        some (e, t) {
            return lt(this, "some", e, t, void 0, arguments);
        },
        splice (...e) {
            return ln(this, "splice", e);
        },
        toReversed () {
            return Wt(this).toReversed();
        },
        toSorted (e) {
            return Wt(this).toSorted(e);
        },
        toSpliced (...e) {
            return Wt(this).toSpliced(...e);
        },
        unshift (...e) {
            return ln(this, "unshift", e);
        },
        values () {
            return Wr(this, "values", Ee);
        }
    };
    function Wr(e, t, n) {
        const r = Cr(e), s = r[t]();
        return r !== e && !qe(e) && (s._next = s.next, s.next = ()=>{
            const o = s._next();
            return o.value && (o.value = n(o.value)), o;
        }), s;
    }
    const eu = Array.prototype;
    function lt(e, t, n, r, s, o) {
        const i = Cr(e), l = i !== e && !qe(e), c = i[t];
        if (c !== eu[t]) {
            const f = c.apply(e, o);
            return l ? Ee(f) : f;
        }
        let u = n;
        i !== e && (l ? u = function(f, d) {
            return n.call(this, Ee(f), d, e);
        } : n.length > 2 && (u = function(f, d) {
            return n.call(this, f, d, e);
        }));
        const a = c.call(i, u, r);
        return l && s ? s(a) : a;
    }
    function Io(e, t, n, r) {
        const s = Cr(e);
        let o = n;
        return s !== e && (qe(e) ? n.length > 3 && (o = function(i, l, c) {
            return n.call(this, i, l, c, e);
        }) : o = function(i, l, c) {
            return n.call(this, i, Ee(l), c, e);
        }), s[t](o, ...r);
    }
    function Kr(e, t, n) {
        const r = oe(e);
        Me(r, "iterate", An);
        const s = r[t](...n);
        return (s === -1 || s === !1) && Xs(n[0]) ? (n[0] = oe(n[0]), r[t](...n)) : s;
    }
    function ln(e, t, n = []) {
        ht(), zs();
        const r = oe(e)[t].apply(e, n);
        return Gs(), gt(), r;
    }
    const tu = Vs("__proto__,__v_isRef,__isVue"), gl = new Set(Object.getOwnPropertyNames(Symbol).filter((e)=>e !== "arguments" && e !== "caller").map((e)=>Symbol[e]).filter(mt));
    function nu(e) {
        mt(e) || (e = String(e));
        const t = oe(this);
        return Me(t, "has", e), t.hasOwnProperty(e);
    }
    class ml {
        constructor(t = !1, n = !1){
            this._isReadonly = t, this._isShallow = n;
        }
        get(t, n, r) {
            if (n === "__v_skip") return t.__v_skip;
            const s = this._isReadonly, o = this._isShallow;
            if (n === "__v_isReactive") return !s;
            if (n === "__v_isReadonly") return s;
            if (n === "__v_isShallow") return o;
            if (n === "__v_raw") return r === (s ? o ? du : _l : o ? vl : bl).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
            const i = X(t);
            if (!s) {
                let c;
                if (i && (c = Xa[n])) return c;
                if (n === "hasOwnProperty") return nu;
            }
            const l = Reflect.get(t, n, be(t) ? t : r);
            return (mt(n) ? gl.has(n) : tu(n)) || (s || Me(t, "get", n), o) ? l : be(l) ? i && Ws(n) ? l : l.value : ge(l) ? s ? wl(l) : it(l) : l;
        }
    }
    class yl extends ml {
        constructor(t = !1){
            super(!1, t);
        }
        set(t, n, r, s) {
            let o = t[n];
            if (!this._isShallow) {
                const c = At(o);
                if (!qe(r) && !At(r) && (o = oe(o), r = oe(r)), !X(t) && be(o) && !be(r)) return c ? !1 : (o.value = r, !0);
            }
            const i = X(t) && Ws(n) ? Number(n) < t.length : ue(t, n), l = Reflect.set(t, n, r, be(t) ? t : s);
            return t === oe(s) && (i ? Tt(r, o) && ut(t, "set", n, r) : ut(t, "add", n, r)), l;
        }
        deleteProperty(t, n) {
            const r = ue(t, n);
            t[n];
            const s = Reflect.deleteProperty(t, n);
            return s && r && ut(t, "delete", n, void 0), s;
        }
        has(t, n) {
            const r = Reflect.has(t, n);
            return (!mt(n) || !gl.has(n)) && Me(t, "has", n), r;
        }
        ownKeys(t) {
            return Me(t, "iterate", X(t) ? "length" : Ft), Reflect.ownKeys(t);
        }
    }
    class ru extends ml {
        constructor(t = !1){
            super(!0, t);
        }
        set(t, n) {
            return !0;
        }
        deleteProperty(t, n) {
            return !0;
        }
    }
    const su = new yl, ou = new ru, iu = new yl(!0);
    const ms = (e)=>e, zn = (e)=>Reflect.getPrototypeOf(e);
    function lu(e, t, n) {
        return function(...r) {
            const s = this.__v_raw, o = oe(s), i = Zt(o), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = s[e](...r), a = n ? ms : t ? ar : Ee;
            return !t && Me(o, "iterate", c ? gs : Ft), {
                next () {
                    const { value: f, done: d } = u.next();
                    return d ? {
                        value: f,
                        done: d
                    } : {
                        value: l ? [
                            a(f[0]),
                            a(f[1])
                        ] : a(f),
                        done: d
                    };
                },
                [Symbol.iterator] () {
                    return this;
                }
            };
        };
    }
    function Gn(e) {
        return function(...t) {
            return e === "delete" ? !1 : e === "clear" ? void 0 : this;
        };
    }
    function cu(e, t) {
        const n = {
            get (s) {
                const o = this.__v_raw, i = oe(o), l = oe(s);
                e || (Tt(s, l) && Me(i, "get", s), Me(i, "get", l));
                const { has: c } = zn(i), u = t ? ms : e ? ar : Ee;
                if (c.call(i, s)) return u(o.get(s));
                if (c.call(i, l)) return u(o.get(l));
                o !== i && o.get(s);
            },
            get size () {
                const s = this.__v_raw;
                return !e && Me(oe(s), "iterate", Ft), Reflect.get(s, "size", s);
            },
            has (s) {
                const o = this.__v_raw, i = oe(o), l = oe(s);
                return e || (Tt(s, l) && Me(i, "has", s), Me(i, "has", l)), s === l ? o.has(s) : o.has(s) || o.has(l);
            },
            forEach (s, o) {
                const i = this, l = i.__v_raw, c = oe(l), u = t ? ms : e ? ar : Ee;
                return !e && Me(c, "iterate", Ft), l.forEach((a, f)=>s.call(o, u(a), u(f), i));
            }
        };
        return we(n, e ? {
            add: Gn("add"),
            set: Gn("set"),
            delete: Gn("delete"),
            clear: Gn("clear")
        } : {
            add (s) {
                !t && !qe(s) && !At(s) && (s = oe(s));
                const o = oe(this);
                return zn(o).has.call(o, s) || (o.add(s), ut(o, "add", s, s)), this;
            },
            set (s, o) {
                !t && !qe(o) && !At(o) && (o = oe(o));
                const i = oe(this), { has: l, get: c } = zn(i);
                let u = l.call(i, s);
                u || (s = oe(s), u = l.call(i, s));
                const a = c.call(i, s);
                return i.set(s, o), u ? Tt(o, a) && ut(i, "set", s, o) : ut(i, "add", s, o), this;
            },
            delete (s) {
                const o = oe(this), { has: i, get: l } = zn(o);
                let c = i.call(o, s);
                c || (s = oe(s), c = i.call(o, s)), l && l.call(o, s);
                const u = o.delete(s);
                return c && ut(o, "delete", s, void 0), u;
            },
            clear () {
                const s = oe(this), o = s.size !== 0, i = s.clear();
                return o && ut(s, "clear", void 0, void 0), i;
            }
        }), [
            "keys",
            "values",
            "entries",
            Symbol.iterator
        ].forEach((s)=>{
            n[s] = lu(s, e, t);
        }), n;
    }
    function Js(e, t) {
        const n = cu(e, t);
        return (r, s, o)=>s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(ue(n, s) && s in r ? n : r, s, o);
    }
    const au = {
        get: Js(!1, !1)
    }, uu = {
        get: Js(!1, !0)
    }, fu = {
        get: Js(!0, !1)
    };
    const bl = new WeakMap, vl = new WeakMap, _l = new WeakMap, du = new WeakMap;
    function pu(e) {
        switch(e){
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0;
        }
    }
    function hu(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : pu(ka(e));
    }
    it = function(e) {
        return At(e) ? e : Qs(e, !1, su, au, bl);
    };
    function Sl(e) {
        return Qs(e, !1, iu, uu, vl);
    }
    function wl(e) {
        return Qs(e, !0, ou, fu, _l);
    }
    function Qs(e, t, n, r, s) {
        if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = hu(e);
        if (o === 0) return e;
        const i = s.get(e);
        if (i) return i;
        const l = new Proxy(e, o === 2 ? r : n);
        return s.set(e, l), l;
    }
    function pt(e) {
        return At(e) ? pt(e.__v_raw) : !!(e && e.__v_isReactive);
    }
    function At(e) {
        return !!(e && e.__v_isReadonly);
    }
    function qe(e) {
        return !!(e && e.__v_isShallow);
    }
    function Xs(e) {
        return e ? !!e.__v_raw : !1;
    }
    oe = function(e) {
        const t = e && e.__v_raw;
        return t ? oe(t) : e;
    };
    function eo(e) {
        return !ue(e, "__v_skip") && Object.isExtensible(e) && ds(e, "__v_skip", !0), e;
    }
    const Ee = (e)=>ge(e) ? it(e) : e, ar = (e)=>ge(e) ? wl(e) : e;
    be = function(e) {
        return e ? e.__v_isRef === !0 : !1;
    };
    Te = function(e) {
        return xl(e, !1);
    };
    gu = function(e) {
        return xl(e, !0);
    };
    function xl(e, t) {
        return be(e) ? e : new mu(e, t);
    }
    class mu {
        constructor(t, n){
            this.dep = new Zs, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : oe(t), this._value = n ? t : Ee(t), this.__v_isShallow = n;
        }
        get value() {
            return this.dep.track(), this._value;
        }
        set value(t) {
            const n = this._rawValue, r = this.__v_isShallow || qe(t) || At(t);
            t = r ? t : oe(t), Tt(t, n) && (this._rawValue = t, this._value = r ? t : Ee(t), this.dep.trigger());
        }
    }
    Lm = function(e) {
        e.dep && e.dep.trigger();
    };
    He = function(e) {
        return be(e) ? e.value : e;
    };
    const yu = {
        get: (e, t, n)=>t === "__v_raw" ? e : He(Reflect.get(e, t, n)),
        set: (e, t, n, r)=>{
            const s = e[t];
            return be(s) && !be(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
        }
    };
    function Ol(e) {
        return pt(e) ? e : new Proxy(e, yu);
    }
    bu = function(e) {
        const t = X(e) ? new Array(e.length) : {};
        for(const n in e)t[n] = El(e, n);
        return t;
    };
    class vu {
        constructor(t, n, r){
            this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
        }
        get value() {
            const t = this._object[this._key];
            return this._value = t === void 0 ? this._defaultValue : t;
        }
        set value(t) {
            this._object[this._key] = t;
        }
        get dep() {
            return Qa(oe(this._object), this._key);
        }
    }
    class _u {
        constructor(t){
            this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
        }
        get value() {
            return this._value = this._getter();
        }
    }
    Su = function(e, t, n) {
        return be(e) ? e : te(e) ? new _u(e) : ge(e) && arguments.length > 1 ? El(e, t, n) : Te(e);
    };
    function El(e, t, n) {
        const r = e[t];
        return be(r) ? r : new vu(e, t, n);
    }
    class wu {
        constructor(t, n, r){
            this.fn = t, this.setter = n, this._value = void 0, this.dep = new Zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Tn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
        }
        notify() {
            if (this.flags |= 16, !(this.flags & 8) && he !== this) return al(this, !0), !0;
        }
        get value() {
            const t = this.dep.track();
            return dl(this), t && (t.version = this.dep.version), this._value;
        }
        set value(t) {
            this.setter && this.setter(t);
        }
    }
    function xu(e, t, n = !1) {
        let r, s;
        return te(e) ? r = e : (r = e.get, s = e.set), new wu(r, s, n);
    }
    const Yn = {}, ur = new WeakMap;
    let Lt;
    function Ou(e, t = !1, n = Lt) {
        if (n) {
            let r = ur.get(n);
            r || ur.set(n, r = []), r.push(e);
        }
    }
    function Eu(e, t, n = de) {
        const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: l, call: c } = n, u = (v)=>s ? v : qe(v) || s === !1 || s === 0 ? ft(v, 1) : ft(v);
        let a, f, d, h, m = !1, y = !1;
        if (be(e) ? (f = ()=>e.value, m = qe(e)) : pt(e) ? (f = ()=>u(e), m = !0) : X(e) ? (y = !0, m = e.some((v)=>pt(v) || qe(v)), f = ()=>e.map((v)=>{
                if (be(v)) return v.value;
                if (pt(v)) return u(v);
                if (te(v)) return c ? c(v, 2) : v();
            })) : te(e) ? t ? f = c ? ()=>c(e, 2) : e : f = ()=>{
            if (d) {
                ht();
                try {
                    d();
                } finally{
                    gt();
                }
            }
            const v = Lt;
            Lt = a;
            try {
                return c ? c(e, 3, [
                    h
                ]) : e(h);
            } finally{
                Lt = v;
            }
        } : f = ot, t && s) {
            const v = f, M = s === !0 ? 1 / 0 : s;
            f = ()=>ft(v(), M);
        }
        const _ = qs(), x = ()=>{
            a.stop(), _ && _.active && Us(_.effects, a);
        };
        if (o && t) {
            const v = t;
            t = (...M)=>{
                v(...M), x();
            };
        }
        let C = y ? new Array(e.length).fill(Yn) : Yn;
        const S = (v)=>{
            if (!(!(a.flags & 1) || !a.dirty && !v)) if (t) {
                const M = a.run();
                if (s || m || (y ? M.some((U, G)=>Tt(U, C[G])) : Tt(M, C))) {
                    d && d();
                    const U = Lt;
                    Lt = a;
                    try {
                        const G = [
                            M,
                            C === Yn ? void 0 : y && C[0] === Yn ? [] : C,
                            h
                        ];
                        C = M, c ? c(t, 3, G) : t(...G);
                    } finally{
                        Lt = U;
                    }
                }
            } else a.run();
        };
        return l && l(S), a = new ll(f), a.scheduler = i ? ()=>i(S, !1) : S, h = (v)=>Ou(v, !1, a), d = a.onStop = ()=>{
            const v = ur.get(a);
            if (v) {
                if (c) c(v, 4);
                else for (const M of v)M();
                ur.delete(a);
            }
        }, t ? r ? S(!0) : C = a.run() : i ? i(S.bind(null, !0), !0) : a.run(), x.pause = a.pause.bind(a), x.resume = a.resume.bind(a), x.stop = x, x;
    }
    function ft(e, t = 1 / 0, n) {
        if (t <= 0 || !ge(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
        if (n.add(e), t--, be(e)) ft(e.value, t, n);
        else if (X(e)) for(let r = 0; r < e.length; r++)ft(e[r], t, n);
        else if (Ji(e) || Zt(e)) e.forEach((r)=>{
            ft(r, t, n);
        });
        else if (el(e)) {
            for(const r in e)ft(e[r], t, n);
            for (const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e, r) && ft(e[r], t, n);
        }
        return e;
    }
    function kn(e, t, n, r) {
        try {
            return r ? e(...r) : e();
        } catch (s) {
            Tr(s, t, n);
        }
    }
    function Ye(e, t, n, r) {
        if (te(e)) {
            const s = kn(e, t, n, r);
            return s && Qi(s) && s.catch((o)=>{
                Tr(o, t, n);
            }), s;
        }
        if (X(e)) {
            const s = [];
            for(let o = 0; o < e.length; o++)s.push(Ye(e[o], t, n, r));
            return s;
        }
    }
    function Tr(e, t, n, r = !0) {
        const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || de;
        if (t) {
            let l = t.parent;
            const c = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
            for(; l;){
                const a = l.ec;
                if (a) {
                    for(let f = 0; f < a.length; f++)if (a[f](e, c, u) === !1) return;
                }
                l = l.parent;
            }
            if (o) {
                ht(), kn(o, null, 10, [
                    e,
                    c,
                    u
                ]), gt();
                return;
            }
        }
        Cu(e, n, s, r, i);
    }
    function Cu(e, t, n, r = !0, s = !1) {
        if (s) throw e;
    }
    const je = [];
    let rt = -1;
    const Jt = [];
    let wt = null, qt = 0;
    const Cl = Promise.resolve();
    let fr = null;
    en = function(e) {
        const t = fr || Cl;
        return e ? t.then(this ? e.bind(this) : e) : t;
    };
    function Tu(e) {
        let t = rt + 1, n = je.length;
        for(; t < n;){
            const r = t + n >>> 1, s = je[r], o = Mn(s);
            o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
        }
        return t;
    }
    function to(e) {
        if (!(e.flags & 1)) {
            const t = Mn(e), n = je[je.length - 1];
            !n || !(e.flags & 2) && t >= Mn(n) ? je.push(e) : je.splice(Tu(t), 0, e), e.flags |= 1, Tl();
        }
    }
    function Tl() {
        fr || (fr = Cl.then(Ml));
    }
    function Au(e) {
        X(e) ? Jt.push(...e) : wt && e.id === -1 ? wt.splice(qt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), Tl();
    }
    function jo(e, t, n = rt + 1) {
        for(; n < je.length; n++){
            const r = je[n];
            if (r && r.flags & 2) {
                if (e && r.id !== e.uid) continue;
                je.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
            }
        }
    }
    function Al(e) {
        if (Jt.length) {
            const t = [
                ...new Set(Jt)
            ].sort((n, r)=>Mn(n) - Mn(r));
            if (Jt.length = 0, wt) {
                wt.push(...t);
                return;
            }
            for(wt = t, qt = 0; qt < wt.length; qt++){
                const n = wt[qt];
                n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
            }
            wt = null, qt = 0;
        }
    }
    const Mn = (e)=>e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
    function Ml(e) {
        try {
            for(rt = 0; rt < je.length; rt++){
                const t = je[rt];
                t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), kn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
            }
        } finally{
            for(; rt < je.length; rt++){
                const t = je[rt];
                t && (t.flags &= -2);
            }
            rt = -1, je.length = 0, Al(), fr = null, (je.length || Jt.length) && Ml();
        }
    }
    let Ce = null, Rl = null;
    function dr(e) {
        const t = Ce;
        return Ce = e, Rl = e && e.type.__scopeId || null, t;
    }
    Mu = function(e, t = Ce, n) {
        if (!t || e._n) return e;
        const r = (...s)=>{
            r._d && Go(-1);
            const o = dr(t);
            let i;
            try {
                i = e(...s);
            } finally{
                dr(o), r._d && Go(1);
            }
            return i;
        };
        return r._n = !0, r._c = !0, r._d = !0, r;
    };
    Nm = function(e, t) {
        if (Ce === null) return e;
        const n = jr(Ce), r = e.dirs || (e.dirs = []);
        for(let s = 0; s < t.length; s++){
            let [o, i, l, c = de] = t[s];
            o && (te(o) && (o = {
                mounted: o,
                updated: o
            }), o.deep && ft(i), r.push({
                dir: o,
                instance: n,
                value: i,
                oldValue: void 0,
                arg: l,
                modifiers: c
            }));
        }
        return e;
    };
    function Rt(e, t, n, r) {
        const s = e.dirs, o = t && t.dirs;
        for(let i = 0; i < s.length; i++){
            const l = s[i];
            o && (l.oldValue = o[i].value);
            let c = l.dir[r];
            c && (ht(), Ye(c, n, 8, [
                e.el,
                l,
                e,
                t
            ]), gt());
        }
    }
    const Pl = Symbol("_vte"), $l = (e)=>e.__isTeleport, gn = (e)=>e && (e.disabled || e.disabled === ""), Lo = (e)=>e && (e.defer || e.defer === ""), No = (e)=>typeof SVGElement < "u" && e instanceof SVGElement, Do = (e)=>typeof MathMLElement == "function" && e instanceof MathMLElement, ys = (e, t)=>{
        const n = e && e.to;
        return ve(n) ? t ? t(n) : null : n;
    }, Il = {
        name: "Teleport",
        __isTeleport: !0,
        process (e, t, n, r, s, o, i, l, c, u) {
            const { mc: a, pc: f, pbc: d, o: { insert: h, querySelector: m, createText: y, createComment: _ } } = u, x = gn(t.props);
            let { shapeFlag: C, children: S, dynamicChildren: v } = t;
            if (e == null) {
                const M = t.el = y(""), U = t.anchor = y("");
                h(M, n, r), h(U, n, r);
                const G = (P, W)=>{
                    C & 16 && (s && s.isCE && (s.ce._teleportTarget = P), a(S, P, W, s, o, i, l, c));
                }, q = ()=>{
                    const P = t.target = ys(t.props, m), W = jl(P, t, y, h);
                    P && (i !== "svg" && No(P) ? i = "svg" : i !== "mathml" && Do(P) && (i = "mathml"), x || (G(P, W), nr(t, !1)));
                };
                x && (G(n, U), nr(t, !0)), Lo(t.props) ? (t.el.__isMounted = !1, Ie(()=>{
                    q(), delete t.el.__isMounted;
                }, o)) : q();
            } else {
                if (Lo(t.props) && e.el.__isMounted === !1) {
                    Ie(()=>{
                        Il.process(e, t, n, r, s, o, i, l, c, u);
                    }, o);
                    return;
                }
                t.el = e.el, t.targetStart = e.targetStart;
                const M = t.anchor = e.anchor, U = t.target = e.target, G = t.targetAnchor = e.targetAnchor, q = gn(e.props), P = q ? n : U, W = q ? M : G;
                if (i === "svg" || No(U) ? i = "svg" : (i === "mathml" || Do(U)) && (i = "mathml"), v ? (d(e.dynamicChildren, v, P, s, o, i, l), io(e, t, !0)) : c || f(e, t, P, W, s, o, i, l, !1), x) q ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Zn(t, n, M, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const z = t.target = ys(t.props, m);
                    z && Zn(t, z, null, u, 0);
                } else q && Zn(t, U, G, u, 1);
                nr(t, x);
            }
        },
        remove (e, t, n, { um: r, o: { remove: s } }, o) {
            const { shapeFlag: i, children: l, anchor: c, targetStart: u, targetAnchor: a, target: f, props: d } = e;
            if (f && (s(u), s(a)), o && s(c), i & 16) {
                const h = o || !gn(d);
                for(let m = 0; m < l.length; m++){
                    const y = l[m];
                    r(y, t, n, h, !!y.dynamicChildren);
                }
            }
        },
        move: Zn,
        hydrate: Ru
    };
    function Zn(e, t, n, { o: { insert: r }, m: s }, o = 2) {
        o === 0 && r(e.targetAnchor, t, n);
        const { el: i, anchor: l, shapeFlag: c, children: u, props: a } = e, f = o === 2;
        if (f && r(i, t, n), (!f || gn(a)) && c & 16) for(let d = 0; d < u.length; d++)s(u[d], t, n, 2);
        f && r(l, t, n);
    }
    function Ru(e, t, n, r, s, o, { o: { nextSibling: i, parentNode: l, querySelector: c, insert: u, createText: a } }, f) {
        const d = t.target = ys(t.props, c);
        if (d) {
            const h = gn(t.props), m = d._lpa || d.firstChild;
            if (t.shapeFlag & 16) if (h) t.anchor = f(i(e), t, l(e), n, r, s, o), t.targetStart = m, t.targetAnchor = m && i(m);
            else {
                t.anchor = i(e);
                let y = m;
                for(; y;){
                    if (y && y.nodeType === 8) {
                        if (y.data === "teleport start anchor") t.targetStart = y;
                        else if (y.data === "teleport anchor") {
                            t.targetAnchor = y, d._lpa = t.targetAnchor && i(t.targetAnchor);
                            break;
                        }
                    }
                    y = i(y);
                }
                t.targetAnchor || jl(d, t, a, u), f(m && i(m), t, d, n, r, s, o);
            }
            nr(t, h);
        }
        return t.anchor && i(t.anchor);
    }
    Dm = Il;
    function nr(e, t) {
        const n = e.ctx;
        if (n && n.ut) {
            let r, s;
            for(t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s;)r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
            n.ut();
        }
    }
    function jl(e, t, n, r) {
        const s = t.targetStart = n(""), o = t.targetAnchor = n("");
        return s[Pl] = o, e && (r(s, e), r(o, e)), o;
    }
    const xt = Symbol("_leaveCb"), Jn = Symbol("_enterCb");
    function Ll() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Rr(()=>{
            e.isMounted = !0;
        }), Bl(()=>{
            e.isUnmounting = !0;
        }), e;
    }
    const Ke = [
        Function,
        Array
    ], Nl = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Ke,
        onEnter: Ke,
        onAfterEnter: Ke,
        onEnterCancelled: Ke,
        onBeforeLeave: Ke,
        onLeave: Ke,
        onAfterLeave: Ke,
        onLeaveCancelled: Ke,
        onBeforeAppear: Ke,
        onAppear: Ke,
        onAfterAppear: Ke,
        onAppearCancelled: Ke
    }, Dl = (e)=>{
        const t = e.subTree;
        return t.component ? Dl(t.component) : t;
    }, Pu = {
        name: "BaseTransition",
        props: Nl,
        setup (e, { slots: t }) {
            const n = Ut(), r = Ll();
            return ()=>{
                const s = t.default && no(t.default(), !0);
                if (!s || !s.length) return;
                const o = Fl(s), i = oe(e), { mode: l } = i;
                if (r.isLeaving) return qr(o);
                const c = Fo(o);
                if (!c) return qr(o);
                let u = Rn(c, i, r, n, (f)=>u = f);
                c.type !== Re && Vt(c, u);
                let a = n.subTree && Fo(n.subTree);
                if (a && a.type !== Re && !Nt(c, a) && Dl(n).type !== Re) {
                    let f = Rn(a, i, r, n);
                    if (Vt(a, f), l === "out-in" && c.type !== Re) return r.isLeaving = !0, f.afterLeave = ()=>{
                        r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, a = void 0;
                    }, qr(o);
                    l === "in-out" && c.type !== Re ? f.delayLeave = (d, h, m)=>{
                        const y = kl(r, a);
                        y[String(a.key)] = a, d[xt] = ()=>{
                            h(), d[xt] = void 0, delete u.delayedLeave, a = void 0;
                        }, u.delayedLeave = ()=>{
                            m(), delete u.delayedLeave, a = void 0;
                        };
                    } : a = void 0;
                } else a && (a = void 0);
                return o;
            };
        }
    };
    function Fl(e) {
        let t = e[0];
        if (e.length > 1) {
            for (const n of e)if (n.type !== Re) {
                t = n;
                break;
            }
        }
        return t;
    }
    const $u = Pu;
    function kl(e, t) {
        const { leavingVNodes: n } = e;
        let r = n.get(t.type);
        return r || (r = Object.create(null), n.set(t.type, r)), r;
    }
    function Rn(e, t, n, r, s) {
        const { appear: o, mode: i, persisted: l = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: a, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: m, onLeaveCancelled: y, onBeforeAppear: _, onAppear: x, onAfterAppear: C, onAppearCancelled: S } = t, v = String(e.key), M = kl(n, e), U = (P, W)=>{
            P && Ye(P, r, 9, W);
        }, G = (P, W)=>{
            const z = W[1];
            U(P, W), X(P) ? P.every((F)=>F.length <= 1) && z() : P.length <= 1 && z();
        }, q = {
            mode: i,
            persisted: l,
            beforeEnter (P) {
                let W = c;
                if (!n.isMounted) if (o) W = _ || c;
                else return;
                P[xt] && P[xt](!0);
                const z = M[v];
                z && Nt(e, z) && z.el[xt] && z.el[xt](), U(W, [
                    P
                ]);
            },
            enter (P) {
                let W = u, z = a, F = f;
                if (!n.isMounted) if (o) W = x || u, z = C || a, F = S || f;
                else return;
                let re = !1;
                const K = P[Jn] = (j)=>{
                    re || (re = !0, j ? U(F, [
                        P
                    ]) : U(z, [
                        P
                    ]), q.delayedLeave && q.delayedLeave(), P[Jn] = void 0);
                };
                W ? G(W, [
                    P,
                    K
                ]) : K();
            },
            leave (P, W) {
                const z = String(e.key);
                if (P[Jn] && P[Jn](!0), n.isUnmounting) return W();
                U(d, [
                    P
                ]);
                let F = !1;
                const re = P[xt] = (K)=>{
                    F || (F = !0, W(), K ? U(y, [
                        P
                    ]) : U(m, [
                        P
                    ]), P[xt] = void 0, M[z] === e && delete M[z]);
                };
                M[z] = e, h ? G(h, [
                    P,
                    re
                ]) : re();
            },
            clone (P) {
                const W = Rn(P, t, n, r, s);
                return s && s(W), W;
            }
        };
        return q;
    }
    function qr(e) {
        if (Ar(e)) return e = Mt(e), e.children = null, e;
    }
    function Fo(e) {
        if (!Ar(e)) return $l(e.type) && e.children ? Fl(e.children) : e;
        if (e.component) return e.component.subTree;
        const { shapeFlag: t, children: n } = e;
        if (n) {
            if (t & 16) return n[0];
            if (t & 32 && te(n.default)) return n.default();
        }
    }
    function Vt(e, t) {
        e.shapeFlag & 6 && e.component ? (e.transition = t, Vt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
    }
    function no(e, t = !1, n) {
        let r = [], s = 0;
        for(let o = 0; o < e.length; o++){
            let i = e[o];
            const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
            i.type === Le ? (i.patchFlag & 128 && s++, r = r.concat(no(i.children, t, l))) : (t || i.type !== Re) && r.push(l != null ? Mt(i, {
                key: l
            }) : i);
        }
        if (s > 1) for(let o = 0; o < r.length; o++)r[o].patchFlag = -2;
        return r;
    }
    sn = function(e, t) {
        return te(e) ? we({
            name: e.name
        }, t, {
            setup: e
        }) : e;
    };
    function Hl(e) {
        e.ids = [
            e.ids[0] + e.ids[2]++ + "-",
            0,
            0
        ];
    }
    function mn(e, t, n, r, s = !1) {
        if (X(e)) {
            e.forEach((m, y)=>mn(m, t && (X(t) ? t[y] : t), n, r, s));
            return;
        }
        if (Qt(r) && !s) {
            r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && mn(e, t, n, r.component.subTree);
            return;
        }
        const o = r.shapeFlag & 4 ? jr(r.component) : r.el, i = s ? null : o, { i: l, r: c } = e, u = t && t.r, a = l.refs === de ? l.refs = {} : l.refs, f = l.setupState, d = oe(f), h = f === de ? ()=>!1 : (m)=>ue(d, m);
        if (u != null && u !== c && (ve(u) ? (a[u] = null, h(u) && (f[u] = null)) : be(u) && (u.value = null)), te(c)) kn(c, l, 12, [
            i,
            a
        ]);
        else {
            const m = ve(c), y = be(c);
            if (m || y) {
                const _ = ()=>{
                    if (e.f) {
                        const x = m ? h(c) ? f[c] : a[c] : c.value;
                        s ? X(x) && Us(x, o) : X(x) ? x.includes(o) || x.push(o) : m ? (a[c] = [
                            o
                        ], h(c) && (f[c] = a[c])) : (c.value = [
                            o
                        ], e.k && (a[e.k] = c.value));
                    } else m ? (a[c] = i, h(c) && (f[c] = i)) : y && (c.value = i, e.k && (a[e.k] = i));
                };
                i ? (_.id = -1, Ie(_, n)) : _();
            }
        }
    }
    Er().requestIdleCallback;
    Er().cancelIdleCallback;
    const Qt = (e)=>!!e.type.__asyncLoader, Ar = (e)=>e.type.__isKeepAlive;
    Iu = function(e, t) {
        Vl(e, "a", t);
    };
    function ju(e, t) {
        Vl(e, "da", t);
    }
    function Vl(e, t, n = Pe) {
        const r = e.__wdc || (e.__wdc = ()=>{
            let s = n;
            for(; s;){
                if (s.isDeactivated) return;
                s = s.parent;
            }
            return e();
        });
        if (Mr(t, r, n), n) {
            let s = n.parent;
            for(; s && s.parent;)Ar(s.parent.vnode) && Lu(r, t, n, s), s = s.parent;
        }
    }
    function Lu(e, t, n, r) {
        const s = Mr(t, e, r, !0);
        Pr(()=>{
            Us(r[t], s);
        }, n);
    }
    function Mr(e, t, n = Pe, r = !1) {
        if (n) {
            const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i)=>{
                ht();
                const l = Hn(n), c = Ye(t, n, e, i);
                return l(), gt(), c;
            });
            return r ? s.unshift(o) : s.push(o), o;
        }
    }
    let yt, Fu, ku, Hu;
    yt = (e)=>(t, n = Pe)=>{
            (!jn || e === "sp") && Mr(e, (...r)=>t(...r), n);
        };
    Nu = yt("bm");
    Rr = yt("m");
    Du = yt("bu");
    ro = yt("u");
    Bl = yt("bum");
    Pr = yt("um");
    Fu = yt("sp");
    ku = yt("rtg");
    Hu = yt("rtc");
    function Vu(e, t = Pe) {
        Mr("ec", e, t);
    }
    const Ul = "components", Bu = "directives";
    Fm = function(e, t) {
        return Wl(Ul, e, !0, t) || e;
    };
    const Uu = Symbol.for("v-ndc");
    km = function(e) {
        return Wl(Bu, e);
    };
    function Wl(e, t, n = !0, r = !1) {
        const s = Ce || Pe;
        if (s) {
            const o = s.type;
            if (e === Ul) {
                const l = jf(o, !1);
                if (l && (l === t || l === ze(t) || l === Or(ze(t)))) return o;
            }
            const i = ko(s[e] || o[e], t) || ko(s.appContext[e], t);
            return !i && r ? o : i;
        }
    }
    function ko(e, t) {
        return e && (e[t] || e[ze(t)] || e[Or(ze(t))]);
    }
    Hm = function(e, t, n, r) {
        let s;
        const o = n, i = X(e);
        if (i || ve(e)) {
            const l = i && pt(e);
            let c = !1, u = !1;
            l && (c = !qe(e), u = At(e), e = Cr(e)), s = new Array(e.length);
            for(let a = 0, f = e.length; a < f; a++)s[a] = t(c ? u ? ar(Ee(e[a])) : Ee(e[a]) : e[a], a, void 0, o);
        } else if (typeof e == "number") {
            s = new Array(e);
            for(let l = 0; l < e; l++)s[l] = t(l + 1, l, void 0, o);
        } else if (ge(e)) if (e[Symbol.iterator]) s = Array.from(e, (l, c)=>t(l, c, void 0, o));
        else {
            const l = Object.keys(e);
            s = new Array(l.length);
            for(let c = 0, u = l.length; c < u; c++){
                const a = l[c];
                s[c] = t(e[a], a, c, o);
            }
        }
        else s = [];
        return s;
    };
    Wu = function(e, t, n = {}, r, s) {
        if (Ce.ce || Ce.parent && Qt(Ce.parent) && Ce.parent.ce) return t !== "default" && (n.name = t), Pn(), hr(Le, null, [
            Ne("slot", n, r && r())
        ], 64);
        let o = e[t];
        o && o._c && (o._d = !1), Pn();
        const i = o && Kl(o(n)), l = n.key || i && i.key, c = hr(Le, {
            key: (l && !mt(l) ? l : `_${t}`) + (!i && r ? "_fb" : "")
        }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
        return !s && c.scopeId && (c.slotScopeIds = [
            c.scopeId + "-s"
        ]), o && o._c && (o._d = !0), c;
    };
    function Kl(e) {
        return e.some((t)=>In(t) ? !(t.type === Re || t.type === Le && !Kl(t.children)) : !0) ? e : null;
    }
    const bs = (e)=>e ? uc(e) ? jr(e) : bs(e.parent) : null, yn = we(Object.create(null), {
        $: (e)=>e,
        $el: (e)=>e.vnode.el,
        $data: (e)=>e.data,
        $props: (e)=>e.props,
        $attrs: (e)=>e.attrs,
        $slots: (e)=>e.slots,
        $refs: (e)=>e.refs,
        $parent: (e)=>bs(e.parent),
        $root: (e)=>bs(e.root),
        $host: (e)=>e.ce,
        $emit: (e)=>e.emit,
        $options: (e)=>Gl(e),
        $forceUpdate: (e)=>e.f || (e.f = ()=>{
                to(e.update);
            }),
        $nextTick: (e)=>e.n || (e.n = en.bind(e.proxy)),
        $watch: (e)=>hf.bind(e)
    }), zr = (e, t)=>e !== de && !e.__isScriptSetup && ue(e, t), Ku = {
        get ({ _: e }, t) {
            if (t === "__v_skip") return !0;
            const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: c } = e;
            let u;
            if (t[0] !== "$") {
                const h = i[t];
                if (h !== void 0) switch(h){
                    case 1:
                        return r[t];
                    case 2:
                        return s[t];
                    case 4:
                        return n[t];
                    case 3:
                        return o[t];
                }
                else {
                    if (zr(r, t)) return i[t] = 1, r[t];
                    if (s !== de && ue(s, t)) return i[t] = 2, s[t];
                    if ((u = e.propsOptions[0]) && ue(u, t)) return i[t] = 3, o[t];
                    if (n !== de && ue(n, t)) return i[t] = 4, n[t];
                    vs && (i[t] = 0);
                }
            }
            const a = yn[t];
            let f, d;
            if (a) return t === "$attrs" && Me(e.attrs, "get", ""), a(e);
            if ((f = l.__cssModules) && (f = f[t])) return f;
            if (n !== de && ue(n, t)) return i[t] = 4, n[t];
            if (d = c.config.globalProperties, ue(d, t)) return d[t];
        },
        set ({ _: e }, t, n) {
            const { data: r, setupState: s, ctx: o } = e;
            return zr(s, t) ? (s[t] = n, !0) : r !== de && ue(r, t) ? (r[t] = n, !0) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
        },
        has ({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } }, i) {
            let l;
            return !!n[i] || e !== de && ue(e, i) || zr(t, i) || (l = o[0]) && ue(l, i) || ue(r, i) || ue(yn, i) || ue(s.config.globalProperties, i);
        },
        defineProperty (e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
        }
    };
    function ql() {
        return qu().slots;
    }
    function qu(e) {
        const t = Ut();
        return t.setupContext || (t.setupContext = dc(t));
    }
    function Ho(e) {
        return X(e) ? e.reduce((t, n)=>(t[n] = null, t), {}) : e;
    }
    let vs = !0;
    function zu(e) {
        const t = Gl(e), n = e.proxy, r = e.ctx;
        vs = !1, t.beforeCreate && Vo(t.beforeCreate, e, "bc");
        const { data: s, computed: o, methods: i, watch: l, provide: c, inject: u, created: a, beforeMount: f, mounted: d, beforeUpdate: h, updated: m, activated: y, deactivated: _, beforeDestroy: x, beforeUnmount: C, destroyed: S, unmounted: v, render: M, renderTracked: U, renderTriggered: G, errorCaptured: q, serverPrefetch: P, expose: W, inheritAttrs: z, components: F, directives: re, filters: K } = t;
        if (u && Gu(u, r, null), i) for(const $ in i){
            const R = i[$];
            te(R) && (r[$] = R.bind(n));
        }
        if (s) {
            const $ = s.call(n, n);
            ge($) && (e.data = it($));
        }
        if (vs = !0, o) for(const $ in o){
            const R = o[$], J = te(R) ? R.bind(n, n) : te(R.get) ? R.get.bind(n, n) : ot, Q = !te(R) && te(R.set) ? R.set.bind(n) : ot, se = _e({
                get: J,
                set: Q
            });
            Object.defineProperty(r, $, {
                enumerable: !0,
                configurable: !0,
                get: ()=>se.value,
                set: (ie)=>se.value = ie
            });
        }
        if (l) for(const $ in l)zl(l[$], r, n, $);
        if (c) {
            const $ = te(c) ? c.call(n) : c;
            Reflect.ownKeys($).forEach((R)=>{
                rr(R, $[R]);
            });
        }
        a && Vo(a, e, "c");
        function A($, R) {
            X(R) ? R.forEach((J)=>$(J.bind(n))) : R && $(R.bind(n));
        }
        if (A(Nu, f), A(Rr, d), A(Du, h), A(ro, m), A(Iu, y), A(ju, _), A(Vu, q), A(Hu, U), A(ku, G), A(Bl, C), A(Pr, v), A(Fu, P), X(W)) if (W.length) {
            const $ = e.exposed || (e.exposed = {});
            W.forEach((R)=>{
                Object.defineProperty($, R, {
                    get: ()=>n[R],
                    set: (J)=>n[R] = J,
                    enumerable: !0
                });
            });
        } else e.exposed || (e.exposed = {});
        M && e.render === ot && (e.render = M), z != null && (e.inheritAttrs = z), F && (e.components = F), re && (e.directives = re), P && Hl(e);
    }
    function Gu(e, t, n = ot) {
        X(e) && (e = _s(e));
        for(const r in e){
            const s = e[r];
            let o;
            ge(s) ? "default" in s ? o = We(s.from || r, s.default, !0) : o = We(s.from || r) : o = We(s), be(o) ? Object.defineProperty(t, r, {
                enumerable: !0,
                configurable: !0,
                get: ()=>o.value,
                set: (i)=>o.value = i
            }) : t[r] = o;
        }
    }
    function Vo(e, t, n) {
        Ye(X(e) ? e.map((r)=>r.bind(t.proxy)) : e.bind(t.proxy), t, n);
    }
    function zl(e, t, n, r) {
        let s = r.includes(".") ? oc(n, r) : ()=>n[r];
        if (ve(e)) {
            const o = t[e];
            te(o) && xe(s, o);
        } else if (te(e)) xe(s, e.bind(n));
        else if (ge(e)) if (X(e)) e.forEach((o)=>zl(o, t, n, r));
        else {
            const o = te(e.handler) ? e.handler.bind(n) : t[e.handler];
            te(o) && xe(s, o, e);
        }
    }
    function Gl(e) {
        const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
        let c;
        return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach((u)=>pr(c, u, i, !0)), pr(c, t, i)), ge(t) && o.set(t, c), c;
    }
    function pr(e, t, n, r = !1) {
        const { mixins: s, extends: o } = t;
        o && pr(e, o, n, !0), s && s.forEach((i)=>pr(e, i, n, !0));
        for(const i in t)if (!(r && i === "expose")) {
            const l = Yu[i] || n && n[i];
            e[i] = l ? l(e[i], t[i]) : t[i];
        }
        return e;
    }
    const Yu = {
        data: Bo,
        props: Uo,
        emits: Uo,
        methods: fn,
        computed: fn,
        beforeCreate: $e,
        created: $e,
        beforeMount: $e,
        mounted: $e,
        beforeUpdate: $e,
        updated: $e,
        beforeDestroy: $e,
        beforeUnmount: $e,
        destroyed: $e,
        unmounted: $e,
        activated: $e,
        deactivated: $e,
        errorCaptured: $e,
        serverPrefetch: $e,
        components: fn,
        directives: fn,
        watch: Ju,
        provide: Bo,
        inject: Zu
    };
    function Bo(e, t) {
        return t ? e ? function() {
            return we(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t);
        } : t : e;
    }
    function Zu(e, t) {
        return fn(_s(e), _s(t));
    }
    function _s(e) {
        if (X(e)) {
            const t = {};
            for(let n = 0; n < e.length; n++)t[e[n]] = e[n];
            return t;
        }
        return e;
    }
    function $e(e, t) {
        return e ? [
            ...new Set([].concat(e, t))
        ] : t;
    }
    function fn(e, t) {
        return e ? we(Object.create(null), e, t) : t;
    }
    function Uo(e, t) {
        return e ? X(e) && X(t) ? [
            ...new Set([
                ...e,
                ...t
            ])
        ] : we(Object.create(null), Ho(e), Ho(t ?? {})) : t;
    }
    function Ju(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = we(Object.create(null), e);
        for(const r in t)n[r] = $e(e[r], t[r]);
        return n;
    }
    function Yl() {
        return {
            app: null,
            config: {
                isNativeTag: Da,
                performance: !1,
                globalProperties: {},
                optionMergeStrategies: {},
                errorHandler: void 0,
                warnHandler: void 0,
                compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap,
            propsCache: new WeakMap,
            emitsCache: new WeakMap
        };
    }
    let Qu = 0;
    function Xu(e, t) {
        return function(r, s = null) {
            te(r) || (r = we({}, r)), s != null && !ge(s) && (s = null);
            const o = Yl(), i = new WeakSet, l = [];
            let c = !1;
            const u = o.app = {
                _uid: Qu++,
                _component: r,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: Nf,
                get config () {
                    return o.config;
                },
                set config (a){},
                use (a, ...f) {
                    return i.has(a) || (a && te(a.install) ? (i.add(a), a.install(u, ...f)) : te(a) && (i.add(a), a(u, ...f))), u;
                },
                mixin (a) {
                    return o.mixins.includes(a) || o.mixins.push(a), u;
                },
                component (a, f) {
                    return f ? (o.components[a] = f, u) : o.components[a];
                },
                directive (a, f) {
                    return f ? (o.directives[a] = f, u) : o.directives[a];
                },
                mount (a, f, d) {
                    if (!c) {
                        const h = u._ceVNode || Ne(r, s);
                        return h.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), e(h, a, d), c = !0, u._container = a, a.__vue_app__ = u, jr(h.component);
                    }
                },
                onUnmount (a) {
                    l.push(a);
                },
                unmount () {
                    c && (Ye(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
                },
                provide (a, f) {
                    return o.provides[a] = f, u;
                },
                runWithContext (a) {
                    const f = kt;
                    kt = u;
                    try {
                        return a();
                    } finally{
                        kt = f;
                    }
                }
            };
            return u;
        };
    }
    let kt = null;
    rr = function(e, t) {
        if (Pe) {
            let n = Pe.provides;
            const r = Pe.parent && Pe.parent.provides;
            r === n && (n = Pe.provides = Object.create(r)), n[e] = t;
        }
    };
    We = function(e, t, n = !1) {
        const r = Ut();
        if (r || kt) {
            let s = kt ? kt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return n && te(t) ? t.call(r && r.proxy) : t;
        }
    };
    function ef() {
        return !!(Ut() || kt);
    }
    const Zl = {}, Jl = ()=>Object.create(Zl), Ql = (e)=>Object.getPrototypeOf(e) === Zl;
    function tf(e, t, n, r = !1) {
        const s = {}, o = Jl();
        e.propsDefaults = Object.create(null), Xl(e, t, s, o);
        for(const i in e.propsOptions[0])i in s || (s[i] = void 0);
        n ? e.props = r ? s : Sl(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
    }
    function nf(e, t, n, r) {
        const { props: s, attrs: o, vnode: { patchFlag: i } } = e, l = oe(s), [c] = e.propsOptions;
        let u = !1;
        if ((r || i > 0) && !(i & 16)) {
            if (i & 8) {
                const a = e.vnode.dynamicProps;
                for(let f = 0; f < a.length; f++){
                    let d = a[f];
                    if ($r(e.emitsOptions, d)) continue;
                    const h = t[d];
                    if (c) if (ue(o, d)) h !== o[d] && (o[d] = h, u = !0);
                    else {
                        const m = ze(d);
                        s[m] = Ss(c, l, m, h, e, !1);
                    }
                    else h !== o[d] && (o[d] = h, u = !0);
                }
            }
        } else {
            Xl(e, t, s, o) && (u = !0);
            let a;
            for(const f in l)(!t || !ue(t, f) && ((a = Bt(f)) === f || !ue(t, a))) && (c ? n && (n[f] !== void 0 || n[a] !== void 0) && (s[f] = Ss(c, l, f, void 0, e, !0)) : delete s[f]);
            if (o !== l) for(const f in o)(!t || !ue(t, f)) && (delete o[f], u = !0);
        }
        u && ut(e.attrs, "set", "");
    }
    function Xl(e, t, n, r) {
        const [s, o] = e.propsOptions;
        let i = !1, l;
        if (t) for(let c in t){
            if (dn(c)) continue;
            const u = t[c];
            let a;
            s && ue(s, a = ze(c)) ? !o || !o.includes(a) ? n[a] = u : (l || (l = {}))[a] = u : $r(e.emitsOptions, c) || (!(c in r) || u !== r[c]) && (r[c] = u, i = !0);
        }
        if (o) {
            const c = oe(n), u = l || de;
            for(let a = 0; a < o.length; a++){
                const f = o[a];
                n[f] = Ss(s, c, f, u[f], e, !ue(u, f));
            }
        }
        return i;
    }
    function Ss(e, t, n, r, s, o) {
        const i = e[n];
        if (i != null) {
            const l = ue(i, "default");
            if (l && r === void 0) {
                const c = i.default;
                if (i.type !== Function && !i.skipFactory && te(c)) {
                    const { propsDefaults: u } = s;
                    if (n in u) r = u[n];
                    else {
                        const a = Hn(s);
                        r = u[n] = c.call(null, t), a();
                    }
                } else r = c;
                s.ce && s.ce._setProp(n, r);
            }
            i[0] && (o && !l ? r = !1 : i[1] && (r === "" || r === Bt(n)) && (r = !0));
        }
        return r;
    }
    const rf = new WeakMap;
    function ec(e, t, n = !1) {
        const r = n ? rf : t.propsCache, s = r.get(e);
        if (s) return s;
        const o = e.props, i = {}, l = [];
        let c = !1;
        if (!te(e)) {
            const a = (f)=>{
                c = !0;
                const [d, h] = ec(f, t, !0);
                we(i, d), h && l.push(...h);
            };
            !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
        }
        if (!o && !c) return ge(e) && r.set(e, Yt), Yt;
        if (X(o)) for(let a = 0; a < o.length; a++){
            const f = ze(o[a]);
            Wo(f) && (i[f] = de);
        }
        else if (o) for(const a in o){
            const f = ze(a);
            if (Wo(f)) {
                const d = o[a], h = i[f] = X(d) || te(d) ? {
                    type: d
                } : we({}, d), m = h.type;
                let y = !1, _ = !0;
                if (X(m)) for(let x = 0; x < m.length; ++x){
                    const C = m[x], S = te(C) && C.name;
                    if (S === "Boolean") {
                        y = !0;
                        break;
                    } else S === "String" && (_ = !1);
                }
                else y = te(m) && m.name === "Boolean";
                h[0] = y, h[1] = _, (y || ue(h, "default")) && l.push(f);
            }
        }
        const u = [
            i,
            l
        ];
        return ge(e) && r.set(e, u), u;
    }
    function Wo(e) {
        return e[0] !== "$" && !dn(e);
    }
    const so = (e)=>e === "_" || e === "__" || e === "_ctx" || e === "$stable", oo = (e)=>X(e) ? e.map(st) : [
            st(e)
        ], sf = (e, t, n)=>{
        if (t._n) return t;
        const r = Mu((...s)=>oo(t(...s)), n);
        return r._c = !1, r;
    }, tc = (e, t, n)=>{
        const r = e._ctx;
        for(const s in e){
            if (so(s)) continue;
            const o = e[s];
            if (te(o)) t[s] = sf(s, o, r);
            else if (o != null) {
                const i = oo(o);
                t[s] = ()=>i;
            }
        }
    }, nc = (e, t)=>{
        const n = oo(t);
        e.slots.default = ()=>n;
    }, rc = (e, t, n)=>{
        for(const r in t)(n || !so(r)) && (e[r] = t[r]);
    }, of = (e, t, n)=>{
        const r = e.slots = Jl();
        if (e.vnode.shapeFlag & 32) {
            const s = t.__;
            s && ds(r, "__", s, !0);
            const o = t._;
            o ? (rc(r, t, n), n && ds(r, "_", o, !0)) : tc(t, r);
        } else t && nc(e, t);
    }, lf = (e, t, n)=>{
        const { vnode: r, slots: s } = e;
        let o = !0, i = de;
        if (r.shapeFlag & 32) {
            const l = t._;
            l ? n && l === 1 ? o = !1 : rc(s, t, n) : (o = !t.$stable, tc(t, s)), i = t;
        } else t && (nc(e, t), i = {
            default: 1
        });
        if (o) for(const l in s)!so(l) && i[l] == null && delete s[l];
    }, Ie = Sf;
    function cf(e) {
        return af(e);
    }
    function af(e, t) {
        const n = Er();
        n.__VUE__ = !0;
        const { insert: r, remove: s, patchProp: o, createElement: i, createText: l, createComment: c, setText: u, setElementText: a, parentNode: f, nextSibling: d, setScopeId: h = ot, insertStaticContent: m } = e, y = (p, g, b, O = null, T = null, E = null, k = void 0, D = null, L = !!g.dynamicChildren)=>{
            if (p === g) return;
            p && !Nt(p, g) && (O = w(p), ie(p, T, E, !0), p = null), g.patchFlag === -2 && (L = !1, g.dynamicChildren = null);
            const { type: I, ref: Z, shapeFlag: B } = g;
            switch(I){
                case Ir:
                    _(p, g, b, O);
                    break;
                case Re:
                    x(p, g, b, O);
                    break;
                case Yr:
                    p == null && C(g, b, O, k);
                    break;
                case Le:
                    F(p, g, b, O, T, E, k, D, L);
                    break;
                default:
                    B & 1 ? M(p, g, b, O, T, E, k, D, L) : B & 6 ? re(p, g, b, O, T, E, k, D, L) : (B & 64 || B & 128) && I.process(p, g, b, O, T, E, k, D, L, V);
            }
            Z != null && T ? mn(Z, p && p.ref, E, g || p, !g) : Z == null && p && p.ref != null && mn(p.ref, null, E, p, !0);
        }, _ = (p, g, b, O)=>{
            if (p == null) r(g.el = l(g.children), b, O);
            else {
                const T = g.el = p.el;
                g.children !== p.children && u(T, g.children);
            }
        }, x = (p, g, b, O)=>{
            p == null ? r(g.el = c(g.children || ""), b, O) : g.el = p.el;
        }, C = (p, g, b, O)=>{
            [p.el, p.anchor] = m(p.children, g, b, O, p.el, p.anchor);
        }, S = ({ el: p, anchor: g }, b, O)=>{
            let T;
            for(; p && p !== g;)T = d(p), r(p, b, O), p = T;
            r(g, b, O);
        }, v = ({ el: p, anchor: g })=>{
            let b;
            for(; p && p !== g;)b = d(p), s(p), p = b;
            s(g);
        }, M = (p, g, b, O, T, E, k, D, L)=>{
            g.type === "svg" ? k = "svg" : g.type === "math" && (k = "mathml"), p == null ? U(g, b, O, T, E, k, D, L) : P(p, g, T, E, k, D, L);
        }, U = (p, g, b, O, T, E, k, D)=>{
            let L, I;
            const { props: Z, shapeFlag: B, transition: Y, dirs: ee } = p;
            if (L = p.el = i(p.type, E, Z && Z.is, Z), B & 8 ? a(L, p.children) : B & 16 && q(p.children, L, null, O, T, Gr(p, E), k, D), ee && Rt(p, null, O, "created"), G(L, p, p.scopeId, k, O), Z) {
                for(const pe in Z)pe !== "value" && !dn(pe) && o(L, pe, null, Z[pe], E, O);
                "value" in Z && o(L, "value", null, Z.value, E), (I = Z.onVnodeBeforeMount) && et(I, O, p);
            }
            ee && Rt(p, null, O, "beforeMount");
            const ce = uf(T, Y);
            ce && Y.beforeEnter(L), r(L, g, b), ((I = Z && Z.onVnodeMounted) || ce || ee) && Ie(()=>{
                I && et(I, O, p), ce && Y.enter(L), ee && Rt(p, null, O, "mounted");
            }, T);
        }, G = (p, g, b, O, T)=>{
            if (b && h(p, b), O) for(let E = 0; E < O.length; E++)h(p, O[E]);
            if (T) {
                let E = T.subTree;
                if (g === E || lc(E.type) && (E.ssContent === g || E.ssFallback === g)) {
                    const k = T.vnode;
                    G(p, k, k.scopeId, k.slotScopeIds, T.parent);
                }
            }
        }, q = (p, g, b, O, T, E, k, D, L = 0)=>{
            for(let I = L; I < p.length; I++){
                const Z = p[I] = D ? Ot(p[I]) : st(p[I]);
                y(null, Z, g, b, O, T, E, k, D);
            }
        }, P = (p, g, b, O, T, E, k)=>{
            const D = g.el = p.el;
            let { patchFlag: L, dynamicChildren: I, dirs: Z } = g;
            L |= p.patchFlag & 16;
            const B = p.props || de, Y = g.props || de;
            let ee;
            if (b && Pt(b, !1), (ee = Y.onVnodeBeforeUpdate) && et(ee, b, g, p), Z && Rt(g, p, b, "beforeUpdate"), b && Pt(b, !0), (B.innerHTML && Y.innerHTML == null || B.textContent && Y.textContent == null) && a(D, ""), I ? W(p.dynamicChildren, I, D, b, O, Gr(g, T), E) : k || R(p, g, D, null, b, O, Gr(g, T), E, !1), L > 0) {
                if (L & 16) z(D, B, Y, b, T);
                else if (L & 2 && B.class !== Y.class && o(D, "class", null, Y.class, T), L & 4 && o(D, "style", B.style, Y.style, T), L & 8) {
                    const ce = g.dynamicProps;
                    for(let pe = 0; pe < ce.length; pe++){
                        const fe = ce[pe], De = B[fe], Fe = Y[fe];
                        (Fe !== De || fe === "value") && o(D, fe, De, Fe, T, b);
                    }
                }
                L & 1 && p.children !== g.children && a(D, g.children);
            } else !k && I == null && z(D, B, Y, b, T);
            ((ee = Y.onVnodeUpdated) || Z) && Ie(()=>{
                ee && et(ee, b, g, p), Z && Rt(g, p, b, "updated");
            }, O);
        }, W = (p, g, b, O, T, E, k)=>{
            for(let D = 0; D < g.length; D++){
                const L = p[D], I = g[D], Z = L.el && (L.type === Le || !Nt(L, I) || L.shapeFlag & 198) ? f(L.el) : b;
                y(L, I, Z, null, O, T, E, k, !0);
            }
        }, z = (p, g, b, O, T)=>{
            if (g !== b) {
                if (g !== de) for(const E in g)!dn(E) && !(E in b) && o(p, E, g[E], null, T, O);
                for(const E in b){
                    if (dn(E)) continue;
                    const k = b[E], D = g[E];
                    k !== D && E !== "value" && o(p, E, D, k, T, O);
                }
                "value" in b && o(p, "value", g.value, b.value, T);
            }
        }, F = (p, g, b, O, T, E, k, D, L)=>{
            const I = g.el = p ? p.el : l(""), Z = g.anchor = p ? p.anchor : l("");
            let { patchFlag: B, dynamicChildren: Y, slotScopeIds: ee } = g;
            ee && (D = D ? D.concat(ee) : ee), p == null ? (r(I, b, O), r(Z, b, O), q(g.children || [], b, Z, T, E, k, D, L)) : B > 0 && B & 64 && Y && p.dynamicChildren ? (W(p.dynamicChildren, Y, b, T, E, k, D), (g.key != null || T && g === T.subTree) && io(p, g, !0)) : R(p, g, b, Z, T, E, k, D, L);
        }, re = (p, g, b, O, T, E, k, D, L)=>{
            g.slotScopeIds = D, p == null ? g.shapeFlag & 512 ? T.ctx.activate(g, b, O, k, L) : K(g, b, O, T, E, k, L) : j(p, g, L);
        }, K = (p, g, b, O, T, E, k)=>{
            const D = p.component = Rf(p, O, T);
            if (Ar(p) && (D.ctx.renderer = V), Pf(D, !1, k), D.asyncDep) {
                if (T && T.registerDep(D, A, k), !p.el) {
                    const L = D.subTree = Ne(Re);
                    x(null, L, g, b), p.placeholder = L.el;
                }
            } else A(D, p, g, b, T, E, k);
        }, j = (p, g, b)=>{
            const O = g.component = p.component;
            if (vf(p, g, b)) if (O.asyncDep && !O.asyncResolved) {
                $(O, g, b);
                return;
            } else O.next = g, O.update();
            else g.el = p.el, O.vnode = g;
        }, A = (p, g, b, O, T, E, k)=>{
            const D = ()=>{
                if (p.isMounted) {
                    let { next: B, bu: Y, u: ee, parent: ce, vnode: pe } = p;
                    {
                        const Qe = sc(p);
                        if (Qe) {
                            B && (B.el = pe.el, $(p, B, k)), Qe.asyncDep.then(()=>{
                                p.isUnmounted || D();
                            });
                            return;
                        }
                    }
                    let fe = B, De;
                    Pt(p, !1), B ? (B.el = pe.el, $(p, B, k)) : B = pe, Y && tr(Y), (De = B.props && B.props.onVnodeBeforeUpdate) && et(De, ce, B, pe), Pt(p, !0);
                    const Fe = qo(p), Je = p.subTree;
                    p.subTree = Fe, y(Je, Fe, f(Je.el), w(Je), p, T, E), B.el = Fe.el, fe === null && _f(p, Fe.el), ee && Ie(ee, T), (De = B.props && B.props.onVnodeUpdated) && Ie(()=>et(De, ce, B, pe), T);
                } else {
                    let B;
                    const { el: Y, props: ee } = g, { bm: ce, m: pe, parent: fe, root: De, type: Fe } = p, Je = Qt(g);
                    Pt(p, !1), ce && tr(ce), !Je && (B = ee && ee.onVnodeBeforeMount) && et(B, fe, g), Pt(p, !0);
                    {
                        De.ce && De.ce._def.shadowRoot !== !1 && De.ce._injectChildStyle(Fe);
                        const Qe = p.subTree = qo(p);
                        y(null, Qe, b, O, p, T, E), g.el = Qe.el;
                    }
                    if (pe && Ie(pe, T), !Je && (B = ee && ee.onVnodeMounted)) {
                        const Qe = g;
                        Ie(()=>et(B, fe, Qe), T);
                    }
                    (g.shapeFlag & 256 || fe && Qt(fe.vnode) && fe.vnode.shapeFlag & 256) && p.a && Ie(p.a, T), p.isMounted = !0, g = b = O = null;
                }
            };
            p.scope.on();
            const L = p.effect = new ll(D);
            p.scope.off();
            const I = p.update = L.run.bind(L), Z = p.job = L.runIfDirty.bind(L);
            Z.i = p, Z.id = p.uid, L.scheduler = ()=>to(Z), Pt(p, !0), I();
        }, $ = (p, g, b)=>{
            g.component = p;
            const O = p.vnode.props;
            p.vnode = g, p.next = null, nf(p, g.props, O, b), lf(p, g.children, b), ht(), jo(p), gt();
        }, R = (p, g, b, O, T, E, k, D, L = !1)=>{
            const I = p && p.children, Z = p ? p.shapeFlag : 0, B = g.children, { patchFlag: Y, shapeFlag: ee } = g;
            if (Y > 0) {
                if (Y & 128) {
                    Q(I, B, b, O, T, E, k, D, L);
                    return;
                } else if (Y & 256) {
                    J(I, B, b, O, T, E, k, D, L);
                    return;
                }
            }
            ee & 8 ? (Z & 16 && Se(I, T, E), B !== I && a(b, B)) : Z & 16 ? ee & 16 ? Q(I, B, b, O, T, E, k, D, L) : Se(I, T, E, !0) : (Z & 8 && a(b, ""), ee & 16 && q(B, b, O, T, E, k, D, L));
        }, J = (p, g, b, O, T, E, k, D, L)=>{
            p = p || Yt, g = g || Yt;
            const I = p.length, Z = g.length, B = Math.min(I, Z);
            let Y;
            for(Y = 0; Y < B; Y++){
                const ee = g[Y] = L ? Ot(g[Y]) : st(g[Y]);
                y(p[Y], ee, b, null, T, E, k, D, L);
            }
            I > Z ? Se(p, T, E, !0, !1, B) : q(g, b, O, T, E, k, D, L, B);
        }, Q = (p, g, b, O, T, E, k, D, L)=>{
            let I = 0;
            const Z = g.length;
            let B = p.length - 1, Y = Z - 1;
            for(; I <= B && I <= Y;){
                const ee = p[I], ce = g[I] = L ? Ot(g[I]) : st(g[I]);
                if (Nt(ee, ce)) y(ee, ce, b, null, T, E, k, D, L);
                else break;
                I++;
            }
            for(; I <= B && I <= Y;){
                const ee = p[B], ce = g[Y] = L ? Ot(g[Y]) : st(g[Y]);
                if (Nt(ee, ce)) y(ee, ce, b, null, T, E, k, D, L);
                else break;
                B--, Y--;
            }
            if (I > B) {
                if (I <= Y) {
                    const ee = Y + 1, ce = ee < Z ? g[ee].el : O;
                    for(; I <= Y;)y(null, g[I] = L ? Ot(g[I]) : st(g[I]), b, ce, T, E, k, D, L), I++;
                }
            } else if (I > Y) for(; I <= B;)ie(p[I], T, E, !0), I++;
            else {
                const ee = I, ce = I, pe = new Map;
                for(I = ce; I <= Y; I++){
                    const Ve = g[I] = L ? Ot(g[I]) : st(g[I]);
                    Ve.key != null && pe.set(Ve.key, I);
                }
                let fe, De = 0;
                const Fe = Y - ce + 1;
                let Je = !1, Qe = 0;
                const on = new Array(Fe);
                for(I = 0; I < Fe; I++)on[I] = 0;
                for(I = ee; I <= B; I++){
                    const Ve = p[I];
                    if (De >= Fe) {
                        ie(Ve, T, E, !0);
                        continue;
                    }
                    let Xe;
                    if (Ve.key != null) Xe = pe.get(Ve.key);
                    else for(fe = ce; fe <= Y; fe++)if (on[fe - ce] === 0 && Nt(Ve, g[fe])) {
                        Xe = fe;
                        break;
                    }
                    Xe === void 0 ? ie(Ve, T, E, !0) : (on[Xe - ce] = I + 1, Xe >= Qe ? Qe = Xe : Je = !0, y(Ve, g[Xe], b, null, T, E, k, D, L), De++);
                }
                const Ao = Je ? ff(on) : Yt;
                for(fe = Ao.length - 1, I = Fe - 1; I >= 0; I--){
                    const Ve = ce + I, Xe = g[Ve], Mo = g[Ve + 1], Ro = Ve + 1 < Z ? Mo.el || Mo.placeholder : O;
                    on[I] === 0 ? y(null, Xe, b, Ro, T, E, k, D, L) : Je && (fe < 0 || I !== Ao[fe] ? se(Xe, b, Ro, 2) : fe--);
                }
            }
        }, se = (p, g, b, O, T = null)=>{
            const { el: E, type: k, transition: D, children: L, shapeFlag: I } = p;
            if (I & 6) {
                se(p.component.subTree, g, b, O);
                return;
            }
            if (I & 128) {
                p.suspense.move(g, b, O);
                return;
            }
            if (I & 64) {
                k.move(p, g, b, V);
                return;
            }
            if (k === Le) {
                r(E, g, b);
                for(let B = 0; B < L.length; B++)se(L[B], g, b, O);
                r(p.anchor, g, b);
                return;
            }
            if (k === Yr) {
                S(p, g, b);
                return;
            }
            if (O !== 2 && I & 1 && D) if (O === 0) D.beforeEnter(E), r(E, g, b), Ie(()=>D.enter(E), T);
            else {
                const { leave: B, delayLeave: Y, afterLeave: ee } = D, ce = ()=>{
                    p.ctx.isUnmounted ? s(E) : r(E, g, b);
                }, pe = ()=>{
                    B(E, ()=>{
                        ce(), ee && ee();
                    });
                };
                Y ? Y(E, ce, pe) : pe();
            }
            else r(E, g, b);
        }, ie = (p, g, b, O = !1, T = !1)=>{
            const { type: E, props: k, ref: D, children: L, dynamicChildren: I, shapeFlag: Z, patchFlag: B, dirs: Y, cacheIndex: ee } = p;
            if (B === -2 && (T = !1), D != null && (ht(), mn(D, null, b, p, !0), gt()), ee != null && (g.renderCache[ee] = void 0), Z & 256) {
                g.ctx.deactivate(p);
                return;
            }
            const ce = Z & 1 && Y, pe = !Qt(p);
            let fe;
            if (pe && (fe = k && k.onVnodeBeforeUnmount) && et(fe, g, p), Z & 6) Oe(p.component, b, O);
            else {
                if (Z & 128) {
                    p.suspense.unmount(b, O);
                    return;
                }
                ce && Rt(p, null, g, "beforeUnmount"), Z & 64 ? p.type.remove(p, g, b, V, O) : I && !I.hasOnce && (E !== Le || B > 0 && B & 64) ? Se(I, g, b, !1, !0) : (E === Le && B & 384 || !T && Z & 16) && Se(L, g, b), O && me(p);
            }
            (pe && (fe = k && k.onVnodeUnmounted) || ce) && Ie(()=>{
                fe && et(fe, g, p), ce && Rt(p, null, g, "unmounted");
            }, b);
        }, me = (p)=>{
            const { type: g, el: b, anchor: O, transition: T } = p;
            if (g === Le) {
                ye(b, O);
                return;
            }
            if (g === Yr) {
                v(p);
                return;
            }
            const E = ()=>{
                s(b), T && !T.persisted && T.afterLeave && T.afterLeave();
            };
            if (p.shapeFlag & 1 && T && !T.persisted) {
                const { leave: k, delayLeave: D } = T, L = ()=>k(b, E);
                D ? D(p.el, E, L) : L();
            } else E();
        }, ye = (p, g)=>{
            let b;
            for(; p !== g;)b = d(p), s(p), p = b;
            s(g);
        }, Oe = (p, g, b)=>{
            const { bum: O, scope: T, job: E, subTree: k, um: D, m: L, a: I, parent: Z, slots: { __: B } } = p;
            Ko(L), Ko(I), O && tr(O), Z && X(B) && B.forEach((Y)=>{
                Z.renderCache[Y] = void 0;
            }), T.stop(), E && (E.flags |= 8, ie(k, p, g, b)), D && Ie(D, g), Ie(()=>{
                p.isUnmounted = !0;
            }, g), g && g.pendingBranch && !g.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve());
        }, Se = (p, g, b, O = !1, T = !1, E = 0)=>{
            for(let k = E; k < p.length; k++)ie(p[k], g, b, O, T);
        }, w = (p)=>{
            if (p.shapeFlag & 6) return w(p.component.subTree);
            if (p.shapeFlag & 128) return p.suspense.next();
            const g = d(p.anchor || p.el), b = g && g[Pl];
            return b ? d(b) : g;
        };
        let H = !1;
        const N = (p, g, b)=>{
            p == null ? g._vnode && ie(g._vnode, null, null, !0) : y(g._vnode || null, p, g, null, null, null, b), g._vnode = p, H || (H = !0, jo(), Al(), H = !1);
        }, V = {
            p: y,
            um: ie,
            m: se,
            r: me,
            mt: K,
            mc: q,
            pc: R,
            pbc: W,
            n: w,
            o: e
        };
        return {
            render: N,
            hydrate: void 0,
            createApp: Xu(N)
        };
    }
    function Gr({ type: e, props: t }, n) {
        return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
    }
    function Pt({ effect: e, job: t }, n) {
        n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
    }
    function uf(e, t) {
        return (!e || e && !e.pendingBranch) && t && !t.persisted;
    }
    function io(e, t, n = !1) {
        const r = e.children, s = t.children;
        if (X(r) && X(s)) for(let o = 0; o < r.length; o++){
            const i = r[o];
            let l = s[o];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = Ot(s[o]), l.el = i.el), !n && l.patchFlag !== -2 && io(i, l)), l.type === Ir && (l.el = i.el), l.type === Re && !l.el && (l.el = i.el);
        }
    }
    function ff(e) {
        const t = e.slice(), n = [
            0
        ];
        let r, s, o, i, l;
        const c = e.length;
        for(r = 0; r < c; r++){
            const u = e[r];
            if (u !== 0) {
                if (s = n[n.length - 1], e[s] < u) {
                    t[r] = s, n.push(r);
                    continue;
                }
                for(o = 0, i = n.length - 1; o < i;)l = o + i >> 1, e[n[l]] < u ? o = l + 1 : i = l;
                u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
            }
        }
        for(o = n.length, i = n[o - 1]; o-- > 0;)n[o] = i, i = t[i];
        return n;
    }
    function sc(e) {
        const t = e.subTree.component;
        if (t) return t.asyncDep && !t.asyncResolved ? t : sc(t);
    }
    function Ko(e) {
        if (e) for(let t = 0; t < e.length; t++)e[t].flags |= 8;
    }
    const df = Symbol.for("v-scx"), pf = ()=>We(df);
    Vm = function(e, t) {
        return lo(e, null, t);
    };
    xe = function(e, t, n) {
        return lo(e, t, n);
    };
    function lo(e, t, n = de) {
        const { immediate: r, deep: s, flush: o, once: i } = n, l = we({}, n), c = t && r || !t && o !== "post";
        let u;
        if (jn) {
            if (o === "sync") {
                const h = pf();
                u = h.__watcherHandles || (h.__watcherHandles = []);
            } else if (!c) {
                const h = ()=>{};
                return h.stop = ot, h.resume = ot, h.pause = ot, h;
            }
        }
        const a = Pe;
        l.call = (h, m, y)=>Ye(h, a, m, y);
        let f = !1;
        o === "post" ? l.scheduler = (h)=>{
            Ie(h, a && a.suspense);
        } : o !== "sync" && (f = !0, l.scheduler = (h, m)=>{
            m ? h() : to(h);
        }), l.augmentJob = (h)=>{
            t && (h.flags |= 4), f && (h.flags |= 2, a && (h.id = a.uid, h.i = a));
        };
        const d = Eu(e, t, l);
        return jn && (u ? u.push(d) : c && d()), d;
    }
    function hf(e, t, n) {
        const r = this.proxy, s = ve(e) ? e.includes(".") ? oc(r, e) : ()=>r[e] : e.bind(r, r);
        let o;
        te(t) ? o = t : (o = t.handler, n = t);
        const i = Hn(this), l = lo(s, o.bind(r), n);
        return i(), l;
    }
    function oc(e, t) {
        const n = t.split(".");
        return ()=>{
            let r = e;
            for(let s = 0; s < n.length && r; s++)r = r[n[s]];
            return r;
        };
    }
    const gf = (e, t)=>t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${Bt(t)}Modifiers`];
    function mf(e, t, ...n) {
        if (e.isUnmounted) return;
        const r = e.vnode.props || de;
        let s = n;
        const o = t.startsWith("update:"), i = o && gf(r, t.slice(7));
        i && (i.trim && (s = n.map((a)=>ve(a) ? a.trim() : a)), i.number && (s = n.map(ps)));
        let l, c = r[l = Vr(t)] || r[l = Vr(ze(t))];
        !c && o && (c = r[l = Vr(Bt(t))]), c && Ye(c, e, 6, s);
        const u = r[l + "Once"];
        if (u) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[l]) return;
            e.emitted[l] = !0, Ye(u, e, 6, s);
        }
    }
    function ic(e, t, n = !1) {
        const r = t.emitsCache, s = r.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let i = {}, l = !1;
        if (!te(e)) {
            const c = (u)=>{
                const a = ic(u, t, !0);
                a && (l = !0, we(i, a));
            };
            !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
        }
        return !o && !l ? (ge(e) && r.set(e, null), null) : (X(o) ? o.forEach((c)=>i[c] = null) : we(i, o), ge(e) && r.set(e, i), i);
    }
    function $r(e, t) {
        return !e || !Sr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, Bt(t)) || ue(e, t));
    }
    function qo(e) {
        const { type: t, vnode: n, proxy: r, withProxy: s, propsOptions: [o], slots: i, attrs: l, emit: c, render: u, renderCache: a, props: f, data: d, setupState: h, ctx: m, inheritAttrs: y } = e, _ = dr(e);
        let x, C;
        try {
            if (n.shapeFlag & 4) {
                const v = s || r, M = v;
                x = st(u.call(M, v, a, f, h, d, m)), C = l;
            } else {
                const v = t;
                x = st(v.length > 1 ? v(f, {
                    attrs: l,
                    slots: i,
                    emit: c
                }) : v(f, null)), C = t.props ? l : yf(l);
            }
        } catch (v) {
            bn.length = 0, Tr(v, e, 1), x = Ne(Re);
        }
        let S = x;
        if (C && y !== !1) {
            const v = Object.keys(C), { shapeFlag: M } = S;
            v.length && M & 7 && (o && v.some(Bs) && (C = bf(C, o)), S = Mt(S, C, !1, !0));
        }
        return n.dirs && (S = Mt(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && Vt(S, n.transition), x = S, dr(_), x;
    }
    const yf = (e)=>{
        let t;
        for(const n in e)(n === "class" || n === "style" || Sr(n)) && ((t || (t = {}))[n] = e[n]);
        return t;
    }, bf = (e, t)=>{
        const n = {};
        for(const r in e)(!Bs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n;
    };
    function vf(e, t, n) {
        const { props: r, children: s, component: o } = e, { props: i, children: l, patchFlag: c } = t, u = o.emitsOptions;
        if (t.dirs || t.transition) return !0;
        if (n && c >= 0) {
            if (c & 1024) return !0;
            if (c & 16) return r ? zo(r, i, u) : !!i;
            if (c & 8) {
                const a = t.dynamicProps;
                for(let f = 0; f < a.length; f++){
                    const d = a[f];
                    if (i[d] !== r[d] && !$r(u, d)) return !0;
                }
            }
        } else return (s || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? zo(r, i, u) : !0 : !!i;
        return !1;
    }
    function zo(e, t, n) {
        const r = Object.keys(t);
        if (r.length !== Object.keys(e).length) return !0;
        for(let s = 0; s < r.length; s++){
            const o = r[s];
            if (t[o] !== e[o] && !$r(n, o)) return !0;
        }
        return !1;
    }
    function _f({ vnode: e, parent: t }, n) {
        for(; t;){
            const r = t.subTree;
            if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
            else break;
        }
    }
    const lc = (e)=>e.__isSuspense;
    function Sf(e, t) {
        t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Au(e);
    }
    let Yr, bn;
    Le = Symbol.for("v-fgt");
    Ir = Symbol.for("v-txt");
    Re = Symbol.for("v-cmt");
    Yr = Symbol.for("v-stc");
    bn = [];
    let Ue = null;
    Pn = function(e = !1) {
        bn.push(Ue = e ? null : []);
    };
    function wf() {
        bn.pop(), Ue = bn[bn.length - 1] || null;
    }
    let $n = 1;
    function Go(e, t = !1) {
        $n += e, e < 0 && Ue && t && (Ue.hasOnce = !0);
    }
    function cc(e) {
        return e.dynamicChildren = $n > 0 ? Ue || Yt : null, wf(), $n > 0 && Ue && Ue.push(e), e;
    }
    xf = function(e, t, n, r, s, o) {
        return cc(co(e, t, n, r, s, o, !0));
    };
    hr = function(e, t, n, r, s) {
        return cc(Ne(e, t, n, r, s, !0));
    };
    In = function(e) {
        return e ? e.__v_isVNode === !0 : !1;
    };
    function Nt(e, t) {
        return e.type === t.type && e.key === t.key;
    }
    const ac = ({ key: e })=>e ?? null, sr = ({ ref: e, ref_key: t, ref_for: n })=>(typeof e == "number" && (e = "" + e), e != null ? ve(e) || be(e) || te(e) ? {
            i: Ce,
            r: e,
            k: t,
            f: !!n
        } : e : null);
    co = function(e, t = null, n = null, r = 0, s = null, o = e === Le ? 0 : 1, i = !1, l = !1) {
        const c = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && ac(t),
            ref: t && sr(t),
            scopeId: Rl,
            slotScopeIds: null,
            children: n,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetStart: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: o,
            patchFlag: r,
            dynamicProps: s,
            dynamicChildren: null,
            appContext: null,
            ctx: Ce
        };
        return l ? (ao(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ve(n) ? 8 : 16), $n > 0 && !i && Ue && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Ue.push(c), c;
    };
    Ne = Of;
    function Of(e, t = null, n = null, r = 0, s = null, o = !1) {
        if ((!e || e === Uu) && (e = Re), In(e)) {
            const l = Mt(e, t, !0);
            return n && ao(l, n), $n > 0 && !o && Ue && (l.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = l : Ue.push(l)), l.patchFlag = -2, l;
        }
        if (Lf(e) && (e = e.__vccOpts), t) {
            t = Ef(t);
            let { class: l, style: c } = t;
            l && !ve(l) && (t.class = Ks(l)), ge(c) && (Xs(c) && !X(c) && (c = we({}, c)), t.style = Cn(c));
        }
        const i = ve(e) ? 1 : lc(e) ? 128 : $l(e) ? 64 : ge(e) ? 4 : te(e) ? 2 : 0;
        return co(e, t, n, r, s, i, o, !0);
    }
    function Ef(e) {
        return e ? Xs(e) || Ql(e) ? we({}, e) : e : null;
    }
    Mt = function(e, t, n = !1, r = !1) {
        const { props: s, ref: o, patchFlag: i, children: l, transition: c } = e, u = t ? Tf(s || {}, t) : s, a = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && ac(u),
            ref: t && t.ref ? n && o ? X(o) ? o.concat(sr(t)) : [
                o,
                sr(t)
            ] : sr(t) : o,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Le ? i === -1 ? 16 : i | 16 : i,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: c,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && Mt(e.ssContent),
            ssFallback: e.ssFallback && Mt(e.ssFallback),
            placeholder: e.placeholder,
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce
        };
        return c && r && Vt(a, c.clone(a)), a;
    };
    Cf = function(e = " ", t = 0) {
        return Ne(Ir, null, e, t);
    };
    Bm = function(e = "", t = !1) {
        return t ? (Pn(), hr(Re, null, e)) : Ne(Re, null, e);
    };
    function st(e) {
        return e == null || typeof e == "boolean" ? Ne(Re) : X(e) ? Ne(Le, null, e.slice()) : In(e) ? Ot(e) : Ne(Ir, null, String(e));
    }
    function Ot(e) {
        return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mt(e);
    }
    function ao(e, t) {
        let n = 0;
        const { shapeFlag: r } = e;
        if (t == null) t = null;
        else if (X(t)) n = 16;
        else if (typeof t == "object") if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1), ao(e, s()), s._c && (s._d = !0));
            return;
        } else {
            n = 32;
            const s = t._;
            !s && !Ql(t) ? t._ctx = Ce : s === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
        }
        else te(t) ? (t = {
            default: t,
            _ctx: Ce
        }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
            Cf(t)
        ]) : n = 8);
        e.children = t, e.shapeFlag |= n;
    }
    Tf = function(...e) {
        const t = {};
        for(let n = 0; n < e.length; n++){
            const r = e[n];
            for(const s in r)if (s === "class") t.class !== r.class && (t.class = Ks([
                t.class,
                r.class
            ]));
            else if (s === "style") t.style = Cn([
                t.style,
                r.style
            ]);
            else if (Sr(s)) {
                const o = t[s], i = r[s];
                i && o !== i && !(X(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
            } else s !== "" && (t[s] = r[s]);
        }
        return t;
    };
    function et(e, t, n, r = null) {
        Ye(e, t, 7, [
            n,
            r
        ]);
    }
    const Af = Yl();
    let Mf = 0;
    function Rf(e, t, n) {
        const r = e.type, s = (t ? t.appContext : e.appContext) || Af, o = {
            uid: Mf++,
            vnode: e,
            type: r,
            parent: t,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new sl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(s.provides),
            ids: t ? t.ids : [
                "",
                0,
                0
            ],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: ec(r, s),
            emitsOptions: ic(r, s),
            emit: null,
            emitted: null,
            propsDefaults: de,
            inheritAttrs: r.inheritAttrs,
            ctx: de,
            data: de,
            props: de,
            attrs: de,
            slots: de,
            refs: de,
            setupState: de,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
        return o.ctx = {
            _: o
        }, o.root = t ? t.root : o, o.emit = mf.bind(null, o), e.ce && e.ce(o), o;
    }
    let Pe = null;
    Ut = ()=>Pe || Ce;
    let gr, ws;
    {
        const e = Er(), t = (n, r)=>{
            let s;
            return (s = e[n]) || (s = e[n] = []), s.push(r), (o)=>{
                s.length > 1 ? s.forEach((i)=>i(o)) : s[0](o);
            };
        };
        gr = t("__VUE_INSTANCE_SETTERS__", (n)=>Pe = n), ws = t("__VUE_SSR_SETTERS__", (n)=>jn = n);
    }
    const Hn = (e)=>{
        const t = Pe;
        return gr(e), e.scope.on(), ()=>{
            e.scope.off(), gr(t);
        };
    }, Yo = ()=>{
        Pe && Pe.scope.off(), gr(null);
    };
    function uc(e) {
        return e.vnode.shapeFlag & 4;
    }
    let jn = !1;
    function Pf(e, t = !1, n = !1) {
        t && ws(t);
        const { props: r, children: s } = e.vnode, o = uc(e);
        tf(e, r, o, t), of(e, s, n || t);
        const i = o ? $f(e, t) : void 0;
        return t && ws(!1), i;
    }
    function $f(e, t) {
        const n = e.type;
        e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Ku);
        const { setup: r } = n;
        if (r) {
            ht();
            const s = e.setupContext = r.length > 1 ? dc(e) : null, o = Hn(e), i = kn(r, e, 0, [
                e.props,
                s
            ]), l = Qi(i);
            if (gt(), o(), (l || e.sp) && !Qt(e) && Hl(e), l) {
                if (i.then(Yo, Yo), t) return i.then((c)=>{
                    Zo(e, c);
                }).catch((c)=>{
                    Tr(c, e, 0);
                });
                e.asyncDep = i;
            } else Zo(e, i);
        } else fc(e);
    }
    function Zo(e, t, n) {
        te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = Ol(t)), fc(e);
    }
    function fc(e, t, n) {
        const r = e.type;
        e.render || (e.render = r.render || ot);
        {
            const s = Hn(e);
            ht();
            try {
                zu(e);
            } finally{
                gt(), s();
            }
        }
    }
    const If = {
        get (e, t) {
            return Me(e, "get", ""), e[t];
        }
    };
    function dc(e) {
        const t = (n)=>{
            e.exposed = n || {};
        };
        return {
            attrs: new Proxy(e.attrs, If),
            slots: e.slots,
            emit: e.emit,
            expose: t
        };
    }
    function jr(e) {
        return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ol(eo(e.exposed)), {
            get (t, n) {
                if (n in t) return t[n];
                if (n in yn) return yn[n](e);
            },
            has (t, n) {
                return n in t || n in yn;
            }
        })) : e.proxy;
    }
    function jf(e, t = !0) {
        return te(e) ? e.displayName || e.name : e.name || t && e.__name;
    }
    function Lf(e) {
        return te(e) && "__vccOpts" in e;
    }
    _e = (e, t)=>xu(e, t, jn);
    Vn = function(e, t, n) {
        const r = arguments.length;
        return r === 2 ? ge(t) && !X(t) ? In(t) ? Ne(e, null, [
            t
        ]) : Ne(e, t) : Ne(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && In(n) && (n = [
            n
        ]), Ne(e, t, n));
    };
    const Nf = "3.5.18";
    let xs;
    const Jo = typeof window < "u" && window.trustedTypes;
    if (Jo) try {
        xs = Jo.createPolicy("vue", {
            createHTML: (e)=>e
        });
    } catch  {}
    let pc, Df, Ff, at, Qo, kf, bt, cn, tn, hc, gc, Hf, $t, Xo;
    pc = xs ? (e)=>xs.createHTML(e) : (e)=>e;
    Df = "http://www.w3.org/2000/svg";
    Ff = "http://www.w3.org/1998/Math/MathML";
    at = typeof document < "u" ? document : null;
    Qo = at && at.createElement("template");
    kf = {
        insert: (e, t, n)=>{
            t.insertBefore(e, n || null);
        },
        remove: (e)=>{
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, r)=>{
            const s = t === "svg" ? at.createElementNS(Df, e) : t === "mathml" ? at.createElementNS(Ff, e) : n ? at.createElement(e, {
                is: n
            }) : at.createElement(e);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
        },
        createText: (e)=>at.createTextNode(e),
        createComment: (e)=>at.createComment(e),
        setText: (e, t)=>{
            e.nodeValue = t;
        },
        setElementText: (e, t)=>{
            e.textContent = t;
        },
        parentNode: (e)=>e.parentNode,
        nextSibling: (e)=>e.nextSibling,
        querySelector: (e)=>at.querySelector(e),
        setScopeId (e, t) {
            e.setAttribute(t, "");
        },
        insertStaticContent (e, t, n, r, s, o) {
            const i = n ? n.previousSibling : t.lastChild;
            if (s && (s === o || s.nextSibling)) for(; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)););
            else {
                Qo.innerHTML = pc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
                const l = Qo.content;
                if (r === "svg" || r === "mathml") {
                    const c = l.firstChild;
                    for(; c.firstChild;)l.appendChild(c.firstChild);
                    l.removeChild(c);
                }
                t.insertBefore(l, n);
            }
            return [
                i ? i.nextSibling : t.firstChild,
                n ? n.previousSibling : t.lastChild
            ];
        }
    };
    bt = "transition";
    cn = "animation";
    tn = Symbol("_vtc");
    hc = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [
            String,
            Number,
            Object
        ],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    };
    gc = we({}, Nl, hc);
    Hf = (e)=>(e.displayName = "Transition", e.props = gc, e);
    Um = Hf((e, { slots: t })=>Vn($u, mc(e), t));
    $t = (e, t = [])=>{
        X(e) ? e.forEach((n)=>n(...t)) : e && e(...t);
    };
    Xo = (e)=>e ? X(e) ? e.some((t)=>t.length > 1) : e.length > 1 : !1;
    function mc(e) {
        const t = {};
        for(const F in e)F in hc || (t[F] = e[F]);
        if (e.css === !1) return t;
        const { name: n = "v", type: r, duration: s, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: c = o, appearActiveClass: u = i, appearToClass: a = l, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, m = Vf(s), y = m && m[0], _ = m && m[1], { onBeforeEnter: x, onEnter: C, onEnterCancelled: S, onLeave: v, onLeaveCancelled: M, onBeforeAppear: U = x, onAppear: G = C, onAppearCancelled: q = S } = t, P = (F, re, K, j)=>{
            F._enterCancelled = j, _t(F, re ? a : l), _t(F, re ? u : i), K && K();
        }, W = (F, re)=>{
            F._isLeaving = !1, _t(F, f), _t(F, h), _t(F, d), re && re();
        }, z = (F)=>(re, K)=>{
                const j = F ? G : C, A = ()=>P(re, F, K);
                $t(j, [
                    re,
                    A
                ]), ei(()=>{
                    _t(re, F ? c : o), nt(re, F ? a : l), Xo(j) || ti(re, r, y, A);
                });
            };
        return we(t, {
            onBeforeEnter (F) {
                $t(x, [
                    F
                ]), nt(F, o), nt(F, i);
            },
            onBeforeAppear (F) {
                $t(U, [
                    F
                ]), nt(F, c), nt(F, u);
            },
            onEnter: z(!1),
            onAppear: z(!0),
            onLeave (F, re) {
                F._isLeaving = !0;
                const K = ()=>W(F, re);
                nt(F, f), F._enterCancelled ? (nt(F, d), Os()) : (Os(), nt(F, d)), ei(()=>{
                    F._isLeaving && (_t(F, f), nt(F, h), Xo(v) || ti(F, r, _, K));
                }), $t(v, [
                    F,
                    K
                ]);
            },
            onEnterCancelled (F) {
                P(F, !1, void 0, !0), $t(S, [
                    F
                ]);
            },
            onAppearCancelled (F) {
                P(F, !0, void 0, !0), $t(q, [
                    F
                ]);
            },
            onLeaveCancelled (F) {
                W(F), $t(M, [
                    F
                ]);
            }
        });
    }
    function Vf(e) {
        if (e == null) return null;
        if (ge(e)) return [
            Zr(e.enter),
            Zr(e.leave)
        ];
        {
            const t = Zr(e);
            return [
                t,
                t
            ];
        }
    }
    function Zr(e) {
        return Ba(e);
    }
    function nt(e, t) {
        t.split(/\s+/).forEach((n)=>n && e.classList.add(n)), (e[tn] || (e[tn] = new Set)).add(t);
    }
    function _t(e, t) {
        t.split(/\s+/).forEach((r)=>r && e.classList.remove(r));
        const n = e[tn];
        n && (n.delete(t), n.size || (e[tn] = void 0));
    }
    function ei(e) {
        requestAnimationFrame(()=>{
            requestAnimationFrame(e);
        });
    }
    let Bf = 0;
    function ti(e, t, n, r) {
        const s = e._endId = ++Bf, o = ()=>{
            s === e._endId && r();
        };
        if (n != null) return setTimeout(o, n);
        const { type: i, timeout: l, propCount: c } = yc(e, t);
        if (!i) return r();
        const u = i + "end";
        let a = 0;
        const f = ()=>{
            e.removeEventListener(u, d), o();
        }, d = (h)=>{
            h.target === e && ++a >= c && f();
        };
        setTimeout(()=>{
            a < c && f();
        }, l + 1), e.addEventListener(u, d);
    }
    function yc(e, t) {
        const n = window.getComputedStyle(e), r = (m)=>(n[m] || "").split(", "), s = r(`${bt}Delay`), o = r(`${bt}Duration`), i = ni(s, o), l = r(`${cn}Delay`), c = r(`${cn}Duration`), u = ni(l, c);
        let a = null, f = 0, d = 0;
        t === bt ? i > 0 && (a = bt, f = i, d = o.length) : t === cn ? u > 0 && (a = cn, f = u, d = c.length) : (f = Math.max(i, u), a = f > 0 ? i > u ? bt : cn : null, d = a ? a === bt ? o.length : c.length : 0);
        const h = a === bt && /\b(transform|all)(,|$)/.test(r(`${bt}Property`).toString());
        return {
            type: a,
            timeout: f,
            propCount: d,
            hasTransform: h
        };
    }
    function ni(e, t) {
        for(; e.length < t.length;)e = e.concat(e);
        return Math.max(...t.map((n, r)=>ri(n) + ri(e[r])));
    }
    function ri(e) {
        return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
    }
    function Os() {
        return document.body.offsetHeight;
    }
    function Uf(e, t, n) {
        const r = e[tn];
        r && (t = (t ? [
            t,
            ...r
        ] : [
            ...r
        ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
    }
    let mr, bc;
    mr = Symbol("_vod");
    bc = Symbol("_vsh");
    Wm = {
        beforeMount (e, { value: t }, { transition: n }) {
            e[mr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : an(e, t);
        },
        mounted (e, { value: t }, { transition: n }) {
            n && t && n.enter(e);
        },
        updated (e, { value: t, oldValue: n }, { transition: r }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), an(e, !0), r.enter(e)) : r.leave(e, ()=>{
                an(e, !1);
            }) : an(e, t));
        },
        beforeUnmount (e, { value: t }) {
            an(e, t);
        }
    };
    function an(e, t) {
        e.style.display = t ? e[mr] : "none", e[bc] = !t;
    }
    const Wf = Symbol(""), Kf = /(^|;)\s*display\s*:/;
    function qf(e, t, n) {
        const r = e.style, s = ve(n);
        let o = !1;
        if (n && !s) {
            if (t) if (ve(t)) for (const i of t.split(";")){
                const l = i.slice(0, i.indexOf(":")).trim();
                n[l] == null && or(r, l, "");
            }
            else for(const i in t)n[i] == null && or(r, i, "");
            for(const i in n)i === "display" && (o = !0), or(r, i, n[i]);
        } else if (s) {
            if (t !== n) {
                const i = r[Wf];
                i && (n += ";" + i), r.cssText = n, o = Kf.test(n);
            }
        } else t && e.removeAttribute("style");
        mr in e && (e[mr] = o ? r.display : "", e[bc] && (r.display = "none"));
    }
    const si = /\s*!important$/;
    function or(e, t, n) {
        if (X(n)) n.forEach((r)=>or(e, t, r));
        else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
        else {
            const r = zf(e, t);
            si.test(n) ? e.setProperty(Bt(r), n.replace(si, ""), "important") : e[r] = n;
        }
    }
    const oi = [
        "Webkit",
        "Moz",
        "ms"
    ], Jr = {};
    function zf(e, t) {
        const n = Jr[t];
        if (n) return n;
        let r = ze(t);
        if (r !== "filter" && r in e) return Jr[t] = r;
        r = Or(r);
        for(let s = 0; s < oi.length; s++){
            const o = oi[s] + r;
            if (o in e) return Jr[t] = o;
        }
        return t;
    }
    const ii = "http://www.w3.org/1999/xlink";
    function li(e, t, n, r, s, o = Ga(t)) {
        r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ii, t.slice(6, t.length)) : e.setAttributeNS(ii, t, n) : n == null || o && !tl(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : mt(n) ? String(n) : n);
    }
    function ci(e, t, n, r, s) {
        if (t === "innerHTML" || t === "textContent") {
            n != null && (e[t] = t === "innerHTML" ? pc(n) : n);
            return;
        }
        const o = e.tagName;
        if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
            const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
            (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
            return;
        }
        let i = !1;
        if (n === "" || n == null) {
            const l = typeof e[t];
            l === "boolean" ? n = tl(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
        }
        try {
            e[t] = n;
        } catch  {}
        i && e.removeAttribute(s || t);
    }
    function zt(e, t, n, r) {
        e.addEventListener(t, n, r);
    }
    function Gf(e, t, n, r) {
        e.removeEventListener(t, n, r);
    }
    const ai = Symbol("_vei");
    function Yf(e, t, n, r, s = null) {
        const o = e[ai] || (e[ai] = {}), i = o[t];
        if (r && i) i.value = r;
        else {
            const [l, c] = Zf(t);
            if (r) {
                const u = o[t] = Xf(r, s);
                zt(e, l, u, c);
            } else i && (Gf(e, l, i, c), o[t] = void 0);
        }
    }
    const ui = /(?:Once|Passive|Capture)$/;
    function Zf(e) {
        let t;
        if (ui.test(e)) {
            t = {};
            let r;
            for(; r = e.match(ui);)e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
        }
        return [
            e[2] === ":" ? e.slice(3) : Bt(e.slice(2)),
            t
        ];
    }
    let Qr = 0;
    const Jf = Promise.resolve(), Qf = ()=>Qr || (Jf.then(()=>Qr = 0), Qr = Date.now());
    function Xf(e, t) {
        const n = (r)=>{
            if (!r._vts) r._vts = Date.now();
            else if (r._vts <= n.attached) return;
            Ye(ed(r, n.value), t, 5, [
                r
            ]);
        };
        return n.value = e, n.attached = Qf(), n;
    }
    function ed(e, t) {
        if (X(t)) {
            const n = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = ()=>{
                n.call(e), e._stopped = !0;
            }, t.map((r)=>(s)=>!s._stopped && r && r(s));
        } else return t;
    }
    const fi = (e)=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, td = (e, t, n, r, s, o)=>{
        const i = s === "svg";
        t === "class" ? Uf(e, r, i) : t === "style" ? qf(e, n, r) : Sr(t) ? Bs(t) || Yf(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nd(e, t, r, i)) ? (ci(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && li(e, t, r, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ve(r)) ? ci(e, ze(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), li(e, t, r, i));
    };
    function nd(e, t, n, r) {
        if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && fi(t) && te(n));
        if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
        if (t === "width" || t === "height") {
            const s = e.tagName;
            if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1;
        }
        return fi(t) && ve(n) ? !1 : t in e;
    }
    let vc, _c, yr, di, rd, sd;
    vc = new WeakMap;
    _c = new WeakMap;
    yr = Symbol("_moveCb");
    di = Symbol("_enterCb");
    rd = (e)=>(delete e.props.mode, e);
    sd = rd({
        name: "TransitionGroup",
        props: we({}, gc, {
            tag: String,
            moveClass: String
        }),
        setup (e, { slots: t }) {
            const n = Ut(), r = Ll();
            let s, o;
            return ro(()=>{
                if (!s.length) return;
                const i = e.moveClass || `${e.name || "v"}-move`;
                if (!cd(s[0].el, n.vnode.el, i)) {
                    s = [];
                    return;
                }
                s.forEach(od), s.forEach(id);
                const l = s.filter(ld);
                Os(), l.forEach((c)=>{
                    const u = c.el, a = u.style;
                    nt(u, i), a.transform = a.webkitTransform = a.transitionDuration = "";
                    const f = u[yr] = (d)=>{
                        d && d.target !== u || (!d || /transform$/.test(d.propertyName)) && (u.removeEventListener("transitionend", f), u[yr] = null, _t(u, i));
                    };
                    u.addEventListener("transitionend", f);
                }), s = [];
            }), ()=>{
                const i = oe(e), l = mc(i);
                let c = i.tag || Le;
                if (s = [], o) for(let u = 0; u < o.length; u++){
                    const a = o[u];
                    a.el && a.el instanceof Element && (s.push(a), Vt(a, Rn(a, l, r, n)), vc.set(a, a.el.getBoundingClientRect()));
                }
                o = t.default ? no(t.default()) : [];
                for(let u = 0; u < o.length; u++){
                    const a = o[u];
                    a.key != null && Vt(a, Rn(a, l, r, n));
                }
                return Ne(c, null, o);
            };
        }
    });
    Km = sd;
    function od(e) {
        const t = e.el;
        t[yr] && t[yr](), t[di] && t[di]();
    }
    function id(e) {
        _c.set(e, e.el.getBoundingClientRect());
    }
    function ld(e) {
        const t = vc.get(e), n = _c.get(e), r = t.left - n.left, s = t.top - n.top;
        if (r || s) {
            const o = e.el.style;
            return o.transform = o.webkitTransform = `translate(${r}px,${s}px)`, o.transitionDuration = "0s", e;
        }
    }
    function cd(e, t, n) {
        const r = e.cloneNode(), s = e[tn];
        s && s.forEach((l)=>{
            l.split(/\s+/).forEach((c)=>c && r.classList.remove(c));
        }), n.split(/\s+/).forEach((l)=>l && r.classList.add(l)), r.style.display = "none";
        const o = t.nodeType === 1 ? t : t.parentNode;
        o.appendChild(r);
        const { hasTransform: i } = yc(r);
        return o.removeChild(r), i;
    }
    const pi = (e)=>{
        const t = e.props["onUpdate:modelValue"] || !1;
        return X(t) ? (n)=>tr(t, n) : t;
    };
    function ad(e) {
        e.target.composing = !0;
    }
    function hi(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
    }
    let Xr, ud, fd, dd;
    Xr = Symbol("_assign");
    qm = {
        created (e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
            e[Xr] = pi(s);
            const o = r || s.props && s.props.type === "number";
            zt(e, t ? "change" : "input", (i)=>{
                if (i.target.composing) return;
                let l = e.value;
                n && (l = l.trim()), o && (l = ps(l)), e[Xr](l);
            }), n && zt(e, "change", ()=>{
                e.value = e.value.trim();
            }), t || (zt(e, "compositionstart", ad), zt(e, "compositionend", hi), zt(e, "change", hi));
        },
        mounted (e, { value: t }) {
            e.value = t ?? "";
        },
        beforeUpdate (e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
            if (e[Xr] = pi(i), e.composing) return;
            const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? ps(e.value) : e.value, c = t ?? "";
            l !== c && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c));
        }
    };
    ud = [
        "ctrl",
        "shift",
        "alt",
        "meta"
    ];
    fd = {
        stop: (e)=>e.stopPropagation(),
        prevent: (e)=>e.preventDefault(),
        self: (e)=>e.target !== e.currentTarget,
        ctrl: (e)=>!e.ctrlKey,
        shift: (e)=>!e.shiftKey,
        alt: (e)=>!e.altKey,
        meta: (e)=>!e.metaKey,
        left: (e)=>"button" in e && e.button !== 0,
        middle: (e)=>"button" in e && e.button !== 1,
        right: (e)=>"button" in e && e.button !== 2,
        exact: (e, t)=>ud.some((n)=>e[`${n}Key`] && !t.includes(n))
    };
    zm = (e, t)=>{
        const n = e._withMods || (e._withMods = {}), r = t.join(".");
        return n[r] || (n[r] = (s, ...o)=>{
            for(let i = 0; i < t.length; i++){
                const l = fd[t[i]];
                if (l && l(s, t)) return;
            }
            return e(s, ...o);
        });
    };
    dd = we({
        patchProp: td
    }, kf);
    let gi;
    function Sc() {
        return gi || (gi = cf(dd));
    }
    let pd;
    Gm = (...e)=>{
        Sc().render(...e);
    };
    pd = (...e)=>{
        const t = Sc().createApp(...e), { mount: n } = t;
        return t.mount = (r)=>{
            const s = gd(r);
            if (!s) return;
            const o = t._component;
            !te(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
            const i = n(s, !1, hd(s));
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
        }, t;
    };
    function hd(e) {
        if (e instanceof SVGElement) return "svg";
        if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
    }
    function gd(e) {
        return ve(e) ? document.querySelector(e) : e;
    }
    let wc;
    const Lr = (e)=>wc = e, xc = Symbol();
    function Es(e) {
        return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
    }
    var vn;
    (function(e) {
        e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
    })(vn || (vn = {}));
    function md() {
        const e = ol(!0), t = e.run(()=>Te({}));
        let n = [], r = [];
        const s = eo({
            install (o) {
                Lr(s), s._a = o, o.provide(xc, s), o.config.globalProperties.$pinia = s, r.forEach((i)=>n.push(i)), r = [];
            },
            use (o) {
                return this._a ? n.push(o) : r.push(o), this;
            },
            _p: n,
            _a: null,
            _e: e,
            _s: new Map,
            state: t
        });
        return s;
    }
    const Oc = ()=>{};
    function mi(e, t, n, r = Oc) {
        e.push(t);
        const s = ()=>{
            const o = e.indexOf(t);
            o > -1 && (e.splice(o, 1), r());
        };
        return !n && qs() && il(s), s;
    }
    function Kt(e, ...t) {
        e.slice().forEach((n)=>{
            n(...t);
        });
    }
    const yd = (e)=>e(), yi = Symbol(), es = Symbol();
    function Cs(e, t) {
        e instanceof Map && t instanceof Map ? t.forEach((n, r)=>e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
        for(const n in t){
            if (!t.hasOwnProperty(n)) continue;
            const r = t[n], s = e[n];
            Es(s) && Es(r) && e.hasOwnProperty(n) && !be(r) && !pt(r) ? e[n] = Cs(s, r) : e[n] = r;
        }
        return e;
    }
    const bd = Symbol();
    function vd(e) {
        return !Es(e) || !e.hasOwnProperty(bd);
    }
    const { assign: St } = Object;
    function _d(e) {
        return !!(be(e) && e.effect);
    }
    function Sd(e, t, n, r) {
        const { state: s, actions: o, getters: i } = t, l = n.state.value[e];
        let c;
        function u() {
            l || (n.state.value[e] = s ? s() : {});
            const a = bu(n.state.value[e]);
            return St(a, o, Object.keys(i || {}).reduce((f, d)=>(f[d] = eo(_e(()=>{
                    Lr(n);
                    const h = n._s.get(e);
                    return i[d].call(h, h);
                })), f), {}));
        }
        return c = Ec(e, u, t, n, r, !0), c;
    }
    function Ec(e, t, n = {}, r, s, o) {
        let i;
        const l = St({
            actions: {}
        }, n), c = {
            deep: !0
        };
        let u, a, f = [], d = [], h;
        const m = r.state.value[e];
        !o && !m && (r.state.value[e] = {}), Te({});
        let y;
        function _(q) {
            let P;
            u = a = !1, typeof q == "function" ? (q(r.state.value[e]), P = {
                type: vn.patchFunction,
                storeId: e,
                events: h
            }) : (Cs(r.state.value[e], q), P = {
                type: vn.patchObject,
                payload: q,
                storeId: e,
                events: h
            });
            const W = y = Symbol();
            en().then(()=>{
                y === W && (u = !0);
            }), a = !0, Kt(f, P, r.state.value[e]);
        }
        const x = o ? function() {
            const { state: P } = n, W = P ? P() : {};
            this.$patch((z)=>{
                St(z, W);
            });
        } : Oc;
        function C() {
            i.stop(), f = [], d = [], r._s.delete(e);
        }
        const S = (q, P = "")=>{
            if (yi in q) return q[es] = P, q;
            const W = function() {
                Lr(r);
                const z = Array.from(arguments), F = [], re = [];
                function K($) {
                    F.push($);
                }
                function j($) {
                    re.push($);
                }
                Kt(d, {
                    args: z,
                    name: W[es],
                    store: M,
                    after: K,
                    onError: j
                });
                let A;
                try {
                    A = q.apply(this && this.$id === e ? this : M, z);
                } catch ($) {
                    throw Kt(re, $), $;
                }
                return A instanceof Promise ? A.then(($)=>(Kt(F, $), $)).catch(($)=>(Kt(re, $), Promise.reject($))) : (Kt(F, A), A);
            };
            return W[yi] = !0, W[es] = P, W;
        }, v = {
            _p: r,
            $id: e,
            $onAction: mi.bind(null, d),
            $patch: _,
            $reset: x,
            $subscribe (q, P = {}) {
                const W = mi(f, q, P.detached, ()=>z()), z = i.run(()=>xe(()=>r.state.value[e], (F)=>{
                        (P.flush === "sync" ? a : u) && q({
                            storeId: e,
                            type: vn.direct,
                            events: h
                        }, F);
                    }, St({}, c, P)));
                return W;
            },
            $dispose: C
        }, M = it(v);
        r._s.set(e, M);
        const G = (r._a && r._a.runWithContext || yd)(()=>r._e.run(()=>(i = ol()).run(()=>t({
                        action: S
                    }))));
        for(const q in G){
            const P = G[q];
            if (be(P) && !_d(P) || pt(P)) o || (m && vd(P) && (be(P) ? P.value = m[q] : Cs(P, m[q])), r.state.value[e][q] = P);
            else if (typeof P == "function") {
                const W = S(P, q);
                G[q] = W, l.actions[q] = P;
            }
        }
        return St(M, G), St(oe(M), G), Object.defineProperty(M, "$state", {
            get: ()=>r.state.value[e],
            set: (q)=>{
                _((P)=>{
                    St(P, q);
                });
            }
        }), r._p.forEach((q)=>{
            St(M, i.run(()=>q({
                    store: M,
                    app: r._a,
                    pinia: r,
                    options: l
                })));
        }), m && o && n.hydrate && n.hydrate(M.$state, m), u = !0, a = !0, M;
    }
    Ym = function(e, t, n) {
        let r, s;
        const o = typeof t == "function";
        typeof e == "string" ? (r = e, s = o ? n : t) : (s = e, r = e.id);
        function i(l, c) {
            const u = ef();
            return l = l || (u ? We(xc, null) : null), l && Lr(l), l = wc, l._s.has(r) || (o ? Ec(r, t, s, l) : Sd(r, s, l)), l._s.get(r);
        }
        return i.$id = r, i;
    };
    Zm = function(e) {
        {
            const t = oe(e), n = {};
            for(const r in t){
                const s = t[r];
                s.effect ? n[r] = _e({
                    get: ()=>e[r],
                    set (o) {
                        e[r] = o;
                    }
                }) : (be(s) || pt(s)) && (n[r] = Su(e, r));
            }
            return n;
        }
    };
    function ts(e) {
        if (e === null || typeof e != "object") return !1;
        const t = Object.getPrototypeOf(e);
        return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
    }
    function Ts(e, t, n = ".", r) {
        if (!ts(t)) return Ts(e, {}, n, r);
        const s = Object.assign({}, t);
        for(const o in e){
            if (o === "__proto__" || o === "constructor") continue;
            const i = e[o];
            i != null && (r && r(s, o, i, n) || (Array.isArray(i) && Array.isArray(s[o]) ? s[o] = [
                ...i,
                ...s[o]
            ] : ts(i) && ts(s[o]) ? s[o] = Ts(i, s[o], (n ? `${n}.` : "") + o.toString(), r) : s[o] = i));
        }
        return s;
    }
    function wd(e) {
        return (...t)=>t.reduce((n, r)=>Ts(n, r, "", e), {});
    }
    const Cc = wd();
    function Tc(e) {
        return qs() ? (il(e), !0) : !1;
    }
    function uo(e) {
        return typeof e == "function" ? e() : He(e);
    }
    const Ac = typeof window < "u" && typeof document < "u";
    typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
    const xd = (e)=>e != null, Od = Object.prototype.toString, br = (e)=>Od.call(e) === "[object Object]", Ht = ()=>{}, Ed = Cd();
    function Cd() {
        var e, t;
        return Ac && ((e = window?.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
    }
    function Td(e) {
        return Ut();
    }
    function Ad(e, t) {
        Td() && Pr(e, t);
    }
    function dt(e) {
        var t;
        const n = uo(e);
        return (t = n?.$el) != null ? t : n;
    }
    const fo = Ac ? window : void 0;
    function Be(...e) {
        let t, n, r, s;
        if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, s] = e, t = fo) : [t, n, r, s] = e, !t) return Ht;
        Array.isArray(n) || (n = [
            n
        ]), Array.isArray(r) || (r = [
            r
        ]);
        const o = [], i = ()=>{
            o.forEach((a)=>a()), o.length = 0;
        }, l = (a, f, d, h)=>(a.addEventListener(f, d, h), ()=>a.removeEventListener(f, d, h)), c = xe(()=>[
                dt(t),
                uo(s)
            ], ([a, f])=>{
            if (i(), !a) return;
            const d = br(f) ? {
                ...f
            } : f;
            o.push(...n.flatMap((h)=>r.map((m)=>l(a, h, m, d))));
        }, {
            immediate: !0,
            flush: "post"
        }), u = ()=>{
            c(), i();
        };
        return Tc(u), u;
    }
    let bi = !1;
    Jm = function(e, t, n = {}) {
        const { window: r = fo, ignore: s = [], capture: o = !0, detectIframe: i = !1 } = n;
        if (!r) return Ht;
        Ed && !bi && (bi = !0, Array.from(r.document.body.children).forEach((d)=>d.addEventListener("click", Ht)), r.document.documentElement.addEventListener("click", Ht));
        let l = !0;
        const c = (d)=>s.some((h)=>{
                if (typeof h == "string") return Array.from(r.document.querySelectorAll(h)).some((m)=>m === d.target || d.composedPath().includes(m));
                {
                    const m = dt(h);
                    return m && (d.target === m || d.composedPath().includes(m));
                }
            }), a = [
            Be(r, "click", (d)=>{
                const h = dt(e);
                if (!(!h || h === d.target || d.composedPath().includes(h))) {
                    if (d.detail === 0 && (l = !c(d)), !l) {
                        l = !0;
                        return;
                    }
                    t(d);
                }
            }, {
                passive: !0,
                capture: o
            }),
            Be(r, "pointerdown", (d)=>{
                const h = dt(e);
                l = !c(d) && !!(h && !d.composedPath().includes(h));
            }, {
                passive: !0
            }),
            i && Be(r, "blur", (d)=>{
                setTimeout(()=>{
                    var h;
                    const m = dt(e);
                    ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !m?.contains(r.document.activeElement) && t(d);
                }, 0);
            })
        ].filter(Boolean);
        return ()=>a.forEach((d)=>d());
    };
    function Md() {
        const e = Te(!1), t = Ut();
        return t && Rr(()=>{
            e.value = !0;
        }, t), e;
    }
    function Rd(e) {
        const t = Md();
        return _e(()=>(t.value, !!e()));
    }
    function Pd(e, t, n = {}) {
        const { root: r, rootMargin: s = "0px", threshold: o = .1, window: i = fo, immediate: l = !0 } = n, c = Rd(()=>i && "IntersectionObserver" in i), u = _e(()=>{
            const m = uo(e);
            return (Array.isArray(m) ? m : [
                m
            ]).map(dt).filter(xd);
        });
        let a = Ht;
        const f = Te(l), d = c.value ? xe(()=>[
                u.value,
                dt(r),
                f.value
            ], ([m, y])=>{
            if (a(), !f.value || !m.length) return;
            const _ = new IntersectionObserver(t, {
                root: dt(y),
                rootMargin: s,
                threshold: o
            });
            m.forEach((x)=>x && _.observe(x)), a = ()=>{
                _.disconnect(), a = Ht;
            };
        }, {
            immediate: l,
            flush: "post"
        }) : Ht, h = ()=>{
            a(), d(), f.value = !1;
        };
        return Tc(h), {
            isSupported: c,
            isActive: f,
            pause () {
                a(), f.value = !1;
            },
            resume () {
                f.value = !0;
            },
            stop: h
        };
    }
    const Mc = 1 / 60 * 1e3, $d = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now(), Rc = typeof window < "u" ? (e)=>window.requestAnimationFrame(e) : (e)=>setTimeout(()=>e($d()), Mc);
    function Id(e) {
        let t = [], n = [], r = 0, s = !1, o = !1;
        const i = new WeakSet, l = {
            schedule: (c, u = !1, a = !1)=>{
                const f = a && s, d = f ? t : n;
                return u && i.add(c), d.indexOf(c) === -1 && (d.push(c), f && s && (r = t.length)), c;
            },
            cancel: (c)=>{
                const u = n.indexOf(c);
                u !== -1 && n.splice(u, 1), i.delete(c);
            },
            process: (c)=>{
                if (s) {
                    o = !0;
                    return;
                }
                if (s = !0, [t, n] = [
                    n,
                    t
                ], n.length = 0, r = t.length, r) for(let u = 0; u < r; u++){
                    const a = t[u];
                    a(c), i.has(a) && (l.schedule(a), e());
                }
                s = !1, o && (o = !1, l.process(c));
            }
        };
        return l;
    }
    const jd = 40;
    let As = !0, Ln = !1, Ms = !1;
    const Xt = {
        delta: 0,
        timestamp: 0
    }, Bn = [
        "read",
        "update",
        "preRender",
        "render",
        "postRender"
    ], Nr = Bn.reduce((e, t)=>(e[t] = Id(()=>Ln = !0), e), {}), Rs = Bn.reduce((e, t)=>{
        const n = Nr[t];
        return e[t] = (r, s = !1, o = !1)=>(Ln || Dd(), n.schedule(r, s, o)), e;
    }, {}), Ld = Bn.reduce((e, t)=>(e[t] = Nr[t].cancel, e), {});
    Bn.reduce((e, t)=>(e[t] = ()=>Nr[t].process(Xt), e), {});
    const Nd = (e)=>Nr[e].process(Xt), Pc = (e)=>{
        Ln = !1, Xt.delta = As ? Mc : Math.max(Math.min(e - Xt.timestamp, jd), 1), Xt.timestamp = e, Ms = !0, Bn.forEach(Nd), Ms = !1, Ln && (As = !1, Rc(Pc));
    }, Dd = ()=>{
        Ln = !0, As = !0, Ms || Rc(Pc);
    }, $c = ()=>Xt;
    function Ic(e, t) {
        var n = {};
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function") for(var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
        return n;
    }
    var vi = function() {};
    const Ps = (e, t, n)=>Math.min(Math.max(n, e), t), ns = .001, Fd = .01, kd = 10, Hd = .05, Vd = 1;
    function Bd({ duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1 }) {
        let s, o, i = 1 - t;
        i = Ps(Hd, Vd, i), e = Ps(Fd, kd, e / 1e3), i < 1 ? (s = (u)=>{
            const a = u * i, f = a * e, d = a - n, h = $s(u, i), m = Math.exp(-f);
            return ns - d / h * m;
        }, o = (u)=>{
            const f = u * i * e, d = f * n + n, h = Math.pow(i, 2) * Math.pow(u, 2) * e, m = Math.exp(-f), y = $s(Math.pow(u, 2), i);
            return (-s(u) + ns > 0 ? -1 : 1) * ((d - h) * m) / y;
        }) : (s = (u)=>{
            const a = Math.exp(-u * e), f = (u - n) * e + 1;
            return -ns + a * f;
        }, o = (u)=>{
            const a = Math.exp(-u * e), f = (n - u) * (e * e);
            return a * f;
        });
        const l = 5 / e, c = Wd(s, o, l);
        if (e = e * 1e3, isNaN(c)) return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
        {
            const u = Math.pow(c, 2) * r;
            return {
                stiffness: u,
                damping: i * 2 * Math.sqrt(r * u),
                duration: e
            };
        }
    }
    const Ud = 12;
    function Wd(e, t, n) {
        let r = n;
        for(let s = 1; s < Ud; s++)r = r - e(r) / t(r);
        return r;
    }
    function $s(e, t) {
        return e * Math.sqrt(1 - t * t);
    }
    const Kd = [
        "duration",
        "bounce"
    ], qd = [
        "stiffness",
        "damping",
        "mass"
    ];
    function _i(e, t) {
        return t.some((n)=>e[n] !== void 0);
    }
    function zd(e) {
        let t = Object.assign({
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1
        }, e);
        if (!_i(e, qd) && _i(e, Kd)) {
            const n = Bd(e);
            t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1
            }), t.isResolvedFromDuration = !0;
        }
        return t;
    }
    function po(e) {
        var { from: t = 0, to: n = 1, restSpeed: r = 2, restDelta: s } = e, o = Ic(e, [
            "from",
            "to",
            "restSpeed",
            "restDelta"
        ]);
        const i = {
            done: !1,
            value: t
        };
        let { stiffness: l, damping: c, mass: u, velocity: a, duration: f, isResolvedFromDuration: d } = zd(o), h = Si, m = Si;
        function y() {
            const _ = a ? -(a / 1e3) : 0, x = n - t, C = c / (2 * Math.sqrt(l * u)), S = Math.sqrt(l / u) / 1e3;
            if (s === void 0 && (s = Math.min(Math.abs(n - t) / 100, .4)), C < 1) {
                const v = $s(S, C);
                h = (M)=>{
                    const U = Math.exp(-C * S * M);
                    return n - U * ((_ + C * S * x) / v * Math.sin(v * M) + x * Math.cos(v * M));
                }, m = (M)=>{
                    const U = Math.exp(-C * S * M);
                    return C * S * U * (Math.sin(v * M) * (_ + C * S * x) / v + x * Math.cos(v * M)) - U * (Math.cos(v * M) * (_ + C * S * x) - v * x * Math.sin(v * M));
                };
            } else if (C === 1) h = (v)=>n - Math.exp(-S * v) * (x + (_ + S * x) * v);
            else {
                const v = S * Math.sqrt(C * C - 1);
                h = (M)=>{
                    const U = Math.exp(-C * S * M), G = Math.min(v * M, 300);
                    return n - U * ((_ + C * S * x) * Math.sinh(G) + v * x * Math.cosh(G)) / v;
                };
            }
        }
        return y(), {
            next: (_)=>{
                const x = h(_);
                if (d) i.done = _ >= f;
                else {
                    const C = m(_) * 1e3, S = Math.abs(C) <= r, v = Math.abs(n - x) <= s;
                    i.done = S && v;
                }
                return i.value = i.done ? n : x, i;
            },
            flipTarget: ()=>{
                a = -a, [t, n] = [
                    n,
                    t
                ], y();
            }
        };
    }
    po.needsInterpolation = (e, t)=>typeof e == "string" || typeof t == "string";
    const Si = (e)=>0, jc = (e, t, n)=>{
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r;
    }, ho = (e, t, n)=>-n * e + n * t + e, Lc = (e, t)=>(n)=>Math.max(Math.min(n, t), e), _n = (e)=>e % 1 ? Number(e.toFixed(5)) : e, Nn = /(-)?([\d]*\.?[\d])+/g, Is = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, Gd = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
    function Un(e) {
        return typeof e == "string";
    }
    const Wn = {
        test: (e)=>typeof e == "number",
        parse: parseFloat,
        transform: (e)=>e
    }, Sn = Object.assign(Object.assign({}, Wn), {
        transform: Lc(0, 1)
    }), Qn = Object.assign(Object.assign({}, Wn), {
        default: 1
    }), go = (e)=>({
            test: (t)=>Un(t) && t.endsWith(e) && t.split(" ").length === 1,
            parse: parseFloat,
            transform: (t)=>`${t}${e}`
        }), It = go("deg"), wn = go("%"), ne = go("px"), wi = Object.assign(Object.assign({}, wn), {
        parse: (e)=>wn.parse(e) / 100,
        transform: (e)=>wn.transform(e * 100)
    }), mo = (e, t)=>(n)=>!!(Un(n) && Gd.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Nc = (e, t, n)=>(r)=>{
            if (!Un(r)) return r;
            const [s, o, i, l] = r.match(Nn);
            return {
                [e]: parseFloat(s),
                [t]: parseFloat(o),
                [n]: parseFloat(i),
                alpha: l !== void 0 ? parseFloat(l) : 1
            };
        }, Dt = {
        test: mo("hsl", "hue"),
        parse: Nc("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 })=>"hsla(" + Math.round(e) + ", " + wn.transform(_n(t)) + ", " + wn.transform(_n(n)) + ", " + _n(Sn.transform(r)) + ")"
    }, Yd = Lc(0, 255), rs = Object.assign(Object.assign({}, Wn), {
        transform: (e)=>Math.round(Yd(e))
    }), Ct = {
        test: mo("rgb", "red"),
        parse: Nc("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 })=>"rgba(" + rs.transform(e) + ", " + rs.transform(t) + ", " + rs.transform(n) + ", " + _n(Sn.transform(r)) + ")"
    };
    function Zd(e) {
        let t = "", n = "", r = "", s = "";
        return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), s = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), s = e.substr(4, 1), t += t, n += n, r += r, s += s), {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1
        };
    }
    const js = {
        test: mo("#"),
        parse: Zd,
        transform: Ct.transform
    }, ke = {
        test: (e)=>Ct.test(e) || js.test(e) || Dt.test(e),
        parse: (e)=>Ct.test(e) ? Ct.parse(e) : Dt.test(e) ? Dt.parse(e) : js.parse(e),
        transform: (e)=>Un(e) ? e : e.hasOwnProperty("red") ? Ct.transform(e) : Dt.transform(e)
    }, Dc = "${c}", Fc = "${n}";
    function Jd(e) {
        var t, n, r, s;
        return isNaN(e) && Un(e) && ((n = (t = e.match(Nn)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((s = (r = e.match(Is)) === null || r === void 0 ? void 0 : r.length) !== null && s !== void 0 ? s : 0) > 0;
    }
    function kc(e) {
        typeof e == "number" && (e = `${e}`);
        const t = [];
        let n = 0;
        const r = e.match(Is);
        r && (n = r.length, e = e.replace(Is, Dc), t.push(...r.map(ke.parse)));
        const s = e.match(Nn);
        return s && (e = e.replace(Nn, Fc), t.push(...s.map(Wn.parse))), {
            values: t,
            numColors: n,
            tokenised: e
        };
    }
    function Hc(e) {
        return kc(e).values;
    }
    function Vc(e) {
        const { values: t, numColors: n, tokenised: r } = kc(e), s = t.length;
        return (o)=>{
            let i = r;
            for(let l = 0; l < s; l++)i = i.replace(l < n ? Dc : Fc, l < n ? ke.transform(o[l]) : _n(o[l]));
            return i;
        };
    }
    const Qd = (e)=>typeof e == "number" ? 0 : e;
    function Xd(e) {
        const t = Hc(e);
        return Vc(e)(t.map(Qd));
    }
    const Kn = {
        test: Jd,
        parse: Hc,
        createTransformer: Vc,
        getAnimatableNone: Xd
    }, ep = new Set([
        "brightness",
        "contrast",
        "saturate",
        "opacity"
    ]);
    function tp(e) {
        let [t, n] = e.slice(0, -1).split("(");
        if (t === "drop-shadow") return e;
        const [r] = n.match(Nn) || [];
        if (!r) return e;
        const s = n.replace(r, "");
        let o = ep.has(t) ? 1 : 0;
        return r !== n && (o *= 100), t + "(" + o + s + ")";
    }
    const np = /([a-z-]*)\(.*?\)/g, Ls = Object.assign(Object.assign({}, Kn), {
        getAnimatableNone: (e)=>{
            const t = e.match(np);
            return t ? t.map(tp).join(" ") : e;
        }
    });
    function ss(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
    }
    function xi({ hue: e, saturation: t, lightness: n, alpha: r }) {
        e /= 360, t /= 100, n /= 100;
        let s = 0, o = 0, i = 0;
        if (!t) s = o = i = n;
        else {
            const l = n < .5 ? n * (1 + t) : n + t - n * t, c = 2 * n - l;
            s = ss(c, l, e + 1 / 3), o = ss(c, l, e), i = ss(c, l, e - 1 / 3);
        }
        return {
            red: Math.round(s * 255),
            green: Math.round(o * 255),
            blue: Math.round(i * 255),
            alpha: r
        };
    }
    const rp = (e, t, n)=>{
        const r = e * e, s = t * t;
        return Math.sqrt(Math.max(0, n * (s - r) + r));
    }, sp = [
        js,
        Ct,
        Dt
    ], Oi = (e)=>sp.find((t)=>t.test(e)), Bc = (e, t)=>{
        let n = Oi(e), r = Oi(t), s = n.parse(e), o = r.parse(t);
        n === Dt && (s = xi(s), n = Ct), r === Dt && (o = xi(o), r = Ct);
        const i = Object.assign({}, s);
        return (l)=>{
            for(const c in i)c !== "alpha" && (i[c] = rp(s[c], o[c], l));
            return i.alpha = ho(s.alpha, o.alpha, l), n.transform(i);
        };
    }, op = (e)=>typeof e == "number", ip = (e, t)=>(n)=>t(e(n)), Uc = (...e)=>e.reduce(ip);
    function Wc(e, t) {
        return op(e) ? (n)=>ho(e, t, n) : ke.test(e) ? Bc(e, t) : qc(e, t);
    }
    const Kc = (e, t)=>{
        const n = [
            ...e
        ], r = n.length, s = e.map((o, i)=>Wc(o, t[i]));
        return (o)=>{
            for(let i = 0; i < r; i++)n[i] = s[i](o);
            return n;
        };
    }, lp = (e, t)=>{
        const n = Object.assign(Object.assign({}, e), t), r = {};
        for(const s in n)e[s] !== void 0 && t[s] !== void 0 && (r[s] = Wc(e[s], t[s]));
        return (s)=>{
            for(const o in r)n[o] = r[o](s);
            return n;
        };
    };
    function Ei(e) {
        const t = Kn.parse(e), n = t.length;
        let r = 0, s = 0, o = 0;
        for(let i = 0; i < n; i++)r || typeof t[i] == "number" ? r++ : t[i].hue !== void 0 ? o++ : s++;
        return {
            parsed: t,
            numNumbers: r,
            numRGB: s,
            numHSL: o
        };
    }
    const qc = (e, t)=>{
        const n = Kn.createTransformer(t), r = Ei(e), s = Ei(t);
        return r.numHSL === s.numHSL && r.numRGB === s.numRGB && r.numNumbers >= s.numNumbers ? Uc(Kc(r.parsed, s.parsed), n) : (i)=>`${i > 0 ? t : e}`;
    }, cp = (e, t)=>(n)=>ho(e, t, n);
    function ap(e) {
        if (typeof e == "number") return cp;
        if (typeof e == "string") return ke.test(e) ? Bc : qc;
        if (Array.isArray(e)) return Kc;
        if (typeof e == "object") return lp;
    }
    function up(e, t, n) {
        const r = [], s = n || ap(e[0]), o = e.length - 1;
        for(let i = 0; i < o; i++){
            let l = s(e[i], e[i + 1]);
            if (t) {
                const c = Array.isArray(t) ? t[i] : t;
                l = Uc(c, l);
            }
            r.push(l);
        }
        return r;
    }
    function fp([e, t], [n]) {
        return (r)=>n(jc(e, t, r));
    }
    function dp(e, t) {
        const n = e.length, r = n - 1;
        return (s)=>{
            let o = 0, i = !1;
            if (s <= e[0] ? i = !0 : s >= e[r] && (o = r - 1, i = !0), !i) {
                let c = 1;
                for(; c < n && !(e[c] > s || c === r); c++);
                o = c - 1;
            }
            const l = jc(e[o], e[o + 1], s);
            return t[o](l);
        };
    }
    function zc(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
        const o = e.length;
        vi(o === t.length), vi(!r || !Array.isArray(r) || r.length === o - 1), e[0] > e[o - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
        const i = up(t, r, s), l = o === 2 ? fp(e, i) : dp(e, i);
        return n ? (c)=>l(Ps(e[0], e[o - 1], c)) : l;
    }
    const Dr = (e)=>(t)=>1 - e(1 - t), yo = (e)=>(t)=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, pp = (e)=>(t)=>Math.pow(t, e), Gc = (e)=>(t)=>t * t * ((e + 1) * t - e), hp = (e)=>{
        const t = Gc(e);
        return (n)=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)));
    }, Yc = 1.525, gp = 4 / 11, mp = 8 / 11, yp = 9 / 10, Zc = (e)=>e, bo = pp(2), bp = Dr(bo), Jc = yo(bo), Qc = (e)=>1 - Math.sin(Math.acos(e)), Xc = Dr(Qc), vp = yo(Xc), vo = Gc(Yc), _p = Dr(vo), Sp = yo(vo), wp = hp(Yc), xp = 4356 / 361, Op = 35442 / 1805, Ep = 16061 / 1805, vr = (e)=>{
        if (e === 1 || e === 0) return e;
        const t = e * e;
        return e < gp ? 7.5625 * t : e < mp ? 9.075 * t - 9.9 * e + 3.4 : e < yp ? xp * t - Op * e + Ep : 10.8 * e * e - 20.52 * e + 10.72;
    }, Cp = Dr(vr), Tp = (e)=>e < .5 ? .5 * (1 - vr(1 - e * 2)) : .5 * vr(e * 2 - 1) + .5;
    function Ap(e, t) {
        return e.map(()=>t || Jc).splice(0, e.length - 1);
    }
    function Mp(e) {
        const t = e.length;
        return e.map((n, r)=>r !== 0 ? r / (t - 1) : 0);
    }
    function Rp(e, t) {
        return e.map((n)=>n * t);
    }
    function ir({ from: e = 0, to: t = 1, ease: n, offset: r, duration: s = 300 }) {
        const o = {
            done: !1,
            value: e
        }, i = Array.isArray(t) ? t : [
            e,
            t
        ], l = Rp(r && r.length === i.length ? r : Mp(i), s);
        function c() {
            return zc(l, i, {
                ease: Array.isArray(n) ? n : Ap(i, n)
            });
        }
        let u = c();
        return {
            next: (a)=>(o.value = u(a), o.done = a >= s, o),
            flipTarget: ()=>{
                i.reverse(), u = c();
            }
        };
    }
    function Pp({ velocity: e = 0, from: t = 0, power: n = .8, timeConstant: r = 350, restDelta: s = .5, modifyTarget: o }) {
        const i = {
            done: !1,
            value: t
        };
        let l = n * e;
        const c = t + l, u = o === void 0 ? c : o(c);
        return u !== c && (l = u - t), {
            next: (a)=>{
                const f = -l * Math.exp(-a / r);
                return i.done = !(f > s || f < -s), i.value = i.done ? u : u + f, i;
            },
            flipTarget: ()=>{}
        };
    }
    const Ci = {
        keyframes: ir,
        spring: po,
        decay: Pp
    };
    function $p(e) {
        if (Array.isArray(e.to)) return ir;
        if (Ci[e.type]) return Ci[e.type];
        const t = new Set(Object.keys(e));
        return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? ir : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? po : ir;
    }
    function ea(e, t, n = 0) {
        return e - t - n;
    }
    function Ip(e, t, n = 0, r = !0) {
        return r ? ea(t + -e, t, n) : t - (e - t) + n;
    }
    function jp(e, t, n, r) {
        return r ? e >= t + n : e <= -n;
    }
    const Lp = (e)=>{
        const t = ({ delta: n })=>e(n);
        return {
            start: ()=>Rs.update(t, !0),
            stop: ()=>Ld.update(t)
        };
    };
    function ta(e) {
        var t, n, { from: r, autoplay: s = !0, driver: o = Lp, elapsed: i = 0, repeat: l = 0, repeatType: c = "loop", repeatDelay: u = 0, onPlay: a, onStop: f, onComplete: d, onRepeat: h, onUpdate: m } = e, y = Ic(e, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate"
        ]);
        let { to: _ } = y, x, C = 0, S = y.duration, v, M = !1, U = !0, G;
        const q = $p(y);
        !((n = (t = q).needsInterpolation) === null || n === void 0) && n.call(t, r, _) && (G = zc([
            0,
            100
        ], [
            r,
            _
        ], {
            clamp: !1
        }), r = 0, _ = 100);
        const P = q(Object.assign(Object.assign({}, y), {
            from: r,
            to: _
        }));
        function W() {
            C++, c === "reverse" ? (U = C % 2 === 0, i = Ip(i, S, u, U)) : (i = ea(i, S, u), c === "mirror" && P.flipTarget()), M = !1, h && h();
        }
        function z() {
            x.stop(), d && d();
        }
        function F(K) {
            if (U || (K = -K), i += K, !M) {
                const j = P.next(Math.max(0, i));
                v = j.value, G && (v = G(v)), M = U ? j.done : i <= 0;
            }
            m?.(v), M && (C === 0 && (S ?? (S = i)), C < l ? jp(i, S, u, U) && W() : z());
        }
        function re() {
            a?.(), x = o(F), x.start();
        }
        return s && re(), {
            stop: ()=>{
                f?.(), x.stop();
            }
        };
    }
    function na(e, t) {
        return t ? e * (1e3 / t) : 0;
    }
    function Np({ from: e = 0, velocity: t = 0, min: n, max: r, power: s = .8, timeConstant: o = 750, bounceStiffness: i = 500, bounceDamping: l = 10, restDelta: c = 1, modifyTarget: u, driver: a, onUpdate: f, onComplete: d, onStop: h }) {
        let m;
        function y(S) {
            return n !== void 0 && S < n || r !== void 0 && S > r;
        }
        function _(S) {
            return n === void 0 ? r : r === void 0 || Math.abs(n - S) < Math.abs(r - S) ? n : r;
        }
        function x(S) {
            m?.stop(), m = ta(Object.assign(Object.assign({}, S), {
                driver: a,
                onUpdate: (v)=>{
                    var M;
                    f?.(v), (M = S.onUpdate) === null || M === void 0 || M.call(S, v);
                },
                onComplete: d,
                onStop: h
            }));
        }
        function C(S) {
            x(Object.assign({
                type: "spring",
                stiffness: i,
                damping: l,
                restDelta: c
            }, S));
        }
        if (y(e)) C({
            from: e,
            velocity: t,
            to: _(e)
        });
        else {
            let S = s * t + e;
            typeof u < "u" && (S = u(S));
            const v = _(S), M = v === n ? -1 : 1;
            let U, G;
            const q = (P)=>{
                U = G, G = P, t = na(P - U, $c().delta), (M === 1 && P > v || M === -1 && P < v) && C({
                    from: P,
                    to: v,
                    velocity: t
                });
            };
            x({
                type: "decay",
                from: e,
                velocity: t,
                timeConstant: o,
                power: s,
                restDelta: c,
                modifyTarget: u,
                onUpdate: y(S) ? q : void 0
            });
        }
        return {
            stop: ()=>m?.stop()
        };
    }
    const ra = (e, t)=>1 - 3 * t + 3 * e, sa = (e, t)=>3 * t - 6 * e, oa = (e)=>3 * e, _r = (e, t, n)=>((ra(t, n) * e + sa(t, n)) * e + oa(t)) * e, ia = (e, t, n)=>3 * ra(t, n) * e * e + 2 * sa(t, n) * e + oa(t), Dp = 1e-7, Fp = 10;
    function kp(e, t, n, r, s) {
        let o, i, l = 0;
        do i = t + (n - t) / 2, o = _r(i, r, s) - e, o > 0 ? n = i : t = i;
        while (Math.abs(o) > Dp && ++l < Fp);
        return i;
    }
    const Hp = 8, Vp = .001;
    function Bp(e, t, n, r) {
        for(let s = 0; s < Hp; ++s){
            const o = ia(t, n, r);
            if (o === 0) return t;
            const i = _r(t, n, r) - e;
            t -= i / o;
        }
        return t;
    }
    const lr = 11, Xn = 1 / (lr - 1);
    function Up(e, t, n, r) {
        if (e === t && n === r) return Zc;
        const s = new Float32Array(lr);
        for(let i = 0; i < lr; ++i)s[i] = _r(i * Xn, e, n);
        function o(i) {
            let l = 0, c = 1;
            const u = lr - 1;
            for(; c !== u && s[c] <= i; ++c)l += Xn;
            --c;
            const a = (i - s[c]) / (s[c + 1] - s[c]), f = l + a * Xn, d = ia(f, e, n);
            return d >= Vp ? Bp(i, f, e, n) : d === 0 ? f : kp(i, l, l + Xn, e, n);
        }
        return (i)=>i === 0 || i === 1 ? i : _r(o(i), t, r);
    }
    const os = {};
    var Wp = Object.defineProperty, Kp = (e, t, n)=>t in e ? Wp(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n, qp = (e, t, n)=>(Kp(e, t + "", n), n);
    class zp {
        constructor(){
            qp(this, "subscriptions", new Set);
        }
        add(t) {
            return this.subscriptions.add(t), ()=>this.subscriptions.delete(t);
        }
        notify(t, n, r) {
            if (this.subscriptions.size) for (const s of this.subscriptions)s(t, n, r);
        }
        clear() {
            this.subscriptions.clear();
        }
    }
    var Gp = Object.defineProperty, Yp = (e, t, n)=>t in e ? Gp(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n, tt = (e, t, n)=>(Yp(e, typeof t != "symbol" ? t + "" : t, n), n);
    function Ti(e) {
        return !Number.isNaN(Number.parseFloat(e));
    }
    class Zp {
        constructor(t){
            tt(this, "current"), tt(this, "prev"), tt(this, "timeDelta", 0), tt(this, "lastUpdated", 0), tt(this, "updateSubscribers", new zp), tt(this, "stopAnimation"), tt(this, "canTrackVelocity", !1), tt(this, "updateAndNotify", (n)=>{
                this.prev = this.current, this.current = n;
                const { delta: r, timestamp: s } = $c();
                this.lastUpdated !== s && (this.timeDelta = r, this.lastUpdated = s), Rs.postRender(this.scheduleVelocityCheck), this.updateSubscribers.notify(this.current);
            }), tt(this, "scheduleVelocityCheck", ()=>Rs.postRender(this.velocityCheck)), tt(this, "velocityCheck", ({ timestamp: n })=>{
                this.canTrackVelocity || (this.canTrackVelocity = Ti(this.current)), n !== this.lastUpdated && (this.prev = this.current);
            }), this.prev = this.current = t, this.canTrackVelocity = Ti(this.current);
        }
        onChange(t) {
            return this.updateSubscribers.add(t);
        }
        clearListeners() {
            this.updateSubscribers.clear();
        }
        set(t) {
            this.updateAndNotify(t);
        }
        get() {
            return this.current;
        }
        getPrevious() {
            return this.prev;
        }
        getVelocity() {
            return this.canTrackVelocity ? na(Number.parseFloat(this.current) - Number.parseFloat(this.prev), this.timeDelta) : 0;
        }
        start(t) {
            return this.stop(), new Promise((n)=>{
                const { stop: r } = t(n);
                this.stopAnimation = r;
            }).then(()=>this.clearAnimation());
        }
        stop() {
            this.stopAnimation && this.stopAnimation(), this.clearAnimation();
        }
        isAnimating() {
            return !!this.stopAnimation;
        }
        clearAnimation() {
            this.stopAnimation = null;
        }
        destroy() {
            this.updateSubscribers.clear(), this.stop();
        }
    }
    function Jp(e) {
        return new Zp(e);
    }
    const { isArray: Qp } = Array;
    function Xp() {
        const e = Te({}), t = (r)=>{
            const s = (o)=>{
                e.value[o] && (e.value[o].stop(), e.value[o].destroy(), delete e.value[o]);
            };
            r ? Qp(r) ? r.forEach(s) : s(r) : Object.keys(e.value).forEach(s);
        }, n = (r, s, o)=>{
            if (e.value[r]) return e.value[r];
            const i = Jp(s);
            return i.onChange((l)=>o[r] = l), e.value[r] = i, i;
        };
        return Ad(t), {
            motionValues: e,
            get: n,
            stop: t
        };
    }
    function eh(e) {
        return Array.isArray(e);
    }
    function jt() {
        return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: .5,
            restSpeed: 10
        };
    }
    function is(e) {
        return {
            type: "spring",
            stiffness: 550,
            damping: e === 0 ? 2 * Math.sqrt(550) : 30,
            restDelta: .01,
            restSpeed: 10
        };
    }
    function th(e) {
        return {
            type: "spring",
            stiffness: 550,
            damping: e === 0 ? 100 : 30,
            restDelta: .01,
            restSpeed: 10
        };
    }
    function ls() {
        return {
            type: "keyframes",
            ease: "linear",
            duration: 300
        };
    }
    function nh(e) {
        return {
            type: "keyframes",
            duration: 800,
            values: e
        };
    }
    const Ai = {
        default: th,
        x: jt,
        y: jt,
        z: jt,
        rotate: jt,
        rotateX: jt,
        rotateY: jt,
        rotateZ: jt,
        scaleX: is,
        scaleY: is,
        scale: is,
        backgroundColor: ls,
        color: ls,
        opacity: ls
    };
    function la(e, t) {
        let n;
        return eh(t) ? n = nh : n = Ai[e] || Ai.default, {
            to: t,
            ...n(t)
        };
    }
    const Mi = {
        ...Wn,
        transform: Math.round
    }, ca = {
        color: ke,
        backgroundColor: ke,
        outlineColor: ke,
        fill: ke,
        stroke: ke,
        borderColor: ke,
        borderTopColor: ke,
        borderRightColor: ke,
        borderBottomColor: ke,
        borderLeftColor: ke,
        borderWidth: ne,
        borderTopWidth: ne,
        borderRightWidth: ne,
        borderBottomWidth: ne,
        borderLeftWidth: ne,
        borderRadius: ne,
        radius: ne,
        borderTopLeftRadius: ne,
        borderTopRightRadius: ne,
        borderBottomRightRadius: ne,
        borderBottomLeftRadius: ne,
        width: ne,
        maxWidth: ne,
        height: ne,
        maxHeight: ne,
        size: ne,
        top: ne,
        right: ne,
        bottom: ne,
        left: ne,
        padding: ne,
        paddingTop: ne,
        paddingRight: ne,
        paddingBottom: ne,
        paddingLeft: ne,
        margin: ne,
        marginTop: ne,
        marginRight: ne,
        marginBottom: ne,
        marginLeft: ne,
        rotate: It,
        rotateX: It,
        rotateY: It,
        rotateZ: It,
        scale: Qn,
        scaleX: Qn,
        scaleY: Qn,
        scaleZ: Qn,
        skew: It,
        skewX: It,
        skewY: It,
        distance: ne,
        translateX: ne,
        translateY: ne,
        translateZ: ne,
        x: ne,
        y: ne,
        z: ne,
        perspective: ne,
        transformPerspective: ne,
        opacity: Sn,
        originX: wi,
        originY: wi,
        originZ: ne,
        zIndex: Mi,
        filter: Ls,
        WebkitFilter: Ls,
        fillOpacity: Sn,
        strokeOpacity: Sn,
        numOctaves: Mi
    }, _o = (e)=>ca[e];
    function Ns(e, t) {
        return t && typeof e == "number" && t.transform ? t.transform(e) : e;
    }
    function rh(e, t) {
        let n = _o(e);
        return n !== Ls && (n = Kn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
    }
    const sh = {
        linear: Zc,
        easeIn: bo,
        easeInOut: Jc,
        easeOut: bp,
        circIn: Qc,
        circInOut: vp,
        circOut: Xc,
        backIn: vo,
        backInOut: Sp,
        backOut: _p,
        anticipate: wp,
        bounceIn: Cp,
        bounceInOut: Tp,
        bounceOut: vr
    };
    function Ri(e) {
        if (Array.isArray(e)) {
            const [t, n, r, s] = e;
            return Up(t, n, r, s);
        } else if (typeof e == "string") return sh[e];
        return e;
    }
    function oh(e) {
        return Array.isArray(e) && typeof e[0] != "number";
    }
    function Pi(e, t) {
        return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Kn.test(t) && !t.startsWith("url("));
    }
    function ih(e) {
        return Array.isArray(e.to) && e.to[0] === null && (e.to = [
            ...e.to
        ], e.to[0] = e.from), e;
    }
    function lh({ ease: e, times: t, delay: n, ...r }) {
        const s = {
            ...r
        };
        return t && (s.offset = t), e && (s.ease = oh(e) ? e.map(Ri) : Ri(e)), n && (s.elapsed = -n), s;
    }
    function ch(e, t, n) {
        return Array.isArray(t.to) && (e.duration || (e.duration = 800)), ih(t), ah(e) || (e = {
            ...e,
            ...la(n, t.to)
        }), {
            ...t,
            ...lh(e)
        };
    }
    function ah({ delay: e, repeat: t, repeatType: n, repeatDelay: r, from: s, ...o }) {
        return !!Object.keys(o).length;
    }
    function uh(e, t) {
        return e[t] || e.default || e;
    }
    function fh(e, t, n, r, s) {
        const o = uh(r, e);
        let i = o.from === null || o.from === void 0 ? t.get() : o.from;
        const l = Pi(e, n);
        i === "none" && l && typeof n == "string" && (i = rh(e, n));
        const c = Pi(e, i);
        function u(f) {
            const d = {
                from: i,
                to: n,
                velocity: r.velocity ? r.velocity : t.getVelocity(),
                onUpdate: (h)=>t.set(h)
            };
            return o.type === "inertia" || o.type === "decay" ? Np({
                ...d,
                ...o
            }) : ta({
                ...ch(o, d, e),
                onUpdate: (h)=>{
                    d.onUpdate(h), o.onUpdate && o.onUpdate(h);
                },
                onComplete: ()=>{
                    s && s(), f && f();
                }
            });
        }
        function a(f) {
            return t.set(n), s && s(), f && f(), {
                stop: ()=>{}
            };
        }
        return !c || !l || o.type === !1 ? a : u;
    }
    function dh() {
        const { motionValues: e, stop: t, get: n } = Xp();
        return {
            motionValues: e,
            stop: t,
            push: (s, o, i, l = {}, c)=>{
                const u = i[s], a = n(s, u, i);
                if (l && l.immediate) {
                    a.set(o);
                    return;
                }
                const f = fh(s, a, o, l, c);
                a.start(f);
            }
        };
    }
    function ph(e, t = {}, { motionValues: n, push: r, stop: s } = dh()) {
        const o = He(t), i = Te(!1);
        xe(n, (f)=>{
            i.value = Object.values(f).filter((d)=>d.isAnimating()).length > 0;
        }, {
            immediate: !0,
            deep: !0
        });
        const l = (f)=>{
            if (!o || !o[f]) throw new Error(`The variant ${f} does not exist.`);
            return o[f];
        }, c = (f)=>{
            typeof f == "string" && (f = l(f));
            const d = Object.entries(f).map(([m, y])=>{
                if (m !== "transition") return new Promise((_)=>r(m, y, e, f.transition || la(m, f[m]), _));
            }).filter(Boolean);
            async function h() {
                await Promise.all(d), f.transition?.onComplete?.();
            }
            return Promise.all([
                h()
            ]);
        };
        return {
            isAnimating: i,
            apply: c,
            set: (f)=>{
                const d = br(f) ? f : l(f);
                Object.entries(d).forEach(([h, m])=>{
                    h !== "transition" && r(h, m, e, {
                        immediate: !0
                    });
                });
            },
            leave: async (f)=>{
                let d;
                if (o && (o.leave && (d = o.leave), !o.leave && o.initial && (d = o.initial)), !d) {
                    f();
                    return;
                }
                await c(d), f();
            },
            stop: s
        };
    }
    const So = typeof window < "u", hh = ()=>So && (window.onpointerdown === null || void 0), gh = ()=>So && (window.ontouchstart === null || void 0), mh = ()=>So && (window.onmousedown === null || void 0);
    function yh({ target: e, state: t, variants: n, apply: r }) {
        const s = He(n), o = Te(!1), i = Te(!1), l = Te(!1), c = _e(()=>{
            let a = [
                ...Object.keys(t.value || {})
            ];
            return s && (s.hovered && (a = [
                ...a,
                ...Object.keys(s.hovered)
            ]), s.tapped && (a = [
                ...a,
                ...Object.keys(s.tapped)
            ]), s.focused && (a = [
                ...a,
                ...Object.keys(s.focused)
            ])), a;
        }), u = _e(()=>{
            const a = {};
            Object.assign(a, t.value), o.value && s.hovered && Object.assign(a, s.hovered), i.value && s.tapped && Object.assign(a, s.tapped), l.value && s.focused && Object.assign(a, s.focused);
            for(const f in a)c.value.includes(f) || delete a[f];
            return a;
        });
        s.hovered && (Be(e, "mouseenter", ()=>o.value = !0), Be(e, "mouseleave", ()=>{
            o.value = !1, i.value = !1;
        })), s.tapped && (mh() && (Be(e, "mousedown", ()=>i.value = !0), Be(e, "mouseup", ()=>i.value = !1)), hh() && (Be(e, "pointerdown", ()=>i.value = !0), Be(e, "pointerup", ()=>i.value = !1)), gh() && (Be(e, "touchstart", ()=>i.value = !0), Be(e, "touchend", ()=>i.value = !1))), s.focused && (Be(e, "focus", ()=>l.value = !0), Be(e, "blur", ()=>l.value = !1)), xe([
            o,
            i,
            l
        ], ()=>{
            r(u.value);
        });
    }
    function bh({ set: e, target: t, variants: n, variant: r }) {
        const s = He(n);
        xe(()=>t, ()=>{
            s && (s.initial && (e("initial"), r.value = "initial"), s.enter && (r.value = "enter"));
        }, {
            immediate: !0,
            flush: "pre"
        });
    }
    function vh({ state: e, apply: t }) {
        xe(e, (n)=>{
            n && t(n);
        }, {
            immediate: !0
        });
    }
    function aa({ target: e, variants: t, variant: n }) {
        const r = He(t);
        r && (r.visible || r.visibleOnce) && Pd(e, ([{ isIntersecting: s }])=>{
            r.visible ? s ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (s && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"));
        });
    }
    function _h(e, t = {
        syncVariants: !0,
        lifeCycleHooks: !0,
        visibilityHooks: !0,
        eventListeners: !0
    }) {
        t.lifeCycleHooks && bh(e), t.syncVariants && vh(e), t.visibilityHooks && aa(e), t.eventListeners && yh(e);
    }
    function ua(e = {}) {
        const t = it({
            ...e
        }), n = Te({});
        return xe(t, ()=>{
            const r = {};
            for (const [s, o] of Object.entries(t)){
                const i = _o(s), l = Ns(o, i);
                r[s] = l;
            }
            n.value = r;
        }, {
            immediate: !0,
            deep: !0
        }), {
            state: t,
            style: n
        };
    }
    function wo(e, t) {
        xe(()=>dt(e), (n)=>{
            n && t(n);
        }, {
            immediate: !0
        });
    }
    const Sh = {
        x: "translateX",
        y: "translateY",
        z: "translateZ"
    };
    function fa(e = {}, t = !0) {
        const n = it({
            ...e
        }), r = Te("");
        return xe(n, (s)=>{
            let o = "", i = !1;
            if (t && (s.x || s.y || s.z)) {
                const l = [
                    s.x || 0,
                    s.y || 0,
                    s.z || 0
                ].map((c)=>Ns(c, ne)).join(",");
                o += `translate3d(${l}) `, i = !0;
            }
            for (const [l, c] of Object.entries(s)){
                if (t && (l === "x" || l === "y" || l === "z")) continue;
                const u = _o(l), a = Ns(c, u);
                o += `${Sh[l] || l}(${a}) `;
            }
            t && !i && (o += "translateZ(0px) "), r.value = o.trim();
        }, {
            immediate: !0,
            deep: !0
        }), {
            state: n,
            transform: r
        };
    }
    const wh = [
        "",
        "X",
        "Y",
        "Z"
    ], xh = [
        "perspective",
        "translate",
        "scale",
        "rotate",
        "skew"
    ], da = [
        "transformPerspective",
        "x",
        "y",
        "z"
    ];
    xh.forEach((e)=>{
        wh.forEach((t)=>{
            const n = e + t;
            da.push(n);
        });
    });
    const Oh = new Set(da);
    function xo(e) {
        return Oh.has(e);
    }
    const Eh = new Set([
        "originX",
        "originY",
        "originZ"
    ]);
    function pa(e) {
        return Eh.has(e);
    }
    function Ch(e) {
        const t = {}, n = {};
        return Object.entries(e).forEach(([r, s])=>{
            xo(r) || pa(r) ? t[r] = s : n[r] = s;
        }), {
            transform: t,
            style: n
        };
    }
    function Fr(e) {
        const { transform: t, style: n } = Ch(e), { transform: r } = fa(t), { style: s } = ua(n);
        return r.value && (s.value.transform = r.value), s.value;
    }
    function Th(e, t) {
        let n, r;
        const { state: s, style: o } = ua();
        return wo(e, (i)=>{
            r = i;
            for (const l of Object.keys(ca))i.style[l] === null || i.style[l] === "" || xo(l) || pa(l) || (s[l] = i.style[l]);
            n && Object.entries(n).forEach(([l, c])=>i.style[l] = c), t && t(s);
        }), xe(o, (i)=>{
            if (!r) {
                n = i;
                return;
            }
            for(const l in i)r.style[l] = i[l];
        }, {
            immediate: !0
        }), {
            style: s
        };
    }
    function Ah(e) {
        const t = e.trim().split(/\) |\)/);
        if (t.length === 1) return {};
        const n = (r)=>r.endsWith("px") || r.endsWith("deg") ? Number.parseFloat(r) : Number.isNaN(Number(r)) ? Number(r) : r;
        return t.reduce((r, s)=>{
            if (!s) return r;
            const [o, i] = s.split("("), c = i.split(",").map((a)=>n(a.endsWith(")") ? a.replace(")", "") : a.trim())), u = c.length === 1 ? c[0] : c;
            return {
                ...r,
                [o]: u
            };
        }, {});
    }
    function Mh(e, t) {
        Object.entries(Ah(t)).forEach(([n, r])=>{
            const s = [
                "x",
                "y",
                "z"
            ];
            if (n === "translate3d") {
                if (r === 0) {
                    s.forEach((o)=>e[o] = 0);
                    return;
                }
                r.forEach((o, i)=>e[s[i]] = o);
                return;
            }
            if (r = Number.parseFloat(`${r}`), n === "translateX") {
                e.x = r;
                return;
            }
            if (n === "translateY") {
                e.y = r;
                return;
            }
            if (n === "translateZ") {
                e.z = r;
                return;
            }
            e[n] = r;
        });
    }
    function Rh(e, t) {
        let n, r;
        const { state: s, transform: o } = fa();
        return wo(e, (i)=>{
            r = i, i.style.transform && Mh(s, i.style.transform), n && (i.style.transform = n), t && t(s);
        }), xe(o, (i)=>{
            if (!r) {
                n = i;
                return;
            }
            r.style.transform = i;
        }, {
            immediate: !0
        }), {
            transform: s
        };
    }
    function Ph(e) {
        return Object.entries(e);
    }
    function $h(e, t) {
        const n = it({}), r = (i)=>Object.entries(i).forEach(([l, c])=>n[l] = c), { style: s } = Th(e, r), { transform: o } = Rh(e, r);
        return xe(n, (i)=>{
            Ph(i).forEach(([l, c])=>{
                const u = xo(l) ? o : s;
                u[l] && u[l] === c || (u[l] = c);
            });
        }, {
            immediate: !0,
            deep: !0
        }), wo(e, ()=>t), {
            motionProperties: n,
            style: s,
            transform: o
        };
    }
    function Ih(e = {}) {
        const t = He(e), n = Te();
        return {
            state: _e(()=>{
                if (n.value) return t[n.value];
            }),
            variant: n
        };
    }
    function ha(e, t = {}, n) {
        const { motionProperties: r } = $h(e), { variant: s, state: o } = Ih(t), i = ph(r, t), l = {
            target: e,
            variant: s,
            variants: t,
            state: o,
            motionProperties: r,
            ...i
        };
        return _h(l, n), l;
    }
    const ga = [
        "delay",
        "duration"
    ], jh = [
        "initial",
        "enter",
        "leave",
        "visible",
        "visible-once",
        "visibleOnce",
        "hovered",
        "tapped",
        "focused",
        ...ga
    ];
    function Lh(e) {
        return ga.includes(e);
    }
    function Nh(e, t) {
        const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
        if (n) {
            n.variants && br(n.variants) && (t.value = {
                ...t.value,
                ...n.variants
            });
            for (let r of jh)if (!(!n || !n[r])) {
                if (Lh(r) && typeof n[r] == "number") {
                    for (const s of [
                        "enter",
                        "visible",
                        "visibleOnce"
                    ]){
                        const o = t.value[s];
                        o != null && (o.transition ?? (o.transition = {}), o.transition[r] = n[r]);
                    }
                    continue;
                }
                if (br(n[r])) {
                    const s = n[r];
                    r === "visible-once" && (r = "visibleOnce"), t.value[r] = s;
                }
            }
        }
    }
    function cs(e, t = !1) {
        return {
            created: (s, o, i)=>{
                const l = o.value && typeof o.value == "string" ? o.value : i.key;
                l && os[l] && os[l].stop();
                const c = t ? structuredClone(oe(e) || {}) : e || {}, u = Te(c);
                typeof o.value == "object" && (u.value = o.value), Nh(i, u);
                const f = ha(s, u, {
                    eventListeners: !0,
                    lifeCycleHooks: !0,
                    syncVariants: !0,
                    visibilityHooks: !1
                });
                s.motionInstance = f, l && (os[l] = f);
            },
            mounted: (s, o, i)=>{
                s.motionInstance && aa(s.motionInstance);
            },
            getSSRProps (s, o) {
                let { initial: i } = s.value || o && o?.props || {};
                i = He(i);
                const l = Cc({}, e?.initial || {}, i || {});
                return !l || Object.keys(l).length === 0 ? void 0 : {
                    style: Fr(l)
                };
            }
        };
    }
    const Dh = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1
        }
    }, Fh = {
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }, kh = {
        initial: {
            opacity: 0
        },
        visibleOnce: {
            opacity: 1
        }
    }, Hh = {
        initial: {
            scale: 0,
            opacity: 0
        },
        enter: {
            scale: 1,
            opacity: 1
        }
    }, Vh = {
        initial: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1
        }
    }, Bh = {
        initial: {
            scale: 0,
            opacity: 0
        },
        visibleOnce: {
            scale: 1,
            opacity: 1
        }
    }, Uh = {
        initial: {
            x: -100,
            rotate: 90,
            opacity: 0
        },
        enter: {
            x: 0,
            rotate: 0,
            opacity: 1
        }
    }, Wh = {
        initial: {
            x: -100,
            rotate: 90,
            opacity: 0
        },
        visible: {
            x: 0,
            rotate: 0,
            opacity: 1
        }
    }, Kh = {
        initial: {
            x: -100,
            rotate: 90,
            opacity: 0
        },
        visibleOnce: {
            x: 0,
            rotate: 0,
            opacity: 1
        }
    }, qh = {
        initial: {
            x: 100,
            rotate: -90,
            opacity: 0
        },
        enter: {
            x: 0,
            rotate: 0,
            opacity: 1
        }
    }, zh = {
        initial: {
            x: 100,
            rotate: -90,
            opacity: 0
        },
        visible: {
            x: 0,
            rotate: 0,
            opacity: 1
        }
    }, Gh = {
        initial: {
            x: 100,
            rotate: -90,
            opacity: 0
        },
        visibleOnce: {
            x: 0,
            rotate: 0,
            opacity: 1
        }
    }, Yh = {
        initial: {
            y: -100,
            rotate: -90,
            opacity: 0
        },
        enter: {
            y: 0,
            rotate: 0,
            opacity: 1
        }
    }, Zh = {
        initial: {
            y: -100,
            rotate: -90,
            opacity: 0
        },
        visible: {
            y: 0,
            rotate: 0,
            opacity: 1
        }
    }, Jh = {
        initial: {
            y: -100,
            rotate: -90,
            opacity: 0
        },
        visibleOnce: {
            y: 0,
            rotate: 0,
            opacity: 1
        }
    }, Qh = {
        initial: {
            y: 100,
            rotate: 90,
            opacity: 0
        },
        enter: {
            y: 0,
            rotate: 0,
            opacity: 1
        }
    }, Xh = {
        initial: {
            y: 100,
            rotate: 90,
            opacity: 0
        },
        visible: {
            y: 0,
            rotate: 0,
            opacity: 1
        }
    }, eg = {
        initial: {
            y: 100,
            rotate: 90,
            opacity: 0
        },
        visibleOnce: {
            y: 0,
            rotate: 0,
            opacity: 1
        }
    }, tg = {
        initial: {
            x: -100,
            opacity: 0
        },
        enter: {
            x: 0,
            opacity: 1
        }
    }, ng = {
        initial: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }, rg = {
        initial: {
            x: -100,
            opacity: 0
        },
        visibleOnce: {
            x: 0,
            opacity: 1
        }
    }, sg = {
        initial: {
            x: 100,
            opacity: 0
        },
        enter: {
            x: 0,
            opacity: 1
        }
    }, og = {
        initial: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }, ig = {
        initial: {
            x: 100,
            opacity: 0
        },
        visibleOnce: {
            x: 0,
            opacity: 1
        }
    }, lg = {
        initial: {
            y: -100,
            opacity: 0
        },
        enter: {
            y: 0,
            opacity: 1
        }
    }, cg = {
        initial: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }, ag = {
        initial: {
            y: -100,
            opacity: 0
        },
        visibleOnce: {
            y: 0,
            opacity: 1
        }
    }, ug = {
        initial: {
            y: 100,
            opacity: 0
        },
        enter: {
            y: 0,
            opacity: 1
        }
    }, fg = {
        initial: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }, dg = {
        initial: {
            y: 100,
            opacity: 0
        },
        visibleOnce: {
            y: 0,
            opacity: 1
        }
    }, xn = {
        __proto__: null,
        fade: Dh,
        fadeVisible: Fh,
        fadeVisibleOnce: kh,
        pop: Hh,
        popVisible: Vh,
        popVisibleOnce: Bh,
        rollBottom: Qh,
        rollLeft: Uh,
        rollRight: qh,
        rollTop: Yh,
        rollVisibleBottom: Xh,
        rollVisibleLeft: Wh,
        rollVisibleOnceBottom: eg,
        rollVisibleOnceLeft: Kh,
        rollVisibleOnceRight: Gh,
        rollVisibleOnceTop: Jh,
        rollVisibleRight: zh,
        rollVisibleTop: Zh,
        slideBottom: ug,
        slideLeft: tg,
        slideRight: sg,
        slideTop: lg,
        slideVisibleBottom: fg,
        slideVisibleLeft: ng,
        slideVisibleOnceBottom: dg,
        slideVisibleOnceLeft: rg,
        slideVisibleOnceRight: ig,
        slideVisibleOnceTop: ag,
        slideVisibleRight: og,
        slideVisibleTop: cg
    };
    function pg(e) {
        const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;", n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------", r = new RegExp(t.split("").join("|"), "g");
        return e.toString().replace(/[A-Z]/g, (s)=>`-${s}`).toLowerCase().replace(/\s+/g, "-").replace(r, (s)=>n.charAt(t.indexOf(s))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/-{2,}/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    }
    const ma = Symbol(import.meta.dev ? "motionCustomPresets" : ""), ya = {
        preset: {
            type: String,
            required: !1
        },
        instance: {
            type: Object,
            required: !1
        },
        variants: {
            type: Object,
            required: !1
        },
        initial: {
            type: Object,
            required: !1
        },
        enter: {
            type: Object,
            required: !1
        },
        leave: {
            type: Object,
            required: !1
        },
        visible: {
            type: Object,
            required: !1
        },
        visibleOnce: {
            type: Object,
            required: !1
        },
        hovered: {
            type: Object,
            required: !1
        },
        tapped: {
            type: Object,
            required: !1
        },
        focused: {
            type: Object,
            required: !1
        },
        delay: {
            type: [
                Number,
                String
            ],
            required: !1
        },
        duration: {
            type: [
                Number,
                String
            ],
            required: !1
        }
    };
    function hg(e) {
        return Object.prototype.toString.call(e) === "[object Object]";
    }
    function Ds(e) {
        if (Array.isArray(e)) return e.map(Ds);
        if (hg(e)) {
            const t = {};
            for(const n in e)t[n] = Ds(e[n]);
            return t;
        }
        return e;
    }
    function ba(e) {
        const t = it({}), n = We(ma, {}), r = _e(()=>e.preset == null ? {} : n != null && e.preset in n ? structuredClone(oe(n)[e.preset]) : e.preset in xn ? structuredClone(xn[e.preset]) : {}), s = _e(()=>({
                initial: e.initial,
                enter: e.enter,
                leave: e.leave,
                visible: e.visible,
                visibleOnce: e.visibleOnce,
                hovered: e.hovered,
                tapped: e.tapped,
                focused: e.focused
            }));
        function o(c, u) {
            for (const a of [
                "delay",
                "duration"
            ]){
                if (u[a] == null) continue;
                const f = Number.parseInt(u[a]);
                for (const d of [
                    "enter",
                    "visible",
                    "visibleOnce"
                ]){
                    const h = c[d];
                    h != null && (h.transition ?? (h.transition = {}), h.transition[a] = f);
                }
            }
            return c;
        }
        const i = _e(()=>{
            const c = Cc({}, s.value, r.value, e.variants || {});
            return o({
                ...c
            }, e);
        });
        if (import.meta.dev) {
            e.preset != null && xn?.[e.preset] == null && n?.[e.preset] == null;
            const c = (u)=>{
                u.variants?.initial && u.set("initial"), en(()=>{
                    u.variants?.enter && u.apply("enter"), u.variants?.visible && u.apply("visible"), u.variants?.visibleOnce && u.apply("visibleOnce");
                });
            };
            ro(()=>{
                for(const u in t)c(t[u]);
            });
        }
        function l(c, u, a) {
            var f;
            c.props ?? (c.props = {}), (f = c.props).style ?? (f.style = {}), c.props.style = {
                ...c.props.style,
                ...a
            };
            const d = o(Ds(i.value), c.props);
            return c.props.onVnodeMounted = ({ el: h })=>{
                t[u] = ha(h, d);
            }, c.props.onVnodeUpdated = ({ el: h })=>{
                const m = Fr(t[u].state);
                for (const [y, _] of Object.entries(m))h.style[y] = _;
            }, c;
        }
        return {
            motionConfig: i,
            setNodeInstance: l
        };
    }
    let gg, mg, yg, $i;
    gg = sn({
        name: "Motion",
        props: {
            ...ya,
            is: {
                type: [
                    String,
                    Object
                ],
                default: "div"
            }
        },
        setup (e) {
            const t = ql(), { motionConfig: n, setNodeInstance: r } = ba(e);
            return ()=>{
                const s = Fr(n.value.initial || {}), o = Vn(e.is, void 0, t);
                return r(o, 0, s), o;
            };
        }
    });
    mg = sn({
        name: "MotionGroup",
        props: {
            ...ya,
            is: {
                type: [
                    String,
                    Object
                ],
                required: !1
            }
        },
        setup (e) {
            const t = ql(), { motionConfig: n, setNodeInstance: r } = ba(e);
            return ()=>{
                const s = Fr(n.value.initial || {}), o = t.default?.() || [];
                for(let i = 0; i < o.length; i++){
                    const l = o[i];
                    l.type === Le && Array.isArray(l.children) ? l.children.forEach(function c(u, a) {
                        if (u != null) {
                            if (Array.isArray(u)) {
                                c(u, a);
                                return;
                            }
                            typeof u == "object" && r(u, a, s);
                        }
                    }) : r(l, i, s);
                }
                return e.is ? Vn(e.is, void 0, o) : o;
            };
        }
    });
    yg = {
        install (e, t) {
            if (e.directive("motion", cs()), !t || t && !t.excludePresets) for(const n in xn){
                const r = xn[n];
                e.directive(`motion-${pg(n)}`, cs(r, !0));
            }
            if (t && t.directives) for(const n in t.directives){
                const r = t.directives[n];
                !r.initial && import.meta.dev, e.directive(`motion-${n}`, cs(r, !0));
            }
            e.provide(ma, t?.directives), e.component("Motion", gg), e.component("MotionGroup", mg);
        }
    };
    bg = sn({
        __name: "scale-screen",
        props: {
            width: {
                type: [
                    String,
                    Number
                ],
                default: 1920
            },
            height: {
                type: [
                    String,
                    Number
                ],
                default: 1080
            },
            fullScreen: {
                type: Boolean,
                default: !1
            },
            autoScale: {
                type: [
                    Object,
                    Boolean
                ],
                default: !0
            },
            delay: {
                type: Number,
                default: 500
            },
            boxStyle: {
                type: Object,
                default: ()=>({})
            },
            wrapperStyle: {
                type: Object,
                default: ()=>({})
            }
        },
        setup (e) {
            function t(y, _) {
                let x;
                return function(...C) {
                    x && clearTimeout(x), x = setTimeout(()=>{
                        typeof y == "function" && y.apply(null, C), clearTimeout(x);
                    }, _ > 0 ? _ : 100);
                };
            }
            const n = e, r = it({
                width: 0,
                height: 0,
                originalWidth: 0,
                originalHeight: 0,
                observer: null
            }), s = {
                box: {
                    overflow: "hidden",
                    backgroundSize: "100% 100%",
                    background: "#000",
                    width: "100vw",
                    height: "100vh"
                },
                wrapper: {
                    transitionProperty: "all",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "500ms",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 100,
                    transformOrigin: "left top"
                }
            }, o = Te(), i = Te();
            xe(()=>n.autoScale, async (y)=>{
                y ? (d(), m()) : (h(), u());
            });
            const l = ()=>new Promise((y)=>{
                    i.value.scrollLeft = 0, i.value.scrollTop = 0, en(()=>{
                        n.width && n.height ? (r.width = n.width, r.height = n.height) : (r.width = o.value?.clientWidth, r.height = o.value?.clientHeight), (!r.originalHeight || !r.originalWidth) && (r.originalWidth = window.screen.width, r.originalHeight = window.screen.height), y();
                    });
                }), c = ()=>{
                r.width && r.height ? (o.value.style.width = `${r.width}px`, o.value.style.height = `${r.height}px`) : (o.value.style.width = `${r.originalWidth}px`, o.value.style.height = `${r.originalHeight}px`);
            }, u = ()=>{
                o.value.style.transform = "", o.value.style.margin = "";
            }, a = (y)=>{
                if (!n.autoScale) return;
                const _ = o.value.clientWidth, x = o.value.clientHeight, C = document.body.clientWidth, S = document.body.clientHeight;
                o.value.style.transform = `scale(${y},${y})`;
                let v = Math.max((C - _ * y) / 2, 0), M = Math.max((S - x * y) / 2, 0);
                typeof n.autoScale == "object" && (!n.autoScale.x && (v = 0), !n.autoScale.y && (M = 0)), o.value.style.margin = `${M}px ${v}px`;
            }, f = ()=>{
                const y = document.body.clientWidth, _ = document.body.clientHeight, x = r.width || r.originalWidth, C = r.height || r.originalHeight, S = y / +x, v = _ / +C;
                if (n.fullScreen) return o.value.style.transform = `scale(${S},${v})`, !1;
                const M = Math.min(S, v);
                a(M);
            }, d = t(async ()=>{
                await l(), c(), f();
            }, n.delay), h = ()=>{
                window.removeEventListener("resize", d);
            }, m = ()=>{
                window.addEventListener("resize", d);
            };
            return Rr(()=>{
                en(async ()=>{
                    await l(), c(), f(), m();
                });
            }), Pr(()=>{
                h();
            }), (y, _)=>(Pn(), xf("section", {
                    style: Cn({
                        ...s.box,
                        ...e.boxStyle
                    }),
                    class: "v-screen-box",
                    ref_key: "box",
                    ref: i
                }, [
                    co("div", {
                        style: Cn({
                            ...s.wrapper,
                            ...e.wrapperStyle
                        }),
                        class: "screen-wrapper",
                        ref_key: "screenWrapper",
                        ref: o
                    }, [
                        Wu(y.$slots, "default")
                    ], 4)
                ], 4));
        }
    });
    $i = {
        "scale-screen": bg
    };
    function vg(e) {
        for(const t in $i)e.component(t, $i[t]);
    }
    const Gt = typeof document < "u";
    function va(e) {
        return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
    }
    function _g(e) {
        return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && va(e.default);
    }
    const ae = Object.assign;
    function as(e, t) {
        const n = {};
        for(const r in t){
            const s = t[r];
            n[r] = Ze(s) ? s.map(e) : e(s);
        }
        return n;
    }
    const On = ()=>{}, Ze = Array.isArray, _a = /#/g, Sg = /&/g, wg = /\//g, xg = /=/g, Og = /\?/g, Sa = /\+/g, Eg = /%5B/g, Cg = /%5D/g, wa = /%5E/g, Tg = /%60/g, xa = /%7B/g, Ag = /%7C/g, Oa = /%7D/g, Mg = /%20/g;
    function Oo(e) {
        return encodeURI("" + e).replace(Ag, "|").replace(Eg, "[").replace(Cg, "]");
    }
    function Rg(e) {
        return Oo(e).replace(xa, "{").replace(Oa, "}").replace(wa, "^");
    }
    function Fs(e) {
        return Oo(e).replace(Sa, "%2B").replace(Mg, "+").replace(_a, "%23").replace(Sg, "%26").replace(Tg, "`").replace(xa, "{").replace(Oa, "}").replace(wa, "^");
    }
    function Pg(e) {
        return Fs(e).replace(xg, "%3D");
    }
    function $g(e) {
        return Oo(e).replace(_a, "%23").replace(Og, "%3F");
    }
    function Ig(e) {
        return e == null ? "" : $g(e).replace(wg, "%2F");
    }
    function Dn(e) {
        try {
            return decodeURIComponent("" + e);
        } catch  {}
        return "" + e;
    }
    const jg = /\/$/, Lg = (e)=>e.replace(jg, "");
    function us(e, t, n = "/") {
        let r, s = {}, o = "", i = "";
        const l = t.indexOf("#");
        let c = t.indexOf("?");
        return l < c && l >= 0 && (c = -1), c > -1 && (r = t.slice(0, c), o = t.slice(c + 1, l > -1 ? l : t.length), s = e(o)), l > -1 && (r = r || t.slice(0, l), i = t.slice(l, t.length)), r = kg(r ?? t, n), {
            fullPath: r + (o && "?") + o + i,
            path: r,
            query: s,
            hash: Dn(i)
        };
    }
    function Ng(e, t) {
        const n = t.query ? e(t.query) : "";
        return t.path + (n && "?") + n + (t.hash || "");
    }
    function Ii(e, t) {
        return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
    }
    function Dg(e, t, n) {
        const r = t.matched.length - 1, s = n.matched.length - 1;
        return r > -1 && r === s && nn(t.matched[r], n.matched[s]) && Ea(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
    }
    function nn(e, t) {
        return (e.aliasOf || e) === (t.aliasOf || t);
    }
    function Ea(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for(const n in e)if (!Fg(e[n], t[n])) return !1;
        return !0;
    }
    function Fg(e, t) {
        return Ze(e) ? ji(e, t) : Ze(t) ? ji(t, e) : e === t;
    }
    function ji(e, t) {
        return Ze(t) ? e.length === t.length && e.every((n, r)=>n === t[r]) : e.length === 1 && e[0] === t;
    }
    function kg(e, t) {
        if (e.startsWith("/")) return e;
        if (!e) return t;
        const n = t.split("/"), r = e.split("/"), s = r[r.length - 1];
        (s === ".." || s === ".") && r.push("");
        let o = n.length - 1, i, l;
        for(i = 0; i < r.length; i++)if (l = r[i], l !== ".") if (l === "..") o > 1 && o--;
        else break;
        return n.slice(0, o).join("/") + "/" + r.slice(i).join("/");
    }
    const vt = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    };
    var Fn;
    (function(e) {
        e.pop = "pop", e.push = "push";
    })(Fn || (Fn = {}));
    var En;
    (function(e) {
        e.back = "back", e.forward = "forward", e.unknown = "";
    })(En || (En = {}));
    function Hg(e) {
        if (!e) if (Gt) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
        } else e = "/";
        return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Lg(e);
    }
    const Vg = /^[^#]+#/;
    function Bg(e, t) {
        return e.replace(Vg, "#") + t;
    }
    function Ug(e, t) {
        const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
        return {
            behavior: t.behavior,
            left: r.left - n.left - (t.left || 0),
            top: r.top - n.top - (t.top || 0)
        };
    }
    const kr = ()=>({
            left: window.scrollX,
            top: window.scrollY
        });
    function Wg(e) {
        let t;
        if ("el" in e) {
            const n = e.el, r = typeof n == "string" && n.startsWith("#"), s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
            if (!s) return;
            t = Ug(s, e);
        } else t = e;
        "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
    }
    function Li(e, t) {
        return (history.state ? history.state.position - t : -1) + e;
    }
    const ks = new Map;
    function Kg(e, t) {
        ks.set(e, t);
    }
    function qg(e) {
        const t = ks.get(e);
        return ks.delete(e), t;
    }
    let zg = ()=>location.protocol + "//" + location.host;
    function Ca(e, t) {
        const { pathname: n, search: r, hash: s } = t, o = e.indexOf("#");
        if (o > -1) {
            let l = s.includes(e.slice(o)) ? e.slice(o).length : 1, c = s.slice(l);
            return c[0] !== "/" && (c = "/" + c), Ii(c, "");
        }
        return Ii(n, e) + r + s;
    }
    function Gg(e, t, n, r) {
        let s = [], o = [], i = null;
        const l = ({ state: d })=>{
            const h = Ca(e, location), m = n.value, y = t.value;
            let _ = 0;
            if (d) {
                if (n.value = h, t.value = d, i && i === m) {
                    i = null;
                    return;
                }
                _ = y ? d.position - y.position : 0;
            } else r(h);
            s.forEach((x)=>{
                x(n.value, m, {
                    delta: _,
                    type: Fn.pop,
                    direction: _ ? _ > 0 ? En.forward : En.back : En.unknown
                });
            });
        };
        function c() {
            i = n.value;
        }
        function u(d) {
            s.push(d);
            const h = ()=>{
                const m = s.indexOf(d);
                m > -1 && s.splice(m, 1);
            };
            return o.push(h), h;
        }
        function a() {
            const { history: d } = window;
            d.state && d.replaceState(ae({}, d.state, {
                scroll: kr()
            }), "");
        }
        function f() {
            for (const d of o)d();
            o = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", a);
        }
        return window.addEventListener("popstate", l), window.addEventListener("beforeunload", a, {
            passive: !0
        }), {
            pauseListeners: c,
            listen: u,
            destroy: f
        };
    }
    function Ni(e, t, n, r = !1, s = !1) {
        return {
            back: e,
            current: t,
            forward: n,
            replaced: r,
            position: window.history.length,
            scroll: s ? kr() : null
        };
    }
    function Yg(e) {
        const { history: t, location: n } = window, r = {
            value: Ca(e, n)
        }, s = {
            value: t.state
        };
        s.value || o(r.value, {
            back: null,
            current: r.value,
            forward: null,
            position: t.length - 1,
            replaced: !0,
            scroll: null
        }, !0);
        function o(c, u, a) {
            const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : zg() + e + c;
            try {
                t[a ? "replaceState" : "pushState"](u, "", d), s.value = u;
            } catch  {
                n[a ? "replace" : "assign"](d);
            }
        }
        function i(c, u) {
            const a = ae({}, t.state, Ni(s.value.back, c, s.value.forward, !0), u, {
                position: s.value.position
            });
            o(c, a, !0), r.value = c;
        }
        function l(c, u) {
            const a = ae({}, s.value, t.state, {
                forward: c,
                scroll: kr()
            });
            o(a.current, a, !0);
            const f = ae({}, Ni(r.value, c, null), {
                position: a.position + 1
            }, u);
            o(c, f, !1), r.value = c;
        }
        return {
            location: r,
            state: s,
            push: l,
            replace: i
        };
    }
    function Zg(e) {
        e = Hg(e);
        const t = Yg(e), n = Gg(e, t.state, t.location, t.replace);
        function r(o, i = !0) {
            i || n.pauseListeners(), history.go(o);
        }
        const s = ae({
            location: "",
            base: e,
            go: r,
            createHref: Bg.bind(null, e)
        }, t, n);
        return Object.defineProperty(s, "location", {
            enumerable: !0,
            get: ()=>t.location.value
        }), Object.defineProperty(s, "state", {
            enumerable: !0,
            get: ()=>t.state.value
        }), s;
    }
    function Jg(e) {
        return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Zg(e);
    }
    function Qg(e) {
        return typeof e == "string" || e && typeof e == "object";
    }
    function Ta(e) {
        return typeof e == "string" || typeof e == "symbol";
    }
    const Aa = Symbol("");
    var Di;
    (function(e) {
        e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
    })(Di || (Di = {}));
    function rn(e, t) {
        return ae(new Error, {
            type: e,
            [Aa]: !0
        }, t);
    }
    function ct(e, t) {
        return e instanceof Error && Aa in e && (t == null || !!(e.type & t));
    }
    const Fi = "[^/]+?", Xg = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    }, em = /[.+*?^${}()[\]/\\]/g;
    function tm(e, t) {
        const n = ae({}, Xg, t), r = [];
        let s = n.start ? "^" : "";
        const o = [];
        for (const u of e){
            const a = u.length ? [] : [
                90
            ];
            n.strict && !u.length && (s += "/");
            for(let f = 0; f < u.length; f++){
                const d = u[f];
                let h = 40 + (n.sensitive ? .25 : 0);
                if (d.type === 0) f || (s += "/"), s += d.value.replace(em, "\\$&"), h += 40;
                else if (d.type === 1) {
                    const { value: m, repeatable: y, optional: _, regexp: x } = d;
                    o.push({
                        name: m,
                        repeatable: y,
                        optional: _
                    });
                    const C = x || Fi;
                    if (C !== Fi) {
                        h += 10;
                        try {
                            new RegExp(`(${C})`);
                        } catch (v) {
                            throw new Error(`Invalid custom RegExp for param "${m}" (${C}): ` + v.message);
                        }
                    }
                    let S = y ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
                    f || (S = _ && u.length < 2 ? `(?:/${S})` : "/" + S), _ && (S += "?"), s += S, h += 20, _ && (h += -8), y && (h += -20), C === ".*" && (h += -50);
                }
                a.push(h);
            }
            r.push(a);
        }
        if (n.strict && n.end) {
            const u = r.length - 1;
            r[u][r[u].length - 1] += .7000000000000001;
        }
        n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
        const i = new RegExp(s, n.sensitive ? "" : "i");
        function l(u) {
            const a = u.match(i), f = {};
            if (!a) return null;
            for(let d = 1; d < a.length; d++){
                const h = a[d] || "", m = o[d - 1];
                f[m.name] = h && m.repeatable ? h.split("/") : h;
            }
            return f;
        }
        function c(u) {
            let a = "", f = !1;
            for (const d of e){
                (!f || !a.endsWith("/")) && (a += "/"), f = !1;
                for (const h of d)if (h.type === 0) a += h.value;
                else if (h.type === 1) {
                    const { value: m, repeatable: y, optional: _ } = h, x = m in u ? u[m] : "";
                    if (Ze(x) && !y) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
                    const C = Ze(x) ? x.join("/") : x;
                    if (!C) if (_) d.length < 2 && (a.endsWith("/") ? a = a.slice(0, -1) : f = !0);
                    else throw new Error(`Missing required param "${m}"`);
                    a += C;
                }
            }
            return a || "/";
        }
        return {
            re: i,
            score: r,
            keys: o,
            parse: l,
            stringify: c
        };
    }
    function nm(e, t) {
        let n = 0;
        for(; n < e.length && n < t.length;){
            const r = t[n] - e[n];
            if (r) return r;
            n++;
        }
        return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
    }
    function Ma(e, t) {
        let n = 0;
        const r = e.score, s = t.score;
        for(; n < r.length && n < s.length;){
            const o = nm(r[n], s[n]);
            if (o) return o;
            n++;
        }
        if (Math.abs(s.length - r.length) === 1) {
            if (ki(r)) return 1;
            if (ki(s)) return -1;
        }
        return s.length - r.length;
    }
    function ki(e) {
        const t = e[e.length - 1];
        return e.length > 0 && t[t.length - 1] < 0;
    }
    const rm = {
        type: 0,
        value: ""
    }, sm = /[a-zA-Z0-9_]/;
    function om(e) {
        if (!e) return [
            []
        ];
        if (e === "/") return [
            [
                rm
            ]
        ];
        if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
        function t(h) {
            throw new Error(`ERR (${n})/"${u}": ${h}`);
        }
        let n = 0, r = n;
        const s = [];
        let o;
        function i() {
            o && s.push(o), o = [];
        }
        let l = 0, c, u = "", a = "";
        function f() {
            u && (n === 0 ? o.push({
                type: 0,
                value: u
            }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({
                type: 1,
                value: u,
                regexp: a,
                repeatable: c === "*" || c === "+",
                optional: c === "*" || c === "?"
            })) : t("Invalid state to consume buffer"), u = "");
        }
        function d() {
            u += c;
        }
        for(; l < e.length;){
            if (c = e[l++], c === "\\" && n !== 2) {
                r = n, n = 4;
                continue;
            }
            switch(n){
                case 0:
                    c === "/" ? (u && f(), i()) : c === ":" ? (f(), n = 1) : d();
                    break;
                case 4:
                    d(), n = r;
                    break;
                case 1:
                    c === "(" ? n = 2 : sm.test(c) ? d() : (f(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
                    break;
                case 2:
                    c === ")" ? a[a.length - 1] == "\\" ? a = a.slice(0, -1) + c : n = 3 : a += c;
                    break;
                case 3:
                    f(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, a = "";
                    break;
                default:
                    t("Unknown state");
                    break;
            }
        }
        return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), s;
    }
    function im(e, t, n) {
        const r = tm(om(e.path), n), s = ae(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
        return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
    }
    function lm(e, t) {
        const n = [], r = new Map;
        t = Ui({
            strict: !1,
            end: !0,
            sensitive: !1
        }, t);
        function s(f) {
            return r.get(f);
        }
        function o(f, d, h) {
            const m = !h, y = Vi(f);
            y.aliasOf = h && h.record;
            const _ = Ui(t, f), x = [
                y
            ];
            if ("alias" in f) {
                const v = typeof f.alias == "string" ? [
                    f.alias
                ] : f.alias;
                for (const M of v)x.push(Vi(ae({}, y, {
                    components: h ? h.record.components : y.components,
                    path: M,
                    aliasOf: h ? h.record : y
                })));
            }
            let C, S;
            for (const v of x){
                const { path: M } = v;
                if (d && M[0] !== "/") {
                    const U = d.record.path, G = U[U.length - 1] === "/" ? "" : "/";
                    v.path = d.record.path + (M && G + M);
                }
                if (C = im(v, d, _), h ? h.alias.push(C) : (S = S || C, S !== C && S.alias.push(C), m && f.name && !Bi(C) && i(f.name)), Ra(C) && c(C), y.children) {
                    const U = y.children;
                    for(let G = 0; G < U.length; G++)o(U[G], C, h && h.children[G]);
                }
                h = h || C;
            }
            return S ? ()=>{
                i(S);
            } : On;
        }
        function i(f) {
            if (Ta(f)) {
                const d = r.get(f);
                d && (r.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
            } else {
                const d = n.indexOf(f);
                d > -1 && (n.splice(d, 1), f.record.name && r.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i));
            }
        }
        function l() {
            return n;
        }
        function c(f) {
            const d = um(f, n);
            n.splice(d, 0, f), f.record.name && !Bi(f) && r.set(f.record.name, f);
        }
        function u(f, d) {
            let h, m = {}, y, _;
            if ("name" in f && f.name) {
                if (h = r.get(f.name), !h) throw rn(1, {
                    location: f
                });
                _ = h.record.name, m = ae(Hi(d.params, h.keys.filter((S)=>!S.optional).concat(h.parent ? h.parent.keys.filter((S)=>S.optional) : []).map((S)=>S.name)), f.params && Hi(f.params, h.keys.map((S)=>S.name))), y = h.stringify(m);
            } else if (f.path != null) y = f.path, h = n.find((S)=>S.re.test(y)), h && (m = h.parse(y), _ = h.record.name);
            else {
                if (h = d.name ? r.get(d.name) : n.find((S)=>S.re.test(d.path)), !h) throw rn(1, {
                    location: f,
                    currentLocation: d
                });
                _ = h.record.name, m = ae({}, d.params, f.params), y = h.stringify(m);
            }
            const x = [];
            let C = h;
            for(; C;)x.unshift(C.record), C = C.parent;
            return {
                name: _,
                path: y,
                params: m,
                matched: x,
                meta: am(x)
            };
        }
        e.forEach((f)=>o(f));
        function a() {
            n.length = 0, r.clear();
        }
        return {
            addRoute: o,
            resolve: u,
            removeRoute: i,
            clearRoutes: a,
            getRoutes: l,
            getRecordMatcher: s
        };
    }
    function Hi(e, t) {
        const n = {};
        for (const r of t)r in e && (n[r] = e[r]);
        return n;
    }
    function Vi(e) {
        const t = {
            path: e.path,
            redirect: e.redirect,
            name: e.name,
            meta: e.meta || {},
            aliasOf: e.aliasOf,
            beforeEnter: e.beforeEnter,
            props: cm(e),
            children: e.children || [],
            instances: {},
            leaveGuards: new Set,
            updateGuards: new Set,
            enterCallbacks: {},
            components: "components" in e ? e.components || null : e.component && {
                default: e.component
            }
        };
        return Object.defineProperty(t, "mods", {
            value: {}
        }), t;
    }
    function cm(e) {
        const t = {}, n = e.props || !1;
        if ("component" in e) t.default = n;
        else for(const r in e.components)t[r] = typeof n == "object" ? n[r] : n;
        return t;
    }
    function Bi(e) {
        for(; e;){
            if (e.record.aliasOf) return !0;
            e = e.parent;
        }
        return !1;
    }
    function am(e) {
        return e.reduce((t, n)=>ae(t, n.meta), {});
    }
    function Ui(e, t) {
        const n = {};
        for(const r in e)n[r] = r in t ? t[r] : e[r];
        return n;
    }
    function um(e, t) {
        let n = 0, r = t.length;
        for(; n !== r;){
            const o = n + r >> 1;
            Ma(e, t[o]) < 0 ? r = o : n = o + 1;
        }
        const s = fm(e);
        return s && (r = t.lastIndexOf(s, r - 1)), r;
    }
    function fm(e) {
        let t = e;
        for(; t = t.parent;)if (Ra(t) && Ma(e, t) === 0) return t;
    }
    function Ra({ record: e }) {
        return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
    }
    function dm(e) {
        const t = {};
        if (e === "" || e === "?") return t;
        const r = (e[0] === "?" ? e.slice(1) : e).split("&");
        for(let s = 0; s < r.length; ++s){
            const o = r[s].replace(Sa, " "), i = o.indexOf("="), l = Dn(i < 0 ? o : o.slice(0, i)), c = i < 0 ? null : Dn(o.slice(i + 1));
            if (l in t) {
                let u = t[l];
                Ze(u) || (u = t[l] = [
                    u
                ]), u.push(c);
            } else t[l] = c;
        }
        return t;
    }
    function Wi(e) {
        let t = "";
        for(let n in e){
            const r = e[n];
            if (n = Pg(n), r == null) {
                r !== void 0 && (t += (t.length ? "&" : "") + n);
                continue;
            }
            (Ze(r) ? r.map((o)=>o && Fs(o)) : [
                r && Fs(r)
            ]).forEach((o)=>{
                o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
            });
        }
        return t;
    }
    function pm(e) {
        const t = {};
        for(const n in e){
            const r = e[n];
            r !== void 0 && (t[n] = Ze(r) ? r.map((s)=>s == null ? null : "" + s) : r == null ? r : "" + r);
        }
        return t;
    }
    const hm = Symbol(""), Ki = Symbol(""), Hr = Symbol(""), Eo = Symbol(""), Hs = Symbol("");
    function un() {
        let e = [];
        function t(r) {
            return e.push(r), ()=>{
                const s = e.indexOf(r);
                s > -1 && e.splice(s, 1);
            };
        }
        function n() {
            e = [];
        }
        return {
            add: t,
            list: ()=>e.slice(),
            reset: n
        };
    }
    function Et(e, t, n, r, s, o = (i)=>i()) {
        const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
        return ()=>new Promise((l, c)=>{
                const u = (d)=>{
                    d === !1 ? c(rn(4, {
                        from: n,
                        to: t
                    })) : d instanceof Error ? c(d) : Qg(d) ? c(rn(2, {
                        from: t,
                        to: d
                    })) : (i && r.enterCallbacks[s] === i && typeof d == "function" && i.push(d), l());
                }, a = o(()=>e.call(r && r.instances[s], t, n, u));
                let f = Promise.resolve(a);
                e.length < 3 && (f = f.then(u)), f.catch((d)=>c(d));
            });
    }
    function fs(e, t, n, r, s = (o)=>o()) {
        const o = [];
        for (const i of e)for(const l in i.components){
            let c = i.components[l];
            if (!(t !== "beforeRouteEnter" && !i.instances[l])) if (va(c)) {
                const a = (c.__vccOpts || c)[t];
                a && o.push(Et(a, n, r, i, l, s));
            } else {
                let u = c();
                o.push(()=>u.then((a)=>{
                        if (!a) throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
                        const f = _g(a) ? a.default : a;
                        i.mods[l] = a, i.components[l] = f;
                        const h = (f.__vccOpts || f)[t];
                        return h && Et(h, n, r, i, l, s)();
                    }));
            }
        }
        return o;
    }
    function qi(e) {
        const t = We(Hr), n = We(Eo), r = _e(()=>{
            const c = He(e.to);
            return t.resolve(c);
        }), s = _e(()=>{
            const { matched: c } = r.value, { length: u } = c, a = c[u - 1], f = n.matched;
            if (!a || !f.length) return -1;
            const d = f.findIndex(nn.bind(null, a));
            if (d > -1) return d;
            const h = zi(c[u - 2]);
            return u > 1 && zi(a) === h && f[f.length - 1].path !== h ? f.findIndex(nn.bind(null, c[u - 2])) : d;
        }), o = _e(()=>s.value > -1 && vm(n.params, r.value.params)), i = _e(()=>s.value > -1 && s.value === n.matched.length - 1 && Ea(n.params, r.value.params));
        function l(c = {}) {
            if (bm(c)) {
                const u = t[He(e.replace) ? "replace" : "push"](He(e.to)).catch(On);
                return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(()=>u), u;
            }
            return Promise.resolve();
        }
        return {
            route: r,
            href: _e(()=>r.value.href),
            isActive: o,
            isExactActive: i,
            navigate: l
        };
    }
    function gm(e) {
        return e.length === 1 ? e[0] : e;
    }
    const mm = sn({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [
                    String,
                    Object
                ],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            },
            viewTransition: Boolean
        },
        useLink: qi,
        setup (e, { slots: t }) {
            const n = it(qi(e)), { options: r } = We(Hr), s = _e(()=>({
                    [Gi(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [Gi(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return ()=>{
                const o = t.default && gm(t.default(n));
                return e.custom ? o : Vn("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: s.value
                }, o);
            };
        }
    }), ym = mm;
    function bm(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                const t = e.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(t)) return;
            }
            return e.preventDefault && e.preventDefault(), !0;
        }
    }
    function vm(e, t) {
        for(const n in t){
            const r = t[n], s = e[n];
            if (typeof r == "string") {
                if (r !== s) return !1;
            } else if (!Ze(s) || s.length !== r.length || r.some((o, i)=>o !== s[i])) return !1;
        }
        return !0;
    }
    function zi(e) {
        return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
    }
    const Gi = (e, t, n)=>e ?? t ?? n, _m = sn({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup (e, { attrs: t, slots: n }) {
            const r = We(Hs), s = _e(()=>e.route || r.value), o = We(Ki, 0), i = _e(()=>{
                let u = He(o);
                const { matched: a } = s.value;
                let f;
                for(; (f = a[u]) && !f.components;)u++;
                return u;
            }), l = _e(()=>s.value.matched[i.value]);
            rr(Ki, _e(()=>i.value + 1)), rr(hm, l), rr(Hs, s);
            const c = Te();
            return xe(()=>[
                    c.value,
                    l.value,
                    e.name
                ], ([u, a, f], [d, h, m])=>{
                a && (a.instances[f] = u, h && h !== a && u && u === d && (a.leaveGuards.size || (a.leaveGuards = h.leaveGuards), a.updateGuards.size || (a.updateGuards = h.updateGuards))), u && a && (!h || !nn(a, h) || !d) && (a.enterCallbacks[f] || []).forEach((y)=>y(u));
            }, {
                flush: "post"
            }), ()=>{
                const u = s.value, a = e.name, f = l.value, d = f && f.components[a];
                if (!d) return Yi(n.default, {
                    Component: d,
                    route: u
                });
                const h = f.props[a], m = h ? h === !0 ? u.params : typeof h == "function" ? h(u) : h : null, _ = Vn(d, ae({}, m, t, {
                    onVnodeUnmounted: (x)=>{
                        x.component.isUnmounted && (f.instances[a] = null);
                    },
                    ref: c
                }));
                return Yi(n.default, {
                    Component: _,
                    route: u
                }) || _;
            };
        }
    });
    function Yi(e, t) {
        if (!e) return null;
        const n = e(t);
        return n.length === 1 ? n[0] : n;
    }
    const Pa = _m;
    function Sm(e) {
        const t = lm(e.routes, e), n = e.parseQuery || dm, r = e.stringifyQuery || Wi, s = e.history, o = un(), i = un(), l = un(), c = gu(vt);
        let u = vt;
        Gt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
        const a = as.bind(null, (w)=>"" + w), f = as.bind(null, Ig), d = as.bind(null, Dn);
        function h(w, H) {
            let N, V;
            return Ta(w) ? (N = t.getRecordMatcher(w), V = H) : V = w, t.addRoute(V, N);
        }
        function m(w) {
            const H = t.getRecordMatcher(w);
            H && t.removeRoute(H);
        }
        function y() {
            return t.getRoutes().map((w)=>w.record);
        }
        function _(w) {
            return !!t.getRecordMatcher(w);
        }
        function x(w, H) {
            if (H = ae({}, H || c.value), typeof w == "string") {
                const b = us(n, w, H.path), O = t.resolve({
                    path: b.path
                }, H), T = s.createHref(b.fullPath);
                return ae(b, O, {
                    params: d(O.params),
                    hash: Dn(b.hash),
                    redirectedFrom: void 0,
                    href: T
                });
            }
            let N;
            if (w.path != null) N = ae({}, w, {
                path: us(n, w.path, H.path).path
            });
            else {
                const b = ae({}, w.params);
                for(const O in b)b[O] == null && delete b[O];
                N = ae({}, w, {
                    params: f(b)
                }), H.params = f(H.params);
            }
            const V = t.resolve(N, H), le = w.hash || "";
            V.params = a(d(V.params));
            const p = Ng(r, ae({}, w, {
                hash: Rg(le),
                path: V.path
            })), g = s.createHref(p);
            return ae({
                fullPath: p,
                hash: le,
                query: r === Wi ? pm(w.query) : w.query || {}
            }, V, {
                redirectedFrom: void 0,
                href: g
            });
        }
        function C(w) {
            return typeof w == "string" ? us(n, w, c.value.path) : ae({}, w);
        }
        function S(w, H) {
            if (u !== w) return rn(8, {
                from: H,
                to: w
            });
        }
        function v(w) {
            return G(w);
        }
        function M(w) {
            return v(ae(C(w), {
                replace: !0
            }));
        }
        function U(w) {
            const H = w.matched[w.matched.length - 1];
            if (H && H.redirect) {
                const { redirect: N } = H;
                let V = typeof N == "function" ? N(w) : N;
                return typeof V == "string" && (V = V.includes("?") || V.includes("#") ? V = C(V) : {
                    path: V
                }, V.params = {}), ae({
                    query: w.query,
                    hash: w.hash,
                    params: V.path != null ? {} : w.params
                }, V);
            }
        }
        function G(w, H) {
            const N = u = x(w), V = c.value, le = w.state, p = w.force, g = w.replace === !0, b = U(N);
            if (b) return G(ae(C(b), {
                state: typeof b == "object" ? ae({}, le, b.state) : le,
                force: p,
                replace: g
            }), H || N);
            const O = N;
            O.redirectedFrom = H;
            let T;
            return !p && Dg(r, V, N) && (T = rn(16, {
                to: O,
                from: V
            }), se(V, V, !0, !1)), (T ? Promise.resolve(T) : W(O, V)).catch((E)=>ct(E) ? ct(E, 2) ? E : Q(E) : R(E, O, V)).then((E)=>{
                if (E) {
                    if (ct(E, 2)) return G(ae({
                        replace: g
                    }, C(E.to), {
                        state: typeof E.to == "object" ? ae({}, le, E.to.state) : le,
                        force: p
                    }), H || O);
                } else E = F(O, V, !0, g, le);
                return z(O, V, E), E;
            });
        }
        function q(w, H) {
            const N = S(w, H);
            return N ? Promise.reject(N) : Promise.resolve();
        }
        function P(w) {
            const H = ye.values().next().value;
            return H && typeof H.runWithContext == "function" ? H.runWithContext(w) : w();
        }
        function W(w, H) {
            let N;
            const [V, le, p] = wm(w, H);
            N = fs(V.reverse(), "beforeRouteLeave", w, H);
            for (const b of V)b.leaveGuards.forEach((O)=>{
                N.push(Et(O, w, H));
            });
            const g = q.bind(null, w, H);
            return N.push(g), Se(N).then(()=>{
                N = [];
                for (const b of o.list())N.push(Et(b, w, H));
                return N.push(g), Se(N);
            }).then(()=>{
                N = fs(le, "beforeRouteUpdate", w, H);
                for (const b of le)b.updateGuards.forEach((O)=>{
                    N.push(Et(O, w, H));
                });
                return N.push(g), Se(N);
            }).then(()=>{
                N = [];
                for (const b of p)if (b.beforeEnter) if (Ze(b.beforeEnter)) for (const O of b.beforeEnter)N.push(Et(O, w, H));
                else N.push(Et(b.beforeEnter, w, H));
                return N.push(g), Se(N);
            }).then(()=>(w.matched.forEach((b)=>b.enterCallbacks = {}), N = fs(p, "beforeRouteEnter", w, H, P), N.push(g), Se(N))).then(()=>{
                N = [];
                for (const b of i.list())N.push(Et(b, w, H));
                return N.push(g), Se(N);
            }).catch((b)=>ct(b, 8) ? b : Promise.reject(b));
        }
        function z(w, H, N) {
            l.list().forEach((V)=>P(()=>V(w, H, N)));
        }
        function F(w, H, N, V, le) {
            const p = S(w, H);
            if (p) return p;
            const g = H === vt, b = Gt ? history.state : {};
            N && (V || g ? s.replace(w.fullPath, ae({
                scroll: g && b && b.scroll
            }, le)) : s.push(w.fullPath, le)), c.value = w, se(w, H, N, g), Q();
        }
        let re;
        function K() {
            re || (re = s.listen((w, H, N)=>{
                if (!Oe.listening) return;
                const V = x(w), le = U(V);
                if (le) {
                    G(ae(le, {
                        replace: !0,
                        force: !0
                    }), V).catch(On);
                    return;
                }
                u = V;
                const p = c.value;
                Gt && Kg(Li(p.fullPath, N.delta), kr()), W(V, p).catch((g)=>ct(g, 12) ? g : ct(g, 2) ? (G(ae(C(g.to), {
                        force: !0
                    }), V).then((b)=>{
                        ct(b, 20) && !N.delta && N.type === Fn.pop && s.go(-1, !1);
                    }).catch(On), Promise.reject()) : (N.delta && s.go(-N.delta, !1), R(g, V, p))).then((g)=>{
                    g = g || F(V, p, !1), g && (N.delta && !ct(g, 8) ? s.go(-N.delta, !1) : N.type === Fn.pop && ct(g, 20) && s.go(-1, !1)), z(V, p, g);
                }).catch(On);
            }));
        }
        let j = un(), A = un(), $;
        function R(w, H, N) {
            Q(w);
            const V = A.list();
            return V.length && V.forEach((le)=>le(w, H, N)), Promise.reject(w);
        }
        function J() {
            return $ && c.value !== vt ? Promise.resolve() : new Promise((w, H)=>{
                j.add([
                    w,
                    H
                ]);
            });
        }
        function Q(w) {
            return $ || ($ = !w, K(), j.list().forEach(([H, N])=>w ? N(w) : H()), j.reset()), w;
        }
        function se(w, H, N, V) {
            const { scrollBehavior: le } = e;
            if (!Gt || !le) return Promise.resolve();
            const p = !N && qg(Li(w.fullPath, 0)) || (V || !N) && history.state && history.state.scroll || null;
            return en().then(()=>le(w, H, p)).then((g)=>g && Wg(g)).catch((g)=>R(g, w, H));
        }
        const ie = (w)=>s.go(w);
        let me;
        const ye = new Set, Oe = {
            currentRoute: c,
            listening: !0,
            addRoute: h,
            removeRoute: m,
            clearRoutes: t.clearRoutes,
            hasRoute: _,
            getRoutes: y,
            resolve: x,
            options: e,
            push: v,
            replace: M,
            go: ie,
            back: ()=>ie(-1),
            forward: ()=>ie(1),
            beforeEach: o.add,
            beforeResolve: i.add,
            afterEach: l.add,
            onError: A.add,
            isReady: J,
            install (w) {
                const H = this;
                w.component("RouterLink", ym), w.component("RouterView", Pa), w.config.globalProperties.$router = H, Object.defineProperty(w.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: ()=>He(c)
                }), Gt && !me && c.value === vt && (me = !0, v(s.location).catch((le)=>{}));
                const N = {};
                for(const le in vt)Object.defineProperty(N, le, {
                    get: ()=>c.value[le],
                    enumerable: !0
                });
                w.provide(Hr, H), w.provide(Eo, Sl(N)), w.provide(Hs, c);
                const V = w.unmount;
                ye.add(w), w.unmount = function() {
                    ye.delete(w), ye.size < 1 && (u = vt, re && re(), re = null, c.value = vt, me = !1, $ = !1), V();
                };
            }
        };
        function Se(w) {
            return w.reduce((H, N)=>H.then(()=>P(N)), Promise.resolve());
        }
        return Oe;
    }
    function wm(e, t) {
        const n = [], r = [], s = [], o = Math.max(t.matched.length, e.matched.length);
        for(let i = 0; i < o; i++){
            const l = t.matched[i];
            l && (e.matched.find((u)=>nn(u, l)) ? r.push(l) : n.push(l));
            const c = e.matched[i];
            c && (t.matched.find((u)=>nn(u, c)) || s.push(c));
        }
        return [
            n,
            r,
            s
        ];
    }
    Qm = function() {
        return We(Hr);
    };
    Xm = function(e) {
        return We(Eo);
    };
    const xm = sn({
        __name: "App",
        setup (e) {
            return (t, n)=>(Pn(), hr(He(Pa)));
        }
    }), Om = "modulepreload", Em = function(e) {
        return "/Vue3-Screen/" + e;
    }, Zi = {}, er = function(t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), l = i?.nonce || i?.getAttribute("nonce");
            s = Promise.allSettled(n.map((c)=>{
                if (c = Em(c), c in Zi) return;
                Zi[c] = !0;
                const u = c.endsWith(".css"), a = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${c}"]${a}`)) return;
                const f = document.createElement("link");
                if (f.rel = u ? "stylesheet" : Om, u || (f.as = "script"), f.crossOrigin = "", f.href = c, l && f.setAttribute("nonce", l), document.head.appendChild(f), u) return new Promise((d, h)=>{
                    f.addEventListener("load", d), f.addEventListener("error", ()=>h(new Error(`Unable to preload CSS for ${c}`)));
                });
            }));
        }
        function o(i) {
            const l = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (l.payload = i, window.dispatchEvent(l), !l.defaultPrevented) throw i;
        }
        return s.then((i)=>{
            for (const l of i || [])l.status === "rejected" && o(l.reason);
            return t().catch(o);
        });
    };
    $a = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    Ia = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    ey = function(e) {
        if (e.__esModule) return e;
        var t = e.default;
        if (typeof t == "function") {
            var n = function r() {
                return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
            };
            n.prototype = t.prototype;
        } else n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(r) {
            var s = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(n, r, s.get ? s : {
                enumerable: !0,
                get: function() {
                    return e[r];
                }
            });
        }), n;
    };
    var ja = {
        exports: {}
    };
    (function(e, t) {
        (function(n, r) {
            e.exports = r();
        })($a, function() {
            var n = {};
            n.version = "0.2.0";
            var r = n.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };
            n.configure = function(m) {
                var y, _;
                for(y in m)_ = m[y], _ !== void 0 && m.hasOwnProperty(y) && (r[y] = _);
                return this;
            }, n.status = null, n.set = function(m) {
                var y = n.isStarted();
                m = s(m, r.minimum, 1), n.status = m === 1 ? null : m;
                var _ = n.render(!y), x = _.querySelector(r.barSelector), C = r.speed, S = r.easing;
                return _.offsetWidth, l(function(v) {
                    r.positionUsing === "" && (r.positionUsing = n.getPositioningCSS()), c(x, i(m, C, S)), m === 1 ? (c(_, {
                        transition: "none",
                        opacity: 1
                    }), _.offsetWidth, setTimeout(function() {
                        c(_, {
                            transition: "all " + C + "ms linear",
                            opacity: 0
                        }), setTimeout(function() {
                            n.remove(), v();
                        }, C);
                    }, C)) : setTimeout(v, C);
                }), this;
            }, n.isStarted = function() {
                return typeof n.status == "number";
            }, n.start = function() {
                n.status || n.set(0);
                var m = function() {
                    setTimeout(function() {
                        n.status && (n.trickle(), m());
                    }, r.trickleSpeed);
                };
                return r.trickle && m(), this;
            }, n.done = function(m) {
                return !m && !n.status ? this : n.inc(.3 + .5 * Math.random()).set(1);
            }, n.inc = function(m) {
                var y = n.status;
                return y ? (typeof m != "number" && (m = (1 - y) * s(Math.random() * y, .1, .95)), y = s(y + m, 0, .994), n.set(y)) : n.start();
            }, n.trickle = function() {
                return n.inc(Math.random() * r.trickleRate);
            }, function() {
                var m = 0, y = 0;
                n.promise = function(_) {
                    return !_ || _.state() === "resolved" ? this : (y === 0 && n.start(), m++, y++, _.always(function() {
                        y--, y === 0 ? (m = 0, n.done()) : n.set((m - y) / m);
                    }), this);
                };
            }(), n.render = function(m) {
                if (n.isRendered()) return document.getElementById("nprogress");
                a(document.documentElement, "nprogress-busy");
                var y = document.createElement("div");
                y.id = "nprogress", y.innerHTML = r.template;
                var _ = y.querySelector(r.barSelector), x = m ? "-100" : o(n.status || 0), C = document.querySelector(r.parent), S;
                return c(_, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + x + "%,0,0)"
                }), r.showSpinner || (S = y.querySelector(r.spinnerSelector), S && h(S)), C != document.body && a(C, "nprogress-custom-parent"), C.appendChild(y), y;
            }, n.remove = function() {
                f(document.documentElement, "nprogress-busy"), f(document.querySelector(r.parent), "nprogress-custom-parent");
                var m = document.getElementById("nprogress");
                m && h(m);
            }, n.isRendered = function() {
                return !!document.getElementById("nprogress");
            }, n.getPositioningCSS = function() {
                var m = document.body.style, y = "WebkitTransform" in m ? "Webkit" : "MozTransform" in m ? "Moz" : "msTransform" in m ? "ms" : "OTransform" in m ? "O" : "";
                return y + "Perspective" in m ? "translate3d" : y + "Transform" in m ? "translate" : "margin";
            };
            function s(m, y, _) {
                return m < y ? y : m > _ ? _ : m;
            }
            function o(m) {
                return (-1 + m) * 100;
            }
            function i(m, y, _) {
                var x;
                return r.positionUsing === "translate3d" ? x = {
                    transform: "translate3d(" + o(m) + "%,0,0)"
                } : r.positionUsing === "translate" ? x = {
                    transform: "translate(" + o(m) + "%,0)"
                } : x = {
                    "margin-left": o(m) + "%"
                }, x.transition = "all " + y + "ms " + _, x;
            }
            var l = function() {
                var m = [];
                function y() {
                    var _ = m.shift();
                    _ && _(y);
                }
                return function(_) {
                    m.push(_), m.length == 1 && y();
                };
            }(), c = function() {
                var m = [
                    "Webkit",
                    "O",
                    "Moz",
                    "ms"
                ], y = {};
                function _(v) {
                    return v.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(M, U) {
                        return U.toUpperCase();
                    });
                }
                function x(v) {
                    var M = document.body.style;
                    if (v in M) return v;
                    for(var U = m.length, G = v.charAt(0).toUpperCase() + v.slice(1), q; U--;)if (q = m[U] + G, q in M) return q;
                    return v;
                }
                function C(v) {
                    return v = _(v), y[v] || (y[v] = x(v));
                }
                function S(v, M, U) {
                    M = C(M), v.style[M] = U;
                }
                return function(v, M) {
                    var U = arguments, G, q;
                    if (U.length == 2) for(G in M)q = M[G], q !== void 0 && M.hasOwnProperty(G) && S(v, G, q);
                    else S(v, U[1], U[2]);
                };
            }();
            function u(m, y) {
                var _ = typeof m == "string" ? m : d(m);
                return _.indexOf(" " + y + " ") >= 0;
            }
            function a(m, y) {
                var _ = d(m), x = _ + y;
                u(_, y) || (m.className = x.substring(1));
            }
            function f(m, y) {
                var _ = d(m), x;
                u(m, y) && (x = _.replace(" " + y + " ", " "), m.className = x.substring(1, x.length - 1));
            }
            function d(m) {
                return (" " + (m.className || "") + " ").replace(/\s+/gi, " ");
            }
            function h(m) {
                m && m.parentNode && m.parentNode.removeChild(m);
            }
            return n;
        });
    })(ja);
    var Cm = ja.exports;
    const Co = Ia(Cm);
    Co.configure({
        easing: "ease",
        speed: 1e3,
        showSpinner: !1,
        trickleSpeed: 200,
        minimum: .3,
        parent: "body"
    });
    let Tm, Am, Mm;
    Tm = ()=>{
        Co.start();
    };
    Am = ()=>{
        Co.done();
    };
    Mm = "/login";
    La = "/middle";
    ty = [
        "rgba(124, 253, 255, .8)",
        "rgba(30,255,119, .8)",
        "rgba(46, 109, 255, .8)",
        "rgba(255,149,40, .8)",
        "rgba(209, 70, 255, .8)",
        "rgba(255, 70, 70, .8)",
        "rgba(255,211,37, .8)",
        "rgba(255,255,255, .8)"
    ];
    var Na = {
        exports: {}
    };
    (function(e, t) {
        (function(n, r) {
            e.exports = r();
        })($a, function() {
            var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", i = "second", l = "minute", c = "hour", u = "day", a = "week", f = "month", d = "quarter", h = "year", m = "date", y = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(K) {
                    var j = [
                        "th",
                        "st",
                        "nd",
                        "rd"
                    ], A = K % 100;
                    return "[" + K + (j[(A - 20) % 10] || j[A] || j[0]) + "]";
                }
            }, S = function(K, j, A) {
                var $ = String(K);
                return !$ || $.length >= j ? K : "" + Array(j + 1 - $.length).join(A) + K;
            }, v = {
                s: S,
                z: function(K) {
                    var j = -K.utcOffset(), A = Math.abs(j), $ = Math.floor(A / 60), R = A % 60;
                    return (j <= 0 ? "+" : "-") + S($, 2, "0") + ":" + S(R, 2, "0");
                },
                m: function K(j, A) {
                    if (j.date() < A.date()) return -K(A, j);
                    var $ = 12 * (A.year() - j.year()) + (A.month() - j.month()), R = j.clone().add($, f), J = A - R < 0, Q = j.clone().add($ + (J ? -1 : 1), f);
                    return +(-($ + (A - R) / (J ? R - Q : Q - R)) || 0);
                },
                a: function(K) {
                    return K < 0 ? Math.ceil(K) || 0 : Math.floor(K);
                },
                p: function(K) {
                    return {
                        M: f,
                        y: h,
                        w: a,
                        d: u,
                        D: m,
                        h: c,
                        m: l,
                        s: i,
                        ms: o,
                        Q: d
                    }[K] || String(K || "").toLowerCase().replace(/s$/, "");
                },
                u: function(K) {
                    return K === void 0;
                }
            }, M = "en", U = {};
            U[M] = C;
            var G = "$isDayjsObject", q = function(K) {
                return K instanceof F || !(!K || !K[G]);
            }, P = function K(j, A, $) {
                var R;
                if (!j) return M;
                if (typeof j == "string") {
                    var J = j.toLowerCase();
                    U[J] && (R = J), A && (U[J] = A, R = J);
                    var Q = j.split("-");
                    if (!R && Q.length > 1) return K(Q[0]);
                } else {
                    var se = j.name;
                    U[se] = j, R = se;
                }
                return !$ && R && (M = R), R || !$ && M;
            }, W = function(K, j) {
                if (q(K)) return K.clone();
                var A = typeof j == "object" ? j : {};
                return A.date = K, A.args = arguments, new F(A);
            }, z = v;
            z.l = P, z.i = q, z.w = function(K, j) {
                return W(K, {
                    locale: j.$L,
                    utc: j.$u,
                    x: j.$x,
                    $offset: j.$offset
                });
            };
            var F = function() {
                function K(A) {
                    this.$L = P(A.locale, null, !0), this.parse(A), this.$x = this.$x || A.x || {}, this[G] = !0;
                }
                var j = K.prototype;
                return j.parse = function(A) {
                    this.$d = function($) {
                        var R = $.date, J = $.utc;
                        if (R === null) return new Date(NaN);
                        if (z.u(R)) return new Date;
                        if (R instanceof Date) return new Date(R);
                        if (typeof R == "string" && !/Z$/i.test(R)) {
                            var Q = R.match(_);
                            if (Q) {
                                var se = Q[2] - 1 || 0, ie = (Q[7] || "0").substring(0, 3);
                                return J ? new Date(Date.UTC(Q[1], se, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, ie)) : new Date(Q[1], se, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, ie);
                            }
                        }
                        return new Date(R);
                    }(A), this.init();
                }, j.init = function() {
                    var A = this.$d;
                    this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
                }, j.$utils = function() {
                    return z;
                }, j.isValid = function() {
                    return this.$d.toString() !== y;
                }, j.isSame = function(A, $) {
                    var R = W(A);
                    return this.startOf($) <= R && R <= this.endOf($);
                }, j.isAfter = function(A, $) {
                    return W(A) < this.startOf($);
                }, j.isBefore = function(A, $) {
                    return this.endOf($) < W(A);
                }, j.$g = function(A, $, R) {
                    return z.u(A) ? this[$] : this.set(R, A);
                }, j.unix = function() {
                    return Math.floor(this.valueOf() / 1e3);
                }, j.valueOf = function() {
                    return this.$d.getTime();
                }, j.startOf = function(A, $) {
                    var R = this, J = !!z.u($) || $, Q = z.p(A), se = function(N, V) {
                        var le = z.w(R.$u ? Date.UTC(R.$y, V, N) : new Date(R.$y, V, N), R);
                        return J ? le : le.endOf(u);
                    }, ie = function(N, V) {
                        return z.w(R.toDate()[N].apply(R.toDate("s"), (J ? [
                            0,
                            0,
                            0,
                            0
                        ] : [
                            23,
                            59,
                            59,
                            999
                        ]).slice(V)), R);
                    }, me = this.$W, ye = this.$M, Oe = this.$D, Se = "set" + (this.$u ? "UTC" : "");
                    switch(Q){
                        case h:
                            return J ? se(1, 0) : se(31, 11);
                        case f:
                            return J ? se(1, ye) : se(0, ye + 1);
                        case a:
                            var w = this.$locale().weekStart || 0, H = (me < w ? me + 7 : me) - w;
                            return se(J ? Oe - H : Oe + (6 - H), ye);
                        case u:
                        case m:
                            return ie(Se + "Hours", 0);
                        case c:
                            return ie(Se + "Minutes", 1);
                        case l:
                            return ie(Se + "Seconds", 2);
                        case i:
                            return ie(Se + "Milliseconds", 3);
                        default:
                            return this.clone();
                    }
                }, j.endOf = function(A) {
                    return this.startOf(A, !1);
                }, j.$set = function(A, $) {
                    var R, J = z.p(A), Q = "set" + (this.$u ? "UTC" : ""), se = (R = {}, R[u] = Q + "Date", R[m] = Q + "Date", R[f] = Q + "Month", R[h] = Q + "FullYear", R[c] = Q + "Hours", R[l] = Q + "Minutes", R[i] = Q + "Seconds", R[o] = Q + "Milliseconds", R)[J], ie = J === u ? this.$D + ($ - this.$W) : $;
                    if (J === f || J === h) {
                        var me = this.clone().set(m, 1);
                        me.$d[se](ie), me.init(), this.$d = me.set(m, Math.min(this.$D, me.daysInMonth())).$d;
                    } else se && this.$d[se](ie);
                    return this.init(), this;
                }, j.set = function(A, $) {
                    return this.clone().$set(A, $);
                }, j.get = function(A) {
                    return this[z.p(A)]();
                }, j.add = function(A, $) {
                    var R, J = this;
                    A = Number(A);
                    var Q = z.p($), se = function(ye) {
                        var Oe = W(J);
                        return z.w(Oe.date(Oe.date() + Math.round(ye * A)), J);
                    };
                    if (Q === f) return this.set(f, this.$M + A);
                    if (Q === h) return this.set(h, this.$y + A);
                    if (Q === u) return se(1);
                    if (Q === a) return se(7);
                    var ie = (R = {}, R[l] = r, R[c] = s, R[i] = n, R)[Q] || 1, me = this.$d.getTime() + A * ie;
                    return z.w(me, this);
                }, j.subtract = function(A, $) {
                    return this.add(-1 * A, $);
                }, j.format = function(A) {
                    var $ = this, R = this.$locale();
                    if (!this.isValid()) return R.invalidDate || y;
                    var J = A || "YYYY-MM-DDTHH:mm:ssZ", Q = z.z(this), se = this.$H, ie = this.$m, me = this.$M, ye = R.weekdays, Oe = R.months, Se = R.meridiem, w = function(V, le, p, g) {
                        return V && (V[le] || V($, J)) || p[le].slice(0, g);
                    }, H = function(V) {
                        return z.s(se % 12 || 12, V, "0");
                    }, N = Se || function(V, le, p) {
                        var g = V < 12 ? "AM" : "PM";
                        return p ? g.toLowerCase() : g;
                    };
                    return J.replace(x, function(V, le) {
                        return le || function(p) {
                            switch(p){
                                case "YY":
                                    return String($.$y).slice(-2);
                                case "YYYY":
                                    return z.s($.$y, 4, "0");
                                case "M":
                                    return me + 1;
                                case "MM":
                                    return z.s(me + 1, 2, "0");
                                case "MMM":
                                    return w(R.monthsShort, me, Oe, 3);
                                case "MMMM":
                                    return w(Oe, me);
                                case "D":
                                    return $.$D;
                                case "DD":
                                    return z.s($.$D, 2, "0");
                                case "d":
                                    return String($.$W);
                                case "dd":
                                    return w(R.weekdaysMin, $.$W, ye, 2);
                                case "ddd":
                                    return w(R.weekdaysShort, $.$W, ye, 3);
                                case "dddd":
                                    return ye[$.$W];
                                case "H":
                                    return String(se);
                                case "HH":
                                    return z.s(se, 2, "0");
                                case "h":
                                    return H(1);
                                case "hh":
                                    return H(2);
                                case "a":
                                    return N(se, ie, !0);
                                case "A":
                                    return N(se, ie, !1);
                                case "m":
                                    return String(ie);
                                case "mm":
                                    return z.s(ie, 2, "0");
                                case "s":
                                    return String($.$s);
                                case "ss":
                                    return z.s($.$s, 2, "0");
                                case "SSS":
                                    return z.s($.$ms, 3, "0");
                                case "Z":
                                    return Q;
                            }
                            return null;
                        }(V) || Q.replace(":", "");
                    });
                }, j.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }, j.diff = function(A, $, R) {
                    var J, Q = this, se = z.p($), ie = W(A), me = (ie.utcOffset() - this.utcOffset()) * r, ye = this - ie, Oe = function() {
                        return z.m(Q, ie);
                    };
                    switch(se){
                        case h:
                            J = Oe() / 12;
                            break;
                        case f:
                            J = Oe();
                            break;
                        case d:
                            J = Oe() / 3;
                            break;
                        case a:
                            J = (ye - me) / 6048e5;
                            break;
                        case u:
                            J = (ye - me) / 864e5;
                            break;
                        case c:
                            J = ye / s;
                            break;
                        case l:
                            J = ye / r;
                            break;
                        case i:
                            J = ye / n;
                            break;
                        default:
                            J = ye;
                    }
                    return R ? J : z.a(J);
                }, j.daysInMonth = function() {
                    return this.endOf(f).$D;
                }, j.$locale = function() {
                    return U[this.$L];
                }, j.locale = function(A, $) {
                    if (!A) return this.$L;
                    var R = this.clone(), J = P(A, $, !0);
                    return J && (R.$L = J), R;
                }, j.clone = function() {
                    return z.w(this.$d, this);
                }, j.toDate = function() {
                    return new Date(this.valueOf());
                }, j.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null;
                }, j.toISOString = function() {
                    return this.$d.toISOString();
                }, j.toString = function() {
                    return this.$d.toUTCString();
                }, K;
            }(), re = F.prototype;
            return W.prototype = re, [
                [
                    "$ms",
                    o
                ],
                [
                    "$s",
                    i
                ],
                [
                    "$m",
                    l
                ],
                [
                    "$H",
                    c
                ],
                [
                    "$W",
                    u
                ],
                [
                    "$M",
                    f
                ],
                [
                    "$y",
                    h
                ],
                [
                    "$D",
                    m
                ]
            ].forEach(function(K) {
                re[K[1]] = function(j) {
                    return this.$g(j, K[0], K[1]);
                };
            }), W.extend = function(K, j) {
                return K.$i || (K(j, F, W), K.$i = !0), W;
            }, W.locale = P, W.isDayjs = q, W.unix = function(K) {
                return W(1e3 * K);
            }, W.en = U[M], W.Ls = U, W.p = {}, W;
        });
    })(Na);
    var Rm = Na.exports;
    Pm = Ia(Rm);
    ny = (e)=>{
        const t = e;
        return Pm().format(t);
    };
    ry = function(e) {
        localStorage.setItem("token", e);
    };
    $m = function() {
        return localStorage.getItem("token") || "";
    };
    sy = function() {
        return JSON.parse(localStorage.getItem("userInfo") || "{}");
    };
    oy = function(e) {
        localStorage.setItem("userInfo", JSON.stringify(e));
    };
    iy = function(e) {
        localStorage.clear();
    };
    ly = function() {
        return localStorage.getItem("tenant") || "";
    };
    cy = function(e) {
        return `${window.location.origin}${e}`;
    };
    const Im = [
        {
            path: "/",
            redirect: "/cockpit"
        },
        {
            path: "/login",
            name: "Login",
            component: ()=>er(()=>import("./index-Kr2kB-Hv.js"), __vite__mapDeps([0,1,2,3,4]))
        },
        {
            path: "/middle",
            name: "Middle",
            component: ()=>er(()=>import("./middle-0snC6whW.js"), __vite__mapDeps([5,6,1,7,8]))
        },
        {
            path: "/cockpit",
            name: "Cockpit",
            component: ()=>er(()=>import("./index-BygobsSd.js"), __vite__mapDeps([9,6,1,7,10,2,11,3,12]))
        },
        {
            path: "/institution",
            name: "Institution",
            component: ()=>er(()=>import("./index-BdR-iiRj.js"), __vite__mapDeps([13,6,1,7,10,2,11,14]))
        }
    ], To = Sm({
        history: Jg("/Vue3-Screen/"),
        routes: Im
    }), jm = [
        Mm,
        La
    ];
    To.beforeEach((e, t, n)=>{
        Tm(), document.title = "驾驶舱", !$m() && !jm.includes(e.path) ? n(La) : setTimeout(()=>{
            n();
        });
    });
    To.afterEach(()=>{
        setTimeout(()=>{
            Am();
        }, 1e3);
    });
    const qn = pd(xm);
    qn.use(yg);
    qn.use(md());
    qn.use(To);
    vg(qn);
    qn.mount("#app");
})();
export { Du as $, Qm as A, In as B, Pr as C, be as D, bu as E, Le as F, ro as G, Su as H, Ut as I, Dm as J, Ir as K, Iu as L, Jm as M, Bm as N, xf as O, co as P, Ya as Q, Wu as R, km as S, Um as T, Cn as U, Hm as V, Nu as W, Pm as X, ty as Y, Ks as Z, Zm as _, Bl as a, $a as a0, Ia as a1, cy as a2, qm as a3, Ym as a4, Fm as a5, Gm as a6, sy as a7, ny as a8, bg as a9, Tf as aa, iy as ab, La as ac, ey as ad, $m as ae, ly as af, Re as ag, Lm as ah, Vn as ai, zm as aj, Ne as b, _e as c, sn as d, Mt as e, Nm as f, Km as g, Vm as h, We as i, it as j, hr as k, Mu as l, Pn as m, en as n, Rr as o, rr as p, Cf as q, Te as r, gu as s, oe as t, He as u, Wm as v, xe as w, Xm as x, ry as y, oy as z, __tla };
