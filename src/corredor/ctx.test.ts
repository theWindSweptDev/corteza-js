/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { describe, it } from 'mocha'
import { expect } from 'chai'
import { Ctx } from './ctx'
import { User } from '../system'
// @ts-ignore
import pino from 'pino'

describe(__filename, () => {
  describe('context sanity check', () => {
    it('should have a valid getter', () => {
      const cscfg = { apiBaseURL: '' }
      const ctx = new Ctx(
        { cServers: { system: cscfg, compose: cscfg, messaging: cscfg } },
        pino(),
        {
          $invoker: new User(),
          authToken: '',
        },
      )

      expect(ctx.console).to.not.be.undefined
      // expect(ctx.$authUser).to.not.be.undefined
      expect(ctx.SystemAPI).to.not.be.undefined
      expect(ctx.ComposeAPI).to.not.be.undefined
      expect(ctx.MessagingAPI).to.not.be.undefined
      expect(ctx.System).to.not.be.undefined
      expect(ctx.Compose).to.not.be.undefined
      expect(ctx.Messaging).to.not.be.undefined
    })
  })
})
