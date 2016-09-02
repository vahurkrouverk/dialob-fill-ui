/**
 *  Copyright 2016 ReSys OÜ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/

import {connectToWebsocket,websocketMiddleware} from 'middlewares/SockJSMiddleware';
import Immutable from 'immutable';
import sinon from 'sinon';


describe('connectToWebsocket', () => {
  it('should ...', () => {

    var store = {
        getState: () =>{
            return {
                config: Immutable.fromJS({
                    url: 'http://localhost:9999'
                })
            };
        },
        dispatch: sinon.mock()

    };
    var next = sinon.mock();

    websocketMiddleware(store)(next)({});
    expect(null).to.equal(null);
  });
});
