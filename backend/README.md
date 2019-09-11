# Timewinder Backend

This is a simple Node.js caching proxy responsible for both serving the packaged frontend and proxying requests to the underlying LCU communication. Please note that the LCU communication module is not public, since it contains code for which I have no permissions to publish. In essence though, it simply calls `statsService.getAggregatedStats` through `/lol-login/v1/invoke`.