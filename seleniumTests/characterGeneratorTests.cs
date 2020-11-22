using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace seleniumTests
{
    [TestFixture]
    public class characterGeneratorTests
    {
        IWebDriver driver;
        string pageUrl = "http://127.0.0.1:5500/";

        string[] classTypes = {  "Random", "Alchemist", "Barbarian",  "Bard","Champion","Cleric","Druid","Fighter","Investigator", "Monk", "Oracle", "Ranger",
        "Rogue", "Sorcerer", "Swashbuckler",  "Witch", "Wizard"};
        string[] ancestryTypes = {"Random", "Dwarf",   "Elf",  "Gnome",  "Goblin",  "Halfling",  "Human",  "Catfolk",  "Kobold",  "Orc",   "Ratfolk", "Tengu",   "Leshy",
          "Lizardfolk",  "Hobgoblin",  "Shoony"};


        [OneTimeSetUp]
        public void Setup()
        {
            driver = new ChromeDriver();
        }

        [Test]
        public void DropdownsDefaultAsRandom()
        {
            driver.Url = (pageUrl);
            IWebElement selectNpcType = driver.FindElement(By.Id("selectNpcType"));
            IWebElement selectNpcAncestery = driver.FindElement(By.Id("selectNpcAncestery"));
            IWebElement selectNpcLevel = driver.FindElement(By.Id("selectNpcLevel"));

            try
            {
                Assert.AreEqual("Random", selectNpcType.GetAttribute("value"));
                Assert.AreEqual("Random", selectNpcAncestery.GetAttribute("value"));
                Assert.AreEqual("Random", selectNpcLevel.GetAttribute("value"));
            }
            catch (AssertionException ex)
            {
            }
        }

        [Test]
        public void TestNpcTypeDropdownPopulatesAncestrys()
        {
            driver.Url = (pageUrl);
            IWebElement selectNpcAncestery = driver.FindElement(By.Id("selectNpcAncestery"));
            SelectElement selectElement = new SelectElement(selectNpcAncestery);

            try
            {
                Assert.AreEqual(ancestryTypes.Length, selectElement.Options.Count);

                string selection;
                for (int i = 0; i < ancestryTypes.Length; i++)
                {
                    selection = ancestryTypes[i];
                    selectElement.SelectByText(selection);
                    Assert.AreEqual(selection, selectNpcAncestery.GetAttribute("value"));
                }
            }
            catch (AssertionException ex)
            {

            }
        }

        [Test]
        public void TestNpcTypeDropdownPopulatesCharacterClasses()
        {
            driver.Url = (pageUrl);
            IWebElement selectNpcType = driver.FindElement(By.Id("selectNpcType"));
            SelectElement selectElement = new SelectElement(selectNpcType);

            try
            {
                Assert.AreEqual(classTypes.Length, selectElement.Options.Count);

                string selection;
                for (int i = 0; i < classTypes.Length; i++)
                {
                    selection = classTypes[i];
                    selectElement.SelectByText(selection);
                    Assert.AreEqual(selection, selectNpcType.GetAttribute("value"));
                }

            }
            catch (AssertionException ex)
            {

            }
        }

        [Test]
        public void TestNpcTypeDropdownPopulatesLevels()
        {
            driver.Url = (pageUrl);
            IWebElement selectNpcLevel = driver.FindElement(By.Id("selectNpcLevel"));
            SelectElement selectElement = new SelectElement(selectNpcLevel);

            try
            {
                Assert.AreEqual(21, selectElement.Options.Count);
                string selection;
                for (int i = 0; i < 21; i++)
                {
                    if (i == 0)
                    {
                        selection = "Random";
                    }
                    else
                    {
                        selection = i.ToString();
                    }

                    selectElement.SelectByText(selection);
                    Assert.AreEqual(selection, selectNpcLevel.GetAttribute("value"));
                }
            }
            catch (AssertionException ex)
            {

            }
        }

        [Test]
        public void DefaultOptionsGenerateCharacter()
        {
            driver.Url = (pageUrl);
            IWebElement btnGenerateNpc = driver.FindElement(By.Id("btnGenerateNpc"));
            IWebElement textareaGeneratedNpcs = driver.FindElement(By.Id("textareaGeneratedNpcs"));

            try
            {
                btnGenerateNpc.Click();
                string npcGenerated = textareaGeneratedNpcs.GetAttribute("value");
                StringAssert.Contains("Creating New Npc:", npcGenerated);
            }
            catch (AssertionException ex)
            {

            }
        }


        [Test]
        public void SelectedOptionsGenerateCharactersCorrectly()
        {
            driver.Url = (pageUrl);
            IWebElement selectNpcLevel = driver.FindElement(By.Id("selectNpcLevel"));
            IWebElement selectNpcType = driver.FindElement(By.Id("selectNpcType"));
            IWebElement selectNpcAncestery = driver.FindElement(By.Id("selectNpcAncestery"));
            IWebElement btnGenerateNpc = driver.FindElement(By.Id("btnGenerateNpc"));
            IWebElement textareaGeneratedNpcs = driver.FindElement(By.Id("textareaGeneratedNpcs"));
            Character[] characters = new Character[] { };

            try
            {
                btnGenerateNpc.Click();
                string npcGenerated = textareaGeneratedNpcs.GetAttribute("value");
                StringAssert.Contains("Creating New Npc:", npcGenerated);
            }
            catch (AssertionException ex)
            {

            }
        }

        [OneTimeTearDown]
        public void Close()
        {
            driver.Close();
        }

        #region Support Methods
        public Character CreateCharacter(string ancestery, string characterClass, string level)
        {
            return new Character(ancestery, characterClass, level);
        }

        #endregion Support Methods
    }

    public class Character
    {
        public string ancestry;
        public string characterClass;
        public string level;

        public string[] items;

        public Character(string ancestery, string characterClass, string level)
        {
            ancestery = this.ancestry;
            characterClass = this.characterClass;
            level = this.level;
        }
    }
}