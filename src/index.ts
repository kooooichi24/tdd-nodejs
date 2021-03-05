/**
 * 足し算メソッド。
 *
 * ただし下記条件を含む。
 * - 引数が数値のみの場合、加算結果を返す。
 * - 引数に文字列が含まれている場合、例外を返す。
 * - 引数の要素数が 31 個以上の場合、例外を返す。
 * - 加算結果が 1000 を超える場合、文字列「too big」を返す。
 *
 * @param array 数値配列
 */
export const add = (array: number[]): number | string | Error => {
  if (array.length > 30) {
    throw new Error();
  }

  const result = array.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  if (result > 1000) {
    return 'too big';
  } else {
    return result;
  }
};
