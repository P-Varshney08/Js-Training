/*
Create a dynamic function that changes the component value of route to unsubscribed based on the subscription values.

Replace the component(comp) value with 'UN'(unsubscribed) if the module is not subscribed.

Subscription and Routes value are given below.
Also handle the edge case 
* if module is not present in subscription value, then that module is automatically unsubscribed.
* if outer module is not subscribed then replace the subComp with key comp and value "UN" ( as if the main module is not subscribed that would mean subModules are also unsubscribed )

Add redirect-to value based on the first subscribed module.
*/


const routes = [
  {
    name: 'M1',
    comp: 'C1',
  },
  {
    name: 'M2',
    comp: 'C2',
  },
  {
    name: 'M3',
    subComp: [
      {
        name: 'M3A',
        comp: 'C3A',
      },
      {
        name: 'M3B',
        comp: 'C3B',
      },
    ],
  },
  {
    name: 'M4',
    subComp: [
      {
        name: 'M4A',
        comp: 'C4A',
      },
      {
        name: 'M4B',
        comp: 'C4B',
      },
    ],
  },
  {
    name: 'M5',
    subComp: [
      {
        name: 'M5A',
        comp: 'C5A',
      },
      {
        name: 'M5B',
        subComp: [
          {
            name: 'M5BA',
            comp: 'C5BA',
          },
          {
            name: 'M5BB',
            comp: 'C5BB',
          },
          {
            name: 'M5BC',
            comp: 'C5BC',
          },
        ],
      },
      {
        name: 'M5C',
        comp: 'C5C',
      },
    ],
  },
];

const subscription = [
  {
    name: 'M1',
    isSub: true,
  },
  {
    name: 'M2',
    isSub: false,
  },
  {
    name: 'M3',
    isSub: false,
    subMod: [
      {
        name: 'M3A',
        isSub: true,
      },
      {
        name: 'M3B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M4',
    isSub: true,
    subMod: [
      {
        name: 'M4A',
        isSub: true,
        subMod: [
          {
            name: 'M4AA',
            isSub: false,
          },
          {
            name: 'M4BB',
            isSub: true,
          },
        ],
      },
      {
        name: 'M4B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M5',
    isSub: true,
    subMod: [
      {
        name: 'M5A',
        isSub: false,
      },
      {
        name: 'M5B',
        isSub: true,

        subComp: [
          {
            name: 'M5BA',
            isSub: false,
          },
          {
            name: 'M5BB',
            isSub: true,
          },
          {
            name: 'M5BC',
            isSub: false,
          },
        ],
      },
      {
        name: 'M5C',
        isSub: true,
      },
    ],
  },
];


/*
Output
 -  
[{
  redirectTo: 'M1'
 },
 {
   name: 'M1',
   comp: 'C1',
 },
 {
   name: 'M4',
   subComp: [
     {
       redirectTo: 'M4B',
     },
     {
       name: 'M4A',
       comp: 'UN',
     },
     {
       name: 'M4B',
       comp: 'C4B',
     },
   ],
 },
]
*/


function Subscription(subscription, routes) {
    let result = [];
    let redirectTo = null;

    function isSubscribed(name, subModules = subscription) {
        // console.log(name)
        const r =subModules.find(mod => mod.name === name);
        // console.log('r', r);
        return subModules.find(mod => mod.name === name) || { isSub: false };
    }

    function processRoute(route) {
        const subModuleStatus = isSubscribed(route.name);
        // console.log('ss',subModuleStatus)

        if (!subModuleStatus.isSub) {
            return { name: route.name, comp: 'UN' }; 
        }

        let processedRoute = { name: route.name };

        if (!redirectTo) {
            redirectTo = route.name;
        }

        if (route.comp) {
            processedRoute.comp = route.comp; 
        }

        if (route.subComp) {
            let subCompProcessed = route.subComp.map(subRoute => processRoute(subRoute));
            processedRoute.subComp = subCompProcessed;
        }

        return processedRoute;
    }

    const firstSubscribed = subscription.find(mod => mod.isSub);
    if (firstSubscribed) {
        redirectTo = firstSubscribed.name;
        result.push({ redirectTo });
    }

    routes.forEach(route => {
        const subModuleStatus = isSubscribed(route.name);
        // console.log('ss', subModuleStatus)
        if (subModuleStatus.isSub) {
            if (route.subComp) {
                let subCompProcessed = [];
                const firstSubRedirect = subModuleStatus.subMod.find(sub => sub.isSub);
                // console.log(firstSubRedirect.name)
                if (firstSubRedirect) {
                    subCompProcessed.push({ redirectTo: firstSubRedirect.name });
                }

                route.subComp.forEach(subRoute => {
                    // console.log(subRoute)
                    const processedSubRoute = processRoute(subRoute);
                    // console.log('processed', processedSubRoute)
                    subCompProcessed.push(processedSubRoute);
                });
                result.push({ name: route.name, subComp: subCompProcessed });
                // console.log(JSON.stringify(result, null, 3))
            } else {
                result.push({ name: route.name, comp: route.comp });
            }
        }
    });
    return result;
}


let result = Subscription(subscription, routes);
console.log(JSON.stringify(result, null, 2));
