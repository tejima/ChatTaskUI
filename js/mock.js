
$.mockjax({
  url: '/community_search.json',
  proxy: 'community_search.json'
});

$.mockjax({
  url: '/activity_post.json',
  data: { message: "2" },
  proxy: 'activity_post.json'
});

$.mockjax({
  url: '/activity_post.json',
  data: { message: "1" },
  status: 500
});

$.mockjax({
  url: '/activity_post.json',
  proxy: 'activity_post.json'
});

$.mockjax({
  url: '/activity_search.json',
  proxy: 'activity_search.json'
});

$.mockjax({
  url: '/communityconfig_update.json',
  proxy: 'communityconfig_update.json'
});

$.mockjax({
  url: '/communityconfig_search.json',
  proxy: 'communityconfig_search.json'
});

$.mockjax({
  url: '/activity_delete.json',
  proxy: 'activity_delete.json'
});

$.mockjax({
  url: '/community_member.json',
  proxy: 'community_member.json'
});

