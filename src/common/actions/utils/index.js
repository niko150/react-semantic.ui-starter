// @flow
import Awral from 'awral'
/**
 * `parseJSON()` adds property "ok"
 *  that identicates that response is OK
 *
 *  This func to determinates is response from API was successful or failed
 *
 * @param  {Object} result - response from API
 * @return {Boolean} - indicates was request successful or not
 */
const check = (result: Object = {ok: false}): boolean => result.ok
const beforeCheck = a => a
const afterCheck = a => a.data
// disable dispatch of GET_LINKS_FINALLY
const finallyAction = null
// disable dispatch of GET_LINKS_BEFORE_PENDING
const beforePending = null

/**
  Create default Awral
  Awral is not recommended for production usage now
  But it can make your work with actions even simpler.
  NOTE:I strongly recommend you check Awral sources!
  Awral is 880B gzipped!
  {@link https://github.com/Metnew/awral}
*/
export const awral = Awral.of({check, beforeCheck, afterCheck, finally: finallyAction, beforePending})
