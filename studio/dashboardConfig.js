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
                  buildHookId: '5f90d4086f21e21e37e5e10b',
                  title: 'Sanity Studio',
                  name: 'next-js-ccstudio-studio',
                  apiId: '64ad1e49-67ce-428d-b168-fc8294c24eea'
                },
                {
                  buildHookId: '5f90d408967e2d1e9482dc8e',
                  title: 'Landing pages Website',
                  name: 'next-js-ccstudio',
                  apiId: 'f9d7dfd9-903c-446f-b0ae-df6a4c095a33'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coelhocarlos/next-js-ccstudio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://next-js-ccstudio.netlify.app', category: 'apps'}
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
