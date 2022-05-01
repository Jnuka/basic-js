const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  if (domains.length === 0) {
    return {}
  }
  let domainsObject = {};

  for (let i = 0; i < domains.length; i++) {
    let domainElements = domains[i].split('.').map(element => '.' + element).reverse();
    for (let j = 0; j < domainElements.length; j++) {
      let domain = domainElements.slice(0, j + 1).join('');
      domainsObject[domain] = domainsObject[domain] ? domainsObject[domain] + 1 : 1;
    }
  }
  return domainsObject;
}

module.exports = {
  getDNSStats
};
