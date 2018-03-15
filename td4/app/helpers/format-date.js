import { helper } from '@ember/component/helper';

export function formatDate(params/*, hash*/) {
  return params[0].toLocaleDateString();
}

export default helper(formatDate);
