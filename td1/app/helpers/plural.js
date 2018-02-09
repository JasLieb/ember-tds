import { helper } from '@ember/component/helper';

export function plural([count,zero,one,other]/*, hash*/) {
  // let [count,zero,one,other] = params;
  let ret = "";
  if(count <= 0)
    return zero;
  if(count === 1)
    return "1 "+one;
  else
    return count+" "+other;

}

export default helper(plural);
