import {
  Page,
  Layout,
  Card,
  ResourceList,
  Thumbnail,
  CalloutCard,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page
      title={<div><h1>Image Optimizer Dashboard</h1><p style={{fontSize:"14px"}}>With its best-in-class algorithms Image Optimizer gives you an incredible level of image compression and optimization.</p></div>}

    >
      <Layout>
        <Layout.Section oneThird>
          <Card title="Your Average Savings" actions={[{content: 'Manage'}]}>
            <Card.Section>
              <p color="subdued" as="span">
                455 units available
              </p>
            </Card.Section>
            <Card.Section title="Items">
              <ResourceList
                resourceName={{singular: 'product', plural: 'products'}}
                items={[
                  {
                    id: '343',
                    url: '#',
                    name: 'Black & orange scarf',
                    sku: '9234194023',
                    quantity: '254',
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                        alt="Black orange scarf"
                      />
                    ),
                  },
                  {
                    id: '258',
                    url: '#',
                    name: 'Tucan scarf',
                    sku: '9234194010',
                    quantity: '201',
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                        alt="Tucan scarf"
                      />
                    ),
                  },
                ]}
                renderItem={(item) => {
                  const {id, url, name, sku, media, quantity} = item;

                  return (
                    <ResourceList.Item
                      id={id}
                      url={url}
                      media={media}
                      accessibilityLabel={`View details for ${name}`}
                    >
                      <p variant="bodyMd" fontWeight="bold" as="h3">
                        {name}
                      </p>
                      <div>SKU: {sku}</div>
                      <div>{quantity} available</div>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section oneThird>
          <Card title="Current Quota Usage" actions={[{content: 'Manage'}]}>
            <Card.Section>
              <p color="subdued" as="span">
                301 units available
              </p>
            </Card.Section>
            <Card.Section title="Items">
              <ResourceList
                resourceName={{singular: 'product', plural: 'products'}}
                items={[
                  {
                    id: '344',
                    url: '#',
                    name: 'Black & orange scarf',
                    sku: '9234194023',
                    quantity: '100',
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                        alt="Black orange scarf"
                      />
                    ),
                  },
                  {
                    id: '259',
                    url: '#',
                    name: 'Tucan scarf',
                    sku: '9234194010',
                    quantity: '201',
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                        alt="Tucan scarf"
                      />
                    ),
                  },
                ]}
                renderItem={(item) => {
                  const {id, url, name, sku, media, quantity} = item;

                  return (
                    <ResourceList.Item
                      id={id}
                      url={url}
                      media={media}
                      accessibilityLabel={`View details for ${name}`}
                    >
                      <p variant="bodyMd" fontWeight="bold" as="h3">
                        {name}
                      </p>
                      <div>SKU: {sku}</div>
                      <div>{quantity} available</div>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section oneThird>
          <Card title="Account Overview" actions={[{content: 'Manage'}]}>
            <Card.Section>
              <p color="subdued" as="span">
                1931 units available
              </p>
            </Card.Section>
            <Card.Section title="Items">
              <ResourceList
                resourceName={{singular: 'product', plural: 'products'}}
                items={[
                  {
                    id: '345',
                    url: '#',
                    name: 'Black & orange scarf',
                    sku: '9234194023',
                    quantity: '1230',
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                        alt="Black orange scarf"
                      />
                    ),
                  },
                  {
                    id: '260',
                    url: '#',
                    name: 'Tucan scarf',
                    sku: '9234194010',
                    quantity: '701',
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                        alt="Tucan scarf"
                      />
                    ),
                  },
                ]}
                renderItem={(item) => {
                  const {id, url, name, sku, media, quantity} = item;

                  return (
                    <ResourceList.Item
                      id={id}
                      url={url}
                      media={media}
                      accessibilityLabel={`View details for ${name}`}
                    >
                      <p variant="bodyMd" fontWeight="bold" as="h3">
                        {name}
                      </p>
                      <div>SKU: {sku}</div>
                      <div>{quantity} available</div>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
      <p>&nbsp;</p>
      <Layout>
        <Layout.Section oneThird>
          <CalloutCard
          title="Automatically check for new images"
          illustration="https://loyaltyharbour.azurewebsites.net/content/img/image-optimizer/first-class.svg"
          primaryAction={{
            content: 'Check Now',
            url: '#',
          }}
        >
          <p>Image Optimizer will periodically check for and optimize new product, collection, asset, and blog post featured images.</p>
        </CalloutCard>
        </Layout.Section>
        <Layout.Section oneThird>
          <CalloutCard
          title="Manual File Uploader"
          illustration="https://loyaltyharbour.azurewebsites.net/content/img/image-optimizer/search-ranking.svg"
          primaryAction={{
            content: 'Upload',
            url: '#',
          }}
        >
          <p>You need to manually compress some images such as homepage slides, blog images, etc. because Shopify doesn't allow access to them.</p>
        </CalloutCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
