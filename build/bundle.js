!(function (t) {
  "function" == typeof define && define.amd ? define(t) : t();
})(function () {
  "use strict";
  /**
   * @license
   * Copyright 2010-2022 Three.js Authors
   * SPDX-License-Identifier: MIT
   */ const t = "144",
    e = 0,
    n = 1,
    i = 2,
    r = 0,
    a = 1,
    s = 2,
    o = 3,
    l = 100,
    c = 301,
    h = 302,
    u = 306,
    d = 1e3,
    p = 1001,
    m = 1002,
    f = 1003,
    g = 1006,
    _ = 1008,
    v = 1009,
    x = 1014,
    M = 1015,
    y = 1016,
    b = 1020,
    S = 1023,
    w = 1026,
    T = 1027,
    E = 33776,
    A = 33777,
    L = 33778,
    C = 33779,
    R = 3e3,
    P = 3001,
    D = "srgb",
    I = "srgb-linear",
    N = 7680,
    O = "300 es",
    z = 1035;
  class U {
    addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    }
    hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    }
    removeEventListener(t, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t];
      if (void 0 !== n) {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1);
      }
    }
    dispatchEvent(t) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t.type];
      if (void 0 !== e) {
        t.target = this;
        const n = e.slice(0);
        for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
        t.target = null;
      }
    }
  }
  const F = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "0a",
      "0b",
      "0c",
      "0d",
      "0e",
      "0f",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "1a",
      "1b",
      "1c",
      "1d",
      "1e",
      "1f",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "2a",
      "2b",
      "2c",
      "2d",
      "2e",
      "2f",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "3a",
      "3b",
      "3c",
      "3d",
      "3e",
      "3f",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "4a",
      "4b",
      "4c",
      "4d",
      "4e",
      "4f",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "5a",
      "5b",
      "5c",
      "5d",
      "5e",
      "5f",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "6a",
      "6b",
      "6c",
      "6d",
      "6e",
      "6f",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "78",
      "79",
      "7a",
      "7b",
      "7c",
      "7d",
      "7e",
      "7f",
      "80",
      "81",
      "82",
      "83",
      "84",
      "85",
      "86",
      "87",
      "88",
      "89",
      "8a",
      "8b",
      "8c",
      "8d",
      "8e",
      "8f",
      "90",
      "91",
      "92",
      "93",
      "94",
      "95",
      "96",
      "97",
      "98",
      "99",
      "9a",
      "9b",
      "9c",
      "9d",
      "9e",
      "9f",
      "a0",
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
      "a7",
      "a8",
      "a9",
      "aa",
      "ab",
      "ac",
      "ad",
      "ae",
      "af",
      "b0",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "ba",
      "bb",
      "bc",
      "bd",
      "be",
      "bf",
      "c0",
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "ca",
      "cb",
      "cc",
      "cd",
      "ce",
      "cf",
      "d0",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8",
      "d9",
      "da",
      "db",
      "dc",
      "dd",
      "de",
      "df",
      "e0",
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
      "e6",
      "e7",
      "e8",
      "e9",
      "ea",
      "eb",
      "ec",
      "ed",
      "ee",
      "ef",
      "f0",
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "fa",
      "fb",
      "fc",
      "fd",
      "fe",
      "ff",
    ],
    B = Math.PI / 180,
    G = 180 / Math.PI;
  function H() {
    const t = (4294967295 * Math.random()) | 0,
      e = (4294967295 * Math.random()) | 0,
      n = (4294967295 * Math.random()) | 0,
      i = (4294967295 * Math.random()) | 0;
    return (
      F[255 & t] +
      F[(t >> 8) & 255] +
      F[(t >> 16) & 255] +
      F[(t >> 24) & 255] +
      "-" +
      F[255 & e] +
      F[(e >> 8) & 255] +
      "-" +
      F[((e >> 16) & 15) | 64] +
      F[(e >> 24) & 255] +
      "-" +
      F[(63 & n) | 128] +
      F[(n >> 8) & 255] +
      "-" +
      F[(n >> 16) & 255] +
      F[(n >> 24) & 255] +
      F[255 & i] +
      F[(i >> 8) & 255] +
      F[(i >> 16) & 255] +
      F[(i >> 24) & 255]
    ).toLowerCase();
  }
  function V(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function k(t, e, n) {
    return (1 - n) * t + n * e;
  }
  function W(t) {
    return 0 == (t & (t - 1)) && 0 !== t;
  }
  function j(t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
  }
  function X(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;
      case Uint16Array:
        return t / 65535;
      case Uint8Array:
        return t / 255;
      case Int16Array:
        return Math.max(t / 32767, -1);
      case Int8Array:
        return Math.max(t / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function q(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;
      case Uint16Array:
        return Math.round(65535 * t);
      case Uint8Array:
        return Math.round(255 * t);
      case Int16Array:
        return Math.round(32767 * t);
      case Int8Array:
        return Math.round(127 * t);
      default:
        throw new Error("Invalid component type.");
    }
  }
  class Y {
    constructor(t = 0, e = 0) {
      (Y.prototype.isVector2 = !0), (this.x = t), (this.y = e);
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return (this.x = t), (this.y = e), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), this;
    }
    add(t) {
      return (this.x += t.x), (this.y += t.y), this;
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), this;
    }
    addVectors(t, e) {
      return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
    }
    addScaledVector(t, e) {
      return (this.x += t.x * e), (this.y += t.y * e), this;
    }
    sub(t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), this;
    }
    subVectors(t, e) {
      return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = t.elements;
      return (
        (this.x = i[0] * e + i[3] * n + i[6]),
        (this.y = i[1] * e + i[4] * n + i[7]),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
      );
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), t;
    }
    fromBufferAttribute(t, e) {
      return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
    }
    rotateAround(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return (
        (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class Z {
    constructor() {
      (Z.prototype.isMatrix3 = !0),
        (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
    }
    set(t, e, n, i, r, a, s, o, l) {
      const c = this.elements;
      return (
        (c[0] = t),
        (c[1] = i),
        (c[2] = s),
        (c[3] = e),
        (c[4] = r),
        (c[5] = o),
        (c[6] = n),
        (c[7] = a),
        (c[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(t) {
      const e = t.elements;
      return (
        this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        s = n[3],
        o = n[6],
        l = n[1],
        c = n[4],
        h = n[7],
        u = n[2],
        d = n[5],
        p = n[8],
        m = i[0],
        f = i[3],
        g = i[6],
        _ = i[1],
        v = i[4],
        x = i[7],
        M = i[2],
        y = i[5],
        b = i[8];
      return (
        (r[0] = a * m + s * _ + o * M),
        (r[3] = a * f + s * v + o * y),
        (r[6] = a * g + s * x + o * b),
        (r[1] = l * m + c * _ + h * M),
        (r[4] = l * f + c * v + h * y),
        (r[7] = l * g + c * x + h * b),
        (r[2] = u * m + d * _ + p * M),
        (r[5] = u * f + d * v + p * y),
        (r[8] = u * g + d * x + p * b),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[3] *= t),
        (e[6] *= t),
        (e[1] *= t),
        (e[4] *= t),
        (e[7] *= t),
        (e[2] *= t),
        (e[5] *= t),
        (e[8] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8];
      return (
        e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = c * a - s * l,
        u = s * o - c * r,
        d = l * r - a * o,
        p = e * h + n * u + i * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m = 1 / p;
      return (
        (t[0] = h * m),
        (t[1] = (i * l - c * n) * m),
        (t[2] = (s * n - i * a) * m),
        (t[3] = u * m),
        (t[4] = (c * e - i * o) * m),
        (t[5] = (i * r - s * e) * m),
        (t[6] = d * m),
        (t[7] = (n * o - l * e) * m),
        (t[8] = (a * e - n * r) * m),
        this
      );
    }
    transpose() {
      let t;
      const e = this.elements;
      return (
        (t = e[1]),
        (e[1] = e[3]),
        (e[3] = t),
        (t = e[2]),
        (e[2] = e[6]),
        (e[6] = t),
        (t = e[5]),
        (e[5] = e[7]),
        (e[7] = t),
        this
      );
    }
    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
      const e = this.elements;
      return (
        (t[0] = e[0]),
        (t[1] = e[3]),
        (t[2] = e[6]),
        (t[3] = e[1]),
        (t[4] = e[4]),
        (t[5] = e[7]),
        (t[6] = e[2]),
        (t[7] = e[5]),
        (t[8] = e[8]),
        this
      );
    }
    setUvTransform(t, e, n, i, r, a, s) {
      const o = Math.cos(r),
        l = Math.sin(r);
      return (
        this.set(
          n * o,
          n * l,
          -n * (o * a + l * s) + a + t,
          -i * l,
          i * o,
          -i * (-l * a + o * s) + s + e,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(t, e) {
      const n = this.elements;
      return (
        (n[0] *= t),
        (n[3] *= t),
        (n[6] *= t),
        (n[1] *= e),
        (n[4] *= e),
        (n[7] *= e),
        this
      );
    }
    rotate(t) {
      const e = Math.cos(t),
        n = Math.sin(t),
        i = this.elements,
        r = i[0],
        a = i[3],
        s = i[6],
        o = i[1],
        l = i[4],
        c = i[7];
      return (
        (i[0] = e * r + n * o),
        (i[3] = e * a + n * l),
        (i[6] = e * s + n * c),
        (i[1] = -n * r + e * o),
        (i[4] = -n * a + e * l),
        (i[7] = -n * s + e * c),
        this
      );
    }
    translate(t, e) {
      const n = this.elements;
      return (
        (n[0] += t * n[2]),
        (n[3] += t * n[5]),
        (n[6] += t * n[8]),
        (n[1] += e * n[2]),
        (n[4] += e * n[5]),
        (n[7] += e * n[8]),
        this
      );
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        t
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  function J(t) {
    for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
    return !1;
  }
  function K(t) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t);
  }
  function Q(t) {
    return t < 0.04045
      ? 0.0773993808 * t
      : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
  }
  function $(t) {
    return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
  }
  const tt = { [D]: { [I]: Q }, [I]: { [D]: $ } },
    et = {
      legacyMode: !0,
      get workingColorSpace() {
        return I;
      },
      set workingColorSpace(t) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
      },
      convert: function (t, e, n) {
        if (this.legacyMode || e === n || !e || !n) return t;
        if (tt[e] && void 0 !== tt[e][n]) {
          const i = tt[e][n];
          return (t.r = i(t.r)), (t.g = i(t.g)), (t.b = i(t.b)), t;
        }
        throw new Error("Unsupported color space conversion.");
      },
      fromWorkingColorSpace: function (t, e) {
        return this.convert(t, this.workingColorSpace, e);
      },
      toWorkingColorSpace: function (t, e) {
        return this.convert(t, e, this.workingColorSpace);
      },
    },
    nt = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    it = { r: 0, g: 0, b: 0 },
    rt = { h: 0, s: 0, l: 0 },
    at = { h: 0, s: 0, l: 0 };
  function st(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
        ? e
        : n < 2 / 3
        ? t + 6 * (e - t) * (2 / 3 - n)
        : t
    );
  }
  function ot(t, e) {
    return (e.r = t.r), (e.g = t.g), (e.b = t.b), e;
  }
  class lt {
    constructor(t, e, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
      );
    }
    set(t) {
      return (
        t && t.isColor
          ? this.copy(t)
          : "number" == typeof t
          ? this.setHex(t)
          : "string" == typeof t && this.setStyle(t),
        this
      );
    }
    setScalar(t) {
      return (this.r = t), (this.g = t), (this.b = t), this;
    }
    setHex(t, e = "srgb") {
      return (
        (t = Math.floor(t)),
        (this.r = ((t >> 16) & 255) / 255),
        (this.g = ((t >> 8) & 255) / 255),
        (this.b = (255 & t) / 255),
        et.toWorkingColorSpace(this, e),
        this
      );
    }
    setRGB(t, e, n, i = "srgb-linear") {
      return (
        (this.r = t),
        (this.g = e),
        (this.b = n),
        et.toWorkingColorSpace(this, i),
        this
      );
    }
    setHSL(t, e, n, i = "srgb-linear") {
      var r;
      if (
        ((t = ((t % (r = 1)) + r) % r),
        (e = V(e, 0, 1)),
        (n = V(n, 0, 1)),
        0 === e)
      )
        this.r = this.g = this.b = n;
      else {
        const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
          r = 2 * n - i;
        (this.r = st(r, i, t + 1 / 3)),
          (this.g = st(r, i, t)),
          (this.b = st(r, i, t - 1 / 3));
      }
      return et.toWorkingColorSpace(this, i), this;
    }
    setStyle(t, e = "srgb") {
      function n(e) {
        void 0 !== e &&
          parseFloat(e) < 1 &&
          console.warn(
            "THREE.Color: Alpha component of " + t + " will be ignored."
          );
      }
      let i;
      if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
        let t;
        const r = i[1],
          a = i[2];
        switch (r) {
          case "rgb":
          case "rgba":
            if (
              (t =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            )
              return (
                (this.r = Math.min(255, parseInt(t[1], 10)) / 255),
                (this.g = Math.min(255, parseInt(t[2], 10)) / 255),
                (this.b = Math.min(255, parseInt(t[3], 10)) / 255),
                et.toWorkingColorSpace(this, e),
                n(t[4]),
                this
              );
            if (
              (t =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            )
              return (
                (this.r = Math.min(100, parseInt(t[1], 10)) / 100),
                (this.g = Math.min(100, parseInt(t[2], 10)) / 100),
                (this.b = Math.min(100, parseInt(t[3], 10)) / 100),
                et.toWorkingColorSpace(this, e),
                n(t[4]),
                this
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (t =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            ) {
              const i = parseFloat(t[1]) / 360,
                r = parseFloat(t[2]) / 100,
                a = parseFloat(t[3]) / 100;
              return n(t[4]), this.setHSL(i, r, a, e);
            }
        }
      } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
        const t = i[1],
          n = t.length;
        if (3 === n)
          return (
            (this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
            (this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
            (this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
            et.toWorkingColorSpace(this, e),
            this
          );
        if (6 === n)
          return (
            (this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
            (this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
            (this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
            et.toWorkingColorSpace(this, e),
            this
          );
      }
      return t && t.length > 0 ? this.setColorName(t, e) : this;
    }
    setColorName(t, e = "srgb") {
      const n = nt[t.toLowerCase()];
      return (
        void 0 !== n
          ? this.setHex(n, e)
          : console.warn("THREE.Color: Unknown color " + t),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
      return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
    }
    copySRGBToLinear(t) {
      return (this.r = Q(t.r)), (this.g = Q(t.g)), (this.b = Q(t.b)), this;
    }
    copyLinearToSRGB(t) {
      return (this.r = $(t.r)), (this.g = $(t.g)), (this.b = $(t.b)), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t = "srgb") {
      return (
        et.fromWorkingColorSpace(ot(this, it), t),
        (V(255 * it.r, 0, 255) << 16) ^
          (V(255 * it.g, 0, 255) << 8) ^
          (V(255 * it.b, 0, 255) << 0)
      );
    }
    getHexString(t = "srgb") {
      return ("000000" + this.getHex(t).toString(16)).slice(-6);
    }
    getHSL(t, e = "srgb-linear") {
      et.fromWorkingColorSpace(ot(this, it), e);
      const n = it.r,
        i = it.g,
        r = it.b,
        a = Math.max(n, i, r),
        s = Math.min(n, i, r);
      let o, l;
      const c = (s + a) / 2;
      if (s === a) (o = 0), (l = 0);
      else {
        const t = a - s;
        switch (((l = c <= 0.5 ? t / (a + s) : t / (2 - a - s)), a)) {
          case n:
            o = (i - r) / t + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / t + 2;
            break;
          case r:
            o = (n - i) / t + 4;
        }
        o /= 6;
      }
      return (t.h = o), (t.s = l), (t.l = c), t;
    }
    getRGB(t, e = "srgb-linear") {
      return (
        et.fromWorkingColorSpace(ot(this, it), e),
        (t.r = it.r),
        (t.g = it.g),
        (t.b = it.b),
        t
      );
    }
    getStyle(t = "srgb") {
      return (
        et.fromWorkingColorSpace(ot(this, it), t),
        t !== D
          ? `color(${t} ${it.r} ${it.g} ${it.b})`
          : `rgb(${(255 * it.r) | 0},${(255 * it.g) | 0},${(255 * it.b) | 0})`
      );
    }
    offsetHSL(t, e, n) {
      return (
        this.getHSL(rt),
        (rt.h += t),
        (rt.s += e),
        (rt.l += n),
        this.setHSL(rt.h, rt.s, rt.l),
        this
      );
    }
    add(t) {
      return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
    }
    addColors(t, e) {
      return (
        (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
      );
    }
    addScalar(t) {
      return (this.r += t), (this.g += t), (this.b += t), this;
    }
    sub(t) {
      return (
        (this.r = Math.max(0, this.r - t.r)),
        (this.g = Math.max(0, this.g - t.g)),
        (this.b = Math.max(0, this.b - t.b)),
        this
      );
    }
    multiply(t) {
      return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
    }
    multiplyScalar(t) {
      return (this.r *= t), (this.g *= t), (this.b *= t), this;
    }
    lerp(t, e) {
      return (
        (this.r += (t.r - this.r) * e),
        (this.g += (t.g - this.g) * e),
        (this.b += (t.b - this.b) * e),
        this
      );
    }
    lerpColors(t, e, n) {
      return (
        (this.r = t.r + (e.r - t.r) * n),
        (this.g = t.g + (e.g - t.g) * n),
        (this.b = t.b + (e.b - t.b) * n),
        this
      );
    }
    lerpHSL(t, e) {
      this.getHSL(rt), t.getHSL(at);
      const n = k(rt.h, at.h, e),
        i = k(rt.s, at.s, e),
        r = k(rt.l, at.l, e);
      return this.setHSL(n, i, r), this;
    }
    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
      return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  let ct;
  lt.NAMES = nt;
  class ht {
    static getDataURL(t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ("undefined" == typeof HTMLCanvasElement) return t.src;
      let e;
      if (t instanceof HTMLCanvasElement) e = t;
      else {
        void 0 === ct && (ct = K("canvas")),
          (ct.width = t.width),
          (ct.height = t.height);
        const n = ct.getContext("2d");
        t instanceof ImageData
          ? n.putImageData(t, 0, 0)
          : n.drawImage(t, 0, 0, t.width, t.height),
          (e = ct);
      }
      return e.width > 2048 || e.height > 2048
        ? (console.warn(
            "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
            t
          ),
          e.toDataURL("image/jpeg", 0.6))
        : e.toDataURL("image/png");
    }
    static sRGBToLinear(t) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          t instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
      ) {
        const e = K("canvas");
        (e.width = t.width), (e.height = t.height);
        const n = e.getContext("2d");
        n.drawImage(t, 0, 0, t.width, t.height);
        const i = n.getImageData(0, 0, t.width, t.height),
          r = i.data;
        for (let t = 0; t < r.length; t++) r[t] = 255 * Q(r[t] / 255);
        return n.putImageData(i, 0, 0), e;
      }
      if (t.data) {
        const e = t.data.slice(0);
        for (let t = 0; t < e.length; t++)
          e instanceof Uint8Array || e instanceof Uint8ClampedArray
            ? (e[t] = Math.floor(255 * Q(e[t] / 255)))
            : (e[t] = Q(e[t]));
        return { data: e, width: t.width, height: t.height };
      }
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        t
      );
    }
  }
  class ut {
    constructor(t = null) {
      (this.isSource = !0),
        (this.uuid = H()),
        (this.data = t),
        (this.version = 0);
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
      const n = { uuid: this.uuid, url: "" },
        i = this.data;
      if (null !== i) {
        let t;
        if (Array.isArray(i)) {
          t = [];
          for (let e = 0, n = i.length; e < n; e++)
            i[e].isDataTexture ? t.push(dt(i[e].image)) : t.push(dt(i[e]));
        } else t = dt(i);
        n.url = t;
      }
      return e || (t.images[this.uuid] = n), n;
    }
  }
  function dt(t) {
    return ("undefined" != typeof HTMLImageElement &&
      t instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
      ? ht.getDataURL(t)
      : t.data
      ? {
          data: Array.from(t.data),
          width: t.width,
          height: t.height,
          type: t.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let pt = 0;
  class mt extends U {
    constructor(
      t = mt.DEFAULT_IMAGE,
      e = mt.DEFAULT_MAPPING,
      n = 1001,
      i = 1001,
      r = 1006,
      a = 1008,
      s = 1023,
      o = 1009,
      l = 1,
      c = 3e3
    ) {
      super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: pt++ }),
        (this.uuid = H()),
        (this.name = ""),
        (this.source = new ut(t)),
        (this.mipmaps = []),
        (this.mapping = e),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = r),
        (this.minFilter = a),
        (this.anisotropy = l),
        (this.format = s),
        (this.internalFormat = null),
        (this.type = o),
        (this.offset = new Y(0, 0)),
        (this.repeat = new Y(1, 1)),
        (this.center = new Y(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new Z()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = c),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1),
        (this.needsPMREMUpdate = !1);
    }
    get image() {
      return this.source.data;
    }
    set image(t) {
      this.source.data = t;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.source = t.source),
        (this.mipmaps = t.mipmaps.slice(0)),
        (this.mapping = t.mapping),
        (this.wrapS = t.wrapS),
        (this.wrapT = t.wrapT),
        (this.magFilter = t.magFilter),
        (this.minFilter = t.minFilter),
        (this.anisotropy = t.anisotropy),
        (this.format = t.format),
        (this.internalFormat = t.internalFormat),
        (this.type = t.type),
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        (this.rotation = t.rotation),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this.matrix.copy(t.matrix),
        (this.generateMipmaps = t.generateMipmaps),
        (this.premultiplyAlpha = t.premultiplyAlpha),
        (this.flipY = t.flipY),
        (this.unpackAlignment = t.unpackAlignment),
        (this.encoding = t.encoding),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(t).uuid,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        e || (t.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t) {
      if (300 !== this.mapping) return t;
      if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
        switch (this.wrapS) {
          case d:
            t.x = t.x - Math.floor(t.x);
            break;
          case p:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case m:
            1 === Math.abs(Math.floor(t.x) % 2)
              ? (t.x = Math.ceil(t.x) - t.x)
              : (t.x = t.x - Math.floor(t.x));
        }
      if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
          case d:
            t.y = t.y - Math.floor(t.y);
            break;
          case p:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case m:
            1 === Math.abs(Math.floor(t.y) % 2)
              ? (t.y = Math.ceil(t.y) - t.y)
              : (t.y = t.y - Math.floor(t.y));
        }
      return this.flipY && (t.y = 1 - t.y), t;
    }
    set needsUpdate(t) {
      !0 === t && (this.version++, (this.source.needsUpdate = !0));
    }
  }
  (mt.DEFAULT_IMAGE = null), (mt.DEFAULT_MAPPING = 300);
  class ft {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (ft.prototype.isVector4 = !0),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        (this.w = i);
    }
    get width() {
      return this.z;
    }
    set width(t) {
      this.z = t;
    }
    get height() {
      return this.w;
    }
    set height(t) {
      this.w = t;
    }
    set(t, e, n, i) {
      return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setW(t) {
      return (this.w = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
      return (
        (this.x = t.x),
        (this.y = t.y),
        (this.z = t.z),
        (this.w = void 0 !== t.w ? t.w : 1),
        this
      );
    }
    add(t) {
      return (
        (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
      );
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x),
        (this.y = t.y + e.y),
        (this.z = t.z + e.z),
        (this.w = t.w + e.w),
        this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e),
        (this.y += t.y * e),
        (this.z += t.z * e),
        (this.w += t.w * e),
        this
      );
    }
    sub(t) {
      return (
        (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
      );
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x),
        (this.y = t.y - e.y),
        (this.z = t.z - e.z),
        (this.w = t.w - e.w),
        this
      );
    }
    multiply(t) {
      return (
        (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
      );
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = this.w,
        a = t.elements;
      return (
        (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
        (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
        (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
        (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
        this
      );
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      const e = Math.sqrt(1 - t.w * t.w);
      return (
        e < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(t) {
      let e, n, i, r;
      const a = 0.01,
        s = 0.1,
        o = t.elements,
        l = o[0],
        c = o[4],
        h = o[8],
        u = o[1],
        d = o[5],
        p = o[9],
        m = o[2],
        f = o[6],
        g = o[10];
      if (Math.abs(c - u) < a && Math.abs(h - m) < a && Math.abs(p - f) < a) {
        if (
          Math.abs(c + u) < s &&
          Math.abs(h + m) < s &&
          Math.abs(p + f) < s &&
          Math.abs(l + d + g - 3) < s
        )
          return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t = (l + 1) / 2,
          o = (d + 1) / 2,
          _ = (g + 1) / 2,
          v = (c + u) / 4,
          x = (h + m) / 4,
          M = (p + f) / 4;
        return (
          t > o && t > _
            ? t < a
              ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
              : ((n = Math.sqrt(t)), (i = v / n), (r = x / n))
            : o > _
            ? o < a
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(o)), (n = v / i), (r = M / i))
            : _ < a
            ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
            : ((r = Math.sqrt(_)), (n = x / r), (i = M / r)),
          this.set(n, i, r, e),
          this
        );
      }
      let _ = Math.sqrt(
        (f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c)
      );
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (f - p) / _),
        (this.y = (h - m) / _),
        (this.z = (u - c) / _),
        (this.w = Math.acos((l + d + g - 1) / 2)),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        (this.w = Math.min(this.w, t.w)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        (this.w = Math.max(this.w, t.w)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        (this.w = Math.max(t.w, Math.min(e.w, this.w))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        (this.w = Math.max(t, Math.min(e, this.w))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        (this.w += (t.w - this.w) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        (this.w = t.w + (e.w - t.w) * n),
        this
      );
    }
    equals(t) {
      return (
        t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this.x = t[e]),
        (this.y = t[e + 1]),
        (this.z = t[e + 2]),
        (this.w = t[e + 3]),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this.x),
        (t[e + 1] = this.y),
        (t[e + 2] = this.z),
        (t[e + 3] = this.w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        (this.z = t.getZ(e)),
        (this.w = t.getW(e)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class gt extends U {
    constructor(t, e, n = {}) {
      super(),
        (this.isWebGLRenderTarget = !0),
        (this.width = t),
        (this.height = e),
        (this.depth = 1),
        (this.scissor = new ft(0, 0, t, e)),
        (this.scissorTest = !1),
        (this.viewport = new ft(0, 0, t, e));
      const i = { width: t, height: e, depth: 1 };
      (this.texture = new mt(
        i,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.encoding
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.flipY = !1),
        (this.texture.generateMipmaps =
          void 0 !== n.generateMipmaps && n.generateMipmaps),
        (this.texture.internalFormat =
          void 0 !== n.internalFormat ? n.internalFormat : null),
        (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : g),
        (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
        (this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
        (this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null),
        (this.samples = void 0 !== n.samples ? n.samples : 0);
    }
    setSize(t, e, n = 1) {
      (this.width === t && this.height === e && this.depth === n) ||
        ((this.width = t),
        (this.height = e),
        (this.depth = n),
        (this.texture.image.width = t),
        (this.texture.image.height = e),
        (this.texture.image.depth = n),
        this.dispose()),
        this.viewport.set(0, 0, t, e),
        this.scissor.set(0, 0, t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.width = t.width),
        (this.height = t.height),
        (this.depth = t.depth),
        this.viewport.copy(t.viewport),
        (this.texture = t.texture.clone()),
        (this.texture.isRenderTargetTexture = !0);
      const e = Object.assign({}, t.texture.image);
      return (
        (this.texture.source = new ut(e)),
        (this.depthBuffer = t.depthBuffer),
        (this.stencilBuffer = t.stencilBuffer),
        null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
        (this.samples = t.samples),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class _t extends mt {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = f),
        (this.minFilter = f),
        (this.wrapR = p),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class vt extends mt {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = f),
        (this.minFilter = f),
        (this.wrapR = p),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class xt {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (this.isQuaternion = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i);
    }
    static slerpFlat(t, e, n, i, r, a, s) {
      let o = n[i + 0],
        l = n[i + 1],
        c = n[i + 2],
        h = n[i + 3];
      const u = r[a + 0],
        d = r[a + 1],
        p = r[a + 2],
        m = r[a + 3];
      if (0 === s)
        return (
          (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
        );
      if (1 === s)
        return (
          (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = m)
        );
      if (h !== m || o !== u || l !== d || c !== p) {
        let t = 1 - s;
        const e = o * u + l * d + c * p + h * m,
          n = e >= 0 ? 1 : -1,
          i = 1 - e * e;
        if (i > Number.EPSILON) {
          const r = Math.sqrt(i),
            a = Math.atan2(r, e * n);
          (t = Math.sin(t * a) / r), (s = Math.sin(s * a) / r);
        }
        const r = s * n;
        if (
          ((o = o * t + u * r),
          (l = l * t + d * r),
          (c = c * t + p * r),
          (h = h * t + m * r),
          t === 1 - s)
        ) {
          const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          (o *= t), (l *= t), (c *= t), (h *= t);
        }
      }
      (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
    }
    static multiplyQuaternionsFlat(t, e, n, i, r, a) {
      const s = n[i],
        o = n[i + 1],
        l = n[i + 2],
        c = n[i + 3],
        h = r[a],
        u = r[a + 1],
        d = r[a + 2],
        p = r[a + 3];
      return (
        (t[e] = s * p + c * h + o * d - l * u),
        (t[e + 1] = o * p + c * u + l * h - s * d),
        (t[e + 2] = l * p + c * d + s * u - o * h),
        (t[e + 3] = c * p - s * h - o * u - l * d),
        t
      );
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t) {
      (this._w = t), this._onChangeCallback();
    }
    set(t, e, n, i) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
      return (
        (this._x = t.x),
        (this._y = t.y),
        (this._z = t.z),
        (this._w = t.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(t, e) {
      const n = t._x,
        i = t._y,
        r = t._z,
        a = t._order,
        s = Math.cos,
        o = Math.sin,
        l = s(n / 2),
        c = s(i / 2),
        h = s(r / 2),
        u = o(n / 2),
        d = o(i / 2),
        p = o(r / 2);
      switch (a) {
        case "XYZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "YXZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "ZXY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "ZYX":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "YZX":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "XZY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        default:
          console.warn(
            "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
              a
          );
      }
      return !1 !== e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t, e) {
      const n = e / 2,
        i = Math.sin(n);
      return (
        (this._x = t.x * i),
        (this._y = t.y * i),
        (this._z = t.z * i),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t) {
      const e = t.elements,
        n = e[0],
        i = e[4],
        r = e[8],
        a = e[1],
        s = e[5],
        o = e[9],
        l = e[2],
        c = e[6],
        h = e[10],
        u = n + s + h;
      if (u > 0) {
        const t = 0.5 / Math.sqrt(u + 1);
        (this._w = 0.25 / t),
          (this._x = (c - o) * t),
          (this._y = (r - l) * t),
          (this._z = (a - i) * t);
      } else if (n > s && n > h) {
        const t = 2 * Math.sqrt(1 + n - s - h);
        (this._w = (c - o) / t),
          (this._x = 0.25 * t),
          (this._y = (i + a) / t),
          (this._z = (r + l) / t);
      } else if (s > h) {
        const t = 2 * Math.sqrt(1 + s - n - h);
        (this._w = (r - l) / t),
          (this._x = (i + a) / t),
          (this._y = 0.25 * t),
          (this._z = (o + c) / t);
      } else {
        const t = 2 * Math.sqrt(1 + h - n - s);
        (this._w = (a - i) / t),
          (this._x = (r + l) / t),
          (this._y = (o + c) / t),
          (this._z = 0.25 * t);
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t, e) {
      let n = t.dot(e) + 1;
      return (
        n < Number.EPSILON
          ? ((n = 0),
            Math.abs(t.x) > Math.abs(t.z)
              ? ((this._x = -t.y),
                (this._y = t.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -t.z),
                (this._z = t.y),
                (this._w = n)))
          : ((this._x = t.y * e.z - t.z * e.y),
            (this._y = t.z * e.x - t.x * e.z),
            (this._z = t.x * e.y - t.y * e.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(t) {
      return 2 * Math.acos(Math.abs(V(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
      const n = this.angleTo(t);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    }
    normalize() {
      let t = this.length();
      return (
        0 === t
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((t = 1 / t),
            (this._x = this._x * t),
            (this._y = this._y * t),
            (this._z = this._z * t),
            (this._w = this._w * t)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(t) {
      return this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
      return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
      const n = t._x,
        i = t._y,
        r = t._z,
        a = t._w,
        s = e._x,
        o = e._y,
        l = e._z,
        c = e._w;
      return (
        (this._x = n * c + a * s + i * l - r * o),
        (this._y = i * c + a * o + r * s - n * l),
        (this._z = r * c + a * l + n * o - i * s),
        (this._w = a * c - n * s - i * o - r * l),
        this._onChangeCallback(),
        this
      );
    }
    slerp(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      const n = this._x,
        i = this._y,
        r = this._z,
        a = this._w;
      let s = a * t._w + n * t._x + i * t._y + r * t._z;
      if (
        (s < 0
          ? ((this._w = -t._w),
            (this._x = -t._x),
            (this._y = -t._y),
            (this._z = -t._z),
            (s = -s))
          : this.copy(t),
        s >= 1)
      )
        return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
      const o = 1 - s * s;
      if (o <= Number.EPSILON) {
        const t = 1 - e;
        return (
          (this._w = t * a + e * this._w),
          (this._x = t * n + e * this._x),
          (this._y = t * i + e * this._y),
          (this._z = t * r + e * this._z),
          this.normalize(),
          this._onChangeCallback(),
          this
        );
      }
      const l = Math.sqrt(o),
        c = Math.atan2(l, s),
        h = Math.sin((1 - e) * c) / l,
        u = Math.sin(e * c) / l;
      return (
        (this._w = a * h + this._w * u),
        (this._x = n * h + this._x * u),
        (this._y = i * h + this._y * u),
        (this._z = r * h + this._z * u),
        this._onChangeCallback(),
        this
      );
    }
    slerpQuaternions(t, e, n) {
      return this.copy(t).slerp(e, n);
    }
    random() {
      const t = Math.random(),
        e = Math.sqrt(1 - t),
        n = Math.sqrt(t),
        i = 2 * Math.PI * Math.random(),
        r = 2 * Math.PI * Math.random();
      return this.set(
        e * Math.cos(i),
        n * Math.sin(r),
        n * Math.cos(r),
        e * Math.sin(i)
      );
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._w === this._w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this._x = t[e]),
        (this._y = t[e + 1]),
        (this._z = t[e + 2]),
        (this._w = t[e + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this._x = t.getX(e)),
        (this._y = t.getY(e)),
        (this._z = t.getZ(e)),
        (this._w = t.getW(e)),
        this
      );
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class Mt {
    constructor(t = 0, e = 0, n = 0) {
      (Mt.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n);
    }
    set(t, e, n) {
      return (
        void 0 === n && (n = this.z),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        this
      );
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
    }
    add(t) {
      return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
      );
    }
    sub(t) {
      return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
      );
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), this;
    }
    multiplyVectors(t, e) {
      return (
        (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
      );
    }
    applyEuler(t) {
      return this.applyQuaternion(bt.setFromEuler(t));
    }
    applyAxisAngle(t, e) {
      return this.applyQuaternion(bt.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[3] * n + r[6] * i),
        (this.y = r[1] * e + r[4] * n + r[7] * i),
        (this.z = r[2] * e + r[5] * n + r[8] * i),
        this
      );
    }
    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return (
        (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
        (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
        (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
        this
      );
    }
    applyQuaternion(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.x,
        a = t.y,
        s = t.z,
        o = t.w,
        l = o * e + a * i - s * n,
        c = o * n + s * e - r * i,
        h = o * i + r * n - a * e,
        u = -r * e - a * n - s * i;
      return (
        (this.x = l * o + u * -r + c * -s - h * -a),
        (this.y = c * o + u * -a + h * -r - l * -s),
        (this.z = h * o + u * -s + l * -a - c * -r),
        this
      );
    }
    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
        t.projectionMatrix
      );
    }
    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
        t.matrixWorld
      );
    }
    transformDirection(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[4] * n + r[8] * i),
        (this.y = r[1] * e + r[5] * n + r[9] * i),
        (this.z = r[2] * e + r[6] * n + r[10] * i),
        this.normalize()
      );
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        this
      );
    }
    cross(t) {
      return this.crossVectors(this, t);
    }
    crossVectors(t, e) {
      const n = t.x,
        i = t.y,
        r = t.z,
        a = e.x,
        s = e.y,
        o = e.z;
      return (
        (this.x = i * o - r * s),
        (this.y = r * a - n * o),
        (this.z = n * s - i * a),
        this
      );
    }
    projectOnVector(t) {
      const e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    }
    projectOnPlane(t) {
      return yt.copy(this).projectOnVector(t), this.sub(yt);
    }
    reflect(t) {
      return this.sub(yt.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(V(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y,
        i = this.z - t.z;
      return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t) {
      return (
        Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      );
    }
    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, n) {
      const i = Math.sin(e) * t;
      return (
        (this.x = i * Math.sin(n)),
        (this.y = Math.cos(e) * t),
        (this.z = i * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, n) {
      return (
        (this.x = t * Math.sin(e)),
        (this.y = n),
        (this.z = t * Math.cos(e)),
        this
      );
    }
    setFromMatrixPosition(t) {
      const e = t.elements;
      return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
    }
    setFromMatrixScale(t) {
      const e = this.setFromMatrixColumn(t, 0).length(),
        n = this.setFromMatrixColumn(t, 1).length(),
        i = this.setFromMatrixColumn(t, 2).length();
      return (this.x = e), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, 4 * e);
    }
    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, 3 * e);
    }
    setFromEuler(t) {
      return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      const t = 2 * (Math.random() - 0.5),
        e = Math.random() * Math.PI * 2,
        n = Math.sqrt(1 - t ** 2);
      return (
        (this.x = n * Math.cos(e)),
        (this.y = n * Math.sin(e)),
        (this.z = t),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const yt = new Mt(),
    bt = new xt();
  class St {
    constructor(
      t = new Mt(1 / 0, 1 / 0, 1 / 0),
      e = new Mt(-1 / 0, -1 / 0, -1 / 0)
    ) {
      (this.isBox3 = !0), (this.min = t), (this.max = e);
    }
    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }
    setFromArray(t) {
      let e = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        a = -1 / 0,
        s = -1 / 0;
      for (let o = 0, l = t.length; o < l; o += 3) {
        const l = t[o],
          c = t[o + 1],
          h = t[o + 2];
        l < e && (e = l),
          c < n && (n = c),
          h < i && (i = h),
          l > r && (r = l),
          c > a && (a = c),
          h > s && (s = h);
      }
      return this.min.set(e, n, i), this.max.set(r, a, s), this;
    }
    setFromBufferAttribute(t) {
      let e = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        a = -1 / 0,
        s = -1 / 0;
      for (let o = 0, l = t.count; o < l; o++) {
        const l = t.getX(o),
          c = t.getY(o),
          h = t.getZ(o);
        l < e && (e = l),
          c < n && (n = c),
          h < i && (i = h),
          l > r && (r = l),
          c > a && (a = c),
          h > s && (s = h);
      }
      return this.min.set(e, n, i), this.max.set(r, a, s), this;
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      const n = Tt.copy(e).multiplyScalar(0.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    }
    setFromObject(t, e = !1) {
      return this.makeEmpty(), this.expandByObject(t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(t) {
      return this.isEmpty()
        ? t.set(0, 0, 0)
        : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this;
    }
    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this;
    }
    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }
    expandByObject(t, e = !1) {
      t.updateWorldMatrix(!1, !1);
      const n = t.geometry;
      if (void 0 !== n)
        if (e && null != n.attributes && void 0 !== n.attributes.position) {
          const e = n.attributes.position;
          for (let n = 0, i = e.count; n < i; n++)
            Tt.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld),
              this.expandByPoint(Tt);
        } else
          null === n.boundingBox && n.computeBoundingBox(),
            Et.copy(n.boundingBox),
            Et.applyMatrix4(t.matrixWorld),
            this.union(Et);
      const i = t.children;
      for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
      return this;
    }
    containsPoint(t) {
      return !(
        t.x < this.min.x ||
        t.x > this.max.x ||
        t.y < this.min.y ||
        t.y > this.max.y ||
        t.z < this.min.z ||
        t.z > this.max.z
      );
    }
    containsBox(t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y &&
        this.min.z <= t.min.z &&
        t.max.z <= this.max.z
      );
    }
    getParameter(t, e) {
      return e.set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
        (t.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y ||
        t.max.z < this.min.z ||
        t.min.z > this.max.z
      );
    }
    intersectsSphere(t) {
      return (
        this.clampPoint(t.center, Tt),
        Tt.distanceToSquared(t.center) <= t.radius * t.radius
      );
    }
    intersectsPlane(t) {
      let e, n;
      return (
        t.normal.x > 0
          ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
          : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
        t.normal.y > 0
          ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
          : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
        t.normal.z > 0
          ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
          : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
        e <= -t.constant && n >= -t.constant
      );
    }
    intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      this.getCenter(It),
        Nt.subVectors(this.max, It),
        At.subVectors(t.a, It),
        Lt.subVectors(t.b, It),
        Ct.subVectors(t.c, It),
        Rt.subVectors(Lt, At),
        Pt.subVectors(Ct, Lt),
        Dt.subVectors(At, Ct);
      let e = [
        0,
        -Rt.z,
        Rt.y,
        0,
        -Pt.z,
        Pt.y,
        0,
        -Dt.z,
        Dt.y,
        Rt.z,
        0,
        -Rt.x,
        Pt.z,
        0,
        -Pt.x,
        Dt.z,
        0,
        -Dt.x,
        -Rt.y,
        Rt.x,
        0,
        -Pt.y,
        Pt.x,
        0,
        -Dt.y,
        Dt.x,
        0,
      ];
      return (
        !!Ut(e, At, Lt, Ct, Nt) &&
        ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        !!Ut(e, At, Lt, Ct, Nt) &&
          (Ot.crossVectors(Rt, Pt),
          (e = [Ot.x, Ot.y, Ot.z]),
          Ut(e, At, Lt, Ct, Nt)))
      );
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return Tt.copy(t).clamp(this.min, this.max).sub(t).length();
    }
    getBoundingSphere(t) {
      return (
        this.getCenter(t.center),
        (t.radius = 0.5 * this.getSize(Tt).length()),
        t
      );
    }
    intersect(t) {
      return (
        this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }
    applyMatrix4(t) {
      return (
        this.isEmpty() ||
          (wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
          wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
          wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
          wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
          wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
          wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
          wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
          wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
          this.setFromPoints(wt)),
        this
      );
    }
    translate(t) {
      return this.min.add(t), this.max.add(t), this;
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  }
  const wt = [
      new Mt(),
      new Mt(),
      new Mt(),
      new Mt(),
      new Mt(),
      new Mt(),
      new Mt(),
      new Mt(),
    ],
    Tt = new Mt(),
    Et = new St(),
    At = new Mt(),
    Lt = new Mt(),
    Ct = new Mt(),
    Rt = new Mt(),
    Pt = new Mt(),
    Dt = new Mt(),
    It = new Mt(),
    Nt = new Mt(),
    Ot = new Mt(),
    zt = new Mt();
  function Ut(t, e, n, i, r) {
    for (let a = 0, s = t.length - 3; a <= s; a += 3) {
      zt.fromArray(t, a);
      const s =
          r.x * Math.abs(zt.x) + r.y * Math.abs(zt.y) + r.z * Math.abs(zt.z),
        o = e.dot(zt),
        l = n.dot(zt),
        c = i.dot(zt);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
    }
    return !0;
  }
  const Ft = new St(),
    Bt = new Mt(),
    Gt = new Mt(),
    Ht = new Mt();
  class Vt {
    constructor(t = new Mt(), e = -1) {
      (this.center = t), (this.radius = e);
    }
    set(t, e) {
      return this.center.copy(t), (this.radius = e), this;
    }
    setFromPoints(t, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : Ft.setFromPoints(t).getCenter(n);
      let i = 0;
      for (let e = 0, r = t.length; e < r; e++)
        i = Math.max(i, n.distanceToSquared(t[e]));
      return (this.radius = Math.sqrt(i)), this;
    }
    copy(t) {
      return this.center.copy(t.center), (this.radius = t.radius), this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      const e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      const n = this.center.distanceToSquared(t);
      return (
        e.copy(t),
        n > this.radius * this.radius &&
          (e.sub(this.center).normalize(),
          e.multiplyScalar(this.radius).add(this.center)),
        e
      );
    }
    getBoundingBox(t) {
      return this.isEmpty()
        ? (t.makeEmpty(), t)
        : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }
    applyMatrix4(t) {
      return (
        this.center.applyMatrix4(t),
        (this.radius = this.radius * t.getMaxScaleOnAxis()),
        this
      );
    }
    translate(t) {
      return this.center.add(t), this;
    }
    expandByPoint(t) {
      Ht.subVectors(t, this.center);
      const e = Ht.lengthSq();
      if (e > this.radius * this.radius) {
        const t = Math.sqrt(e),
          n = 0.5 * (t - this.radius);
        this.center.add(Ht.multiplyScalar(n / t)), (this.radius += n);
      }
      return this;
    }
    union(t) {
      return (
        !0 === this.center.equals(t.center)
          ? Gt.set(0, 0, 1).multiplyScalar(t.radius)
          : Gt.subVectors(t.center, this.center)
              .normalize()
              .multiplyScalar(t.radius),
        this.expandByPoint(Bt.copy(t.center).add(Gt)),
        this.expandByPoint(Bt.copy(t.center).sub(Gt)),
        this
      );
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const kt = new Mt(),
    Wt = new Mt(),
    jt = new Mt(),
    Xt = new Mt(),
    qt = new Mt(),
    Yt = new Mt(),
    Zt = new Mt();
  class Jt {
    constructor(t = new Mt(), e = new Mt(0, 0, -1)) {
      (this.origin = t), (this.direction = e);
    }
    set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }
    copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }
    at(t, e) {
      return e.copy(this.direction).multiplyScalar(t).add(this.origin);
    }
    lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }
    recast(t) {
      return this.origin.copy(this.at(t, kt)), this;
    }
    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      const n = e.dot(this.direction);
      return n < 0
        ? e.copy(this.origin)
        : e.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      const e = kt.subVectors(t, this.origin).dot(this.direction);
      return e < 0
        ? this.origin.distanceToSquared(t)
        : (kt.copy(this.direction).multiplyScalar(e).add(this.origin),
          kt.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n, i) {
      Wt.copy(t).add(e).multiplyScalar(0.5),
        jt.copy(e).sub(t).normalize(),
        Xt.copy(this.origin).sub(Wt);
      const r = 0.5 * t.distanceTo(e),
        a = -this.direction.dot(jt),
        s = Xt.dot(this.direction),
        o = -Xt.dot(jt),
        l = Xt.lengthSq(),
        c = Math.abs(1 - a * a);
      let h, u, d, p;
      if (c > 0)
        if (((h = a * o - s), (u = a * s - o), (p = r * c), h >= 0))
          if (u >= -p)
            if (u <= p) {
              const t = 1 / c;
              (h *= t),
                (u *= t),
                (d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l);
            } else
              (u = r),
                (h = Math.max(0, -(a * u + s))),
                (d = -h * h + u * (u + 2 * o) + l);
          else
            (u = -r),
              (h = Math.max(0, -(a * u + s))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          u <= -p
            ? ((h = Math.max(0, -(-a * r + s))),
              (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l))
            : u <= p
            ? ((h = 0),
              (u = Math.min(Math.max(-r, -o), r)),
              (d = u * (u + 2 * o) + l))
            : ((h = Math.max(0, -(a * r + s))),
              (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l));
      else
        (u = a > 0 ? -r : r),
          (h = Math.max(0, -(a * u + s))),
          (d = -h * h + u * (u + 2 * o) + l);
      return (
        n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
        i && i.copy(jt).multiplyScalar(u).add(Wt),
        d
      );
    }
    intersectSphere(t, e) {
      kt.subVectors(t.center, this.origin);
      const n = kt.dot(this.direction),
        i = kt.dot(kt) - n * n,
        r = t.radius * t.radius;
      if (i > r) return null;
      const a = Math.sqrt(r - i),
        s = n - a,
        o = n + a;
      return s < 0 && o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e);
    }
    intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      const e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t, e) {
      const n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t) {
      const e = t.distanceToPoint(this.origin);
      if (0 === e) return !0;
      return t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let n, i, r, a, s, o;
      const l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return (
        l >= 0
          ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
          : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
        c >= 0
          ? ((r = (t.min.y - u.y) * c), (a = (t.max.y - u.y) * c))
          : ((r = (t.max.y - u.y) * c), (a = (t.min.y - u.y) * c)),
        n > a || r > i
          ? null
          : ((r > n || n != n) && (n = r),
            (a < i || i != i) && (i = a),
            h >= 0
              ? ((s = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
              : ((s = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
            n > o || s > i
              ? null
              : ((s > n || n != n) && (n = s),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, e)))
      );
    }
    intersectsBox(t) {
      return null !== this.intersectBox(t, kt);
    }
    intersectTriangle(t, e, n, i, r) {
      qt.subVectors(e, t), Yt.subVectors(n, t), Zt.crossVectors(qt, Yt);
      let a,
        s = this.direction.dot(Zt);
      if (s > 0) {
        if (i) return null;
        a = 1;
      } else {
        if (!(s < 0)) return null;
        (a = -1), (s = -s);
      }
      Xt.subVectors(this.origin, t);
      const o = a * this.direction.dot(Yt.crossVectors(Xt, Yt));
      if (o < 0) return null;
      const l = a * this.direction.dot(qt.cross(Xt));
      if (l < 0) return null;
      if (o + l > s) return null;
      const c = -a * Xt.dot(Zt);
      return c < 0 ? null : this.at(c / s, r);
    }
    applyMatrix4(t) {
      return (
        this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
      );
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Kt {
    constructor() {
      (Kt.prototype.isMatrix4 = !0),
        (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, m, f) {
      const g = this.elements;
      return (
        (g[0] = t),
        (g[4] = e),
        (g[8] = n),
        (g[12] = i),
        (g[1] = r),
        (g[5] = a),
        (g[9] = s),
        (g[13] = o),
        (g[2] = l),
        (g[6] = c),
        (g[10] = h),
        (g[14] = u),
        (g[3] = d),
        (g[7] = p),
        (g[11] = m),
        (g[15] = f),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new Kt().fromArray(this.elements);
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        (e[9] = n[9]),
        (e[10] = n[10]),
        (e[11] = n[11]),
        (e[12] = n[12]),
        (e[13] = n[13]),
        (e[14] = n[14]),
        (e[15] = n[15]),
        this
      );
    }
    copyPosition(t) {
      const e = this.elements,
        n = t.elements;
      return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
    }
    setFromMatrix3(t) {
      const e = t.elements;
      return (
        this.set(
          e[0],
          e[3],
          e[6],
          0,
          e[1],
          e[4],
          e[7],
          0,
          e[2],
          e[5],
          e[8],
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(t, e, n) {
      return (
        this.set(
          t.x,
          e.x,
          n.x,
          0,
          t.y,
          e.y,
          n.y,
          0,
          t.z,
          e.z,
          n.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractRotation(t) {
      const e = this.elements,
        n = t.elements,
        i = 1 / Qt.setFromMatrixColumn(t, 0).length(),
        r = 1 / Qt.setFromMatrixColumn(t, 1).length(),
        a = 1 / Qt.setFromMatrixColumn(t, 2).length();
      return (
        (e[0] = n[0] * i),
        (e[1] = n[1] * i),
        (e[2] = n[2] * i),
        (e[3] = 0),
        (e[4] = n[4] * r),
        (e[5] = n[5] * r),
        (e[6] = n[6] * r),
        (e[7] = 0),
        (e[8] = n[8] * a),
        (e[9] = n[9] * a),
        (e[10] = n[10] * a),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromEuler(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z,
        a = Math.cos(n),
        s = Math.sin(n),
        o = Math.cos(i),
        l = Math.sin(i),
        c = Math.cos(r),
        h = Math.sin(r);
      if ("XYZ" === t.order) {
        const t = a * c,
          n = a * h,
          i = s * c,
          r = s * h;
        (e[0] = o * c),
          (e[4] = -o * h),
          (e[8] = l),
          (e[1] = n + i * l),
          (e[5] = t - r * l),
          (e[9] = -s * o),
          (e[2] = r - t * l),
          (e[6] = i + n * l),
          (e[10] = a * o);
      } else if ("YXZ" === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t + r * s),
          (e[4] = i * s - n),
          (e[8] = a * l),
          (e[1] = a * h),
          (e[5] = a * c),
          (e[9] = -s),
          (e[2] = n * s - i),
          (e[6] = r + t * s),
          (e[10] = a * o);
      } else if ("ZXY" === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t - r * s),
          (e[4] = -a * h),
          (e[8] = i + n * s),
          (e[1] = n + i * s),
          (e[5] = a * c),
          (e[9] = r - t * s),
          (e[2] = -a * l),
          (e[6] = s),
          (e[10] = a * o);
      } else if ("ZYX" === t.order) {
        const t = a * c,
          n = a * h,
          i = s * c,
          r = s * h;
        (e[0] = o * c),
          (e[4] = i * l - n),
          (e[8] = t * l + r),
          (e[1] = o * h),
          (e[5] = r * l + t),
          (e[9] = n * l - i),
          (e[2] = -l),
          (e[6] = s * o),
          (e[10] = a * o);
      } else if ("YZX" === t.order) {
        const t = a * o,
          n = a * l,
          i = s * o,
          r = s * l;
        (e[0] = o * c),
          (e[4] = r - t * h),
          (e[8] = i * h + n),
          (e[1] = h),
          (e[5] = a * c),
          (e[9] = -s * c),
          (e[2] = -l * c),
          (e[6] = n * h + i),
          (e[10] = t - r * h);
      } else if ("XZY" === t.order) {
        const t = a * o,
          n = a * l,
          i = s * o,
          r = s * l;
        (e[0] = o * c),
          (e[4] = -h),
          (e[8] = l * c),
          (e[1] = t * h + r),
          (e[5] = a * c),
          (e[9] = n * h - i),
          (e[2] = i * h - n),
          (e[6] = s * c),
          (e[10] = r * h + t);
      }
      return (
        (e[3] = 0),
        (e[7] = 0),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(t) {
      return this.compose(te, t, ee);
    }
    lookAt(t, e, n) {
      const i = this.elements;
      return (
        re.subVectors(t, e),
        0 === re.lengthSq() && (re.z = 1),
        re.normalize(),
        ne.crossVectors(n, re),
        0 === ne.lengthSq() &&
          (1 === Math.abs(n.z) ? (re.x += 1e-4) : (re.z += 1e-4),
          re.normalize(),
          ne.crossVectors(n, re)),
        ne.normalize(),
        ie.crossVectors(re, ne),
        (i[0] = ne.x),
        (i[4] = ie.x),
        (i[8] = re.x),
        (i[1] = ne.y),
        (i[5] = ie.y),
        (i[9] = re.y),
        (i[2] = ne.z),
        (i[6] = ie.z),
        (i[10] = re.z),
        this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        s = n[4],
        o = n[8],
        l = n[12],
        c = n[1],
        h = n[5],
        u = n[9],
        d = n[13],
        p = n[2],
        m = n[6],
        f = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        x = n[11],
        M = n[15],
        y = i[0],
        b = i[4],
        S = i[8],
        w = i[12],
        T = i[1],
        E = i[5],
        A = i[9],
        L = i[13],
        C = i[2],
        R = i[6],
        P = i[10],
        D = i[14],
        I = i[3],
        N = i[7],
        O = i[11],
        z = i[15];
      return (
        (r[0] = a * y + s * T + o * C + l * I),
        (r[4] = a * b + s * E + o * R + l * N),
        (r[8] = a * S + s * A + o * P + l * O),
        (r[12] = a * w + s * L + o * D + l * z),
        (r[1] = c * y + h * T + u * C + d * I),
        (r[5] = c * b + h * E + u * R + d * N),
        (r[9] = c * S + h * A + u * P + d * O),
        (r[13] = c * w + h * L + u * D + d * z),
        (r[2] = p * y + m * T + f * C + g * I),
        (r[6] = p * b + m * E + f * R + g * N),
        (r[10] = p * S + m * A + f * P + g * O),
        (r[14] = p * w + m * L + f * D + g * z),
        (r[3] = _ * y + v * T + x * C + M * I),
        (r[7] = _ * b + v * E + x * R + M * N),
        (r[11] = _ * S + v * A + x * P + M * O),
        (r[15] = _ * w + v * L + x * D + M * z),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[4] *= t),
        (e[8] *= t),
        (e[12] *= t),
        (e[1] *= t),
        (e[5] *= t),
        (e[9] *= t),
        (e[13] *= t),
        (e[2] *= t),
        (e[6] *= t),
        (e[10] *= t),
        (e[14] *= t),
        (e[3] *= t),
        (e[7] *= t),
        (e[11] *= t),
        (e[15] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[4],
        i = t[8],
        r = t[12],
        a = t[1],
        s = t[5],
        o = t[9],
        l = t[13],
        c = t[2],
        h = t[6],
        u = t[10],
        d = t[14];
      return (
        t[3] *
          (+r * o * h -
            i * l * h -
            r * s * u +
            n * l * u +
            i * s * d -
            n * o * d) +
        t[7] *
          (+e * o * d -
            e * l * u +
            r * a * u -
            i * a * d +
            i * l * c -
            r * o * c) +
        t[11] *
          (+e * l * h -
            e * s * d -
            r * a * h +
            n * a * d +
            r * s * c -
            n * l * c) +
        t[15] *
          (-i * s * c -
            e * o * h +
            e * s * u +
            i * a * h -
            n * a * u +
            n * o * c)
      );
    }
    transpose() {
      const t = this.elements;
      let e;
      return (
        (e = t[1]),
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    }
    setPosition(t, e, n) {
      const i = this.elements;
      return (
        t.isVector3
          ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
          : ((i[12] = t), (i[13] = e), (i[14] = n)),
        this
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = t[9],
        u = t[10],
        d = t[11],
        p = t[12],
        m = t[13],
        f = t[14],
        g = t[15],
        _ =
          h * f * l - m * u * l + m * o * d - s * f * d - h * o * g + s * u * g,
        v =
          p * u * l - c * f * l - p * o * d + a * f * d + c * o * g - a * u * g,
        x =
          c * m * l - p * h * l + p * s * d - a * m * d - c * s * g + a * h * g,
        M =
          p * h * o - c * m * o - p * s * u + a * m * u + c * s * f - a * h * f,
        y = e * _ + n * v + i * x + r * M;
      if (0 === y)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const b = 1 / y;
      return (
        (t[0] = _ * b),
        (t[1] =
          (m * u * r -
            h * f * r -
            m * i * d +
            n * f * d +
            h * i * g -
            n * u * g) *
          b),
        (t[2] =
          (s * f * r -
            m * o * r +
            m * i * l -
            n * f * l -
            s * i * g +
            n * o * g) *
          b),
        (t[3] =
          (h * o * r -
            s * u * r -
            h * i * l +
            n * u * l +
            s * i * d -
            n * o * d) *
          b),
        (t[4] = v * b),
        (t[5] =
          (c * f * r -
            p * u * r +
            p * i * d -
            e * f * d -
            c * i * g +
            e * u * g) *
          b),
        (t[6] =
          (p * o * r -
            a * f * r -
            p * i * l +
            e * f * l +
            a * i * g -
            e * o * g) *
          b),
        (t[7] =
          (a * u * r -
            c * o * r +
            c * i * l -
            e * u * l -
            a * i * d +
            e * o * d) *
          b),
        (t[8] = x * b),
        (t[9] =
          (p * h * r -
            c * m * r -
            p * n * d +
            e * m * d +
            c * n * g -
            e * h * g) *
          b),
        (t[10] =
          (a * m * r -
            p * s * r +
            p * n * l -
            e * m * l -
            a * n * g +
            e * s * g) *
          b),
        (t[11] =
          (c * s * r -
            a * h * r -
            c * n * l +
            e * h * l +
            a * n * d -
            e * s * d) *
          b),
        (t[12] = M * b),
        (t[13] =
          (c * m * i -
            p * h * i +
            p * n * u -
            e * m * u -
            c * n * f +
            e * h * f) *
          b),
        (t[14] =
          (p * s * i -
            a * m * i -
            p * n * o +
            e * m * o +
            a * n * f -
            e * s * f) *
          b),
        (t[15] =
          (a * h * i -
            c * s * i +
            c * n * o -
            e * h * o -
            a * n * u +
            e * s * u) *
          b),
        this
      );
    }
    scale(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z;
      return (
        (e[0] *= n),
        (e[4] *= i),
        (e[8] *= r),
        (e[1] *= n),
        (e[5] *= i),
        (e[9] *= r),
        (e[2] *= n),
        (e[6] *= i),
        (e[10] *= r),
        (e[3] *= n),
        (e[7] *= i),
        (e[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      const t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t, e, n) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = 1 - n,
        a = t.x,
        s = t.y,
        o = t.z,
        l = r * a,
        c = r * s;
      return (
        this.set(
          l * a + n,
          l * s - i * o,
          l * o + i * s,
          0,
          l * s + i * o,
          c * s + n,
          c * o - i * a,
          0,
          l * o - i * s,
          c * o + i * a,
          r * o * o + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(t, e, n) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t, e, n, i, r, a) {
      return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t, e, n) {
      const i = this.elements,
        r = e._x,
        a = e._y,
        s = e._z,
        o = e._w,
        l = r + r,
        c = a + a,
        h = s + s,
        u = r * l,
        d = r * c,
        p = r * h,
        m = a * c,
        f = a * h,
        g = s * h,
        _ = o * l,
        v = o * c,
        x = o * h,
        M = n.x,
        y = n.y,
        b = n.z;
      return (
        (i[0] = (1 - (m + g)) * M),
        (i[1] = (d + x) * M),
        (i[2] = (p - v) * M),
        (i[3] = 0),
        (i[4] = (d - x) * y),
        (i[5] = (1 - (u + g)) * y),
        (i[6] = (f + _) * y),
        (i[7] = 0),
        (i[8] = (p + v) * b),
        (i[9] = (f - _) * b),
        (i[10] = (1 - (u + m)) * b),
        (i[11] = 0),
        (i[12] = t.x),
        (i[13] = t.y),
        (i[14] = t.z),
        (i[15] = 1),
        this
      );
    }
    decompose(t, e, n) {
      const i = this.elements;
      let r = Qt.set(i[0], i[1], i[2]).length();
      const a = Qt.set(i[4], i[5], i[6]).length(),
        s = Qt.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r),
        (t.x = i[12]),
        (t.y = i[13]),
        (t.z = i[14]),
        $t.copy(this);
      const o = 1 / r,
        l = 1 / a,
        c = 1 / s;
      return (
        ($t.elements[0] *= o),
        ($t.elements[1] *= o),
        ($t.elements[2] *= o),
        ($t.elements[4] *= l),
        ($t.elements[5] *= l),
        ($t.elements[6] *= l),
        ($t.elements[8] *= c),
        ($t.elements[9] *= c),
        ($t.elements[10] *= c),
        e.setFromRotationMatrix($t),
        (n.x = r),
        (n.y = a),
        (n.z = s),
        this
      );
    }
    makePerspective(t, e, n, i, r, a) {
      const s = this.elements,
        o = (2 * r) / (e - t),
        l = (2 * r) / (n - i),
        c = (e + t) / (e - t),
        h = (n + i) / (n - i),
        u = -(a + r) / (a - r),
        d = (-2 * a * r) / (a - r);
      return (
        (s[0] = o),
        (s[4] = 0),
        (s[8] = c),
        (s[12] = 0),
        (s[1] = 0),
        (s[5] = l),
        (s[9] = h),
        (s[13] = 0),
        (s[2] = 0),
        (s[6] = 0),
        (s[10] = u),
        (s[14] = d),
        (s[3] = 0),
        (s[7] = 0),
        (s[11] = -1),
        (s[15] = 0),
        this
      );
    }
    makeOrthographic(t, e, n, i, r, a) {
      const s = this.elements,
        o = 1 / (e - t),
        l = 1 / (n - i),
        c = 1 / (a - r),
        h = (e + t) * o,
        u = (n + i) * l,
        d = (a + r) * c;
      return (
        (s[0] = 2 * o),
        (s[4] = 0),
        (s[8] = 0),
        (s[12] = -h),
        (s[1] = 0),
        (s[5] = 2 * l),
        (s[9] = 0),
        (s[13] = -u),
        (s[2] = 0),
        (s[6] = 0),
        (s[10] = -2 * c),
        (s[14] = -d),
        (s[3] = 0),
        (s[7] = 0),
        (s[11] = 0),
        (s[15] = 1),
        this
      );
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        (t[e + 9] = n[9]),
        (t[e + 10] = n[10]),
        (t[e + 11] = n[11]),
        (t[e + 12] = n[12]),
        (t[e + 13] = n[13]),
        (t[e + 14] = n[14]),
        (t[e + 15] = n[15]),
        t
      );
    }
  }
  const Qt = new Mt(),
    $t = new Kt(),
    te = new Mt(0, 0, 0),
    ee = new Mt(1, 1, 1),
    ne = new Mt(),
    ie = new Mt(),
    re = new Mt(),
    ae = new Kt(),
    se = new xt();
  class oe {
    constructor(t = 0, e = 0, n = 0, i = oe.DefaultOrder) {
      (this.isEuler = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i);
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t) {
      (this._order = t), this._onChangeCallback();
    }
    set(t, e, n, i = this._order) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return (
        (this._x = t._x),
        (this._y = t._y),
        (this._z = t._z),
        (this._order = t._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t, e = this._order, n = !0) {
      const i = t.elements,
        r = i[0],
        a = i[4],
        s = i[8],
        o = i[1],
        l = i[5],
        c = i[9],
        h = i[2],
        u = i[6],
        d = i[10];
      switch (e) {
        case "XYZ":
          (this._y = Math.asin(V(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-a, r)))
              : ((this._x = Math.atan2(u, l)), (this._z = 0));
          break;
        case "YXZ":
          (this._x = Math.asin(-V(c, -1, 1))),
            Math.abs(c) < 0.9999999
              ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(o, l)))
              : ((this._y = Math.atan2(-h, r)), (this._z = 0));
          break;
        case "ZXY":
          (this._x = Math.asin(V(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-a, l)))
              : ((this._y = 0), (this._z = Math.atan2(o, r)));
          break;
        case "ZYX":
          (this._y = Math.asin(-V(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
              : ((this._x = 0), (this._z = Math.atan2(-a, l)));
          break;
        case "YZX":
          (this._z = Math.asin(V(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
              : ((this._x = 0), (this._y = Math.atan2(s, d)));
          break;
        case "XZY":
          (this._z = Math.asin(-V(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
              : ((this._x = Math.atan2(-c, d)), (this._y = 0));
          break;
        default:
          console.warn(
            "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
              e
          );
      }
      return (this._order = e), !0 === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t, e, n) {
      return (
        ae.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ae, e, n)
      );
    }
    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
      return se.setFromEuler(this), this.setFromQuaternion(se, t);
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._order === this._order
      );
    }
    fromArray(t) {
      return (
        (this._x = t[0]),
        (this._y = t[1]),
        (this._z = t[2]),
        void 0 !== t[3] && (this._order = t[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._order),
        t
      );
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
    toVector3() {
      console.error(
        "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
      );
    }
  }
  (oe.DefaultOrder = "XYZ"),
    (oe.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
  class le {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = ((1 << t) | 0) >>> 0;
    }
    enable(t) {
      this.mask |= (1 << t) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= (1 << t) | 0;
    }
    disable(t) {
      this.mask &= ~((1 << t) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return 0 != (this.mask & t.mask);
    }
    isEnabled(t) {
      return 0 != (this.mask & ((1 << t) | 0));
    }
  }
  let ce = 0;
  const he = new Mt(),
    ue = new xt(),
    de = new Kt(),
    pe = new Mt(),
    me = new Mt(),
    fe = new Mt(),
    ge = new xt(),
    _e = new Mt(1, 0, 0),
    ve = new Mt(0, 1, 0),
    xe = new Mt(0, 0, 1),
    Me = { type: "added" },
    ye = { type: "removed" };
  class be extends U {
    constructor() {
      super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, "id", { value: ce++ }),
        (this.uuid = H()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = be.DefaultUp.clone());
      const t = new Mt(),
        e = new oe(),
        n = new xt(),
        i = new Mt(1, 1, 1);
      e._onChange(function () {
        n.setFromEuler(e, !1);
      }),
        n._onChange(function () {
          e.setFromQuaternion(n, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: e },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new Kt() },
          normalMatrix: { value: new Z() },
        }),
        (this.matrix = new Kt()),
        (this.matrixWorld = new Kt()),
        (this.matrixAutoUpdate = be.DefaultMatrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = !1),
        (this.matrixWorldAutoUpdate = be.DefaultMatrixWorldAutoUpdate),
        (this.layers = new le()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {});
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return ue.setFromAxisAngle(t, e), this.quaternion.multiply(ue), this;
    }
    rotateOnWorldAxis(t, e) {
      return ue.setFromAxisAngle(t, e), this.quaternion.premultiply(ue), this;
    }
    rotateX(t) {
      return this.rotateOnAxis(_e, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(ve, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(xe, t);
    }
    translateOnAxis(t, e) {
      return (
        he.copy(t).applyQuaternion(this.quaternion),
        this.position.add(he.multiplyScalar(e)),
        this
      );
    }
    translateX(t) {
      return this.translateOnAxis(_e, t);
    }
    translateY(t) {
      return this.translateOnAxis(ve, t);
    }
    translateZ(t) {
      return this.translateOnAxis(xe, t);
    }
    localToWorld(t) {
      return t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
      return t.applyMatrix4(de.copy(this.matrixWorld).invert());
    }
    lookAt(t, e, n) {
      t.isVector3 ? pe.copy(t) : pe.set(t, e, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1),
        me.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? de.lookAt(me, pe, this.up)
          : de.lookAt(pe, me, this.up),
        this.quaternion.setFromRotationMatrix(de),
        i &&
          (de.extractRotation(i.matrixWorld),
          ue.setFromRotationMatrix(de),
          this.quaternion.premultiply(ue.invert()));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return t === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            t
          ),
          this)
        : (t && t.isObject3D
            ? (null !== t.parent && t.parent.remove(t),
              (t.parent = this),
              this.children.push(t),
              t.dispatchEvent(Me))
            : console.error(
                "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                t
              ),
          this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        return this;
      }
      const e = this.children.indexOf(t);
      return (
        -1 !== e &&
          ((t.parent = null), this.children.splice(e, 1), t.dispatchEvent(ye)),
        this
      );
    }
    removeFromParent() {
      const t = this.parent;
      return null !== t && t.remove(this), this;
    }
    clear() {
      for (let t = 0; t < this.children.length; t++) {
        const e = this.children[t];
        (e.parent = null), e.dispatchEvent(ye);
      }
      return (this.children.length = 0), this;
    }
    attach(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        de.copy(this.matrixWorld).invert(),
        null !== t.parent &&
          (t.parent.updateWorldMatrix(!0, !1),
          de.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(de),
        this.add(t),
        t.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(t) {
      return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i) return i;
      }
    }
    getWorldPosition(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(t) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(me, t, fe), t
      );
    }
    getWorldScale(t) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(me, ge, t), t
      );
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {}
    traverse(t) {
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
    }
    traverseVisible(t) {
      if (!1 === this.visible) return;
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
    }
    traverseAncestors(t) {
      const e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (t = !0));
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) {
        const i = e[n];
        (!0 !== i.matrixWorldAutoUpdate && !0 !== t) || i.updateMatrixWorld(t);
      }
    }
    updateWorldMatrix(t, e) {
      const n = this.parent;
      if (
        (!0 === t &&
          null !== n &&
          !0 === n.matrixWorldAutoUpdate &&
          n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        !0 === e)
      ) {
        const t = this.children;
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0);
        }
      }
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t,
        n = {};
      e &&
        ((t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      const i = {};
      function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
      }
      if (
        ((i.uuid = this.uuid),
        (i.type = this.type),
        "" !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = "InstancedMesh"),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          null !== this.instanceColor &&
            (i.instanceColor = this.instanceColor.toJSON())),
        this.isScene)
      )
        this.background &&
          (this.background.isColor
            ? (i.background = this.background.toJSON())
            : this.background.isTexture &&
              (i.background = this.background.toJSON(t).uuid)),
          this.environment &&
            this.environment.isTexture &&
            !0 !== this.environment.isRenderTargetTexture &&
            (i.environment = this.environment.toJSON(t).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        const e = this.geometry.parameters;
        if (void 0 !== e && void 0 !== e.shapes) {
          const n = e.shapes;
          if (Array.isArray(n))
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              r(t.shapes, i);
            }
          else r(t.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          void 0 !== this.skeleton &&
            (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        void 0 !== this.material)
      )
        if (Array.isArray(this.material)) {
          const e = [];
          for (let n = 0, i = this.material.length; n < i; n++)
            e.push(r(t.materials, this.material[n]));
          i.material = e;
        } else i.material = r(t.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e = 0; e < this.children.length; e++)
          i.children.push(this.children[e].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e = 0; e < this.animations.length; e++) {
          const n = this.animations[e];
          i.animations.push(r(t.animations, n));
        }
      }
      if (e) {
        const e = a(t.geometries),
          i = a(t.materials),
          r = a(t.textures),
          s = a(t.images),
          o = a(t.shapes),
          l = a(t.skeletons),
          c = a(t.animations),
          h = a(t.nodes);
        e.length > 0 && (n.geometries = e),
          i.length > 0 && (n.materials = i),
          r.length > 0 && (n.textures = r),
          s.length > 0 && (n.images = s),
          o.length > 0 && (n.shapes = o),
          l.length > 0 && (n.skeletons = l),
          c.length > 0 && (n.animations = c),
          h.length > 0 && (n.nodes = h);
      }
      return (n.object = i), n;
      function a(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = !0) {
      if (
        ((this.name = t.name),
        this.up.copy(t.up),
        this.position.copy(t.position),
        (this.rotation.order = t.rotation.order),
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
        (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
        (this.layers.mask = t.layers.mask),
        (this.visible = t.visible),
        (this.castShadow = t.castShadow),
        (this.receiveShadow = t.receiveShadow),
        (this.frustumCulled = t.frustumCulled),
        (this.renderOrder = t.renderOrder),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        !0 === e)
      )
        for (let e = 0; e < t.children.length; e++) {
          const n = t.children[e];
          this.add(n.clone());
        }
      return this;
    }
  }
  (be.DefaultUp = new Mt(0, 1, 0)),
    (be.DefaultMatrixAutoUpdate = !0),
    (be.DefaultMatrixWorldAutoUpdate = !0);
  const Se = new Mt(),
    we = new Mt(),
    Te = new Mt(),
    Ee = new Mt(),
    Ae = new Mt(),
    Le = new Mt(),
    Ce = new Mt(),
    Re = new Mt(),
    Pe = new Mt(),
    De = new Mt();
  class Ie {
    constructor(t = new Mt(), e = new Mt(), n = new Mt()) {
      (this.a = t), (this.b = e), (this.c = n);
    }
    static getNormal(t, e, n, i) {
      i.subVectors(n, e), Se.subVectors(t, e), i.cross(Se);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t, e, n, i, r) {
      Se.subVectors(i, e), we.subVectors(n, e), Te.subVectors(t, e);
      const a = Se.dot(Se),
        s = Se.dot(we),
        o = Se.dot(Te),
        l = we.dot(we),
        c = we.dot(Te),
        h = a * l - s * s;
      if (0 === h) return r.set(-2, -1, -1);
      const u = 1 / h,
        d = (l * o - s * c) * u,
        p = (a * c - s * o) * u;
      return r.set(1 - d - p, p, d);
    }
    static containsPoint(t, e, n, i) {
      return (
        this.getBarycoord(t, e, n, i, Ee),
        Ee.x >= 0 && Ee.y >= 0 && Ee.x + Ee.y <= 1
      );
    }
    static getUV(t, e, n, i, r, a, s, o) {
      return (
        this.getBarycoord(t, e, n, i, Ee),
        o.set(0, 0),
        o.addScaledVector(r, Ee.x),
        o.addScaledVector(a, Ee.y),
        o.addScaledVector(s, Ee.z),
        o
      );
    }
    static isFrontFacing(t, e, n, i) {
      return Se.subVectors(n, e), we.subVectors(t, e), Se.cross(we).dot(i) < 0;
    }
    set(t, e, n) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t, e, n, i) {
      return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
    }
    setFromAttributeAndIndices(t, e, n, i) {
      return (
        this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, n),
        this.c.fromBufferAttribute(t, i),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }
    getArea() {
      return (
        Se.subVectors(this.c, this.b),
        we.subVectors(this.a, this.b),
        0.5 * Se.cross(we).length()
      );
    }
    getMidpoint(t) {
      return t
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return Ie.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
      return Ie.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getUV(t, e, n, i, r) {
      return Ie.getUV(t, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t) {
      return Ie.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return Ie.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      const n = this.a,
        i = this.b,
        r = this.c;
      let a, s;
      Ae.subVectors(i, n), Le.subVectors(r, n), Re.subVectors(t, n);
      const o = Ae.dot(Re),
        l = Le.dot(Re);
      if (o <= 0 && l <= 0) return e.copy(n);
      Pe.subVectors(t, i);
      const c = Ae.dot(Pe),
        h = Le.dot(Pe);
      if (c >= 0 && h <= c) return e.copy(i);
      const u = o * h - c * l;
      if (u <= 0 && o >= 0 && c <= 0)
        return (a = o / (o - c)), e.copy(n).addScaledVector(Ae, a);
      De.subVectors(t, r);
      const d = Ae.dot(De),
        p = Le.dot(De);
      if (p >= 0 && d <= p) return e.copy(r);
      const m = d * l - o * p;
      if (m <= 0 && l >= 0 && p <= 0)
        return (s = l / (l - p)), e.copy(n).addScaledVector(Le, s);
      const f = c * p - d * h;
      if (f <= 0 && h - c >= 0 && d - p >= 0)
        return (
          Ce.subVectors(r, i),
          (s = (h - c) / (h - c + (d - p))),
          e.copy(i).addScaledVector(Ce, s)
        );
      const g = 1 / (f + m + u);
      return (
        (a = m * g),
        (s = u * g),
        e.copy(n).addScaledVector(Ae, a).addScaledVector(Le, s)
      );
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  }
  let Ne = 0;
  class Oe extends U {
    constructor() {
      super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, "id", { value: Ne++ }),
        (this.uuid = H()),
        (this.name = ""),
        (this.type = "Material"),
        (this.blending = 1),
        (this.side = 0),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = l),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = N),
        (this.stencilZFail = N),
        (this.stencilZPass = N),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0);
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t) {
      this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t) {
      if (void 0 !== t)
        for (const e in t) {
          const n = t[e];
          if (void 0 === n) {
            console.warn("THREE.Material: '" + e + "' parameter is undefined.");
            continue;
          }
          const i = this[e];
          void 0 !== i
            ? i && i.isColor
              ? i.set(n)
              : i && i.isVector3 && n && n.isVector3
              ? i.copy(n)
              : (this[e] = n)
            : console.warn(
                "THREE." +
                  this.type +
                  ": '" +
                  e +
                  "' is not a property of this material."
              );
        }
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      e && (t = { textures: {}, images: {} });
      const n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      function i(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
      if (
        ((n.uuid = this.uuid),
        (n.type = this.type),
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        void 0 !== this.sheen && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        void 0 !== this.sheenRoughness &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          1 !== this.emissiveIntensity &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        void 0 !== this.specularIntensity &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        void 0 !== this.iridescence && (n.iridescence = this.iridescence),
        void 0 !== this.iridescenceIOR &&
          (n.iridescenceIOR = this.iridescenceIOR),
        void 0 !== this.iridescenceThicknessRange &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(t).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(t).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(t).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(t).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(t).uuid),
          void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapIntensity &&
          (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        void 0 !== this.transmission && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        void 0 !== this.thickness && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        void 0 !== this.attenuationDistance &&
          (n.attenuationDistance = this.attenuationDistance),
        void 0 !== this.attenuationColor &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation &&
          (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        0 !== this.side && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        void 0 !== this.rotation &&
          0 !== this.rotation &&
          (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        void 0 !== this.linewidth &&
          1 !== this.linewidth &&
          (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaToCoverage &&
          (n.alphaToCoverage = this.alphaToCoverage),
        !0 === this.premultipliedAlpha &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap &&
          (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        !1 === this.fog && (n.fog = !1),
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        e)
      ) {
        const e = i(t.textures),
          r = i(t.images);
        e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.name = t.name),
        (this.blending = t.blending),
        (this.side = t.side),
        (this.vertexColors = t.vertexColors),
        (this.opacity = t.opacity),
        (this.transparent = t.transparent),
        (this.blendSrc = t.blendSrc),
        (this.blendDst = t.blendDst),
        (this.blendEquation = t.blendEquation),
        (this.blendSrcAlpha = t.blendSrcAlpha),
        (this.blendDstAlpha = t.blendDstAlpha),
        (this.blendEquationAlpha = t.blendEquationAlpha),
        (this.depthFunc = t.depthFunc),
        (this.depthTest = t.depthTest),
        (this.depthWrite = t.depthWrite),
        (this.stencilWriteMask = t.stencilWriteMask),
        (this.stencilFunc = t.stencilFunc),
        (this.stencilRef = t.stencilRef),
        (this.stencilFuncMask = t.stencilFuncMask),
        (this.stencilFail = t.stencilFail),
        (this.stencilZFail = t.stencilZFail),
        (this.stencilZPass = t.stencilZPass),
        (this.stencilWrite = t.stencilWrite);
      const e = t.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t = e.length;
        n = new Array(t);
        for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = t.clipIntersection),
        (this.clipShadows = t.clipShadows),
        (this.shadowSide = t.shadowSide),
        (this.colorWrite = t.colorWrite),
        (this.precision = t.precision),
        (this.polygonOffset = t.polygonOffset),
        (this.polygonOffsetFactor = t.polygonOffsetFactor),
        (this.polygonOffsetUnits = t.polygonOffsetUnits),
        (this.dithering = t.dithering),
        (this.alphaTest = t.alphaTest),
        (this.alphaToCoverage = t.alphaToCoverage),
        (this.premultipliedAlpha = t.premultipliedAlpha),
        (this.visible = t.visible),
        (this.toneMapped = t.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
  }
  class ze extends Oe {
    constructor(t) {
      super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = "MeshBasicMaterial"),
        (this.color = new lt(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.fog = t.fog),
        this
      );
    }
  }
  const Ue = new Mt(),
    Fe = new Y();
  class Be {
    constructor(t, e, n) {
      if (Array.isArray(t))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      (this.isBufferAttribute = !0),
        (this.name = ""),
        (this.array = t),
        (this.itemSize = e),
        (this.count = void 0 !== t ? t.length / e : 0),
        (this.normalized = !0 === n),
        (this.usage = 35044),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0);
    }
    onUploadCallback() {}
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    setUsage(t) {
      return (this.usage = t), this;
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.array = new t.array.constructor(t.array)),
        (this.itemSize = t.itemSize),
        (this.count = t.count),
        (this.normalized = t.normalized),
        (this.usage = t.usage),
        this
      );
    }
    copyAt(t, e, n) {
      (t *= this.itemSize), (n *= e.itemSize);
      for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[t + i] = e.array[n + i];
      return this;
    }
    copyArray(t) {
      return this.array.set(t), this;
    }
    applyMatrix3(t) {
      if (2 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Fe.fromBufferAttribute(this, e),
            Fe.applyMatrix3(t),
            this.setXY(e, Fe.x, Fe.y);
      else if (3 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Ue.fromBufferAttribute(this, e),
            Ue.applyMatrix3(t),
            this.setXYZ(e, Ue.x, Ue.y, Ue.z);
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Ue.fromBufferAttribute(this, e),
          Ue.applyMatrix4(t),
          this.setXYZ(e, Ue.x, Ue.y, Ue.z);
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Ue.fromBufferAttribute(this, e),
          Ue.applyNormalMatrix(t),
          this.setXYZ(e, Ue.x, Ue.y, Ue.z);
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Ue.fromBufferAttribute(this, e),
          Ue.transformDirection(t),
          this.setXYZ(e, Ue.x, Ue.y, Ue.z);
      return this;
    }
    set(t, e = 0) {
      return this.array.set(t, e), this;
    }
    getX(t) {
      let e = this.array[t * this.itemSize];
      return this.normalized && (e = X(e, this.array)), e;
    }
    setX(t, e) {
      return (
        this.normalized && (e = q(e, this.array)),
        (this.array[t * this.itemSize] = e),
        this
      );
    }
    getY(t) {
      let e = this.array[t * this.itemSize + 1];
      return this.normalized && (e = X(e, this.array)), e;
    }
    setY(t, e) {
      return (
        this.normalized && (e = q(e, this.array)),
        (this.array[t * this.itemSize + 1] = e),
        this
      );
    }
    getZ(t) {
      let e = this.array[t * this.itemSize + 2];
      return this.normalized && (e = X(e, this.array)), e;
    }
    setZ(t, e) {
      return (
        this.normalized && (e = q(e, this.array)),
        (this.array[t * this.itemSize + 2] = e),
        this
      );
    }
    getW(t) {
      let e = this.array[t * this.itemSize + 3];
      return this.normalized && (e = X(e, this.array)), e;
    }
    setW(t, e) {
      return (
        this.normalized && (e = q(e, this.array)),
        (this.array[t * this.itemSize + 3] = e),
        this
      );
    }
    setXY(t, e, n) {
      return (
        (t *= this.itemSize),
        this.normalized && ((e = q(e, this.array)), (n = q(n, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, i) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = q(e, this.array)),
          (n = q(n, this.array)),
          (i = q(i, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        this
      );
    }
    setXYZW(t, e, n, i, r) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = q(e, this.array)),
          (n = q(n, this.array)),
          (i = q(i, this.array)),
          (r = q(r, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        (this.array[t + 3] = r),
        this
      );
    }
    onUpload(t) {
      return (this.onUploadCallback = t), this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        "" !== this.name && (t.name = this.name),
        35044 !== this.usage && (t.usage = this.usage),
        (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
          (t.updateRange = this.updateRange),
        t
      );
    }
    copyColorsArray() {
      console.error(
        "THREE.BufferAttribute: copyColorsArray() was removed in r144."
      );
    }
    copyVector2sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
      );
    }
    copyVector3sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
      );
    }
    copyVector4sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
      );
    }
  }
  class Ge extends Be {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n);
    }
  }
  class He extends Be {
    constructor(t, e, n) {
      super(new Uint32Array(t), e, n);
    }
  }
  class Ve extends Be {
    constructor(t, e, n) {
      super(new Float32Array(t), e, n);
    }
  }
  let ke = 0;
  const We = new Kt(),
    je = new be(),
    Xe = new Mt(),
    qe = new St(),
    Ye = new St(),
    Ze = new Mt();
  class Je extends U {
    constructor() {
      super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: ke++ }),
        (this.uuid = H()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return (
        Array.isArray(t)
          ? (this.index = new (J(t) ? He : Ge)(t, 1))
          : (this.index = t),
        this
      );
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return (this.attributes[t] = e), this;
    }
    deleteAttribute(t) {
      return delete this.attributes[t], this;
    }
    hasAttribute(t) {
      return void 0 !== this.attributes[t];
    }
    addGroup(t, e, n = 0) {
      this.groups.push({ start: t, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      (this.drawRange.start = t), (this.drawRange.count = e);
    }
    applyMatrix4(t) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e = new Z().getNormalMatrix(t);
        n.applyNormalMatrix(e), (n.needsUpdate = !0);
      }
      const i = this.attributes.tangent;
      return (
        void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(t) {
      return We.makeRotationFromQuaternion(t), this.applyMatrix4(We), this;
    }
    rotateX(t) {
      return We.makeRotationX(t), this.applyMatrix4(We), this;
    }
    rotateY(t) {
      return We.makeRotationY(t), this.applyMatrix4(We), this;
    }
    rotateZ(t) {
      return We.makeRotationZ(t), this.applyMatrix4(We), this;
    }
    translate(t, e, n) {
      return We.makeTranslation(t, e, n), this.applyMatrix4(We), this;
    }
    scale(t, e, n) {
      return We.makeScale(t, e, n), this.applyMatrix4(We), this;
    }
    lookAt(t) {
      return (
        je.lookAt(t), je.updateMatrix(), this.applyMatrix4(je.matrix), this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(Xe).negate(),
        this.translate(Xe.x, Xe.y, Xe.z),
        this
      );
    }
    setFromPoints(t) {
      const e = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }
      return this.setAttribute("position", new Ve(e, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new St());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingBox.set(
            new Mt(-1 / 0, -1 / 0, -1 / 0),
            new Mt(1 / 0, 1 / 0, 1 / 0)
          )
        );
      if (void 0 !== t) {
        if ((this.boundingBox.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            qe.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Ze.addVectors(this.boundingBox.min, qe.min),
                  this.boundingBox.expandByPoint(Ze),
                  Ze.addVectors(this.boundingBox.max, qe.max),
                  this.boundingBox.expandByPoint(Ze))
                : (this.boundingBox.expandByPoint(qe.min),
                  this.boundingBox.expandByPoint(qe.max));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Vt());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingSphere.set(new Mt(), 1 / 0)
        );
      if (t) {
        const n = this.boundingSphere.center;
        if ((qe.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            Ye.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Ze.addVectors(qe.min, Ye.min),
                  qe.expandByPoint(Ze),
                  Ze.addVectors(qe.max, Ye.max),
                  qe.expandByPoint(Ze))
                : (qe.expandByPoint(Ye.min), qe.expandByPoint(Ye.max));
          }
        qe.getCenter(n);
        let i = 0;
        for (let e = 0, r = t.count; e < r; e++)
          Ze.fromBufferAttribute(t, e),
            (i = Math.max(i, n.distanceToSquared(Ze)));
        if (e)
          for (let r = 0, a = e.length; r < a; r++) {
            const a = e[r],
              s = this.morphTargetsRelative;
            for (let e = 0, r = a.count; e < r; e++)
              Ze.fromBufferAttribute(a, e),
                s && (Xe.fromBufferAttribute(t, e), Ze.add(Xe)),
                (i = Math.max(i, n.distanceToSquared(Ze)));
          }
        (this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    }
    computeTangents() {
      const t = this.index,
        e = this.attributes;
      if (
        null === t ||
        void 0 === e.position ||
        void 0 === e.normal ||
        void 0 === e.uv
      )
        return void console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
        );
      const n = t.array,
        i = e.position.array,
        r = e.normal.array,
        a = e.uv.array,
        s = i.length / 3;
      !1 === this.hasAttribute("tangent") &&
        this.setAttribute("tangent", new Be(new Float32Array(4 * s), 4));
      const o = this.getAttribute("tangent").array,
        l = [],
        c = [];
      for (let t = 0; t < s; t++) (l[t] = new Mt()), (c[t] = new Mt());
      const h = new Mt(),
        u = new Mt(),
        d = new Mt(),
        p = new Y(),
        m = new Y(),
        f = new Y(),
        g = new Mt(),
        _ = new Mt();
      function v(t, e, n) {
        h.fromArray(i, 3 * t),
          u.fromArray(i, 3 * e),
          d.fromArray(i, 3 * n),
          p.fromArray(a, 2 * t),
          m.fromArray(a, 2 * e),
          f.fromArray(a, 2 * n),
          u.sub(h),
          d.sub(h),
          m.sub(p),
          f.sub(p);
        const r = 1 / (m.x * f.y - f.x * m.y);
        isFinite(r) &&
          (g
            .copy(u)
            .multiplyScalar(f.y)
            .addScaledVector(d, -m.y)
            .multiplyScalar(r),
          _.copy(d)
            .multiplyScalar(m.x)
            .addScaledVector(u, -f.x)
            .multiplyScalar(r),
          l[t].add(g),
          l[e].add(g),
          l[n].add(g),
          c[t].add(_),
          c[e].add(_),
          c[n].add(_));
      }
      let x = this.groups;
      0 === x.length && (x = [{ start: 0, count: n.length }]);
      for (let t = 0, e = x.length; t < e; ++t) {
        const e = x[t],
          i = e.start;
        for (let t = i, r = i + e.count; t < r; t += 3)
          v(n[t + 0], n[t + 1], n[t + 2]);
      }
      const M = new Mt(),
        y = new Mt(),
        b = new Mt(),
        S = new Mt();
      function w(t) {
        b.fromArray(r, 3 * t), S.copy(b);
        const e = l[t];
        M.copy(e),
          M.sub(b.multiplyScalar(b.dot(e))).normalize(),
          y.crossVectors(S, e);
        const n = y.dot(c[t]) < 0 ? -1 : 1;
        (o[4 * t] = M.x),
          (o[4 * t + 1] = M.y),
          (o[4 * t + 2] = M.z),
          (o[4 * t + 3] = n);
      }
      for (let t = 0, e = x.length; t < e; ++t) {
        const e = x[t],
          i = e.start;
        for (let t = i, r = i + e.count; t < r; t += 3)
          w(n[t + 0]), w(n[t + 1]), w(n[t + 2]);
      }
    }
    computeVertexNormals() {
      const t = this.index,
        e = this.getAttribute("position");
      if (void 0 !== e) {
        let n = this.getAttribute("normal");
        if (void 0 === n)
          (n = new Be(new Float32Array(3 * e.count), 3)),
            this.setAttribute("normal", n);
        else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
        const i = new Mt(),
          r = new Mt(),
          a = new Mt(),
          s = new Mt(),
          o = new Mt(),
          l = new Mt(),
          c = new Mt(),
          h = new Mt();
        if (t)
          for (let u = 0, d = t.count; u < d; u += 3) {
            const d = t.getX(u + 0),
              p = t.getX(u + 1),
              m = t.getX(u + 2);
            i.fromBufferAttribute(e, d),
              r.fromBufferAttribute(e, p),
              a.fromBufferAttribute(e, m),
              c.subVectors(a, r),
              h.subVectors(i, r),
              c.cross(h),
              s.fromBufferAttribute(n, d),
              o.fromBufferAttribute(n, p),
              l.fromBufferAttribute(n, m),
              s.add(c),
              o.add(c),
              l.add(c),
              n.setXYZ(d, s.x, s.y, s.z),
              n.setXYZ(p, o.x, o.y, o.z),
              n.setXYZ(m, l.x, l.y, l.z);
          }
        else
          for (let t = 0, s = e.count; t < s; t += 3)
            i.fromBufferAttribute(e, t + 0),
              r.fromBufferAttribute(e, t + 1),
              a.fromBufferAttribute(e, t + 2),
              c.subVectors(a, r),
              h.subVectors(i, r),
              c.cross(h),
              n.setXYZ(t + 0, c.x, c.y, c.z),
              n.setXYZ(t + 1, c.x, c.y, c.z),
              n.setXYZ(t + 2, c.x, c.y, c.z);
        this.normalizeNormals(), (n.needsUpdate = !0);
      }
    }
    merge() {
      return (
        console.error(
          "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
        ),
        this
      );
    }
    normalizeNormals() {
      const t = this.attributes.normal;
      for (let e = 0, n = t.count; e < n; e++)
        Ze.fromBufferAttribute(t, e),
          Ze.normalize(),
          t.setXYZ(e, Ze.x, Ze.y, Ze.z);
    }
    toNonIndexed() {
      function t(t, e) {
        const n = t.array,
          i = t.itemSize,
          r = t.normalized,
          a = new n.constructor(e.length * i);
        let s = 0,
          o = 0;
        for (let r = 0, l = e.length; r < l; r++) {
          s = t.isInterleavedBufferAttribute
            ? e[r] * t.data.stride + t.offset
            : e[r] * i;
          for (let t = 0; t < i; t++) a[o++] = n[s++];
        }
        return new Be(a, i, r);
      }
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
          ),
          this
        );
      const e = new Je(),
        n = this.index.array,
        i = this.attributes;
      for (const r in i) {
        const a = t(i[r], n);
        e.setAttribute(r, a);
      }
      const r = this.morphAttributes;
      for (const i in r) {
        const a = [],
          s = r[i];
        for (let e = 0, i = s.length; e < i; e++) {
          const i = t(s[e], n);
          a.push(i);
        }
        e.morphAttributes[i] = a;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const a = this.groups;
      for (let t = 0, n = a.length; t < n; t++) {
        const n = a[t];
        e.addGroup(n.start, n.count, n.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((t.uuid = this.uuid),
        (t.type = this.type),
        "" !== this.name && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        void 0 !== this.parameters)
      ) {
        const e = this.parameters;
        for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t;
      }
      t.data = { attributes: {} };
      const e = this.index;
      null !== e &&
        (t.data.index = {
          type: e.array.constructor.name,
          array: Array.prototype.slice.call(e.array),
        });
      const n = this.attributes;
      for (const e in n) {
        const i = n[e];
        t.data.attributes[e] = i.toJSON(t.data);
      }
      const i = {};
      let r = !1;
      for (const e in this.morphAttributes) {
        const n = this.morphAttributes[e],
          a = [];
        for (let e = 0, i = n.length; e < i; e++) {
          const i = n[e];
          a.push(i.toJSON(t.data));
        }
        a.length > 0 && ((i[e] = a), (r = !0));
      }
      r &&
        ((t.data.morphAttributes = i),
        (t.data.morphTargetsRelative = this.morphTargetsRelative));
      const a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      const s = this.boundingSphere;
      return (
        null !== s &&
          (t.data.boundingSphere = {
            center: s.center.toArray(),
            radius: s.radius,
          }),
        t
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      const e = {};
      this.name = t.name;
      const n = t.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t.attributes;
      for (const t in i) {
        const n = i[t];
        this.setAttribute(t, n.clone(e));
      }
      const r = t.morphAttributes;
      for (const t in r) {
        const n = [],
          i = r[t];
        for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
        this.morphAttributes[t] = n;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      const a = t.groups;
      for (let t = 0, e = a.length; t < e; t++) {
        const e = a[t];
        this.addGroup(e.start, e.count, e.materialIndex);
      }
      const s = t.boundingBox;
      null !== s && (this.boundingBox = s.clone());
      const o = t.boundingSphere;
      return (
        null !== o && (this.boundingSphere = o.clone()),
        (this.drawRange.start = t.drawRange.start),
        (this.drawRange.count = t.drawRange.count),
        (this.userData = t.userData),
        void 0 !== t.parameters &&
          (this.parameters = Object.assign({}, t.parameters)),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const Ke = new Kt(),
    Qe = new Jt(),
    $e = new Vt(),
    tn = new Mt(),
    en = new Mt(),
    nn = new Mt(),
    rn = new Mt(),
    an = new Mt(),
    sn = new Mt(),
    on = new Mt(),
    ln = new Mt(),
    cn = new Mt(),
    hn = new Y(),
    un = new Y(),
    dn = new Y(),
    pn = new Mt(),
    mn = new Mt();
  class fn extends be {
    constructor(t = new Je(), e = new ze()) {
      super(),
        (this.isMesh = !0),
        (this.type = "Mesh"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        void 0 !== t.morphTargetInfluences &&
          (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        void 0 !== t.morphTargetDictionary &&
          (this.morphTargetDictionary = Object.assign(
            {},
            t.morphTargetDictionary
          )),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        e = Object.keys(t);
      if (e.length > 0) {
        const n = t[e[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, e = n.length; t < e; t++) {
            const e = n[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[e] = t);
          }
        }
      }
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.material,
        r = this.matrixWorld;
      if (void 0 === i) return;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        $e.copy(n.boundingSphere),
        $e.applyMatrix4(r),
        !1 === t.ray.intersectsSphere($e))
      )
        return;
      if (
        (Ke.copy(r).invert(),
        Qe.copy(t.ray).applyMatrix4(Ke),
        null !== n.boundingBox && !1 === Qe.intersectsBox(n.boundingBox))
      )
        return;
      let a;
      const s = n.index,
        o = n.attributes.position,
        l = n.morphAttributes.position,
        c = n.morphTargetsRelative,
        h = n.attributes.uv,
        u = n.attributes.uv2,
        d = n.groups,
        p = n.drawRange;
      if (null !== s)
        if (Array.isArray(i))
          for (let n = 0, r = d.length; n < r; n++) {
            const r = d[n],
              m = i[r.materialIndex];
            for (
              let n = Math.max(r.start, p.start),
                i = Math.min(
                  s.count,
                  Math.min(r.start + r.count, p.start + p.count)
                );
              n < i;
              n += 3
            ) {
              const i = s.getX(n),
                d = s.getX(n + 1),
                p = s.getX(n + 2);
              (a = gn(this, m, t, Qe, o, l, c, h, u, i, d, p)),
                a &&
                  ((a.faceIndex = Math.floor(n / 3)),
                  (a.face.materialIndex = r.materialIndex),
                  e.push(a));
            }
          }
        else {
          for (
            let n = Math.max(0, p.start),
              r = Math.min(s.count, p.start + p.count);
            n < r;
            n += 3
          ) {
            const r = s.getX(n),
              d = s.getX(n + 1),
              p = s.getX(n + 2);
            (a = gn(this, i, t, Qe, o, l, c, h, u, r, d, p)),
              a && ((a.faceIndex = Math.floor(n / 3)), e.push(a));
          }
        }
      else if (void 0 !== o)
        if (Array.isArray(i))
          for (let n = 0, r = d.length; n < r; n++) {
            const r = d[n],
              s = i[r.materialIndex];
            for (
              let n = Math.max(r.start, p.start),
                i = Math.min(
                  o.count,
                  Math.min(r.start + r.count, p.start + p.count)
                );
              n < i;
              n += 3
            ) {
              (a = gn(this, s, t, Qe, o, l, c, h, u, n, n + 1, n + 2)),
                a &&
                  ((a.faceIndex = Math.floor(n / 3)),
                  (a.face.materialIndex = r.materialIndex),
                  e.push(a));
            }
          }
        else {
          for (
            let n = Math.max(0, p.start),
              r = Math.min(o.count, p.start + p.count);
            n < r;
            n += 3
          ) {
            (a = gn(this, i, t, Qe, o, l, c, h, u, n, n + 1, n + 2)),
              a && ((a.faceIndex = Math.floor(n / 3)), e.push(a));
          }
        }
    }
  }
  function gn(t, e, n, i, r, a, s, o, l, c, h, u) {
    tn.fromBufferAttribute(r, c),
      en.fromBufferAttribute(r, h),
      nn.fromBufferAttribute(r, u);
    const d = t.morphTargetInfluences;
    if (a && d) {
      on.set(0, 0, 0), ln.set(0, 0, 0), cn.set(0, 0, 0);
      for (let t = 0, e = a.length; t < e; t++) {
        const e = d[t],
          n = a[t];
        0 !== e &&
          (rn.fromBufferAttribute(n, c),
          an.fromBufferAttribute(n, h),
          sn.fromBufferAttribute(n, u),
          s
            ? (on.addScaledVector(rn, e),
              ln.addScaledVector(an, e),
              cn.addScaledVector(sn, e))
            : (on.addScaledVector(rn.sub(tn), e),
              ln.addScaledVector(an.sub(en), e),
              cn.addScaledVector(sn.sub(nn), e)));
      }
      tn.add(on), en.add(ln), nn.add(cn);
    }
    t.isSkinnedMesh &&
      (t.boneTransform(c, tn), t.boneTransform(h, en), t.boneTransform(u, nn));
    const p = (function (t, e, n, i, r, a, s, o) {
      let l;
      if (
        ((l =
          1 === e.side
            ? i.intersectTriangle(s, a, r, !0, o)
            : i.intersectTriangle(r, a, s, 2 !== e.side, o)),
        null === l)
      )
        return null;
      mn.copy(o), mn.applyMatrix4(t.matrixWorld);
      const c = n.ray.origin.distanceTo(mn);
      return c < n.near || c > n.far
        ? null
        : { distance: c, point: mn.clone(), object: t };
    })(t, e, n, i, tn, en, nn, pn);
    if (p) {
      o &&
        (hn.fromBufferAttribute(o, c),
        un.fromBufferAttribute(o, h),
        dn.fromBufferAttribute(o, u),
        (p.uv = Ie.getUV(pn, tn, en, nn, hn, un, dn, new Y()))),
        l &&
          (hn.fromBufferAttribute(l, c),
          un.fromBufferAttribute(l, h),
          dn.fromBufferAttribute(l, u),
          (p.uv2 = Ie.getUV(pn, tn, en, nn, hn, un, dn, new Y())));
      const t = { a: c, b: h, c: u, normal: new Mt(), materialIndex: 0 };
      Ie.getNormal(tn, en, nn, t.normal), (p.face = t);
    }
    return p;
  }
  class _n extends Je {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
      super(),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          depth: n,
          widthSegments: i,
          heightSegments: r,
          depthSegments: a,
        });
      const s = this;
      (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
      const o = [],
        l = [],
        c = [],
        h = [];
      let u = 0,
        d = 0;
      function p(t, e, n, i, r, a, p, m, f, g, _) {
        const v = a / f,
          x = p / g,
          M = a / 2,
          y = p / 2,
          b = m / 2,
          S = f + 1,
          w = g + 1;
        let T = 0,
          E = 0;
        const A = new Mt();
        for (let a = 0; a < w; a++) {
          const s = a * x - y;
          for (let o = 0; o < S; o++) {
            const u = o * v - M;
            (A[t] = u * i),
              (A[e] = s * r),
              (A[n] = b),
              l.push(A.x, A.y, A.z),
              (A[t] = 0),
              (A[e] = 0),
              (A[n] = m > 0 ? 1 : -1),
              c.push(A.x, A.y, A.z),
              h.push(o / f),
              h.push(1 - a / g),
              (T += 1);
          }
        }
        for (let t = 0; t < g; t++)
          for (let e = 0; e < f; e++) {
            const n = u + e + S * t,
              i = u + e + S * (t + 1),
              r = u + (e + 1) + S * (t + 1),
              a = u + (e + 1) + S * t;
            o.push(n, i, a), o.push(i, r, a), (E += 6);
          }
        s.addGroup(d, E, _), (d += E), (u += T);
      }
      p("z", "y", "x", -1, -1, n, e, t, a, r, 0),
        p("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
        p("x", "z", "y", 1, 1, t, n, e, i, a, 2),
        p("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
        p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
        p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new Ve(l, 3)),
        this.setAttribute("normal", new Ve(c, 3)),
        this.setAttribute("uv", new Ve(h, 2));
    }
    static fromJSON(t) {
      return new _n(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
    }
  }
  function vn(t) {
    const e = {};
    for (const n in t) {
      e[n] = {};
      for (const i in t[n]) {
        const r = t[n][i];
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture ||
          r.isQuaternion)
          ? (e[n][i] = r.clone())
          : Array.isArray(r)
          ? (e[n][i] = r.slice())
          : (e[n][i] = r);
      }
    }
    return e;
  }
  function xn(t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = vn(t[n]);
      for (const t in i) e[t] = i[t];
    }
    return e;
  }
  const Mn = { clone: vn, merge: xn };
  class yn extends Oe {
    constructor(t) {
      super(),
        (this.isShaderMaterial = !0),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader =
          "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
        (this.fragmentShader =
          "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        void 0 !== t && this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.fragmentShader = t.fragmentShader),
        (this.vertexShader = t.vertexShader),
        (this.uniforms = vn(t.uniforms)),
        (this.uniformsGroups = (function (t) {
          const e = [];
          for (let n = 0; n < t.length; n++) e.push(t[n].clone());
          return e;
        })(t.uniformsGroups)),
        (this.defines = Object.assign({}, t.defines)),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.fog = t.fog),
        (this.lights = t.lights),
        (this.clipping = t.clipping),
        (this.extensions = Object.assign({}, t.extensions)),
        (this.glslVersion = t.glslVersion),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      (e.glslVersion = this.glslVersion), (e.uniforms = {});
      for (const n in this.uniforms) {
        const i = this.uniforms[n].value;
        i && i.isTexture
          ? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
          : i && i.isColor
          ? (e.uniforms[n] = { type: "c", value: i.getHex() })
          : i && i.isVector2
          ? (e.uniforms[n] = { type: "v2", value: i.toArray() })
          : i && i.isVector3
          ? (e.uniforms[n] = { type: "v3", value: i.toArray() })
          : i && i.isVector4
          ? (e.uniforms[n] = { type: "v4", value: i.toArray() })
          : i && i.isMatrix3
          ? (e.uniforms[n] = { type: "m3", value: i.toArray() })
          : i && i.isMatrix4
          ? (e.uniforms[n] = { type: "m4", value: i.toArray() })
          : (e.uniforms[n] = { value: i });
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        (e.vertexShader = this.vertexShader),
        (e.fragmentShader = this.fragmentShader);
      const n = {};
      for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
      return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
  }
  class bn extends be {
    constructor() {
      super(),
        (this.isCamera = !0),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new Kt()),
        (this.projectionMatrix = new Kt()),
        (this.projectionMatrixInverse = new Kt());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        this
      );
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize();
    }
    updateMatrixWorld(t) {
      super.updateMatrixWorld(t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t, e) {
      super.updateWorldMatrix(t, e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Sn extends bn {
    constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
      super(),
        (this.isPerspectiveCamera = !0),
        (this.type = "PerspectiveCamera"),
        (this.fov = t),
        (this.zoom = 1),
        (this.near = n),
        (this.far = i),
        (this.focus = 10),
        (this.aspect = e),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.fov = t.fov),
        (this.zoom = t.zoom),
        (this.near = t.near),
        (this.far = t.far),
        (this.focus = t.focus),
        (this.aspect = t.aspect),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        (this.filmGauge = t.filmGauge),
        (this.filmOffset = t.filmOffset),
        this
      );
    }
    setFocalLength(t) {
      const e = (0.5 * this.getFilmHeight()) / t;
      (this.fov = 2 * G * Math.atan(e)), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t = Math.tan(0.5 * B * this.fov);
      return (0.5 * this.getFilmHeight()) / t;
    }
    getEffectiveFOV() {
      return 2 * G * Math.atan(Math.tan(0.5 * B * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(t, e, n, i, r, a) {
      (this.aspect = t / e),
        null === this.view &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = this.near;
      let e = (t * Math.tan(0.5 * B * this.fov)) / this.zoom,
        n = 2 * e,
        i = this.aspect * n,
        r = -0.5 * i;
      const a = this.view;
      if (null !== this.view && this.view.enabled) {
        const t = a.fullWidth,
          s = a.fullHeight;
        (r += (a.offsetX * i) / t),
          (e -= (a.offsetY * n) / s),
          (i *= a.width / t),
          (n *= a.height / s);
      }
      const s = this.filmOffset;
      0 !== s && (r += (t * s) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.fov = this.fov),
        (e.object.zoom = this.zoom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        (e.object.focus = this.focus),
        (e.object.aspect = this.aspect),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        (e.object.filmGauge = this.filmGauge),
        (e.object.filmOffset = this.filmOffset),
        e
      );
    }
  }
  const wn = 90;
  class Tn extends be {
    constructor(t, e, n) {
      super(), (this.type = "CubeCamera"), (this.renderTarget = n);
      const i = new Sn(wn, 1, t, e);
      (i.layers = this.layers),
        i.up.set(0, -1, 0),
        i.lookAt(new Mt(1, 0, 0)),
        this.add(i);
      const r = new Sn(wn, 1, t, e);
      (r.layers = this.layers),
        r.up.set(0, -1, 0),
        r.lookAt(new Mt(-1, 0, 0)),
        this.add(r);
      const a = new Sn(wn, 1, t, e);
      (a.layers = this.layers),
        a.up.set(0, 0, 1),
        a.lookAt(new Mt(0, 1, 0)),
        this.add(a);
      const s = new Sn(wn, 1, t, e);
      (s.layers = this.layers),
        s.up.set(0, 0, -1),
        s.lookAt(new Mt(0, -1, 0)),
        this.add(s);
      const o = new Sn(wn, 1, t, e);
      (o.layers = this.layers),
        o.up.set(0, -1, 0),
        o.lookAt(new Mt(0, 0, 1)),
        this.add(o);
      const l = new Sn(wn, 1, t, e);
      (l.layers = this.layers),
        l.up.set(0, -1, 0),
        l.lookAt(new Mt(0, 0, -1)),
        this.add(l);
    }
    update(t, e) {
      null === this.parent && this.updateMatrixWorld();
      const n = this.renderTarget,
        [i, r, a, s, o, l] = this.children,
        c = t.getRenderTarget(),
        h = t.toneMapping,
        u = t.xr.enabled;
      (t.toneMapping = 0), (t.xr.enabled = !1);
      const d = n.texture.generateMipmaps;
      (n.texture.generateMipmaps = !1),
        t.setRenderTarget(n, 0),
        t.render(e, i),
        t.setRenderTarget(n, 1),
        t.render(e, r),
        t.setRenderTarget(n, 2),
        t.render(e, a),
        t.setRenderTarget(n, 3),
        t.render(e, s),
        t.setRenderTarget(n, 4),
        t.render(e, o),
        (n.texture.generateMipmaps = d),
        t.setRenderTarget(n, 5),
        t.render(e, l),
        t.setRenderTarget(c),
        (t.toneMapping = h),
        (t.xr.enabled = u),
        (n.texture.needsPMREMUpdate = !0);
    }
  }
  class En extends mt {
    constructor(t, e, n, i, r, a, s, o, l, h) {
      super(
        (t = void 0 !== t ? t : []),
        (e = void 0 !== e ? e : c),
        n,
        i,
        r,
        a,
        s,
        o,
        l,
        h
      ),
        (this.isCubeTexture = !0),
        (this.flipY = !1);
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  }
  class An extends gt {
    constructor(t, e = {}) {
      super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
      const n = { width: t, height: t, depth: 1 },
        i = [n, n, n, n, n, n];
      (this.texture = new En(
        i,
        e.mapping,
        e.wrapS,
        e.wrapT,
        e.magFilter,
        e.minFilter,
        e.format,
        e.type,
        e.anisotropy,
        e.encoding
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.generateMipmaps =
          void 0 !== e.generateMipmaps && e.generateMipmaps),
        (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : g);
    }
    fromEquirectangularTexture(t, e) {
      (this.texture.type = e.type),
        (this.texture.encoding = e.encoding),
        (this.texture.generateMipmaps = e.generateMipmaps),
        (this.texture.minFilter = e.minFilter),
        (this.texture.magFilter = e.magFilter);
      const n = {
          uniforms: { tEquirect: { value: null } },
          vertexShader:
            "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
          fragmentShader:
            "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
        },
        i = new _n(5, 5, 5),
        r = new yn({
          name: "CubemapFromEquirect",
          uniforms: vn(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader,
          side: 1,
          blending: 0,
        });
      r.uniforms.tEquirect.value = e;
      const a = new fn(i, r),
        s = e.minFilter;
      e.minFilter === _ && (e.minFilter = g);
      return (
        new Tn(1, 10, this).update(t, a),
        (e.minFilter = s),
        a.geometry.dispose(),
        a.material.dispose(),
        this
      );
    }
    clear(t, e, n, i) {
      const r = t.getRenderTarget();
      for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
      t.setRenderTarget(r);
    }
  }
  const Ln = new Mt(),
    Cn = new Mt(),
    Rn = new Z();
  class Pn {
    constructor(t = new Mt(1, 0, 0), e = 0) {
      (this.isPlane = !0), (this.normal = t), (this.constant = e);
    }
    set(t, e) {
      return this.normal.copy(t), (this.constant = e), this;
    }
    setComponents(t, e, n, i) {
      return this.normal.set(t, e, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(t, e) {
      return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
    }
    setFromCoplanarPoints(t, e, n) {
      const i = Ln.subVectors(n, e).cross(Cn.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t), this;
    }
    copy(t) {
      return this.normal.copy(t.normal), (this.constant = t.constant), this;
    }
    normalize() {
      const t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), (this.constant *= t), this;
    }
    negate() {
      return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
      return e
        .copy(this.normal)
        .multiplyScalar(-this.distanceToPoint(t))
        .add(t);
    }
    intersectLine(t, e) {
      const n = t.delta(Ln),
        i = this.normal.dot(n);
      if (0 === i)
        return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
      const r = -(t.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
    }
    intersectsLine(t) {
      const e = this.distanceToPoint(t.start),
        n = this.distanceToPoint(t.end);
      return (e < 0 && n > 0) || (n < 0 && e > 0);
    }
    intersectsBox(t) {
      return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
      return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
      return t.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t, e) {
      const n = e || Rn.getNormalMatrix(t),
        i = this.coplanarPoint(Ln).applyMatrix4(t),
        r = this.normal.applyMatrix3(n).normalize();
      return (this.constant = -i.dot(r)), this;
    }
    translate(t) {
      return (this.constant -= t.dot(this.normal)), this;
    }
    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Dn = new Vt(),
    In = new Mt();
  class Nn {
    constructor(
      t = new Pn(),
      e = new Pn(),
      n = new Pn(),
      i = new Pn(),
      r = new Pn(),
      a = new Pn()
    ) {
      this.planes = [t, e, n, i, r, a];
    }
    set(t, e, n, i, r, a) {
      const s = this.planes;
      return (
        s[0].copy(t),
        s[1].copy(e),
        s[2].copy(n),
        s[3].copy(i),
        s[4].copy(r),
        s[5].copy(a),
        this
      );
    }
    copy(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t) {
      const e = this.planes,
        n = t.elements,
        i = n[0],
        r = n[1],
        a = n[2],
        s = n[3],
        o = n[4],
        l = n[5],
        c = n[6],
        h = n[7],
        u = n[8],
        d = n[9],
        p = n[10],
        m = n[11],
        f = n[12],
        g = n[13],
        _ = n[14],
        v = n[15];
      return (
        e[0].setComponents(s - i, h - o, m - u, v - f).normalize(),
        e[1].setComponents(s + i, h + o, m + u, v + f).normalize(),
        e[2].setComponents(s + r, h + l, m + d, v + g).normalize(),
        e[3].setComponents(s - r, h - l, m - d, v - g).normalize(),
        e[4].setComponents(s - a, h - c, m - p, v - _).normalize(),
        e[5].setComponents(s + a, h + c, m + p, v + _).normalize(),
        this
      );
    }
    intersectsObject(t) {
      const e = t.geometry;
      return (
        null === e.boundingSphere && e.computeBoundingSphere(),
        Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
        this.intersectsSphere(Dn)
      );
    }
    intersectsSprite(t) {
      return (
        Dn.center.set(0, 0, 0),
        (Dn.radius = 0.7071067811865476),
        Dn.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(Dn)
      );
    }
    intersectsSphere(t) {
      const e = this.planes,
        n = t.center,
        i = -t.radius;
      for (let t = 0; t < 6; t++) {
        if (e[t].distanceToPoint(n) < i) return !1;
      }
      return !0;
    }
    intersectsBox(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (
          ((In.x = i.normal.x > 0 ? t.max.x : t.min.x),
          (In.y = i.normal.y > 0 ? t.max.y : t.min.y),
          (In.z = i.normal.z > 0 ? t.max.z : t.min.z),
          i.distanceToPoint(In) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function On() {
    let t = null,
      e = !1,
      n = null,
      i = null;
    function r(e, a) {
      n(e, a), (i = t.requestAnimationFrame(r));
    }
    return {
      start: function () {
        !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
      },
      stop: function () {
        t.cancelAnimationFrame(i), (e = !1);
      },
      setAnimationLoop: function (t) {
        n = t;
      },
      setContext: function (e) {
        t = e;
      },
    };
  }
  function zn(t, e) {
    const n = e.isWebGL2,
      i = new WeakMap();
    return {
      get: function (t) {
        return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
      },
      remove: function (e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        const n = i.get(e);
        n && (t.deleteBuffer(n.buffer), i.delete(e));
      },
      update: function (e, r) {
        if (e.isGLBufferAttribute) {
          const t = i.get(e);
          return void (
            (!t || t.version < e.version) &&
            i.set(e, {
              buffer: e.buffer,
              type: e.type,
              bytesPerElement: e.elementSize,
              version: e.version,
            })
          );
        }
        e.isInterleavedBufferAttribute && (e = e.data);
        const a = i.get(e);
        void 0 === a
          ? i.set(
              e,
              (function (e, i) {
                const r = e.array,
                  a = e.usage,
                  s = t.createBuffer();
                let o;
                if (
                  (t.bindBuffer(i, s),
                  t.bufferData(i, r, a),
                  e.onUploadCallback(),
                  r instanceof Float32Array)
                )
                  o = 5126;
                else if (r instanceof Uint16Array)
                  if (e.isFloat16BufferAttribute) {
                    if (!n)
                      throw new Error(
                        "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                      );
                    o = 5131;
                  } else o = 5123;
                else if (r instanceof Int16Array) o = 5122;
                else if (r instanceof Uint32Array) o = 5125;
                else if (r instanceof Int32Array) o = 5124;
                else if (r instanceof Int8Array) o = 5120;
                else if (r instanceof Uint8Array) o = 5121;
                else {
                  if (!(r instanceof Uint8ClampedArray))
                    throw new Error(
                      "THREE.WebGLAttributes: Unsupported buffer data format: " +
                        r
                    );
                  o = 5121;
                }
                return {
                  buffer: s,
                  type: o,
                  bytesPerElement: r.BYTES_PER_ELEMENT,
                  version: e.version,
                };
              })(e, r)
            )
          : a.version < e.version &&
            (!(function (e, i, r) {
              const a = i.array,
                s = i.updateRange;
              t.bindBuffer(r, e),
                -1 === s.count
                  ? t.bufferSubData(r, 0, a)
                  : (n
                      ? t.bufferSubData(
                          r,
                          s.offset * a.BYTES_PER_ELEMENT,
                          a,
                          s.offset,
                          s.count
                        )
                      : t.bufferSubData(
                          r,
                          s.offset * a.BYTES_PER_ELEMENT,
                          a.subarray(s.offset, s.offset + s.count)
                        ),
                    (s.count = -1));
            })(a.buffer, e, r),
            (a.version = e.version));
      },
    };
  }
  class Un extends Je {
    constructor(t = 1, e = 1, n = 1, i = 1) {
      super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          widthSegments: n,
          heightSegments: i,
        });
      const r = t / 2,
        a = e / 2,
        s = Math.floor(n),
        o = Math.floor(i),
        l = s + 1,
        c = o + 1,
        h = t / s,
        u = e / o,
        d = [],
        p = [],
        m = [],
        f = [];
      for (let t = 0; t < c; t++) {
        const e = t * u - a;
        for (let n = 0; n < l; n++) {
          const i = n * h - r;
          p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / s), f.push(1 - t / o);
        }
      }
      for (let t = 0; t < o; t++)
        for (let e = 0; e < s; e++) {
          const n = e + l * t,
            i = e + l * (t + 1),
            r = e + 1 + l * (t + 1),
            a = e + 1 + l * t;
          d.push(n, i, a), d.push(i, r, a);
        }
      this.setIndex(d),
        this.setAttribute("position", new Ve(p, 3)),
        this.setAttribute("normal", new Ve(m, 3)),
        this.setAttribute("uv", new Ve(f, 2));
    }
    static fromJSON(t) {
      return new Un(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  }
  const Fn = {
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment:
        "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
      alphatest_pars_fragment:
        "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
      aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );",
      beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs:
        "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
      iridescence_fragment:
        "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
      color_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_pars_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
      common:
        "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
      defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      encodings_pars_fragment:
        "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
      envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
      envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
      envmap_physical_pars_fragment:
        "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
      fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
      gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
      lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_fragment:
        "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
      lights_lambert_pars_fragment:
        "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert\n#define Material_LightProbeLOD( material )\t(0)",
      lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
      lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
      lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
      map_fragment:
        "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
      map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphcolor_vertex:
        "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
      normal_fragment_begin:
        "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
      normal_fragment_maps:
        "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
      normal_pars_fragment:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_pars_vertex:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_vertex:
        "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
      clearcoat_normal_fragment_begin:
        "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
      clearcoat_pars_fragment:
        "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
      iridescence_pars_fragment:
        "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
      output_fragment:
        "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment:
        "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment:
        "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
      shadowmap_pars_vertex:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
      shadowmap_vertex:
        "#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
      skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
      transmission_fragment:
        "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",
      transmission_pars_fragment:
        "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
      uv_pars_fragment:
        "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
      uv_pars_vertex:
        "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
      uv_vertex:
        "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
      uv2_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      background_frag:
        "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      cube_frag:
        "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshlambert_frag:
        "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshnormal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
      meshnormal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
      meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      shadow_vert:
        "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    },
    Bn = {
      common: {
        diffuse: { value: new lt(16777215) },
        opacity: { value: 1 },
        map: { value: null },
        uvTransform: { value: new Z() },
        uv2Transform: { value: new Z() },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
      },
      specularmap: { specularMap: { value: null } },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        ior: { value: 1.5 },
        refractionRatio: { value: 0.98 },
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
      emissivemap: { emissiveMap: { value: null } },
      bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
      normalmap: {
        normalMap: { value: null },
        normalScale: { value: new Y(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      roughnessmap: { roughnessMap: { value: null } },
      metalnessmap: { metalnessMap: { value: null } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new lt(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} },
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
          },
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotLightMap: { value: [] },
        spotShadowMap: { value: [] },
        spotLightMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} },
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
        ltc_1: { value: null },
        ltc_2: { value: null },
      },
      points: {
        diffuse: { value: new lt(16777215) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
        uvTransform: { value: new Z() },
      },
      sprite: {
        diffuse: { value: new lt(16777215) },
        opacity: { value: 1 },
        center: { value: new Y(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
        uvTransform: { value: new Z() },
      },
    },
    Gn = {
      basic: {
        uniforms: xn([
          Bn.common,
          Bn.specularmap,
          Bn.envmap,
          Bn.aomap,
          Bn.lightmap,
          Bn.fog,
        ]),
        vertexShader: Fn.meshbasic_vert,
        fragmentShader: Fn.meshbasic_frag,
      },
      lambert: {
        uniforms: xn([
          Bn.common,
          Bn.specularmap,
          Bn.envmap,
          Bn.aomap,
          Bn.lightmap,
          Bn.emissivemap,
          Bn.bumpmap,
          Bn.normalmap,
          Bn.displacementmap,
          Bn.fog,
          Bn.lights,
          { emissive: { value: new lt(0) } },
        ]),
        vertexShader: Fn.meshlambert_vert,
        fragmentShader: Fn.meshlambert_frag,
      },
      phong: {
        uniforms: xn([
          Bn.common,
          Bn.specularmap,
          Bn.envmap,
          Bn.aomap,
          Bn.lightmap,
          Bn.emissivemap,
          Bn.bumpmap,
          Bn.normalmap,
          Bn.displacementmap,
          Bn.fog,
          Bn.lights,
          {
            emissive: { value: new lt(0) },
            specular: { value: new lt(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: Fn.meshphong_vert,
        fragmentShader: Fn.meshphong_frag,
      },
      standard: {
        uniforms: xn([
          Bn.common,
          Bn.envmap,
          Bn.aomap,
          Bn.lightmap,
          Bn.emissivemap,
          Bn.bumpmap,
          Bn.normalmap,
          Bn.displacementmap,
          Bn.roughnessmap,
          Bn.metalnessmap,
          Bn.fog,
          Bn.lights,
          {
            emissive: { value: new lt(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: Fn.meshphysical_vert,
        fragmentShader: Fn.meshphysical_frag,
      },
      toon: {
        uniforms: xn([
          Bn.common,
          Bn.aomap,
          Bn.lightmap,
          Bn.emissivemap,
          Bn.bumpmap,
          Bn.normalmap,
          Bn.displacementmap,
          Bn.gradientmap,
          Bn.fog,
          Bn.lights,
          { emissive: { value: new lt(0) } },
        ]),
        vertexShader: Fn.meshtoon_vert,
        fragmentShader: Fn.meshtoon_frag,
      },
      matcap: {
        uniforms: xn([
          Bn.common,
          Bn.bumpmap,
          Bn.normalmap,
          Bn.displacementmap,
          Bn.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: Fn.meshmatcap_vert,
        fragmentShader: Fn.meshmatcap_frag,
      },
      points: {
        uniforms: xn([Bn.points, Bn.fog]),
        vertexShader: Fn.points_vert,
        fragmentShader: Fn.points_frag,
      },
      dashed: {
        uniforms: xn([
          Bn.common,
          Bn.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: Fn.linedashed_vert,
        fragmentShader: Fn.linedashed_frag,
      },
      depth: {
        uniforms: xn([Bn.common, Bn.displacementmap]),
        vertexShader: Fn.depth_vert,
        fragmentShader: Fn.depth_frag,
      },
      normal: {
        uniforms: xn([
          Bn.common,
          Bn.bumpmap,
          Bn.normalmap,
          Bn.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: Fn.meshnormal_vert,
        fragmentShader: Fn.meshnormal_frag,
      },
      sprite: {
        uniforms: xn([Bn.sprite, Bn.fog]),
        vertexShader: Fn.sprite_vert,
        fragmentShader: Fn.sprite_frag,
      },
      background: {
        uniforms: { uvTransform: { value: new Z() }, t2D: { value: null } },
        vertexShader: Fn.background_vert,
        fragmentShader: Fn.background_frag,
      },
      cube: {
        uniforms: xn([Bn.envmap, { opacity: { value: 1 } }]),
        vertexShader: Fn.cube_vert,
        fragmentShader: Fn.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: Fn.equirect_vert,
        fragmentShader: Fn.equirect_frag,
      },
      distanceRGBA: {
        uniforms: xn([
          Bn.common,
          Bn.displacementmap,
          {
            referencePosition: { value: new Mt() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: Fn.distanceRGBA_vert,
        fragmentShader: Fn.distanceRGBA_frag,
      },
      shadow: {
        uniforms: xn([
          Bn.lights,
          Bn.fog,
          { color: { value: new lt(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: Fn.shadow_vert,
        fragmentShader: Fn.shadow_frag,
      },
    };
  function Hn(t, e, n, i, r, a) {
    const s = new lt(0);
    let o,
      l,
      c = !0 === r ? 0 : 1,
      h = null,
      d = 0,
      p = null;
    function m(t, e) {
      n.buffers.color.setClear(t.r, t.g, t.b, e, a);
    }
    return {
      getClearColor: function () {
        return s;
      },
      setClearColor: function (t, e = 1) {
        s.set(t), (c = e), m(s, c);
      },
      getClearAlpha: function () {
        return c;
      },
      setClearAlpha: function (t) {
        (c = t), m(s, c);
      },
      render: function (n, r) {
        let a = !1,
          f = !0 === r.isScene ? r.background : null;
        f && f.isTexture && (f = e.get(f));
        const g = t.xr,
          _ = g.getSession && g.getSession();
        _ && "additive" === _.environmentBlendMode && (f = null),
          null === f ? m(s, c) : f && f.isColor && (m(f, 1), (a = !0)),
          (t.autoClear || a) &&
            t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
          f && (f.isCubeTexture || f.mapping === u)
            ? (void 0 === l &&
                ((l = new fn(
                  new _n(1, 1, 1),
                  new yn({
                    name: "BackgroundCubeMaterial",
                    uniforms: vn(Gn.cube.uniforms),
                    vertexShader: Gn.cube.vertexShader,
                    fragmentShader: Gn.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                l.geometry.deleteAttribute("normal"),
                l.geometry.deleteAttribute("uv"),
                (l.onBeforeRender = function (t, e, n) {
                  this.matrixWorld.copyPosition(n.matrixWorld);
                }),
                Object.defineProperty(l.material, "envMap", {
                  get: function () {
                    return this.uniforms.envMap.value;
                  },
                }),
                i.update(l)),
              (l.material.uniforms.envMap.value = f),
              (l.material.uniforms.flipEnvMap.value =
                f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1),
              (h === f && d === f.version && p === t.toneMapping) ||
                ((l.material.needsUpdate = !0),
                (h = f),
                (d = f.version),
                (p = t.toneMapping)),
              l.layers.enableAll(),
              n.unshift(l, l.geometry, l.material, 0, 0, null))
            : f &&
              f.isTexture &&
              (void 0 === o &&
                ((o = new fn(
                  new Un(2, 2),
                  new yn({
                    name: "BackgroundMaterial",
                    uniforms: vn(Gn.background.uniforms),
                    vertexShader: Gn.background.vertexShader,
                    fragmentShader: Gn.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                o.geometry.deleteAttribute("normal"),
                Object.defineProperty(o.material, "map", {
                  get: function () {
                    return this.uniforms.t2D.value;
                  },
                }),
                i.update(o)),
              (o.material.uniforms.t2D.value = f),
              !0 === f.matrixAutoUpdate && f.updateMatrix(),
              o.material.uniforms.uvTransform.value.copy(f.matrix),
              (h === f && d === f.version && p === t.toneMapping) ||
                ((o.material.needsUpdate = !0),
                (h = f),
                (d = f.version),
                (p = t.toneMapping)),
              o.layers.enableAll(),
              n.unshift(o, o.geometry, o.material, 0, 0, null));
      },
    };
  }
  function Vn(t, e, n, i) {
    const r = t.getParameter(34921),
      a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
      s = i.isWebGL2 || null !== a,
      o = {},
      l = p(null);
    let c = l,
      h = !1;
    function u(e) {
      return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
    }
    function d(e) {
      return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e);
    }
    function p(t) {
      const e = [],
        n = [],
        i = [];
      for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: i,
        object: t,
        attributes: {},
        index: null,
      };
    }
    function m() {
      const t = c.newAttributes;
      for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
    }
    function f(t) {
      g(t, 0);
    }
    function g(n, r) {
      const a = c.newAttributes,
        s = c.enabledAttributes,
        o = c.attributeDivisors;
      if (
        ((a[n] = 1),
        0 === s[n] && (t.enableVertexAttribArray(n), (s[n] = 1)),
        o[n] !== r)
      ) {
        (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[
          i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](n, r),
          (o[n] = r);
      }
    }
    function _() {
      const e = c.newAttributes,
        n = c.enabledAttributes;
      for (let i = 0, r = n.length; i < r; i++)
        n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
    }
    function v(e, n, r, a, s, o) {
      !0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
        ? t.vertexAttribPointer(e, n, r, a, s, o)
        : t.vertexAttribIPointer(e, n, r, s, o);
    }
    function x() {
      M(), (h = !0), c !== l && ((c = l), u(c.object));
    }
    function M() {
      (l.geometry = null), (l.program = null), (l.wireframe = !1);
    }
    return {
      setup: function (r, l, d, x, M) {
        let y = !1;
        if (s) {
          const e = (function (e, n, r) {
            const s = !0 === r.wireframe;
            let l = o[e.id];
            void 0 === l && ((l = {}), (o[e.id] = l));
            let c = l[n.id];
            void 0 === c && ((c = {}), (l[n.id] = c));
            let h = c[s];
            void 0 === h &&
              ((h = p(
                i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()
              )),
              (c[s] = h));
            return h;
          })(x, d, l);
          c !== e && ((c = e), u(c.object)),
            (y = (function (t, e, n, i) {
              const r = c.attributes,
                a = e.attributes;
              let s = 0;
              const o = n.getAttributes();
              for (const e in o) {
                if (o[e].location >= 0) {
                  const n = r[e];
                  let i = a[e];
                  if (
                    (void 0 === i &&
                      ("instanceMatrix" === e &&
                        t.instanceMatrix &&
                        (i = t.instanceMatrix),
                      "instanceColor" === e &&
                        t.instanceColor &&
                        (i = t.instanceColor)),
                    void 0 === n)
                  )
                    return !0;
                  if (n.attribute !== i) return !0;
                  if (i && n.data !== i.data) return !0;
                  s++;
                }
              }
              return c.attributesNum !== s || c.index !== i;
            })(r, x, d, M)),
            y &&
              (function (t, e, n, i) {
                const r = {},
                  a = e.attributes;
                let s = 0;
                const o = n.getAttributes();
                for (const e in o) {
                  if (o[e].location >= 0) {
                    let n = a[e];
                    void 0 === n &&
                      ("instanceMatrix" === e &&
                        t.instanceMatrix &&
                        (n = t.instanceMatrix),
                      "instanceColor" === e &&
                        t.instanceColor &&
                        (n = t.instanceColor));
                    const i = {};
                    (i.attribute = n),
                      n && n.data && (i.data = n.data),
                      (r[e] = i),
                      s++;
                  }
                }
                (c.attributes = r), (c.attributesNum = s), (c.index = i);
              })(r, x, d, M);
        } else {
          const t = !0 === l.wireframe;
          (c.geometry === x.id && c.program === d.id && c.wireframe === t) ||
            ((c.geometry = x.id),
            (c.program = d.id),
            (c.wireframe = t),
            (y = !0));
        }
        null !== M && n.update(M, 34963),
          (y || h) &&
            ((h = !1),
            (function (r, a, s, o) {
              if (
                !1 === i.isWebGL2 &&
                (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                null === e.get("ANGLE_instanced_arrays")
              )
                return;
              m();
              const l = o.attributes,
                c = s.getAttributes(),
                h = a.defaultAttributeValues;
              for (const e in c) {
                const i = c[e];
                if (i.location >= 0) {
                  let a = l[e];
                  if (
                    (void 0 === a &&
                      ("instanceMatrix" === e &&
                        r.instanceMatrix &&
                        (a = r.instanceMatrix),
                      "instanceColor" === e &&
                        r.instanceColor &&
                        (a = r.instanceColor)),
                    void 0 !== a)
                  ) {
                    const e = a.normalized,
                      s = a.itemSize,
                      l = n.get(a);
                    if (void 0 === l) continue;
                    const c = l.buffer,
                      h = l.type,
                      u = l.bytesPerElement;
                    if (a.isInterleavedBufferAttribute) {
                      const n = a.data,
                        l = n.stride,
                        d = a.offset;
                      if (n.isInstancedInterleavedBuffer) {
                        for (let t = 0; t < i.locationSize; t++)
                          g(i.location + t, n.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = n.meshPerAttribute * n.count);
                      } else
                        for (let t = 0; t < i.locationSize; t++)
                          f(i.location + t);
                      t.bindBuffer(34962, c);
                      for (let t = 0; t < i.locationSize; t++)
                        v(
                          i.location + t,
                          s / i.locationSize,
                          h,
                          e,
                          l * u,
                          (d + (s / i.locationSize) * t) * u
                        );
                    } else {
                      if (a.isInstancedBufferAttribute) {
                        for (let t = 0; t < i.locationSize; t++)
                          g(i.location + t, a.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = a.meshPerAttribute * a.count);
                      } else
                        for (let t = 0; t < i.locationSize; t++)
                          f(i.location + t);
                      t.bindBuffer(34962, c);
                      for (let t = 0; t < i.locationSize; t++)
                        v(
                          i.location + t,
                          s / i.locationSize,
                          h,
                          e,
                          s * u,
                          (s / i.locationSize) * t * u
                        );
                    }
                  } else if (void 0 !== h) {
                    const n = h[e];
                    if (void 0 !== n)
                      switch (n.length) {
                        case 2:
                          t.vertexAttrib2fv(i.location, n);
                          break;
                        case 3:
                          t.vertexAttrib3fv(i.location, n);
                          break;
                        case 4:
                          t.vertexAttrib4fv(i.location, n);
                          break;
                        default:
                          t.vertexAttrib1fv(i.location, n);
                      }
                  }
                }
              }
              _();
            })(r, l, d, x),
            null !== M && t.bindBuffer(34963, n.get(M).buffer));
      },
      reset: x,
      resetDefaultState: M,
      dispose: function () {
        x();
        for (const t in o) {
          const e = o[t];
          for (const t in e) {
            const n = e[t];
            for (const t in n) d(n[t].object), delete n[t];
            delete e[t];
          }
          delete o[t];
        }
      },
      releaseStatesOfGeometry: function (t) {
        if (void 0 === o[t.id]) return;
        const e = o[t.id];
        for (const t in e) {
          const n = e[t];
          for (const t in n) d(n[t].object), delete n[t];
          delete e[t];
        }
        delete o[t.id];
      },
      releaseStatesOfProgram: function (t) {
        for (const e in o) {
          const n = o[e];
          if (void 0 === n[t.id]) continue;
          const i = n[t.id];
          for (const t in i) d(i[t].object), delete i[t];
          delete n[t.id];
        }
      },
      initAttributes: m,
      enableAttribute: f,
      disableUnusedAttributes: _,
    };
  }
  function kn(t, e, n, i) {
    const r = i.isWebGL2;
    let a;
    (this.setMode = function (t) {
      a = t;
    }),
      (this.render = function (e, i) {
        t.drawArrays(a, e, i), n.update(i, a, 1);
      }),
      (this.renderInstances = function (i, s, o) {
        if (0 === o) return;
        let l, c;
        if (r) (l = t), (c = "drawArraysInstanced");
        else if (
          ((l = e.get("ANGLE_instanced_arrays")),
          (c = "drawArraysInstancedANGLE"),
          null === l)
        )
          return void console.error(
            "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        l[c](a, i, s, o), n.update(s, a, o);
      });
  }
  function Wn(t, e, n) {
    let i;
    function r(e) {
      if ("highp" === e) {
        if (
          t.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
          t.getShaderPrecisionFormat(35632, 36338).precision > 0
        )
          return "highp";
        e = "mediump";
      }
      return "mediump" === e &&
        t.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
        t.getShaderPrecisionFormat(35632, 36337).precision > 0
        ? "mediump"
        : "lowp";
    }
    const a =
      ("undefined" != typeof WebGL2RenderingContext &&
        t instanceof WebGL2RenderingContext) ||
      ("undefined" != typeof WebGL2ComputeRenderingContext &&
        t instanceof WebGL2ComputeRenderingContext);
    let s = void 0 !== n.precision ? n.precision : "highp";
    const o = r(s);
    o !== s &&
      (console.warn(
        "THREE.WebGLRenderer:",
        s,
        "not supported, using",
        o,
        "instead."
      ),
      (s = o));
    const l = a || e.has("WEBGL_draw_buffers"),
      c = !0 === n.logarithmicDepthBuffer,
      h = t.getParameter(34930),
      u = t.getParameter(35660),
      d = t.getParameter(3379),
      p = t.getParameter(34076),
      m = t.getParameter(34921),
      f = t.getParameter(36347),
      g = t.getParameter(36348),
      _ = t.getParameter(36349),
      v = u > 0,
      x = a || e.has("OES_texture_float");
    return {
      isWebGL2: a,
      drawBuffers: l,
      getMaxAnisotropy: function () {
        if (void 0 !== i) return i;
        if (!0 === e.has("EXT_texture_filter_anisotropic")) {
          const n = e.get("EXT_texture_filter_anisotropic");
          i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else i = 0;
        return i;
      },
      getMaxPrecision: r,
      precision: s,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: u,
      maxTextureSize: d,
      maxCubemapSize: p,
      maxAttributes: m,
      maxVertexUniforms: f,
      maxVaryings: g,
      maxFragmentUniforms: _,
      vertexTextures: v,
      floatFragmentTextures: x,
      floatVertexTextures: v && x,
      maxSamples: a ? t.getParameter(36183) : 0,
    };
  }
  function jn(t) {
    const e = this;
    let n = null,
      i = 0,
      r = !1,
      a = !1;
    const s = new Pn(),
      o = new Z(),
      l = { value: null, needsUpdate: !1 };
    function c() {
      l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
        (e.numPlanes = i),
        (e.numIntersection = 0);
    }
    function h(t, n, i, r) {
      const a = null !== t ? t.length : 0;
      let c = null;
      if (0 !== a) {
        if (((c = l.value), !0 !== r || null === c)) {
          const e = i + 4 * a,
            r = n.matrixWorldInverse;
          o.getNormalMatrix(r),
            (null === c || c.length < e) && (c = new Float32Array(e));
          for (let e = 0, n = i; e !== a; ++e, n += 4)
            s.copy(t[e]).applyMatrix4(r, o),
              s.normal.toArray(c, n),
              (c[n + 3] = s.constant);
        }
        (l.value = c), (l.needsUpdate = !0);
      }
      return (e.numPlanes = a), (e.numIntersection = 0), c;
    }
    (this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (t, e, a) {
        const s = 0 !== t.length || e || 0 !== i || r;
        return (r = e), (n = h(t, a, 0)), (i = t.length), s;
      }),
      (this.beginShadows = function () {
        (a = !0), h(null);
      }),
      (this.endShadows = function () {
        (a = !1), c();
      }),
      (this.setState = function (e, s, o) {
        const u = e.clippingPlanes,
          d = e.clipIntersection,
          p = e.clipShadows,
          m = t.get(e);
        if (!r || null === u || 0 === u.length || (a && !p)) a ? h(null) : c();
        else {
          const t = a ? 0 : i,
            e = 4 * t;
          let r = m.clippingState || null;
          (l.value = r), (r = h(u, s, e, o));
          for (let t = 0; t !== e; ++t) r[t] = n[t];
          (m.clippingState = r),
            (this.numIntersection = d ? this.numPlanes : 0),
            (this.numPlanes += t);
        }
      });
  }
  function Xn(t) {
    let e = new WeakMap();
    function n(t, e) {
      return 303 === e ? (t.mapping = c) : 304 === e && (t.mapping = h), t;
    }
    function i(t) {
      const n = t.target;
      n.removeEventListener("dispose", i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
          const a = r.mapping;
          if (303 === a || 304 === a) {
            if (e.has(r)) {
              return n(e.get(r).texture, r.mapping);
            }
            {
              const a = r.image;
              if (a && a.height > 0) {
                const s = new An(a.height / 2);
                return (
                  s.fromEquirectangularTexture(t, r),
                  e.set(r, s),
                  r.addEventListener("dispose", i),
                  n(s.texture, r.mapping)
                );
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  Gn.physical = {
    uniforms: xn([
      Gn.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatNormalScale: { value: new Y(1, 1) },
        clearcoatNormalMap: { value: null },
        iridescence: { value: 0 },
        iridescenceMap: { value: null },
        iridescenceIOR: { value: 1.3 },
        iridescenceThicknessMinimum: { value: 100 },
        iridescenceThicknessMaximum: { value: 400 },
        iridescenceThicknessMap: { value: null },
        sheen: { value: 0 },
        sheenColor: { value: new lt(0) },
        sheenColorMap: { value: null },
        sheenRoughness: { value: 1 },
        sheenRoughnessMap: { value: null },
        transmission: { value: 0 },
        transmissionMap: { value: null },
        transmissionSamplerSize: { value: new Y() },
        transmissionSamplerMap: { value: null },
        thickness: { value: 0 },
        thicknessMap: { value: null },
        attenuationDistance: { value: 0 },
        attenuationColor: { value: new lt(0) },
        specularIntensity: { value: 1 },
        specularIntensityMap: { value: null },
        specularColor: { value: new lt(1, 1, 1) },
        specularColorMap: { value: null },
      },
    ]),
    vertexShader: Fn.meshphysical_vert,
    fragmentShader: Fn.meshphysical_frag,
  };
  class qn extends bn {
    constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
      super(),
        (this.isOrthographicCamera = !0),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = t),
        (this.right = e),
        (this.top = n),
        (this.bottom = i),
        (this.near = r),
        (this.far = a),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.left = t.left),
        (this.right = t.right),
        (this.top = t.top),
        (this.bottom = t.bottom),
        (this.near = t.near),
        (this.far = t.far),
        (this.zoom = t.zoom),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        this
      );
    }
    setViewOffset(t, e, n, i, r, a) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
      let r = n - t,
        a = n + t,
        s = i + e,
        o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
          e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (r += t * this.view.offsetX),
          (a = r + t * this.view.width),
          (s -= e * this.view.offsetY),
          (o = s - e * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.zoom = this.zoom),
        (e.object.left = this.left),
        (e.object.right = this.right),
        (e.object.top = this.top),
        (e.object.bottom = this.bottom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        e
      );
    }
  }
  const Yn = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    Zn = 20,
    Jn = new qn(),
    Kn = new lt();
  let Qn = null;
  const $n = (1 + Math.sqrt(5)) / 2,
    ti = 1 / $n,
    ei = [
      new Mt(1, 1, 1),
      new Mt(-1, 1, 1),
      new Mt(1, 1, -1),
      new Mt(-1, 1, -1),
      new Mt(0, $n, ti),
      new Mt(0, $n, -ti),
      new Mt(ti, 0, $n),
      new Mt(-ti, 0, $n),
      new Mt($n, ti, 0),
      new Mt(-$n, ti, 0),
    ];
  class ni {
    constructor(t) {
      (this._renderer = t),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._lodPlanes = []),
        (this._sizeLods = []),
        (this._sigmas = []),
        (this._blurMaterial = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        this._compileMaterial(this._blurMaterial);
    }
    fromScene(t, e = 0, n = 0.1, i = 100) {
      (Qn = this._renderer.getRenderTarget()), this._setSize(256);
      const r = this._allocateTargets();
      return (
        (r.depthBuffer = !0),
        this._sceneToCubeUV(t, n, i, r),
        e > 0 && this._blur(r, 0, 0, e),
        this._applyPMREM(r),
        this._cleanup(r),
        r
      );
    }
    fromEquirectangular(t, e = null) {
      return this._fromTexture(t, e);
    }
    fromCubemap(t, e = null) {
      return this._fromTexture(t, e);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial &&
        ((this._cubemapMaterial = si()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial &&
        ((this._equirectMaterial = ai()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(),
        null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
        null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(t) {
      (this._lodMax = Math.floor(Math.log2(t))),
        (this._cubeSize = Math.pow(2, this._lodMax));
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(),
        null !== this._pingPongRenderTarget &&
          this._pingPongRenderTarget.dispose();
      for (let t = 0; t < this._lodPlanes.length; t++)
        this._lodPlanes[t].dispose();
    }
    _cleanup(t) {
      this._renderer.setRenderTarget(Qn),
        (t.scissorTest = !1),
        ri(t, 0, 0, t.width, t.height);
    }
    _fromTexture(t, e) {
      t.mapping === c || t.mapping === h
        ? this._setSize(
            0 === t.image.length
              ? 16
              : t.image[0].width || t.image[0].image.width
          )
        : this._setSize(t.image.width / 4),
        (Qn = this._renderer.getRenderTarget());
      const n = e || this._allocateTargets();
      return (
        this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
      );
    }
    _allocateTargets() {
      const t = 3 * Math.max(this._cubeSize, 112),
        e = 4 * this._cubeSize,
        n = {
          magFilter: g,
          minFilter: g,
          generateMipmaps: !1,
          type: y,
          format: S,
          encoding: R,
          depthBuffer: !1,
        },
        i = ii(t, e, n);
      if (
        null === this._pingPongRenderTarget ||
        this._pingPongRenderTarget.width !== t
      ) {
        null !== this._pingPongRenderTarget && this._dispose(),
          (this._pingPongRenderTarget = ii(t, e, n));
        const { _lodMax: i } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas,
        } = (function (t) {
          const e = [],
            n = [],
            i = [];
          let r = t;
          const a = t - 4 + 1 + Yn.length;
          for (let s = 0; s < a; s++) {
            const a = Math.pow(2, r);
            n.push(a);
            let o = 1 / a;
            s > t - 4 ? (o = Yn[s - t + 4 - 1]) : 0 === s && (o = 0), i.push(o);
            const l = 1 / (a - 2),
              c = -l,
              h = 1 + l,
              u = [c, c, h, c, h, h, c, c, h, h, c, h],
              d = 6,
              p = 6,
              m = 3,
              f = 2,
              g = 1,
              _ = new Float32Array(m * p * d),
              v = new Float32Array(f * p * d),
              x = new Float32Array(g * p * d);
            for (let t = 0; t < d; t++) {
              const e = ((t % 3) * 2) / 3 - 1,
                n = t > 2 ? 0 : -1,
                i = [
                  e,
                  n,
                  0,
                  e + 2 / 3,
                  n,
                  0,
                  e + 2 / 3,
                  n + 1,
                  0,
                  e,
                  n,
                  0,
                  e + 2 / 3,
                  n + 1,
                  0,
                  e,
                  n + 1,
                  0,
                ];
              _.set(i, m * p * t), v.set(u, f * p * t);
              const r = [t, t, t, t, t, t];
              x.set(r, g * p * t);
            }
            const M = new Je();
            M.setAttribute("position", new Be(_, m)),
              M.setAttribute("uv", new Be(v, f)),
              M.setAttribute("faceIndex", new Be(x, g)),
              e.push(M),
              r > 4 && r--;
          }
          return { lodPlanes: e, sizeLods: n, sigmas: i };
        })(i)),
          (this._blurMaterial = (function (t, e, n) {
            const i = new Float32Array(Zn),
              r = new Mt(0, 1, 0);
            return new yn({
              name: "SphericalGaussianBlur",
              defines: {
                n: Zn,
                CUBEUV_TEXEL_WIDTH: 1 / e,
                CUBEUV_TEXEL_HEIGHT: 1 / n,
                CUBEUV_MAX_MIP: `${t}.0`,
              },
              uniforms: {
                envMap: { value: null },
                samples: { value: 1 },
                weights: { value: i },
                latitudinal: { value: !1 },
                dTheta: { value: 0 },
                mipInt: { value: 0 },
                poleAxis: { value: r },
              },
              vertexShader: oi(),
              fragmentShader:
                "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
              blending: 0,
              depthTest: !1,
              depthWrite: !1,
            });
          })(i, t, e));
      }
      return i;
    }
    _compileMaterial(t) {
      const e = new fn(this._lodPlanes[0], t);
      this._renderer.compile(e, Jn);
    }
    _sceneToCubeUV(t, e, n, i) {
      const r = new Sn(90, 1, e, n),
        a = [1, -1, 1, 1, 1, 1],
        s = [1, 1, 1, -1, -1, -1],
        o = this._renderer,
        l = o.autoClear,
        c = o.toneMapping;
      o.getClearColor(Kn), (o.toneMapping = 0), (o.autoClear = !1);
      const h = new ze({
          name: "PMREM.Background",
          side: 1,
          depthWrite: !1,
          depthTest: !1,
        }),
        u = new fn(new _n(), h);
      let d = !1;
      const p = t.background;
      p
        ? p.isColor && (h.color.copy(p), (t.background = null), (d = !0))
        : (h.color.copy(Kn), (d = !0));
      for (let e = 0; e < 6; e++) {
        const n = e % 3;
        0 === n
          ? (r.up.set(0, a[e], 0), r.lookAt(s[e], 0, 0))
          : 1 === n
          ? (r.up.set(0, 0, a[e]), r.lookAt(0, s[e], 0))
          : (r.up.set(0, a[e], 0), r.lookAt(0, 0, s[e]));
        const l = this._cubeSize;
        ri(i, n * l, e > 2 ? l : 0, l, l),
          o.setRenderTarget(i),
          d && o.render(u, r),
          o.render(t, r);
      }
      u.geometry.dispose(),
        u.material.dispose(),
        (o.toneMapping = c),
        (o.autoClear = l),
        (t.background = p);
    }
    _textureToCubeUV(t, e) {
      const n = this._renderer,
        i = t.mapping === c || t.mapping === h;
      i
        ? (null === this._cubemapMaterial && (this._cubemapMaterial = si()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            !1 === t.isRenderTargetTexture ? -1 : 1))
        : null === this._equirectMaterial && (this._equirectMaterial = ai());
      const r = i ? this._cubemapMaterial : this._equirectMaterial,
        a = new fn(this._lodPlanes[0], r);
      r.uniforms.envMap.value = t;
      const s = this._cubeSize;
      ri(e, 0, 0, 3 * s, 2 * s), n.setRenderTarget(e), n.render(a, Jn);
    }
    _applyPMREM(t) {
      const e = this._renderer,
        n = e.autoClear;
      e.autoClear = !1;
      for (let e = 1; e < this._lodPlanes.length; e++) {
        const n = Math.sqrt(
            this._sigmas[e] * this._sigmas[e] -
              this._sigmas[e - 1] * this._sigmas[e - 1]
          ),
          i = ei[(e - 1) % ei.length];
        this._blur(t, e - 1, e, n, i);
      }
      e.autoClear = n;
    }
    _blur(t, e, n, i, r) {
      const a = this._pingPongRenderTarget;
      this._halfBlur(t, a, e, n, i, "latitudinal", r),
        this._halfBlur(a, t, n, n, i, "longitudinal", r);
    }
    _halfBlur(t, e, n, i, r, a, s) {
      const o = this._renderer,
        l = this._blurMaterial;
      "latitudinal" !== a &&
        "longitudinal" !== a &&
        console.error(
          "blur direction must be either latitudinal or longitudinal!"
        );
      const c = new fn(this._lodPlanes[i], l),
        h = l.uniforms,
        u = this._sizeLods[n] - 1,
        d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
        p = r / d,
        m = isFinite(r) ? 1 + Math.floor(3 * p) : Zn;
      m > Zn &&
        console.warn(
          `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`
        );
      const f = [];
      let g = 0;
      for (let t = 0; t < Zn; ++t) {
        const e = t / p,
          n = Math.exp((-e * e) / 2);
        f.push(n), 0 === t ? (g += n) : t < m && (g += 2 * n);
      }
      for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
      (h.envMap.value = t.texture),
        (h.samples.value = m),
        (h.weights.value = f),
        (h.latitudinal.value = "latitudinal" === a),
        s && (h.poleAxis.value = s);
      const { _lodMax: _ } = this;
      (h.dTheta.value = d), (h.mipInt.value = _ - n);
      const v = this._sizeLods[i];
      ri(
        e,
        3 * v * (i > _ - 4 ? i - _ + 4 : 0),
        4 * (this._cubeSize - v),
        3 * v,
        2 * v
      ),
        o.setRenderTarget(e),
        o.render(c, Jn);
    }
  }
  function ii(t, e, n) {
    const i = new gt(t, e, n);
    return (
      (i.texture.mapping = u),
      (i.texture.name = "PMREM.cubeUv"),
      (i.scissorTest = !0),
      i
    );
  }
  function ri(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
  }
  function ai() {
    return new yn({
      name: "EquirectangularToCubeUV",
      uniforms: { envMap: { value: null } },
      vertexShader: oi(),
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function si() {
    return new yn({
      name: "CubemapToCubeUV",
      uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
      vertexShader: oi(),
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function oi() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
  }
  function li(t) {
    let e = new WeakMap(),
      n = null;
    function i(t) {
      const n = t.target;
      n.removeEventListener("dispose", i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          const a = r.mapping,
            s = 303 === a || 304 === a,
            o = a === c || a === h;
          if (s || o) {
            if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
              r.needsPMREMUpdate = !1;
              let i = e.get(r);
              return (
                null === n && (n = new ni(t)),
                (i = s ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i)),
                e.set(r, i),
                i.texture
              );
            }
            if (e.has(r)) return e.get(r).texture;
            {
              const a = r.image;
              if (
                (s && a && a.height > 0) ||
                (o &&
                  a &&
                  (function (t) {
                    let e = 0;
                    const n = 6;
                    for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                    return e === n;
                  })(a))
              ) {
                null === n && (n = new ni(t));
                const a = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
                return e.set(r, a), r.addEventListener("dispose", i), a.texture;
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
      },
    };
  }
  function ci(t) {
    const e = {};
    function n(n) {
      if (void 0 !== e[n]) return e[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i =
            t.getExtension("WEBGL_depth_texture") ||
            t.getExtension("MOZ_WEBGL_depth_texture") ||
            t.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i =
            t.getExtension("EXT_texture_filter_anisotropic") ||
            t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i =
            t.getExtension("WEBGL_compressed_texture_s3tc") ||
            t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
            t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i =
            t.getExtension("WEBGL_compressed_texture_pvrtc") ||
            t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = t.getExtension(n);
      }
      return (e[n] = i), i;
    }
    return {
      has: function (t) {
        return null !== n(t);
      },
      init: function (t) {
        t.isWebGL2
          ? n("EXT_color_buffer_float")
          : (n("WEBGL_depth_texture"),
            n("OES_texture_float"),
            n("OES_texture_half_float"),
            n("OES_texture_half_float_linear"),
            n("OES_standard_derivatives"),
            n("OES_element_index_uint"),
            n("OES_vertex_array_object"),
            n("ANGLE_instanced_arrays")),
          n("OES_texture_float_linear"),
          n("EXT_color_buffer_half_float"),
          n("WEBGL_multisampled_render_to_texture");
      },
      get: function (t) {
        const e = n(t);
        return (
          null === e &&
            console.warn(
              "THREE.WebGLRenderer: " + t + " extension not supported."
            ),
          e
        );
      },
    };
  }
  function hi(t, e, n, i) {
    const r = {},
      a = new WeakMap();
    function s(t) {
      const o = t.target;
      null !== o.index && e.remove(o.index);
      for (const t in o.attributes) e.remove(o.attributes[t]);
      o.removeEventListener("dispose", s), delete r[o.id];
      const l = a.get(o);
      l && (e.remove(l), a.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--;
    }
    function o(t) {
      const n = [],
        i = t.index,
        r = t.attributes.position;
      let s = 0;
      if (null !== i) {
        const t = i.array;
        s = i.version;
        for (let e = 0, i = t.length; e < i; e += 3) {
          const i = t[e + 0],
            r = t[e + 1],
            a = t[e + 2];
          n.push(i, r, r, a, a, i);
        }
      } else {
        const t = r.array;
        s = r.version;
        for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
          const t = e + 0,
            i = e + 1,
            r = e + 2;
          n.push(t, i, i, r, r, t);
        }
      }
      const o = new (J(n) ? He : Ge)(n, 1);
      o.version = s;
      const l = a.get(t);
      l && e.remove(l), a.set(t, o);
    }
    return {
      get: function (t, e) {
        return (
          !0 === r[e.id] ||
            (e.addEventListener("dispose", s),
            (r[e.id] = !0),
            n.memory.geometries++),
          e
        );
      },
      update: function (t) {
        const n = t.attributes;
        for (const t in n) e.update(n[t], 34962);
        const i = t.morphAttributes;
        for (const t in i) {
          const n = i[t];
          for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962);
        }
      },
      getWireframeAttribute: function (t) {
        const e = a.get(t);
        if (e) {
          const n = t.index;
          null !== n && e.version < n.version && o(t);
        } else o(t);
        return a.get(t);
      },
    };
  }
  function ui(t, e, n, i) {
    const r = i.isWebGL2;
    let a, s, o;
    (this.setMode = function (t) {
      a = t;
    }),
      (this.setIndex = function (t) {
        (s = t.type), (o = t.bytesPerElement);
      }),
      (this.render = function (e, i) {
        t.drawElements(a, i, s, e * o), n.update(i, a, 1);
      }),
      (this.renderInstances = function (i, l, c) {
        if (0 === c) return;
        let h, u;
        if (r) (h = t), (u = "drawElementsInstanced");
        else if (
          ((h = e.get("ANGLE_instanced_arrays")),
          (u = "drawElementsInstancedANGLE"),
          null === h)
        )
          return void console.error(
            "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        h[u](a, l, s, i * o, c), n.update(l, a, c);
      });
  }
  function di(t) {
    const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function () {
        e.frame++,
          (e.calls = 0),
          (e.triangles = 0),
          (e.points = 0),
          (e.lines = 0);
      },
      update: function (t, n, i) {
        switch ((e.calls++, n)) {
          case 4:
            e.triangles += i * (t / 3);
            break;
          case 1:
            e.lines += i * (t / 2);
            break;
          case 3:
            e.lines += i * (t - 1);
            break;
          case 2:
            e.lines += i * t;
            break;
          case 0:
            e.points += i * t;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      },
    };
  }
  function pi(t, e) {
    return t[0] - e[0];
  }
  function mi(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }
  function fi(t, e, n) {
    const i = {},
      r = new Float32Array(8),
      a = new WeakMap(),
      s = new ft(),
      o = [];
    for (let t = 0; t < 8; t++) o[t] = [t, 0];
    return {
      update: function (l, c, h, u) {
        const d = l.morphTargetInfluences;
        if (!0 === e.isWebGL2) {
          const p =
              c.morphAttributes.position ||
              c.morphAttributes.normal ||
              c.morphAttributes.color,
            m = void 0 !== p ? p.length : 0;
          let f = a.get(c);
          if (void 0 === f || f.count !== m) {
            void 0 !== f && f.texture.dispose();
            const v = void 0 !== c.morphAttributes.position,
              x = void 0 !== c.morphAttributes.normal,
              y = void 0 !== c.morphAttributes.color,
              b = c.morphAttributes.position || [],
              S = c.morphAttributes.normal || [],
              w = c.morphAttributes.color || [];
            let T = 0;
            !0 === v && (T = 1), !0 === x && (T = 2), !0 === y && (T = 3);
            let E = c.attributes.position.count * T,
              A = 1;
            E > e.maxTextureSize &&
              ((A = Math.ceil(E / e.maxTextureSize)), (E = e.maxTextureSize));
            const L = new Float32Array(E * A * 4 * m),
              C = new _t(L, E, A, m);
            (C.type = M), (C.needsUpdate = !0);
            const R = 4 * T;
            for (let D = 0; D < m; D++) {
              const I = b[D],
                N = S[D],
                O = w[D],
                z = E * A * 4 * D;
              for (let U = 0; U < I.count; U++) {
                const F = U * R;
                !0 === v &&
                  (s.fromBufferAttribute(I, U),
                  (L[z + F + 0] = s.x),
                  (L[z + F + 1] = s.y),
                  (L[z + F + 2] = s.z),
                  (L[z + F + 3] = 0)),
                  !0 === x &&
                    (s.fromBufferAttribute(N, U),
                    (L[z + F + 4] = s.x),
                    (L[z + F + 5] = s.y),
                    (L[z + F + 6] = s.z),
                    (L[z + F + 7] = 0)),
                  !0 === y &&
                    (s.fromBufferAttribute(O, U),
                    (L[z + F + 8] = s.x),
                    (L[z + F + 9] = s.y),
                    (L[z + F + 10] = s.z),
                    (L[z + F + 11] = 4 === O.itemSize ? s.w : 1));
              }
            }
            function P() {
              C.dispose(), a.delete(c), c.removeEventListener("dispose", P);
            }
            (f = { count: m, texture: C, size: new Y(E, A) }),
              a.set(c, f),
              c.addEventListener("dispose", P);
          }
          let g = 0;
          for (let B = 0; B < d.length; B++) g += d[B];
          const _ = c.morphTargetsRelative ? 1 : 1 - g;
          u.getUniforms().setValue(t, "morphTargetBaseInfluence", _),
            u.getUniforms().setValue(t, "morphTargetInfluences", d),
            u.getUniforms().setValue(t, "morphTargetsTexture", f.texture, n),
            u.getUniforms().setValue(t, "morphTargetsTextureSize", f.size);
        } else {
          const G = void 0 === d ? 0 : d.length;
          let H = i[c.id];
          if (void 0 === H || H.length !== G) {
            H = [];
            for (let X = 0; X < G; X++) H[X] = [X, 0];
            i[c.id] = H;
          }
          for (let q = 0; q < G; q++) {
            const Z = H[q];
            (Z[0] = q), (Z[1] = d[q]);
          }
          H.sort(mi);
          for (let J = 0; J < 8; J++)
            J < G && H[J][1]
              ? ((o[J][0] = H[J][0]), (o[J][1] = H[J][1]))
              : ((o[J][0] = Number.MAX_SAFE_INTEGER), (o[J][1] = 0));
          o.sort(pi);
          const V = c.morphAttributes.position,
            k = c.morphAttributes.normal;
          let W = 0;
          for (let K = 0; K < 8; K++) {
            const Q = o[K],
              $ = Q[0],
              tt = Q[1];
            $ !== Number.MAX_SAFE_INTEGER && tt
              ? (V &&
                  c.getAttribute("morphTarget" + K) !== V[$] &&
                  c.setAttribute("morphTarget" + K, V[$]),
                k &&
                  c.getAttribute("morphNormal" + K) !== k[$] &&
                  c.setAttribute("morphNormal" + K, k[$]),
                (r[K] = tt),
                (W += tt))
              : (V &&
                  !0 === c.hasAttribute("morphTarget" + K) &&
                  c.deleteAttribute("morphTarget" + K),
                k &&
                  !0 === c.hasAttribute("morphNormal" + K) &&
                  c.deleteAttribute("morphNormal" + K),
                (r[K] = 0));
          }
          const j = c.morphTargetsRelative ? 1 : 1 - W;
          u.getUniforms().setValue(t, "morphTargetBaseInfluence", j),
            u.getUniforms().setValue(t, "morphTargetInfluences", r);
        }
      },
    };
  }
  function gi(t, e, n, i) {
    let r = new WeakMap();
    function a(t) {
      const e = t.target;
      e.removeEventListener("dispose", a),
        n.remove(e.instanceMatrix),
        null !== e.instanceColor && n.remove(e.instanceColor);
    }
    return {
      update: function (t) {
        const s = i.render.frame,
          o = t.geometry,
          l = e.get(t, o);
        return (
          r.get(l) !== s && (e.update(l), r.set(l, s)),
          t.isInstancedMesh &&
            (!1 === t.hasEventListener("dispose", a) &&
              t.addEventListener("dispose", a),
            n.update(t.instanceMatrix, 34962),
            null !== t.instanceColor && n.update(t.instanceColor, 34962)),
          l
        );
      },
      dispose: function () {
        r = new WeakMap();
      },
    };
  }
  const _i = new mt(),
    vi = new _t(),
    xi = new vt(),
    Mi = new En(),
    yi = [],
    bi = [],
    Si = new Float32Array(16),
    wi = new Float32Array(9),
    Ti = new Float32Array(4);
  function Ei(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0) return t;
    const r = e * n;
    let a = yi[r];
    if ((void 0 === a && ((a = new Float32Array(r)), (yi[r] = a)), 0 !== e)) {
      i.toArray(a, 0);
      for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(a, r);
    }
    return a;
  }
  function Ai(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
    return !0;
  }
  function Li(t, e) {
    for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
  }
  function Ci(t, e) {
    let n = bi[e];
    void 0 === n && ((n = new Int32Array(e)), (bi[e] = n));
    for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
    return n;
  }
  function Ri(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
  }
  function Pi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (Ai(n, e)) return;
      t.uniform2fv(this.addr, e), Li(n, e);
    }
  }
  function Di(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3f(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else if (void 0 !== e.r)
      (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
        (t.uniform3f(this.addr, e.r, e.g, e.b),
        (n[0] = e.r),
        (n[1] = e.g),
        (n[2] = e.b));
    else {
      if (Ai(n, e)) return;
      t.uniform3fv(this.addr, e), Li(n, e);
    }
  }
  function Ii(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (Ai(n, e)) return;
      t.uniform4fv(this.addr, e), Li(n, e);
    }
  }
  function Ni(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Ai(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Li(n, e);
    } else {
      if (Ai(n, i)) return;
      Ti.set(i), t.uniformMatrix2fv(this.addr, !1, Ti), Li(n, i);
    }
  }
  function Oi(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Ai(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Li(n, e);
    } else {
      if (Ai(n, i)) return;
      wi.set(i), t.uniformMatrix3fv(this.addr, !1, wi), Li(n, i);
    }
  }
  function zi(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Ai(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Li(n, e);
    } else {
      if (Ai(n, i)) return;
      Si.set(i), t.uniformMatrix4fv(this.addr, !1, Si), Li(n, i);
    }
  }
  function Ui(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
  }
  function Fi(t, e) {
    const n = this.cache;
    Ai(n, e) || (t.uniform2iv(this.addr, e), Li(n, e));
  }
  function Bi(t, e) {
    const n = this.cache;
    Ai(n, e) || (t.uniform3iv(this.addr, e), Li(n, e));
  }
  function Gi(t, e) {
    const n = this.cache;
    Ai(n, e) || (t.uniform4iv(this.addr, e), Li(n, e));
  }
  function Hi(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
  }
  function Vi(t, e) {
    const n = this.cache;
    Ai(n, e) || (t.uniform2uiv(this.addr, e), Li(n, e));
  }
  function ki(t, e) {
    const n = this.cache;
    Ai(n, e) || (t.uniform3uiv(this.addr, e), Li(n, e));
  }
  function Wi(t, e) {
    const n = this.cache;
    Ai(n, e) || (t.uniform4uiv(this.addr, e), Li(n, e));
  }
  function ji(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2D(e || _i, r);
  }
  function Xi(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture3D(e || xi, r);
  }
  function qi(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTextureCube(e || Mi, r);
  }
  function Yi(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2DArray(e || vi, r);
  }
  function Zi(t, e) {
    t.uniform1fv(this.addr, e);
  }
  function Ji(t, e) {
    const n = Ei(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }
  function Ki(t, e) {
    const n = Ei(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }
  function Qi(t, e) {
    const n = Ei(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }
  function $i(t, e) {
    const n = Ei(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }
  function tr(t, e) {
    const n = Ei(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }
  function er(t, e) {
    const n = Ei(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }
  function nr(t, e) {
    t.uniform1iv(this.addr, e);
  }
  function ir(t, e) {
    t.uniform2iv(this.addr, e);
  }
  function rr(t, e) {
    t.uniform3iv(this.addr, e);
  }
  function ar(t, e) {
    t.uniform4iv(this.addr, e);
  }
  function sr(t, e) {
    t.uniform1uiv(this.addr, e);
  }
  function or(t, e) {
    t.uniform2uiv(this.addr, e);
  }
  function lr(t, e) {
    t.uniform3uiv(this.addr, e);
  }
  function cr(t, e) {
    t.uniform4uiv(this.addr, e);
  }
  function hr(t, e, n) {
    const i = e.length,
      r = Ci(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t) n.setTexture2D(e[t] || _i, r[t]);
  }
  function ur(t, e, n) {
    const i = e.length,
      r = Ci(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t) n.setTexture3D(e[t] || xi, r[t]);
  }
  function dr(t, e, n) {
    const i = e.length,
      r = Ci(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t) n.setTextureCube(e[t] || Mi, r[t]);
  }
  function pr(t, e, n) {
    const i = e.length,
      r = Ci(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t) n.setTexture2DArray(e[t] || vi, r[t]);
  }
  class mr {
    constructor(t, e, n) {
      (this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return Ri;
            case 35664:
              return Pi;
            case 35665:
              return Di;
            case 35666:
              return Ii;
            case 35674:
              return Ni;
            case 35675:
              return Oi;
            case 35676:
              return zi;
            case 5124:
            case 35670:
              return Ui;
            case 35667:
            case 35671:
              return Fi;
            case 35668:
            case 35672:
              return Bi;
            case 35669:
            case 35673:
              return Gi;
            case 5125:
              return Hi;
            case 36294:
              return Vi;
            case 36295:
              return ki;
            case 36296:
              return Wi;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return ji;
            case 35679:
            case 36299:
            case 36307:
              return Xi;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return qi;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return Yi;
          }
        })(e.type));
    }
  }
  class fr {
    constructor(t, e, n) {
      (this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.size = e.size),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return Zi;
            case 35664:
              return Ji;
            case 35665:
              return Ki;
            case 35666:
              return Qi;
            case 35674:
              return $i;
            case 35675:
              return tr;
            case 35676:
              return er;
            case 5124:
            case 35670:
              return nr;
            case 35667:
            case 35671:
              return ir;
            case 35668:
            case 35672:
              return rr;
            case 35669:
            case 35673:
              return ar;
            case 5125:
              return sr;
            case 36294:
              return or;
            case 36295:
              return lr;
            case 36296:
              return cr;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return hr;
            case 35679:
            case 36299:
            case 36307:
              return ur;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return dr;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return pr;
          }
        })(e.type));
    }
  }
  class gr {
    constructor(t) {
      (this.id = t), (this.seq = []), (this.map = {});
    }
    setValue(t, e, n) {
      const i = this.seq;
      for (let r = 0, a = i.length; r !== a; ++r) {
        const a = i[r];
        a.setValue(t, e[a.id], n);
      }
    }
  }
  const _r = /(\w+)(\])?(\[|\.)?/g;
  function vr(t, e) {
    t.seq.push(e), (t.map[e.id] = e);
  }
  function xr(t, e, n) {
    const i = t.name,
      r = i.length;
    for (_r.lastIndex = 0; ; ) {
      const a = _r.exec(i),
        s = _r.lastIndex;
      let o = a[1];
      const l = "]" === a[2],
        c = a[3];
      if ((l && (o |= 0), void 0 === c || ("[" === c && s + 2 === r))) {
        vr(n, void 0 === c ? new mr(o, t, e) : new fr(o, t, e));
        break;
      }
      {
        let t = n.map[o];
        void 0 === t && ((t = new gr(o)), vr(n, t)), (n = t);
      }
    }
  }
  class Mr {
    constructor(t, e) {
      (this.seq = []), (this.map = {});
      const n = t.getProgramParameter(e, 35718);
      for (let i = 0; i < n; ++i) {
        const n = t.getActiveUniform(e, i);
        xr(n, t.getUniformLocation(e, n.name), this);
      }
    }
    setValue(t, e, n, i) {
      const r = this.map[e];
      void 0 !== r && r.setValue(t, n, i);
    }
    setOptional(t, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t, n, i);
    }
    static upload(t, e, n, i) {
      for (let r = 0, a = e.length; r !== a; ++r) {
        const a = e[r],
          s = n[a.id];
        !1 !== s.needsUpdate && a.setValue(t, s.value, i);
      }
    }
    static seqWithValue(t, e) {
      const n = [];
      for (let i = 0, r = t.length; i !== r; ++i) {
        const r = t[i];
        r.id in e && n.push(r);
      }
      return n;
    }
  }
  function yr(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
  }
  let br = 0;
  function Sr(t, e, n) {
    const i = t.getShaderParameter(e, 35713),
      r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    const a = /ERROR: 0:(\d+)/.exec(r);
    if (a) {
      const i = parseInt(a[1]);
      return (
        n.toUpperCase() +
        "\n\n" +
        r +
        "\n\n" +
        (function (t, e) {
          const n = t.split("\n"),
            i = [],
            r = Math.max(e - 6, 0),
            a = Math.min(e + 6, n.length);
          for (let t = r; t < a; t++) {
            const r = t + 1;
            i.push(`${r === e ? ">" : " "} ${r}: ${n[t]}`);
          }
          return i.join("\n");
        })(t.getShaderSource(e), i)
      );
    }
    return r;
  }
  function wr(t, e) {
    const n = (function (t) {
      switch (t) {
        case R:
          return ["Linear", "( value )"];
        case P:
          return ["sRGB", "( value )"];
        default:
          return (
            console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
            ["Linear", "( value )"]
          );
      }
    })(e);
    return (
      "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    );
  }
  function Tr(t, e) {
    let n;
    switch (e) {
      case 1:
        n = "Linear";
        break;
      case 2:
        n = "Reinhard";
        break;
      case 3:
        n = "OptimizedCineon";
        break;
      case 4:
        n = "ACESFilmic";
        break;
      case 5:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
          (n = "Linear");
    }
    return (
      "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    );
  }
  function Er(t) {
    return "" !== t;
  }
  function Ar(t, e) {
    const n =
      e.numSpotLightShadows +
      e.numSpotLightMaps -
      e.numSpotLightShadowsWithMaps;
    return t
      .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
      .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
      .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
      .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
      .replace(
        /NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,
        e.numSpotLightShadowsWithMaps
      )
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function Lr(t, e) {
    return t
      .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        e.numClippingPlanes - e.numClipIntersection
      );
  }
  const Cr = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Rr(t) {
    return t.replace(Cr, Pr);
  }
  function Pr(t, e) {
    const n = Fn[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return Rr(n);
  }
  const Dr =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Ir(t) {
    return t.replace(Dr, Nr);
  }
  function Nr(t, e, n, i) {
    let r = "";
    for (let t = parseInt(e); t < parseInt(n); t++)
      r += i
        .replace(/\[\s*i\s*\]/g, "[ " + t + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, t);
    return r;
  }
  function Or(t) {
    let e =
      "precision " +
      t.precision +
      " float;\nprecision " +
      t.precision +
      " int;";
    return (
      "highp" === t.precision
        ? (e += "\n#define HIGH_PRECISION")
        : "mediump" === t.precision
        ? (e += "\n#define MEDIUM_PRECISION")
        : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
      e
    );
  }
  function zr(t, e, n, i) {
    const r = t.getContext(),
      a = n.defines;
    let s = n.vertexShader,
      o = n.fragmentShader;
    const l = (function (t) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return (
          1 === t.shadowMapType
            ? (e = "SHADOWMAP_TYPE_PCF")
            : 2 === t.shadowMapType
            ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
            : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
          e
        );
      })(n),
      d = (function (t) {
        let e = "ENVMAP_TYPE_CUBE";
        if (t.envMap)
          switch (t.envMapMode) {
            case c:
            case h:
              e = "ENVMAP_TYPE_CUBE";
              break;
            case u:
              e = "ENVMAP_TYPE_CUBE_UV";
          }
        return e;
      })(n),
      p = (function (t) {
        let e = "ENVMAP_MODE_REFLECTION";
        t.envMap && t.envMapMode === h && (e = "ENVMAP_MODE_REFRACTION");
        return e;
      })(n),
      m = (function (t) {
        let e = "ENVMAP_BLENDING_NONE";
        if (t.envMap)
          switch (t.combine) {
            case 0:
              e = "ENVMAP_BLENDING_MULTIPLY";
              break;
            case 1:
              e = "ENVMAP_BLENDING_MIX";
              break;
            case 2:
              e = "ENVMAP_BLENDING_ADD";
          }
        return e;
      })(n),
      f = (function (t) {
        const e = t.envMapCubeUVHeight;
        if (null === e) return null;
        const n = Math.log2(e) - 2,
          i = 1 / e;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
          texelHeight: i,
          maxMip: n,
        };
      })(n),
      g = n.isWebGL2
        ? ""
        : (function (t) {
            return [
              t.extensionDerivatives ||
              t.envMapCubeUVHeight ||
              t.bumpMap ||
              t.tangentSpaceNormalMap ||
              t.clearcoatNormalMap ||
              t.flatShading ||
              "physical" === t.shaderID
                ? "#extension GL_OES_standard_derivatives : enable"
                : "",
              (t.extensionFragDepth || t.logarithmicDepthBuffer) &&
              t.rendererExtensionFragDepth
                ? "#extension GL_EXT_frag_depth : enable"
                : "",
              t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
                ? "#extension GL_EXT_draw_buffers : require"
                : "",
              (t.extensionShaderTextureLOD || t.envMap || t.transmission) &&
              t.rendererExtensionShaderTextureLod
                ? "#extension GL_EXT_shader_texture_lod : enable"
                : "",
            ]
              .filter(Er)
              .join("\n");
          })(n),
      _ = (function (t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          !1 !== i && e.push("#define " + n + " " + i);
        }
        return e.join("\n");
      })(a),
      v = r.createProgram();
    let x,
      M,
      y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial
      ? ((x = [_].filter(Er).join("\n")),
        x.length > 0 && (x += "\n"),
        (M = [g, _].filter(Er).join("\n")),
        M.length > 0 && (M += "\n"))
      : ((x = [
          Or(n),
          "#define SHADER_NAME " + n.shaderName,
          _,
          n.instancing ? "#define USE_INSTANCING" : "",
          n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
          n.useFog && n.fog ? "#define USE_FOG" : "",
          n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
          n.map ? "#define USE_MAP" : "",
          n.envMap ? "#define USE_ENVMAP" : "",
          n.envMap ? "#define " + p : "",
          n.lightMap ? "#define USE_LIGHTMAP" : "",
          n.aoMap ? "#define USE_AOMAP" : "",
          n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          n.bumpMap ? "#define USE_BUMPMAP" : "",
          n.normalMap ? "#define USE_NORMALMAP" : "",
          n.normalMap && n.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          n.normalMap && n.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          n.iridescenceThicknessMap
            ? "#define USE_IRIDESCENCE_THICKNESSMAP"
            : "",
          n.displacementMap && n.supportsVertexTextures
            ? "#define USE_DISPLACEMENTMAP"
            : "",
          n.specularMap ? "#define USE_SPECULARMAP" : "",
          n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
          n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
          n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          n.metalnessMap ? "#define USE_METALNESSMAP" : "",
          n.alphaMap ? "#define USE_ALPHAMAP" : "",
          n.transmission ? "#define USE_TRANSMISSION" : "",
          n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
          n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
          n.vertexTangents ? "#define USE_TANGENT" : "",
          n.vertexColors ? "#define USE_COLOR" : "",
          n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          n.vertexUvs ? "#define USE_UV" : "",
          n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          n.flatShading ? "#define FLAT_SHADED" : "",
          n.skinning ? "#define USE_SKINNING" : "",
          n.morphTargets ? "#define USE_MORPHTARGETS" : "",
          n.morphNormals && !1 === n.flatShading
            ? "#define USE_MORPHNORMALS"
            : "",
          n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE"
            : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
            : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
            : "",
          n.doubleSided ? "#define DOUBLE_SIDED" : "",
          n.flipSided ? "#define FLIP_SIDED" : "",
          n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          n.shadowMapEnabled ? "#define " + l : "",
          n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "\tattribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "\tattribute vec3 instanceColor;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_TANGENT",
          "\tattribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "\tattribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "\tattribute vec3 color;",
          "#endif",
          "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
          "\tattribute vec3 morphTarget0;",
          "\tattribute vec3 morphTarget1;",
          "\tattribute vec3 morphTarget2;",
          "\tattribute vec3 morphTarget3;",
          "\t#ifdef USE_MORPHNORMALS",
          "\t\tattribute vec3 morphNormal0;",
          "\t\tattribute vec3 morphNormal1;",
          "\t\tattribute vec3 morphNormal2;",
          "\t\tattribute vec3 morphNormal3;",
          "\t#else",
          "\t\tattribute vec3 morphTarget4;",
          "\t\tattribute vec3 morphTarget5;",
          "\t\tattribute vec3 morphTarget6;",
          "\t\tattribute vec3 morphTarget7;",
          "\t#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "\tattribute vec4 skinIndex;",
          "\tattribute vec4 skinWeight;",
          "#endif",
          "\n",
        ]
          .filter(Er)
          .join("\n")),
        (M = [
          g,
          Or(n),
          "#define SHADER_NAME " + n.shaderName,
          _,
          n.useFog && n.fog ? "#define USE_FOG" : "",
          n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
          n.map ? "#define USE_MAP" : "",
          n.matcap ? "#define USE_MATCAP" : "",
          n.envMap ? "#define USE_ENVMAP" : "",
          n.envMap ? "#define " + d : "",
          n.envMap ? "#define " + p : "",
          n.envMap ? "#define " + m : "",
          f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
          f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
          f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
          n.lightMap ? "#define USE_LIGHTMAP" : "",
          n.aoMap ? "#define USE_AOMAP" : "",
          n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          n.bumpMap ? "#define USE_BUMPMAP" : "",
          n.normalMap ? "#define USE_NORMALMAP" : "",
          n.normalMap && n.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          n.normalMap && n.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          n.clearcoat ? "#define USE_CLEARCOAT" : "",
          n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          n.iridescence ? "#define USE_IRIDESCENCE" : "",
          n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          n.iridescenceThicknessMap
            ? "#define USE_IRIDESCENCE_THICKNESSMAP"
            : "",
          n.specularMap ? "#define USE_SPECULARMAP" : "",
          n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
          n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
          n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          n.metalnessMap ? "#define USE_METALNESSMAP" : "",
          n.alphaMap ? "#define USE_ALPHAMAP" : "",
          n.alphaTest ? "#define USE_ALPHATEST" : "",
          n.sheen ? "#define USE_SHEEN" : "",
          n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
          n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
          n.transmission ? "#define USE_TRANSMISSION" : "",
          n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
          n.vertexTangents ? "#define USE_TANGENT" : "",
          n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
          n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          n.vertexUvs ? "#define USE_UV" : "",
          n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          n.gradientMap ? "#define USE_GRADIENTMAP" : "",
          n.flatShading ? "#define FLAT_SHADED" : "",
          n.doubleSided ? "#define DOUBLE_SIDED" : "",
          n.flipSided ? "#define FLIP_SIDED" : "",
          n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          n.shadowMapEnabled ? "#define " + l : "",
          n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
          n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
          0 !== n.toneMapping ? Fn.tonemapping_pars_fragment : "",
          0 !== n.toneMapping ? Tr("toneMapping", n.toneMapping) : "",
          n.dithering ? "#define DITHERING" : "",
          n.opaque ? "#define OPAQUE" : "",
          Fn.encodings_pars_fragment,
          wr("linearToOutputTexel", n.outputEncoding),
          n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
          "\n",
        ]
          .filter(Er)
          .join("\n"))),
      (s = Rr(s)),
      (s = Ar(s, n)),
      (s = Lr(s, n)),
      (o = Rr(o)),
      (o = Ar(o, n)),
      (o = Lr(o, n)),
      (s = Ir(s)),
      (o = Ir(o)),
      n.isWebGL2 &&
        !0 !== n.isRawShaderMaterial &&
        ((y = "#version 300 es\n"),
        (x =
          [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture",
          ].join("\n") +
          "\n" +
          x),
        (M =
          [
            "#define varying in",
            n.glslVersion === O
              ? ""
              : "layout(location = 0) out highp vec4 pc_fragColor;",
            n.glslVersion === O ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad",
          ].join("\n") +
          "\n" +
          M));
    const b = y + M + o,
      S = yr(r, 35633, y + x + s),
      w = yr(r, 35632, b);
    if (
      (r.attachShader(v, S),
      r.attachShader(v, w),
      void 0 !== n.index0AttributeName
        ? r.bindAttribLocation(v, 0, n.index0AttributeName)
        : !0 === n.morphTargets && r.bindAttribLocation(v, 0, "position"),
      r.linkProgram(v),
      t.debug.checkShaderErrors)
    ) {
      const t = r.getProgramInfoLog(v).trim(),
        e = r.getShaderInfoLog(S).trim(),
        n = r.getShaderInfoLog(w).trim();
      let i = !0,
        a = !0;
      if (!1 === r.getProgramParameter(v, 35714)) {
        i = !1;
        const e = Sr(r, S, "vertex"),
          n = Sr(r, w, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " +
            r.getError() +
            " - VALIDATE_STATUS " +
            r.getProgramParameter(v, 35715) +
            "\n\nProgram Info Log: " +
            t +
            "\n" +
            e +
            "\n" +
            n
        );
      } else
        "" !== t
          ? console.warn("THREE.WebGLProgram: Program Info Log:", t)
          : ("" !== e && "" !== n) || (a = !1);
      a &&
        (this.diagnostics = {
          runnable: i,
          programLog: t,
          vertexShader: { log: e, prefix: x },
          fragmentShader: { log: n, prefix: M },
        });
    }
    let T, E;
    return (
      r.deleteShader(S),
      r.deleteShader(w),
      (this.getUniforms = function () {
        return void 0 === T && (T = new Mr(r, v)), T;
      }),
      (this.getAttributes = function () {
        return (
          void 0 === E &&
            (E = (function (t, e) {
              const n = {},
                i = t.getProgramParameter(e, 35721);
              for (let r = 0; r < i; r++) {
                const i = t.getActiveAttrib(e, r),
                  a = i.name;
                let s = 1;
                35674 === i.type && (s = 2),
                  35675 === i.type && (s = 3),
                  35676 === i.type && (s = 4),
                  (n[a] = {
                    type: i.type,
                    location: t.getAttribLocation(e, a),
                    locationSize: s,
                  });
              }
              return n;
            })(r, v)),
          E
        );
      }),
      (this.destroy = function () {
        i.releaseStatesOfProgram(this),
          r.deleteProgram(v),
          (this.program = void 0);
      }),
      (this.name = n.shaderName),
      (this.id = br++),
      (this.cacheKey = e),
      (this.usedTimes = 1),
      (this.program = v),
      (this.vertexShader = S),
      (this.fragmentShader = w),
      this
    );
  }
  let Ur = 0;
  class Fr {
    constructor() {
      (this.shaderCache = new Map()), (this.materialCache = new Map());
    }
    update(t) {
      const e = t.vertexShader,
        n = t.fragmentShader,
        i = this._getShaderStage(e),
        r = this._getShaderStage(n),
        a = this._getShaderCacheForMaterial(t);
      return (
        !1 === a.has(i) && (a.add(i), i.usedTimes++),
        !1 === a.has(r) && (a.add(r), r.usedTimes++),
        this
      );
    }
    remove(t) {
      const e = this.materialCache.get(t);
      for (const t of e)
        t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
      return this.materialCache.delete(t), this;
    }
    getVertexShaderID(t) {
      return this._getShaderStage(t.vertexShader).id;
    }
    getFragmentShaderID(t) {
      return this._getShaderStage(t.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t) {
      const e = this.materialCache;
      let n = e.get(t);
      return void 0 === n && ((n = new Set()), e.set(t, n)), n;
    }
    _getShaderStage(t) {
      const e = this.shaderCache;
      let n = e.get(t);
      return void 0 === n && ((n = new Br(t)), e.set(t, n)), n;
    }
  }
  class Br {
    constructor(t) {
      (this.id = Ur++), (this.code = t), (this.usedTimes = 0);
    }
  }
  function Gr(t, e, n, i, r, a, s) {
    const o = new le(),
      l = new Fr(),
      c = [],
      h = r.isWebGL2,
      d = r.logarithmicDepthBuffer,
      p = r.vertexTextures;
    let m = r.precision;
    const f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
    return {
      getParameters: function (a, o, c, g, _) {
        const v = g.fog,
          x = _.geometry,
          M = a.isMeshStandardMaterial ? g.environment : null,
          y = (a.isMeshStandardMaterial ? n : e).get(a.envMap || M),
          b = y && y.mapping === u ? y.image.height : null,
          S = f[a.type];
        null !== a.precision &&
          ((m = r.getMaxPrecision(a.precision)),
          m !== a.precision &&
            console.warn(
              "THREE.WebGLProgram.getParameters:",
              a.precision,
              "not supported, using",
              m,
              "instead."
            ));
        const w =
            x.morphAttributes.position ||
            x.morphAttributes.normal ||
            x.morphAttributes.color,
          T = void 0 !== w ? w.length : 0;
        let E,
          A,
          L,
          C,
          D = 0;
        if (
          (void 0 !== x.morphAttributes.position && (D = 1),
          void 0 !== x.morphAttributes.normal && (D = 2),
          void 0 !== x.morphAttributes.color && (D = 3),
          S)
        ) {
          const t = Gn[S];
          (E = t.vertexShader), (A = t.fragmentShader);
        } else
          (E = a.vertexShader),
            (A = a.fragmentShader),
            l.update(a),
            (L = l.getVertexShaderID(a)),
            (C = l.getFragmentShaderID(a));
        const I = t.getRenderTarget(),
          N = a.alphaTest > 0,
          O = a.clearcoat > 0,
          z = a.iridescence > 0;
        return {
          isWebGL2: h,
          shaderID: S,
          shaderName: a.type,
          vertexShader: E,
          fragmentShader: A,
          defines: a.defines,
          customVertexShaderID: L,
          customFragmentShaderID: C,
          isRawShaderMaterial: !0 === a.isRawShaderMaterial,
          glslVersion: a.glslVersion,
          precision: m,
          instancing: !0 === _.isInstancedMesh,
          instancingColor: !0 === _.isInstancedMesh && null !== _.instanceColor,
          supportsVertexTextures: p,
          outputEncoding:
            null === I
              ? t.outputEncoding
              : !0 === I.isXRRenderTarget
              ? I.texture.encoding
              : R,
          map: !!a.map,
          matcap: !!a.matcap,
          envMap: !!y,
          envMapMode: y && y.mapping,
          envMapCubeUVHeight: b,
          lightMap: !!a.lightMap,
          aoMap: !!a.aoMap,
          emissiveMap: !!a.emissiveMap,
          bumpMap: !!a.bumpMap,
          normalMap: !!a.normalMap,
          objectSpaceNormalMap: 1 === a.normalMapType,
          tangentSpaceNormalMap: 0 === a.normalMapType,
          decodeVideoTexture:
            !!a.map && !0 === a.map.isVideoTexture && a.map.encoding === P,
          clearcoat: O,
          clearcoatMap: O && !!a.clearcoatMap,
          clearcoatRoughnessMap: O && !!a.clearcoatRoughnessMap,
          clearcoatNormalMap: O && !!a.clearcoatNormalMap,
          iridescence: z,
          iridescenceMap: z && !!a.iridescenceMap,
          iridescenceThicknessMap: z && !!a.iridescenceThicknessMap,
          displacementMap: !!a.displacementMap,
          roughnessMap: !!a.roughnessMap,
          metalnessMap: !!a.metalnessMap,
          specularMap: !!a.specularMap,
          specularIntensityMap: !!a.specularIntensityMap,
          specularColorMap: !!a.specularColorMap,
          opaque: !1 === a.transparent && 1 === a.blending,
          alphaMap: !!a.alphaMap,
          alphaTest: N,
          gradientMap: !!a.gradientMap,
          sheen: a.sheen > 0,
          sheenColorMap: !!a.sheenColorMap,
          sheenRoughnessMap: !!a.sheenRoughnessMap,
          transmission: a.transmission > 0,
          transmissionMap: !!a.transmissionMap,
          thicknessMap: !!a.thicknessMap,
          combine: a.combine,
          vertexTangents: !!a.normalMap && !!x.attributes.tangent,
          vertexColors: a.vertexColors,
          vertexAlphas:
            !0 === a.vertexColors &&
            !!x.attributes.color &&
            4 === x.attributes.color.itemSize,
          vertexUvs: !!(
            a.map ||
            a.bumpMap ||
            a.normalMap ||
            a.specularMap ||
            a.alphaMap ||
            a.emissiveMap ||
            a.roughnessMap ||
            a.metalnessMap ||
            a.clearcoatMap ||
            a.clearcoatRoughnessMap ||
            a.clearcoatNormalMap ||
            a.iridescenceMap ||
            a.iridescenceThicknessMap ||
            a.displacementMap ||
            a.transmissionMap ||
            a.thicknessMap ||
            a.specularIntensityMap ||
            a.specularColorMap ||
            a.sheenColorMap ||
            a.sheenRoughnessMap
          ),
          uvsVertexOnly: !(
            a.map ||
            a.bumpMap ||
            a.normalMap ||
            a.specularMap ||
            a.alphaMap ||
            a.emissiveMap ||
            a.roughnessMap ||
            a.metalnessMap ||
            a.clearcoatNormalMap ||
            a.iridescenceMap ||
            a.iridescenceThicknessMap ||
            a.transmission > 0 ||
            a.transmissionMap ||
            a.thicknessMap ||
            a.specularIntensityMap ||
            a.specularColorMap ||
            a.sheen > 0 ||
            a.sheenColorMap ||
            a.sheenRoughnessMap ||
            !a.displacementMap
          ),
          fog: !!v,
          useFog: !0 === a.fog,
          fogExp2: v && v.isFogExp2,
          flatShading: !!a.flatShading,
          sizeAttenuation: a.sizeAttenuation,
          logarithmicDepthBuffer: d,
          skinning: !0 === _.isSkinnedMesh,
          morphTargets: void 0 !== x.morphAttributes.position,
          morphNormals: void 0 !== x.morphAttributes.normal,
          morphColors: void 0 !== x.morphAttributes.color,
          morphTargetsCount: T,
          morphTextureStride: D,
          numDirLights: o.directional.length,
          numPointLights: o.point.length,
          numSpotLights: o.spot.length,
          numSpotLightMaps: o.spotLightMap.length,
          numRectAreaLights: o.rectArea.length,
          numHemiLights: o.hemi.length,
          numDirLightShadows: o.directionalShadowMap.length,
          numPointLightShadows: o.pointShadowMap.length,
          numSpotLightShadows: o.spotShadowMap.length,
          numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
          numClippingPlanes: s.numPlanes,
          numClipIntersection: s.numIntersection,
          dithering: a.dithering,
          shadowMapEnabled: t.shadowMap.enabled && c.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: a.toneMapped ? t.toneMapping : 0,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: a.premultipliedAlpha,
          doubleSided: 2 === a.side,
          flipSided: 1 === a.side,
          useDepthPacking: !!a.depthPacking,
          depthPacking: a.depthPacking || 0,
          index0AttributeName: a.index0AttributeName,
          extensionDerivatives: a.extensions && a.extensions.derivatives,
          extensionFragDepth: a.extensions && a.extensions.fragDepth,
          extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
          extensionShaderTextureLOD:
            a.extensions && a.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: h || i.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: h || i.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod:
            h || i.has("EXT_shader_texture_lod"),
          customProgramCacheKey: a.customProgramCacheKey(),
        };
      },
      getProgramCacheKey: function (e) {
        const n = [];
        if (
          (e.shaderID
            ? n.push(e.shaderID)
            : (n.push(e.customVertexShaderID),
              n.push(e.customFragmentShaderID)),
          void 0 !== e.defines)
        )
          for (const t in e.defines) n.push(t), n.push(e.defines[t]);
        return (
          !1 === e.isRawShaderMaterial &&
            (!(function (t, e) {
              t.push(e.precision),
                t.push(e.outputEncoding),
                t.push(e.envMapMode),
                t.push(e.envMapCubeUVHeight),
                t.push(e.combine),
                t.push(e.vertexUvs),
                t.push(e.fogExp2),
                t.push(e.sizeAttenuation),
                t.push(e.morphTargetsCount),
                t.push(e.morphAttributeCount),
                t.push(e.numDirLights),
                t.push(e.numPointLights),
                t.push(e.numSpotLights),
                t.push(e.numSpotLightMaps),
                t.push(e.numHemiLights),
                t.push(e.numRectAreaLights),
                t.push(e.numDirLightShadows),
                t.push(e.numPointLightShadows),
                t.push(e.numSpotLightShadows),
                t.push(e.numSpotLightShadowsWithMaps),
                t.push(e.shadowMapType),
                t.push(e.toneMapping),
                t.push(e.numClippingPlanes),
                t.push(e.numClipIntersection),
                t.push(e.depthPacking);
            })(n, e),
            (function (t, e) {
              o.disableAll(), e.isWebGL2 && o.enable(0);
              e.supportsVertexTextures && o.enable(1);
              e.instancing && o.enable(2);
              e.instancingColor && o.enable(3);
              e.map && o.enable(4);
              e.matcap && o.enable(5);
              e.envMap && o.enable(6);
              e.lightMap && o.enable(7);
              e.aoMap && o.enable(8);
              e.emissiveMap && o.enable(9);
              e.bumpMap && o.enable(10);
              e.normalMap && o.enable(11);
              e.objectSpaceNormalMap && o.enable(12);
              e.tangentSpaceNormalMap && o.enable(13);
              e.clearcoat && o.enable(14);
              e.clearcoatMap && o.enable(15);
              e.clearcoatRoughnessMap && o.enable(16);
              e.clearcoatNormalMap && o.enable(17);
              e.iridescence && o.enable(18);
              e.iridescenceMap && o.enable(19);
              e.iridescenceThicknessMap && o.enable(20);
              e.displacementMap && o.enable(21);
              e.specularMap && o.enable(22);
              e.roughnessMap && o.enable(23);
              e.metalnessMap && o.enable(24);
              e.gradientMap && o.enable(25);
              e.alphaMap && o.enable(26);
              e.alphaTest && o.enable(27);
              e.vertexColors && o.enable(28);
              e.vertexAlphas && o.enable(29);
              e.vertexUvs && o.enable(30);
              e.vertexTangents && o.enable(31);
              e.uvsVertexOnly && o.enable(32);
              t.push(o.mask), o.disableAll(), e.fog && o.enable(0);
              e.useFog && o.enable(1);
              e.flatShading && o.enable(2);
              e.logarithmicDepthBuffer && o.enable(3);
              e.skinning && o.enable(4);
              e.morphTargets && o.enable(5);
              e.morphNormals && o.enable(6);
              e.morphColors && o.enable(7);
              e.premultipliedAlpha && o.enable(8);
              e.shadowMapEnabled && o.enable(9);
              e.physicallyCorrectLights && o.enable(10);
              e.doubleSided && o.enable(11);
              e.flipSided && o.enable(12);
              e.useDepthPacking && o.enable(13);
              e.dithering && o.enable(14);
              e.specularIntensityMap && o.enable(15);
              e.specularColorMap && o.enable(16);
              e.transmission && o.enable(17);
              e.transmissionMap && o.enable(18);
              e.thicknessMap && o.enable(19);
              e.sheen && o.enable(20);
              e.sheenColorMap && o.enable(21);
              e.sheenRoughnessMap && o.enable(22);
              e.decodeVideoTexture && o.enable(23);
              e.opaque && o.enable(24);
              t.push(o.mask);
            })(n, e),
            n.push(t.outputEncoding)),
          n.push(e.customProgramCacheKey),
          n.join()
        );
      },
      getUniforms: function (t) {
        const e = f[t.type];
        let n;
        if (e) {
          const t = Gn[e];
          n = Mn.clone(t.uniforms);
        } else n = t.uniforms;
        return n;
      },
      acquireProgram: function (e, n) {
        let i;
        for (let t = 0, e = c.length; t < e; t++) {
          const e = c[t];
          if (e.cacheKey === n) {
            (i = e), ++i.usedTimes;
            break;
          }
        }
        return void 0 === i && ((i = new zr(t, n, e, a)), c.push(i)), i;
      },
      releaseProgram: function (t) {
        if (0 == --t.usedTimes) {
          const e = c.indexOf(t);
          (c[e] = c[c.length - 1]), c.pop(), t.destroy();
        }
      },
      releaseShaderCache: function (t) {
        l.remove(t);
      },
      programs: c,
      dispose: function () {
        l.dispose();
      },
    };
  }
  function Hr() {
    let t = new WeakMap();
    return {
      get: function (e) {
        let n = t.get(e);
        return void 0 === n && ((n = {}), t.set(e, n)), n;
      },
      remove: function (e) {
        t.delete(e);
      },
      update: function (e, n, i) {
        t.get(e)[n] = i;
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function Vr(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
      ? t.renderOrder - e.renderOrder
      : t.material.id !== e.material.id
      ? t.material.id - e.material.id
      : t.z !== e.z
      ? t.z - e.z
      : t.id - e.id;
  }
  function kr(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
      ? t.renderOrder - e.renderOrder
      : t.z !== e.z
      ? e.z - t.z
      : t.id - e.id;
  }
  function Wr() {
    const t = [];
    let e = 0;
    const n = [],
      i = [],
      r = [];
    function a(n, i, r, a, s, o) {
      let l = t[e];
      return (
        void 0 === l
          ? ((l = {
              id: n.id,
              object: n,
              geometry: i,
              material: r,
              groupOrder: a,
              renderOrder: n.renderOrder,
              z: s,
              group: o,
            }),
            (t[e] = l))
          : ((l.id = n.id),
            (l.object = n),
            (l.geometry = i),
            (l.material = r),
            (l.groupOrder = a),
            (l.renderOrder = n.renderOrder),
            (l.z = s),
            (l.group = o)),
        e++,
        l
      );
    }
    return {
      opaque: n,
      transmissive: i,
      transparent: r,
      init: function () {
        (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
      },
      push: function (t, e, s, o, l, c) {
        const h = a(t, e, s, o, l, c);
        s.transmission > 0
          ? i.push(h)
          : !0 === s.transparent
          ? r.push(h)
          : n.push(h);
      },
      unshift: function (t, e, s, o, l, c) {
        const h = a(t, e, s, o, l, c);
        s.transmission > 0
          ? i.unshift(h)
          : !0 === s.transparent
          ? r.unshift(h)
          : n.unshift(h);
      },
      finish: function () {
        for (let n = e, i = t.length; n < i; n++) {
          const e = t[n];
          if (null === e.id) break;
          (e.id = null),
            (e.object = null),
            (e.geometry = null),
            (e.material = null),
            (e.group = null);
        }
      },
      sort: function (t, e) {
        n.length > 1 && n.sort(t || Vr),
          i.length > 1 && i.sort(e || kr),
          r.length > 1 && r.sort(e || kr);
      },
    };
  }
  function jr() {
    let t = new WeakMap();
    return {
      get: function (e, n) {
        const i = t.get(e);
        let r;
        return (
          void 0 === i
            ? ((r = new Wr()), t.set(e, [r]))
            : n >= i.length
            ? ((r = new Wr()), i.push(r))
            : (r = i[n]),
          r
        );
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function Xr() {
    const t = {};
    return {
      get: function (e) {
        if (void 0 !== t[e.id]) return t[e.id];
        let n;
        switch (e.type) {
          case "DirectionalLight":
            n = { direction: new Mt(), color: new lt() };
            break;
          case "SpotLight":
            n = {
              position: new Mt(),
              direction: new Mt(),
              color: new lt(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case "PointLight":
            n = { position: new Mt(), color: new lt(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            n = {
              direction: new Mt(),
              skyColor: new lt(),
              groundColor: new lt(),
            };
            break;
          case "RectAreaLight":
            n = {
              color: new lt(),
              position: new Mt(),
              halfWidth: new Mt(),
              halfHeight: new Mt(),
            };
        }
        return (t[e.id] = n), n;
      },
    };
  }
  let qr = 0;
  function Yr(t, e) {
    return (
      (e.castShadow ? 2 : 0) -
      (t.castShadow ? 2 : 0) +
      (e.map ? 1 : 0) -
      (t.map ? 1 : 0)
    );
  }
  function Zr(t, e) {
    const n = new Xr(),
      i = (function () {
        const t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case "DirectionalLight":
              case "SpotLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Y(),
                };
                break;
              case "PointLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Y(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3,
                };
            }
            return (t[e.id] = n), n;
          },
        };
      })(),
      r = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
      };
    for (let t = 0; t < 9; t++) r.probe.push(new Mt());
    const a = new Mt(),
      s = new Kt(),
      o = new Kt();
    return {
      setup: function (a, s) {
        let o = 0,
          l = 0,
          c = 0;
        for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
        let h = 0,
          u = 0,
          d = 0,
          p = 0,
          m = 0,
          f = 0,
          g = 0,
          _ = 0,
          v = 0,
          x = 0;
        a.sort(Yr);
        const M = !0 !== s ? Math.PI : 1;
        for (let t = 0, e = a.length; t < e; t++) {
          const e = a[t],
            s = e.color,
            y = e.intensity,
            b = e.distance,
            S = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
          if (e.isAmbientLight)
            (o += s.r * y * M), (l += s.g * y * M), (c += s.b * y * M);
          else if (e.isLightProbe)
            for (let t = 0; t < 9; t++)
              r.probe[t].addScaledVector(e.sh.coefficients[t], y);
          else if (e.isDirectionalLight) {
            const t = n.get(e);
            if (
              (t.color.copy(e.color).multiplyScalar(e.intensity * M),
              e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (r.directionalShadow[h] = n),
                (r.directionalShadowMap[h] = S),
                (r.directionalShadowMatrix[h] = e.shadow.matrix),
                f++;
            }
            (r.directional[h] = t), h++;
          } else if (e.isSpotLight) {
            const t = n.get(e);
            t.position.setFromMatrixPosition(e.matrixWorld),
              t.color.copy(s).multiplyScalar(y * M),
              (t.distance = b),
              (t.coneCos = Math.cos(e.angle)),
              (t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
              (t.decay = e.decay),
              (r.spot[d] = t);
            const a = e.shadow;
            if (
              (e.map &&
                ((r.spotLightMap[v] = e.map),
                v++,
                a.updateMatrices(e),
                e.castShadow && x++),
              (r.spotLightMatrix[d] = a.matrix),
              e.castShadow)
            ) {
              const t = i.get(e);
              (t.shadowBias = a.bias),
                (t.shadowNormalBias = a.normalBias),
                (t.shadowRadius = a.radius),
                (t.shadowMapSize = a.mapSize),
                (r.spotShadow[d] = t),
                (r.spotShadowMap[d] = S),
                _++;
            }
            d++;
          } else if (e.isRectAreaLight) {
            const t = n.get(e);
            t.color.copy(s).multiplyScalar(y),
              t.halfWidth.set(0.5 * e.width, 0, 0),
              t.halfHeight.set(0, 0.5 * e.height, 0),
              (r.rectArea[p] = t),
              p++;
          } else if (e.isPointLight) {
            const t = n.get(e);
            if (
              (t.color.copy(e.color).multiplyScalar(e.intensity * M),
              (t.distance = e.distance),
              (t.decay = e.decay),
              e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (n.shadowCameraNear = t.camera.near),
                (n.shadowCameraFar = t.camera.far),
                (r.pointShadow[u] = n),
                (r.pointShadowMap[u] = S),
                (r.pointShadowMatrix[u] = e.shadow.matrix),
                g++;
            }
            (r.point[u] = t), u++;
          } else if (e.isHemisphereLight) {
            const t = n.get(e);
            t.skyColor.copy(e.color).multiplyScalar(y * M),
              t.groundColor.copy(e.groundColor).multiplyScalar(y * M),
              (r.hemi[m] = t),
              m++;
          }
        }
        p > 0 &&
          (e.isWebGL2 || !0 === t.has("OES_texture_float_linear")
            ? ((r.rectAreaLTC1 = Bn.LTC_FLOAT_1),
              (r.rectAreaLTC2 = Bn.LTC_FLOAT_2))
            : !0 === t.has("OES_texture_half_float_linear")
            ? ((r.rectAreaLTC1 = Bn.LTC_HALF_1),
              (r.rectAreaLTC2 = Bn.LTC_HALF_2))
            : console.error(
                "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
              )),
          (r.ambient[0] = o),
          (r.ambient[1] = l),
          (r.ambient[2] = c);
        const y = r.hash;
        (y.directionalLength === h &&
          y.pointLength === u &&
          y.spotLength === d &&
          y.rectAreaLength === p &&
          y.hemiLength === m &&
          y.numDirectionalShadows === f &&
          y.numPointShadows === g &&
          y.numSpotShadows === _ &&
          y.numSpotMaps === v) ||
          ((r.directional.length = h),
          (r.spot.length = d),
          (r.rectArea.length = p),
          (r.point.length = u),
          (r.hemi.length = m),
          (r.directionalShadow.length = f),
          (r.directionalShadowMap.length = f),
          (r.pointShadow.length = g),
          (r.pointShadowMap.length = g),
          (r.spotShadow.length = _),
          (r.spotShadowMap.length = _),
          (r.directionalShadowMatrix.length = f),
          (r.pointShadowMatrix.length = g),
          (r.spotLightMatrix.length = _ + v - x),
          (r.spotLightMap.length = v),
          (r.numSpotLightShadowsWithMaps = x),
          (y.directionalLength = h),
          (y.pointLength = u),
          (y.spotLength = d),
          (y.rectAreaLength = p),
          (y.hemiLength = m),
          (y.numDirectionalShadows = f),
          (y.numPointShadows = g),
          (y.numSpotShadows = _),
          (y.numSpotMaps = v),
          (r.version = qr++));
      },
      setupView: function (t, e) {
        let n = 0,
          i = 0,
          l = 0,
          c = 0,
          h = 0;
        const u = e.matrixWorldInverse;
        for (let e = 0, d = t.length; e < d; e++) {
          const d = t[e];
          if (d.isDirectionalLight) {
            const t = r.directional[n];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              a.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(a),
              t.direction.transformDirection(u),
              n++;
          } else if (d.isSpotLight) {
            const t = r.spot[l];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              t.direction.setFromMatrixPosition(d.matrixWorld),
              a.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(a),
              t.direction.transformDirection(u),
              l++;
          } else if (d.isRectAreaLight) {
            const t = r.rectArea[c];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              o.identity(),
              s.copy(d.matrixWorld),
              s.premultiply(u),
              o.extractRotation(s),
              t.halfWidth.set(0.5 * d.width, 0, 0),
              t.halfHeight.set(0, 0.5 * d.height, 0),
              t.halfWidth.applyMatrix4(o),
              t.halfHeight.applyMatrix4(o),
              c++;
          } else if (d.isPointLight) {
            const t = r.point[i];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              i++;
          } else if (d.isHemisphereLight) {
            const t = r.hemi[h];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              t.direction.transformDirection(u),
              h++;
          }
        }
      },
      state: r,
    };
  }
  function Jr(t, e) {
    const n = new Zr(t, e),
      i = [],
      r = [];
    return {
      init: function () {
        (i.length = 0), (r.length = 0);
      },
      state: { lightsArray: i, shadowsArray: r, lights: n },
      setupLights: function (t) {
        n.setup(i, t);
      },
      setupLightsView: function (t) {
        n.setupView(i, t);
      },
      pushLight: function (t) {
        i.push(t);
      },
      pushShadow: function (t) {
        r.push(t);
      },
    };
  }
  function Kr(t, e) {
    let n = new WeakMap();
    return {
      get: function (i, r = 0) {
        const a = n.get(i);
        let s;
        return (
          void 0 === a
            ? ((s = new Jr(t, e)), n.set(i, [s]))
            : r >= a.length
            ? ((s = new Jr(t, e)), a.push(s))
            : (s = a[r]),
          s
        );
      },
      dispose: function () {
        n = new WeakMap();
      },
    };
  }
  class Qr extends Oe {
    constructor(t) {
      super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = 3200),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.depthPacking = t.depthPacking),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        this
      );
    }
  }
  class $r extends Oe {
    constructor(t) {
      super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = "MeshDistanceMaterial"),
        (this.referencePosition = new Mt()),
        (this.nearDistance = 1),
        (this.farDistance = 1e3),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.referencePosition.copy(t.referencePosition),
        (this.nearDistance = t.nearDistance),
        (this.farDistance = t.farDistance),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        this
      );
    }
  }
  function ta(t, e, n) {
    let i = new Nn();
    const r = new Y(),
      a = new Y(),
      s = new ft(),
      o = new Qr({ depthPacking: 3201 }),
      l = new $r(),
      c = {},
      h = n.maxTextureSize,
      u = { 0: 1, 1: 0, 2: 2 },
      d = new yn({
        defines: { VSM_SAMPLES: 8 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new Y() },
          radius: { value: 4 },
        },
        vertexShader:
          "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader:
          "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
      }),
      p = d.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const m = new Je();
    m.setAttribute(
      "position",
      new Be(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    const g = new fn(m, d),
      _ = this;
    function v(n, i) {
      const a = e.update(g);
      d.defines.VSM_SAMPLES !== n.blurSamples &&
        ((d.defines.VSM_SAMPLES = n.blurSamples),
        (p.defines.VSM_SAMPLES = n.blurSamples),
        (d.needsUpdate = !0),
        (p.needsUpdate = !0)),
        null === n.mapPass && (n.mapPass = new gt(r.x, r.y)),
        (d.uniforms.shadow_pass.value = n.map.texture),
        (d.uniforms.resolution.value = n.mapSize),
        (d.uniforms.radius.value = n.radius),
        t.setRenderTarget(n.mapPass),
        t.clear(),
        t.renderBufferDirect(i, null, a, d, g, null),
        (p.uniforms.shadow_pass.value = n.mapPass.texture),
        (p.uniforms.resolution.value = n.mapSize),
        (p.uniforms.radius.value = n.radius),
        t.setRenderTarget(n.map),
        t.clear(),
        t.renderBufferDirect(i, null, a, p, g, null);
    }
    function x(e, n, i, r, a, s) {
      let h = null;
      const d =
        !0 === i.isPointLight
          ? e.customDistanceMaterial
          : e.customDepthMaterial;
      if (
        ((h = void 0 !== d ? d : !0 === i.isPointLight ? l : o),
        (t.localClippingEnabled &&
          !0 === n.clipShadows &&
          Array.isArray(n.clippingPlanes) &&
          0 !== n.clippingPlanes.length) ||
          (n.displacementMap && 0 !== n.displacementScale) ||
          (n.alphaMap && n.alphaTest > 0))
      ) {
        const t = h.uuid,
          e = n.uuid;
        let i = c[t];
        void 0 === i && ((i = {}), (c[t] = i));
        let r = i[e];
        void 0 === r && ((r = h.clone()), (i[e] = r)), (h = r);
      }
      return (
        (h.visible = n.visible),
        (h.wireframe = n.wireframe),
        (h.side =
          3 === s
            ? null !== n.shadowSide
              ? n.shadowSide
              : n.side
            : null !== n.shadowSide
            ? n.shadowSide
            : u[n.side]),
        (h.alphaMap = n.alphaMap),
        (h.alphaTest = n.alphaTest),
        (h.clipShadows = n.clipShadows),
        (h.clippingPlanes = n.clippingPlanes),
        (h.clipIntersection = n.clipIntersection),
        (h.displacementMap = n.displacementMap),
        (h.displacementScale = n.displacementScale),
        (h.displacementBias = n.displacementBias),
        (h.wireframeLinewidth = n.wireframeLinewidth),
        (h.linewidth = n.linewidth),
        !0 === i.isPointLight &&
          !0 === h.isMeshDistanceMaterial &&
          (h.referencePosition.setFromMatrixPosition(i.matrixWorld),
          (h.nearDistance = r),
          (h.farDistance = a)),
        h
      );
    }
    function M(n, r, a, s, o) {
      if (!1 === n.visible) return;
      if (
        n.layers.test(r.layers) &&
        (n.isMesh || n.isLine || n.isPoints) &&
        (n.castShadow || (n.receiveShadow && 3 === o)) &&
        (!n.frustumCulled || i.intersectsObject(n))
      ) {
        n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
        const i = e.update(n),
          r = n.material;
        if (Array.isArray(r)) {
          const e = i.groups;
          for (let l = 0, c = e.length; l < c; l++) {
            const c = e[l],
              h = r[c.materialIndex];
            if (h && h.visible) {
              const e = x(n, h, s, a.near, a.far, o);
              t.renderBufferDirect(a, null, i, e, n, c);
            }
          }
        } else if (r.visible) {
          const e = x(n, r, s, a.near, a.far, o);
          t.renderBufferDirect(a, null, i, e, n, null);
        }
      }
      const l = n.children;
      for (let t = 0, e = l.length; t < e; t++) M(l[t], r, a, s, o);
    }
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = 1),
      (this.render = function (e, n, o) {
        if (!1 === _.enabled) return;
        if (!1 === _.autoUpdate && !1 === _.needsUpdate) return;
        if (0 === e.length) return;
        const l = t.getRenderTarget(),
          c = t.getActiveCubeFace(),
          u = t.getActiveMipmapLevel(),
          d = t.state;
        d.setBlending(0),
          d.buffers.color.setClear(1, 1, 1, 1),
          d.buffers.depth.setTest(!0),
          d.setScissorTest(!1);
        for (let l = 0, c = e.length; l < c; l++) {
          const c = e[l],
            u = c.shadow;
          if (void 0 === u) {
            console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
            continue;
          }
          if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
          r.copy(u.mapSize);
          const p = u.getFrameExtents();
          if (
            (r.multiply(p),
            a.copy(u.mapSize),
            (r.x > h || r.y > h) &&
              (r.x > h &&
                ((a.x = Math.floor(h / p.x)),
                (r.x = a.x * p.x),
                (u.mapSize.x = a.x)),
              r.y > h &&
                ((a.y = Math.floor(h / p.y)),
                (r.y = a.y * p.y),
                (u.mapSize.y = a.y))),
            null === u.map)
          ) {
            const t = 3 !== this.type ? { minFilter: f, magFilter: f } : {};
            (u.map = new gt(r.x, r.y, t)),
              (u.map.texture.name = c.name + ".shadowMap"),
              u.camera.updateProjectionMatrix();
          }
          t.setRenderTarget(u.map), t.clear();
          const m = u.getViewportCount();
          for (let t = 0; t < m; t++) {
            const e = u.getViewport(t);
            s.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w),
              d.viewport(s),
              u.updateMatrices(c, t),
              (i = u.getFrustum()),
              M(n, o, u.camera, c, this.type);
          }
          !0 !== u.isPointLightShadow && 3 === this.type && v(u, o),
            (u.needsUpdate = !1);
        }
        (_.needsUpdate = !1), t.setRenderTarget(l, c, u);
      });
  }
  function ea(t, e, n) {
    const i = n.isWebGL2;
    const r = new (function () {
        let e = !1;
        const n = new ft();
        let i = null;
        const r = new ft(0, 0, 0, 0);
        return {
          setMask: function (n) {
            i === n || e || (t.colorMask(n, n, n, n), (i = n));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e, i, a, s, o) {
            !0 === o && ((e *= s), (i *= s), (a *= s)),
              n.set(e, i, a, s),
              !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n));
          },
          reset: function () {
            (e = !1), (i = null), r.set(-1, 0, 0, 0);
          },
        };
      })(),
      a = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null;
        return {
          setTest: function (t) {
            t ? H(2929) : V(2929);
          },
          setMask: function (i) {
            n === i || e || (t.depthMask(i), (n = i));
          },
          setFunc: function (e) {
            if (i !== e) {
              if (e)
                switch (e) {
                  case 0:
                    t.depthFunc(512);
                    break;
                  case 1:
                    t.depthFunc(519);
                    break;
                  case 2:
                    t.depthFunc(513);
                    break;
                  case 3:
                  default:
                    t.depthFunc(515);
                    break;
                  case 4:
                    t.depthFunc(514);
                    break;
                  case 5:
                    t.depthFunc(518);
                    break;
                  case 6:
                    t.depthFunc(516);
                    break;
                  case 7:
                    t.depthFunc(517);
                }
              else t.depthFunc(515);
              i = e;
            }
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            r !== e && (t.clearDepth(e), (r = e));
          },
          reset: function () {
            (e = !1), (n = null), (i = null), (r = null);
          },
        };
      })(),
      s = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null,
          a = null,
          s = null,
          o = null,
          l = null,
          c = null;
        return {
          setTest: function (t) {
            e || (t ? H(2960) : V(2960));
          },
          setMask: function (i) {
            n === i || e || (t.stencilMask(i), (n = i));
          },
          setFunc: function (e, n, s) {
            (i === e && r === n && a === s) ||
              (t.stencilFunc(e, n, s), (i = e), (r = n), (a = s));
          },
          setOp: function (e, n, i) {
            (s === e && o === n && l === i) ||
              (t.stencilOp(e, n, i), (s = e), (o = n), (l = i));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            c !== e && (t.clearStencil(e), (c = e));
          },
          reset: function () {
            (e = !1),
              (n = null),
              (i = null),
              (r = null),
              (a = null),
              (s = null),
              (o = null),
              (l = null),
              (c = null);
          },
        };
      })(),
      o = new WeakMap(),
      c = new WeakMap();
    let h = {},
      u = {},
      d = new WeakMap(),
      p = [],
      m = null,
      f = !1,
      g = null,
      _ = null,
      v = null,
      x = null,
      M = null,
      y = null,
      b = null,
      S = !1,
      w = null,
      T = null,
      E = null,
      A = null,
      L = null;
    const C = t.getParameter(35661);
    let R = !1,
      P = 0;
    const D = t.getParameter(7938);
    -1 !== D.indexOf("WebGL")
      ? ((P = parseFloat(/^WebGL (\d)/.exec(D)[1])), (R = P >= 1))
      : -1 !== D.indexOf("OpenGL ES") &&
        ((P = parseFloat(/^OpenGL ES (\d)/.exec(D)[1])), (R = P >= 2));
    let I = null,
      N = {};
    const O = t.getParameter(3088),
      z = t.getParameter(2978),
      U = new ft().fromArray(O),
      F = new ft().fromArray(z);
    function B(e, n, i) {
      const r = new Uint8Array(4),
        a = t.createTexture();
      t.bindTexture(e, a),
        t.texParameteri(e, 10241, 9728),
        t.texParameteri(e, 10240, 9728);
      for (let e = 0; e < i; e++)
        t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
      return a;
    }
    const G = {};
    function H(e) {
      !0 !== h[e] && (t.enable(e), (h[e] = !0));
    }
    function V(e) {
      !1 !== h[e] && (t.disable(e), (h[e] = !1));
    }
    (G[3553] = B(3553, 3553, 1)),
      (G[34067] = B(34067, 34069, 6)),
      r.setClear(0, 0, 0, 1),
      a.setClear(1),
      s.setClear(0),
      H(2929),
      a.setFunc(3),
      X(!1),
      q(1),
      H(2884),
      j(0);
    const k = { [l]: 32774, 101: 32778, 102: 32779 };
    if (i) (k[103] = 32775), (k[104] = 32776);
    else {
      const t = e.get("EXT_blend_minmax");
      null !== t && ((k[103] = t.MIN_EXT), (k[104] = t.MAX_EXT));
    }
    const W = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773,
    };
    function j(e, n, i, r, a, s, o, c) {
      if (0 !== e) {
        if ((!1 === f && (H(3042), (f = !0)), 5 === e))
          (a = a || n),
            (s = s || i),
            (o = o || r),
            (n === _ && a === M) ||
              (t.blendEquationSeparate(k[n], k[a]), (_ = n), (M = a)),
            (i === v && r === x && s === y && o === b) ||
              (t.blendFuncSeparate(W[i], W[r], W[s], W[o]),
              (v = i),
              (x = r),
              (y = s),
              (b = o)),
            (g = e),
            (S = null);
        else if (e !== g || c !== S) {
          if (
            ((_ === l && M === l) || (t.blendEquation(32774), (_ = l), (M = l)),
            c)
          )
            switch (e) {
              case 1:
                t.blendFuncSeparate(1, 771, 1, 771);
                break;
              case 2:
                t.blendFunc(1, 1);
                break;
              case 3:
                t.blendFuncSeparate(0, 769, 0, 1);
                break;
              case 4:
                t.blendFuncSeparate(0, 768, 0, 770);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", e);
            }
          else
            switch (e) {
              case 1:
                t.blendFuncSeparate(770, 771, 1, 771);
                break;
              case 2:
                t.blendFunc(770, 1);
                break;
              case 3:
                t.blendFuncSeparate(0, 769, 0, 1);
                break;
              case 4:
                t.blendFunc(0, 768);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", e);
            }
          (v = null), (x = null), (y = null), (b = null), (g = e), (S = c);
        }
      } else !0 === f && (V(3042), (f = !1));
    }
    function X(e) {
      w !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (w = e));
    }
    function q(e) {
      0 !== e
        ? (H(2884),
          e !== T &&
            (1 === e
              ? t.cullFace(1029)
              : 2 === e
              ? t.cullFace(1028)
              : t.cullFace(1032)))
        : V(2884),
        (T = e);
    }
    function Y(e, n, i) {
      e
        ? (H(32823),
          (A === n && L === i) || (t.polygonOffset(n, i), (A = n), (L = i)))
        : V(32823);
    }
    function Z(e) {
      void 0 === e && (e = 33984 + C - 1),
        I !== e && (t.activeTexture(e), (I = e));
    }
    return {
      buffers: { color: r, depth: a, stencil: s },
      enable: H,
      disable: V,
      bindFramebuffer: function (e, n) {
        return (
          u[e] !== n &&
          (t.bindFramebuffer(e, n),
          (u[e] = n),
          i && (36009 === e && (u[36160] = n), 36160 === e && (u[36009] = n)),
          !0)
        );
      },
      drawBuffers: function (i, r) {
        let a = p,
          s = !1;
        if (i)
          if (
            ((a = d.get(r)),
            void 0 === a && ((a = []), d.set(r, a)),
            i.isWebGLMultipleRenderTargets)
          ) {
            const t = i.texture;
            if (a.length !== t.length || 36064 !== a[0]) {
              for (let e = 0, n = t.length; e < n; e++) a[e] = 36064 + e;
              (a.length = t.length), (s = !0);
            }
          } else 36064 !== a[0] && ((a[0] = 36064), (s = !0));
        else 1029 !== a[0] && ((a[0] = 1029), (s = !0));
        s &&
          (n.isWebGL2
            ? t.drawBuffers(a)
            : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(a));
      },
      useProgram: function (e) {
        return m !== e && (t.useProgram(e), (m = e), !0);
      },
      setBlending: j,
      setMaterial: function (t, e) {
        2 === t.side ? V(2884) : H(2884);
        let n = 1 === t.side;
        e && (n = !n),
          X(n),
          1 === t.blending && !1 === t.transparent
            ? j(0)
            : j(
                t.blending,
                t.blendEquation,
                t.blendSrc,
                t.blendDst,
                t.blendEquationAlpha,
                t.blendSrcAlpha,
                t.blendDstAlpha,
                t.premultipliedAlpha
              ),
          a.setFunc(t.depthFunc),
          a.setTest(t.depthTest),
          a.setMask(t.depthWrite),
          r.setMask(t.colorWrite);
        const i = t.stencilWrite;
        s.setTest(i),
          i &&
            (s.setMask(t.stencilWriteMask),
            s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
            s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
          Y(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
          !0 === t.alphaToCoverage ? H(32926) : V(32926);
      },
      setFlipSided: X,
      setCullFace: q,
      setLineWidth: function (e) {
        e !== E && (R && t.lineWidth(e), (E = e));
      },
      setPolygonOffset: Y,
      setScissorTest: function (t) {
        t ? H(3089) : V(3089);
      },
      activeTexture: Z,
      bindTexture: function (e, n) {
        null === I && Z();
        let i = N[I];
        void 0 === i && ((i = { type: void 0, texture: void 0 }), (N[I] = i)),
          (i.type === e && i.texture === n) ||
            (t.bindTexture(e, n || G[e]), (i.type = e), (i.texture = n));
      },
      unbindTexture: function () {
        const e = N[I];
        void 0 !== e &&
          void 0 !== e.type &&
          (t.bindTexture(e.type, null),
          (e.type = void 0),
          (e.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function () {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function () {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      updateUBOMapping: function (e, n) {
        let i = c.get(n);
        void 0 === i && ((i = new WeakMap()), c.set(n, i));
        let r = i.get(e);
        void 0 === r && ((r = t.getUniformBlockIndex(n, e.name)), i.set(e, r));
      },
      uniformBlockBinding: function (e, n) {
        const i = c.get(n).get(e);
        o.get(e) !== i &&
          (t.uniformBlockBinding(n, i, e.__bindingPointIndex), o.set(e, i));
      },
      texStorage2D: function () {
        try {
          t.texStorage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texStorage3D: function () {
        try {
          t.texStorage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texSubImage2D: function () {
        try {
          t.texSubImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texSubImage3D: function () {
        try {
          t.texSubImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      compressedTexSubImage2D: function () {
        try {
          t.compressedTexSubImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function (e) {
        !1 === U.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), U.copy(e));
      },
      viewport: function (e) {
        !1 === F.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), F.copy(e));
      },
      reset: function () {
        t.disable(3042),
          t.disable(2884),
          t.disable(2929),
          t.disable(32823),
          t.disable(3089),
          t.disable(2960),
          t.disable(32926),
          t.blendEquation(32774),
          t.blendFunc(1, 0),
          t.blendFuncSeparate(1, 0, 1, 0),
          t.colorMask(!0, !0, !0, !0),
          t.clearColor(0, 0, 0, 0),
          t.depthMask(!0),
          t.depthFunc(513),
          t.clearDepth(1),
          t.stencilMask(4294967295),
          t.stencilFunc(519, 0, 4294967295),
          t.stencilOp(7680, 7680, 7680),
          t.clearStencil(0),
          t.cullFace(1029),
          t.frontFace(2305),
          t.polygonOffset(0, 0),
          t.activeTexture(33984),
          t.bindFramebuffer(36160, null),
          !0 === i &&
            (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)),
          t.useProgram(null),
          t.lineWidth(1),
          t.scissor(0, 0, t.canvas.width, t.canvas.height),
          t.viewport(0, 0, t.canvas.width, t.canvas.height),
          (h = {}),
          (I = null),
          (N = {}),
          (u = {}),
          (d = new WeakMap()),
          (p = []),
          (m = null),
          (f = !1),
          (g = null),
          (_ = null),
          (v = null),
          (x = null),
          (M = null),
          (y = null),
          (b = null),
          (S = !1),
          (w = null),
          (T = null),
          (E = null),
          (A = null),
          (L = null),
          U.set(0, 0, t.canvas.width, t.canvas.height),
          F.set(0, 0, t.canvas.width, t.canvas.height),
          r.reset(),
          a.reset(),
          s.reset();
      },
    };
  }
  function na(t, e, n, i, r, a, s) {
    const o = r.isWebGL2,
      l = r.maxTextures,
      c = r.maxCubemapSize,
      h = r.maxTextureSize,
      u = r.maxSamples,
      E = e.has("WEBGL_multisampled_render_to_texture")
        ? e.get("WEBGL_multisampled_render_to_texture")
        : null,
      A = /OculusBrowser/g.test(navigator.userAgent),
      L = new WeakMap();
    let C;
    const D = new WeakMap();
    let I = !1;
    try {
      I =
        "undefined" != typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}
    function N(t, e) {
      return I ? new OffscreenCanvas(t, e) : K("canvas");
    }
    function O(t, e, n, i) {
      let r = 1;
      if (
        ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
        r < 1 || !0 === e)
      ) {
        if (
          ("undefined" != typeof HTMLImageElement &&
            t instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
        ) {
          const i = e ? j : Math.floor,
            a = i(r * t.width),
            s = i(r * t.height);
          void 0 === C && (C = N(a, s));
          const o = n ? N(a, s) : C;
          (o.width = a), (o.height = s);
          return (
            o.getContext("2d").drawImage(t, 0, 0, a, s),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                t.width +
                "x" +
                t.height +
                ") to (" +
                a +
                "x" +
                s +
                ")."
            ),
            o
          );
        }
        return (
          "data" in t &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                t.width +
                "x" +
                t.height +
                ")."
            ),
          t
        );
      }
      return t;
    }
    function U(t) {
      return W(t.width) && W(t.height);
    }
    function F(t, e) {
      return t.generateMipmaps && e && t.minFilter !== f && t.minFilter !== g;
    }
    function B(e) {
      t.generateMipmap(e);
    }
    function G(n, i, r, a, s = !1) {
      if (!1 === o) return i;
      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            n +
            "'"
        );
      }
      let l = i;
      return (
        6403 === i &&
          (5126 === r && (l = 33326),
          5131 === r && (l = 33325),
          5121 === r && (l = 33321)),
        33319 === i &&
          (5126 === r && (l = 33328),
          5131 === r && (l = 33327),
          5121 === r && (l = 33323)),
        6408 === i &&
          (5126 === r && (l = 34836),
          5131 === r && (l = 34842),
          5121 === r && (l = a === P && !1 === s ? 35907 : 32856),
          32819 === r && (l = 32854),
          32820 === r && (l = 32855)),
        (33325 !== l &&
          33326 !== l &&
          33327 !== l &&
          33328 !== l &&
          34842 !== l &&
          34836 !== l) ||
          e.get("EXT_color_buffer_float"),
        l
      );
    }
    function H(t, e, n) {
      return !0 === F(t, n) ||
        (t.isFramebufferTexture && t.minFilter !== f && t.minFilter !== g)
        ? Math.log2(Math.max(e.width, e.height)) + 1
        : void 0 !== t.mipmaps && t.mipmaps.length > 0
        ? t.mipmaps.length
        : t.isCompressedTexture && Array.isArray(t.image)
        ? e.mipmaps.length
        : 1;
    }
    function V(t) {
      return t === f || 1004 === t || 1005 === t ? 9728 : 9729;
    }
    function k(t) {
      const e = t.target;
      e.removeEventListener("dispose", k),
        (function (t) {
          const e = i.get(t);
          if (void 0 === e.__webglInit) return;
          const n = t.source,
            r = D.get(n);
          if (r) {
            const i = r[e.__cacheKey];
            i.usedTimes--,
              0 === i.usedTimes && q(t),
              0 === Object.keys(r).length && D.delete(n);
          }
          i.remove(t);
        })(e),
        e.isVideoTexture && L.delete(e);
    }
    function X(e) {
      const n = e.target;
      n.removeEventListener("dispose", X),
        (function (e) {
          const n = e.texture,
            r = i.get(e),
            a = i.get(n);
          void 0 !== a.__webglTexture &&
            (t.deleteTexture(a.__webglTexture), s.memory.textures--);
          e.depthTexture && e.depthTexture.dispose();
          if (e.isWebGLCubeRenderTarget)
            for (let e = 0; e < 6; e++)
              t.deleteFramebuffer(r.__webglFramebuffer[e]),
                r.__webglDepthbuffer &&
                  t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
          else {
            if (
              (t.deleteFramebuffer(r.__webglFramebuffer),
              r.__webglDepthbuffer &&
                t.deleteRenderbuffer(r.__webglDepthbuffer),
              r.__webglMultisampledFramebuffer &&
                t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
              r.__webglColorRenderbuffer)
            )
              for (let e = 0; e < r.__webglColorRenderbuffer.length; e++)
                r.__webglColorRenderbuffer[e] &&
                  t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
            r.__webglDepthRenderbuffer &&
              t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
          }
          if (e.isWebGLMultipleRenderTargets)
            for (let e = 0, r = n.length; e < r; e++) {
              const r = i.get(n[e]);
              r.__webglTexture &&
                (t.deleteTexture(r.__webglTexture), s.memory.textures--),
                i.remove(n[e]);
            }
          i.remove(n), i.remove(e);
        })(n);
    }
    function q(e) {
      const n = i.get(e);
      t.deleteTexture(n.__webglTexture);
      const r = e.source;
      delete D.get(r)[n.__cacheKey], s.memory.textures--;
    }
    let Y = 0;
    function Z(t, e) {
      const r = i.get(t);
      if (
        (t.isVideoTexture &&
          (function (t) {
            const e = s.render.frame;
            L.get(t) !== e && (L.set(t, e), t.update());
          })(t),
        !1 === t.isRenderTargetTexture &&
          t.version > 0 &&
          r.__version !== t.version)
      ) {
        const n = t.image;
        if (null === n)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but no image data found."
          );
        else {
          if (!1 !== n.complete) return void et(r, t, e);
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        }
      }
      n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
    }
    const J = { [d]: 10497, [p]: 33071, [m]: 33648 },
      Q = {
        [f]: 9728,
        1004: 9984,
        1005: 9986,
        [g]: 9729,
        1007: 9985,
        [_]: 9987,
      };
    function $(n, a, s) {
      if (
        (s
          ? (t.texParameteri(n, 10242, J[a.wrapS]),
            t.texParameteri(n, 10243, J[a.wrapT]),
            (32879 !== n && 35866 !== n) ||
              t.texParameteri(n, 32882, J[a.wrapR]),
            t.texParameteri(n, 10240, Q[a.magFilter]),
            t.texParameteri(n, 10241, Q[a.minFilter]))
          : (t.texParameteri(n, 10242, 33071),
            t.texParameteri(n, 10243, 33071),
            (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, 33071),
            (a.wrapS === p && a.wrapT === p) ||
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
              ),
            t.texParameteri(n, 10240, V(a.magFilter)),
            t.texParameteri(n, 10241, V(a.minFilter)),
            a.minFilter !== f &&
              a.minFilter !== g &&
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
              )),
        !0 === e.has("EXT_texture_filter_anisotropic"))
      ) {
        const s = e.get("EXT_texture_filter_anisotropic");
        if (a.type === M && !1 === e.has("OES_texture_float_linear")) return;
        if (
          !1 === o &&
          a.type === y &&
          !1 === e.has("OES_texture_half_float_linear")
        )
          return;
        (a.anisotropy > 1 || i.get(a).__currentAnisotropy) &&
          (t.texParameterf(
            n,
            s.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(a.anisotropy, r.getMaxAnisotropy())
          ),
          (i.get(a).__currentAnisotropy = a.anisotropy));
      }
    }
    function tt(e, n) {
      let i = !1;
      void 0 === e.__webglInit &&
        ((e.__webglInit = !0), n.addEventListener("dispose", k));
      const r = n.source;
      let a = D.get(r);
      void 0 === a && ((a = {}), D.set(r, a));
      const o = (function (t) {
        const e = [];
        return (
          e.push(t.wrapS),
          e.push(t.wrapT),
          e.push(t.magFilter),
          e.push(t.minFilter),
          e.push(t.anisotropy),
          e.push(t.internalFormat),
          e.push(t.format),
          e.push(t.type),
          e.push(t.generateMipmaps),
          e.push(t.premultiplyAlpha),
          e.push(t.flipY),
          e.push(t.unpackAlignment),
          e.push(t.encoding),
          e.join()
        );
      })(n);
      if (o !== e.__cacheKey) {
        void 0 === a[o] &&
          ((a[o] = { texture: t.createTexture(), usedTimes: 0 }),
          s.memory.textures++,
          (i = !0)),
          a[o].usedTimes++;
        const r = a[e.__cacheKey];
        void 0 !== r &&
          (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && q(n)),
          (e.__cacheKey = o),
          (e.__webglTexture = a[o].texture);
      }
      return i;
    }
    function et(e, i, r) {
      let s = 3553;
      i.isDataArrayTexture && (s = 35866), i.isData3DTexture && (s = 32879);
      const l = tt(e, i),
        c = i.source;
      if (
        (n.activeTexture(33984 + r),
        n.bindTexture(s, e.__webglTexture),
        c.version !== c.__currentVersion || !0 === l)
      ) {
        t.pixelStorei(37440, i.flipY),
          t.pixelStorei(37441, i.premultiplyAlpha),
          t.pixelStorei(3317, i.unpackAlignment),
          t.pixelStorei(37443, 0);
        const e =
          (function (t) {
            return (
              !o &&
              (t.wrapS !== p ||
                t.wrapT !== p ||
                (t.minFilter !== f && t.minFilter !== g))
            );
          })(i) && !1 === U(i.image);
        let r = O(i.image, e, !1, h);
        r = ot(i, r);
        const u = U(r) || o,
          d = a.convert(i.format, i.encoding);
        let m,
          _ = a.convert(i.type),
          v = G(i.internalFormat, d, _, i.encoding, i.isVideoTexture);
        $(s, i, u);
        const y = i.mipmaps,
          E = o && !0 !== i.isVideoTexture,
          A = void 0 === c.__currentVersion || !0 === l,
          L = H(i, r, u);
        if (i.isDepthTexture)
          (v = 6402),
            o
              ? (v =
                  i.type === M
                    ? 36012
                    : i.type === x
                    ? 33190
                    : i.type === b
                    ? 35056
                    : 33189)
              : i.type === M &&
                console.error(
                  "WebGLRenderer: Floating point depth texture requires WebGL2."
                ),
            i.format === w &&
              6402 === v &&
              1012 !== i.type &&
              i.type !== x &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
              ),
              (i.type = x),
              (_ = a.convert(i.type))),
            i.format === T &&
              6402 === v &&
              ((v = 34041),
              i.type !== b &&
                (console.warn(
                  "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                ),
                (i.type = b),
                (_ = a.convert(i.type)))),
            A &&
              (E
                ? n.texStorage2D(3553, 1, v, r.width, r.height)
                : n.texImage2D(3553, 0, v, r.width, r.height, 0, d, _, null));
        else if (i.isDataTexture)
          if (y.length > 0 && u) {
            E && A && n.texStorage2D(3553, L, v, y[0].width, y[0].height);
            for (let t = 0, e = y.length; t < e; t++)
              (m = y[t]),
                E
                  ? n.texSubImage2D(
                      3553,
                      t,
                      0,
                      0,
                      m.width,
                      m.height,
                      d,
                      _,
                      m.data
                    )
                  : n.texImage2D(
                      3553,
                      t,
                      v,
                      m.width,
                      m.height,
                      0,
                      d,
                      _,
                      m.data
                    );
            i.generateMipmaps = !1;
          } else
            E
              ? (A && n.texStorage2D(3553, L, v, r.width, r.height),
                n.texSubImage2D(3553, 0, 0, 0, r.width, r.height, d, _, r.data))
              : n.texImage2D(3553, 0, v, r.width, r.height, 0, d, _, r.data);
        else if (i.isCompressedTexture) {
          E && A && n.texStorage2D(3553, L, v, y[0].width, y[0].height);
          for (let t = 0, e = y.length; t < e; t++)
            (m = y[t]),
              i.format !== S
                ? null !== d
                  ? E
                    ? n.compressedTexSubImage2D(
                        3553,
                        t,
                        0,
                        0,
                        m.width,
                        m.height,
                        d,
                        m.data
                      )
                    : n.compressedTexImage2D(
                        3553,
                        t,
                        v,
                        m.width,
                        m.height,
                        0,
                        m.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : E
                ? n.texSubImage2D(
                    3553,
                    t,
                    0,
                    0,
                    m.width,
                    m.height,
                    d,
                    _,
                    m.data
                  )
                : n.texImage2D(3553, t, v, m.width, m.height, 0, d, _, m.data);
        } else if (i.isDataArrayTexture)
          E
            ? (A && n.texStorage3D(35866, L, v, r.width, r.height, r.depth),
              n.texSubImage3D(
                35866,
                0,
                0,
                0,
                0,
                r.width,
                r.height,
                r.depth,
                d,
                _,
                r.data
              ))
            : n.texImage3D(
                35866,
                0,
                v,
                r.width,
                r.height,
                r.depth,
                0,
                d,
                _,
                r.data
              );
        else if (i.isData3DTexture)
          E
            ? (A && n.texStorage3D(32879, L, v, r.width, r.height, r.depth),
              n.texSubImage3D(
                32879,
                0,
                0,
                0,
                0,
                r.width,
                r.height,
                r.depth,
                d,
                _,
                r.data
              ))
            : n.texImage3D(
                32879,
                0,
                v,
                r.width,
                r.height,
                r.depth,
                0,
                d,
                _,
                r.data
              );
        else if (i.isFramebufferTexture) {
          if (A)
            if (E) n.texStorage2D(3553, L, v, r.width, r.height);
            else {
              let t = r.width,
                e = r.height;
              for (let i = 0; i < L; i++)
                n.texImage2D(3553, i, v, t, e, 0, d, _, null),
                  (t >>= 1),
                  (e >>= 1);
            }
        } else if (y.length > 0 && u) {
          E && A && n.texStorage2D(3553, L, v, y[0].width, y[0].height);
          for (let t = 0, e = y.length; t < e; t++)
            (m = y[t]),
              E
                ? n.texSubImage2D(3553, t, 0, 0, d, _, m)
                : n.texImage2D(3553, t, v, d, _, m);
          i.generateMipmaps = !1;
        } else
          E
            ? (A && n.texStorage2D(3553, L, v, r.width, r.height),
              n.texSubImage2D(3553, 0, 0, 0, d, _, r))
            : n.texImage2D(3553, 0, v, d, _, r);
        F(i, u) && B(s),
          (c.__currentVersion = c.version),
          i.onUpdate && i.onUpdate(i);
      }
      e.__version = i.version;
    }
    function nt(e, r, s, o, l) {
      const c = a.convert(s.format, s.encoding),
        h = a.convert(s.type),
        u = G(s.internalFormat, c, h, s.encoding);
      i.get(r).__hasExternalTextures ||
        (32879 === l || 35866 === l
          ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null)
          : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)),
        n.bindFramebuffer(36160, e),
        st(r)
          ? E.framebufferTexture2DMultisampleEXT(
              36160,
              o,
              l,
              i.get(s).__webglTexture,
              0,
              at(r)
            )
          : t.framebufferTexture2D(36160, o, l, i.get(s).__webglTexture, 0),
        n.bindFramebuffer(36160, null);
    }
    function it(e, n, i) {
      if ((t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)) {
        let r = 33189;
        if (i || st(n)) {
          const e = n.depthTexture;
          e &&
            e.isDepthTexture &&
            (e.type === M ? (r = 36012) : e.type === x && (r = 33190));
          const i = at(n);
          st(n)
            ? E.renderbufferStorageMultisampleEXT(
                36161,
                i,
                r,
                n.width,
                n.height
              )
            : t.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
        } else t.renderbufferStorage(36161, r, n.width, n.height);
        t.framebufferRenderbuffer(36160, 36096, 36161, e);
      } else if (n.depthBuffer && n.stencilBuffer) {
        const r = at(n);
        i && !1 === st(n)
          ? t.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height)
          : st(n)
          ? E.renderbufferStorageMultisampleEXT(
              36161,
              r,
              35056,
              n.width,
              n.height
            )
          : t.renderbufferStorage(36161, 34041, n.width, n.height),
          t.framebufferRenderbuffer(36160, 33306, 36161, e);
      } else {
        const e =
          !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
        for (let r = 0; r < e.length; r++) {
          const s = e[r],
            o = a.convert(s.format, s.encoding),
            l = a.convert(s.type),
            c = G(s.internalFormat, o, l, s.encoding),
            h = at(n);
          i && !1 === st(n)
            ? t.renderbufferStorageMultisample(36161, h, c, n.width, n.height)
            : st(n)
            ? E.renderbufferStorageMultisampleEXT(
                36161,
                h,
                c,
                n.width,
                n.height
              )
            : t.renderbufferStorage(36161, c, n.width, n.height);
        }
      }
      t.bindRenderbuffer(36161, null);
    }
    function rt(e) {
      const r = i.get(e),
        a = !0 === e.isWebGLCubeRenderTarget;
      if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
        if (a)
          throw new Error(
            "target.depthTexture not supported in Cube render targets"
          );
        !(function (e, r) {
          if (r && r.isWebGLCubeRenderTarget)
            throw new Error(
              "Depth Texture with cube render targets is not supported"
            );
          if (
            (n.bindFramebuffer(36160, e),
            !r.depthTexture || !r.depthTexture.isDepthTexture)
          )
            throw new Error(
              "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
            );
          (i.get(r.depthTexture).__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
            Z(r.depthTexture, 0);
          const a = i.get(r.depthTexture).__webglTexture,
            s = at(r);
          if (r.depthTexture.format === w)
            st(r)
              ? E.framebufferTexture2DMultisampleEXT(
                  36160,
                  36096,
                  3553,
                  a,
                  0,
                  s
                )
              : t.framebufferTexture2D(36160, 36096, 3553, a, 0);
          else {
            if (r.depthTexture.format !== T)
              throw new Error("Unknown depthTexture format");
            st(r)
              ? E.framebufferTexture2DMultisampleEXT(
                  36160,
                  33306,
                  3553,
                  a,
                  0,
                  s
                )
              : t.framebufferTexture2D(36160, 33306, 3553, a, 0);
          }
        })(r.__webglFramebuffer, e);
      } else if (a) {
        r.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++)
          n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
            (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
            it(r.__webglDepthbuffer[i], e, !1);
      } else
        n.bindFramebuffer(36160, r.__webglFramebuffer),
          (r.__webglDepthbuffer = t.createRenderbuffer()),
          it(r.__webglDepthbuffer, e, !1);
      n.bindFramebuffer(36160, null);
    }
    function at(t) {
      return Math.min(u, t.samples);
    }
    function st(t) {
      const n = i.get(t);
      return (
        o &&
        t.samples > 0 &&
        !0 === e.has("WEBGL_multisampled_render_to_texture") &&
        !1 !== n.__useRenderToTexture
      );
    }
    function ot(t, n) {
      const i = t.encoding,
        r = t.format,
        a = t.type;
      return (
        !0 === t.isCompressedTexture ||
          !0 === t.isVideoTexture ||
          t.format === z ||
          (i !== R &&
            (i === P
              ? !1 === o
                ? !0 === e.has("EXT_sRGB") && r === S
                  ? ((t.format = z),
                    (t.minFilter = g),
                    (t.generateMipmaps = !1))
                  : (n = ht.sRGBToLinear(n))
                : (r === S && a === v) ||
                  console.warn(
                    "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                  )
              : console.error(
                  "THREE.WebGLTextures: Unsupported texture encoding:",
                  i
                ))),
        n
      );
    }
    (this.allocateTextureUnit = function () {
      const t = Y;
      return (
        t >= l &&
          console.warn(
            "THREE.WebGLTextures: Trying to use " +
              t +
              " texture units while this GPU supports only " +
              l
          ),
        (Y += 1),
        t
      );
    }),
      (this.resetTextureUnits = function () {
        Y = 0;
      }),
      (this.setTexture2D = Z),
      (this.setTexture2DArray = function (t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version
          ? et(r, t, e)
          : (n.activeTexture(33984 + e),
            n.bindTexture(35866, r.__webglTexture));
      }),
      (this.setTexture3D = function (t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version
          ? et(r, t, e)
          : (n.activeTexture(33984 + e),
            n.bindTexture(32879, r.__webglTexture));
      }),
      (this.setTextureCube = function (e, r) {
        const s = i.get(e);
        e.version > 0 && s.__version !== e.version
          ? (function (e, i, r) {
              if (6 !== i.image.length) return;
              const s = tt(e, i),
                l = i.source;
              if (
                (n.activeTexture(33984 + r),
                n.bindTexture(34067, e.__webglTexture),
                l.version !== l.__currentVersion || !0 === s)
              ) {
                t.pixelStorei(37440, i.flipY),
                  t.pixelStorei(37441, i.premultiplyAlpha),
                  t.pixelStorei(3317, i.unpackAlignment),
                  t.pixelStorei(37443, 0);
                const e =
                    i.isCompressedTexture || i.image[0].isCompressedTexture,
                  r = i.image[0] && i.image[0].isDataTexture,
                  h = [];
                for (let t = 0; t < 6; t++)
                  (h[t] =
                    e || r
                      ? r
                        ? i.image[t].image
                        : i.image[t]
                      : O(i.image[t], !1, !0, c)),
                    (h[t] = ot(i, h[t]));
                const u = h[0],
                  d = U(u) || o,
                  p = a.convert(i.format, i.encoding),
                  m = a.convert(i.type),
                  f = G(i.internalFormat, p, m, i.encoding),
                  g = o && !0 !== i.isVideoTexture,
                  _ = void 0 === l.__currentVersion || !0 === s;
                let v,
                  x = H(i, u, d);
                if (($(34067, i, d), e)) {
                  g && _ && n.texStorage2D(34067, x, f, u.width, u.height);
                  for (let t = 0; t < 6; t++) {
                    v = h[t].mipmaps;
                    for (let e = 0; e < v.length; e++) {
                      const r = v[e];
                      i.format !== S
                        ? null !== p
                          ? g
                            ? n.compressedTexSubImage2D(
                                34069 + t,
                                e,
                                0,
                                0,
                                r.width,
                                r.height,
                                p,
                                r.data
                              )
                            : n.compressedTexImage2D(
                                34069 + t,
                                e,
                                f,
                                r.width,
                                r.height,
                                0,
                                r.data
                              )
                          : console.warn(
                              "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                            )
                        : g
                        ? n.texSubImage2D(
                            34069 + t,
                            e,
                            0,
                            0,
                            r.width,
                            r.height,
                            p,
                            m,
                            r.data
                          )
                        : n.texImage2D(
                            34069 + t,
                            e,
                            f,
                            r.width,
                            r.height,
                            0,
                            p,
                            m,
                            r.data
                          );
                    }
                  }
                } else {
                  (v = i.mipmaps),
                    g &&
                      _ &&
                      (v.length > 0 && x++,
                      n.texStorage2D(34067, x, f, h[0].width, h[0].height));
                  for (let t = 0; t < 6; t++)
                    if (r) {
                      g
                        ? n.texSubImage2D(
                            34069 + t,
                            0,
                            0,
                            0,
                            h[t].width,
                            h[t].height,
                            p,
                            m,
                            h[t].data
                          )
                        : n.texImage2D(
                            34069 + t,
                            0,
                            f,
                            h[t].width,
                            h[t].height,
                            0,
                            p,
                            m,
                            h[t].data
                          );
                      for (let e = 0; e < v.length; e++) {
                        const i = v[e].image[t].image;
                        g
                          ? n.texSubImage2D(
                              34069 + t,
                              e + 1,
                              0,
                              0,
                              i.width,
                              i.height,
                              p,
                              m,
                              i.data
                            )
                          : n.texImage2D(
                              34069 + t,
                              e + 1,
                              f,
                              i.width,
                              i.height,
                              0,
                              p,
                              m,
                              i.data
                            );
                      }
                    } else {
                      g
                        ? n.texSubImage2D(34069 + t, 0, 0, 0, p, m, h[t])
                        : n.texImage2D(34069 + t, 0, f, p, m, h[t]);
                      for (let e = 0; e < v.length; e++) {
                        const i = v[e];
                        g
                          ? n.texSubImage2D(
                              34069 + t,
                              e + 1,
                              0,
                              0,
                              p,
                              m,
                              i.image[t]
                            )
                          : n.texImage2D(34069 + t, e + 1, f, p, m, i.image[t]);
                      }
                    }
                }
                F(i, d) && B(34067),
                  (l.__currentVersion = l.version),
                  i.onUpdate && i.onUpdate(i);
              }
              e.__version = i.version;
            })(s, e, r)
          : (n.activeTexture(33984 + r),
            n.bindTexture(34067, s.__webglTexture));
      }),
      (this.rebindTextures = function (t, e, n) {
        const r = i.get(t);
        void 0 !== e && nt(r.__webglFramebuffer, t, t.texture, 36064, 3553),
          void 0 !== n && rt(t);
      }),
      (this.setupRenderTarget = function (e) {
        const l = e.texture,
          c = i.get(e),
          h = i.get(l);
        e.addEventListener("dispose", X),
          !0 !== e.isWebGLMultipleRenderTargets &&
            (void 0 === h.__webglTexture &&
              (h.__webglTexture = t.createTexture()),
            (h.__version = l.version),
            s.memory.textures++);
        const u = !0 === e.isWebGLCubeRenderTarget,
          d = !0 === e.isWebGLMultipleRenderTargets,
          p = U(e) || o;
        if (u) {
          c.__webglFramebuffer = [];
          for (let e = 0; e < 6; e++)
            c.__webglFramebuffer[e] = t.createFramebuffer();
        } else {
          if (((c.__webglFramebuffer = t.createFramebuffer()), d))
            if (r.drawBuffers) {
              const n = e.texture;
              for (let e = 0, r = n.length; e < r; e++) {
                const r = i.get(n[e]);
                void 0 === r.__webglTexture &&
                  ((r.__webglTexture = t.createTexture()), s.memory.textures++);
              }
            } else
              console.warn(
                "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
              );
          if (o && e.samples > 0 && !1 === st(e)) {
            const i = d ? l : [l];
            (c.__webglMultisampledFramebuffer = t.createFramebuffer()),
              (c.__webglColorRenderbuffer = []),
              n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
            for (let n = 0; n < i.length; n++) {
              const r = i[n];
              (c.__webglColorRenderbuffer[n] = t.createRenderbuffer()),
                t.bindRenderbuffer(36161, c.__webglColorRenderbuffer[n]);
              const s = a.convert(r.format, r.encoding),
                o = a.convert(r.type),
                l = G(r.internalFormat, s, o, r.encoding),
                h = at(e);
              t.renderbufferStorageMultisample(36161, h, l, e.width, e.height),
                t.framebufferRenderbuffer(
                  36160,
                  36064 + n,
                  36161,
                  c.__webglColorRenderbuffer[n]
                );
            }
            t.bindRenderbuffer(36161, null),
              e.depthBuffer &&
                ((c.__webglDepthRenderbuffer = t.createRenderbuffer()),
                it(c.__webglDepthRenderbuffer, e, !0)),
              n.bindFramebuffer(36160, null);
          }
        }
        if (u) {
          n.bindTexture(34067, h.__webglTexture), $(34067, l, p);
          for (let t = 0; t < 6; t++)
            nt(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
          F(l, p) && B(34067), n.unbindTexture();
        } else if (d) {
          const t = e.texture;
          for (let r = 0, a = t.length; r < a; r++) {
            const a = t[r],
              s = i.get(a);
            n.bindTexture(3553, s.__webglTexture),
              $(3553, a, p),
              nt(c.__webglFramebuffer, e, a, 36064 + r, 3553),
              F(a, p) && B(3553);
          }
          n.unbindTexture();
        } else {
          let t = 3553;
          (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
            (o
              ? (t = e.isWebGL3DRenderTarget ? 32879 : 35866)
              : console.error(
                  "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
                )),
            n.bindTexture(t, h.__webglTexture),
            $(t, l, p),
            nt(c.__webglFramebuffer, e, l, 36064, t),
            F(l, p) && B(t),
            n.unbindTexture();
        }
        e.depthBuffer && rt(e);
      }),
      (this.updateRenderTargetMipmap = function (t) {
        const e = U(t) || o,
          r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
        for (let a = 0, s = r.length; a < s; a++) {
          const s = r[a];
          if (F(s, e)) {
            const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
              r = i.get(s).__webglTexture;
            n.bindTexture(e, r), B(e), n.unbindTexture();
          }
        }
      }),
      (this.updateMultisampleRenderTarget = function (e) {
        if (o && e.samples > 0 && !1 === st(e)) {
          const r = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture],
            a = e.width,
            s = e.height;
          let o = 16384;
          const l = [],
            c = e.stencilBuffer ? 33306 : 36096,
            h = i.get(e),
            u = !0 === e.isWebGLMultipleRenderTargets;
          if (u)
            for (let e = 0; e < r.length; e++)
              n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
                t.framebufferRenderbuffer(36160, 36064 + e, 36161, null),
                n.bindFramebuffer(36160, h.__webglFramebuffer),
                t.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
          n.bindFramebuffer(36008, h.__webglMultisampledFramebuffer),
            n.bindFramebuffer(36009, h.__webglFramebuffer);
          for (let n = 0; n < r.length; n++) {
            l.push(36064 + n), e.depthBuffer && l.push(c);
            const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
            if (
              (!1 === d &&
                (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)),
              u &&
                t.framebufferRenderbuffer(
                  36008,
                  36064,
                  36161,
                  h.__webglColorRenderbuffer[n]
                ),
              !0 === d &&
                (t.invalidateFramebuffer(36008, [c]),
                t.invalidateFramebuffer(36009, [c])),
              u)
            ) {
              const e = i.get(r[n]).__webglTexture;
              t.framebufferTexture2D(36009, 36064, 3553, e, 0);
            }
            t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, 9728),
              A && t.invalidateFramebuffer(36008, l);
          }
          if (
            (n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, null), u)
          )
            for (let e = 0; e < r.length; e++) {
              n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
                t.framebufferRenderbuffer(
                  36160,
                  36064 + e,
                  36161,
                  h.__webglColorRenderbuffer[e]
                );
              const a = i.get(r[e]).__webglTexture;
              n.bindFramebuffer(36160, h.__webglFramebuffer),
                t.framebufferTexture2D(36009, 36064 + e, 3553, a, 0);
            }
          n.bindFramebuffer(36009, h.__webglMultisampledFramebuffer);
        }
      }),
      (this.setupDepthRenderbuffer = rt),
      (this.setupFrameBufferTexture = nt),
      (this.useMultisampledRTT = st);
  }
  function ia(t, e, n) {
    const i = n.isWebGL2;
    return {
      convert: function (n, r = null) {
        let a;
        if (n === v) return 5121;
        if (1017 === n) return 32819;
        if (1018 === n) return 32820;
        if (1010 === n) return 5120;
        if (1011 === n) return 5122;
        if (1012 === n) return 5123;
        if (1013 === n) return 5124;
        if (n === x) return 5125;
        if (n === M) return 5126;
        if (n === y)
          return i
            ? 5131
            : ((a = e.get("OES_texture_half_float")),
              null !== a ? a.HALF_FLOAT_OES : null);
        if (1021 === n) return 6406;
        if (n === S) return 6408;
        if (1024 === n) return 6409;
        if (1025 === n) return 6410;
        if (n === w) return 6402;
        if (n === T) return 34041;
        if (1028 === n) return 6403;
        if (1022 === n)
          return (
            console.warn(
              "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
            ),
            6408
          );
        if (n === z)
          return (a = e.get("EXT_sRGB")), null !== a ? a.SRGB_ALPHA_EXT : null;
        if (1029 === n) return 36244;
        if (1030 === n) return 33319;
        if (1031 === n) return 33320;
        if (1033 === n) return 36249;
        if (n === E || n === A || n === L || n === C)
          if (r === P) {
            if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), null === a))
              return null;
            if (n === E) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (n === A) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (n === L) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (n === C) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else {
            if (((a = e.get("WEBGL_compressed_texture_s3tc")), null === a))
              return null;
            if (n === E) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (n === A) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (n === L) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (n === C) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
          if (((a = e.get("WEBGL_compressed_texture_pvrtc")), null === a))
            return null;
          if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (36196 === n)
          return (
            (a = e.get("WEBGL_compressed_texture_etc1")),
            null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null
          );
        if (37492 === n || 37496 === n) {
          if (((a = e.get("WEBGL_compressed_texture_etc")), null === a))
            return null;
          if (37492 === n)
            return r === P ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
          if (37496 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
              : a.COMPRESSED_RGBA8_ETC2_EAC;
        }
        if (
          37808 === n ||
          37809 === n ||
          37810 === n ||
          37811 === n ||
          37812 === n ||
          37813 === n ||
          37814 === n ||
          37815 === n ||
          37816 === n ||
          37817 === n ||
          37818 === n ||
          37819 === n ||
          37820 === n ||
          37821 === n
        ) {
          if (((a = e.get("WEBGL_compressed_texture_astc")), null === a))
            return null;
          if (37808 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
              : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (37809 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
              : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (37810 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
              : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (37811 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
              : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (37812 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
              : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (37813 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
              : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (37814 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
              : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (37815 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
              : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (37816 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
              : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (37817 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
              : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (37818 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
              : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (37819 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
              : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (37820 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
              : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (37821 === n)
            return r === P
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
              : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
        }
        if (36492 === n) {
          if (((a = e.get("EXT_texture_compression_bptc")), null === a))
            return null;
          if (36492 === n)
            return r === P
              ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
              : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        }
        return n === b
          ? i
            ? 34042
            : ((a = e.get("WEBGL_depth_texture")),
              null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null)
          : void 0 !== t[n]
          ? t[n]
          : null;
      },
    };
  }
  class ra extends Sn {
    constructor(t = []) {
      super(), (this.isArrayCamera = !0), (this.cameras = t);
    }
  }
  class aa extends be {
    constructor() {
      super(), (this.isGroup = !0), (this.type = "Group");
    }
  }
  const sa = { type: "move" };
  class oa {
    constructor() {
      (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
      return (
        null === this._hand &&
          ((this._hand = new aa()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        null === this._targetRay &&
          ((this._targetRay = new aa()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new Mt()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new Mt())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        null === this._grip &&
          ((this._grip = new aa()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new Mt()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new Mt())),
        this._grip
      );
    }
    dispatchEvent(t) {
      return (
        null !== this._targetRay && this._targetRay.dispatchEvent(t),
        null !== this._grip && this._grip.dispatchEvent(t),
        null !== this._hand && this._hand.dispatchEvent(t),
        this
      );
    }
    disconnect(t) {
      return (
        this.dispatchEvent({ type: "disconnected", data: t }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
      );
    }
    update(t, e, n) {
      let i = null,
        r = null,
        a = null;
      const s = this._targetRay,
        o = this._grip,
        l = this._hand;
      if (t && "visible-blurred" !== e.session.visibilityState) {
        if (l && t.hand) {
          a = !0;
          for (const i of t.hand.values()) {
            const t = e.getJointPose(i, n);
            if (void 0 === l.joints[i.jointName]) {
              const t = new aa();
              (t.matrixAutoUpdate = !1),
                (t.visible = !1),
                (l.joints[i.jointName] = t),
                l.add(t);
            }
            const r = l.joints[i.jointName];
            null !== t &&
              (r.matrix.fromArray(t.transform.matrix),
              r.matrix.decompose(r.position, r.rotation, r.scale),
              (r.jointRadius = t.radius)),
              (r.visible = null !== t);
          }
          const i = l.joints["index-finger-tip"],
            r = l.joints["thumb-tip"],
            s = i.position.distanceTo(r.position),
            o = 0.02,
            c = 0.005;
          l.inputState.pinching && s > o + c
            ? ((l.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: t.handedness,
                target: this,
              }))
            : !l.inputState.pinching &&
              s <= o - c &&
              ((l.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this,
              }));
        } else
          null !== o &&
            t.gripSpace &&
            ((r = e.getPose(t.gripSpace, n)),
            null !== r &&
              (o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              r.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(r.linearVelocity))
                : (o.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(r.angularVelocity))
                : (o.hasAngularVelocity = !1)));
        null !== s &&
          ((i = e.getPose(t.targetRaySpace, n)),
          null === i && null !== r && (i = r),
          null !== i &&
            (s.matrix.fromArray(i.transform.matrix),
            s.matrix.decompose(s.position, s.rotation, s.scale),
            i.linearVelocity
              ? ((s.hasLinearVelocity = !0),
                s.linearVelocity.copy(i.linearVelocity))
              : (s.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((s.hasAngularVelocity = !0),
                s.angularVelocity.copy(i.angularVelocity))
              : (s.hasAngularVelocity = !1),
            this.dispatchEvent(sa)));
      }
      return (
        null !== s && (s.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== a),
        this
      );
    }
  }
  class la extends mt {
    constructor(t, e, n, i, r, a, s, o, l, c) {
      if ((c = void 0 !== c ? c : w) !== w && c !== T)
        throw new Error(
          "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
        );
      void 0 === n && c === w && (n = x),
        void 0 === n && c === T && (n = b),
        super(null, i, r, a, s, o, c, n, l),
        (this.isDepthTexture = !0),
        (this.image = { width: t, height: e }),
        (this.magFilter = void 0 !== s ? s : f),
        (this.minFilter = void 0 !== o ? o : f),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }
  }
  class ca extends U {
    constructor(t, e) {
      super();
      const n = this;
      let i = null,
        r = 1,
        a = null,
        s = "local-floor",
        o = null,
        l = null,
        c = null,
        h = null,
        u = null,
        d = null;
      const p = e.getContextAttributes();
      let m = null,
        f = null;
      const g = [],
        _ = [],
        M = new Sn();
      M.layers.enable(1), (M.viewport = new ft());
      const y = new Sn();
      y.layers.enable(2), (y.viewport = new ft());
      const E = [M, y],
        A = new ra();
      A.layers.enable(1), A.layers.enable(2);
      let L = null,
        C = null;
      function R(t) {
        const e = _.indexOf(t.inputSource);
        if (-1 === e) return;
        const n = g[e];
        void 0 !== n && n.dispatchEvent({ type: t.type, data: t.inputSource });
      }
      function P() {
        i.removeEventListener("select", R),
          i.removeEventListener("selectstart", R),
          i.removeEventListener("selectend", R),
          i.removeEventListener("squeeze", R),
          i.removeEventListener("squeezestart", R),
          i.removeEventListener("squeezeend", R),
          i.removeEventListener("end", P),
          i.removeEventListener("inputsourceschange", D);
        for (let t = 0; t < g.length; t++) {
          const e = _[t];
          null !== e && ((_[t] = null), g[t].disconnect(e));
        }
        (L = null),
          (C = null),
          t.setRenderTarget(m),
          (u = null),
          (h = null),
          (c = null),
          (i = null),
          (f = null),
          U.stop(),
          (n.isPresenting = !1),
          n.dispatchEvent({ type: "sessionend" });
      }
      function D(t) {
        for (let e = 0; e < t.removed.length; e++) {
          const n = t.removed[e],
            i = _.indexOf(n);
          i >= 0 &&
            ((_[i] = null),
            g[i].dispatchEvent({ type: "disconnected", data: n }));
        }
        for (let e = 0; e < t.added.length; e++) {
          const n = t.added[e];
          let i = _.indexOf(n);
          if (-1 === i) {
            for (let t = 0; t < g.length; t++) {
              if (t >= _.length) {
                _.push(n), (i = t);
                break;
              }
              if (null === _[t]) {
                (_[t] = n), (i = t);
                break;
              }
            }
            if (-1 === i) break;
          }
          const r = g[i];
          r && r.dispatchEvent({ type: "connected", data: n });
        }
      }
      (this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (t) {
          let e = g[t];
          return (
            void 0 === e && ((e = new oa()), (g[t] = e)), e.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (t) {
          let e = g[t];
          return void 0 === e && ((e = new oa()), (g[t] = e)), e.getGripSpace();
        }),
        (this.getHand = function (t) {
          let e = g[t];
          return void 0 === e && ((e = new oa()), (g[t] = e)), e.getHandSpace();
        }),
        (this.setFramebufferScaleFactor = function (t) {
          (r = t),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
              );
        }),
        (this.setReferenceSpaceType = function (t) {
          (s = t),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change reference space type while presenting."
              );
        }),
        (this.getReferenceSpace = function () {
          return o || a;
        }),
        (this.setReferenceSpace = function (t) {
          o = t;
        }),
        (this.getBaseLayer = function () {
          return null !== h ? h : u;
        }),
        (this.getBinding = function () {
          return c;
        }),
        (this.getFrame = function () {
          return d;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = async function (l) {
          if (((i = l), null !== i)) {
            if (
              ((m = t.getRenderTarget()),
              i.addEventListener("select", R),
              i.addEventListener("selectstart", R),
              i.addEventListener("selectend", R),
              i.addEventListener("squeeze", R),
              i.addEventListener("squeezestart", R),
              i.addEventListener("squeezeend", R),
              i.addEventListener("end", P),
              i.addEventListener("inputsourceschange", D),
              !0 !== p.xrCompatible && (await e.makeXRCompatible()),
              void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2)
            ) {
              const n = {
                antialias: void 0 !== i.renderState.layers || p.antialias,
                alpha: p.alpha,
                depth: p.depth,
                stencil: p.stencil,
                framebufferScaleFactor: r,
              };
              (u = new XRWebGLLayer(i, e, n)),
                i.updateRenderState({ baseLayer: u }),
                (f = new gt(u.framebufferWidth, u.framebufferHeight, {
                  format: S,
                  type: v,
                  encoding: t.outputEncoding,
                  stencilBuffer: p.stencil,
                }));
            } else {
              let n = null,
                a = null,
                s = null;
              p.depth &&
                ((s = p.stencil ? 35056 : 33190),
                (n = p.stencil ? T : w),
                (a = p.stencil ? b : x));
              const o = { colorFormat: 32856, depthFormat: s, scaleFactor: r };
              (c = new XRWebGLBinding(i, e)),
                (h = c.createProjectionLayer(o)),
                i.updateRenderState({ layers: [h] }),
                (f = new gt(h.textureWidth, h.textureHeight, {
                  format: S,
                  type: v,
                  depthTexture: new la(
                    h.textureWidth,
                    h.textureHeight,
                    a,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    n
                  ),
                  stencilBuffer: p.stencil,
                  encoding: t.outputEncoding,
                  samples: p.antialias ? 4 : 0,
                }));
              t.properties.get(f).__ignoreDepthValues = h.ignoreDepthValues;
            }
            (f.isXRRenderTarget = !0),
              this.setFoveation(1),
              (o = null),
              (a = await i.requestReferenceSpace(s)),
              U.setContext(i),
              U.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: "sessionstart" });
          }
        });
      const I = new Mt(),
        N = new Mt();
      function O(t, e) {
        null === e
          ? t.matrixWorld.copy(t.matrix)
          : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
          t.matrixWorldInverse.copy(t.matrixWorld).invert();
      }
      (this.updateCamera = function (t) {
        if (null === i) return;
        (A.near = y.near = M.near = t.near),
          (A.far = y.far = M.far = t.far),
          (L === A.near && C === A.far) ||
            (i.updateRenderState({ depthNear: A.near, depthFar: A.far }),
            (L = A.near),
            (C = A.far));
        const e = t.parent,
          n = A.cameras;
        O(A, e);
        for (let t = 0; t < n.length; t++) O(n[t], e);
        A.matrixWorld.decompose(A.position, A.quaternion, A.scale),
          t.matrix.copy(A.matrix),
          t.matrix.decompose(t.position, t.quaternion, t.scale);
        const r = t.children;
        for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
        2 === n.length
          ? (function (t, e, n) {
              I.setFromMatrixPosition(e.matrixWorld),
                N.setFromMatrixPosition(n.matrixWorld);
              const i = I.distanceTo(N),
                r = e.projectionMatrix.elements,
                a = n.projectionMatrix.elements,
                s = r[14] / (r[10] - 1),
                o = r[14] / (r[10] + 1),
                l = (r[9] + 1) / r[5],
                c = (r[9] - 1) / r[5],
                h = (r[8] - 1) / r[0],
                u = (a[8] + 1) / a[0],
                d = s * h,
                p = s * u,
                m = i / (-h + u),
                f = m * -h;
              e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                t.translateX(f),
                t.translateZ(m),
                t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                t.matrixWorldInverse.copy(t.matrixWorld).invert();
              const g = s + m,
                _ = o + m,
                v = d - f,
                x = p + (i - f),
                M = ((l * o) / _) * g,
                y = ((c * o) / _) * g;
              t.projectionMatrix.makePerspective(v, x, M, y, g, _);
            })(A, M, y)
          : A.projectionMatrix.copy(M.projectionMatrix);
      }),
        (this.getCamera = function () {
          return A;
        }),
        (this.getFoveation = function () {
          return null !== h
            ? h.fixedFoveation
            : null !== u
            ? u.fixedFoveation
            : void 0;
        }),
        (this.setFoveation = function (t) {
          null !== h && (h.fixedFoveation = t),
            null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = t);
        });
      let z = null;
      const U = new On();
      U.setAnimationLoop(function (e, n) {
        if (((l = n.getViewerPose(o || a)), (d = n), null !== l)) {
          const e = l.views;
          null !== u &&
            (t.setRenderTargetFramebuffer(f, u.framebuffer),
            t.setRenderTarget(f));
          let n = !1;
          e.length !== A.cameras.length && ((A.cameras.length = 0), (n = !0));
          for (let i = 0; i < e.length; i++) {
            const r = e[i];
            let a = null;
            if (null !== u) a = u.getViewport(r);
            else {
              const e = c.getViewSubImage(h, r);
              (a = e.viewport),
                0 === i &&
                  (t.setRenderTargetTextures(
                    f,
                    e.colorTexture,
                    h.ignoreDepthValues ? void 0 : e.depthStencilTexture
                  ),
                  t.setRenderTarget(f));
            }
            let s = E[i];
            void 0 === s &&
              ((s = new Sn()),
              s.layers.enable(i),
              (s.viewport = new ft()),
              (E[i] = s)),
              s.matrix.fromArray(r.transform.matrix),
              s.projectionMatrix.fromArray(r.projectionMatrix),
              s.viewport.set(a.x, a.y, a.width, a.height),
              0 === i && A.matrix.copy(s.matrix),
              !0 === n && A.cameras.push(s);
          }
        }
        for (let t = 0; t < g.length; t++) {
          const e = _[t],
            i = g[t];
          null !== e && void 0 !== i && i.update(e, n, o || a);
        }
        z && z(e, n), (d = null);
      }),
        (this.setAnimationLoop = function (t) {
          z = t;
        }),
        (this.dispose = function () {});
    }
  }
  function ha(t, e) {
    function n(n, i) {
      (n.opacity.value = i.opacity),
        i.color && n.diffuse.value.copy(i.color),
        i.emissive &&
          n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
        i.map && (n.map.value = i.map),
        i.alphaMap && (n.alphaMap.value = i.alphaMap),
        i.bumpMap &&
          ((n.bumpMap.value = i.bumpMap),
          (n.bumpScale.value = i.bumpScale),
          1 === i.side && (n.bumpScale.value *= -1)),
        i.displacementMap &&
          ((n.displacementMap.value = i.displacementMap),
          (n.displacementScale.value = i.displacementScale),
          (n.displacementBias.value = i.displacementBias)),
        i.emissiveMap && (n.emissiveMap.value = i.emissiveMap),
        i.normalMap &&
          ((n.normalMap.value = i.normalMap),
          n.normalScale.value.copy(i.normalScale),
          1 === i.side && n.normalScale.value.negate()),
        i.specularMap && (n.specularMap.value = i.specularMap),
        i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
      const r = e.get(i).envMap;
      if (
        (r &&
          ((n.envMap.value = r),
          (n.flipEnvMap.value =
            r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
          (n.reflectivity.value = i.reflectivity),
          (n.ior.value = i.ior),
          (n.refractionRatio.value = i.refractionRatio)),
        i.lightMap)
      ) {
        n.lightMap.value = i.lightMap;
        const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
        n.lightMapIntensity.value = i.lightMapIntensity * e;
      }
      let a, s;
      i.aoMap &&
        ((n.aoMap.value = i.aoMap),
        (n.aoMapIntensity.value = i.aoMapIntensity)),
        i.map
          ? (a = i.map)
          : i.specularMap
          ? (a = i.specularMap)
          : i.displacementMap
          ? (a = i.displacementMap)
          : i.normalMap
          ? (a = i.normalMap)
          : i.bumpMap
          ? (a = i.bumpMap)
          : i.roughnessMap
          ? (a = i.roughnessMap)
          : i.metalnessMap
          ? (a = i.metalnessMap)
          : i.alphaMap
          ? (a = i.alphaMap)
          : i.emissiveMap
          ? (a = i.emissiveMap)
          : i.clearcoatMap
          ? (a = i.clearcoatMap)
          : i.clearcoatNormalMap
          ? (a = i.clearcoatNormalMap)
          : i.clearcoatRoughnessMap
          ? (a = i.clearcoatRoughnessMap)
          : i.iridescenceMap
          ? (a = i.iridescenceMap)
          : i.iridescenceThicknessMap
          ? (a = i.iridescenceThicknessMap)
          : i.specularIntensityMap
          ? (a = i.specularIntensityMap)
          : i.specularColorMap
          ? (a = i.specularColorMap)
          : i.transmissionMap
          ? (a = i.transmissionMap)
          : i.thicknessMap
          ? (a = i.thicknessMap)
          : i.sheenColorMap
          ? (a = i.sheenColorMap)
          : i.sheenRoughnessMap && (a = i.sheenRoughnessMap),
        void 0 !== a &&
          (a.isWebGLRenderTarget && (a = a.texture),
          !0 === a.matrixAutoUpdate && a.updateMatrix(),
          n.uvTransform.value.copy(a.matrix)),
        i.aoMap ? (s = i.aoMap) : i.lightMap && (s = i.lightMap),
        void 0 !== s &&
          (s.isWebGLRenderTarget && (s = s.texture),
          !0 === s.matrixAutoUpdate && s.updateMatrix(),
          n.uv2Transform.value.copy(s.matrix));
    }
    return {
      refreshFogUniforms: function (t, e) {
        t.fogColor.value.copy(e.color),
          e.isFog
            ? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
            : e.isFogExp2 && (t.fogDensity.value = e.density);
      },
      refreshMaterialUniforms: function (t, i, r, a, s) {
        i.isMeshBasicMaterial || i.isMeshLambertMaterial
          ? n(t, i)
          : i.isMeshToonMaterial
          ? (n(t, i),
            (function (t, e) {
              e.gradientMap && (t.gradientMap.value = e.gradientMap);
            })(t, i))
          : i.isMeshPhongMaterial
          ? (n(t, i),
            (function (t, e) {
              t.specular.value.copy(e.specular),
                (t.shininess.value = Math.max(e.shininess, 1e-4));
            })(t, i))
          : i.isMeshStandardMaterial
          ? (n(t, i),
            (function (t, n) {
              (t.roughness.value = n.roughness),
                (t.metalness.value = n.metalness),
                n.roughnessMap && (t.roughnessMap.value = n.roughnessMap);
              n.metalnessMap && (t.metalnessMap.value = n.metalnessMap);
              e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity);
            })(t, i),
            i.isMeshPhysicalMaterial &&
              (function (t, e, n) {
                (t.ior.value = e.ior),
                  e.sheen > 0 &&
                    (t.sheenColor.value
                      .copy(e.sheenColor)
                      .multiplyScalar(e.sheen),
                    (t.sheenRoughness.value = e.sheenRoughness),
                    e.sheenColorMap &&
                      (t.sheenColorMap.value = e.sheenColorMap),
                    e.sheenRoughnessMap &&
                      (t.sheenRoughnessMap.value = e.sheenRoughnessMap));
                e.clearcoat > 0 &&
                  ((t.clearcoat.value = e.clearcoat),
                  (t.clearcoatRoughness.value = e.clearcoatRoughness),
                  e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap),
                  e.clearcoatRoughnessMap &&
                    (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
                  e.clearcoatNormalMap &&
                    (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                    (t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                    1 === e.side && t.clearcoatNormalScale.value.negate()));
                e.iridescence > 0 &&
                  ((t.iridescence.value = e.iridescence),
                  (t.iridescenceIOR.value = e.iridescenceIOR),
                  (t.iridescenceThicknessMinimum.value =
                    e.iridescenceThicknessRange[0]),
                  (t.iridescenceThicknessMaximum.value =
                    e.iridescenceThicknessRange[1]),
                  e.iridescenceMap &&
                    (t.iridescenceMap.value = e.iridescenceMap),
                  e.iridescenceThicknessMap &&
                    (t.iridescenceThicknessMap.value =
                      e.iridescenceThicknessMap));
                e.transmission > 0 &&
                  ((t.transmission.value = e.transmission),
                  (t.transmissionSamplerMap.value = n.texture),
                  t.transmissionSamplerSize.value.set(n.width, n.height),
                  e.transmissionMap &&
                    (t.transmissionMap.value = e.transmissionMap),
                  (t.thickness.value = e.thickness),
                  e.thicknessMap && (t.thicknessMap.value = e.thicknessMap),
                  (t.attenuationDistance.value = e.attenuationDistance),
                  t.attenuationColor.value.copy(e.attenuationColor));
                (t.specularIntensity.value = e.specularIntensity),
                  t.specularColor.value.copy(e.specularColor),
                  e.specularIntensityMap &&
                    (t.specularIntensityMap.value = e.specularIntensityMap);
                e.specularColorMap &&
                  (t.specularColorMap.value = e.specularColorMap);
              })(t, i, s))
          : i.isMeshMatcapMaterial
          ? (n(t, i),
            (function (t, e) {
              e.matcap && (t.matcap.value = e.matcap);
            })(t, i))
          : i.isMeshDepthMaterial
          ? n(t, i)
          : i.isMeshDistanceMaterial
          ? (n(t, i),
            (function (t, e) {
              t.referencePosition.value.copy(e.referencePosition),
                (t.nearDistance.value = e.nearDistance),
                (t.farDistance.value = e.farDistance);
            })(t, i))
          : i.isMeshNormalMaterial
          ? n(t, i)
          : i.isLineBasicMaterial
          ? ((function (t, e) {
              t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
            })(t, i),
            i.isLineDashedMaterial &&
              (function (t, e) {
                (t.dashSize.value = e.dashSize),
                  (t.totalSize.value = e.dashSize + e.gapSize),
                  (t.scale.value = e.scale);
              })(t, i))
          : i.isPointsMaterial
          ? (function (t, e, n, i) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                (t.size.value = e.size * n),
                (t.scale.value = 0.5 * i),
                e.map && (t.map.value = e.map);
              e.alphaMap && (t.alphaMap.value = e.alphaMap);
              e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
              let r;
              e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap);
              void 0 !== r &&
                (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                t.uvTransform.value.copy(r.matrix));
            })(t, i, r, a)
          : i.isSpriteMaterial
          ? (function (t, e) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                (t.rotation.value = e.rotation),
                e.map && (t.map.value = e.map);
              e.alphaMap && (t.alphaMap.value = e.alphaMap);
              e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
              let n;
              e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap);
              void 0 !== n &&
                (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                t.uvTransform.value.copy(n.matrix));
            })(t, i)
          : i.isShadowMaterial
          ? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
          : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      },
    };
  }
  function ua(t, e, n, i) {
    let r = {},
      a = {},
      s = [];
    const o = n.isWebGL2 ? t.getParameter(35375) : 0;
    function l(t, e, n) {
      const i = t.value;
      if (void 0 === n[e])
        return (n[e] = "number" == typeof i ? i : i.clone()), !0;
      if ("number" == typeof i) {
        if (n[e] !== i) return (n[e] = i), !0;
      } else {
        const t = n[e];
        if (!1 === t.equals(i)) return t.copy(i), !0;
      }
      return !1;
    }
    function c(t) {
      const e = t.value,
        n = { boundary: 0, storage: 0 };
      return (
        "number" == typeof e
          ? ((n.boundary = 4), (n.storage = 4))
          : e.isVector2
          ? ((n.boundary = 8), (n.storage = 8))
          : e.isVector3 || e.isColor
          ? ((n.boundary = 16), (n.storage = 12))
          : e.isVector4
          ? ((n.boundary = 16), (n.storage = 16))
          : e.isMatrix3
          ? ((n.boundary = 48), (n.storage = 48))
          : e.isMatrix4
          ? ((n.boundary = 64), (n.storage = 64))
          : e.isTexture
          ? console.warn(
              "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
            )
          : console.warn(
              "THREE.WebGLRenderer: Unsupported uniform value type.",
              e
            ),
        n
      );
    }
    function h(e) {
      const n = e.target;
      n.removeEventListener("dispose", h);
      const i = s.indexOf(n.__bindingPointIndex);
      s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id];
    }
    return {
      bind: function (t, e) {
        const n = e.program;
        i.uniformBlockBinding(t, n);
      },
      update: function (n, u) {
        let d = r[n.id];
        void 0 === d &&
          (!(function (t) {
            const e = t.uniforms;
            let n = 0;
            const i = 16;
            let r = 0;
            for (let t = 0, a = e.length; t < a; t++) {
              const a = e[t],
                s = c(a);
              if (
                ((a.__data = new Float32Array(
                  s.storage / Float32Array.BYTES_PER_ELEMENT
                )),
                (a.__offset = n),
                t > 0)
              ) {
                r = n % i;
                const t = i - r;
                0 !== r &&
                  t - s.boundary < 0 &&
                  ((n += i - r), (a.__offset = n));
              }
              n += s.storage;
            }
            (r = n % i), r > 0 && (n += i - r);
            (t.__size = n), (t.__cache = {});
          })(n),
          (d = (function (e) {
            const n = (function () {
              for (let t = 0; t < o; t++)
                if (-1 === s.indexOf(t)) return s.push(t), t;
              return (
                console.error(
                  "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
                ),
                0
              );
            })();
            e.__bindingPointIndex = n;
            const i = t.createBuffer(),
              r = e.__size,
              a = e.usage;
            return (
              t.bindBuffer(35345, i),
              t.bufferData(35345, r, a),
              t.bindBuffer(35345, null),
              t.bindBufferBase(35345, n, i),
              i
            );
          })(n)),
          (r[n.id] = d),
          n.addEventListener("dispose", h));
        const p = u.program;
        i.updateUBOMapping(n, p);
        const m = e.render.frame;
        a[n.id] !== m &&
          (!(function (e) {
            const n = r[e.id],
              i = e.uniforms,
              a = e.__cache;
            t.bindBuffer(35345, n);
            for (let e = 0, n = i.length; e < n; e++) {
              const n = i[e];
              if (!0 === l(n, e, a)) {
                const e = n.value,
                  i = n.__offset;
                "number" == typeof e
                  ? ((n.__data[0] = e), t.bufferSubData(35345, i, n.__data))
                  : (n.value.isMatrix3
                      ? ((n.__data[0] = n.value.elements[0]),
                        (n.__data[1] = n.value.elements[1]),
                        (n.__data[2] = n.value.elements[2]),
                        (n.__data[3] = n.value.elements[0]),
                        (n.__data[4] = n.value.elements[3]),
                        (n.__data[5] = n.value.elements[4]),
                        (n.__data[6] = n.value.elements[5]),
                        (n.__data[7] = n.value.elements[0]),
                        (n.__data[8] = n.value.elements[6]),
                        (n.__data[9] = n.value.elements[7]),
                        (n.__data[10] = n.value.elements[8]),
                        (n.__data[11] = n.value.elements[0]))
                      : e.toArray(n.__data),
                    t.bufferSubData(35345, i, n.__data));
              }
            }
            t.bindBuffer(35345, null);
          })(n),
          (a[n.id] = m));
      },
      dispose: function () {
        for (const e in r) t.deleteBuffer(r[e]);
        (s = []), (r = {}), (a = {});
      },
    };
  }
  function da(t = {}) {
    this.isWebGLRenderer = !0;
    const e =
        void 0 !== t.canvas
          ? t.canvas
          : (function () {
              const t = K("canvas");
              return (t.style.display = "block"), t;
            })(),
      n = void 0 !== t.context ? t.context : null,
      i = void 0 === t.depth || t.depth,
      r = void 0 === t.stencil || t.stencil,
      a = void 0 !== t.antialias && t.antialias,
      s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
      o = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
      l = void 0 !== t.powerPreference ? t.powerPreference : "default",
      c =
        void 0 !== t.failIfMajorPerformanceCaveat &&
        t.failIfMajorPerformanceCaveat;
    let h;
    h =
      null !== n
        ? n.getContextAttributes().alpha
        : void 0 !== t.alpha && t.alpha;
    let u = null,
      d = null;
    const p = [],
      m = [];
    (this.domElement = e),
      (this.debug = { checkShaderErrors: !0 }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.outputEncoding = R),
      (this.physicallyCorrectLights = !1),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1),
      Object.defineProperties(this, {
        gammaFactor: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderer: .gammaFactor has been removed."
              ),
              2
            );
          },
          set: function () {
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
          },
        },
      });
    const f = this;
    let g = !1,
      x = 0,
      b = 0,
      w = null,
      T = -1,
      E = null;
    const A = new ft(),
      L = new ft();
    let C = null,
      P = e.width,
      D = e.height,
      I = 1,
      N = null,
      O = null;
    const z = new ft(0, 0, P, D),
      U = new ft(0, 0, P, D);
    let F = !1;
    const B = new Nn();
    let G = !1,
      H = !1,
      V = null;
    const k = new Kt(),
      W = new Y(),
      X = new Mt(),
      q = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function Z() {
      return null === w ? I : 1;
    }
    let J,
      Q,
      $,
      tt,
      et,
      nt,
      it,
      rt,
      at,
      st,
      ot,
      lt,
      ct,
      ht,
      ut,
      dt,
      pt,
      mt,
      _t,
      vt,
      xt,
      yt,
      bt,
      St,
      wt = n;
    function Tt(t, n) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i],
          a = e.getContext(r, n);
        if (null !== a) return a;
      }
      return null;
    }
    try {
      const t = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: s,
        preserveDrawingBuffer: o,
        powerPreference: l,
        failIfMajorPerformanceCaveat: c,
      };
      if (
        ("setAttribute" in e && e.setAttribute("data-engine", "three.js r144"),
        e.addEventListener("webglcontextlost", Lt, !1),
        e.addEventListener("webglcontextrestored", Ct, !1),
        e.addEventListener("webglcontextcreationerror", Rt, !1),
        null === wt)
      ) {
        const e = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (!0 === f.isWebGL1Renderer && e.shift(), (wt = Tt(e, t)), null === wt)
        )
          throw Tt(e)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      void 0 === wt.getShaderPrecisionFormat &&
        (wt.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (t) {
      throw (console.error("THREE.WebGLRenderer: " + t.message), t);
    }
    function Et() {
      (J = new ci(wt)),
        (Q = new Wn(wt, J, t)),
        J.init(Q),
        (yt = new ia(wt, J, Q)),
        ($ = new ea(wt, J, Q)),
        (tt = new di()),
        (et = new Hr()),
        (nt = new na(wt, J, $, et, Q, yt, tt)),
        (it = new Xn(f)),
        (rt = new li(f)),
        (at = new zn(wt, Q)),
        (bt = new Vn(wt, J, at, Q)),
        (st = new hi(wt, at, tt, bt)),
        (ot = new gi(wt, st, at, tt)),
        (_t = new fi(wt, Q, nt)),
        (dt = new jn(et)),
        (lt = new Gr(f, it, rt, J, Q, bt, dt)),
        (ct = new ha(f, et)),
        (ht = new jr()),
        (ut = new Kr(J, Q)),
        (mt = new Hn(f, it, $, ot, h, s)),
        (pt = new ta(f, ot, Q)),
        (St = new ua(wt, tt, Q, $)),
        (vt = new kn(wt, J, tt, Q)),
        (xt = new ui(wt, J, tt, Q)),
        (tt.programs = lt.programs),
        (f.capabilities = Q),
        (f.extensions = J),
        (f.properties = et),
        (f.renderLists = ht),
        (f.shadowMap = pt),
        (f.state = $),
        (f.info = tt);
    }
    Et();
    const At = new ca(f, wt);
    function Lt(t) {
      t.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (g = !0);
    }
    function Ct() {
      console.log("THREE.WebGLRenderer: Context Restored."), (g = !1);
      const t = tt.autoReset,
        e = pt.enabled,
        n = pt.autoUpdate,
        i = pt.needsUpdate,
        r = pt.type;
      Et(),
        (tt.autoReset = t),
        (pt.enabled = e),
        (pt.autoUpdate = n),
        (pt.needsUpdate = i),
        (pt.type = r);
    }
    function Rt(t) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        t.statusMessage
      );
    }
    function Pt(t) {
      const e = t.target;
      e.removeEventListener("dispose", Pt),
        (function (t) {
          (function (t) {
            const e = et.get(t).programs;
            void 0 !== e &&
              (e.forEach(function (t) {
                lt.releaseProgram(t);
              }),
              t.isShaderMaterial && lt.releaseShaderCache(t));
          })(t),
            et.remove(t);
        })(e);
    }
    (this.xr = At),
      (this.getContext = function () {
        return wt;
      }),
      (this.getContextAttributes = function () {
        return wt.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const t = J.get("WEBGL_lose_context");
        t && t.loseContext();
      }),
      (this.forceContextRestore = function () {
        const t = J.get("WEBGL_lose_context");
        t && t.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return I;
      }),
      (this.setPixelRatio = function (t) {
        void 0 !== t && ((I = t), this.setSize(P, D, !1));
      }),
      (this.getSize = function (t) {
        return t.set(P, D);
      }),
      (this.setSize = function (t, n, i) {
        At.isPresenting
          ? console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            )
          : ((P = t),
            (D = n),
            (e.width = Math.floor(t * I)),
            (e.height = Math.floor(n * I)),
            !1 !== i &&
              ((e.style.width = t + "px"), (e.style.height = n + "px")),
            this.setViewport(0, 0, t, n));
      }),
      (this.getDrawingBufferSize = function (t) {
        return t.set(P * I, D * I).floor();
      }),
      (this.setDrawingBufferSize = function (t, n, i) {
        (P = t),
          (D = n),
          (I = i),
          (e.width = Math.floor(t * i)),
          (e.height = Math.floor(n * i)),
          this.setViewport(0, 0, t, n);
      }),
      (this.getCurrentViewport = function (t) {
        return t.copy(A);
      }),
      (this.getViewport = function (t) {
        return t.copy(z);
      }),
      (this.setViewport = function (t, e, n, i) {
        t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, i),
          $.viewport(A.copy(z).multiplyScalar(I).floor());
      }),
      (this.getScissor = function (t) {
        return t.copy(U);
      }),
      (this.setScissor = function (t, e, n, i) {
        t.isVector4 ? U.set(t.x, t.y, t.z, t.w) : U.set(t, e, n, i),
          $.scissor(L.copy(U).multiplyScalar(I).floor());
      }),
      (this.getScissorTest = function () {
        return F;
      }),
      (this.setScissorTest = function (t) {
        $.setScissorTest((F = t));
      }),
      (this.setOpaqueSort = function (t) {
        N = t;
      }),
      (this.setTransparentSort = function (t) {
        O = t;
      }),
      (this.getClearColor = function (t) {
        return t.copy(mt.getClearColor());
      }),
      (this.setClearColor = function () {
        mt.setClearColor.apply(mt, arguments);
      }),
      (this.getClearAlpha = function () {
        return mt.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        mt.setClearAlpha.apply(mt, arguments);
      }),
      (this.clear = function (t = !0, e = !0, n = !0) {
        let i = 0;
        t && (i |= 16384), e && (i |= 256), n && (i |= 1024), wt.clear(i);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        e.removeEventListener("webglcontextlost", Lt, !1),
          e.removeEventListener("webglcontextrestored", Ct, !1),
          e.removeEventListener("webglcontextcreationerror", Rt, !1),
          ht.dispose(),
          ut.dispose(),
          et.dispose(),
          it.dispose(),
          rt.dispose(),
          ot.dispose(),
          bt.dispose(),
          St.dispose(),
          lt.dispose(),
          At.dispose(),
          At.removeEventListener("sessionstart", It),
          At.removeEventListener("sessionend", Nt),
          V && (V.dispose(), (V = null)),
          Ot.stop();
      }),
      (this.renderBufferDirect = function (t, e, n, i, r, a) {
        null === e && (e = q);
        const s = r.isMesh && r.matrixWorld.determinant() < 0,
          o = (function (t, e, n, i, r) {
            !0 !== e.isScene && (e = q);
            nt.resetTextureUnits();
            const a = e.fog,
              s = i.isMeshStandardMaterial ? e.environment : null,
              o =
                null === w
                  ? f.outputEncoding
                  : !0 === w.isXRRenderTarget
                  ? w.texture.encoding
                  : R,
              l = (i.isMeshStandardMaterial ? rt : it).get(i.envMap || s),
              c =
                !0 === i.vertexColors &&
                !!n.attributes.color &&
                4 === n.attributes.color.itemSize,
              h = !!i.normalMap && !!n.attributes.tangent,
              u = !!n.morphAttributes.position,
              p = !!n.morphAttributes.normal,
              m = !!n.morphAttributes.color,
              g = i.toneMapped ? f.toneMapping : 0,
              _ =
                n.morphAttributes.position ||
                n.morphAttributes.normal ||
                n.morphAttributes.color,
              v = void 0 !== _ ? _.length : 0,
              x = et.get(i),
              M = d.state.lights;
            if (!0 === G && (!0 === H || t !== E)) {
              const e = t === E && i.id === T;
              dt.setState(i, t, e);
            }
            let y = !1;
            i.version === x.__version
              ? (x.needsLights && x.lightsStateVersion !== M.state.version) ||
                x.outputEncoding !== o ||
                (r.isInstancedMesh && !1 === x.instancing)
                ? (y = !0)
                : r.isInstancedMesh || !0 !== x.instancing
                ? r.isSkinnedMesh && !1 === x.skinning
                  ? (y = !0)
                  : r.isSkinnedMesh || !0 !== x.skinning
                  ? x.envMap !== l || (!0 === i.fog && x.fog !== a)
                    ? (y = !0)
                    : void 0 === x.numClippingPlanes ||
                      (x.numClippingPlanes === dt.numPlanes &&
                        x.numIntersection === dt.numIntersection)
                    ? (x.vertexAlphas !== c ||
                        x.vertexTangents !== h ||
                        x.morphTargets !== u ||
                        x.morphNormals !== p ||
                        x.morphColors !== m ||
                        x.toneMapping !== g ||
                        (!0 === Q.isWebGL2 && x.morphTargetsCount !== v)) &&
                      (y = !0)
                    : (y = !0)
                  : (y = !0)
                : (y = !0)
              : ((y = !0), (x.__version = i.version));
            let b = x.currentProgram;
            !0 === y && (b = Gt(i, e, r));
            let S = !1,
              A = !1,
              L = !1;
            const C = b.getUniforms(),
              P = x.uniforms;
            $.useProgram(b.program) && ((S = !0), (A = !0), (L = !0));
            i.id !== T && ((T = i.id), (A = !0));
            if (S || E !== t) {
              if (
                (C.setValue(wt, "projectionMatrix", t.projectionMatrix),
                Q.logarithmicDepthBuffer &&
                  C.setValue(
                    wt,
                    "logDepthBufFC",
                    2 / (Math.log(t.far + 1) / Math.LN2)
                  ),
                E !== t && ((E = t), (A = !0), (L = !0)),
                i.isShaderMaterial ||
                  i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshStandardMaterial ||
                  i.envMap)
              ) {
                const e = C.map.cameraPosition;
                void 0 !== e &&
                  e.setValue(wt, X.setFromMatrixPosition(t.matrixWorld));
              }
              (i.isMeshPhongMaterial ||
                i.isMeshToonMaterial ||
                i.isMeshLambertMaterial ||
                i.isMeshBasicMaterial ||
                i.isMeshStandardMaterial ||
                i.isShaderMaterial) &&
                C.setValue(wt, "isOrthographic", !0 === t.isOrthographicCamera),
                (i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshLambertMaterial ||
                  i.isMeshBasicMaterial ||
                  i.isMeshStandardMaterial ||
                  i.isShaderMaterial ||
                  i.isShadowMaterial ||
                  r.isSkinnedMesh) &&
                  C.setValue(wt, "viewMatrix", t.matrixWorldInverse);
            }
            if (r.isSkinnedMesh) {
              C.setOptional(wt, r, "bindMatrix"),
                C.setOptional(wt, r, "bindMatrixInverse");
              const t = r.skeleton;
              t &&
                (Q.floatVertexTextures
                  ? (null === t.boneTexture && t.computeBoneTexture(),
                    C.setValue(wt, "boneTexture", t.boneTexture, nt),
                    C.setValue(wt, "boneTextureSize", t.boneTextureSize))
                  : console.warn(
                      "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                    ));
            }
            const N = n.morphAttributes;
            (void 0 !== N.position ||
              void 0 !== N.normal ||
              (void 0 !== N.color && !0 === Q.isWebGL2)) &&
              _t.update(r, n, i, b);
            (A || x.receiveShadow !== r.receiveShadow) &&
              ((x.receiveShadow = r.receiveShadow),
              C.setValue(wt, "receiveShadow", r.receiveShadow));
            i.isMeshGouraudMaterial &&
              null !== i.envMap &&
              ((P.envMap.value = l),
              (P.flipEnvMap.value =
                l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1));
            A &&
              (C.setValue(wt, "toneMappingExposure", f.toneMappingExposure),
              x.needsLights &&
                ((z = L),
                ((O = P).ambientLightColor.needsUpdate = z),
                (O.lightProbe.needsUpdate = z),
                (O.directionalLights.needsUpdate = z),
                (O.directionalLightShadows.needsUpdate = z),
                (O.pointLights.needsUpdate = z),
                (O.pointLightShadows.needsUpdate = z),
                (O.spotLights.needsUpdate = z),
                (O.spotLightShadows.needsUpdate = z),
                (O.rectAreaLights.needsUpdate = z),
                (O.hemisphereLights.needsUpdate = z)),
              a && !0 === i.fog && ct.refreshFogUniforms(P, a),
              ct.refreshMaterialUniforms(P, i, I, D, V),
              Mr.upload(wt, x.uniformsList, P, nt));
            var O, z;
            i.isShaderMaterial &&
              !0 === i.uniformsNeedUpdate &&
              (Mr.upload(wt, x.uniformsList, P, nt),
              (i.uniformsNeedUpdate = !1));
            i.isSpriteMaterial && C.setValue(wt, "center", r.center);
            if (
              (C.setValue(wt, "modelViewMatrix", r.modelViewMatrix),
              C.setValue(wt, "normalMatrix", r.normalMatrix),
              C.setValue(wt, "modelMatrix", r.matrixWorld),
              i.isShaderMaterial || i.isRawShaderMaterial)
            ) {
              const t = i.uniformsGroups;
              for (let e = 0, n = t.length; e < n; e++)
                if (Q.isWebGL2) {
                  const n = t[e];
                  St.update(n, b), St.bind(n, b);
                } else
                  console.warn(
                    "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
                  );
            }
            return b;
          })(t, e, n, i, r);
        $.setMaterial(i, s);
        let l = n.index;
        const c = n.attributes.position;
        if (null === l) {
          if (void 0 === c || 0 === c.count) return;
        } else if (0 === l.count) return;
        let h,
          u = 1;
        !0 === i.wireframe && ((l = st.getWireframeAttribute(n)), (u = 2)),
          bt.setup(r, i, o, n, l);
        let p = vt;
        null !== l && ((h = at.get(l)), (p = xt), p.setIndex(h));
        const m = null !== l ? l.count : c.count,
          g = n.drawRange.start * u,
          _ = n.drawRange.count * u,
          v = null !== a ? a.start * u : 0,
          x = null !== a ? a.count * u : 1 / 0,
          M = Math.max(g, v),
          y = Math.min(m, g + _, v + x) - 1,
          b = Math.max(0, y - M + 1);
        if (0 !== b) {
          if (r.isMesh)
            !0 === i.wireframe
              ? ($.setLineWidth(i.wireframeLinewidth * Z()), p.setMode(1))
              : p.setMode(4);
          else if (r.isLine) {
            let t = i.linewidth;
            void 0 === t && (t = 1),
              $.setLineWidth(t * Z()),
              r.isLineSegments
                ? p.setMode(1)
                : r.isLineLoop
                ? p.setMode(2)
                : p.setMode(3);
          } else r.isPoints ? p.setMode(0) : r.isSprite && p.setMode(4);
          if (r.isInstancedMesh) p.renderInstances(M, b, r.count);
          else if (n.isInstancedBufferGeometry) {
            const t = Math.min(n.instanceCount, n._maxInstanceCount);
            p.renderInstances(M, b, t);
          } else p.render(M, b);
        }
      }),
      (this.compile = function (t, e) {
        function n(t, e, n) {
          !0 === t.transparent && 2 === t.side
            ? ((t.side = 1),
              (t.needsUpdate = !0),
              Gt(t, e, n),
              (t.side = 0),
              (t.needsUpdate = !0),
              Gt(t, e, n),
              (t.side = 2))
            : Gt(t, e, n);
        }
        (d = ut.get(t)),
          d.init(),
          m.push(d),
          t.traverseVisible(function (t) {
            t.isLight &&
              t.layers.test(e.layers) &&
              (d.pushLight(t), t.castShadow && d.pushShadow(t));
          }),
          d.setupLights(f.physicallyCorrectLights),
          t.traverse(function (e) {
            const i = e.material;
            if (i)
              if (Array.isArray(i))
                for (let r = 0; r < i.length; r++) {
                  n(i[r], t, e);
                }
              else n(i, t, e);
          }),
          m.pop(),
          (d = null);
      });
    let Dt = null;
    function It() {
      Ot.stop();
    }
    function Nt() {
      Ot.start();
    }
    const Ot = new On();
    function zt(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers))
        if (t.isGroup) n = t.renderOrder;
        else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
        else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
        else if (t.isSprite) {
          if (!t.frustumCulled || B.intersectsSprite(t)) {
            i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);
            const e = ot.update(t),
              r = t.material;
            r.visible && u.push(t, e, r, n, X.z, null);
          }
        } else if (
          (t.isMesh || t.isLine || t.isPoints) &&
          (t.isSkinnedMesh &&
            t.skeleton.frame !== tt.render.frame &&
            (t.skeleton.update(), (t.skeleton.frame = tt.render.frame)),
          !t.frustumCulled || B.intersectsObject(t))
        ) {
          i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);
          const e = ot.update(t),
            r = t.material;
          if (Array.isArray(r)) {
            const i = e.groups;
            for (let a = 0, s = i.length; a < s; a++) {
              const s = i[a],
                o = r[s.materialIndex];
              o && o.visible && u.push(t, e, o, n, X.z, s);
            }
          } else r.visible && u.push(t, e, r, n, X.z, null);
        }
      const r = t.children;
      for (let t = 0, a = r.length; t < a; t++) zt(r[t], e, n, i);
    }
    function Ut(t, e, n, i) {
      const r = t.opaque,
        s = t.transmissive,
        o = t.transparent;
      d.setupLightsView(n),
        s.length > 0 &&
          (function (t, e, n) {
            const i = Q.isWebGL2;
            null === V &&
              (V = new gt(1, 1, {
                generateMipmaps: !0,
                type: J.has("EXT_color_buffer_half_float") ? y : v,
                minFilter: _,
                samples: i && !0 === a ? 4 : 0,
              }));
            f.getDrawingBufferSize(W),
              i ? V.setSize(W.x, W.y) : V.setSize(j(W.x), j(W.y));
            const r = f.getRenderTarget();
            f.setRenderTarget(V), f.clear();
            const s = f.toneMapping;
            (f.toneMapping = 0),
              Ft(t, e, n),
              (f.toneMapping = s),
              nt.updateMultisampleRenderTarget(V),
              nt.updateRenderTargetMipmap(V),
              f.setRenderTarget(r);
          })(r, e, n),
        i && $.viewport(A.copy(i)),
        r.length > 0 && Ft(r, e, n),
        s.length > 0 && Ft(s, e, n),
        o.length > 0 && Ft(o, e, n),
        $.buffers.depth.setTest(!0),
        $.buffers.depth.setMask(!0),
        $.buffers.color.setMask(!0),
        $.setPolygonOffset(!1);
    }
    function Ft(t, e, n) {
      const i = !0 === e.isScene ? e.overrideMaterial : null;
      for (let r = 0, a = t.length; r < a; r++) {
        const a = t[r],
          s = a.object,
          o = a.geometry,
          l = null === i ? a.material : i,
          c = a.group;
        s.layers.test(n.layers) && Bt(s, e, n, o, l, c);
      }
    }
    function Bt(t, e, n, i, r, a) {
      t.onBeforeRender(f, e, n, i, r, a),
        t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
        t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
        r.onBeforeRender(f, e, n, i, t, a),
        !0 === r.transparent && 2 === r.side
          ? ((r.side = 1),
            (r.needsUpdate = !0),
            f.renderBufferDirect(n, e, i, r, t, a),
            (r.side = 0),
            (r.needsUpdate = !0),
            f.renderBufferDirect(n, e, i, r, t, a),
            (r.side = 2))
          : f.renderBufferDirect(n, e, i, r, t, a),
        t.onAfterRender(f, e, n, i, r, a);
    }
    function Gt(t, e, n) {
      !0 !== e.isScene && (e = q);
      const i = et.get(t),
        r = d.state.lights,
        a = d.state.shadowsArray,
        s = r.state.version,
        o = lt.getParameters(t, r.state, a, e, n),
        l = lt.getProgramCacheKey(o);
      let c = i.programs;
      (i.environment = t.isMeshStandardMaterial ? e.environment : null),
        (i.fog = e.fog),
        (i.envMap = (t.isMeshStandardMaterial ? rt : it).get(
          t.envMap || i.environment
        )),
        void 0 === c &&
          (t.addEventListener("dispose", Pt),
          (c = new Map()),
          (i.programs = c));
      let h = c.get(l);
      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === s)
          return Ht(t, o), h;
      } else (o.uniforms = lt.getUniforms(t)), t.onBuild(n, o, f), t.onBeforeCompile(o, f), (h = lt.acquireProgram(o, l)), c.set(l, h), (i.uniforms = o.uniforms);
      const u = i.uniforms;
      ((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
        (u.clippingPlanes = dt.uniform),
        Ht(t, o),
        (i.needsLights = (function (t) {
          return (
            t.isMeshLambertMaterial ||
            t.isMeshToonMaterial ||
            t.isMeshPhongMaterial ||
            t.isMeshStandardMaterial ||
            t.isShadowMaterial ||
            (t.isShaderMaterial && !0 === t.lights)
          );
        })(t)),
        (i.lightsStateVersion = s),
        i.needsLights &&
          ((u.ambientLightColor.value = r.state.ambient),
          (u.lightProbe.value = r.state.probe),
          (u.directionalLights.value = r.state.directional),
          (u.directionalLightShadows.value = r.state.directionalShadow),
          (u.spotLights.value = r.state.spot),
          (u.spotLightShadows.value = r.state.spotShadow),
          (u.rectAreaLights.value = r.state.rectArea),
          (u.ltc_1.value = r.state.rectAreaLTC1),
          (u.ltc_2.value = r.state.rectAreaLTC2),
          (u.pointLights.value = r.state.point),
          (u.pointLightShadows.value = r.state.pointShadow),
          (u.hemisphereLights.value = r.state.hemi),
          (u.directionalShadowMap.value = r.state.directionalShadowMap),
          (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (u.spotShadowMap.value = r.state.spotShadowMap),
          (u.spotLightMatrix.value = r.state.spotLightMatrix),
          (u.spotLightMap.value = r.state.spotLightMap),
          (u.pointShadowMap.value = r.state.pointShadowMap),
          (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
      const p = h.getUniforms(),
        m = Mr.seqWithValue(p.seq, u);
      return (i.currentProgram = h), (i.uniformsList = m), h;
    }
    function Ht(t, e) {
      const n = et.get(t);
      (n.outputEncoding = e.outputEncoding),
        (n.instancing = e.instancing),
        (n.skinning = e.skinning),
        (n.morphTargets = e.morphTargets),
        (n.morphNormals = e.morphNormals),
        (n.morphColors = e.morphColors),
        (n.morphTargetsCount = e.morphTargetsCount),
        (n.numClippingPlanes = e.numClippingPlanes),
        (n.numIntersection = e.numClipIntersection),
        (n.vertexAlphas = e.vertexAlphas),
        (n.vertexTangents = e.vertexTangents),
        (n.toneMapping = e.toneMapping);
    }
    Ot.setAnimationLoop(function (t) {
      Dt && Dt(t);
    }),
      "undefined" != typeof self && Ot.setContext(self),
      (this.setAnimationLoop = function (t) {
        (Dt = t), At.setAnimationLoop(t), null === t ? Ot.stop() : Ot.start();
      }),
      At.addEventListener("sessionstart", It),
      At.addEventListener("sessionend", Nt),
      (this.render = function (t, e) {
        if (void 0 !== e && !0 !== e.isCamera)
          return void console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
        if (!0 === g) return;
        !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
          null === e.parent &&
            !0 === e.matrixWorldAutoUpdate &&
            e.updateMatrixWorld(),
          !0 === At.enabled &&
            !0 === At.isPresenting &&
            (!0 === At.cameraAutoUpdate && At.updateCamera(e),
            (e = At.getCamera())),
          !0 === t.isScene && t.onBeforeRender(f, t, e, w),
          (d = ut.get(t, m.length)),
          d.init(),
          m.push(d),
          k.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
          B.setFromProjectionMatrix(k),
          (H = this.localClippingEnabled),
          (G = dt.init(this.clippingPlanes, H, e)),
          (u = ht.get(t, p.length)),
          u.init(),
          p.push(u),
          zt(t, e, 0, f.sortObjects),
          u.finish(),
          !0 === f.sortObjects && u.sort(N, O),
          !0 === G && dt.beginShadows();
        const n = d.state.shadowsArray;
        if (
          (pt.render(n, t, e),
          !0 === G && dt.endShadows(),
          !0 === this.info.autoReset && this.info.reset(),
          mt.render(u, t),
          d.setupLights(f.physicallyCorrectLights),
          e.isArrayCamera)
        ) {
          const n = e.cameras;
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            Ut(u, t, i, i.viewport);
          }
        } else Ut(u, t, e);
        null !== w &&
          (nt.updateMultisampleRenderTarget(w), nt.updateRenderTargetMipmap(w)),
          !0 === t.isScene && t.onAfterRender(f, t, e),
          bt.resetDefaultState(),
          (T = -1),
          (E = null),
          m.pop(),
          (d = m.length > 0 ? m[m.length - 1] : null),
          p.pop(),
          (u = p.length > 0 ? p[p.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return x;
      }),
      (this.getActiveMipmapLevel = function () {
        return b;
      }),
      (this.getRenderTarget = function () {
        return w;
      }),
      (this.setRenderTargetTextures = function (t, e, n) {
        (et.get(t.texture).__webglTexture = e),
          (et.get(t.depthTexture).__webglTexture = n);
        const i = et.get(t);
        (i.__hasExternalTextures = !0),
          i.__hasExternalTextures &&
            ((i.__autoAllocateDepthBuffer = void 0 === n),
            i.__autoAllocateDepthBuffer ||
              (!0 === J.has("WEBGL_multisampled_render_to_texture") &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (i.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (t, e) {
        const n = et.get(t);
        (n.__webglFramebuffer = e), (n.__useDefaultFramebuffer = void 0 === e);
      }),
      (this.setRenderTarget = function (t, e = 0, n = 0) {
        (w = t), (x = e), (b = n);
        let i = !0;
        if (t) {
          const e = et.get(t);
          void 0 !== e.__useDefaultFramebuffer
            ? ($.bindFramebuffer(36160, null), (i = !1))
            : void 0 === e.__webglFramebuffer
            ? nt.setupRenderTarget(t)
            : e.__hasExternalTextures &&
              nt.rebindTextures(
                t,
                et.get(t.texture).__webglTexture,
                et.get(t.depthTexture).__webglTexture
              );
        }
        let r = null,
          a = !1,
          s = !1;
        if (t) {
          const n = t.texture;
          (n.isData3DTexture || n.isDataArrayTexture) && (s = !0);
          const i = et.get(t).__webglFramebuffer;
          t.isWebGLCubeRenderTarget
            ? ((r = i[e]), (a = !0))
            : (r =
                Q.isWebGL2 && t.samples > 0 && !1 === nt.useMultisampledRTT(t)
                  ? et.get(t).__webglMultisampledFramebuffer
                  : i),
            A.copy(t.viewport),
            L.copy(t.scissor),
            (C = t.scissorTest);
        } else
          A.copy(z).multiplyScalar(I).floor(),
            L.copy(U).multiplyScalar(I).floor(),
            (C = F);
        if (
          ($.bindFramebuffer(36160, r) &&
            Q.drawBuffers &&
            i &&
            $.drawBuffers(t, r),
          $.viewport(A),
          $.scissor(L),
          $.setScissorTest(C),
          a)
        ) {
          const i = et.get(t.texture);
          wt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
        } else if (s) {
          const i = et.get(t.texture),
            r = e || 0;
          wt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
        }
        T = -1;
      }),
      (this.readRenderTargetPixels = function (t, e, n, i, r, a, s) {
        if (!t || !t.isWebGLRenderTarget)
          return void console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let o = et.get(t).__webglFramebuffer;
        if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
          $.bindFramebuffer(36160, o);
          try {
            const s = t.texture,
              o = s.format,
              l = s.type;
            if (o !== S && yt.convert(o) !== wt.getParameter(35739))
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
            const c =
              l === y &&
              (J.has("EXT_color_buffer_half_float") ||
                (Q.isWebGL2 && J.has("EXT_color_buffer_float")));
            if (
              !(
                l === v ||
                yt.convert(l) === wt.getParameter(35738) ||
                (l === M &&
                  (Q.isWebGL2 ||
                    J.has("OES_texture_float") ||
                    J.has("WEBGL_color_buffer_float"))) ||
                c
              )
            )
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            e >= 0 &&
              e <= t.width - i &&
              n >= 0 &&
              n <= t.height - r &&
              wt.readPixels(e, n, i, r, yt.convert(o), yt.convert(l), a);
          } finally {
            const t = null !== w ? et.get(w).__webglFramebuffer : null;
            $.bindFramebuffer(36160, t);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (t, e, n = 0) {
        const i = Math.pow(2, -n),
          r = Math.floor(e.image.width * i),
          a = Math.floor(e.image.height * i);
        nt.setTexture2D(e, 0),
          wt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, a),
          $.unbindTexture();
      }),
      (this.copyTextureToTexture = function (t, e, n, i = 0) {
        const r = e.image.width,
          a = e.image.height,
          s = yt.convert(n.format),
          o = yt.convert(n.type);
        nt.setTexture2D(n, 0),
          wt.pixelStorei(37440, n.flipY),
          wt.pixelStorei(37441, n.premultiplyAlpha),
          wt.pixelStorei(3317, n.unpackAlignment),
          e.isDataTexture
            ? wt.texSubImage2D(3553, i, t.x, t.y, r, a, s, o, e.image.data)
            : e.isCompressedTexture
            ? wt.compressedTexSubImage2D(
                3553,
                i,
                t.x,
                t.y,
                e.mipmaps[0].width,
                e.mipmaps[0].height,
                s,
                e.mipmaps[0].data
              )
            : wt.texSubImage2D(3553, i, t.x, t.y, s, o, e.image),
          0 === i && n.generateMipmaps && wt.generateMipmap(3553),
          $.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
        if (f.isWebGL1Renderer)
          return void console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
        const a = t.max.x - t.min.x + 1,
          s = t.max.y - t.min.y + 1,
          o = t.max.z - t.min.z + 1,
          l = yt.convert(i.format),
          c = yt.convert(i.type);
        let h;
        if (i.isData3DTexture) nt.setTexture3D(i, 0), (h = 32879);
        else {
          if (!i.isDataArrayTexture)
            return void console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
            );
          nt.setTexture2DArray(i, 0), (h = 35866);
        }
        wt.pixelStorei(37440, i.flipY),
          wt.pixelStorei(37441, i.premultiplyAlpha),
          wt.pixelStorei(3317, i.unpackAlignment);
        const u = wt.getParameter(3314),
          d = wt.getParameter(32878),
          p = wt.getParameter(3316),
          m = wt.getParameter(3315),
          g = wt.getParameter(32877),
          _ = n.isCompressedTexture ? n.mipmaps[0] : n.image;
        wt.pixelStorei(3314, _.width),
          wt.pixelStorei(32878, _.height),
          wt.pixelStorei(3316, t.min.x),
          wt.pixelStorei(3315, t.min.y),
          wt.pixelStorei(32877, t.min.z),
          n.isDataTexture || n.isData3DTexture
            ? wt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, _.data)
            : n.isCompressedTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              wt.compressedTexSubImage3D(
                h,
                r,
                e.x,
                e.y,
                e.z,
                a,
                s,
                o,
                l,
                _.data
              ))
            : wt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, _),
          wt.pixelStorei(3314, u),
          wt.pixelStorei(32878, d),
          wt.pixelStorei(3316, p),
          wt.pixelStorei(3315, m),
          wt.pixelStorei(32877, g),
          0 === r && i.generateMipmaps && wt.generateMipmap(h),
          $.unbindTexture();
      }),
      (this.initTexture = function (t) {
        t.isCubeTexture
          ? nt.setTextureCube(t, 0)
          : t.isData3DTexture
          ? nt.setTexture3D(t, 0)
          : t.isDataArrayTexture
          ? nt.setTexture2DArray(t, 0)
          : nt.setTexture2D(t, 0),
          $.unbindTexture();
      }),
      (this.resetState = function () {
        (x = 0), (b = 0), (w = null), $.reset(), bt.reset();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  (class extends da {}.prototype.isWebGL1Renderer = !0);
  class pa extends be {
    constructor() {
      super(),
        (this.isScene = !0),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.overrideMaterial = null),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        null !== t.background && (this.background = t.background.clone()),
        null !== t.environment && (this.environment = t.environment.clone()),
        null !== t.fog && (this.fog = t.fog.clone()),
        null !== t.overrideMaterial &&
          (this.overrideMaterial = t.overrideMaterial.clone()),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
    }
    get autoUpdate() {
      return (
        console.warn(
          "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
        ),
        this.matrixWorldAutoUpdate
      );
    }
    set autoUpdate(t) {
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
        (this.matrixWorldAutoUpdate = t);
    }
  }
  class ma extends Je {
    constructor(
      t = 1,
      e = 1,
      n = 1,
      i = 8,
      r = 1,
      a = !1,
      s = 0,
      o = 2 * Math.PI
    ) {
      super(),
        (this.type = "CylinderGeometry"),
        (this.parameters = {
          radiusTop: t,
          radiusBottom: e,
          height: n,
          radialSegments: i,
          heightSegments: r,
          openEnded: a,
          thetaStart: s,
          thetaLength: o,
        });
      const l = this;
      (i = Math.floor(i)), (r = Math.floor(r));
      const c = [],
        h = [],
        u = [],
        d = [];
      let p = 0;
      const m = [],
        f = n / 2;
      let g = 0;
      function _(n) {
        const r = p,
          a = new Y(),
          m = new Mt();
        let _ = 0;
        const v = !0 === n ? t : e,
          x = !0 === n ? 1 : -1;
        for (let t = 1; t <= i; t++)
          h.push(0, f * x, 0), u.push(0, x, 0), d.push(0.5, 0.5), p++;
        const M = p;
        for (let t = 0; t <= i; t++) {
          const e = (t / i) * o + s,
            n = Math.cos(e),
            r = Math.sin(e);
          (m.x = v * r),
            (m.y = f * x),
            (m.z = v * n),
            h.push(m.x, m.y, m.z),
            u.push(0, x, 0),
            (a.x = 0.5 * n + 0.5),
            (a.y = 0.5 * r * x + 0.5),
            d.push(a.x, a.y),
            p++;
        }
        for (let t = 0; t < i; t++) {
          const e = r + t,
            i = M + t;
          !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), (_ += 3);
        }
        l.addGroup(g, _, !0 === n ? 1 : 2), (g += _);
      }
      !(function () {
        const a = new Mt(),
          _ = new Mt();
        let v = 0;
        const x = (e - t) / n;
        for (let l = 0; l <= r; l++) {
          const c = [],
            g = l / r,
            v = g * (e - t) + t;
          for (let t = 0; t <= i; t++) {
            const e = t / i,
              r = e * o + s,
              l = Math.sin(r),
              m = Math.cos(r);
            (_.x = v * l),
              (_.y = -g * n + f),
              (_.z = v * m),
              h.push(_.x, _.y, _.z),
              a.set(l, x, m).normalize(),
              u.push(a.x, a.y, a.z),
              d.push(e, 1 - g),
              c.push(p++);
          }
          m.push(c);
        }
        for (let t = 0; t < i; t++)
          for (let e = 0; e < r; e++) {
            const n = m[e][t],
              i = m[e + 1][t],
              r = m[e + 1][t + 1],
              a = m[e][t + 1];
            c.push(n, i, a), c.push(i, r, a), (v += 6);
          }
        l.addGroup(g, v, 0), (g += v);
      })(),
        !1 === a && (t > 0 && _(!0), e > 0 && _(!1)),
        this.setIndex(c),
        this.setAttribute("position", new Ve(h, 3)),
        this.setAttribute("normal", new Ve(u, 3)),
        this.setAttribute("uv", new Ve(d, 2));
    }
    static fromJSON(t) {
      return new ma(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
    }
  }
  class fa extends Je {
    constructor(t = [], e = [], n = 1, i = 0) {
      super(),
        (this.type = "PolyhedronGeometry"),
        (this.parameters = { vertices: t, indices: e, radius: n, detail: i });
      const r = [],
        a = [];
      function s(t, e, n, i) {
        const r = i + 1,
          a = [];
        for (let i = 0; i <= r; i++) {
          a[i] = [];
          const s = t.clone().lerp(n, i / r),
            o = e.clone().lerp(n, i / r),
            l = r - i;
          for (let t = 0; t <= l; t++)
            a[i][t] = 0 === t && i === r ? s : s.clone().lerp(o, t / l);
        }
        for (let t = 0; t < r; t++)
          for (let e = 0; e < 2 * (r - t) - 1; e++) {
            const n = Math.floor(e / 2);
            e % 2 == 0
              ? (o(a[t][n + 1]), o(a[t + 1][n]), o(a[t][n]))
              : (o(a[t][n + 1]), o(a[t + 1][n + 1]), o(a[t + 1][n]));
          }
      }
      function o(t) {
        r.push(t.x, t.y, t.z);
      }
      function l(e, n) {
        const i = 3 * e;
        (n.x = t[i + 0]), (n.y = t[i + 1]), (n.z = t[i + 2]);
      }
      function c(t, e, n, i) {
        i < 0 && 1 === t.x && (a[e] = t.x - 1),
          0 === n.x && 0 === n.z && (a[e] = i / 2 / Math.PI + 0.5);
      }
      function h(t) {
        return Math.atan2(t.z, -t.x);
      }
      !(function (t) {
        const n = new Mt(),
          i = new Mt(),
          r = new Mt();
        for (let a = 0; a < e.length; a += 3)
          l(e[a + 0], n), l(e[a + 1], i), l(e[a + 2], r), s(n, i, r, t);
      })(i),
        (function (t) {
          const e = new Mt();
          for (let n = 0; n < r.length; n += 3)
            (e.x = r[n + 0]),
              (e.y = r[n + 1]),
              (e.z = r[n + 2]),
              e.normalize().multiplyScalar(t),
              (r[n + 0] = e.x),
              (r[n + 1] = e.y),
              (r[n + 2] = e.z);
        })(n),
        (function () {
          const t = new Mt();
          for (let n = 0; n < r.length; n += 3) {
            (t.x = r[n + 0]), (t.y = r[n + 1]), (t.z = r[n + 2]);
            const i = h(t) / 2 / Math.PI + 0.5,
              s =
                ((e = t),
                Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
                  0.5);
            a.push(i, 1 - s);
          }
          var e;
          (function () {
            const t = new Mt(),
              e = new Mt(),
              n = new Mt(),
              i = new Mt(),
              s = new Y(),
              o = new Y(),
              l = new Y();
            for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
              t.set(r[u + 0], r[u + 1], r[u + 2]),
                e.set(r[u + 3], r[u + 4], r[u + 5]),
                n.set(r[u + 6], r[u + 7], r[u + 8]),
                s.set(a[d + 0], a[d + 1]),
                o.set(a[d + 2], a[d + 3]),
                l.set(a[d + 4], a[d + 5]),
                i.copy(t).add(e).add(n).divideScalar(3);
              const p = h(i);
              c(s, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
            }
          })(),
            (function () {
              for (let t = 0; t < a.length; t += 6) {
                const e = a[t + 0],
                  n = a[t + 2],
                  i = a[t + 4],
                  r = Math.max(e, n, i),
                  s = Math.min(e, n, i);
                r > 0.9 &&
                  s < 0.1 &&
                  (e < 0.2 && (a[t + 0] += 1),
                  n < 0.2 && (a[t + 2] += 1),
                  i < 0.2 && (a[t + 4] += 1));
              }
            })();
        })(),
        this.setAttribute("position", new Ve(r, 3)),
        this.setAttribute("normal", new Ve(r.slice(), 3)),
        this.setAttribute("uv", new Ve(a, 2)),
        0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
    static fromJSON(t) {
      return new fa(t.vertices, t.indices, t.radius, t.details);
    }
  }
  class ga extends fa {
    constructor(t = 1, e = 0) {
      const n = (1 + Math.sqrt(5)) / 2,
        i = 1 / n;
      super(
        [
          -1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          -1,
          -1,
          1,
          1,
          1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          1,
          -1,
          1,
          1,
          1,
          0,
          -i,
          -n,
          0,
          -i,
          n,
          0,
          i,
          -n,
          0,
          i,
          n,
          -i,
          -n,
          0,
          -i,
          n,
          0,
          i,
          -n,
          0,
          i,
          n,
          0,
          -n,
          0,
          -i,
          n,
          0,
          -i,
          -n,
          0,
          i,
          n,
          0,
          i,
        ],
        [
          3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4,
          8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1,
          18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2,
          3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8,
          11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1,
          12, 14, 1, 14, 5, 1, 5, 9,
        ],
        t,
        e
      ),
        (this.type = "DodecahedronGeometry"),
        (this.parameters = { radius: t, detail: e });
    }
    static fromJSON(t) {
      return new ga(t.radius, t.detail);
    }
  }
  class _a extends fa {
    constructor(t = 1, e = 0) {
      const n = (1 + Math.sqrt(5)) / 2;
      super(
        [
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          0,
          0,
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          n,
          0,
          -1,
          n,
          0,
          1,
          -n,
          0,
          -1,
          -n,
          0,
          1,
        ],
        [
          0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
          11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
          8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
        ],
        t,
        e
      ),
        (this.type = "IcosahedronGeometry"),
        (this.parameters = { radius: t, detail: e });
    }
    static fromJSON(t) {
      return new _a(t.radius, t.detail);
    }
  }
  class va extends Oe {
    constructor(t) {
      super(),
        (this.isMeshPhongMaterial = !0),
        (this.type = "MeshPhongMaterial"),
        (this.color = new lt(16777215)),
        (this.specular = new lt(1118481)),
        (this.shininess = 30),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new lt(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new Y(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        (this.shininess = t.shininess),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        (this.normalMapType = t.normalMapType),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.flatShading = t.flatShading),
        (this.fog = t.fog),
        this
      );
    }
  }
  class xa extends be {
    constructor(t, e = 1) {
      super(),
        (this.isLight = !0),
        (this.type = "Light"),
        (this.color = new lt(t)),
        (this.intensity = e);
    }
    dispose() {}
    copy(t, e) {
      return (
        super.copy(t, e),
        this.color.copy(t.color),
        (this.intensity = t.intensity),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.color = this.color.getHex()),
        (e.object.intensity = this.intensity),
        void 0 !== this.groundColor &&
          (e.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (e.object.distance = this.distance),
        void 0 !== this.angle && (e.object.angle = this.angle),
        void 0 !== this.decay && (e.object.decay = this.decay),
        void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
        e
      );
    }
  }
  const Ma = new Kt(),
    ya = new Mt(),
    ba = new Mt();
  class Sa extends class {
    constructor(t) {
      (this.camera = t),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new Y(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new Kt()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Nn()),
        (this._frameExtents = new Y(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new ft(0, 0, 1, 1)]);
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t) {
      const e = this.camera,
        n = this.matrix;
      ya.setFromMatrixPosition(t.matrixWorld),
        e.position.copy(ya),
        ba.setFromMatrixPosition(t.target.matrixWorld),
        e.lookAt(ba),
        e.updateMatrixWorld(),
        Ma.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Ma),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(e.projectionMatrix),
        n.multiply(e.matrixWorldInverse);
    }
    getViewport(t) {
      return this._viewports[t];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t) {
      return (
        (this.camera = t.camera.clone()),
        (this.bias = t.bias),
        (this.radius = t.radius),
        this.mapSize.copy(t.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t = {};
      return (
        0 !== this.bias && (t.bias = this.bias),
        0 !== this.normalBias && (t.normalBias = this.normalBias),
        1 !== this.radius && (t.radius = this.radius),
        (512 === this.mapSize.x && 512 === this.mapSize.y) ||
          (t.mapSize = this.mapSize.toArray()),
        (t.camera = this.camera.toJSON(!1).object),
        delete t.camera.matrix,
        t
      );
    }
  } {
    constructor() {
      super(new qn(-5, 5, 5, -5, 0.5, 500)),
        (this.isDirectionalLightShadow = !0);
    }
  }
  class wa extends xa {
    constructor(t, e) {
      super(t, e),
        (this.isDirectionalLight = !0),
        (this.type = "DirectionalLight"),
        this.position.copy(be.DefaultUp),
        this.updateMatrix(),
        (this.target = new be()),
        (this.shadow = new Sa());
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t) {
      return (
        super.copy(t),
        (this.target = t.target.clone()),
        (this.shadow = t.shadow.clone()),
        this
      );
    }
  }
  class Ta extends xa {
    constructor(t, e) {
      super(t, e), (this.isAmbientLight = !0), (this.type = "AmbientLight");
    }
  }
  class Ea {
    constructor(t = 1, e = 0, n = 0) {
      return (this.radius = t), (this.phi = e), (this.theta = n), this;
    }
    set(t, e, n) {
      return (this.radius = t), (this.phi = e), (this.theta = n), this;
    }
    copy(t) {
      return (
        (this.radius = t.radius),
        (this.phi = t.phi),
        (this.theta = t.theta),
        this
      );
    }
    makeSafe() {
      const t = 1e-6;
      return (this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))), this;
    }
    setFromVector3(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    }
    setFromCartesianCoords(t, e, n) {
      return (
        (this.radius = Math.sqrt(t * t + e * e + n * n)),
        0 === this.radius
          ? ((this.theta = 0), (this.phi = 0))
          : ((this.theta = Math.atan2(t, n)),
            (this.phi = Math.acos(V(e / this.radius, -1, 1)))),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  "undefined" != typeof __THREE_DEVTOOLS__ &&
    __THREE_DEVTOOLS__.dispatchEvent(
      new CustomEvent("register", { detail: { revision: t } })
    ),
    "undefined" != typeof window &&
      (window.__THREE__
        ? console.warn(
            "WARNING: Multiple instances of Three.js being imported."
          )
        : (window.__THREE__ = t));
  const Aa = { type: "change" },
    La = { type: "start" },
    Ca = { type: "end" };
  class Ra extends U {
    constructor(t, l) {
      super(),
        (this.object = t),
        (this.domElement = l),
        (this.domElement.style.touchAction = "none"),
        (this.enabled = !0),
        (this.target = new Mt()),
        (this.minDistance = 0),
        (this.maxDistance = 1 / 0),
        (this.minZoom = 0),
        (this.maxZoom = 1 / 0),
        (this.minPolarAngle = 0),
        (this.maxPolarAngle = Math.PI),
        (this.minAzimuthAngle = -1 / 0),
        (this.maxAzimuthAngle = 1 / 0),
        (this.enableDamping = !1),
        (this.dampingFactor = 0.05),
        (this.enableZoom = !0),
        (this.zoomSpeed = 1),
        (this.enableRotate = !0),
        (this.rotateSpeed = 1),
        (this.enablePan = !0),
        (this.panSpeed = 1),
        (this.screenSpacePanning = !0),
        (this.keyPanSpeed = 7),
        (this.autoRotate = !1),
        (this.autoRotateSpeed = 2),
        (this.keys = {
          LEFT: "ArrowLeft",
          UP: "ArrowUp",
          RIGHT: "ArrowRight",
          BOTTOM: "ArrowDown",
        }),
        (this.mouseButtons = { LEFT: e, MIDDLE: n, RIGHT: i }),
        (this.touches = { ONE: r, TWO: s }),
        (this.target0 = this.target.clone()),
        (this.position0 = this.object.position.clone()),
        (this.zoom0 = this.object.zoom),
        (this._domElementKeyEvents = null),
        (this.getPolarAngle = function () {
          return p.phi;
        }),
        (this.getAzimuthalAngle = function () {
          return p.theta;
        }),
        (this.getDistance = function () {
          return this.object.position.distanceTo(this.target);
        }),
        (this.listenToKeyEvents = function (t) {
          t.addEventListener("keydown", K), (this._domElementKeyEvents = t);
        }),
        (this.saveState = function () {
          c.target0.copy(c.target),
            c.position0.copy(c.object.position),
            (c.zoom0 = c.object.zoom);
        }),
        (this.reset = function () {
          c.target.copy(c.target0),
            c.object.position.copy(c.position0),
            (c.object.zoom = c.zoom0),
            c.object.updateProjectionMatrix(),
            c.dispatchEvent(Aa),
            c.update(),
            (u = h.NONE);
        }),
        (this.update = (function () {
          const e = new Mt(),
            n = new xt().setFromUnitVectors(t.up, new Mt(0, 1, 0)),
            i = n.clone().invert(),
            r = new Mt(),
            a = new xt(),
            s = 2 * Math.PI;
          return function () {
            const t = c.object.position;
            e.copy(t).sub(c.target),
              e.applyQuaternion(n),
              p.setFromVector3(e),
              c.autoRotate &&
                u === h.NONE &&
                R(((2 * Math.PI) / 60 / 60) * c.autoRotateSpeed),
              c.enableDamping
                ? ((p.theta += m.theta * c.dampingFactor),
                  (p.phi += m.phi * c.dampingFactor))
                : ((p.theta += m.theta), (p.phi += m.phi));
            let o = c.minAzimuthAngle,
              l = c.maxAzimuthAngle;
            return (
              isFinite(o) &&
                isFinite(l) &&
                (o < -Math.PI ? (o += s) : o > Math.PI && (o -= s),
                l < -Math.PI ? (l += s) : l > Math.PI && (l -= s),
                (p.theta =
                  o <= l
                    ? Math.max(o, Math.min(l, p.theta))
                    : p.theta > (o + l) / 2
                    ? Math.max(o, p.theta)
                    : Math.min(l, p.theta))),
              (p.phi = Math.max(
                c.minPolarAngle,
                Math.min(c.maxPolarAngle, p.phi)
              )),
              p.makeSafe(),
              (p.radius *= f),
              (p.radius = Math.max(
                c.minDistance,
                Math.min(c.maxDistance, p.radius)
              )),
              !0 === c.enableDamping
                ? c.target.addScaledVector(g, c.dampingFactor)
                : c.target.add(g),
              e.setFromSpherical(p),
              e.applyQuaternion(i),
              t.copy(c.target).add(e),
              c.object.lookAt(c.target),
              !0 === c.enableDamping
                ? ((m.theta *= 1 - c.dampingFactor),
                  (m.phi *= 1 - c.dampingFactor),
                  g.multiplyScalar(1 - c.dampingFactor))
                : (m.set(0, 0, 0), g.set(0, 0, 0)),
              (f = 1),
              !!(
                _ ||
                r.distanceToSquared(c.object.position) > d ||
                8 * (1 - a.dot(c.object.quaternion)) > d
              ) &&
                (c.dispatchEvent(Aa),
                r.copy(c.object.position),
                a.copy(c.object.quaternion),
                (_ = !1),
                !0)
            );
          };
        })()),
        (this.dispose = function () {
          c.domElement.removeEventListener("contextmenu", Q),
            c.domElement.removeEventListener("pointerdown", j),
            c.domElement.removeEventListener("pointercancel", Z),
            c.domElement.removeEventListener("wheel", J),
            c.domElement.removeEventListener("pointermove", X),
            c.domElement.removeEventListener("pointerup", q),
            null !== c._domElementKeyEvents &&
              c._domElementKeyEvents.removeEventListener("keydown", K);
        });
      const c = this,
        h = {
          NONE: -1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_PAN: 4,
          TOUCH_DOLLY_PAN: 5,
          TOUCH_DOLLY_ROTATE: 6,
        };
      let u = h.NONE;
      const d = 1e-6,
        p = new Ea(),
        m = new Ea();
      let f = 1;
      const g = new Mt();
      let _ = !1;
      const v = new Y(),
        x = new Y(),
        M = new Y(),
        y = new Y(),
        b = new Y(),
        S = new Y(),
        w = new Y(),
        T = new Y(),
        E = new Y(),
        A = [],
        L = {};
      function C() {
        return Math.pow(0.95, c.zoomSpeed);
      }
      function R(t) {
        m.theta -= t;
      }
      function P(t) {
        m.phi -= t;
      }
      const D = (function () {
          const t = new Mt();
          return function (e, n) {
            t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), g.add(t);
          };
        })(),
        I = (function () {
          const t = new Mt();
          return function (e, n) {
            !0 === c.screenSpacePanning
              ? t.setFromMatrixColumn(n, 1)
              : (t.setFromMatrixColumn(n, 0), t.crossVectors(c.object.up, t)),
              t.multiplyScalar(e),
              g.add(t);
          };
        })(),
        N = (function () {
          const t = new Mt();
          return function (e, n) {
            const i = c.domElement;
            if (c.object.isPerspectiveCamera) {
              const r = c.object.position;
              t.copy(r).sub(c.target);
              let a = t.length();
              (a *= Math.tan(((c.object.fov / 2) * Math.PI) / 180)),
                D((2 * e * a) / i.clientHeight, c.object.matrix),
                I((2 * n * a) / i.clientHeight, c.object.matrix);
            } else
              c.object.isOrthographicCamera
                ? (D(
                    (e * (c.object.right - c.object.left)) /
                      c.object.zoom /
                      i.clientWidth,
                    c.object.matrix
                  ),
                  I(
                    (n * (c.object.top - c.object.bottom)) /
                      c.object.zoom /
                      i.clientHeight,
                    c.object.matrix
                  ))
                : (console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                  ),
                  (c.enablePan = !1));
          };
        })();
      function O(t) {
        c.object.isPerspectiveCamera
          ? (f /= t)
          : c.object.isOrthographicCamera
          ? ((c.object.zoom = Math.max(
              c.minZoom,
              Math.min(c.maxZoom, c.object.zoom * t)
            )),
            c.object.updateProjectionMatrix(),
            (_ = !0))
          : (console.warn(
              "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
            ),
            (c.enableZoom = !1));
      }
      function z(t) {
        c.object.isPerspectiveCamera
          ? (f *= t)
          : c.object.isOrthographicCamera
          ? ((c.object.zoom = Math.max(
              c.minZoom,
              Math.min(c.maxZoom, c.object.zoom / t)
            )),
            c.object.updateProjectionMatrix(),
            (_ = !0))
          : (console.warn(
              "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
            ),
            (c.enableZoom = !1));
      }
      function U(t) {
        v.set(t.clientX, t.clientY);
      }
      function F(t) {
        y.set(t.clientX, t.clientY);
      }
      function B() {
        if (1 === A.length) v.set(A[0].pageX, A[0].pageY);
        else {
          const t = 0.5 * (A[0].pageX + A[1].pageX),
            e = 0.5 * (A[0].pageY + A[1].pageY);
          v.set(t, e);
        }
      }
      function G() {
        if (1 === A.length) y.set(A[0].pageX, A[0].pageY);
        else {
          const t = 0.5 * (A[0].pageX + A[1].pageX),
            e = 0.5 * (A[0].pageY + A[1].pageY);
          y.set(t, e);
        }
      }
      function H() {
        const t = A[0].pageX - A[1].pageX,
          e = A[0].pageY - A[1].pageY,
          n = Math.sqrt(t * t + e * e);
        w.set(0, n);
      }
      function V(t) {
        if (1 == A.length) x.set(t.pageX, t.pageY);
        else {
          const e = et(t),
            n = 0.5 * (t.pageX + e.x),
            i = 0.5 * (t.pageY + e.y);
          x.set(n, i);
        }
        M.subVectors(x, v).multiplyScalar(c.rotateSpeed);
        const e = c.domElement;
        R((2 * Math.PI * M.x) / e.clientHeight),
          P((2 * Math.PI * M.y) / e.clientHeight),
          v.copy(x);
      }
      function k(t) {
        if (1 === A.length) b.set(t.pageX, t.pageY);
        else {
          const e = et(t),
            n = 0.5 * (t.pageX + e.x),
            i = 0.5 * (t.pageY + e.y);
          b.set(n, i);
        }
        S.subVectors(b, y).multiplyScalar(c.panSpeed), N(S.x, S.y), y.copy(b);
      }
      function W(t) {
        const e = et(t),
          n = t.pageX - e.x,
          i = t.pageY - e.y,
          r = Math.sqrt(n * n + i * i);
        T.set(0, r),
          E.set(0, Math.pow(T.y / w.y, c.zoomSpeed)),
          O(E.y),
          w.copy(T);
      }
      function j(t) {
        !1 !== c.enabled &&
          (0 === A.length &&
            (c.domElement.setPointerCapture(t.pointerId),
            c.domElement.addEventListener("pointermove", X),
            c.domElement.addEventListener("pointerup", q)),
          (function (t) {
            A.push(t);
          })(t),
          "touch" === t.pointerType
            ? (function (t) {
                switch ((tt(t), A.length)) {
                  case 1:
                    switch (c.touches.ONE) {
                      case r:
                        if (!1 === c.enableRotate) return;
                        B(), (u = h.TOUCH_ROTATE);
                        break;
                      case a:
                        if (!1 === c.enablePan) return;
                        G(), (u = h.TOUCH_PAN);
                        break;
                      default:
                        u = h.NONE;
                    }
                    break;
                  case 2:
                    switch (c.touches.TWO) {
                      case s:
                        if (!1 === c.enableZoom && !1 === c.enablePan) return;
                        c.enableZoom && H(),
                          c.enablePan && G(),
                          (u = h.TOUCH_DOLLY_PAN);
                        break;
                      case o:
                        if (!1 === c.enableZoom && !1 === c.enableRotate)
                          return;
                        c.enableZoom && H(),
                          c.enableRotate && B(),
                          (u = h.TOUCH_DOLLY_ROTATE);
                        break;
                      default:
                        u = h.NONE;
                    }
                    break;
                  default:
                    u = h.NONE;
                }
                u !== h.NONE && c.dispatchEvent(La);
              })(t)
            : (function (t) {
                let r;
                switch (t.button) {
                  case 0:
                    r = c.mouseButtons.LEFT;
                    break;
                  case 1:
                    r = c.mouseButtons.MIDDLE;
                    break;
                  case 2:
                    r = c.mouseButtons.RIGHT;
                    break;
                  default:
                    r = -1;
                }
                switch (r) {
                  case n:
                    if (!1 === c.enableZoom) return;
                    !(function (t) {
                      w.set(t.clientX, t.clientY);
                    })(t),
                      (u = h.DOLLY);
                    break;
                  case e:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                      if (!1 === c.enablePan) return;
                      F(t), (u = h.PAN);
                    } else {
                      if (!1 === c.enableRotate) return;
                      U(t), (u = h.ROTATE);
                    }
                    break;
                  case i:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                      if (!1 === c.enableRotate) return;
                      U(t), (u = h.ROTATE);
                    } else {
                      if (!1 === c.enablePan) return;
                      F(t), (u = h.PAN);
                    }
                    break;
                  default:
                    u = h.NONE;
                }
                u !== h.NONE && c.dispatchEvent(La);
              })(t));
      }
      function X(t) {
        !1 !== c.enabled &&
          ("touch" === t.pointerType
            ? (function (t) {
                switch ((tt(t), u)) {
                  case h.TOUCH_ROTATE:
                    if (!1 === c.enableRotate) return;
                    V(t), c.update();
                    break;
                  case h.TOUCH_PAN:
                    if (!1 === c.enablePan) return;
                    k(t), c.update();
                    break;
                  case h.TOUCH_DOLLY_PAN:
                    if (!1 === c.enableZoom && !1 === c.enablePan) return;
                    !(function (t) {
                      c.enableZoom && W(t), c.enablePan && k(t);
                    })(t),
                      c.update();
                    break;
                  case h.TOUCH_DOLLY_ROTATE:
                    if (!1 === c.enableZoom && !1 === c.enableRotate) return;
                    !(function (t) {
                      c.enableZoom && W(t), c.enableRotate && V(t);
                    })(t),
                      c.update();
                    break;
                  default:
                    u = h.NONE;
                }
              })(t)
            : (function (t) {
                switch (u) {
                  case h.ROTATE:
                    if (!1 === c.enableRotate) return;
                    !(function (t) {
                      x.set(t.clientX, t.clientY),
                        M.subVectors(x, v).multiplyScalar(c.rotateSpeed);
                      const e = c.domElement;
                      R((2 * Math.PI * M.x) / e.clientHeight),
                        P((2 * Math.PI * M.y) / e.clientHeight),
                        v.copy(x),
                        c.update();
                    })(t);
                    break;
                  case h.DOLLY:
                    if (!1 === c.enableZoom) return;
                    !(function (t) {
                      T.set(t.clientX, t.clientY),
                        E.subVectors(T, w),
                        E.y > 0 ? O(C()) : E.y < 0 && z(C()),
                        w.copy(T),
                        c.update();
                    })(t);
                    break;
                  case h.PAN:
                    if (!1 === c.enablePan) return;
                    !(function (t) {
                      b.set(t.clientX, t.clientY),
                        S.subVectors(b, y).multiplyScalar(c.panSpeed),
                        N(S.x, S.y),
                        y.copy(b),
                        c.update();
                    })(t);
                }
              })(t));
      }
      function q(t) {
        $(t),
          0 === A.length &&
            (c.domElement.releasePointerCapture(t.pointerId),
            c.domElement.removeEventListener("pointermove", X),
            c.domElement.removeEventListener("pointerup", q)),
          c.dispatchEvent(Ca),
          (u = h.NONE);
      }
      function Z(t) {
        $(t);
      }
      function J(t) {
        !1 !== c.enabled &&
          !1 !== c.enableZoom &&
          u === h.NONE &&
          (t.preventDefault(),
          c.dispatchEvent(La),
          (function (t) {
            t.deltaY < 0 ? z(C()) : t.deltaY > 0 && O(C()), c.update();
          })(t),
          c.dispatchEvent(Ca));
      }
      function K(t) {
        !1 !== c.enabled &&
          !1 !== c.enablePan &&
          (function (t) {
            let e = !1;
            switch (t.code) {
              case c.keys.UP:
                N(0, c.keyPanSpeed), (e = !0);
                break;
              case c.keys.BOTTOM:
                N(0, -c.keyPanSpeed), (e = !0);
                break;
              case c.keys.LEFT:
                N(c.keyPanSpeed, 0), (e = !0);
                break;
              case c.keys.RIGHT:
                N(-c.keyPanSpeed, 0), (e = !0);
            }
            e && (t.preventDefault(), c.update());
          })(t);
      }
      function Q(t) {
        !1 !== c.enabled && t.preventDefault();
      }
      function $(t) {
        delete L[t.pointerId];
        for (let e = 0; e < A.length; e++)
          if (A[e].pointerId == t.pointerId) return void A.splice(e, 1);
      }
      function tt(t) {
        let e = L[t.pointerId];
        void 0 === e && ((e = new Y()), (L[t.pointerId] = e)),
          e.set(t.pageX, t.pageY);
      }
      function et(t) {
        const e = t.pointerId === A[0].pointerId ? A[1] : A[0];
        return L[e.pointerId];
      }
      c.domElement.addEventListener("contextmenu", Q),
        c.domElement.addEventListener("pointerdown", j),
        c.domElement.addEventListener("pointercancel", Z),
        c.domElement.addEventListener("wheel", J, { passive: !1 }),
        this.update();
    }
  }
  class Pa {
    static createButton(t) {
      const e = document.createElement("button");
      function n() {
        (e.style.display = ""),
          (e.style.cursor = "auto"),
          (e.style.left = "calc(50% - 75px)"),
          (e.style.width = "150px"),
          (e.onmouseenter = null),
          (e.onmouseleave = null),
          (e.onclick = null);
      }
      function i(t) {
        (t.style.position = "absolute"),
          (t.style.bottom = "20px"),
          (t.style.padding = "12px 6px"),
          (t.style.border = "1px solid #fff"),
          (t.style.borderRadius = "4px"),
          (t.style.background = "rgba(0,0,0,0.1)"),
          (t.style.color = "#fff"),
          (t.style.font = "normal 13px sans-serif"),
          (t.style.textAlign = "center"),
          (t.style.opacity = "0.5"),
          (t.style.outline = "none"),
          (t.style.zIndex = "999");
      }
      if ("xr" in navigator)
        return (
          (e.id = "VRButton"),
          (e.style.display = "none"),
          i(e),
          navigator.xr
            .isSessionSupported("immersive-vr")
            .then(function (i) {
              i
                ? (function () {
                    let n = null;
                    async function i(i) {
                      i.addEventListener("end", r),
                        await t.xr.setSession(i),
                        (e.textContent = "EXIT VR"),
                        (n = i);
                    }
                    function r() {
                      n.removeEventListener("end", r),
                        (e.textContent = "ENTER VR"),
                        (n = null);
                    }
                    (e.style.display = ""),
                      (e.style.cursor = "pointer"),
                      (e.style.left = "calc(50% - 50px)"),
                      (e.style.width = "100px"),
                      (e.textContent = "ENTER VR"),
                      (e.onmouseenter = function () {
                        e.style.opacity = "1.0";
                      }),
                      (e.onmouseleave = function () {
                        e.style.opacity = "0.5";
                      }),
                      (e.onclick = function () {
                        if (null === n) {
                          const t = {
                            optionalFeatures: [
                              "local-floor",
                              "bounded-floor",
                              "hand-tracking",
                              "layers",
                            ],
                          };
                          navigator.xr
                            .requestSession("immersive-vr", t)
                            .then(i);
                        } else n.end();
                      });
                  })()
                : (n(), (e.textContent = "VR NOT SUPPORTED")),
                i && Pa.xrSessionIsGranted && e.click();
            })
            .catch(function (t) {
              n(),
                console.warn(
                  "Exception when trying to call xr.isSessionSupported",
                  t
                ),
                (e.textContent = "VR NOT ALLOWED");
            }),
          e
        );
      {
        const t = document.createElement("a");
        return (
          !1 === window.isSecureContext
            ? ((t.href = document.location.href.replace(/^http:/, "https:")),
              (t.innerHTML = "WEBXR NEEDS HTTPS"))
            : ((t.href = "https://immersiveweb.dev/"),
              (t.innerHTML = "WEBXR NOT AVAILABLE")),
          (t.style.left = "calc(50% - 90px)"),
          (t.style.width = "180px"),
          (t.style.textDecoration = "none"),
          i(t),
          t
        );
      }
    }
    static xrSessionIsGranted = !1;
    static registerSessionGrantedListener() {
      if ("xr" in navigator) {
        if (/WebXRViewer\//i.test(navigator.userAgent)) return;
        navigator.xr.addEventListener("sessiongranted", () => {
          Pa.xrSessionIsGranted = !0;
        });
      }
    }
  }
  Pa.registerSessionGrantedListener();
  class Da extends fn {
    constructor(t, e = 1, n = 5918017) {
      super(),
        (this.geometry = new _n(e, e, e)),
        (this.material = new va({ color: n })),
        t.add(this);
    }
  }
  class Ia extends fn {
    constructor(t, e = 1, n = 4, i = 2, r = 5918017) {
      super(),
        (this.geometry = new ma(e, n, i)),
        (this.material = new va({ color: r })),
        t.add(this);
    }
  }
  class Na extends fn {
    constructor(t, e = 2263842, n, i = new Mt(0, -0.5, 0)) {
      super(),
        (this.geometry = new Un(1e4, 1e4)),
        (this.material = new ze(void 0 === n ? { color: e } : { map: n })),
        this.rotateX(-Math.PI / 2),
        this.position.copy(i),
        t.add(this);
    }
  }
  class Oa extends fn {
    constructor(t, e = 1, n = 0, i = 5918017) {
      super(),
        (this.geometry = new ga(e, n)),
        (this.material = new va({ color: i })),
        t.add(this);
    }
  }
  class za extends aa {
    constructor(t, e = 3, n = 2, i = 1, r = 10, a = 3825419, s = 8417619) {
      super();
      const o = new _a(e, n),
        l = new va({ color: a }),
        c = new fn(o, l),
        h = new ma(i, i, r),
        u = new va({ color: s }),
        d = new fn(h, u);
      (d.position.y = r / 2 - 1),
        (c.position.y = r),
        this.add(d),
        this.add(c),
        t.add(this);
    }
  }
  let Ua, Fa, Ba, Ga;
  function Ha() {
    (Ua.aspect = window.innerWidth / window.innerHeight),
      Ua.updateProjectionMatrix(),
      Ba.setSize(window.innerWidth, window.innerHeight);
  }
  function Va() {
    Ba.render(Fa, Ua);
  }
  new (class {
    init() {
      const t = new Ta(16777215, 1);
      t.position.set(0, 3, 2),
        (Ua = new Sn(70, window.innerWidth / window.innerHeight, 0.01, 1e3)),
        (Ua.position.y = 2),
        (Ua.position.z = 30),
        Ua.add(t),
        (Fa = new pa()),
        (Fa.background = new lt(8900331)),
        Fa.add(Ua),
        (Ga = new wa(16777215, 2)),
        Ga.position.set(5, 50, -10),
        Fa.add(Ga),
        new Na(Fa);
      new za(Fa, 20, 1, 4, 40).position.set(0, 0, 0);
      const e = (t) =>
        t.position.set(
          -1e4 * Math.random() + 5e3,
          0,
          -5e3 * Math.random() + 2500
        );
      for (let t = 0; t < 3e3; ++t) {
        const t = 10 * Math.random() + 2;
        e(new za(Fa, t, 1, t / 3 + 1, 2 * t));
      }
      for (let t = 0; t < 4e3; ++t) {
        const t = 5 * Math.random() + 1;
        e(new Da(Fa, t));
      }
      for (let t = 0; t < 2e3; ++t) {
        const t = 10 * Math.random() + 1;
        e(new Oa(Fa, t));
      }
      for (let t = 0; t < 200; ++t) {
        const t = 30 * Math.random() + 1;
        e(new Ia(Fa, t, 5.5 * t + 2, 8 * t + 8));
      }
      (Ba = new da({ antialias: !0 })),
        Ba.setPixelRatio(window.devicePixelRatio),
        Ba.setSize(window.innerWidth, window.innerHeight),
        document.body.appendChild(Ba.domElement),
        document.body.appendChild(Pa.createButton(Ba)),
        (Ba.xr.enabled = !0),
        Ba.setAnimationLoop(() => {
          Va();
        }),
        window.addEventListener("resize", Ha, !1),
        addEventListener("keydown", (t) => {
          !(function (t) {
            const e = Ua.getWorldDirection(new Mt());
            "w" === t.key
              ? ((Ua.position.x += 0.5 * e.x),
                (Ua.position.y += 0.5 * e.y),
                (Ua.position.z += 0.5 * e.z))
              : "s" === t.key
              ? ((Ua.position.x -= 0.5 * e.x),
                (Ua.position.y -= 0.5 * e.y),
                (Ua.position.z -= 0.5 * e.z))
              : "q" === t.key
              ? Ua.rotation.x < 0.7 && Ua.rotateX(0.05)
              : "e" === t.key
              ? Ua.rotation.x > -0.7 && Ua.rotateX(-0.05)
              : "a" === t.key
              ? Ua.rotateY(0.05)
              : "d" === t.key && Ua.rotateY(-0.05);
          })(t);
        }),
        new Ra(Ua, Ba.domElement),
        Va();
    }
  })().init();
});
