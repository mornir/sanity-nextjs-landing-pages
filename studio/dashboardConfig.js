export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce199e7e8fea8ef49ea4d0e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vcj3fod8',
                  apiId: '4c39d597-cbec-4ab3-86df-e7b50eb7d3d9'
                },
                {
                  buildHookId: '5ce199e86bc0d703a958d5d4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ksz18846',
                  apiId: 'de1d3d8d-fa90-426a-92da-b03568275a39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mornir/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ksz18846.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
