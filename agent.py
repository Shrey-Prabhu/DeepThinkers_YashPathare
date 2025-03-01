from phi.agent import Agent
from phi.model.groq import Groq
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools
from phi.tools.duckduckgo import DuckDuckGo
from dotenv import load_dotenv

load_dotenv()

web_agent = Agent(
    name = 'Web Agent',
    model = Groq(id = 'llama-3.3-70b-versatile'),
    tools = [DuckDuckGo()],
    instructions = ['Always include sources'],
    show_tool_calls = True,
    markdown = True
)

finance_agent = Agent(
    model = Groq(id = 'llama-3.3-70b-versatile'),   
    role = 'Get financial data',
    tools = [YFinanceTools(stock_price = True, analyst_recommendations = True, company_info = True)],
    show_tool_calls = True,
    markdown = True,
    instructions = ['Use tables to display data']
)

agent = Agent( 
    model = Groq(id = 'llama-3.3-70b-versatile'),
    team = [web_agent, finance_agent],
    instructions = ['Always include sources', 'Use tables to display data'],
    show_tool_calls = True,
    markdown = True
)

agent.print_response('Summarize and compare analyst recommendations and recommend which stock I should purchase from NVDA, TSLA, MSFT', stream = True)