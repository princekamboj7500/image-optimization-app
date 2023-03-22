import {
    Page,
    Layout,
    Card,
    ResourceList,
    Thumbnail,
    CalloutCard,
    DescriptionList,
    FormLayout,
    TextField,
    Badge,
    Button,
    RadioButton,
    SettingToggle,
    Banner,
    Link,
    TextContainer
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import {useState, useCallback} from 'react';
  
  
  export default function Settings() {

    const [active, setActive] = useState(false);

    const handleToggle = useCallback(() => setActive((active) => !active), []);
  
    const contentStatus = active ? 'Deactivate' : 'Activate';
    const textStatus = active ? 'activated' : 'deactivated';
    
    return (
        <Page
        title="Settings"
        fullWidth>
        <Layout>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Account"
            description="Pick a plan for your store."
          >
            <Card 
            sectioned 
            title="Current plan"
            primaryFooterAction={{content: 'Change Plan'}}
            >
                <Badge status="success">Free</Badge>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            id="storeDetails"
            title="Default Compression Method"
            description="Please select the default compression method."
          >
            <Card sectioned>
              <FormLayout>
                <RadioButton
                    label="Lossy compression (Recommended)"
                    helpText="Decreases image size with some quality loss. When being viewed on a computer or mobile device this loss of quality is often not detectable to the human eye. Typical savings: 5-70%."
                    id="disabled"
                    name="compression"
                />
                <RadioButton
                    label="Lossless compression"
                    helpText="Decreases image size with no quality loss. Typical savings: 5-30%."
                    id="optional"
                    name="compression"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            id="storeDetails"
            title="Mode"
            description="Please select the default mode."
          >
            <Card sectioned>
            <FormLayout>
                <RadioButton
                    label="Automatically optimize new images (Recommended)"
                    helpText="In Automatic mode images are automatically optimized every several hours, with no user intervention required."
                    id="modedisabled"
                    name="mode"
                />
                <RadioButton
                    label="Manually optimize new images"
                    helpText="In Manual mode all new images can be optimized in one click."
                    id="modeoptional"
                    name="mode"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            id="storeDetails"
            title="Alt Texts"
            description="Choose if you want to optimize your image alt texts."
          >
            <Card>
                <Card.Section>Search engines use the information that alt text provides to determine the best image to return for a search query. This is a great way to both bring new visitors to your site and increase your rankings with search engines.</Card.Section>
                <SettingToggle
                    action={{
                        content: contentStatus,
                        onAction: handleToggle,
                    }}
                    enabled={active}
                    >
                    Alt text optimization is{' '}
                    <b fontWeight="bold" as="span">
                        {textStatus}
                    </b>
                    .
                </SettingToggle>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            id="storeDetails"
            title="Filenames"
            description="Choose if you want to optimize your image filenames."
          >
            <Card>
                <Card.Section>Creating descriptive, keyword-rich file names is crucial for image optimization. Search engines not only crawl the text on your webpage, they also crawl your image file names.</Card.Section>
                <SettingToggle
                    action={{
                        content: contentStatus,
                        onAction: handleToggle,
                    }}
                    enabled={active}
                    >
                    Filename optimization is{' '}
                    <b fontWeight="bold" as="span">
                        {textStatus}
                    </b>
                    .
                </SettingToggle>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            id="storeDetails"
            title="Convert PNG to JPG"
            description="Choose if you want to convert Product, Collection, and Blog Post Featured images from PNG to JPG."
          >
            <Card>
                <Card.Section>
                    <p>This can dramatically reduce the file size up to 80% of the original size.</p>
                    <Banner
                    title="Transparent PNGs"
                    status="warning"
                    >
                    <p>PNGs with transparency will be converted and set transparent background to white.</p>
                    </Banner>
                </Card.Section>
                <SettingToggle
                    action={{
                        content: contentStatus,
                        onAction: handleToggle,
                    }}
                    enabled={active}
                    >
                    PNG to JPG conversion is{' '}
                    <b fontWeight="bold" as="span">
                        {textStatus}
                    </b>
                    .
                </SettingToggle>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            id="storeDetails"
            title="Restore images"
            description="Choose if you want to restore your images."
          >
            <Card>
                <Card.Section>
                    <p>If you are not happy with image compression and optimization you can restore all your images. We will upload your original images back to Shopify.</p>
                    <Banner
                    title="Useful Tip"
                    status="info"
                    >
                    <p>If you are not happy with Lossy image optimization we recommend changing the default compression method to Lossless and re-optimize all images instead of restoring them. Images will not loose any quality, they will be 100% same as original.</p>
                    </Banner>
                </Card.Section>
            </Card>
          </Layout.AnnotatedSection>

        </Layout>
      </Page>
    );
  }
  