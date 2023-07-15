
/**
 * 配列に関するユーティリティ
 */
class ArrayUtil {

  /**
   * 追加します。
   * 元の要素に変更はありません。
   *
   * @template T 型
   * @param {T[]} array 配列
   * @param {T} newElement 追加する要素
   * @returns {T[]} 追加後の配列
   */
  static added(array, newElement) {
    return [...array, newElement];
  }

  /**
   * インデックス指定で削除します。
   * 元の要素に変更はありません。
   *
   * @template T 型
   * @param {T[]} array 配列
   * @param {number} index 削除対象のインデックス
   * @returns {T[]} 削除後の配列
   */
  static removedByIndex(array, index) {
    return array.filter((_, idx) => idx !== index);
  }
}

export { ArrayUtil };
