test('setup', async t => {
    const APP_INFO = { name: 'testing', creator: 'test' }
    wnfsPost = await WnfsPost.create(wn, APP_INFO)
    t.ok(wnfsPost, 'create a wnfs instance')
})