import { helper } from '@ember/component/helper';

export function not([params]/*, hash*/) {
  return !params;
}

export default helper(not);
