const Utils = require('./utils')

const utils = new Utils()

describe.skip('testing utils', () => {
   it('should retrieve schema', () => {
      const result = utils.loadSchema('tenant')
      console.log('result', result)
      expect(result).toBeTruthy()
   })
})
